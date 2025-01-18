export default function Employees() {
  const employees = [
    {
      id: 1,
      name: "Anna Andersson",
      status: "Giltigt",
      expiration: "2025-12-31",
    },
    {
      id: 2,
      name: "Erik Eriksson",
      status: "Snart förfallet",
      expiration: "2024-03-01",
    },
    {
      id: 3,
      name: "Maria Svensson",
      status: "Förfallet",
      expiration: "2023-11-01",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Anställda</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">ID</th>
            <th className="border border-gray-300 p-2 text-left">Namn</th>
            <th className="border border-gray-300 p-2 text-left">Status</th>
            <th className="border border-gray-300 p-2 text-left">
              Giltigt till
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-300 p-2">{employee.id}</td>
              <td className="border border-gray-300 p-2">{employee.name}</td>
              <td className="border border-gray-300 p-2">{employee.status}</td>
              <td className="border border-gray-300 p-2">
                {employee.expiration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
