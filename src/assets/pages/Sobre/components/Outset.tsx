import sobrebg1 from '../../../../../public/imgs/sobrebg1.jpg'
import sobrebg2 from '../../../../../public/imgs/sobrebg2.jpg'

export default function Outset() {
    return (
        <>
            <div className='h-[50vh] bg-fixed bg-no-repeat bg-cover mb-14 lg:mb-0'
                style={{ backgroundImage: `url(${sobrebg2})` }}></div>

            <section className="flex flex-col min-h-screen px-6 gap-16 
                mb-14 md:justify-center md:items-center lg:mb-0 lg:flex-row lg:min-h-[110vh] xl:min-h-screen">
                <div className="h-[50vh] bg-no-repeat bg-right-bottom bg-cover md:w-[25rem] md:h-[60vh] rounded-md"
                    style={{ backgroundImage: `url(${sobrebg1})` }}></div>

                <div className="flex flex-col gap-5 text-center md:max-w-[65vw] lg:max-w-[45vw]">
                    <h2 className="text-2xl font-bold">1994 - Onde tudo começou</h2>
                    <p>
                        No ano de 1994, um novo capítulo gastronômico teve início às margens serenas de um lago tranquilo. Era o nascimento de um restaurante que prometia mais do que simplesmente satisfazer o paladar; era um convite para uma experiência única. Naquele ano memorável, o restaurante à beira do lago inaugurou seu reinado como um refúgio para os amantes da boa comida, da beleza natural e da serenidade. Era mais do que um simples local para refeições; era um santuário para os sentidos, um lugar onde a arte e a natureza se encontravam para criar momentos inesquecíveis.
                    </p>
                    <p>
                        Os fundadores, apaixonados por culinária e pela beleza natural ao redor, investiram seu coração e alma neste empreendimento. Com um cardápio inspirado na sazonalidade dos ingredientes locais e uma abordagem criativa para pratos tradicionais, o restaurante prometia uma experiência gastronômica única para os visitantes. À medida que as primeiras mesas eram ocupadas, risadas e conversas animadas ecoavam pela brisa fresca da noite, criando uma atmosfera acolhedora e convidativa.
                    </p>
                </div>

            </section>
        </>
    )
}