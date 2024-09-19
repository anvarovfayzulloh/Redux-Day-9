import { Routes, useRoutes } from "react-router-dom";
import { lazy } from "react";
import { SuspenseComponent as Suspense  } from "../utils";
import Nav from '../components/nav/Nav';

const Home = lazy(() => import('../routes/home/Home'));
const Profile = lazy(() => import('../routes/dashboard/profile/Profile'));
const Auth = lazy(() => import('../routes/auth/Auth'));
const Login = lazy(() => import('../routes/auth/login/Login'));
const SignUp = lazy(() => import('../routes/auth/signup/SignUp'));
const NotFound = lazy(() => import('../routes/not-found/NotFound'));
const Private = lazy(() => import('../routes/private/Private'));
const SingleProduct = lazy(() => import('../components/singleProduct/SingleProduct'))
const AllUsers = lazy(() => import('./dashboard/allUser/AllUsers'))
const Dashboard = lazy(() => import('./dashboard/Dashboard'))

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
);

const RouteController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout><Suspense><Home/></Suspense></Layout>
    },
    {
      path: "/dashboard",
      element: <Suspense><Private/></Suspense>,
      children: [
        {
          path: "/dashboard/",
          element: <Suspense><Dashboard/></Suspense>,
          children: [
            {
              path: "/dashboard/profile",
              element: <Suspense><Profile/></Suspense>
            },
            {
              path: "/dashboard/allUsers",
              element: <Suspense><AllUsers/></Suspense>
            },
          ]
        },
      ]
    },
    {
      path: "/allUsers",
      element: <Layout><Suspense><AllUsers/></Suspense></Layout>
    },
    {
      path: "/product/:id",
      element: <Layout><Suspense><SingleProduct/></Suspense></Layout>,
    },
    {
      path: "/auth",
      element: <Layout><Suspense><Auth/></Suspense></Layout>,
      children: [
        {
          path: "/auth/login",
          element: <Suspense><Login/></Suspense>
        },
        {
          path: "/auth/signup",
          element: <Suspense><SignUp/></Suspense>
        }
      ]
    },
    {
      path: "*",
      element: <Suspense><NotFound/></Suspense> 
    }
  ]);
}

export default RouteController;
