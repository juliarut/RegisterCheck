import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/Index")({
  component: Index,
});

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Välkommen till RegisterCheck</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
        Hantera och spåra dina anställdas utdrag ur belastningsregistret enkelt
        och smidigt.
      </p>
      <Link to="/Login/LoginRoute">
        <Button className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600">
          Logga in
        </Button>
      </Link>
    </div>
  );
}
