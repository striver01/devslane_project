import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../Api/groups";
import Avtar from "../../Components/Avtar/Avtar";
import CardList from "../../Components/CardList/CardList";
import Input from "../../Components/Input/Input";
// import Button from "../Components/Button/Button";

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
    <div className="w-full md:w-4/5 px-3 py-2 bg-gray-200">
      <div className="pb-5 bg-white rounded-md shadow-lg w-full">
        <h1 className="mx-5 py-3 text-2xl font-semibold text-gray-900">
          General Information
        </h1>
        <div className="md:flex">
          <div className="mx-5 pt-5 md:pt-0 md:mt-5 md:w-1/3 md:border-r">
            <Avtar className="rounded-md" size={120} shape="square" />
            <p className="text-blue-700 px-2 text-md hover:text-indigo-900 cursor-pointer pt-3">
              Upload Picture
            </p>
          </div>
          <div className="w-full px-5">
            <div className="space-y-2 sm:space-y-0 sm:space-x-5 py-5 sm:flex sm:items-center">
              <div>
                <label
                  className="text-gray-400 tracking-wider text-sm"
                  htmlFor=""
                >
                  First Name
                </label>
                <input
                  className="border-2 rounded-md px-2 py-1 w-11/12 sm:w-full"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  className="text-gray-400 tracking-wider text-sm"
                  htmlFor=""
                >
                  Last Name
                </label>
                <input
                  className="border-2 rounded-md px-2 py-1 w-11/12 sm:w-full"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="space-y-2 sm:space-x-5 sm:space-y-0 sm:items-center sm:flex">
              <div>
                <label
                  className="text-gray-400 tracking-wider text-sm"
                  htmlFor=""
                >
                  Date of Birth
                </label>
                <input
                  className="border-2 rounded-md px-2 py-1 w-11/12 bg-white sm:w-full"
                  type="date"
                />
              </div>
              <div>
                <label
                  className="text-gray-400 tracking-wider text-sm"
                  htmlFor=""
                >
                  Profession
                </label>
                <input
                  className="border-2 rounded-md px-2 py-1 w-11/12 sm:w-full"
                  type="text"
                  placeholder="Profession"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5 mx-auto">
        <div>
          This is Dashboard page.
          <Link to="/recordings">
            <span className="text-blue-500">Go to Recordings</span>
          </Link>
        </div>
        <div className="">
          <form className="p-1">
            <label className="sr-only">Search Bar</label>
            <Input
              type="Search"
              id="search"
              value={query}
              placeholder="search"
              onChange={(query) => setQuery(query.target.value)}
              className="w-3/5"
            />
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
    </div>
  );
};
Dashboard.defaultProps = {};
export default memo(Dashboard);
