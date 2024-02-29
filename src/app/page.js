import Image from "next/image";
import Link from 'next/link'

import Dashboard from "./Dashboard/page";

import logo from "./images/logo.png"

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    //   <div className="text-center lg:max-w-5xl lg:w-full h-screen lg:mb-0 lg:text-left flex items-center justify-center">
    //     <Link
    //      href="/Dashboard"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //       Dashboard{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //     </Link>        
    //   </div>
    // </main>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full shadow-sm shadow-slate-600 flex items-center justify-between">
      <Link href={"/"} passHref>
        <Image src={logo} className="w-32 mr-2" />
      </Link>
        <div className="flex items-center w-full sm:w-auto">
          <p className="text-base text-red-600 font-medium mx-2">HOME</p>
        </div>
        <div className="flex items-center justify-end w-full">
          <button className="text-base text-red-600 bg-transparent font-medium mx-2">
            Login
          </button>
          <button className="text-base text-white bg-red-600 p-1 rounded-md font-medium mx-2">
            Sign Up
          </button>
        </div>
      </div>

        <div className="w-screen mt-2">
          <div className="flex flex-col items-center w-full">
          <h3 className="text-base text-gray-700 font-medium mx-2">Meme generator</h3>
          <p className="text-base text-gray-700 font-medium mx-2">Create a meme from <strong>JPG</strong>, <strong>GIF</strong> or <strong>PNG</strong> images.
Edit your image and make a meme.</p>
          </div>
        <Dashboard />
        </div>

      </div>
  );
  }