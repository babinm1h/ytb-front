import React, { useEffect } from 'react';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Spinner from './components/Loaders/Spinner';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { getAuth } from './redux/thunks/auth.thunks';

const App = () => {
  const dispatch = useAppDispatch()
  const { isInitializing } = useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(getAuth())
  }, [dispatch])

  if (isInitializing) return <div className="w-full h-screen flex items-center justify-center">
    <Spinner />
  </div>

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;