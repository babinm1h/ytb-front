import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './components/AppRoutes/AppRoutes';
import { useAppSelector } from './hooks/useAppSelector';
import { getAuth } from './redux/thunks/auth.thunks';

const App = () => {
  const dispatch = useDispatch()
  const { isInitializing } = useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(getAuth() as any)
  }, [dispatch])

  if (isInitializing) return <div className="">loadin</div>

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;