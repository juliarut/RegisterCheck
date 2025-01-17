import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "./__root";
import { Route as HomeRoute } from "./Home/HomeRoute";
import { Route as DashboardRoute } from "./Dashboard/DashboardRoute";
import { Route as AddEmployeeRoute } from "./AddEmployee/AddEmployeeRoute";
import { Route as NotificationRoute } from "./Notifications/NotificationRoute";
import { Route as ProfileRoute } from "./Profile/ProfileRoute";

export const rootRoute = createRootRoute({
  component: RootLayout, // Tilldelar RootLayout som wrapper
});

export const routeTree = rootRoute.addChildren([
  HomeRoute,
  DashboardRoute,
  AddEmployeeRoute,
  NotificationRoute,
  ProfileRoute,
]);
