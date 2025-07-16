import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_layout-admin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[rgb(var(--dashboard-content))] overflow-hidden">
      <div className="w-full border-b p-4 gap-4 bg-[rgb(var(--dashboard-header))] fixed z-20">
        {/* <AdminSidebarToggle /> */}
      </div>
      <div className="m-4 h-full mt-20">
        <Outlet />
      </div>
    </main>
  );
}
