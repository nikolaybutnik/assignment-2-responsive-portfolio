/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useState } from 'react'
import './Home.css'

import Typical from 'react-typical'

import { IconContext } from 'react-icons'
import { BiDownArrow } from 'react-icons/bi'
import { FaPlusCircle, FaMinusCircle, FaFileDownload } from 'react-icons/fa'

import { Link } from 'react-scroll'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Main = () => {
  // PDF scale controls
  const [pdfScale, setPdfScale] = useState(0.7)
  const handleScaleIncrease = () => {
    setPdfScale(pdfScale + 0.1)
  }
  const handleScaleDecrease = () => {
    setPdfScale(pdfScale - 0.1)
  }

  // Change image source on avatar mouse hover.
  const avatarRef = useRef()
  const handleMouseEnter = () => {
    avatarRef.current.setAttribute('src', 'assets/images/avatar-silly.png')
  }
  const handleMouseLeave = () => {
    avatarRef.current.setAttribute('src', 'assets/images/avatar-default.png')
  }

  return (
    <>
      <div className="landingPage">
        <h1 id="myHome">
          <Typical
            steps={['Welcome.message()', 1500]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <hr className="solidDivider"></hr>

        <div className="backgroundContainer">
          <img
            className="hvr-glow"
            src="assets/images/avatar-default.png"
            alt="Profile"
            ref={avatarRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

          <div className="overlay">
            <h1>Hello world, I'm Nik</h1>
            <h1>
              I'm a
              <Typical
                steps={[
                  ' full stack web developer',
                  1500,
                  ' tech enthusiast',
                  1500,
                  ' lifelong learner',
                  1500,
                  ' creative problem solver',
                  1500,
                  'n unshakable optimist',
                  1500,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h1>
          </div>

          <div className="videoContainer">
            <video className="backgroundVideo" autoPlay loop muted>
              <source src="assets/background.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <hr className="solidDivider"></hr>
        <Link to="landingPageAboutMe" smooth={true} offset={-50}>
          <IconContext.Provider
            value={{
              color: 'white',
              size: '45px',
            }}
          >
            <div className="arrowDown">
              <BiDownArrow />
            </div>
          </IconContext.Provider>
        </Link>
      </div>

      <div className="landingPageAboutMe" name="landingPageAboutMe">
        <div className="aboutMeContent">
          <img src="assets/images/profile.png" alt="Profile"></img>
          <div className="aboutMeText">
            <p>
              Hey there, my name is Nik. I'm a full stack web developer with a
              background in construction estimation and a passion for coding.
            </p>
            <p>
              Problem solving has been a running theme throughout my career in
              construction, and I use my background in a highly fast-paced and
              results driven environment to create effective solutions through
              both front end and back end technologies.
            </p>
            <p>
              I'm a relentless pursuer of personal and career growth, and a
              strong believer that effort will always trump talent. My greatest
              asset is the ability and willingness to learn anything, and I am
              always enthusiastic to add a new tool to my arsenal.
            </p>
            <p>
              I truly believe code is among the greatest and most impactful
              tools known to us, and if you share this belief I would love to
              hear from you!
            </p>
          </div>
        </div>
        <div className="resume">
          <Document
            file="assets/nikolay-butnik-full-stack-developer.pdf"
            renderMode="svg"
          >
            <Page pageNumber={1} scale={pdfScale} loading="Loading resume..." />
          </Document>

          {/* Using the PDF controls messes up Typical. 
          Rerender Typical if controls are used */}

          <div className="pdfControls">
            <IconContext.Provider
              value={{
                color: 'white',
                size: '25px',
              }}
            >
              <div className="decreaseScale" onClick={handleScaleDecrease}>
                <FaMinusCircle />
              </div>
              <div className="scalePercentage">{`${Math.round(
                pdfScale * 100
              )}%`}</div>
              <div className="increaseScale" onClick={handleScaleIncrease}>
                <FaPlusCircle />
              </div>
              <a
                href="assets/nikolay-butnik-full-stack-developer.pdf"
                download
                className="downloadFile"
              >
                <FaFileDownload />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>

      <div className="landingPageContact"></div>

      <div className="footer"> © 2021 Nikolay Butnik</div>
    </>
  )
}

export default Main
