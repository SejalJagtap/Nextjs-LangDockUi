import React from 'react';
import { ScrollArea,ScrollBar } from './scroll-area';
import Image from 'next/image';
 
export interface Artwork {
  
  artist: string
  svg: string
  art: string
}
 
export const works: Artwork[] = [
  {
    artist: "“With Langdock, many tasks that used to take hours now only take a few minutes.”",
    svg: "https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a504b1f35d45c1957b548_razor-white.svg",
    art: "https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a4f54928ba529e364454b_Shipping-min.jpg",
  },
  {
    artist: "“Most of our team is using Langdock on a daily basis to help with mundane tasks. It allows us to focus on what matters most.”",
    svg: "https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a504b1f35d45c1957b548_razor-white.svg",
    art: "https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654e30a53802c0f9238a8601_floy.jpg",
  },
  {
    artist: "“Langdock helped us to identify and implement LLM use cases at Superchat while enabling us to stay in control of our data and monitor usage.”",
    svg: "https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a504b1f35d45c1957b548_razor-white.svg",
    art: "https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654e30a53802c0f9238a8601_floy.jpg",
  },
]
function SuccessStories() {
    return (
      <>
        <div className='flex flex-col  md:justify-center px-[3em] lg:px-[8em] md:px-[8em] pt-[7em] pb-[5em]'>
          <div className="mx-auto sm:mx-0 md:mx-[5%] lg:mx-[2em] xl:mx-[4em]">
            <div className="max-w-[520px]">
              <h6 className="flex items-start text-gray-500 text-xs ">SUCCESS STORIES</h6>
              <h2 className="flex justify-start text-5xl font-semibold font-system ">
              What our customers say about us
              </h2>
              <p className="top-28 my-[1em] text-gray-700">
              Don’t just take our word for it. See how Langdock is highly effective for global enterprises, local startups, and agencies.
              </p>  
            </div>
            
          </div>
        </div>
        <ScrollArea className="lg:w-full rounded-md border">
        <div className="flex  space-x-4 p-4">
        {works.map((artwork) => (
            <div
            key={artwork.artist}
            className="shrink-0  overflow-hidden rounded-md bg-cover bg-center text-white h-[20em] lg:w-[50em] lg:h-[30em]"
            style={{ backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.2)), url(${artwork.art})`,}}
            >
            
              <Image
                src={artwork.svg}
                alt={`Photo by ${artwork.artist}`}
                className="object-cover p-[2em] "
                width={200}
                height={300}
              />
                  {/* text-foreground */}
                  <div className=" lg:text-3xl p-[2em]  lg:justify-start lg:items-center lg:w-[80%]">
                  {artwork.artist}
                  </div>
            
            </div>
        ))}
        </div>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>
    </>
    );
}

export default SuccessStories;