import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
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
        <Link
          to="/Dashboard/DashboardRoute"
          activeProps={{
            className: "font-bold",
          }}
        >
          Dashboard
        </Link>
        <Link
          to="/Notifications/NotificationRoute"
          activeProps={{
            className: "font-bold",
          }}
        >
          Notifications
        </Link>
        <Link
          to="/Profile/ProfileRoute"
          activeProps={{
            className: "font-bold",
          }}
        >
          Profile
        </Link>
        <Link
          to="/AddEmployee/AddEmployeeRoute"
          activeProps={{
            className: "font-bold",
          }}
        >
          Add Employee
        </Link>
        <Link
          to="/Login/LoginRoute"
          activeProps={{
            className: "font-bold",
          }}
        >
          Login
        </Link>
      </header>
      <main className="p-4">
        <Outlet /> {/* Renderar barnrutter */}
      </main>
      <footer className="p-4 text-center bg-gray-200">
        <p>© 2025 RegisterCheck</p>
      </footer>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
