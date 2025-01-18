function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg text-gray-600 mb-6">
        Välkommen! Här kan du hantera dina anställda och deras utdrag.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Totalt Anställda</h2>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Snart Förfallna</h2>
          <p className="text-2xl font-bold text-yellow-500">5</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Förfallna</h2>
          <p className="text-2xl font-bold text-red-500">2</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
