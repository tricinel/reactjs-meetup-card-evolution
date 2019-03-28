import React from 'react';
import { render } from 'react-dom';
import Card from './01-global/App-start';

import '../global.css';

const Local = () => <div className="card">Another card somewhere...</div>;

render(
  <>
    <Card />
    <br />
    <Local />
  </>,
  document.getElementById('card')
);
