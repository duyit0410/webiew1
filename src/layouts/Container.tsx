import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface IContainer {
  className?: string;
  children: ReactNode
}
const Container = ({
  className,
  children
}:IContainer) => {
  return (
    <div className={classNames('h-full px-5', className)}>
      {children}
    </div>
  );
};

export default React.memo(Container);