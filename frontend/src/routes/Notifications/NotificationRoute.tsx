import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Notifications/NotificationRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Notifications/NotificationRoute"!</div>
}
