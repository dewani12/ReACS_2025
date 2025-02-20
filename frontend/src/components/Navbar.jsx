import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="inter primary-bg text-cl flex justify-between items-center px-8 py-4">
      <div className="text-xl font-bold">ReACS 2025</div>
      <div>
        <ul className="flex space-x-5 cursor-pointer font-semibold">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item">Dates</li>
            <li className="menu-item">Program</li>
            <li className="menu-item">Registration</li>
            <li className="menu-item">Sponsors</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
