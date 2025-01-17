import { createFileRoute } from "@tanstack/react-router";
import Profile from "../../components/pages/Profile";

export const Route = createFileRoute("/Profile/ProfileRoute")({
  component: Profile,
});
