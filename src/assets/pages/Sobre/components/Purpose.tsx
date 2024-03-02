import { BsChatLeftText as Chat } from "react-icons/bs";
import datasPurpose from '../../../../dados/purpose.json'


export default function Purpose() {

    const purposeDatas = datasPurpose.data

    return (
        <>
            <section className="flex flex-wrap justify-center gap-10 min-h-screen p-5 lg:items-center">
                {
                    purposeDatas.map((el, index) =>
                        <div key={index} className="flex flex-col items-center gap-5 max-w-[25rem] min-h-[60vh] px-6 py-8 text-center  
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