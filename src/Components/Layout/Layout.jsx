import { useEffect, useMemo } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAfterGoogleAuth,
  setAccessToken,
} from '../../store/user/user.action';

const Layout = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.user?.user?.accessToken);
  const query = new URLSearchParams(search);
  const queryAccessToken = query.get('accessToken');

  const memoizedAueryAccessToken = useMemo(
    () => queryAccessToken,
    [queryAccessToken]
  );
  const memoizedAccessToken = useMemo(() => accessToken, [accessToken]);

  useEffect(() => {
    if (memoizedAueryAccessToken) {
      dispatch(setAccessToken(memoizedAueryAccessToken));
      navigate('/', { replace: true });
    }

    if (!memoizedAueryAccessToken && memoizedAccessToken) {
      dispatch(getUserAfterGoogleAuth());
    }
  }, [memoizedAueryAccessToken, memoizedAccessToken]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
