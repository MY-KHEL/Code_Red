import { Icon } from "@iconify/react/dist/iconify.js";
import { firstAidData } from "../data/firstAid"
import { SearchForm } from "./molecules/searchForm"
import { Link } from "react-router-dom";

export const FirstAidPage = ()=>{
    const placeHolder = 'Search videos or articles'
    return (
        <>
        <div>
           <div className="p-6">
           <img
            src="./main_logo.png"
            alt="logo"
            className="w-[128px] mb-6"
          />
          
          <SearchForm placeHolder={placeHolder} />
          
           </div>
           <div className="px-6 py-2">
            <div className="flex justify-end items-center">
                <h1 className="text-red2 text-sm">Watch more</h1> 
                
            </div>
            <div className="overflow-auto">
            <div className="inline-flex gap-4 ">
                  <div className="mt-4 w-60 border-grey/50 border-2 p-4 rounded-md">
                    <div className="flex ">
                      <div>
                      <img src="./Vector.svg" alt="Burn accident"/>
                          <p className="text-red2 text-sm ">Learn CPR in 2 minutes </p>
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  
                  </div>
                  <div className="mt-4 w-60 border-grey/50 border-2 p-4 rounded-md">
                    <div className="flex ">
                      
                      <div>
                      <img src="./Vector.svg" alt="Burn accident"/>
                          <p className="text-green text-sm ">What to do when you have burns  </p>
                      </div>
                      <div>
                      
                      </div>
                    </div>
                  
                  </div>
                </div>
                </div>
           </div>
           <div className="px-6 py-2 mb-32">
            <div className="flex justify-end items-center">
                <h1 className="text-red2 text-sm">View more articles</h1> 
            </div>
            {firstAidData.map((item)=>{
                return(
                    <div  key={item.id} className="mt-4">
                        <h1 className="text-sm text-black">{item.subheading}</h1>
                        <p className="text-xs text-grey">{item.text}</p>
                    </div>
                )
            })}
           </div>
                      <div className="p-2 px-4  ring-2 ring-grey/25  fixed bg-white  bottom-0 w-full ">
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <Link to ="/">
                          <img src="./bitcoin-icons_home-filled.svg" alt="HomePage" />
                          <p className="text-grey text-xs">
                              Home
                            </p>
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to ="/first-aid" >
                          <img src="first aids tips active.svg" alt="First Aid icon" className="text-center  inline"/>
            
                            <p className="text-red3 text-xs">
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
    )
}