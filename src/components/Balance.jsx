

function Balance() {
  return (
    <div className="w-[960px] h-[106px] rounded-2xl bg-white mx-auto flex justify-between items-center p-6">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <p className="text-[14px] font-medium leading-[18px] text-[#535D66]">Total Portfolio Value</p>
          <img src="./Info.png" alt="" className="w-4 h-4" />
        </div>
        <h6 className="text-[24px] font-medium leading-7">₹ 112,312.24</h6>
      </div>

      <img src="./Line.png" className="mx-[-72px]"/>

      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <p className="text-[14px] font-medium leading-[18px] text-[#535D66]">Wallet Balances</p>
        
        </div>
        <div className="flex
        gap-3">
          <div className="flex justify-center items-center gap-1">
            <h6 className="text-[24px] font-medium leading-7">22.39401000</h6>
            <div className="bg-[#F3F3F7] w-[35px] h-[22px] px-[6px] py-[4px] rounded-3xl text-[12px] font-medium leading-[14px] mb-2 text-[#797E82] flex justify-center">BTC</div>
          </div>

          <div className="flex justify-center items-center gap-1">
            <h6 className="text-[22px] font-medium leading-[26px]">₹ 1,300.00</h6>
            <div className="bg-[#F3F3F7] w-[35px] h-[22px] px-[6px] py-[4px] rounded-3xl text-[12px] font-medium flex justify-center leading-[14px] mb-2 text-[#797E82]">INR</div>
          </div>
        </div>
      </div>

      <div className="w-[235px] h-[38px] flex gap-2">
        <button className="w-[107px] h-[38px] rounded-[10px] px-[16px] py-[10px] gap-2 bg-[#5F00D9] flex">
          <img src="./Down.png" alt="" className="w-4 h-4" />
          <p className="text-[14px] font-medium leading-[18px]  text-white">Deposit</p>
        </button>
        <button className="w-[107px] h-[38px] rounded-[10px] px-[16px] py-[10px] gap-2 bg-[#5F00D9] flex justify-center">
          <img src="./Up.png" alt="" className="w-4 h-4" />
          <p className="text-[14px] font-medium leading-[18px]  text-white">Withdraw</p>
        </button>
      </div>
    </div>
  )
}

export default Balance;