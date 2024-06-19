import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Todo from "./pages/Todo.jsx";
import Notfound from "./pages/Notfound.jsx";
import Home from "./pages/Home.jsx";
import ViewTorrentDetails from "./pages/ViewTorrentDetails.jsx";
import Layout from "./components/Layout";
import CompareFiles from "./pages/CompareFiles.jsx";
import Markdown from "./pages/Markdown.jsx";
import Livedetails from "./pages/Livedetails.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Decoder from "./pages/Decoder.jsx";

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
        element: <Markdown />,
      },
      {
        path: "live-details",
        element: <Livedetails />,
      },
      {
        path: "decoder",
        element: <Decoder />,
      },
      {
        path: "others",
        element: <Todo />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </QueryClientProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
