import { createBrowserRouter, useLocation } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import ForgotPassword from "../components/LoginComponents/ForgotPassword";
import ResetPassword from "../components/LoginComponents/ResetPassword";
import BlacklistIP from "../components/HomeComponents/BlacklistIP";
import WhiteListIP from "../components/HomeComponents/WhiteList/WhiteListIP";
import AdminIp from "../components/HomeComponents/AdminCom/AdminIP";
import LoggedInUser from "../components/HomeComponents/LoggedInUser";


export const router = createBrowserRouter([


    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:(
                    // <ProtectedRoute>
                        <Home/>
                    // </ProtectedRoute>
                )
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
            path:"/forgot-password",
            element :<ForgotPassword/>
            },
            {
                path:"/reset-password",
                element:<ResetPassword/>
            },
            {
                path: '/blacklistIP',
                element: <BlacklistIP/>
            },
            {
                path: '/whitelistIP',
                element: <WhiteListIP/>
            },
            {
                path:'/adminLoginIP',
                element:<AdminIp/>
            },
            {
                path: '/loggedInUsers',
                element:<LoggedInUser/>
            }
        ]
    }
])