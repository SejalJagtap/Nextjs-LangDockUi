// ExploreCards.js
import React from 'react';
import Image from 'next/image';
import { Card } from './card';
import { Button } from './button';
import bgImage1 from "../../public/Explore1.jpg";
import bgImage2 from "../../public/Explore2.jpg";
import bgImage3 from "../../public/Explore3.jpg";
import bgImage4 from "../../public/Explore4.jpg";
import { ChevronRightIcon } from "@radix-ui/react-icons"
const ExploreCards = () => {
  return (
    <div className='max-w-[80%] mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-9'>
      <Card className="flex justify-center items-end pb-[2em] bg-cover bg-center h-[20em] mb-[2em]" style={{ backgroundImage: 'url(https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654928344c0cc22fe7dd8c92_chat-bg-min.jpg)' }}>
      <Button  >
        Explore
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      </Card>
      <Card className="flex justify-center items-end pb-[2em] bg-cover bg-center h-[20em] mb-[2em]" style={{ backgroundImage: `url(${bgImage2.src})` }}>
      <Button  >
        Explore
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      </Card>
      <Card className="flex justify-center items-end pb-[2em] bg-cover bg-center h-[20em] mb-[2em]" style={{ backgroundImage: `url(${bgImage3.src})` }}>
      <Button  >
        Explore
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      </Card>
      <Card className="flex justify-center items-end pb-[2em] bg-cover bg-center h-[20em] mb-[2em]" style={{ backgroundImage: `url(${bgImage4.src})` }}>
      <Button variant={'secondary'} >
        Coming Soon
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      </Card>
    </div>
  );
}

export default ExploreCards;
