import { createFileRoute } from "@tanstack/react-router";
import Employees from "@/components/pages/employees";

export const Route = createFileRoute("/Employees/EmployeesRoute")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/Employees/EmployeesRoute"!</div>;
}
