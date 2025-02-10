import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const RemoteDashboard = lazy(() => import("dashboardApp/DashboardPage"));

const DashboardLoader: React.FC = () => {
  return (
    <Suspense fallback={<div>Carregando Dashboard...</div>}>
      <Routes>
        <Route path="/dashboard" element={<RemoteDashboard />} />
      </Routes>
    </Suspense>
  );
};

export default DashboardLoader;
