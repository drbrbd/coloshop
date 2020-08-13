import React, {useEffect} from 'react';
import useStorage from './useStorage';
import './Image.css';

// import {motion} from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
  const {progress, url} = useStorage(file);
  console.log(url, progress);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{width: progress + '%'}}></div>;
};

export default ProgressBar;
