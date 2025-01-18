import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React, { useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <>
        <header className="p-2 flex gap-4 bg-gray-800 text-white">
          <Link
            to="/Home/HomeRoute"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          {/* Visa dessa länkar endast om användaren är inloggad */}
          {isLoggedIn && (
            <>
              <Link
                to="/Dashboard/DashboardRoute"
                activeProps={{
                  className: "font-bold",
                }}
              >
                Dashboard
              </Link>
            
              <Link
                to="/Profile/ProfileRoute"
                activeProps={{
                  className: "font-bold",
                }}
              >
                Profile
              </Link>
          
            </>
          )}

          {/* Login/Logout-knapp */}
          <button
            onClick={() => setIsLoggedIn((prev) => !prev)}
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
          >
            {isLoggedIn ? "Logga ut" : "Logga in"}
          </button>
        </header>

        <main className="p-4">
          <Outlet /> {/* Renderar barnrutter */}
        </main>

        <footer className="p-4 text-center bg-gray-200">
          <p>© 2025 RegisterCheck</p>
        </footer>

        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  },
});
