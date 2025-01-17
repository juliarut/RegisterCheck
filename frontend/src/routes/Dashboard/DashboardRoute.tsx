import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/DashboardRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Dashboard/DashboardRoute"!</div>
}
