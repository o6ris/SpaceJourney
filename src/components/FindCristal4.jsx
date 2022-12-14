/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './findCristal4.css';

export default function FindCristal4({ checkQuest, setPlanet4isIsClickable, setPath }) {
  const [displayRules, setDisplayRules] = useState(true);
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet4isIsClickable(true);
  };

  const dNoneRules = () => {
    setDisplayRules(false);
  };

  return (
    <div className="findCristalBg4">
      <button onClick={() => setPath('/map')} aria-label="back to map" className="button-backToMap btn-cristal-4" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-4" className="myCristal-toFind4" type="button" />
      {displayRules && (
      <div className='myCrystal-container4'>
        <h2 className='planet-rules'>It is a moon of Delmak that the ancients transformed into a volcanic star. His goal was to recreate the conditions of Hell according to the myth (Netu in Ancient Egyptian corresponding to Hell). It would be better to hurry to <span>find the last crystal</span>, it is dangerous to stay here.</h2>
        <div className="search-crystal-container">
          <button onClick={dNoneRules} type='button' className="btn-cristal-4">Search it</button>
          <img className="crystal-imgSize" src="./src/assets/crystal-4.png" alt="" />
        </div>
      </div>
      )}
      {displayCrystal && (
      <div className="myCrystal-container4">
        <div className="myCristal4" />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type="button" className="btn-cristal-4">Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done4">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button" className="btn-cristal-4">Back to map</button>
      </div>
      )}
    </div>
  );
}
