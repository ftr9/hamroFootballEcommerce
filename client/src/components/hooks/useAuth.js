import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const isAuthenticating = useSelector(
    store => store.userInfo.isAuthenticating
  );
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch({ type: 'CHECK_AUTH' });
      const userInfo = await axios.get('/api/v1/hamrofootball/userInfo');
      if (userInfo.data !== false) {
        dispatch({ type: 'LOGGED_USER', body: userInfo.data });
      } else {
        dispatch({ type: 'NOT_LOGGED_USER' });
      }
    })();
  }, [dispatch]);

  return { isAuthenticating };
};

export default useAuth;
