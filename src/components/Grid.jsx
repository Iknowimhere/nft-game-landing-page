const Grid = () => {
  const gridStyles = {
    ['--grid-gap']: '30px', // Smaller gap for mobile
    ['--grid-color']: 'rgba(255, 90, 69, 0.55)',
    ['--grid-color-strong']: 'rgba(255, 90, 69, 0.9)',
    ['--floor']: '#0a1713',
  };

  const gridStylesDesktop = {
    ['--grid-gap']: '50px', // Larger gap for desktop
    ['--grid-color']: 'rgba(255, 90, 69, 0.55)',
    ['--grid-color-strong']: 'rgba(255, 90, 69, 0.9)',
    ['--floor']: '#0a1713',
  };

  return (
    <div className='w-full h-[60px] sm:h-[100px] [perspective:150px] sm:[perspective:200px] overflow-hidden'>
      {/* Mobile Grid */}
      <div
        className='
          sm:hidden
          absolute left-[-30px] right-[-30px] bottom-0 h-[400px]
          [transform:rotateX(60deg)]
          [transform-origin:bottom_center]
          opacity-90
        '
        style={gridStyles}
      >
        {/* base floor color */}
        <div className='absolute inset-0 bg-[--floor]' />

        {/* vertical lines */}
        <div
          className='
            absolute inset-0
            [background-image:repeating-linear-gradient(to_right,transparent,transparent_calc(var(--grid-gap)-1px),var(--grid-color-strong)_calc(var(--grid-gap)-1px),var(--grid-color)_calc(var(--grid-gap)))]
            [mask-image:linear-gradient(to_top,transparent,black_20%,black)]
          '
        />

        {/* horizontal lines (fade towards horizon) */}
        <div
          className='
            absolute inset-0
            [background-image:repeating-linear-gradient(to_top,transparent,transparent_calc(var(--grid-gap)-1px),var(--grid-color-strong)_calc(var(--grid-gap)-1px),var(--grid-color)_calc(var(--grid-gap)))]
            [mask-image:linear-gradient(to_top,transparent,black_25%,black_70%,transparent)]
            mix-blend-screen
          '
        />

        {/* horizon rim light */}
        <div className='absolute inset-x-0 top-0 h-[2px] bg-[#ff5a45] blur-[1px]' />
        <div className='absolute inset-x-0 -top-1 h-2 bg-[#ff5a45]/60 blur-md' />
      </div>

      {/* Desktop Grid */}
      <div
        className='
          hidden sm:block
          absolute left-[-50px] right-[-50px] bottom-0 h-[600px]
          [transform:rotateX(60deg)]
          [transform-origin:bottom_center]
          opacity-90
        '
        style={gridStylesDesktop}
      >
        {/* base floor color */}
        <div className='absolute inset-0 bg-[--floor]' />

        {/* vertical lines */}
        <div
          className='
            absolute inset-0
            [background-image:repeating-linear-gradient(to_right,transparent,transparent_calc(var(--grid-gap)-1px),var(--grid-color-strong)_calc(var(--grid-gap)-1px),var(--grid-color)_calc(var(--grid-gap)))]
            [mask-image:linear-gradient(to_top,transparent,black_20%,black)]
          '
        />

        {/* horizontal lines (fade towards horizon) */}
        <div
          className='
            absolute inset-0
            [background-image:repeating-linear-gradient(to_top,transparent,transparent_calc(var(--grid-gap)-1px),var(--grid-color-strong)_calc(var(--grid-gap)-1px),var(--grid-color)_calc(var(--grid-gap)))]
            [mask-image:linear-gradient(to_top,transparent,black_25%,black_70%,transparent)]
            mix-blend-screen
          '
        />

        {/* horizon rim light */}
        <div className='absolute inset-x-0 top-0 h-[3px] bg-[#ff5a45] blur-[1px]' />
        <div className='absolute inset-x-0 -top-1 h-3 bg-[#ff5a45]/60 blur-md' />
      </div>
    </div>
  );
};
export default Grid;
