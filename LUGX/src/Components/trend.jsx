export default function Trend() {

    const carditem = [
        { imgurl: "/public/resources/god of war.jpeg", category: "action", title: "god of war" },
        { imgurl: "/public/resources/stronghold.jpg", category: "strategy", title: "stronghold crusader" },
        { imgurl: "/public/resources/medal.jpg", category: "shooter", title: "medal of honor" },
        { imgurl: "public/resources/outlast.jpeg", category: "horror", title: "outlast" },
    ]



    return (
        <>

            <div className="flex justify-between items-center px-28 rounded-lg  ">

                <div className="font-bold " >

                    <div className="text-2xl tracking-[1px] text-[#ee626b] ">
                        HITS

                    </div>

                    <div className="text-4xl tracking-[1px] text-black">
                        Trending Games
                    </div>
                </div>


                <div >

                    <button className="bg-[#ee626b] text-white py-3 px-6
                     rounded-4xl cursor-pointer font-bold text-sm
                     ">VIEW ALL</button>

                </div>


            </div>







            <div className="flex  justify-around items-center px-16 py-8 ">


                {carditem.map(item => (
                    <div className="max-w-sm w-72 h-[350px] flex flex-col items-center rounded-xl shadow-lg m-4  bg-white">
                        <img
                            src={item.imgurl}
                            alt={item.title}
                            className="w-full cursor-pointer h-56 object-cover rounded-xl mb-4 shadow"
                            loading="eager"
                        />
                        <div className="flex items-center justify-between w-full px-2">
                            <div>
                                <p className="text-sm text-gray-500 tracking-wider font-semibold mb-2">{item.category}</p>
                                <h3 className="text-lg tracking-wider font-bold text-black">{item.title}</h3>
                            </div>
                            <img src="/resources/shopping-bag.png" alt="Shopping Bag" 
                            className="w-10 h-10 ml-2 bg-[#ee626b] p-2   rounded-full
                             cursor-pointer hover:bg-blue-500 transition duration-300" />
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}