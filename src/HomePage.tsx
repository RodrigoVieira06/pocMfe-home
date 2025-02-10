import React from "react";
import Header from "./components/Header/Header";
import SideNav from "./components/Sidenav/SideNav";
import DashboardLoader from "./components/loader/DashboardLoader";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
        <SideNav />
        <main style={{ flex: 1, padding: "20px" }}>
          <DashboardLoader />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
