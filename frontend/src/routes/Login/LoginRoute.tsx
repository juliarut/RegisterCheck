import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/components/LoginForm";

export const Route = createFileRoute('/Login/LoginRoute')({
  component: LoginPage,
});
