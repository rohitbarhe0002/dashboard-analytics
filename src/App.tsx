import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader";

import "./css/style.css";
import "./charts/ChartjsConfig";

const Dashboard = lazy(() => import("./pages/Dashboard"));

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0 });
      htmlElement.style.scrollBehavior = "";
    }
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default App;
