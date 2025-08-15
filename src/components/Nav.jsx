const Nav = () => {
  return (
    <nav className='flex items-center justify-between p-4'>
      <div>EXYZ</div>
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        Leaderboard
      </div>
      <div className='corner-border'>
        <span className='font-[Orbitron] text-[0.5em]'>CONNECT WALLET</span>
        <div className='corner-tl'></div>
        <div className='corner-tr'></div>
        <div className='corner-bl'></div>
        <div className='corner-br'></div>
      </div>
    </nav>
  );
};
export default Nav;
