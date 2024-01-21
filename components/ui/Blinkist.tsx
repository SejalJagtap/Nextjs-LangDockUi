
import { Card } from "./card";

function Blinkist() {
    return (
        <div className='max-w-[80%] mx-auto  p-[3em] min-h-[30em]'>
            <Card className='grid grid-cols-1 first-line: lg:grid-cols-2 bg-[#e8dede]'>
                <div className="h-[12em]">
                    <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654924a3490a1a54bb2c0ade_blinkist.svg" loading="lazy" alt="" className='w-[30%] h-[30%] px-[1.5em]'/>
                </div>
                <div >
                <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/6549fe1ba634e7362b468f51_quote-1.jpg" alt="Image Description" className="w-full h-full object-cover " />
                
                </div>
            </Card>
        </div>
    );
}

export default Blinkist;
