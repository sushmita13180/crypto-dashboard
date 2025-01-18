
function MidSection() {
  return (
    <div className="w-[960px] h-[345px] mx-auto flex justify-between items-center mt-4">
      <div className="w-[468px] h-[345px] rounded-[16px] bg-white p-6">
        <div className="flex justify-between ">
          <div className="w-[185px] h-[58px]">
          
      <div className="flex flex-col gap-1">
          <p className="text-[14px] font-medium leading-[18px] text-[#535D66]">Current Price</p>
        <div className="flex
        gap-3">
          <div className="flex justify-center items-center gap-2 mt-[-12px]">
            <h6 className="text-[24px] font-medium leading-7">₹26,670.25</h6>
            <p className="text-[14px] leading-[18px] font-medium text-[#059669] mt-2"> Hike(0.04%)</p>
          </div>
        </div>
      </div>
          </div>
          
          <div className="w-[169px] h-[38px] flex gap-2">
        <button className="w-[81px] h-[38px] rounded-[10px] px-[16px] py-[10px] gap-2 bg-[#5F00D9] flex">
          <img src="./Add.png" alt="" className="w-4 h-4" />
          <p className="text-[14px] font-medium leading-[18px]  text-white">Buy</p>
        </button>
        <button className="w-[81px] h-[38px] rounded-[10px] px-[16px] py-[10px] gap-2 bg-[#5F00D9] flex justify-center">
          <img src="./Remove.png" alt="" className="w-4 h-4" />
          <p className="text-[14px] font-medium leading-[18px]  text-white">Sell</p>
        </button>
      </div>
        </div>
        <div className="w-[147px] h-[27px] rounded-[6px] p-[3px] bg-[#F3F3F7] mt-3 place-self-end flex gap-2">
        <div className="w-[28px] h-[21px] rounded-[9px] px-[6px] text-[12px] font-medium leading-[14px] py-[4px] text-[#797E82]">1H</div>
        <div className="w-[28px] h-[21px] rounded-[9px] px-[6px] text-[12px] font-medium leading-[14px] py-[4px] bg-white">1D</div>
        <div className="w-[28px] h-[21px] rounded-[9px] px-[6px] text-[12px] font-medium leading-[14px] py-[4px] text-[#797E82]">1W</div>
        <div className="w-[28px] h-[21px] rounded-[9px] px-[6px] text-[12px] font-medium leading-[14px] py-[4px] text-[#797E82]">1M</div>
        </div>
        <div className="mt-10">
          <img src="./Graph.png" alt="" />
        </div>
        <div className="h-[14px] text-[12px] font-normal leading-[14px] flex justify-between mt-4 text-[#797E82]">
          <div>7:15 PM</div>
          <div>12:55 AM</div>
          <div>6:35 AM</div>
          <div>12:15 PM</div>
          <div>5:55 PM</div>
        </div>
      </div>

      <div className="w-[468px] h-[345px] rounded-[16px]  bg-white p-6">
        <p className="text-[14px] font-medium text-[#535D66] leading-[18px]">Recent Transactions</p>
      <div className="flex flex-col gap-3">
      <div className="h-[58px] py-2 flex justify-between">
        <div className="w-10 h-10 rounded-[30px] bg-[#F3F3F7] flex justify-center items-center">
          <img src="./Dollar.png" alt="" />
        </div>
        <div className="flex flex-col ml-[-115px] my-[-5px]">
        <div className="text-[#171717] font-medium text-[16px] leading-5">INR Deposit</div> 
        <div className="text-[#797E82] font-normal text-[14px] leading-[18px] mt-1">2024-12-12 7:06 PM</div>
        </div>
        <div className="text-[16px] font-medium items-end leading-5">+ ₹81,123.10</div>
      </div>
      <div className="h-[58px] py-2 flex justify-between">
        <div className="w-10 h-10 rounded-[30px] bg-[#F3F3F7] flex justify-center items-center">
          <img src="./Bitcoin.png" alt="" />
        </div>
        <div className="flex flex-col ml-[-70px] my-[-5px]">
        <div className="text-[#171717] font-medium text-[16px] leading-5">BTC Sell</div> 
        <div className="text-[#797E82] font-normal text-[14px] leading-[18px] mt-1">2024-11-11 12:32 PM</div>
        </div>
       <div>
       <div className="text-[16px] font-medium items-end leading-5">- 12.48513391 BTC</div>
       <div className="text-[14px] font-normal leading-[18px] text-[#797E82] text-right">+ $81,123.10</div>
       </div>
      </div>
      <div className="h-[58px] py-2 flex justify-between">
        <div className="w-10 h-10 rounded-[30px] bg-[#F3F3F7] flex justify-center items-center">
          <img src="./Dollar.png" alt="" />
        </div>
        <div className="flex flex-col ml-[-115px] my-[-5px]">
        <div className="text-[#171717] font-medium text-[16px] leading-5">INR Deposit</div> 
        <div className="text-[#797E82] font-normal text-[14px] leading-[18px] mt-1">2024-12-12 7:06 PM</div>
        </div>
        <div className="text-[16px] font-medium items-end leading-5">+ ₹81,123.10</div>
      </div>
        <button className="h-[38px] rounded-[10px] px-[16px] py-[10px] bg-[#EEEEF4] w-[100%] text-[#171717] text-[14px] font-medium leading-[18px]">View All</button>
      </div>
      </div>
    </div>
  )
}

export default MidSection;