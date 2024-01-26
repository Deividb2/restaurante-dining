import HotDogImg from '../../../public/imgs/HotDogImg.jpg'

export default function Breakfast() {
    return (
        <>
            <section className="h-[100vh] flex justify-center items-center bg-[#ccc]">
                <div className="flex flex-col items-end">
                    <div className="w-[10rem] h-[10rem] bg-red-500 rounded-full relative z-[0] top-[5rem] left-[5rem]"></div>
                    <div className="w-[40rem] h-[25rem] bg-green-600 relative z-[1]" 
                        style={{backgroundImage: `url(${HotDogImg})`}}></div>
                    <div className="w-[20rem] h-[20rem] bg-white self-start relative bottom-[15rem] right-[10rem] z-[2]"></div>
                </div>
            </section>
        </>
    )
}