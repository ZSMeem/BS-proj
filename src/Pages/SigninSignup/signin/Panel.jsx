/* eslint-disable no-unused-vars */
import style from './signInStyle.module.css';
import { useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Panel = ({ onToggle }) => {
  return (
    <div className={style.panelsContainer}>
      <LeftPanel onToggle={onToggle} />
      <RightPanel onToggle={onToggle} />
    </div>
  );
};

export default Panel;
