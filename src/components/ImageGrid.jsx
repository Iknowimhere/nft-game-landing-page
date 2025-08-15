const ImageGrid = ({ images, startIndex = 0, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 ${className}`}
    >
      {images.map((image, i) => (
        <div
          key={startIndex + i}
          className='aspect-[3/4] relative group border-2 border-transparent hover:border-white transition-all duration-300 rounded-sm overflow-hidden'
        >
          <img
            src={image.src}
            alt={image.alt || `Placeholder ${startIndex + i + 1}`}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
          {/* Hover label */}
          <div className='absolute bottom-0 left-0 right-0 bg-[#ff5a45] bg-opacity-80 text-white p-1 sm:p-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <span className='text-xs sm:text-sm font-[Orbitron] font-semibold'>
              BUY MINT
            </span>
            <span className='text-xs sm:text-sm font-[Orbitron] font-semibold'>
              20SOL
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
