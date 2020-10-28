import React from 'react';
import './body.css';
//import avatar from './avatar.jpg';
import Typical from 'react-typical';

function Body() {
  return (
    <>
      <div className="jumbotron gradient" id="jumbo1">
        <div className="container">
          <h1>Full Stack Software Developer</h1>
          <h2 className="text-warning">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'HTML',
                1000,
                'CSS',
                1000,
                'Bootstrap',
                1000,
                'JavaScript',
                1000,
                'ReactJS',
                1000,
                'C#',
                1000,
                'ASP.NET',
                1000,
                'MVC',
                1000,
                'SQl',
                1000,
                'MySQl',
                1000,
                'MongoDB',
                1000,
              ]} />
          </h2>
          <h2><span className="element text-danger"></span></h2>
          <p>India → Canada</p>
        </div>
      </div>

      <div className="jumbotron" id="jumbo2">
        <div className="container no-gutters">
          <div className="row">
            <div className="col-md-4">
              <img src="https://avatars2.githubusercontent.com/u/55926153?s=400&u=b39d1d45c9e2b2acf1d5c13372561696ef109077&v=4" alt="amit" className="fit-picture text-center" />
            </div>
            <div className="col-md-8">
              <h1>Hello, I'm Amit <span role="img" aria-label="hifi">👋</span></h1>
              <hr align="center" />
              <p>
                I'm a Software Developer graduate from <a href="https://mitt.ca/" id="github">MITT</a>
              </p>
              <p>
                Right now I am seeking a full-time position as Full-Stack Software Developer
              </p>

              <p>
                In my free time, I like to explore cities –local and afar, play cricket, watch movies, and play a heroic amount of videogames.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body;