import '/src/index.css'

const product = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pilihan Produk Kami</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
                <div className='relative'>
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3"/>
                        <img className="object-cover w-full h-full" src="/src/assets/menu-1.jpg" alt="" />
                </div>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> HOT </span>
                <p className="mt-6 text-xl font-semibold">
                    <a href="#" title="" className="text-black"> Menu 1 </a>
                </p>
                <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="/src/assets/menu-2.jpg" alt="" />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-yellow-500 bg-yellow-100 mt-9"> BARU </span>
                <p className="mt-6 text-xl font-semibold">
                    <a href="#" title="" className="text-black"> Menu 2 </a>
                </p>
                <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="/src/assets/menu-3.jpg" alt="" />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-green-500 bg-green-100 mt-9"> PROMO </span>
                <p className="mt-6 text-xl font-semibold">
                    <a href="#" title="" className="text-black"> Menu 3 </a>
                </p>
                <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    </div>
</section>

    )
}

export default product