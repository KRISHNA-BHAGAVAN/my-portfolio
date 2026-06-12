import React from 'react';
import SplitText from './SplitText';
import { useReveal } from '../hooks/useAnimations';

/**
 * Editorial section opener: mono eyebrow with index + oversized display title.
 */
const SectionHeading = ({ index, eyebrow, title }) => {
  const [ref, visible] = useReveal(0.3);
  return (
    <div ref={ref}>
      <p className={`rv ${visible ? 'rv-in' : ''} eyebrow`}>
        {index} — {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-bold tracking-tight leading-tight mt-5 text-mist">
        <SplitText text={title} visible={visible} delay={0.1} />
      </h2>
    </div>
  );
};

export default SectionHeading;
