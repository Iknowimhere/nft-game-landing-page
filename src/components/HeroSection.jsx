import ExploreSection from './ExploreSection';
import Grid from './Grid';
import Nav from './Nav';

const HeroSection = () => {
  return (
    <div className='bg-[#00120A] min-h-screen text-white flex flex-col'>
      <Nav />
      <div className='flex-1 flex flex-col items-center justify-center mb-4 sm:mb-8 px-2'>
        <ExploreSection />
      </div>
      <hr className='h-2 sm:h-4 bg-gradient-to-t from-[#FF6348] via-[#FF6348] to-[#FFD7D3] border-0 shadow-[0_0_10px_#FF6348,0_0_20px_#FF6348,0_0_30px_#FF6348] sm:shadow-[0_0_20px_#FF6348,0_0_40px_#FF6348,0_0_60px_#FF6348] w-full' />
      <div className='w-full'>
        <Grid />
      </div>
    </div>
  );
};
export default HeroSection;
