import { BsChatLeftText as Chat } from "react-icons/bs";

export default function Purpose() {
    return (
        <>
            <section className="flex flex-wrap justify-center gap-10 min-h-screen p-5 lg:items-center">
                {datasPurpose.map((el, index) =>
                    <div key={index} className="flex flex-col items-center gap-5 max-w-[25rem] max-h-[60vh] px-6 py-8 text-center  
                        rounded-lg border-[4px] border-[#66666638] md:max-w-[35vw] md:h-[60vh] lg:max-w-[25vw]">
                        <Chat className="text-3xl text-[#ff0000]" />
                        <h3 className="text-2xl font-bold">{el.title}</h3>
                        <p className="text-base">{el.text}</p>
                    </div >
                )
                }
            </section >
        </>
    )
}

const datasPurpose = [
    {
        title: 'Missão',
        text: 'Te fazer um dos nossos!! Ter um elo de confiança com os nossos clientes é o que nos deixa mais fortes e a alegria em seus rostos é a nossa melhor gorjeta.'
    },
    {
        title: 'Visão',
        text: 'Acreditamos que um bom atendimento é fundamental para uma excelente experiência gastronômica. Preservando nossos valores e tradições acima de tudo!'
    },
    {
        title: 'Propósito',
        text: 'Pretendemos ser reconhecidos como uma empresa que proporciona: explosão de sabores a cada garfada, através da criatividade e do afeto que só o povo carioca tem para todo o mundo!'
    },
]