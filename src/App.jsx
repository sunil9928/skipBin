import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import BinSize from "./components/BinSize";
import SkipCards from "./components/SkipCards";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Features from "./components/Features";
import Process from "./components/Process";
import WasteType from "./components/WasteType";
import WasteCards from "./components/WasteCards";
import BookBanner from "./components/BookBanner";
import Locations from "./components/Locations";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import Booking from "./pages/Booking";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <BinSize />
            <SkipCards />
            <AboutUs />
            <WhyChooseUs />
            <Features />
            <Process />
            <WasteType />
            <WasteCards />
            <BookBanner />
            <Locations />
            <Blog />
            <FAQ />
            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;