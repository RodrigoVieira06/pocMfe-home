// home-app/src/DashboardLoader.tsx
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Carrega dinamicamente o MFE dashboard a partir do dashboard-app
// O nome "dashboardApp/DashboardPage" deve corresponder ao que foi exposto em dashboard-app
const RemoteDashboard = lazy(() => import("dashboardApp/DashboardPage"));

const DashboardLoader: React.FC = () => {
  return (
    <Suspense fallback={<div>Carregando Dashboard...</div>}>
      <Routes>
        <Route path="/dashboard" element={<RemoteDashboard />} />
        {/* Outras rotas para novos MFEs podem ser adicionadas aqui */}
      </Routes>
    </Suspense>
  );
};

export default DashboardLoader;
