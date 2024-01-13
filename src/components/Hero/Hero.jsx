import '/src/index.css'

const Hero = () => {

    return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 min-h-[100vh]">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                <div className="font-Inter">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">BurgerLoyal kini Hadir untukmu.</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                    <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                        <img className="ml-auto rounded-md shadow-xl object-contain" src="/src/assets/burgers.jpg" alt="burgir" />
                        <img className="absolute -top-10 -left-8 rotate-[-20deg] object-contain" width="84" height="84" src="https://img.icons8.com/laces/64/crown.png" alt="crown"/>

                        <div className="absolute -bottom-10 -left-16">
                            <div className="bg-yellow-300 rounded-md rotate-[-8deg] shadow-lg">
                                <div className="px-8 py-10 font-Inter rotat">
                                    <span className="block text-4xl font-bold text-black lg:text-5xl"> 50% </span>
                                    <span className="block mt-2 text-base leading-tight text-black"><strong>Hanya</strong> Untuk <br />Paket Keluarga! </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Hero