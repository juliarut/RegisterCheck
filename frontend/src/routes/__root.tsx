import SideBar from "@/components/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React, { useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <>
        <SideBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
          <main className="p-4">
            <Outlet /> {/* Renderar barnrutter */}
          </main>
        </SideBar>

        <footer className="p-4 text-center bg-gray-200">
          <p>© 2025 RegisterCheck</p>
        </footer>

        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  },
});
