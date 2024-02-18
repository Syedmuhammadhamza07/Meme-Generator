import Link from "next/link";

export default async function Dashboard() {
  const res = await fetch('https://api.imgflip.com/get_memes');
  const data = await res.json();
  const images = data.data.memes;

  return (
    <div className="w-full m-2 bg-gradient-to-tl from-black to-slate-500 ">
      <div className="flex items-center justify-center w-full my-0.5">
          <h1 className="text-blue-950 font-semibold text-6xl">Dashboard</h1>
      </div>
      <div className="main-card-div" > 
        {images.map((item, index) => (
          <div key={index}  className="mb-0 text-center lg:mb-0 lg:text-left">
            <Link href={`/detail/${item.id}`} passHref>
              <div className="border-2 p-2 w-60 h-auto m-3" rel="noopener noreferrer">
                <img src={item.url} alt={item.name} width={100} height={100} className="p-2 w-52 h-52 " />
                <span className="image-name text-white text-center">{item.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
