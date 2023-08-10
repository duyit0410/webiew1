import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface IContent {
  className?: string;
  children: ReactNode
}
const Content = ({
  className,
  children
}:IContent) => {
  return (
    <div className={classNames('h-full', className)}>
      {children}
    </div>
  );
};

export default React.memo(Content);