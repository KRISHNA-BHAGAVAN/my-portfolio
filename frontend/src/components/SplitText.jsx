import React from 'react';

/**
 * Word-level clip reveal. Each word rises out of an overflow mask with a stagger.
 * Screen readers get the full text via an sr-only copy.
 */
const SplitText = ({ text, visible = true, delay = 0, stagger = 0.05, className = '' }) => {
  const words = String(text).split(' ');
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="split-mask">
            <span
              className={`split-word ${visible ? 'is-in' : ''}`}
              style={{ transitionDelay: `${delay + i * stagger}s` }}
            >
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
};

export default SplitText;
