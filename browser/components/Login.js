import React from 'react';
import { connect } from'react-redux';
import { browserHistory } from 'react-router';
import { login } from '../redux/login'

/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.email = this.props.email;
    this.password = this.props.password;
    console.log(this.props);
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
    this.email = event.target.email.value;
    this.password = event.target.password.value;
    console.log('loginsubmit: ', this.email, this.password);
    this.props.login({'email': this.email, 'password': this.password});
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({ message: 'Log in', email: state.login.email, password: state.login.password });
const mapDispatch = (dispatch) => {
  return {
    login(obj) {
      dispatch(login(obj));
    }
  }
}

export default connect(mapState, mapDispatch)(Login);
