import Heading from "./Heading";
import LeftNavbar from "./LeftNavbar";


function Transactions() {
  return (
    <>
      <div className="flex justify-between">
        <LeftNavbar />
        <div className="w-[1110px] ">
          <Heading />
          <div className="bg-[#EEEEF4] py-6 h-[750px] flex  flex-col items-center gap-3">
            <div className="flex self-end mr-[78px]"><button className="w-[130px] h-[38px] rounded-[10px] pl-[30px] bg-[#5F00D9] text-[14px] font-medium flex items-center text-white">Export CSV</button></div>
            <div className="w-[960px] h-[508px] rounded-[16px] p-3 bg-white">
              <div className=" h-[84px]">
                <div className="flex justify-between">
                  <div className="flex gap-2 ml-4">
                <p className="text-[16px] font-medium">All</p>
                <p className="w-[33px] h-[22px] rounded-lg p-1 text-[ #797E82] bg-[#F3F3F7] flex items-center">349</p>
                  </div>

                  <div className="flex gap-2 ml-4">
                <p className="text-[16px] font-medium text-[#797E82]">Deposit</p>
                <p className="w-[33px] h-[22px] rounded-lg p-1 text-[ #797E82] bg-[#F3F3F7] flex items-center">115</p>
                  </div>

                  <div className="flex gap-2 ml-4">
                <p className="text-[16px] font-medium text-[#797E82]">Withdraw</p>
                <p className="w-[33px] h-[22px] rounded-lg p-1 text-[ #797E82] bg-[#F3F3F7] flex items-center">213</p>
                  </div>

                  <div className="flex gap-2 ml-4">
                <p className="text-[16px] font-medium text-[#797E82]">Trade</p>
                <p className="w-[33px] h-[22px] rounded-lg pl-2 text-[ #797E82] bg-[#F3F3F7] flex items-center">22</p>
                  </div>

                  <div className="w-[195px] h-[18px] flex gap-2 mr-5">
                  <img src="./Search.png" alt="" className="w-4 h-4"/>
                <input type="text" placeholder="Search by ID or destination" className="w-[171px] font-medium text-[14px] outline-none"/>
                  </div>
                  </div>

                    <hr className="text-gray-400 mt-[1px]" />

                    <div className="flex justify-between text-[#797E82] mb-[2px]">
                      <div>ID</div>
                      <div>Date & Time</div>
                      <div>Type</div>
                      <div>Amount</div>
                      <div>Status</div>
                    </div>
                    <hr className="text-gray-400 mt-[1px]" />
                  </div>


                  <div className="h-[392px] m-3 flex flex-col gap-3">
                    <div>
                    <div className="flex justify-between h-[52px] text-[#171717] text-[14px] font-medium">
                      <div>HD82NA2H</div>
                      <div>2024-12-12
                      <div className="text-[#797E82] text-[12px] font-normal">08:20 PM</div>
                      </div>
                      <div>INR Deposit</div>
                      <div>+ ₹81,123.10</div>
                      <div className="bg-green-600 h-[30px] px-2 pt-1 rounded-xl  text-white w-[90px]">Completed</div>
                      
                    </div>
                    <hr className="text-gray-400 mb-0 mt-[1px]" />
                    </div>
                    
                    <div>
                    <div className="flex justify-between  h-[52px] text-[#171717] text-[14px] font-medium">
                    <div>HD82NA2H</div>
                      <div>2024-12-12
                      <div className="text-[#797E82] text-[12px] font-normal">02:00 PM</div>
                      </div>
                      <div>INR Withdraw</div>
                      <div>+ ₹81,123.10</div>
                      <div className="bg-red-600 h-[30px] px-3 pt-1 rounded-xl  text-white w-[90px]">Cancelled</div>
                    </div>
                    <hr className="text-gray-400 mb-0 mt-[1px]" />
                    </div>
                    
                    <div>
                    <div className="flex justify-between  h-[52px] text-[#171717] text-[14px] font-medium items-start">
                    <div>HD82NA2H</div>
                      <div>2024-12-12
                      <div className="text-[#797E82] text-[12px] font-normal">09:33 PM</div>
                      </div>
                      <div>Buy</div>
                      <div>+ ₹81,123.10</div>
                      <div className="bg-green-600 h-[30px] px-2 pt-1 rounded-xl  text-white w-[90px]">Completed</div>
                    </div>
                    <hr className="text-gray-400 mb-0 mt-[1px]" />
                    </div>
                    
                   <div>
                   <div className="flex justify-between items-start h-[52px] text-[#171717] text-[14px] font-medium">
                    <div>HD82NA2H</div>
                      <div>2024-12-12
                      <div className="text-[#797E82] text-[12px] font-normal">01:49 PM</div>
                      </div>
                      <div>Sell</div>
                      <div>+ ₹81,123.10</div>
                      <div className="px-3 py-1 rounded-xl text-white bg-[#797E82] flex justify-between  w-[90px]">Pending</div>
                    </div>
                    <hr className="text-gray-400 mb-0 mt-[1px]" />
                   </div>
                     
                    <div>
                    <div className="flex justify-between  h-[52px] text-[#171717] text-[14px] font-medium">
                    <div>HD82NA2H</div>
                      <div>2024-12-12
                      <div className="text-[#797E82] text-[12px] font-normal">07:55 PM</div>
                      </div>
                      <div>BTC Deposit</div>
                      <div>+ ₹81,123.10</div>
                      <div className="bg-green-600 h-[30px] px-2 pt-1 rounded-xl  text-white w-[90px]">Completed</div>
                    </div>
                    <hr className="text-gray-400 mb-0 mt-[1px]" />
                    </div>
                    
                    <div className="flex justify-between h-[52px] text-[#171717] text-[14px] font-medium">
                      <div>HD82NA2H</div>
                      <div>2024-12-12
                        <div className="text-[#797E82] text-[12px] font-normal">06:40 PM</div>
                      </div>
                      <div>BTC Withdraw</div>
                      <div>+ ₹81,123.10</div>
                      <div className="bg-yellow-500 h-[30px] px-[10px] pt-1 w-[90px] rounded-xl  text-white">Processing</div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        )
}

        export default Transactions;