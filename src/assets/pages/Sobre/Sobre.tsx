import HeaderPages from "../../components/HeaderPages"
import imgSobre from '../../../../public/imgs/BM1.jpg'
import { IoMdPeople } from "react-icons/io"

export default function Sobre() {
    return (
        <>
            <HeaderPages title="Sobre nós" subtitle="Como sabe como chegamos até aqui?" fundo={imgSobre} >
                <IoMdPeople className="text-4xl md:text-6xl" />
            </HeaderPages>
        </>
    )
}