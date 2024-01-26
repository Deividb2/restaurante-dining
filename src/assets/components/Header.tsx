import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ícones 
import { IoMdMenu, IoMdClose  } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io"
import { MdRestaurantMenu, MdLocalOffer  } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
    const [menu, setMenu] = useState(false)
    const hendleMenu = () => {
        return setMenu(!menu)
    }

    // para mudar a cor do header quando rolar o scroll
    const [bgColor, setBgColor] = useState('')
    const mudaCor = () => {
        const novaCor = window.scrollY > 150 ? 'bg-black text-white' : 'bg-transparent'
        setBgColor(novaCor)
    }

    useEffect(() => {
        window.addEventListener('scroll', mudaCor)

        return () => {
            window.removeEventListener('scroll', mudaCor)
        }
    }, [])

    return (
        <>
            <header className="flex flex-col mb-[10vh]">
                <div className={`flex justify-between items-center h-[10vh] px-4 fixed left-0 right-0 z-10 ${bgColor} 
                    transition-[background-color] delay-100 ease-in md:px-6`}>
                    <h2 className="font-semibold uppercase text-xl">Logo</h2>
                    <div onClick={() => hendleMenu()}>
                        {
                            menu ? <IoMdClose className="text-2xl md:text-4xl" /> : <IoMdMenu className="text-2xl md:text-4xl" />
                        }
                    </div>
                </div>

                <nav className={`bg-black border-b-4 border-red-600 fixed top-[10vh] z-10 overflow-hidden whitespace-nowrap 
                transition-all delay-75 ease h-full ${menu ? 'w-[100vw] md:w-[40vw] lg:w-[30vw]': 'w-0'}`}>
                    <ul className="flex flex-col gap-6 py-7 px-6 text-white">
                        <li className="flex items-center gap-3">
                            <IoHomeSharp className="text-lg" />
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>

                        <li className="flex items-center gap-3">
                            <IoMdPeople className="text-lg" />
                            <Link to="/" className="hover:underline">Sobre</Link>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-base" />
                            <Link to="/" className="hover:underline">Contato</Link>
                        </li>

                        <li className="flex items-center gap-3">
                            <MdRestaurantMenu className="text-lg" />
                            <Link to="/" className="hover:underline">Cardápio</Link>
                        </li>

                        <li className="flex items-center gap-3">
                            <MdLocalOffer className="text-base" />
                            <Link to="/" className="hover:underline">Promoção do dia</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}