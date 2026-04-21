import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";

import { router } from "@/app/router";
import { RouteSecurityProvider } from "@/app/router/providers/router-provider";

export const MainProvider = () => (
  <StrictMode>
    <RouteSecurityProvider>
      <RouterProvider router={router} />
    </RouteSecurityProvider>
  </StrictMode>
);
