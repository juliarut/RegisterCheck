import { createFileRoute } from '@tanstack/react-router'
import Notifications from '../../components/pages/Notifications'

export const Route = createFileRoute('/Notifications/NotificationRoute')({
  component: Notifications,
})
