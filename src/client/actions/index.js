export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const FETCH_CURRENT_USER = 'fetch_users';

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_users');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
