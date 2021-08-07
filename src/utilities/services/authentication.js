import users from "../../users.json";
import _ from "lodash";

export const fetchLoginUser = (email, password) => {
  return _.find(users, { email: email, password: password });
};