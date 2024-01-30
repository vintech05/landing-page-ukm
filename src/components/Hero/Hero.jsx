import '/src/index.css'

const Hero = () => {

    return (
    <section className="pt-20 bg-gray-100 sm:py-16 lg:pt-32 min-h-[100vh]">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                <div className="font-Inter">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">BurgerLoyal kini Hadir untukmu.</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='bg-yellow-400 font-semibold py-2 px-6 rounded-md mt-4 hover:bg-yellow-500 transition-all'><a href="#menu">View Menu</a></button>
                </div>

                <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                    <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                        <div className='relative'>
                            <svg className='absolute z-0 scale-[1.4] lg:scale-[1.9]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FDE047" d="M41,-68.6C51.4,-65,56.9,-50.5,61.2,-37.3C65.6,-24,68.8,-12,66,-1.6C63.2,8.8,54.4,17.5,47.9,27.1C41.5,36.7,37.3,47.1,29.8,56.5C22.2,65.9,11.1,74.2,0.8,72.9C-9.6,71.6,-19.1,60.6,-26.9,51.4C-34.7,42.1,-40.7,34.5,-48.8,26.3C-57,18,-67.2,9,-72.5,-3C-77.7,-15.1,-78,-30.1,-71,-40.3C-64,-50.6,-49.7,-56,-36.7,-58.1C-23.6,-60.2,-11.8,-59,1.7,-62C15.3,-65,30.6,-72.2,41,-68.6Z" transform="translate(100 100)" />
                            </svg>
                            <img className="ml-auto rounded-md relative z-10 scale-[1.2] lg:scale-[1.5] object-contain" src="/src/assets/burger-hero.png" alt="burgir" />
                        </div>
                        {/* <div className="absolute -bottom-10 -left-16">
                            <div className="bg-yellow-300 rounded-md rotate-[-8deg] shadow-lg">
                                <div className="px-8 py-10 font-Inter rotat">
                                    <span className="block text-4xl font-bold text-black lg:text-5xl"> 50% </span>
                                    <span className="block mt-2 text-base leading-tight text-black"><strong>Hanya</strong> Untuk <br />Paket Keluarga! </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Hero