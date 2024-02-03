import Banner from "../../components/Banner";
// import Breakfast from "../../components/Breakfast";
import Plates from "../../components/Plates";
import FastFood from "../../components/FastFood";
import BurguerMenu from "../../components/BurguerMenu";
import CarouselCards from "../../components/CarouselCards";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <>
            <Banner />
            {/* <Breakfast /> */}
            <Plates />
            <FastFood />
            <BurguerMenu />
            <CarouselCards />
            <Footer />
        </>
    );
}
