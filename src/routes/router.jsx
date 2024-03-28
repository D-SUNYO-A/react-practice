import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";
import AppLayout from "../layouts/AppLayout";

// Containers
import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";
import Dashboard from "../containers/app/Dashboard";
import User from "../containers/app/User";
import Setting from "../containers/app/Setting";
import Counter from "../containers/app/Counter";
import ErrorPage from "../containers/error-page/ErrorPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Public Routes */}
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Private Routes for */}
      {/* /app */}
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<User />} />
        <Route path="setting" element={<Setting />} />
        <Route path="counter" element={<Counter />} />
      </Route>

      {/* Error Route */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
