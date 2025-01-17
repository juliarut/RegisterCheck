import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link
          to="/Home/HomeRoute"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link to="/Dashboard/DashboardRoute"></Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
