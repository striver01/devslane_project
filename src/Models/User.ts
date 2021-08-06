export interface User {
  id: number;
  firstName: string;
  middlename: string;
  lastName: string;
  role: "staff" | "admin";
}
