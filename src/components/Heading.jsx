
import { FaRegCircleUser } from "react-icons/fa6";


function Heading() {
  return (
    <div className="flex justify-between items-center mx-24 h-16">
      <h1 className="text-[28px] font-medium leading-8 my-4">Dashboard</h1>
      <FaRegCircleUser className="w-[50px] h-[50px] font-extralight" />
    </div>
  )
}

export default Heading;