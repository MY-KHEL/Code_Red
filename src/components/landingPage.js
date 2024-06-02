
import { Link } from "react-router-dom";

import { hospitalData } from "../data/hospitalData";
import { tasks } from "../data/tasks";

export const LandingPage = () => {

  return (
    <>
      <div>
        {/* Section 1 */}
        <div className="p-6">
          <img
            src="./main_logo.png"
            alt="logo"
            className="w-[128px]"
          />
          <h1 className="text-4xl mt-4">
            Locate Bed Space Fast with{" "}
            <span className="text-red">Code-Red</span>
          </h1>

          <form>
           <div className="relative flex items-center justify-between">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute ml-3 mt-4 pointer-events-none text-red">
         < path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              className=" relative bg-grey/25 border-none focus:border-none  rounded-md mt-4 w-full py-2 pl-10 "
            />  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute mr-3 mt-4 pointer-events-none right-0 text-red">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

           </div>

         
         
          </form >
          <div className="flex items-center justify-end text-red mt-4">
            <Link to="/view-all">View All</Link>
          </div>
        </div>
        {/* Section 2 */}
        <div className="px-6 overflow-auto">
          <div className=" inline-flex justify-between gap-8">
            {hospitalData.map((data) => {
              return (
                <div
                  className="  border-2   p-3 w-60 rounded-md"
                  style={{
                    backgroundColor:
                      data.category === "busy"
                        ? "rgba(13,96,216,.3)"
                        : data.category === "available"
                          ? "rgba(0,168,120,.3)"
                          : "rgba(204,17,0,.3)",
                    borderColor:
                      data.category === "busy"
                        ? "blue"
                        : data.category === "available"
                          ? "green"
                          : "red",
                  }}
                >
                  <span
                    className="  float-end px-3 py-1 text-white rounded-full"
                    style={{
                      backgroundColor:
                        data.category === "busy"
                          ? "blue"
                          : data.category === "available"
                            ? "green"
                            : "red",
                        width:'min-content'
                    }}
                  >
                    {data.category}
                  </span>
                  <h1
                    className=" text-2xl mt-2 "
                    style={{
                      color:
                        data.category === "busy"
                          ? "blue"
                          : data.category === "available"
                            ? "green"
                            : "red",
                    }}
                  >
                    {data.hospital_name} ({data.short_name.toUpperCase()})
                  </h1>
                  <p className="text-grey text-lg">{data.loaction}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-6 my-6 mb-24">
          {tasks.map((item) => {
            return (
                <div>
              <div className="inline-flex" key={item.id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#cc1100"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-10  text-white flex items-center "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                  />
                </svg>
                <h1 className="ml-3 text-md text-grey mb-2">{item.message}</h1>
              </div>
              </div>
            );
          })}
        </div>
        <div className="p-2 px-4  ring-2 ring-grey/25  fixed bg-white  bottom-0 w-full ">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#cc1100"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6 text-red inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <p className="text-red ">Home</p>
              </Link>
            </div>
            <div className="text-center">
              <Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  strokeWidth={7}
                  stroke="#7D7D7D"
                  className="size-6 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="text-grey">
                  First Aid <br /> Tips
                </p>
              </Link>
            </div>
            <div className="text-center">
              <Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7D7D7D"
                  className="size-6 inline "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <p className="text-grey">
                  Emergency <br /> Hotlines
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
