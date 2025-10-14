// src/layouts/RootLayout.tsx
import React from "react";
import NavBarMenuApp from "../components/NavBarMenu";
import FooterApp from "../components/FooterBar";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBarMenuApp />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <FooterApp />
    </div>
  );
};

export default RootLayout;
