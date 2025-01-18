export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4 font-bold text-lg">Admin Panel</div>
      <nav>
        <ul>
          <li>
            <a href="/" className="block p-4 hover:bg-gray-700">
              Översikt
            </a>
          </li>
          <li>
            <a href="/employees" className="block p-4 hover:bg-gray-700">
              Anställda
            </a>
          </li>
          <li>
            <a href="/employees/add" className="block p-4 hover:bg-gray-700">
              Lägg till anställd
            </a>
          </li>
          <li>
            <a href="/settings" className="block p-4 hover:bg-gray-700">
              Inställningar
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
