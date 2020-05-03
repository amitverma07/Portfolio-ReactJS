import React from 'react'
import './footer.css';
import foot from './foot.jpg';

function Footer() {
  return (
    <>
      <section className="sayhello" id="hello">
        <div className="row">
          <div className="large-4 columns pad10">
            <p>
              <b>No <i className="far fa-copyright"></i> copyright issues.</b><br />
            </p>
          </div>
          <div className="large-4 columns">
            <p className="footTitle alignCenter">
              Amit Verma
              </p>
            <p className="madewithlove">
              Made with <i className="fa fa-heart"></i>
            </p>
          </div>
          <div className="large-4 columns alignCenter pad10">
            <p className="alignCenter">
              You can find me everywhere
              </p>
            <ul className="tools">
              <li><a href="https://www.linkedin.com/in/sd-amitverma/">
                <span className="fa-stack fa-1x">
                  <i class="fab fa-linkedin"></i>
                </span></a></li>
              <li><a href="https://twitter.com/amit_verma7">
                <span className="fa-stack fa-1x">
                  <i class="fab fa-twitter-square"></i>
                </span></a></li>
              <li><a href="https://github.com/amitverma07">
                <span className="fa-stack fa-1x">
                  <i class="fab fa-github-square"></i>
                </span></a></li>
              <li><a href="https://www.facebook.com/amitv7">
                <span className="fa-stack fa-1x">
                  <i class="fab fa-facebook-square"></i>
                </span></a></li>
              <li><a href="mailto:amitverma07@yahoo.com">
                <span className="fa-stack fa-1x">
                  <i class="fas fa-envelope"></i>
                </span></a></li>
            </ul>
          </div>
        </div>

        <img className="footer-image" src={foot} alt="footimg" />
      </section>
    </>
  );
}

export default Footer;