import { createFileRoute } from "@tanstack/react-router";
import AddEmployee from "../../components/pages/AddEmployee";

export const Route = createFileRoute("/AddEmployee/AddEmployeeRoute")({
  component: AddEmployee,
});
