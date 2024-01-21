
import { Card,CardContent,CardFooter } from "./card";
const Features = () => {
  return (
    
    <div className='flex flex-col md:justify-center px-[3em] lg:px-[8em] md:px-[8em] py-[7em] '>
        <div className="mx-auto sm:mx-0 md:mx-[5%] lg:mx-[2em] xl:mx-[4em] ">
          <div className="max-w-[520px]">
            <h6 className="flex items-start text-gray-500 text-xs ">FEATURES</h6>
                <h2 className="flex justify-start text-4xl font-bold font-system ">
                Highly customizable for quality results.
                </h2>
                <p className="top-28 my-[1em]  text-gray-700">
                Connect your tools, choose your model and location, and tap into our API. Collaborate, learn, and use our prompt library to tailor your experience.
                </p>
            </div>  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1em] ">
                <Card>
                    <div className="p-[2em] ">
                        <h6 className="flex items-start text-gray-500 pt-[4em] text-xs ">Integrations</h6>
                        <h2 className="flex justify-start  text-2xl font-normal py-[0.5em] pr-[3em] font-system pb-[3em]">
                            Connect all your tools apps
                        </h2>
                        
                        <div className="">
                            <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a310845927b57895baacf_integrations-1.svg" alt="Image Description" className=" relative z-1  pl-[10em]" />
                        </div>
                        <Card  className="bg-cover bg-center h-[15em] mb-[2em]" style={{ backgroundImage: 'url(${artwork.art})' }}>
                        
                            <div className="">
                                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a3108430b696d028ef7df_integrations-2.svg" alt="Image Description" className="relative z-1 w-[80%] py-[2em] pl-[4em]" />
                            </div>
                        </Card>
                    </div>
                </Card>
                <div className="grid grid-rows-2 gap-[1em]">
                    <Card className="bg-gray-200 p-[2em]">
                        <div className="">
                            <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a319ee3235557fe51feba_models.svg" alt="Image Description" className="w-[200%]  h-[50%] py-[2em] " />
                        </div>
                        
                        <h6 className="flex items-start text-gray-500 text-xs ">MODELS</h6>
                        <h2 className="flex justify-start text-2xl font-normal pr-[3em] font-system ">
                            Choose from models hosted in Europe and the United States
                        </h2>
                    </Card>
                    <Card className="bg-black px-[2em]">
                        <div className="pl-[4em] ">
                            <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a338b853678a54ea7ff38_api.svg" alt="Image Description" className=" " />
                        </div>
                        <h6 className="flex items-start text-white pt-[4em] text-xs ">API</h6>
                        <h2 className="flex justify-start text-white text-2xl font-normal py-[0.5em] pr-[3em] font-system ">
                            One API for all models and features.
                        </h2>
                        
                        
                    </Card>
                    
                </div>
            </div> 
            <h6 className="flex items-start text-gray-500 text-xs pt-[4em] pb-[1em]">MORE FEATURES</h6>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 gap-5 ' >
                    <Card >
                        <div className='grid grid-rows-2'>                    
                            <div className="flex justify-center p-[1em]">
                                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a2f675b38cf96cbee1a17_collaboration.svg" loading="lazy" alt="" className=''/>
                            </div>
                            <div className="my-auto pr-[3em] pb-2">
                                <CardContent className=''>
                                    <p className="text-gray-500 text-xs">GDPR-compliant</p>
                                </CardContent>
                                <CardFooter className='text-black '>
                                    <p>High quality courses that make your workforce fit for the AI age.</p>
                                </CardFooter>
                            </div>
                        </div>
                                                
                    </Card>
                    <Card >
                        <div className='grid grid-rows-2'>                    
                            <div className="flex justify-center p-[1em]">
                                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a2f6739cad3b9c6057722_prompts.svg" loading="lazy" alt="" className=''/>
                            </div>
                            <div className="my-auto pr-[3em] pb-2">
                                <CardContent className=''>
                                    <p className="text-gray-500 text-xs">GDPR-compliant</p>
                                </CardContent>
                                <CardFooter className='text-black'>
                                    <p>Save prompts in your library and share them with your team.</p>
                                </CardFooter>
                            </div>
                        </div>
                                                
                    </Card>
                    <Card >
                        <div className='grid grid-rows-2'>                    
                            <div className="flex justify-center p-[1em]">
                                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654a2f675b38cf96cbee1a17_collaboration.svg" loading="lazy" alt="" className=''/>
                            </div>
                            <div className="my-auto pr-[3em] pb-2">
                                <CardContent className=''>
                                    <p className="text-gray-500 text-xs">GDPR-compliant</p>
                                </CardContent>
                                <CardFooter className='text-black '>
                                    <p>High quality courses that make your workforce fit for the AI age.</p>
                                </CardFooter>
                            </div>
                        </div>
                                                
                    </Card>
            </div>
        </div>        
    </div>
    
  )
}

export default Features
