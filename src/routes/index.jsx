import Dashboard from "@/pages/Dashboard";
import Settings from "@/pages/Settings";
import Jobs from "@/pages/Jobs";
import Layout from "@/components/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);
export default router;
