import React, { memo, useState } from 'react';
import Input from '../Input';
import classNames from 'classnames';

const SearchHeader = () => {
  const [value, setValue] = useState("");

  return (
    <div className="fixed z-10 w-full top-0 left-0 flex gap-2 items-center bg-app p-2 bg-opacity-0">
    <Input
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
aaaa
  </div>
  );
};

export default memo(SearchHeader);