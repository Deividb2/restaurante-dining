import Banner from "../../components/Banner"
// import Breakfast from "../../components/Breakfast"
import Plates from "../../components/Plates"
import FastFood from "../../components/FastFood"
import BurguerMenu from "../../components/BurguerMenu"

export default function Home() {
    return (
        <>  
            <Banner />
            {/* <Breakfast /> */}
            <Plates />
            <FastFood />
            <BurguerMenu />
        </>
    )
}