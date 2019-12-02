import { stringify } from "querystring";
import http from "./httpService";
import Axios from "axios";

export async function clientIDSearch(reqBody) {
  //alert("posting");
  let url = "http://localhost:4000/client/IDsearch";
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
