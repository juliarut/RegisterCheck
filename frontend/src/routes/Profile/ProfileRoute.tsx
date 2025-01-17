import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Profile/ProfileRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Profile/ProfileRoute"!</div>
}
