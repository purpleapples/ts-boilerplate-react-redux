import * as React from 'react';
import { Loader } from './features/loader/Loader';
import { Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';
import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';
import RegisterPage from './pages/register.page';
import BoardPage from './pages/board.page';
import ForgotPasswordPage from './pages/forgot-password.page';
import ResetPasswordPage from './pages/reset-password.page';
import RegisterBoardPage from './pages/board.add.page';
const Modal = React.lazy(() => import('./components/modals/Modal'));
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
    <ToastContainer />
      <Navbar />
      <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='board' element={<BoardPage />} />
          <Route path='board/add' element={<RegisterBoardPage />} />
          <Route path='register' element={<RegisterPage />} />          
          <Route path='forgotpassword' element={<ForgotPasswordPage />} />
          <Route path='resetpassword' element={<ResetPasswordPage />}>
            <Route path=':resetToken' element={<ResetPasswordPage />} />
          </Route>
      </Routes>
      <Modal />
      
    </React.Suspense>
  );
};

export default App;
