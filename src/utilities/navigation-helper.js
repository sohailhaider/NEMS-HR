import history from "./history";
export const redirectToDashboard = () => {
  return history.push("/");
};

export const redirectToUsers = () => {
  return history.push("/users");
};

export const redirectToLogin = () => {
  return history.push("/login");
};
