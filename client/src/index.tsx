import * as React from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toast } from "@usy-ui/base";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@usy-ui/base/dist/styles.css";
import { About } from "./pages/about";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
  },
]);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Toast />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
