import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center  px-10 relative z-10'>
        <section className="hero-graphic-section">
      <div className="con-l">
        <a href="#" className="lightbox-link w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
          <div className="hero-video">
            <div className="html-video-embed w-embed">
              <video playsInline autoPlay muted loop width="100%" height="100%">
                <source src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/654fab0d05c833583dca826d_Screen Recording 2023-11-11 at 172426-transcode.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="hero-img-play-box">
              <div className="hero-video-button" style={{ opacity: 0.7 }}>
                <div className="hero-video-button-inner">
                  <img src="https://assets-global.website-files.com/6548cdc69eef2cf17eb48b4d/65491cc4c7428aaa2e2ea01d_play_arrow_white_24dp.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="button black" style={{ opacity: 0 }}>
                <div>What is Langdock?</div>
                <div className="opacity-40">4 min</div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="hero-inner">
        <div className="hero-bg"></div>
      </div>
    </section>
    </div>
    
  );
};

export default HeroSection;
