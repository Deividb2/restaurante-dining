interface Dados {
    title: string,
    subtitle: string
    fundo: string,
    children: any
}

export default function HeaderContato(props: Dados) {
    return (
        <section className="flex flex-col items-center justify-center gap-5 h-[70vh] px-2 text-[#fff] bg-no-repeat bg-center bg-cover
            md:h-[70vh]" style={{ backgroundImage: `url(${props.fundo})` }}>
            {
                props.children
            }
            <h1 className="text-3xl font-bold md:text-5xl">{props.title}</h1>
            <h2 className="font-medium text-lg text-center md:text-xl">{props.subtitle}</h2>
        </section>
    );
}
