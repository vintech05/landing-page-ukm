import '/src/index.css'

const service = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] font-Inter py-14">
        <div className='grid grid-cols-1'>
            <div className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">
                <h1>Kenapa Harus Pilih Kami</h1>
            </div>
                <div className='text-gray-600 text-sm text-center mt-8 mx-20 break-all'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vero quod delectus modi ducimus <br className='hidden md:block' /> exercitationem possimus dolores quam quos perspiciatis.</p>
                </div>
            <div className='pt-28'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 md:mx-0 max-w-6xl">
                    <div className="bg-gray-50 shadow-lg grid place-items-center py-20 p-14">
                        <div className='text-3xl bg-yellow-400 shadow-yellow-300 shadow-lg py-5 px-6 rounded-full'>
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                        </div>
                        <div className='mt-4 text-xl font-bold'>
                            Terpercaya
                        </div>
                        <div className='text-sm text-gray-600 text-center mt-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum beatae omnis?
                        </div>
                        <button className='mt-6 bg-yellow-400 hover:bg-yellow-500 font-light cursor-pointer py-2 px-6 rounded-md font-Inter'>
                            Selengkapnya
                        </button>
                    </div>
                    <div className="bg-gray-50 shadow-lg grid place-items-center py-20 p-14">
                        <div  className='text-3xl bg-yellow-400 shadow-yellow-300 shadow-lg py-5 px-6 rounded-full'>
                            <ion-icon name="timer-outline"></ion-icon>
                        </div>
                        <div className='mt-4 text-xl font-bold'>
                            Tepat Waktu
                        </div>
                        <div className='text-sm text-gray-600 text-center mt-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum beatae omnis?
                        </div>
                        <button className='mt-6 bg-yellow-400 hover:bg-yellow-500 font-light cursor-pointer py-2 px-6 rounded-md font-Inter'>
                            Selengkapnya
                        </button>
                    </div>
                    <div className="bg-gray-50 shadow-lg grid place-items-center py-20 p-14">
                        <div  className='text-3xl bg-yellow-400 shadow-yellow-300 shadow-lg py-5 px-6 rounded-full'>
                            <ion-icon name="home-outline"></ion-icon>
                        </div>
                        <div className='mt-4 text-xl font-bold'>
                            Delivery 
                        </div>
                        <div className='text-sm text-gray-600 text-center mt-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum beatae omnis?
                        </div>
                        <div>

                        </div>
                        <button className='mt-6 bg-yellow-400 hover:bg-yellow-500 font-light cursor-pointer py-2 px-6 rounded-md font-Inter'>
                            Selengkapnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default service