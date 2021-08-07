import users from "../../users.json";
import _ from "lodash";

export const fetchLoginUser = (username, password) => {
  return _.find(users, { username: username, password: password });
};