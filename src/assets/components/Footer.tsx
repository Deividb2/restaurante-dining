import { FaFacebook, FaInstagram, FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col bg-black text-[#fff]">
        <section className="flex flex-wrap justify-center text-center gap-10 p-5">
          <div className="lg:text-left">
            <h3 className="font-bold text-xl">PICANHA E ETC</h3>
            <div className="flex flex-col text-sm mt-6">
              <h4 className="text-[#7A7A7A]">LOCALIZAÇÃO:</h4>
              <span>Avenida Lúcio Costa, 2900</span>
              <span>Barra da Tijuca – Rio de Janeiro | RJ</span>
              <h4 className="text-[#7A7A7A]">RESERVAS:</h4>
              <span>21 2493-2021 | 21 2494-7418</span>
              <h4 className="text-[#7A7A7A]">E-MAIL:</h4>
              <span>contato@picanhaeetc.com.br</span>
            </div>

            <div className="flex gap-2 justify-center mt-6">
              <span className="p-2 bg-[#3F3F3F] rounded-full">
                <FaFacebook />
              </span>

              <span className="p-2 bg-[#3F3F3F] rounded-full">
                <FaInstagram />
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl">COMO CHEGAR</h4>
            <div className="lg:max-w-[20vw]">
              <iframe
                className="w-full h-48 mt-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.295252476581!2d-43.24041742418392!3d-22.926079511295047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e0d9f408217%3A0x9f72a96c56d23676!2sSesc%20Tijuca!5e1!3m2!1spt-BR!2sbr!4v1706990419867!5m2!1spt-BR!2sbr"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl">FUNCIONAMENTO</h4>

            <ul className="flex justify-between w-screen text-left text-sm mt-5 px-5 md:max-w-[35vw] lg:max-w-[20vw] lg:text-xs">
              <div>
                <li className="mb-3">SEGUNDA</li>
                <li className="mb-3">TERÇA</li>
                <li className="mb-3">QUARTA</li>
                <li className="mb-3">QUINTA</li>
                <li className="mb-3">SEXTA</li>
                <li className="mb-3">SÁBADO</li>
                <li className="mb-3">DOMINGO</li>
              </div>

              <div>
                <li className="mb-3">11:30h às 23:45h</li>
                <li className="mb-3">11:30h às 23:45h</li>
                <li className="mb-3">11:30h às 23:45h</li>
                <li className="mb-3">11:30h às 23:45h</li>
                <li className="mb-3">11:30h às 23:45h</li>
                <li className="mb-3">11:30h às 01:00h</li>
                <li className="mb-3">11:30h às 23:45h</li>
              </div>
            </ul>
          </div>

          <div className="mb-10 ">
            <h4 className="font-bold text-xl">NEWSLETTER</h4>
            <form className="flex flex-col items-start gap-3 text-left mt-5">
              <input
                className="w-[80vw] px-2 py-3 border-[#fff] border-[1px] bg-transparent placeholder:text-[#fff] text-xs outline-none
                md:max-w-[35vw] lg:max-w-[15vw]"
                type="text"
                name="nome"
                placeholder="NOME *"
                required
              />

              <input
                className="w-[80vw] px-2 py-3 border-[#fff] border-[1px] bg-transparent placeholder:text-[#fff] text-xs outline-none
                md:max-w-[35vw] lg:max-w-[15vw]"
                type="email"
                name="email"
                placeholder="EMAIL *"
                required
              />

              <input
                className="px-6 py-2 border-[#D1272D] border-2 text-xs"
                type="submit"
                value="ASSINAR"
              />
            </form>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <hr className="mb-3 w-[90vw]" />
          <div className="flex flex-col items-center justify-center py-5 font-medium md:flex-row md:gap-4">
            <span>
              Desenvolvido por
              <span className="text-[#D1272D]"> Deivid Barreto</span>
            </span>
            <span>|</span>
            <span className="flex items-center gap-2">
              <FaRegCopyright /> Todos os direitos reservados
            </span>
          </div>
        </section>
      </footer>
    </>
  );
}
