import '/src/index.css'

const product = () => {
    return (
        <section id='menu' className="py-10 bg-[#202020] sm:py-16 lg:py-24 min-h-[100vh]">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-yellow-300 sm:text-4xl lg:text-5xl">Pilihan Produk Kami</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-[#CCCCCC]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div className='ring-2 ring-offset-1 ring-offset-yellow-400 ring-yellow-400 bg-[#010104]/50 hover:ring-offset-2 hover:ring-offset-[#202020] hover:ring-yellow-400 transition-all p-2 rounded-lg'>
                <div className='relative'>
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3"/>
                        <img className="object-cover w-full h-full rounded-md" src="/src/assets/menu-1.jpg" alt="" />
                </div>
                <div className='flex items-center gap-2'>
                    <span className="px-4 py-2 text-xs flex items-center gap-1 tracking-widest uppercase rounded-full font-semibold text-rose-400 bg-rose-900 mt-9">
                            HOT <ion-icon name="flame"></ion-icon>
                    </span>
                </div>
                    <p className="mt-6 text-xl">
                        <a href="#" title="" className="text-[#ebe9fc] font-Inter"> Menu 1 </a>
                    </p>
                        <a href="#" title="" className="text-[#CCCCCC] font-bold font-Inter"> Rp32.968 </a>
                <p className="mt-4 text-[#CCCCCC]/50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div className='ring-2 ring-offset-1 ring-offset-yellow-400 ring-yellow-400 bg-[#010104]/50 hover:ring-offset-2 hover:ring-offset-[#202020] hover:ring-yellow-400 transition-all p-2 rounded-lg'>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full rounded-md" src="/src/assets/menu-2.jpg" alt="" />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-yellow-400 bg-yellow-900 mt-9"> BARU </span>
                <p className="mt-6 text-xl">
                    <a href="#" title="" className="text-[#ebe9fc] font-Inter"> Menu 2 </a>
                </p>
                    <a href="#" title="" className="text-[#CCCCCC] font-Inter font-bold"> Rp30.323 </a>
                <p className="mt-4 text-[#CCCCCC]/50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div className='ring-2 ring-offset-1 ring-offset-yellow-400 ring-yellow-400 bg-[#010104]/50 hover:ring-offset-2 hover:ring-offset-[#202020] hover:ring-yellow-400 transition-all p-2 rounded-lg'>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full rounded-md" src="/src/assets/menu-3.jpg" alt="" />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-green-400 bg-green-900 mt-9"> PROMO </span>
                <p className="mt-6 text-xl font-Inter">
                    <a href="#" title="" className="text-[#ebe9fc]"> Menu 3 </a>
                </p>
                <div className='flex items-center gap-2'>
                    <a href="#" title="" className="text-[#CCCCCC] font-bold font-Inter"> Rp40.456 </a>
                    <a href="#" title="" className="text-gray-400/50 text-[11px] line-through pb-1"> Rp50.456 </a>
                </div>
                <p className="mt-4 text-[#CCCCCC]/50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    </div>
</section>

    )
}

export default product