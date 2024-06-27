import { React, useState } from 'react'
import './App.css'
import VideoStream from './VideoStream';

function App() {
    const [motorValue, setMotorValue] = useState(50);
    const [motorStart, setMotorStart] = useState(true);
    const [pumpStart, setPumpStart] = useState(true);
    const [pumpValue, setPumpValue] = useState(40);
    const handleMotorChange = (event) => {
        setMotorValue(event.target.value);
    };


    const handlePumpChange = (event) =>{
        setPumpValue(event.target.value);
    }
    const handleStartMotor = () => {

        setMotorStart((prevState) => !prevState);
    }

    const handleStartPump = () => {
        setPumpStart(!pumpStart);
    }

  return (
      <>
          <div className='sidebar'>
              {/*    headers*/}
              <div className="headers">
                  <img src="src/assets/GTLogoSeal_RGB.svg" alt="Georgia Tech Logo"/>
                  <p className="title">Slot-Die Coating Machine @ Harris Group</p>
                  <a
                      className="author"
                      href="https://github.com/aaronwork1205"
                      target="_blank"
                      rel="noopener noreferrer"

                  >
                      Author: Wenhao (Aaron) Wang
                  </a>
                  <p className="version">Version: 1.0.0 </p>

              </div>


              <div className='controller'>
                  <div>
                      <span>Motor Speed</span>
                      <input type="range"
                             min="0"
                             max="100"
                             value={motorValue}
                             onChange={handleMotorChange}
                             className="motorSlider"
                             disabled={motorStart}
                      />
                      <span>{motorValue}%</span>
                  </div>

                  <div>
                      <span>Pump Speed</span>
                      <input type="range"
                             min="0"
                             max="100"
                             value={pumpValue}
                             onChange={handlePumpChange}
                             className="pumpSlider"
                             disabled={pumpStart}
                      />
                      <span>{pumpValue}%</span>
                  </div>


              </div>

              <div className='controll-buttons'>

                  <button
                      className={`motorButton ${motorStart ? 'button-active' : 'button-inactive'}`}
                      onClick={handleStartMotor}>
                      {motorStart ? 'Motor On' : 'Motor Off'}
                  </button>

                  <button
                      className={`pumpButton ${pumpStart ? 'button-active' : 'button-inactive'}`}
                      onClick={handleStartPump}>
                      {pumpStart ? 'Pump On' : 'Pump Off'}
                  </button>

                  {/*<button className='cameraStart'>*/}
                  {/*    Camera Start*/}
                  {/*</button>*/}


              </div>


          </div>

          <div className="camera">
              <VideoStream/>
          </div>
      </>
  )
}

export default App
