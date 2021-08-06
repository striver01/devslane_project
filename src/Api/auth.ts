import axios from "axios";
import { User } from "../Models/User";
import { BASE_URL, LS_Auth_Token } from "./base";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: { is_2fa_boolean: boolean };
  user: User[];
  token: string;
}

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(JSON.stringify(data));
  //   return fetch(url, { method: "POST", body: JSON.stringify(data), headers: {"Content-type":"application/json",} }).then(
  //     (response) => {
  //       console.log(response);
  //       return response;
  //     }
  //   );
  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem(LS_Auth_Token, response.data.token);
    // const token = localStorage.getItem(LS_Login_Token);
    // console.log(token);
  });
};

export const logout = () => {
  localStorage.removeItem(LS_Auth_Token);
};
