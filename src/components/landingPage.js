
import { Link } from "react-router-dom";

import { hospitalData } from "../data/hospitalData";
import { tasks } from "../data/tasks";

import { SearchForm } from "./molecules/searchForm";

export const LandingPage = () => {

const placeHolder = 'Search hospitals'
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
          <h1 className="text-[65px] mt-4 leading-8" >
            Locate Bed Space Fast with{" "}
            <span className="text-red3">Code-Red</span>
          </h1>

         <SearchForm placeHolder={placeHolder}/>
          <div className="flex items-center justify-end text-red3 mt-4">
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
                      data.category === "Busy"
                        ? "rgba(13,96,216,.09)"
                        : data.category === "Available"
                          ? "rgba(0,168,120,.09)"
                          : "rgba(204,17,0,.09)",
                    borderColor:
                      data.category === "Busy"
                        ? "#0D60D8"
                        : data.category === "Available"
                          ? "#0FB259"
                          : "#FF2020",
                  }}
                >
                  <span
                    className="  float-end px-3 py-1 text-white rounded-full"
                    style={{
                      backgroundColor:
                        data.category === "Busy"
                          ? "#0D60D8"
                          : data.category === "Available"
                            ? "#0FB259"
                            : "#F00000",
                        width:'min-content'
                    }}
                  >
                    {data.category}
                  </span>
                  <h1
                    className=" text-2xl mt-2 "
                    style={{
                      color:
                        data.category === "Busy"
                          ? "#0D60D8"
                          : data.category === "Available"
                            ? "#0FB259"
                            : "#FF2020",
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

              <div className="flex items-center mt-2 " key={item.id}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#F00000" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5M11 7h2v6h-2m0 2h2v2h-2"></path></svg>

                <h1 className="ml-3 text-md text-grey mb-2">{item.message}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-2 px-4  ring-2 ring-grey/25  fixed bg-white  bottom-0 w-full ">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <Link to ="/">
              <img src="Frame 11.svg" alt="emergency logo" className="text-center  inline"/>
            
            <p className="text-grey text-xs">
             Home
            </p>
              </Link>
            </div>
            <div className="text-center">
              <Link to ="/first-aid" >
              <img src="ph_first-aid-fill.svg" alt="first-aid" className="text-center  inline"/>
            
            <p className="text-grey text-xs">
             First aid tips
            </p>
              </Link>
            </div>
            <div className="text-center">
              <Link>
              <img src="hotlinebgrey.svg" alt="emergency logo" className="text-center  inline"/>
            
            <p className="text-grey text-xs">
              Emergency  Hotlines
            </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
