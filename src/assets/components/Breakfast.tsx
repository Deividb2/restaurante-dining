// import HotDogImg from '../../../public/imgs/HotDogImg.jpg'
import { Link } from "react-router-dom"

export default function Breakfast() {
    return (
        <>
            <section className="flex justify-center items-center h-[100vh] bg-[#ccc] mt-10 md:mt-0">
                <div className={`flex justify-center items-center bg-no-repeat bg-center bg-cover
                md:bg-[url('../../../public/imgs/HotDogImg.jpg')] md:w-[60vw] md:h-[80vh]`}>

                    <div className="flex flex-col justify-center gap-8 px-4 py-8 w-[90vw] bg-[#fff]
                        md:bg-[#ffffffda] md:w-[35vw] lg:w-[30vw] lg:h-[23rem]">
                        <h3 className="font-bold text-4xl">Breakfast</h3>
                        <p className="text-base">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <Link to='/' className="py-3 px-8 rounded-full bg-red-600 text-white font-semibold self-start 
                            md:hover:pr-12 transition-[padding-right] delay-75 ease">VER MENU</Link>

                    </div>
                </div>
            </section>
        </>
    )
}