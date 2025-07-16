import CompanyAddEdit from "@/features/Company/CompanyAddEdit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_layout-admin/company/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CompanyAddEdit />;
}
