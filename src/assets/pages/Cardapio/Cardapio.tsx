import HeaderPages from "../../components/HeaderPages"
import imgCardapio from '../../../../public/imgs/BM2.jpg'
import { MdRestaurantMenu } from "react-icons/md";

export default function Cardapio() {
    return (
        <>
            <HeaderPages title="Cardápio" subtitle="Veja o nosso menu e venha saborear a aqui" fundo={imgCardapio}>
                <MdRestaurantMenu className="text-4xl md:text-6xl" />
            </HeaderPages>

            <div className="h-screen grid place-items-center">
                <h2 className="text-3xl font-bold">Deivid Lindão</h2>
            </div>
        </>
    )
}