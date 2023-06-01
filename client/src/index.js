import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import LogIn from './pages/Authentication/LogIn';
import SignIn from './pages/Authentication/SignIn';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//all for admin
import Adminapp from './pages/admin/AdminApp';
import AdminProgram from './pages/admin/ManageProgram/AdminAllProgram';
import AdminAddProgram from './pages/admin/ManageProgram/AdminAddProgram';
import EditProgram from './pages/admin/ManageProgram/AdminEditProgram';
import AdminSeeComments from './pages/admin/ManageUser/AdminSeeComments';
import AdminUser from './pages/admin/ManageUser/AdminUser';
import UserApp from './pages/Users/Userapp';
import Try from './try';
import Question from './utilities/QuestionById';
import UserHome from './pages/Users/UserHome';
import Adminhome from './pages/admin/AdminHome';
import CreateList from './pages/List/createList';
import MangeCatagroy from './pages/admin/ManageProgram/MangeCatagory/AddDeleteCatagrory';
import MangeLanguge from './pages/admin/ManageProgram/MangeLanguage/AddDeleteLanguage';

import AddQuestion from "./RP/AddQuestion";



const appRouter = createBrowserRouter([
  {
    path:"/rp",
    element:<AddQuestion />
  },
  {
    path: "/LogIn",
    element: <LogIn />
  },
  {
    path: "/SignIn",
    element: <SignIn />
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Adminapp />,
    children: [
      {
        path:"",
        element:<Adminhome/>
      },
      
      {
        path: "Program",
        children: [
          {
            path: "",
            element: <AdminProgram />
          },
          {
            path: "Addprogram",
            element: <AdminAddProgram />
          }
          ,
          {
            path:"MangeCatagory",
            element:<MangeCatagroy/>
          },
          {
            path:"MangeLanguage",
            element:<MangeLanguge/>
          },
          {
            path: "EditProgram/:id",
            element: <EditProgram />
          }
        ]
        ,
      }
      ,
      {
        path: "HandleUSer",
        children: [
          {
            path: "",
            element: <AdminSeeComments />

          },
          {
            path: "MangeUser",
            element: <AdminUser />
          },
         
        ]
      }

    ]
  },
  {
    path: "/User",
    element: <UserApp />,
    children: [
      {
        path:"home",
        element:<UserHome></UserHome>
      },
      {
        path: "/User/Question/:id",
        element: <Question />
      }
    ]
  },
  {
    path: "/try",
    element: <CreateList />
  }








])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
