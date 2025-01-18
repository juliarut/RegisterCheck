import SideBar from "../sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <SideBar isLoggedIn={true} setIsLoggedIn={() => {}} children={<div />} />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Välkommen till din dashboard. Här kan du hantera dina anställda och se
          deras utdragsstatus.
        </p>
      </main>
    </div>
  );
}
