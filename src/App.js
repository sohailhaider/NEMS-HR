import DashboardLayout from "./pages/DashboardLayout";
import PublicPageLayout from "./pages/PublicPageLayout";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
  return (
    <Switch>
      <Route path="/users">
        <DashboardLayout headerTitle="Users">
          <UsersPage />
        </DashboardLayout>
      </Route>
      <Route path="/login">
        <PublicPageLayout headerTitle="Login">
          <LoginPage />
        </PublicPageLayout>
      </Route>
      <Route path="/">
        <DashboardLayout headerTitle="Dashboard">
          <DashboardPage />
        </DashboardLayout>
      </Route>
    </Switch>
  );

  // <DashboardLayout>Dashboard</DashboardLayout>;
}

export default App;
