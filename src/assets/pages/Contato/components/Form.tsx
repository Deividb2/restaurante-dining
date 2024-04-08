export default function Form() {
    return (
        <>
            <main className="flex items-center justify-center px-5 py-10 min-h-[75vh] bg-red-900 lg:min-h-[85vh]">
                <form className="flex flex-col w-full gap-8 text-base lg:max-w-[70rem]" autoComplete="off"
                    onSubmit={submitDefault}>

                    <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
                        <input type="text" name="nome" placeholder="NOME*" className="p-2 bg-transparent text-white placeholder:text-white 
                            border-[1px] border-white outline-none focus:border-gray-400" required />
                        <input type="email" name="email" placeholder="E-MAIL*" className="p-2 bg-transparent text-white placeholder:text-white 
                            border-[1px] border-white outline-none focus:border-gray-400" required />
                        <select name="assunto" className="p-2 bg-transparent text-white placeholder:text-white 
                                border-[1px] border-white outline-none cursor-pointer" required>
                            <option value="Assuntos" disabled>ASSUNTO*</option>
                            <option value="Elogios" className="text-black uppercase">Elogios</option>
                            <option value="Criticas" className="text-black uppercase">Críticas</option>
                            <option value="Duvidas" className="text-black uppercase">Dúvidas</option>
                            <option value="Sugestoes" className="text-black uppercase">Sugestões</option>
                            <option value="Carreira" className="text-black uppercase">Carreira</option>
                            <option value="Fornecedores" className="text-black uppercase">Fornecedores</option>
                        </select>
                    </div>

                    <textarea name="mensagem" placeholder="MENSAGEM*" className="w-full h-[45vh] p-2 bg-transparent text-white              placeholder:text-white border-[1px] border-white outline-none focus:border-gray-400 resize-none
                        lg:h-[35vh]" required></textarea>
                    <input type="submit" value="ENVIAR" className="self-center py-2 px-6 bg-transparent text-white 
                            border-[2px] border-red-500 outline-none cursor-pointer" />
                </form>
            </main>
        </>
    )
}

const submitDefault = (evt: any) => {
    evt.preventDefault()
    evt.stopPropagation()
    alert("Formulário enviado")
}