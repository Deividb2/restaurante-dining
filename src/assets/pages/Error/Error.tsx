import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
            <div className="flex justify-center items-center bg-[#ccc] h-screen">
                <div className='flex flex-col items-center gap-4'>
                    <h1 className="text-red-500 text-2xl font-bold">ERROR 404</h1>
                    <Link to='/' className='py-3 px-6 bg-black text-white font-bold rounded-full
                    hover:bg-white hover:text-red-500 transition-all delay-75 ease'>Voltar</Link>
                </div>
            </div>
        </>
    )
}