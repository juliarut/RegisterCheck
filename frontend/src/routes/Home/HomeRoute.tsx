import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Home/HomeRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Home/HomeRoute"!</div>
}
