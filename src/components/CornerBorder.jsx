const CornerBorder = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`corner-border ${className}`}
      {...props}
    >
      {children}
      <div className='corner-tl'></div>
      <div className='corner-tr'></div>
      <div className='corner-bl'></div>
      <div className='corner-br'></div>
    </div>
  );
};

export default CornerBorder;
