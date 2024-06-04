import { SearchForm } from "./molecules/searchForm";
import { Link } from "react-router-dom";

export const EmergencyPage = ()=> {
    const placeHolder = 'Search ambulances'
    return(
        
        <>
        <div>
        <div className="p-6">
          <img
            src="./main_logo.png"
            alt="logo"
            className="w-[128px] text-center"
          />
          <h1 className="text-[65px] mt-4 " style={{'lineHeight':'3.5rem'}} >
            Need an Ambulance Fast?{" "}
            
          </h1>
          <h1 className="text-[65px] mt-4 " style={{'lineHeight':'3.5rem'}} >
           
            <span className="text-red3">Code-Red</span> Connects You.
          </h1>

         <SearchForm placeHolder={placeHolder} />
          <div className="flex items-center justify-end text-red3 mt-4">
            <Link to=".">View All</Link>
          </div>
        </div>
        </div>
        </>
    )
}