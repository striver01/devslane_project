import axios from "axios";
import { Group } from "../Models/Group";
import { BASE_URL } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archived";
}

interface GroupResponse {
  data: Group[];
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => {
      // console.log(response.data.data);
      return response.data.data;
    })
    .catch((e) => console.error(e));
};
