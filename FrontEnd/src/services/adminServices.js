import { stringify } from "querystring";
import http from "./httpService";
import Axios from "axios";

export function adminRegister(reqBody) {
  alert("posting");

  return http.post("http://localhost:4000/admin/signup", stringify(reqBody));
}
export async function adminLogin(reqBody) {
  console.log(reqBody);

  return await http.post(
    "http://localhost:4000/admin/login",
    stringify(reqBody)
  );
}
export async function adminEditEmail(reqBody) {
  alert("edit email");
  console.log(reqBody);

  return await http.put(
    "http://localhost:4000/admin/edit/email",
    stringify(reqBody)
  );
}
export async function adminEditPhone(reqBody) {
  console.log(reqBody);

  return await http.put(
    "http://localhost:4000/admin/edit/phone",
    stringify(reqBody)
  );
}
export async function adminEditPassword(reqBody) {
  console.log(reqBody);

  return await http.put(
    "http://localhost:4000/admin/edit/password",
    stringify(reqBody)
  );
}
export async function adminEditBirthDate(reqBody) {
  console.log(reqBody);

  return await http.put(
    "http://localhost:4000/admin/edit/birthDate",
    stringify(reqBody)
  );
}
export async function adminProfile(reqBody) {
  let url = "http://localhost:4000/admin/adminProfile";
  let options = {
    method: "POST",
    url: url,
    data: reqBody
  };

  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
