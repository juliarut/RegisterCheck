import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigeringsmeny */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/dashboard" className="[&.active]:font-bold">
            Dashboard
          </Link>
          <Link to="/add-employee" className="[&.active]:font-bold">
            Add Employee
          </Link>
          <Link to="/notifications" className="[&.active]:font-bold">
            Notifications
          </Link>
          <Link to="/profile" className="[&.active]:font-bold">
            Profile
          </Link>
        </nav>
      </header>

      {/* Huvudinnehåll */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p>© 2025 RegisterCheck</p>
      </footer>

      {/* Router devtools */}
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
};

export default RootLayout;
