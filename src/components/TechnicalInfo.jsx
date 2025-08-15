const TechnicalInfo = ({
  position,
  children,
  className = '',
  hideOnMobile = false,
}) => {
  const positionClasses = {
    'top-left':
      'absolute top-1 sm:top-2 left-1 sm:left-2 text-[8px] sm:text-[10px] font-[Orbitron] text-white',
    'top-right':
      'absolute top-1 sm:top-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-[Orbitron] text-right text-white',
    'mid-left':
      'absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 text-[8px] sm:text-[10px] font-[Orbitron] text-white',
    'mid-right':
      'absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 text-[8px] sm:text-[10px] font-[Orbitron] text-right text-white',
    'bottom-left':
      'absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-[8px] sm:text-[10px] font-[Orbitron] text-white',
    'bottom-right':
      'absolute bottom-1 sm:bottom-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-[Orbitron] text-right text-white',
  };

  const visibilityClass = hideOnMobile ? 'hidden sm:block' : '';

  return (
    <div
      className={`${positionClasses[position]} ${visibilityClass} ${className}`}
    >
      {children}
    </div>
  );
};

const TechnicalData = ({ label, value, suffix = '' }) => (
  <div>
    {label && `${label}: `}
    <span className='text-[#21E786]'>{value}</span>
    {suffix && ` ${suffix}`}
  </div>
);

export { TechnicalInfo, TechnicalData };
