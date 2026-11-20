import React from 'react';
import Reveal, { SplitText } from '../common/Motion';

export default function SectionHead({ title, children, className = '', as = 'h2' }) {
  return (
    <Reveal className={`section-head ${className}`.trim()}>
      <SplitText text={title} as={as} />
      {children && (typeof children === 'string' ? <p>{children}</p> : children)}
    </Reveal>
  );
}
