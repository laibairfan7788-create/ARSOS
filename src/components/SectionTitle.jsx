import React from 'react';

const SectionTitle = ({ subtitle, title, description, light = false, center = true }) => {
  return (
    <div className={`section-title-wrap ${center ? '' : 'text-start'}`}>
      {subtitle && (
        <span className="section-subtitle" style={light ? { color: 'var(--arsos-gold)' } : {}}>
          {subtitle}
        </span>
      )}
      <h2 className="section-title" style={light ? { color: '#fff' } : {}}>
        {title}
      </h2>
      {description && (
        <p className="section-description" style={light ? { color: 'rgba(255,255,255,0.75)' } : {}}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;