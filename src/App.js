import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/error/Error";
import { Login } from "./components/forms/Login";
import { SignUp } from "./components/forms/SignUp";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/home/Navbar";
import { AuthProvider } from "./components/hook/AuthProvider";
import { Profile } from "./components/protected/Profile";
import { ProtectedLayout } from "./components/protected/ProtectedLayout";
import { SettingDetail } from "./components/protected/SettingDetail";
import { SettingPage } from "./components/protected/SettingPage";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/SignUp",
          element: <SignUp />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
      ],
    },
    {
      path: "profile",
      element: (
        <ProtectedLayout>
          <Profile />
        </ProtectedLayout>
      ),
    },
    {
      path: "/profile/settings",
      element: (
        <ProtectedLayout>
          <SettingPage />
        </ProtectedLayout>
      ),
    },
    {
      path: "/profile/settings/detail",
      element: (
        <ProtectedLayout>
          <SettingDetail />
        </ProtectedLayout>
      ),
    },
  ]);
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
