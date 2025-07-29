export default function SiteReach() {

    const siteData = [
    { imgurl: "public/resources/featured-01.png", title: "FREE STORAGE" },
    { imgurl: "public/resources/featured-02.png", title: "USER MORE" },
    { imgurl: "public/resources/featured-03.png", title: "REPLY READY" },
    { imgurl: "public/resources/featured-04.png", title: "EASYY LAYOUT" },
    ]




    return (
        <div className="relative bottom-24  flex flex-row justify-center items-center w-full">
            {siteData.map((site) => (
                <div className="bg-white flex w-[20%] items-center justify-center m-4  rounded-2xl shadow-2xl">
                    <div className="flex flex-col gap-4 items-center justify-center p-4 m-4 rounded-lg ">
                        <div className="flex items-center justify-center bg-blue-600 rounded-full p-6
                        hover:bg-[#ee626b] transition duration-400  cursor-pointer ">
                            <img src={site.imgurl} alt={site.title} />
                        </div>
                        <div className="text-black font-bold text-xl">{site.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}