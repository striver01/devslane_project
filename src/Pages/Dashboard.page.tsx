import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [query, useQuery] = useState("");

  useEffect(() => {
    fetchGroups({ status: "all-groups", query });
  }, [query]);

  return (
    <div>
      This is Dashboard page.
      <Link to="/recordings">
        <span className="text-blue-500">Go to Recordings</span>
      </Link>
      <Link to="/login">
        <span className="text-blue-500">Sign in</span>
      </Link>
    </div>
  );
};
Dashboard.defaultProps = {};
export default memo(Dashboard);
