import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);