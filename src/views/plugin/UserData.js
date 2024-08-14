import Cookie from "js-cookie";
import jwtDecode from "jwt-decode";

function UserData() {
  let access_token = Cookie.get("access_token");
  let refresh_token = Cookie.get("refresh_token");

  if (access_token) {
    const decoded = jwtDecode(access_token);
    return decoded;
  }
  return {};
}

export default UserData;
