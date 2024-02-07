import HeaderPages from "../../components/HeaderPages"
import imgContato from '../../../../public/imgs/BM3.jpg'
import { FaPhoneAlt } from "react-icons/fa";

export default function Contato() {
    return (
        <>
            <HeaderPages title="Contato" subtitle="Entre em contato com a gente e faça o seu pedido" fundo={imgContato}>
                <FaPhoneAlt className='text-4xl md:text-6xl' />
            </HeaderPages>

            <div className="h-screen"></div>
        </>
    )
}