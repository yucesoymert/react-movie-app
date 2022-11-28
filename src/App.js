import { BrowserRouter, Routes, Route } from "react-router-dom";

// import scss
import "swiper/css";
import "./App.scss";

//pages
import Home from "../src/pages/Home";
import Catalog from "../src/pages/Catalog";
import Detail from "../src/pages/detail/Detail";

//components
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/:category/search/:keyword"
                    element={<Catalog />}
                />
                <Route path="/:category/:id" element={<Detail />} />
                <Route path="/:category" element={<Catalog />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
