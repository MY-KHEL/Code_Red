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
        </div>
        </>
    )
}