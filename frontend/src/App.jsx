import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Schedule from "./pages/Schedule"
import Submission from "./pages/Submission"
import Calls from "./pages/Calls"
import { Layout1 } from "./layouts"
import Committee from "./pages/Committee"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Layout1/>}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/committee" element={<Committee />} />
          </Route>

        </Routes>
      </BrowserRouter>
  )
}

export default App
