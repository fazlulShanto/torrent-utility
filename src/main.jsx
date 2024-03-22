import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Todo from "./pages/Todo.jsx";
import Notfound from "./pages/Notfound.jsx";
import Home from "./pages/Home.jsx";
import ViewTorrentDetails from "./pages/ViewTorrentDetails.jsx";
import Layout from "./components/Layout/Layout.jsx";
import CompareFiles from "./pages/CompareFiles.jsx";
import CreateMarkdown from "./pages/CreateMarkdown.jsx";
import Livedetails from "./pages/Livedetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,

        errorElement: <Notfound />,

        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "view-details",
                element: <ViewTorrentDetails />,
            },
            {
                path: "compare",
                element: <CompareFiles />,
            },
            {
                path: "markdown",
                element: <CreateMarkdown />,
            },
            {
                path: "live-details",
                element: <Livedetails />,
            },
            {
                path: "others",
                element: <Todo />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <App /> */}
    </React.StrictMode>
);
