const Grid = () => {
  return (
    <div className='w-full h-[100px] [perspective:200px] overflow-hidden'>
      <div
        className='
          absolute left-[-50px] right-[-50px] bottom-0 h-[600px]
          [transform:rotateX(60deg)]
          [transform-origin:bottom_center]
          opacity-90
        '
        /* CSS variables control spacing and line colors */
        style={{
          // spacing between lines (adjust for density)
          // try 40 for chunky, 24 for dense
          ['--grid-gap']: '50px',
          // grid line colors
          ['--grid-color']: 'rgba(255, 90, 69, 0.55)',
          ['--grid-color-strong']: 'rgba(255, 90, 69, 0.9)',
          // background floor color
          ['--floor']: '#0a1713',
        }}
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
