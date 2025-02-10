// home-app/src/HomePage.tsx
import React, { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import SideNav from "./components/Sidenav/SideNav";
import { Routes, Route, Navigate } from "react-router-dom";

const RemoteDashboard = lazy(() => import("dashboardApp/DashboardPage"));
const RemoteTemplate = lazy(() => import("templateApp/TemplateApp"));

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
        <SideNav />
        <main style={{ flex: 1, padding: "20px" }}>
          <Suspense fallback={<div>Carregando...</div>}>
            <Routes>
              <Route path="/" element={<RemoteDashboard />} />
              <Route path="/template" element={<RemoteTemplate />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
