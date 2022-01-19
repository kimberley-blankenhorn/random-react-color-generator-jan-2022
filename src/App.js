import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function ControlColor() {
  const [color, setColor] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('');

  return (
    <div style={{ backgroundColor: color }} className="ControlYourColor">
      <div className="formInput">
        <label className="formLabel">
          <input
            className="formInput"
            placeholder="e.g. 'Red'"
            value={hue}
            onChange={(event) => setHue(event.currentTarget.value)}
          />
        </label>
        <label className="formLabel">
          <input
            className="formInput"
            placeholder="e.g. 'Dark'"
            value={luminosity}
            onChange={(event) => setLuminosity(event.currentTarget.value)}
          />
        </label>
      </div>
      <div className="controlButtonCenter">
        <h3 className="textStyle">
          Want control? Enter your options above (e.g. red, light) Otherwise,
          just hit generate! :)
        </h3>
        <div style={{ backgroundColor: color }} className="choiceColor">
          Generated Color: {color}
        </div>
        <button
          style={{ color: color }}
          className="controlButton"
          onClick={() => {
            setColor(randomColor({ luminosity: luminosity, hue: hue }));
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
export default ControlColor;
