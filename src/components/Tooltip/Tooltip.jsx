import React, { useEffect, useState } from 'react';

const Tooltip = React.memo(({ children, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});

  useEffect(() => {
    const handleMouseOver = (event) => {
      setShowTooltip(true);
      setTooltipStyle({
        top: event.clientY + 16,
        left: event.clientX + 16,
      });
    };

    const handleMouseOut = () => {
      setShowTooltip(false);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="tooltip-container">
      {children}
      {showTooltip && (
        <div className="tooltip" style={tooltipStyle}>
          {title}
        </div>
      )}
    </div>
  );
});

export default Tooltip;
