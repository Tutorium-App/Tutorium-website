import React, { Suspense } from "react";
import Navbar from "./components/NavContainer/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/model/ErrorPage";
import ErrorBoundary from "./components/model/ErrorBoundary";
import Home from "./container/pages/Home";
import Perspective from "./components/Pers/Perspective";

const App = () => {
  const Layout = ({ children }) => {
    return (
      <main className="App">
        <Navbar />
        {/* <Home /> */}
        {children}
        <Perspective />
      </main>
    );
  };

  // set up router
  const router = createBrowserRouter([
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/",
      element: <Layout children={<Home />} />,
    },
  ]);

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<h2>Loading</h2>}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
