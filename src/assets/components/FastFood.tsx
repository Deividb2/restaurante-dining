import { Link } from 'react-router-dom'
import FastFoodImg from '../../../public/imgs/fast-food-bg.jpg'

export default function FastFood() {
    return (
        <>
            <section className='min-h-[100vh] flex flex-col justify-center px-8 text-white bg-no-repeat bg-center bg-cover
                lg:px-28'
                style={{backgroundImage: `url(${FastFoodImg})`}}>
                <h4 className='font-bold mb-3 md:text-xl lg:text-2xl'>COMIDA AMERICANA MAIS EXPERIMENTADA</h4>
                <h2 className='font-bold mb-10 text-5xl md:text-7xl lg:text-[96px]'>Fast Food</h2>
                <Link to='/' className="py-3 px-8 rounded-full bg-red-600 text-white font-semibold self-start
                    md:hover:pr-12 transition-[padding-right] delay-75 ease">VER MENU</Link>
            </section>
        </>
    )
}