import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_Login_Token);
  if(!token) return config;
  return {...config, headers: {...config.headers, Authorization: token}};
}, 
);

axios.interceptors.response.use( undefined, (error) => {
  console.log(error);
  if(error.response.data.code === 9101){
    localStorage.removeItem(LS_Login_Token);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});



interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: { is_2fa_boolean: boolean };
  user: User[];
  token: string;
}

interface User {
  id: number;
  firstName: string;
  middlename: string;
  lastName: string;
  role: "staff" | "admin";
}

export const LS_Login_Token = "login_token";
const BASE_URL = "https://api-dev.domecompass.com";

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
    localStorage.setItem(LS_Login_Token, response.data.token);
    const token = localStorage.getItem(LS_Login_Token);
    console.log(token);
  });
};

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archived";
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  return axios
    .get(url, { params: data })
    .then((response) => {
      return response.data.data;
    })
    .catch((e) => console.error(e));
};

export const logout = () => {
  localStorage.removeItem(LS_Login_Token);
}

