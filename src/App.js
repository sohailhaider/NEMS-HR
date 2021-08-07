import DashboardLayout from "./pages/DashboardLayout";
import PublicPageLayout from "./pages/PublicPageLayout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/users">
        <DashboardLayout headerTitle="Users">Users</DashboardLayout>
      </Route>
      <Route path="/login">
        <PublicPageLayout headerTitle="Login">Login</PublicPageLayout>
      </Route>
      <Route path="/">
        <DashboardLayout headerTitle="Dahboard">Dashboad</DashboardLayout>
      </Route>
    </Switch>
  );

  // <DashboardLayout>Dashboard</DashboardLayout>;
}

export default App;
