export default function Hero() {
    return (
        <>
            <div className="flex ">


                <div className="w-full flex flex-col justify-center
                 items-start p-16 space-y-4 ml-10 text-white pt-28 ">


                    <div className="font-bold text-2xl tracking-[2px]">
                        WELCOME TO LUGX
                    </div>

                    <div className="font-bold text-5xl tracking-[2px]">
                        BEST GAMING SITE EVER !
                    </div>

                    <div className="leading-9">
                        LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
                        You can download and use this layout for commercial purposes.
                        Please tell your friends about TemplateMo.
                    </div>

                    <div className="pt-12   w-[80%]      flex gap-2 ">
                        <input
                            type="text"
                            placeholder="Search games..."
                            className="w-full px-4 py-4 rounded-3xl text-black
                             bg-white focus:outline-none  focus:ring-blue-500"
                        />
                        <button
                            className=" bg-[#ee626b] hover:bg-red-600 w-[30%]
                             text-white font-bold 
                              rounded-3xl  transition cursor-pointer relative right-[20%]"
                        >
                            Search Now
                        </button>
                    </div>

                </div>


                <div className="pt-16 w-full">
                    <img src="public/resources/banner.jpg" alt="" className="rounded-3xl ml-44" />
                    <div className="w-fit relative left-[480px] bottom-[480px] bg-[#008af8] text-white
                     font-bold text-2xl py-2 px-5  rounded-full text-center">
                        30$
                        </div> 

                    <div className=" w-[15%] relative left-40 bottom-30  bg-[#ee626b] text-white
                     font-bold text-3xl p-4 rounded-full shadow-lg text-center">
                        40% OFF
                    </div>

                </div>



            </div>
        </>
    )
}