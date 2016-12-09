import React from 'react';
import { connect } from'react-redux';
import { browserHistory } from 'react-router';
import { login } from '../redux/login'

/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
            <form onSubmit={this.onLoginSubmit}>
                <div className="form-group">
                  <label>email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      required
                    />
                </div>
                <button type="submit" className="btn btn-block btn-primary">{message}</button>
            </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a target="_self"
               href="/auth/google"
               className="btn btn-social btn-google">
            <i className="fa fa-google"></i>
            <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    const { message } = this.props.message;
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log('loginsubmit: ', email, password);
    this.props.login({'email': email, 'password': password});
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({ message: 'Log in'});
const mapDispatch = (dispatch) => {
  return {
    login(obj) {
      dispatch(login(obj));
      browserHistory.push('/');
    }
  }
}

export default connect(mapState, mapDispatch)(Login);
