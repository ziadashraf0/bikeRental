import { stringify } from "querystring";
import http from "./httpService";
import Axios from "axios";

export async function ownerIDSearch(reqBody) {
  //alert("posting");
  let url = "http://localhost:4000/owner/IDsearch";
  let options = {
    method: "POST",
    url: url,
    data: reqBody
  };

  let response = await Axios(options);
  if (response) {
    let information = await response.data;
    return information;
  }
}
export function ownerDelete(reqBody) {
  return http.post("http://localhost:4000/owner/Delete", stringify(reqBody));
}
