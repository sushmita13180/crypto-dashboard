import { Link } from "react-router"


function LeftNavbar() {
  return (
    <>
    <div className="w-[256px] ">
      <p className="text-[20px] font-medium text-[#5F00D9] mt-[54px] ml-[28px] mr-[48px] leading-[18px] ">@CRYPTOCURRENCY</p>
      <div className="w-[232px] h-[146px] ml-3 mt-[25px] flex flex-col gap-1">
        <div className="flex items-center gap-2 bg-[#F3F3F7] h-[42px] p-3 rounded-[10px]">
       
        <img src="./Dashboard.png" className="w-[16px] h-[16px]" />
        <Link to={`/`}>
        <p className="text-[14px] font-medium leading-[18px] pt-3">Dashboard</p>
        </Link>
        </div>
        <div className="flex items-center gap-2 h-[42px] p-3 rounded-[10px]">
        <img src="./Transactions.png" className="w-[16px] h-[16px]" />
        <Link to={`/transactions`}>
        <p className="text-[14px] font-medium leading-[18px] pt-3 text-[#797E82]">Transactions</p>
        </Link>
        </div>
      </div>
      <div className="ml-2 px-3 flex gap-3 w-[232px] h-[54px] items-center mt-[500px]">
        <img src="./Help.png" alt="" className="w-4 h-4"/>
       <Link to={`/support`}> 
       <p className="text-[14px] font-medium leading-[18px] text-[#797E82] mt-3">Support</p>
       </Link>
      </div>
    </div>
    </>
  )
}

export default LeftNavbar