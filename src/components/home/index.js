import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './home.css';

function Home() {
  return (
    <div className="container center-align">
      <h2>Please click below button to start the test</h2>
      <button className="btn btn-large test-btn"><Link to="/quiz">Start Test</Link></button>
    </div>
  );
}

export default Home;
