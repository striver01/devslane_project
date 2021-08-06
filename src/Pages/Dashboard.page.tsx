import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../Api/groups";
// import Button from "../Components/Button/Button";
import CardList from "../Components/CardList/CardList";
import Input from "../Components/Input/Input";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState([]);
  // let ar:any;
  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((response: any) => {
      console.log(response);
      // ar = response;
      setUserData(response);
    });
  }, [query]);

  return (
    <div className="space-y-5 mx-auto">
      <div>
        This is Dashboard page.
        <Link to="/recordings">
          <span className="text-blue-500">Go to Recordings</span>
        </Link>
        <Link to="/login">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
      <div className="">
        <form className="p-10">
          <label className="sr-only">Search Bar</label>
          <Input
            type="Search"
            id="search"
            value={query}
            placeholder="search"
            onChange={(query) => setQuery(query.target.value)}
          ></Input>
          {/* <Button onClick={() => setUserData(ar)}>Search</Button> */}
        </form>
        <div className="space-y-5">
          {userData.map((data: any, key: number) => {
            return (
              <CardList
                description={data.description}
                link={data.group_image_url}
                key={key}
              >
                {data.name}
              </CardList>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Dashboard.defaultProps = {};
export default memo(Dashboard);
