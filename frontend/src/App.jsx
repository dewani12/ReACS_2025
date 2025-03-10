import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Schedule from "./pages/Schedule"
import Submission from "./pages/Submission"
import Calls from "./pages/Calls"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/calls" element={<Calls />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
