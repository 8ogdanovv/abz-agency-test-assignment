import React, { useEffect, useState, useRef } from 'react';

const Tooltip = React.memo(({ children, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const containerStyle = {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    maxWidth: 'min-content'
  };

  useEffect(() => {
    const handleMouseOver = (event) => {
      event.preventDefault();

      const { clientX, clientY } = event;

      setTooltipStyle((prevState) => {
        return {
          position: 'fixed',
          borderRadius: '4px',
          background: 'rgba(0, 0, 0, 0.87)',
          color: '#fff',
          padding: '3px 16px',
          top: clientY + 21,
          left: clientX - 16,
          zIndex: 1,
          padding: '0 1rem',
          maxWidth: 'fit-content',
          height: '26px',
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: '16px',
          lineHeight: '26px',
        };
      });

      console.log(event.target.textContent);
      setShowTooltip(true);
    };

    const handleMouseOut = () => {
      setShowTooltip(false);
      setTooltipStyle({});
    };

    const tooltipContainer = tooltipRef.current;

    if (tooltipContainer) {
      tooltipContainer.addEventListener('mouseover', handleMouseOver);
      tooltipContainer.addEventListener('mouseout', handleMouseOut);

      return () => {
        tooltipContainer.removeEventListener('mouseover', handleMouseOver);
        tooltipContainer.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return (
    <div className="tooltip-container" style={containerStyle} ref={tooltipRef}>
      {children}
      <div
        className="tooltip"
        style={showTooltip ? tooltipStyle : { display: 'none' }}
      >
        {tooltip}
      </div>
    </div>
  );
});

export default Tooltip;
