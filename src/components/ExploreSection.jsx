const ExploreSection = () => {
  return (
    <div className='corner-border relative min-h-96 w-[90%] mx-auto mt-8'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-[Atomos-outline] mb-4'>EXPLORE NFT COLLECTION</h1>
          <p className='text-lg mb-6 max-w-2xl'>
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique, metaverse-ready, and designed to benefit their holders.
          </p>
          <div className='inline-block'>
            <button className='px-6 py-3 font-[Orbitron] border-2 border-[#d1d5db] rounded-tl-3xl rounded-br-3xl text-yellow-300'>START GAME</button>

          </div>
        </div>
      </div>

      {/* Top Left */}
      <div className='absolute top-2 left-2 text-xs font-[Orbitron]'>
        <div>DSP: 1707 x 979</div>
        <div>FPS: 67.90</div>
      </div>

      {/* Top Right */}
      <div className='absolute top-2 right-2 text-xs font-[Orbitron] text-right'>
        <div>10-08-2025 :DATE</div>
        <div>02:56:20 :TIME</div>
      </div>

      {/* Mid Left */}
      <div className='absolute top-1/2 left-2 -translate-y-1/2 text-xs font-[Orbitron]'>
        <div>///: 0.20</div>
      </div>

      {/* Mid Right */}
      <div className='absolute top-1/2 right-2 -translate-y-1/2 text-xs font-[Orbitron] text-right'>
        <div>0.49 :\\\</div>
      </div>

      {/* Bottom Left */}
      <div className='absolute bottom-2 left-2 text-xs font-[Orbitron]'>
        <div>EVO: Alpha</div>
        <div>VERS: 01.08.84</div>
      </div>

      {/* Bottom Right */}
      <div className='absolute bottom-2 right-2 text-xs font-[Orbitron] text-right'>
        <div>74.906 :LOG</div>
        <div>win11 Chrome/138.0.0.0 :SYS</div>
      </div>

      <div className='corner-tl'></div>
      <div className='corner-tr'></div>
      <div className='corner-bl'></div>
      <div className='corner-br'></div>
    </div>
  );
};
export default ExploreSection;
