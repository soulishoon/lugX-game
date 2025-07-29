export default function TopCategory() {

    const categories = [
        { imgurl: '/public/resources/god of war.jpeg', title: 'Action' },
        { imgurl: '/public/resources/stronghold.jpg', title: 'Strategy' },
        { imgurl: '/public/resources/medal.jpg', title: 'Shooter' },
        { imgurl: '/public/resources/outlast.jpeg', title: 'Horror' },
        { imgurl: '/public/resources/trending-01.jpg', title: 'Adventure' },

    ];

    return (
        <div className="w-full flex flex-col items-center py-8 mt-5">
            <div className="font-bold text-3xl mb-8 text-[#000000]">Top Categories</div>
            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center w-64 rounded-xl p-4">
                        <div className="w-full flex flex-col">
                            <span className="w-full  text-lg font-bold bg-blue-500 text-white p-4 rounded-t-lg text-center transition-colors duration-300 cursor-pointer hover:bg-[#ee626b]">
                                {cat.title}
                            </span>
                            <img src={cat.imgurl} alt={cat.title} className="w-full h-64 aspect-square 
                            object-cover rounded-lg relative bottom-2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}