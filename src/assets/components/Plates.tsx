import { Link } from 'react-router-dom'
import { BiBookOpen } from 'react-icons/bi'
import ImgPlates from '../../../public/imgs/imgPlates.jpg'

export default function Plates() {
    return (
        <>
            <section className="min-h-[390vh] flex flex-col justify-end bg-contain bg-no-repeat bg-[#111111] py-10
            md:min-h-[170vh]"
            style={{backgroundImage: `url(${ImgPlates})`}}>
                <div className="flex flex-wrap justify-center items-center gap-14 
                    md:gap-8 md:grid md:grid-cols-3 md:place-items-center md:px-4">
                    {
                        pratos.map((elementos, index) => 
                            <div key={++index} className="flex flex-col gap-4 max-w-[16rem] px-4 md:px-6 py-10 text-white bg-[#333333] 
                                md:max-w-[23rem]">
                                <div className="flex items-center gap-2 lg:gap-4">
                                    <h4 className="py-1 px-4 rounded-full bg-red-600 font-semibold text-4xl
                                        md:text-3xl md:py-2 md:px-5 lg:py-3 lg:px-6 lg:text-4xl ">{++index}</h4>
                                    <h3 className='text-2xl'>{elementos.title}</h3>
                                </div>
                                
                                <p className="italic text-base text-[#b3b3b3] lg:text-lg">{elementos.text}</p>
                            
                                <Link to='/cardapio' className='border-b-4 self-start flex items-center gap-1'><BiBookOpen /> SABER MAIS</Link>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

const pratos = [
    {
        title: 'Comida fresca',
        text: 'Texto de amostra. Clique para selecionar a caixa de texto. Clique novamente ou clique duas vezes para começar a editar o texto.'
    },
    {
        title: 'Jantares',
        text: 'Texto de amostra. Clique para selecionar a caixa de texto. Clique novamente ou clique duas vezes para começar a editar o texto.'
    },
    {
        title: 'Menu Clássico',
        text: 'Texto de amostra. Clique para selecionar a caixa de texto. Clique novamente ou clique duas vezes para começar a editar o texto.'
    },
    {
        title: 'Especial do Chef',
        text: 'Texto de amostra. Clique para selecionar a caixa de texto. Clique novamente ou clique duas vezes para começar a editar o texto.'
    },
    {
        title: 'Massas e Pizzas',
        text: 'Texto de amostra. Clique para selecionar a caixa de texto. Clique novamente ou clique duas vezes para começar a editar o texto.'
    },
    {
        title: 'Pratos Veganos',
        text: 'Texto de amostra. Clique para selecionar a caixa de texto. Clique novamente ou clique duas vezes para começar a editar o texto.'
    },
]