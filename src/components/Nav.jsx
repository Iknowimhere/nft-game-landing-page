import CornerBorder from './CornerBorder';

const Nav = () => {
  return (
    <nav className='flex items-center justify-between p-4 sm:p-6'>
      {/* Logo */}
      <div className='text-lg sm:text-xl font-semibold'>EXYZ</div>

      {/* Center item - hidden on mobile, visible on tablet+ */}
      <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 text-sm lg:text-base'>
        Leaderboard
      </div>

      {/* Connect Wallet Button */}
      <CornerBorder>
        <span className='font-[Orbitron] text-[0.4em] sm:text-[0.5em] lg:text-[0.6em] whitespace-nowrap'>
          CONNECT WALLET
        </span>
      </CornerBorder>
    </nav>
  );
};
export default Nav;
