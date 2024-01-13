import '/src/index.css'

const about = () => {
    return (
        <section className="py-10 bg-[#18181C] sm:py-16 lg:py-24 min-h-[100vh]">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
                <div className="relative max-w-xs mb-12">
                    <img className="object-bottom rounded-md w-[60em] h-[30em] object-cover grayscale shadow-xl" src="/src/assets/journey.jpg" alt="journey" />
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold leading-tight text-yellow-400 sm:text-4xl lg:text-5xl">Tentang Kami</h2>
                <p className="mt-4 text-base leading-relaxed text-[#CCCCCC]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, porro voluptatibus! Commodi modi accusamus sint voluptates in nesciunt. Vero perferendis necessitatibus laboriosam fuga dolore quod.</p>
            </div>
        </div>
    </div>
</section>

    )
}

export default about