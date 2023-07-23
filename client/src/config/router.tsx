import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Layout from "../components/Layout/Layout";
import Signup from "../views/Signup/Signup";
import Signin from "../views/Signin/Signin";
import AddNewBook from "../views/AddNewBook/AddNewBook";
import BookDetails from "../views/BookDetails/BookDetails";
import EditBook from "../views/EditBook/EditBook";
import AllBooks from "../views/AllBooks/AllBooks";
import RequiredAuth from "../components/RequiredAuth/RequiredAuth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home /></Layout>,
    },
    {
        path: "/all-books",
        element: <Layout><AllBooks /></Layout>,
    },
    {
        path: "/book/:bookId",
        element: <Layout><BookDetails /></Layout>,
    },
    {
        path: "/edit-book/:bookId",
        element: <Layout><EditBook /></Layout>,
    },
    {
        path: "/signin",
        element: <Layout><Signin /></Layout>,
    },
    {
        path: "/signup",
        element: <Layout><Signup /></Layout>,
    },
    {
        path: "/add-new-book",
        element: <RequiredAuth><Layout><AddNewBook /></Layout></RequiredAuth>,
    },
]);