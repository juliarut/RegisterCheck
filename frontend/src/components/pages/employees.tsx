import React, { useEffect, useState } from "react";

interface Employee {
  id: number;
  name: string;
  status: string;
  expiration: string;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5038/api/Employee")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const formattedEmployees = data.map((employee: any) => {
          const expirationDate = new Date(employee.registerDate);
          expirationDate.setFullYear(expirationDate.getFullYear() + 1);

          const daysRemaining =
            (expirationDate.getTime() - new Date().getTime()) /
            (1000 * 60 * 60 * 24);

          let status = "Giltigt";
          if (daysRemaining <= 30 && daysRemaining > 0) {
            status = "Snart förfallet";
          } else if (daysRemaining <= 0) {
            status = "Förfallet";
          }

          return {
            id: employee.id,
            name: employee.name,
            expiration: expirationDate.toISOString().split("T")[0],
            status,
          };
        });
        setEmployees(formattedEmployees);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ml-48">Anställda</h1>
      <table className="border-collapse border border-gray-300 ml-48">
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
