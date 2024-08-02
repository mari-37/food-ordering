import React from "react" ;
import ReactDOM from "react-dom/client" ;
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About" ;
import Error from "./Components/Error";
import Help from "./Components/Help"


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
            path: "/about",
            element:<About />
        },
        {
            path: "/home",
            element:<Body />
        },
        {
            path: "/help",
            element:<Help />
        },
    ],
    errorElement :<Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
