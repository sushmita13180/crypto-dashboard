import LeftNavbar from "./LeftNavbar"
import RightPart from "./RightPart"

function Container() {
  return (
    <div className="flex">
      <LeftNavbar />
      <RightPart />
    </div>
  )
}

export default Container