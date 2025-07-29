
function TopGames() {
    const games = [
        {
            imgurl: '/public/resources/god of war.jpeg',
            category: 'Action',
            name: 'God of War'
        },
        {
            imgurl: '/public/resources/stronghold.jpg',
            category: 'Strategy',
            name: 'Stronghold Crusader'
        },
        {
            imgurl: '/public/resources/medal.jpg',
            category: 'Shooter',
            name: 'Medal of Honor'
        },
        {
            imgurl: '/public/resources/outlast.jpeg',
            category: 'Horror',
            name: 'Outlast'
        },
        {
            imgurl: '/public/resources/trending-01.jpg',
            category: 'Adventure',
            name: 'Warframe'
        }
    ];

    return (
        <>
            <div className="flex justify-between items-center px-28 py-8 rounded-lg">
                <div className="font-bold">
                    <div className="text-base tracking-[1px] text-[#ee626b]">Top Games</div>
                    <div className="text-3xl tracking-[1px] text-black mt-2">Most Played</div>
                </div>
                <button
                    className="bg-[#ee626b] text-white py-3 px-6 rounded-3xl cursor-pointer font-bold text-sm transition-colors duration-300 hover:bg-blue-500"
                >
                    VIEW ALL
                </button>
            </div>

            <div className="flex justify-around items-center px-16 py-8">
                {games.map((game, idx) => (
                    <div key={idx} className="max-w-xs w-64 h-[350px] flex flex-col items-center rounded-xl shadow-lg m-4 bg-white">
                        <img
                            src={game.imgurl}
                            alt={game.name}
                            className="w-full aspect-square object-cover rounded-xl mb-4 shadow"
                            loading="eager"
                        />
                        <p className="text-sm text-[#ee626b] font-semibold mb-2">{game.category}</p>
                        <h3 className="text-lg font-bold text-black mb-4">{game.name}</h3>
                        <button
                            className="bg-[#ee626b] text-white py-2 px-4 rounded-2xl cursor-pointer font-bold text-sm transition-colors duration-300 hover:bg-blue-500"
                        >
                            Explore
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TopGames;