import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/containers/Home/Home";
import { NotFound } from "./components/errorStatus";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <Routes>
        {/* SIGN IN */}

        <Route path="/home" element={<Home />} />
        {/* COMMON ROUTES */}

        {/* ERROR */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
{
  /* <ServicesCard service="Web Development" forWhom="for" /> */
}
export default App;
