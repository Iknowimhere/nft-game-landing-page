import ImageGrid from './ImageGrid';
import ghostImage from '../assets/ghost.png';
import {
  LEADERS_DATA,
  IMAGE_GRID_DATA,
  SCROLLING_TEXT_COUNT,
} from '../constants';

const ScrollingBanner = () => (
  <div className='overflow-hidden min-h-[60px] sm:min-h-[100px] flex items-center'>
    <div className='flex whitespace-nowrap border-t-2 p-2 sm:p-3 border-b-2 border-[#FFF] items-center'>
      {Array.from({ length: SCROLLING_TEXT_COUNT }, (_, i) => (
        <div
          key={i}
          className='text-xs sm:text-sm font-[Orbitron] text-white mx-8 sm:mx-16'
        >
          NEW COLLECTION
        </div>
      ))}
    </div>
  </div>
);

const LeaderRow = ({ leader, index, isLast }) => (
  <div key={index}>
    <div className='flex items-center justify-between p-2 sm:p-4 bg-black bg-opacity-50'>
      <div className='flex items-center'>
        <img
          src={leader.image}
          alt={leader.name}
          className='w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4'
        />
        <span className='text-white font-[Voltec] text-sm sm:text-base'>
          {leader.name}
        </span>
      </div>
      <div className='flex items-center gap-3 sm:gap-6'>
        <div className='flex items-center'>
          <span className='text-white font-["Press_Start_2P"] mr-1 sm:mr-2 text-[10px] sm:text-xs'>
            {leader.skulls}
          </span>
          <img
            src={ghostImage}
            alt='ghost'
            className='w-4 h-4 sm:w-6 sm:h-6'
          />
        </div>
        <div className='flex items-center'>
          <span className='text-white font-["Press_Start_2P"] text-[10px] sm:text-xs'>
            {leader.sol} SOL
          </span>
        </div>
      </div>
    </div>
    {!isLast && <hr className='border-[#ff5a45] border-t-2' />}
  </div>
);

const LeaderSection = () => {
  const firstRowImages = IMAGE_GRID_DATA.slice(0, 4);
  const secondRowImages = IMAGE_GRID_DATA.slice(4, 8);

  return (
    <div className='w-full py-4 sm:py-8'>
      <ScrollingBanner />

      <div className='w-full px-4 sm:px-8'>
        <ImageGrid
          images={firstRowImages}
          className='mb-3 sm:mb-4'
        />
        <hr className='border-white border-t-2 my-3 sm:my-4' />
        <ImageGrid
          images={secondRowImages}
          startIndex={4}
        />
      </div>

      <hr className='border-white border-t-2 my-6 sm:my-8' />

      <div className='w-full px-4 sm:px-8'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Atomos] text-white text-center mb-6 sm:mb-8'>
          THE LEAGUE
        </h2>

        <div className='bg-transparent border-2 border-white rounded-t-lg rounded-b-lg overflow-hidden p-2 sm:p-4 mb-8 sm:mb-16'>
          {LEADERS_DATA.map((leader, index) => (
            <LeaderRow
              key={index}
              leader={leader}
              index={index}
              isLast={index === LEADERS_DATA.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeaderSection;
