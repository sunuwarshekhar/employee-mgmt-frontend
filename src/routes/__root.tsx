// meta tags
// import Meta from "@/components/meta";

import * as React from "react";

// toaster component
// import { Toaster } from "@/components/ui/sonner";

// react router
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      {/* <Meta /> */}
      <Outlet />
      {/* <Toaster richColors duration={3000} closeButton theme="light" /> */}
    </React.Fragment>
  );
}
