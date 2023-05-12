import React from 'react'

import { Helmet } from 'react-helmet'

import './welcome.css'

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="welcome-welcome">
        <button className="welcome-button">
          <span className="welcome-text">
            <span>Get Started</span>
          </span>
        </button>
        <span className="welcome-text2">
          <span>To support the well-being of students</span>
        </span>
        <div className="welcome-i-phonestatusbarlower">
          <div className="welcome-bar">
            <img
              alt="BaseI466"
              src="/playground_assets/basei466-uojg-200h.png"
              className="welcome-base"
            />
          </div>
        </div>
        <div className="welcome-i-phonestatusbarupper">
          <div className="welcome-notch"></div>
          <div className="welcome-status-icons">
            <img
              alt="NetworkSignalDarkI466"
              src="/playground_assets/networksignaldarki466-6g4i.svg"
              className="welcome-network-signal-dark"
            />
            <img
              alt="WiFiSignalDarkI466"
              src="/playground_assets/wifisignaldarki466-3srb.svg"
              className="welcome-wi-fi-signal-dark"
            />
            <div className="welcome-battery-dark">
              <img
                alt="Rectangle23I466"
                src="/playground_assets/rectangle23i466-f8s5.svg"
                className="welcome-rectangle23"
              />
              <img
                alt="Rectangle21StrokeI466"
                src="/playground_assets/rectangle21strokei466-3xza.svg"
                className="welcome-rectangle2-stroke"
              />
              <img
                alt="Rectangle20I466"
                src="/playground_assets/rectangle20i466-psm4-200h.png"
                className="welcome-rectangle20"
              />
            </div>
          </div>
          <div className="welcome-indicator"></div>
          <div className="welcome-time-dark">
            <img
              alt="SVG941I466"
              src="/playground_assets/svg941i466-4peo.svg"
              className="welcome-svg941"
            />
          </div>
        </div>
        <img
          alt="eduhelplogo12033"
          src="/playground_assets/eduhelplogo12033-3b0p-300w.png"
          className="welcome-eduhelplogo1"
        />
      </div>
    </div>
  )
}

export default Welcome
