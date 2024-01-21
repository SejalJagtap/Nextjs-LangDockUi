import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import logo from "../../public/soc-2.jpg"
import Image from 'next/image';

function Certifications() {
  return (
    <div className='pt-[5em]'>
      <h2 className='pb-[2em] text-3xl'>Audits & Certifications</h2>
      <div className='grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 gap-5 ' >
      <Card className=' bg-gray-200'>
          <div className='grid grid-cols-2'>
              <div className='p-[1.5em]'>
                <h2 className='text-gray-700'>EUROPE</h2>
              </div>
              <div className="flex justify-end p-[1em]">
                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/6549fb92f710601f5ad3a961_gdpr.svg" loading="lazy" alt="" className=''/>
              </div>
          </div>
        
        <CardContent className=''>
          <p >GDPR-compliant</p>
        </CardContent>
        <CardFooter className='text-gray-500'>
          <p>We safeguard your data through secure processing and provide mechanisms for exercising GDPR rights.</p>
        </CardFooter>
      </Card>
      <Card className=' bg-gray-200'>
          <div className='grid grid-cols-2'>
              <div className='p-[1.5em]'>
                <h2 className='text-gray-700'>EUROPE</h2>
              </div>
              <div className="flex justify-end p-[1em]">
                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/6549fb92f710601f5ad3a961_gdpr.svg" loading="lazy" alt="" className=''/>
              </div>
          </div>
        
        <CardContent className=''>
          <p >GDPR-compliant</p>
        </CardContent>
        <CardFooter className='text-gray-500'>
          <p>We safeguard your data through secure processing and provide mechanisms for exercising GDPR rights.</p>
        </CardFooter>
      </Card>
      <Card className=' bg-gray-200'>
          <div className='grid grid-cols-2'>
              <div className='p-[1.5em]'>
                <h2 className='text-gray-700'>EUROPE</h2>
              </div>
              <div className="flex justify-end p-[1em]">
                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/6549fb92f710601f5ad3a961_gdpr.svg" loading="lazy" alt="" className=''/>
              </div>
          </div>
        
        <CardContent className=''>
          <p >GDPR-compliant</p>
        </CardContent>
        <CardFooter className='text-gray-500'>
          <p>We safeguard your data through secure processing and provide mechanisms for exercising GDPR rights.</p>
        </CardFooter>
      </Card>
    </div>
    </div>
    
  );
}

export default Certifications;
