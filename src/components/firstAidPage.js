import { firstAidData } from "../data/firstAid"
import { SearchForm } from "./molecules/searchForm"

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
                <h1 className="text-red text-sm">Watch more</h1> 
            </div>
           </div>
           <div className="px-6 py-2">
            <div className="flex justify-end items-center">
                <h1 className="text-red text-sm">View more articles</h1> 
            </div>
            {firstAidData.map((item)=>{
                return(
                    <div  key={item.id}>
                        <h1>{item.subheading}</h1>
                        <p>{item.text}</p>
                    </div>
                )
            })}
           </div>

        </div>
        </>
    )
}