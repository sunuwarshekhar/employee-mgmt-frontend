import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout-admin/company/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/_layout-admin/company/edit/"!</div>
}
