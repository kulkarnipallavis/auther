import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const setUser = user => ({ type: SET_CURRENT_USER, user });

/* ------------       REDUCER     ------------------ */

export default function reducer (login = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      login.user = action.user
      return login;

    default:
      return login;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const signup = (req) => dispatch => {
  axios.post('/users', req)
       .then(res => dispatch(setUser(res.data)));
}
