import Heading from "./Heading";
import LeftNavbar from "./LeftNavbar";

function Support() {
  return (
    <>
      <div className="flex justify-between">
        <LeftNavbar />
        <div className="w-[1110px] ">
          <Heading />
          <div className="bg-[#EEEEF4] py-6 h-[750px]">
            Chat With Us
          </div>
        </div>
      </div>
    </>

  )
}

export default Support;