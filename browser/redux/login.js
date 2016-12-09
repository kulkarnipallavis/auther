import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const setUser = user => ({ type: SET_CURRENT_USER, user });

/* ------------       REDUCER     ------------------ */

export default function reducer (login = {user: {}}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      login.user = action.user
      return login;

    default:
      return login;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const login = (req) => dispatch => {
  axios.post('/login', req)
       .then(res => dispatch(setUser(res.data)));
}

export const logout = (req) => dispatch => {
  axios.get('/logout')
       .then(res => dispatch(setUser({})));
}

export const userInfo = () => (dispatch, getState) => {
  return getState().login.user;
}
