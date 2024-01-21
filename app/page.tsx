'use client'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import NavBar from '@/components/ui/navBar'
import Link from 'next/link'
import HeroSection from '@/components/ui/Video'
import YourComponent from '@/components/ui/YourComponent'
import Companies from '@/components/ui/Companies'
import ExploreCards from '@/components/ui/ExplorCards'
import SecurityCommitments from '@/components/ui/SecurityCommitments'
import Certifications from '@/components/ui/Certifications'
import Blinkist from '@/components/ui/Blinkist'
import Features from '@/components/ui/Features'
import { Card } from '@/components/ui/card'
import SuccessStories from '@/components/ui/SuccessStories'


export default function Home() {
  
  return (
    <>
      <NavBar/>
      
      <div className="flex  flex-col md:justify-center px-[3em] lg:px-[8em] md:px-[8em] pt-[10em] pb-[3em]">
        <div className="mx-auto sm:mx-0 md:mx-[5%] lg:mx-[2em] xl:mx-[4em]">
          <div className='flex  items-start text-gray-500 text-xs  my-2' >UNLOCK SUPERPOWERS FOR YOUR EMPLOYEESS</div>
          <div className='grid lg:grid-cols-2 md:grid-cols-1'>
            <div className='flex justify-start text-5xl font-semibold font-system   my-2' >The AI platform for team productivity</div>
            <div className=' text-gray-500 ' ><span className='flex text-black font-bold'>Meet Langdock.</span>Empower your employees with LLMs while staying in full control of your data. Chat with your internal knowledge, automate entire workflows, and build custom assistants.</div>
          </div>
          <div className='flex flex-row justify-start gap-4 py-[3em]'>
            <Button>Request a Demo</Button>
            <Button variant={'secondary'}>Get started for Free</Button>
          </div>
          <div className=' block top-3 ' >
            <HeroSection/>
            {/* <YourComponent/> */}
          </div>

          <Companies/>
          
          
        </div>
      </div>
      <div className='flex flex-col  md:justify-center px-[3em] lg:px-[8em] md:px-[8em] pt-[3em] pb-[3em]'>
          <div className="mx-auto sm:mx-0 md:mx-[5%] lg:mx-[2em] xl:mx-[4em]">
            <div className="max-w-[520px]">
              <h6 className="flex items-start text-gray-500 text-xs ">THE LANGDOCK PLATFORM</h6>
              <h2 className="flex justify-start text-5xl font-semibold font-system  ">
                Generative AI meets your internal data
              </h2>
              <p className="top-28 my-[1em] text-gray-700">
                From daily chat assistant to powerful automations. The Langdock platform is
                the only tool you need in your company to explore all possibilities of
                generative AI.
              </p>
            </div>
          </div>
        </div>

      <ExploreCards></ExploreCards>

      
      <div className='flex flex-col min-h-screen md:justify-center px-[3em] lg:px-[8em] md:px-[8em] pt-[3em]'>
        <div className="mx-auto sm:mx-0 md:mx-[5%] lg:mx-[2em] xl:mx-[4em]">
          <div className="max-w-[520px]">
              <h6 className="flex items-start text-gray-500 text-xs ">BUILD FOR ENTERPRISE SCALE</h6>
              <h2 className="flex justify-start text-5xl font-semibold font-system  ">
              Secure for every user, every time
              </h2>
              <p className="top-28 my-[1em] text-gray-700">
              Security isn`&apos;`t an afterthought at Langdock. It`&apos;`s our core commitment. We`&apos;`ve built robust processes to keep your data safe, your workspace private, and your information accurate.
              </p>
              <Link href="/">
                    <div className="flex justify-start  font-bold font-system hover:font-semibold">
                      Lean more about our security commitment
                    </div>
              </Link>
          </div>
          <SecurityCommitments></SecurityCommitments>
          <Certifications></Certifications>

        </div>        
      </div>
      <Blinkist></Blinkist>y
      <div className='min-h-screen bg-gray-100'>
        <Features></Features>
      </div>
      <SuccessStories></SuccessStories>
      
    </>
    
  )
}
