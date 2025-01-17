import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/AddEmployee/AddEmployeeRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/AddEmployee/AddEmployeeRoute"!</div>
}
