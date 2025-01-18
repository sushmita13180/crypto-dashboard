import Balance from "./Balance"
import BottomSection from "./BottomSection"
import MidSection from "./MidSection"

function Section() {
  return (
    <div className="bg-[#EEEEF4] py-6 h-[750px]">
      <Balance />
      <MidSection />
      <BottomSection />
    </div>
  )
}

export default Section