const ExploreSection = () => {
  return (
    <div className='corner-border relative min-h-96 w-[90%] mx-auto mt-8'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-[Atomos-outline] mb-4 max-w-2xl mx-auto'>
            EXPLORE NFT COLLECTION
          </h1>
          <p className='text-lg mb-6 max-w-xl mx-auto'>
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique, metaverse-ready, and designed to benefit their holders.
          </p>
          <div className='flex justify-center'>
            <button className='px-6 py-3 font-[Orbitron] border-2 border-[#d1d5db] rounded-tl-3xl rounded-br-3xl text-yellow-300'>
              START GAME
            </button>
          </div>
        </div>
      </div>

      {/* Top Left */}
      <div className='absolute top-2 left-2 text-[10px] font-[Orbitron] text-white'>
        <div>
          DSP: <span className='text-[#21E786]'>1707 x 979</span>
        </div>
        <div>
          FPS: <span className='text-[#21E786]'>67.90</span>
        </div>
      </div>

      {/* Top Right */}
      <div className='absolute top-2 right-2 text-[10px] font-[Orbitron] text-right text-white'>
        <div>
          <span className='text-[#21E786]'>10-08-2025</span> :DATE
        </div>
        <div>
          <span className='text-[#21E786]'>02:56:20</span> :TIME
        </div>
      </div>

      {/* Mid Left */}
      <div className='absolute top-1/2 left-2 -translate-y-1/2 text-[10px] font-[Orbitron] text-white'>
        <div>
          ///: <span className='text-[#21E786]'>0.20</span>
        </div>
      </div>

      {/* Mid Right */}
      <div className='absolute top-1/2 right-2 -translate-y-1/2 text-[10px] font-[Orbitron] text-right text-white'>
        <div>
          <span className='text-[#21E786]'>0.49</span> :\\\
        </div>
      </div>

      {/* Bottom Left */}
      <div className='absolute bottom-2 left-2 text-[10px] font-[Orbitron] text-white'>
        <div>
          EVO: <span className='text-[#21E786]'>Alpha</span>
        </div>
        <div>
          VERS: <span className='text-[#21E786]'>01.08.84</span>
        </div>
      </div>

      {/* Bottom Right */}
      <div className='absolute bottom-2 right-2 text-[10px] font-[Orbitron] text-right text-white'>
        <div>
          <span className='text-[#21E786]'>74.906</span> :LOG
        </div>
        <div>
          <span className='text-[#21E786]'>win11 Chrome/138.0.0.0</span> :SYS
        </div>
      </div>

      <div className='corner-tl'></div>
      <div className='corner-tr'></div>
      <div className='corner-bl'></div>
      <div className='corner-br'></div>
    </div>
  );
};
export default ExploreSection;
