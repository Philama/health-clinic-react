import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Turns from "./pages/Turns";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Por el momento Turns no esta diseñado */}
                <Route path="/turns" element={<Turns />} />
            </Routes>
        </>
    );
};
export default App;
