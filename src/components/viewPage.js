
import { Link } from "react-router-dom";
import { hospitalData } from "../data/hospitalData";

export const ViewPage = () => {

  return (
    <>
      <div>
        <div className="p-6">
          <img
            src="main_logo.png"
            alt="logo"
            className="w-[128px]"
          />
        <h1 className="text-[65px] mt-4 " style={{'lineHeight':'3.5rem'}} >
            Locate Bed Space Fast with{" "}
            <span className="text-red3">Code-Red</span>
          </h1>

          <form>
           <div className="relative flex items-center justify-between">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 absolute ml-3 mt-4 pointer-events-none text-black">
         < path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              className=" relative bg-grey/25 border-none focus:border-none  rounded-md mt-4 w-full py-2 pl-10 "
            />  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 absolute mr-3 mt-4 pointer-events-none right-0 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

           </div>

         
         
          </form >
        </div>
        <div className=" p-6 mb-16 ">
          {hospitalData.map((data) => {
            return (
              <div className="border-b-2 border-grey py-3" key={data.id}>
                <div className="flex justify-between items-center  ">
                  <h1
                    className="mr-3"
                    style={{
                      color:
                      data.category === "Busy"
                      ? "#0D60D8"
                      : data.category === "Available"
                        ? "#0FB259"
                        : "#FF2020",
                    }}
                  >
                    {data.hospital_name}
                  </h1>

                  <span
                    className="px-2 text-white rounded-full"
                    style={{
                      backgroundColor:
                      data.category === "Busy"
                      ? "#0D60D8"
                      : data.category === "Available"
                        ? "#0FB259"
                        : "#FF2020",
                    }}
                  >
                    {data.category}
                  </span>
                </div>
                <p className="text-grey mt-4">{data.loaction}</p>
              </div>
            );
          })}
        </div>
        <div className="p-2 px-4  ring-2 ring-grey/25  fixed bg-white  bottom-0 w-full ">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <Link to ="/">
              <img src="c.svg" alt="emergency logo" className="text-center  inline"/>
            
            <p className="text-grey text-xs">
             Home
            </p>
              </Link>
            </div>
            <div className="text-center">
              <Link to ="/first-aid" >
              <img src="ph_first-aid-fill.svg" alt="first-aid" className="text-center  inline"/>
            
            <p className="text-grey/50 text-xs font-semibold">
            First aid tips
            </p>
              </Link>
            </div>
            <div className="text-center">
              <Link>
              <img src="hotlinebgrey.svg" alt="emergency logo" className="text-center  inline"/>
            
            <p className="text-grey text-xs">
             
            </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
