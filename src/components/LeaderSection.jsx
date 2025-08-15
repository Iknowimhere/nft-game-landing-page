import imgPlaceholder from '../assets/imgplaceholder.png';
import leader1 from '../assets/leader1.png';
import leader2 from '../assets/leader2.png';
import leader3 from '../assets/leader3.png';
import leader4 from '../assets/leader4.png';
import ghostImage from '../assets/ghost.png';

const LeaderSection = () => {
  return (
    <div className='w-full py-8'>
      {/* Scrolling text section */}
      <div className='overflow-hidden min-h-[100px] flex items-center'>
        <div className='flex whitespace-nowrap border-t-2 p-2 border-b-2 border-[#FFF] items-center'>
          {/* Repeat "NEW COLLECTION" multiple times */}
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className='text-sm font-[Orbitron] text-white mx-16'
            >
              NEW COLLECTION
            </div>
          ))}
        </div>
      </div>

      {/* 2x4 Grid */}
      <div className='w-full px-8'>
        {/* First row - 4 images */}
        <div className='grid grid-cols-4 gap-4 mb-4'>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className='aspect-[3/4] relative group border-2 border-transparent hover:border-white transition-all duration-300'
            >
              <img
                src={imgPlaceholder}
                alt={`Placeholder ${i + 1}`}
                className='w-full h-full object-cover'
              />
              {/* Hover label */}
              <div className='absolute bottom-0 left-0 right-0 bg-[#ff5a45] bg-opacity-80 text-white p-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-sm font-[Orbitron]'>BUY MINT</span>
                <span className='text-sm font-[Orbitron]'>20SOL</span>
              </div>
            </div>
          ))}
        </div>

        {/* White HR after first row */}
        <hr className='border-white border-t-2 my-4' />

        {/* Second row - 4 images */}
        <div className='grid grid-cols-4 gap-4'>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i + 4}
              className='aspect-[3/4] relative group border-2 border-transparent hover:border-white transition-all duration-300'
            >
              <img
                src={imgPlaceholder}
                alt={`Placeholder ${i + 5}`}
                className='w-full h-full object-cover'
              />
              {/* Hover label */}
              <div className='absolute bottom-0 left-0 right-0 bg-[#ff5a45] bg-opacity-80 text-white p-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-sm font-[Orbitron]'>BUY MINT</span>
                <span className='text-sm font-[Orbitron]'>20SOL</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HR after image grid */}
      <hr className='border-white border-t-2 my-8' />

      {/* The League Section */}
      <div className='w-full px-8'>
        <h2 className='text-6xl font-[Atomos] text-white text-center mb-8'>
          THE LEAGUE
        </h2>

        {/* Leader Table */}
        <div className='bg-transparent border-2 border-white rounded-t-lg rounded-b-lg overflow-hidden p-4'>
          {/* Leader rows */}
          {[
            { image: leader1, name: 'REALTECH', skulls: 17, sol: 30 },
            { image: leader2, name: 'PSYCHOAZOV', skulls: 15, sol: 30 },
            { image: leader3, name: 'SSTS', skulls: 8, sol: 25 },
            { image: leader4, name: '38th AAMR', skulls: 11, sol: 25 },
          ].map((leader, index) => (
            <div key={index}>
              <div className='flex items-center justify-between p-4 bg-black bg-opacity-50'>
                {/* Left side - Leader image and name */}
                <div className='flex items-center'>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className='w-8 h-8 mr-4'
                  />
                  <span className='text-white font-[Voltec] text-base'>
                    {leader.name}
                  </span>
                </div>

                {/* Right side - Skulls and SOL */}
                <div className='flex items-center gap-6'>
                  <div className='flex items-center'>
                    <span className='text-white font-["Press_Start_2P"] mr-2 text-xs'>
                      {leader.skulls}
                    </span>
                    <img
                      src={ghostImage}
                      alt='ghost'
                      className='w-6 h-6'
                    />
                  </div>
                  <div className='flex items-center'>
                    <span className='text-white font-["Press_Start_2P"] text-xs'>
                      {leader.sol} SOL
                    </span>
                  </div>
                </div>
              </div>
              {/* HR between rows (except last row) */}
              {index < 3 && <hr className='border-[#ff5a45] border-t-2' />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeaderSection;
