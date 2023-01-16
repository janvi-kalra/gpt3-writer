import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1> less than one minute of reading</h1>
          </div>
          <div className="header-subtitle">
            <h2> input your text below, we'll do the rest </h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="start typing here"
            className="prompt-box" />
        </div>
        <div className="prompt-buttons">
          <a className="generate-button" onClick={null}>
            <div className="generate">
              <p>Generate</p>
            </div>
          </a>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
