const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full border-t border-gray-400 py-3 sm:py-4'>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 sm:px-8 gap-2 sm:gap-0'>
        <div className='text-white text-xs sm:text-sm order-2 sm:order-1'>
          &copy; WEBTHREE {currentYear}
        </div>
        <div className='text-white text-xs sm:text-sm order-1 sm:order-2'>
          ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
