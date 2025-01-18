import Heading from "./Heading";
import LeftNavbar from "./LeftNavbar";
import { MdEmail } from "react-icons/md";
import { IoChatbubbleSharp } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div className="flex justify-between">
        <LeftNavbar />
        <div className="w-[1110px] ">
          <Heading />
          <div className="bg-[#EEEEF4] py-6 h-[750px] ">
            <div className="flex flex-col items-center">
              <div className="w-[960px] h-[544px] flex justify-between">
                <div className="flex flex-col gap-1 w-[386px] h-[128px]">
                  <div className="text-[#5F00D9] w-[24px] h-[24px]"> <MdEmail />
                  </div>
                  <h3 className="text-[32px] font-medium leading-[36px]">Contact Us</h3>
                  <p className="text-[14px] font-normal text-[#535D66]">Have a question or just want to know more? Feel free to reach out to us.</p>
                </div>
                <div className="bg-white w-[550px] h-[544px] rounded-2xl p-6">
                  <p className="text-[14px] font-medium ">You will receive response within 24 hours of time of submit.</p>
                <div className="flex flex-col gap-6">
                <div className="flex justify-between ">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-[12px] leading-[14px]"htmlFor="name">Name</label>
                      <input placeholder="Sushmita" type="text" className="border-none border border-gray-400 rounded-lg py-2 px-3 outline-none " />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-medium text-[12px] leading-[14px]">Surname</label>
                      <input placeholder="Gupta" type="text" className="border-none border border-gray-400 rounded-lg py-2 px-3 outline-none " />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-[12px] leading-[14px]" htmlFor="">Email</label>
                    <input type="email" className="border-none border border-gray-400 rounded-lg py-2 px-3 outline-none " placeholder="email@gmail.com"/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-[12px] leading-[14px]" htmlFor="">Message</label>
                    <textarea type="email" className="border-none border border-gray-400 rounded-lg py-2 px-3 outline-none " placeholder="email@gmail.com" rows={3}/>
                  </div>
                  <div className="flex">
                  <input type="checkbox" className="border border-gray-200 mt-[-12px]" />
                  <p className="ml-2 font-normal text-[12px] leading-[14px]">I agree with <span className="text-[#5F00D9]">Terms & Conditions.</span></p>
                  </div>
                  <button className="rounded-[10px] px-[16px] py-[10px] bg-[#D8DDE2] text-[#797E82] font-medium text-[14px]">Send a Message</button>
                  <button className="rounded-[10px] px-[16px] py-[10px] bg-[#EEEEF4] text-[#171717] font-medium text-[14px] mt-[-15px]">Book a Metting</button>
                </div>
                </div>
              </div>

              <div className="w-[960px] h-[130px] mt-4 flex justify-between">
              <div className="flex flex-col gap-1 w-[386px] h-[110px]">
                  <div className="text-[#5F00D9] w-[24px] h-[24px]"> <IoChatbubbleSharp />
                  </div>
                  <h3 className="text-[32px] font-medium leading-[36px]">Live Chat</h3>
                  <p className="text-[14px] font-normal text-[#535D66]">Don’t have time to wait for the answer? Chat with us now.</p>
                </div>
                <div className="bg-[#5F00D9] rounded-2xl p-6 w-[550px] h-[130px] flex flex-col gap-3">
                  <div className="w-[58px] h-[22px] pl-[7px] pt-[1px] bg-white text-[#5F00D9] rounded-xl text-[12px] text-medium">Chatbot</div>
                  <p className=" text-[18px] font-medium leading-[22px] text-white">Chat with us now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;