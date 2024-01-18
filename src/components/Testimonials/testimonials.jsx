import '/src/index.css'
import { useState } from 'react'

const testimonials = () => {

        const [show, setShow] = useState(1);

        const showToggle = (id) => {
            setShow(id);
        }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 min-h-[100vh] flex justify-center items-center">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight md:text-center text-gray-900 sm:text-4xl lg:text-5xl">Anda Merupakan prioritas kami</h2>

            <div className="mt-20 text-left md:text-center">
                <blockquote>
                    { show === 1 && (
                            <p className="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">“Enak banget! baru pertama kali coba pokoknya rekomendasi banget deh!”</p>
                        )
                    }
                    { show === 2 && (
                            <p className="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">“kesini awalnya cuma coba coba doang eh malah ketagihan wkwk! worth it pokoknya.”</p>
                        )
                    }
                    { show === 3 && (
                            <p className="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">“gara gara liat di instagram akhirnya gw mencoba untuk nyobain tempat ini. jujur, melebihi ekspetasi gua dong!”</p>
                        )
                    }
                </blockquote>
                {
                    show === 1 && (
                        <div className="flex items-center mt-16 md:justify-center">
                            <p className="text-lg font-semibold text-black">Kartin</p>
                            <p className="ml-3 text-lg text-gray-600">Mahasiswa</p>
                        </div>
                    )
                }
                {
                    show === 2 && (
                        <div className="flex items-center mt-16 md:justify-center">
                            <p className="text-lg font-semibold text-black">Juno</p>
                            <p className="ml-3 text-lg text-gray-600">Mahasiswa</p>
                        </div>
                    )
                }
                {
                    show === 3 && (
                        <div className="flex items-center mt-16 md:justify-center">
                            <p className="text-lg font-semibold text-black">May</p>
                            <p className="ml-3 text-lg text-gray-600">Mahasiswa</p>
                        </div>
                    )
                }
            </div>

            <div className="flex items-center mt-12 md:justify-center space-x-4">
                <div className="flex items-center justify-center w-24 h-24 rounded-full focus:ring-2 focus:ring-fuchsia-600">
                    <img className="object-cover w-20 h-20 rounded-full cursor-pointer" onClick={()=>showToggle(1)} src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg" alt="" />
                </div>

                <div className="flex items-center justify-center w-24 h-24 rounded-full focus:ring-2 focus:ring-fuchsia-600">
                    <img className="object-cover w-20 h-20 rounded-full cursor-pointer" onClick={()=>showToggle(2)} src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-2.jpg" alt="" />
                </div>

                <div className="flex items-center justify-center w-24 h-24 rounded-full focus:ring-2 focus:ring-fuchsia-600s">
                    <img className="object-cover w-20 h-20 rounded-full cursor-pointer" onClick={()=>showToggle(3)} src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-3.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default testimonials