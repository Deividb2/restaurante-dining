import { IoHome as HomeIcon } from "react-icons/io5";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";

export default function InfosContact() {
    return (
        <>
            <section className="flex flex-col justify-center items-center gap-10 text-center p-10 bg-black text-white
                md:flex-row lg:gap-20 lg:h-[60vh]">
                <div className="flex flex-col items-center justify-around max-w-[20rem] min-h-[30vh] p-2 gap-4
                    md:h-[45vh] md:justify-start lg:h-[35vh]">
                    <div className="text-4xl border-[2px] border-red-600 p-3 rounded-full 
                        hover:border-[#000] transition-all ease-linear duration-300">
                        <HomeIcon />
                    </div>
                    <h4 className="font-semibold text-xl cursor-default">ENDEREÇO</h4>
                    <div className="flex flex-col gap-2 cursor-default">
                        <span>Avenida Lúcio Costa, 2900</span>
                        <span>Barra da Tijuca | Rio de Janeiro | RJ</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-around max-w-[20rem] min-h-[30vh] p-2 gap-4
                    md:h-[45vh] md:justify-start lg:h-[35vh]">
                    <div className="text-4xl border-[2px] border-red-600 p-3 rounded-full
                        hover:border-[#000] transition-all ease-linear duration-300">
                        <PhoneIcon />
                    </div>
                    <h4 className="font-semibold text-xl cursor-default">TELEFONES</h4>
                    <div className="flex flex-col gap-2">
                        <span className="cursor-pointer hover:text-red-600 transition-all ease-linear duration-300">21 2493-2021</span>
                        <span className="cursor-pointer hover:text-red-600 transition-all ease-linear duration-300">21 2494-7418</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-around max-w-[20rem] min-h-[30vh] p-2 gap-4
                    md:h-[45vh] md:justify-start lg:h-[35vh]">
                    <div className="text-4xl border-[2px] border-red-600 p-3 rounded-full
                        hover:border-[#000] transition-all ease-linear duration-300">
                        <EmailIcon />
                    </div>
                    <h4 className="font-semibold text-xl cursor-default">EMAIL</h4>
                    <div>
                        <span className="cursor-pointer hover:text-red-600 transition-all ease-linear duration-300">
                            contato@picanhaeetc.com.br
                        </span>
                    </div>
                </div>
            </section>

            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12268.150075103387!2d-43.241363!3d-22.924312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e0d9f408217%3A0x9f72a96c56d23676!2sSesc%20Tijuca!5e1!3m2!1spt-BR!2sbr!4v1712368229106!5m2!1spt-BR!2sbr" width="100%" height="350"></iframe>
            </section>
        </>
    )
}