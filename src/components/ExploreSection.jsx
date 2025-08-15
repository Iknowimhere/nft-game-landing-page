import CornerBorder from './CornerBorder';
import { TechnicalInfo, TechnicalData } from './TechnicalInfo';

const ExploreSection = () => {
  return (
    <CornerBorder className='relative min-h-72 sm:min-h-96 w-[95%] sm:w-[90%] lg:w-[85%] mx-auto mt-4 sm:mt-8'>
      <div className='absolute inset-0 flex items-center justify-center p-4 sm:p-6'>
        <div className='text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Atomos-outline] mb-3 sm:mb-4 max-w-2xl mx-auto leading-tight'>
            EXPLORE NFT COLLECTION
          </h1>
          <p className='text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-sm sm:max-w-xl mx-auto px-2'>
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique, metaverse-ready, and designed to benefit their holders.
          </p>
          <div className='flex justify-center'>
            <button className='px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-[Orbitron] border-2 border-[#d1d5db] rounded-tl-3xl rounded-br-3xl text-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors duration-300'>
              START GAME
            </button>
          </div>
        </div>
      </div>

      {/* Technical Info Displays */}
      <TechnicalInfo position='top-left'>
        <TechnicalData
          label='DSP'
          value='1707 x 979'
        />
        <TechnicalData
          label='FPS'
          value='67.90'
        />
      </TechnicalInfo>

      <TechnicalInfo position='top-right'>
        <TechnicalData
          value='10-08-2025'
          suffix=':DATE'
        />
        <TechnicalData
          value='02:56:20'
          suffix=':TIME'
        />
      </TechnicalInfo>

      <TechnicalInfo
        position='mid-left'
        hideOnMobile={true}
      >
        <TechnicalData
          label='///'
          value='0.20'
        />
      </TechnicalInfo>

      <TechnicalInfo
        position='mid-right'
        hideOnMobile={true}
      >
        <TechnicalData
          value='0.49'
          suffix=':\\\\'
        />
      </TechnicalInfo>

      <TechnicalInfo position='bottom-left'>
        <TechnicalData
          label='EVO'
          value='Alpha'
        />
        <TechnicalData
          label='VERS'
          value='01.08.84'
        />
      </TechnicalInfo>

      <TechnicalInfo position='bottom-right'>
        <TechnicalData
          value='74.906'
          suffix=':LOG'
        />
        <TechnicalData
          value='win11 Chrome/138.0.0.0'
          suffix=':SYS'
        />
      </TechnicalInfo>
    </CornerBorder>
  );
};
export default ExploreSection;
