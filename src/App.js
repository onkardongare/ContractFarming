import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { createContext, useEffect ,useState} from "react";
import AlertTemplate from 'react-alert-template-basic';
import { positions, Provider } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuthAsync, selectLoggedInUser, selectUserChecked } from './features/auth/authSlice';


import DefaultPage from "./pages/DefaultPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageNotFound from './pages/404Page';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Protected from './features/auth/component/Protected';
import LogOut from './features/auth/component/Logout'
import ResetPasswordPage from './pages/ResetPasswordPage';
import ContactPage from './pages/ContactPage';


const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <DefaultPage></DefaultPage>
    ),
  },
  {
    path: '/contact',
    element: (
        <ContactPage></ContactPage>
    ),
  },
  {
    path: '/home',
    element: (
        <Protected>
               <HomePage></HomePage>
        </Protected>
    ),
  },
  {
     path: '/logout',
     element: <LogOut></LogOut>

  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage></ResetPasswordPage>
  },
  {
    path:'/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  const userChecked = useSelector(selectUserChecked)

  useEffect(()=>{
    dispatch(checkAuthAsync());
  },[dispatch])

  return (
    <>
    { userChecked && 
       <div className="App">
          <Provider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
          </Provider>
        
        {/* Link must be inside the Provider */}
      </div>
    }   
    </>
  );
}

export default App;
