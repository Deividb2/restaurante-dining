import { Link } from "react-router-dom"
import burguerMenuDatas from '../../dados/burguerMenu.json'

export default function BurguerMenu() {

    const burguerMenu = burguerMenuDatas.data

    return (
        <>
            <section className="flex flex-col items-center text-center px-5 py-16">
                <div>
                    <h2 className="font-bold text-2xl md:text-4xl">Burguer Menu</h2>
                    <p className="my-4 max-w-[35rem] md:text-lg lg:max-w-[40rem] md:mb-10">You're gonna need two hands to hold our toasted buns. Our fresh, juicy burgers are served up medium-well with a side of fries and a whole lot of flavor.</p>
                </div>

                <div className="grid grid-rows-6 gap-4 lg:grid-rows-2 lg:grid-cols-2">
                    {
                        burguerMenu.map((elemento, index) => 
                            <div key={index} className="w-[90vw] h-[30vh] bg-no-repeat bg-right bg-cover md:h-[42vh] lg:w-[45vw]" 
                                style={{backgroundImage: `url(${elemento.imgSrc})`}}>
                                <div className="w-2/3 h-full bg-[#00000093] flex flex-col justify-center items-center gap-2
                                    md:w-2/5 md:gap-4">
                                    <h5 className="text-white text-2xl font-bold">{elemento.title}</h5>
                                    <h5 className="text-[#EF5A6B] font-extrabold text-lg md:text-xl">{elemento.price}</h5>
                                    <Link to='/' className="py-2 px-4 rounded-full bg-[#E81922] text-white font-bold
                                        md:hover:bg-[#EF5A6B] transition-[background-color] delay-100 ease-in md:px-6">ADD TO CARD</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}