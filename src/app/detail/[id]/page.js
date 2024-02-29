"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import webLogo from "./logo.png";

export default function Details({ params }) {
  const [selectedMemeUrl, setSelectedMemeUrl] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [generatedMemeUrl, setGeneratedMemeUrl] = useState("");

  useEffect(() => {
    fetchMeme();
  }, []);

  async function fetchMeme() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const result = await res.json();
    const memes = result.data.memes.find((memes) => memes.id === params.id);
    setSelectedMemeUrl(memes.url);
  }

  async function generateMeme() {
    const res = await fetch(
      ` https://api.imgflip.com/caption_image?template_id=${params.id}&username=MuneebAhmed3&password=muneeb12&text0=${text1}&text1=${text2}`
    );
    const result = await res.json();
    if (result.success) {
      setGeneratedMemeUrl(result.data.url);
    } else {
      alert(result.error_message);
    }
  }

  return (
    <div>
      <div className="w-full shadow-sm shadow-slate-600 flex items-center justify-between">
      <Link href={"/"} passHref>
        <Image src={webLogo} className="w-32 mr-2" />
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
      <div className="w-full m-auto mt-5 flex flex-col items-center justify-center">
        <div className="border-gray-500 border w-full h-fit flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full py-4">
            <h1 className="text-gray-600 font-semibold text-2xl">
              Meme Generator
            </h1>
          </div>
          <div className="flex items-center justify-center w-full sm:flex-col">
            <img
              className="w-64 h-64 m-4"
              src={selectedMemeUrl}
              alt="Selected Meme"
            />
            <div className="mb-4 flex flex-col mx-2">
              <label
                htmlFor="text1"
                className="mr-2 text-lg font-semibold text-gray-600"
              >
                Text 1:
              </label>
              <input
                className="h-12 p-2 border bg-transparent text-gray-600 border-gray-800 rounded"
                type="text"
                id="text1"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="text2"
                className="mr-2 text-lg font-semibold text-gray-600"
              >
                Text 2:
              </label>
              <input
                className="h-12 w-auto p-2 border bg-transparent text-gray-600 border-gray-800 rounded"
                type="text"
                id="text2"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold p-2 h-12 border-red-700 hover:border-red-500 rounded  m-2.5"
              onClick={generateMeme}
            >
              Generate
            </button>
          </div>
        </div>
        <div className="sm:mt-3">
          {generatedMemeUrl && (
            <img
              className="w-72 h-64 p-4"
              src={generatedMemeUrl}
              alt="Generated Meme"
            />
          )}
        </div>
      </div>
    </div>
  );
}
