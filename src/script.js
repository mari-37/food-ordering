import React from "react" ;
import ReactDOM from "react-dom/client" ;
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About" ;
import Error from "./Components/Error";
import Help from "./Components/Help" ;
import MenuItems from "./Components/MenuItems";
import { Suspense } from "react";
import { lazy } from "react";

const Grocerry = lazy(()=>import("./utils/Grocerry")) ;

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    ) ;
} ;

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
         { 
            path: "/",
            element:<Body />
        },
        {
            path: "/home",
            element:<Body />
        },
        {
            path: "/about",
            element:<About />
        },
        {
            path: "/help",
            element:<Help />
        },
        {
            path:"/restaurants/:resId",
            element:<MenuItems />
        },
        {
            path: "/grocerry",
            element:<Suspense fallback={<h1>Loading...!plz wait.</h1>}> <Grocerry /></Suspense>
        },
    ],
    errorElement :<Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
