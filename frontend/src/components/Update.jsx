import { Link } from "react-router-dom";

function Update() {
  return (
    <div className="inter px-4 md:px-12 my-4 h-screen">
      <div className="text-2xl font-semibold my-2">
        It will be updated soon.
      </div>
      <Link to="/"><span className="bg-[#043A75] text-white font-semibold py-2 px-4 rounded-sm">Back to Home</span></Link>
    </div>

  )
}

export default Update
