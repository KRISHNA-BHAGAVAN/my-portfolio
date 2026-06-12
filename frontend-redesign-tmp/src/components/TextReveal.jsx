import React from 'react';
import { useScrollReveal } from '../hooks/useParallax';

/**
 * TextReveal — clips each word/element and slides it up from below on scroll.
 * Accepts mixed children: plain strings get split word-by-word,
 * React elements (e.g. <span> with color classes) are treated as one unit.
 *
 * Props:
 *   tag       — HTML element to render (default 'div')
 *   className — classes applied to the wrapper element
 *   delay     — initial delay in seconds before the first word animates
 *   stagger   — delay in seconds added per word (default 0.07)
 *   duration  — animation duration in seconds (default 0.8)
 */
const TextReveal = ({
  children,
  tag: Tag = 'div',
  className = '',
  delay = 0,
  stagger = 0.07,
  duration = 0.8,
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  let wordIndex = 0;

  const animatedWord = (content, key, idx) => (
    <span
      key={key}
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom',
        paddingBottom: '0.06em',
        marginBottom: '-0.06em',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          transform: isVisible ? 'translateY(0)' : 'translateY(115%)',
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * stagger}s,
                       opacity 0.4s ease ${delay + idx * stagger}s`,
        }}
      >
        {content}
      </span>
    </span>
  );

  const processChildren = (nodes) => {
    const output = [];

    React.Children.forEach(nodes, (child) => {
      if (child === null || child === undefined) return;

      if (typeof child === 'string') {
        // Split on spaces, keep non-empty tokens
        const tokens = child.split(/\s+/).filter(Boolean);
        const leadingSpace = child.startsWith(' ');
        const trailingSpace = child.endsWith(' ');

        if (leadingSpace) {
          output.push(<span key={`ls-${wordIndex}`}>{' '}</span>);
        }

        tokens.forEach((word, ti) => {
          const idx = wordIndex++;
          output.push(animatedWord(word, `word-${idx}`, idx));
          // Add space between words (but not after the last if trailing space handles it)
          if (ti < tokens.length - 1) {
            output.push(<span key={`sp-${idx}`}>{' '}</span>);
          }
        });

        if (trailingSpace || tokens.length > 1) {
          output.push(<span key={`ts-${wordIndex}`}>{' '}</span>);
        }
      } else if (React.isValidElement(child)) {
        // Treat the whole element (e.g. a colored <span>) as one unit
        const idx = wordIndex++;
        output.push(animatedWord(child, `el-${idx}`, idx));
      }
    });

    return output;
  };

  return (
    <Tag ref={ref} className={className}>
      {processChildren(children)}
    </Tag>
  );
};

export default TextReveal;
