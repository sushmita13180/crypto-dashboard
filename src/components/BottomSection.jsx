import { Link } from "react-router";
function BottomSection() {
  return (
    <div className="w-[960px] mt-4 mx-auto flex justify-between items-center ">
      <div className="w-[468px] h-[130px] rounded-[16px] bg-white p-6 flex flex-col gap-4">
        <button className="w-[50px] h-[28px] bg-[#5F00D9] text-white rounded-xl text-[16px]">Loan</button>
        <p className="text-[18px] font-medium leading-[22px] mt-[-8px]">Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p>
      </div>
      <div className="w-[468px] h-[130px] rounded-[16px] bg-gradient-to-r from-[#5F00D9] to-indigo-700 p-6 flex flex-col gap-4 bg">
       <Link to={`/contact`}> 
       <button className="w-[67px] h-[25px]  text-[#5F00D9] bg-white rounded-xl text-[16px] font-medium 
        ">Contact</button>
        </Link>
        <p className="text-[18px] font-medium leading-[22px] mt-[-8px] text-white">Learn more about our real estate, mortgage, and  corporate account services</p>
      </div>

     
    </div>
  )
}

export default BottomSection;