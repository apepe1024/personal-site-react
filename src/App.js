import React, { Component } from 'react';
import logo from './logo.svg';
import './css/application.css';
import scriptLoader from 'react-async-script-loader';

class App extends Component {
  render() {
    return (
      <body id="home" data-spy="scroll" data-target=".navbar" data-offset="100">

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <div class="container">
            <a class="navbar-brand order-1" data-toggle="modal" data-target="#contact" onmouseover="" style="cursor: pointer;">Contact Me</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#about">About</a>
                <a class="nav-item nav-link" href="#content">Resumes & Portfolios</a>
              </div>
            </div>
          </div>
        </nav>

        <div class="parallax">
            <div class="avatar-container">
                <img class="avatar" src="./src/jpg/avatar.jpg" />
            </div>

            <div class="scholarship">
                <img class="google" src="./src/png/GrowWithGoogleDeveloperChallengeScholarship.png" />
            </div>

            <div class="caption">
                <span class="upper-border">Alessandro Pepe</span>
            </div>
            <div class="social-grid-container">
              <a href="https://www.linkedin.com/in/alessandro-pepe-588014125/" target="_blank">
                <image class="social-button" src="./src/svg/linkedin-icon.svg" />
              </a>
              <a href="https://github.com/apepe1024" target="_blank">
                <image class="social-button" src="./src/svg/25231.svg" />
              </a>
              <a href="https://teamtreehouse.com/alessandropepe" target="_blank">
                <image class="social-button" src="./src/svg/treehouse.svg"  />
              </a>
            </div>
        </div>

        <div id="about" class="parallax2">
          <div class="layer"></div>
            <div class="mid-caption">
                <span class="mid-border">Who I Am</span>
            </div>
            <div class="sub-caption1">
                  <span class="sub-border">A Dreamer</span>
            </div>
            <div class="sub-caption2">
                  <span class="sub-border">A Writer</span>
            </div>
            <div class="sub-caption3">
                  <span class="sub-border">A Thinker</span>
            </div>
            <div class="sub-caption4">
                  <span class="sub-border">A Developer</span>
            </div>
        </div>

        <div id="content" class="parallax3">
          <div class="resume-grid-container">
            <a href="./src/pdf/Alessandro Pepe January 2018 Copy Resume.pdf" target="_blank" onmouseover="" style="cursor: pointer;">
              <div class="label-caption resume-label-caption">
                    <span class="label-border">Copywriter</span>
              </div>
              <div class="label-caption resume-label-caption">
                    <span class="label-border">Resume</span>
              </div>
              <image class="resume-button" src="./src/svg/pencil.svg" />
            </a>
            <a href="./src/pdf/Alessandro Pepe January 2018 Dev Resume.pdf" target="_blank" onmouseover="" style="cursor: pointer;">
              <div class="label-caption resume-label-caption">
                    <span class="label-border">Developer</span>
              </div>
              <div class="label-caption resume-label-caption">
                    <span class="label-border">Resume</span>
              </div>
              <image class="resume-button" src="./src/svg/arrows.svg" />
            </a>
          </div>

          <div class="portfolio-grid-container">

            <a data-toggle="modal" data-target="#WW">
              <div class="portfolio-label-caption">
                    <span class="label-border">Written Works</span>
              </div>
              <image class="portfolio-button" src="./src/svg/book.svg" />
            </a>
            <a data-toggle="modal" data-target="#copy">
              <div class="portfolio-label-caption">
                    <span class="label-border">Copy Portfolio</span>
              </div>
              <image class="portfolio-button" src="./src/svg/copy.svg" />
            </a>
            <a class="brace-query" data-toggle="modal" data-target="#dev">
              <div class="portfolio-label-caption">
                    <span class="label-border">Developer Portfolio</span>
              </div>
              <image class="portfolio-button brace-query-button" src="./src/svg/braces.svg" />
            </a>
          </div>


        </div>

        <div class="footer-parallax">
          <div class="footer-caption">
              <span class="sub-border">&copy; 2018</span>
          </div>
        </div>


        <div class="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="register form" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-white">
                <h5 class="modal-title" id="exampleModalLabel">Contact Me</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="closer" aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h4>Thank you very much for your interest!</h4><br>
                <h6>I will be in touch as soon as possible.</h6>
                <br>

                <form method="POST" action="https://formspree.io/apepe1024@gmail.com">

                  <div class="form-group">
                    <label class="form-control-label" for="name">Your name:</label>
                    <input required type="text" name="name" class="form-control">
                  </div>
                  <div class="form-group">
                    <label class="form-control-label" for="email">Your email:</label>
                    <input required type="email" name="email" class="form-control" placeholder="someone@website.com">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Your message:</label>
                    <textarea required name="message" class="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" target="_blank" class="btn btn-primary btn-lg" id="form-submit">Send</button>
                </form><!-- /contact form -->
              </div>
            </div>
          </div>
        </div>


        <div class="modal fade" id="WW" tabindex="-1" role="dialog" aria-labelledby="register form" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-white">
                <h5 class="modal-title" id="exampleModalLabel">Written Works</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="closer" aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <h5>College Papers</h5>
                <ul>

                  <li><p><em><strong>2016:</strong></em></p></li>
                  <ul>
                    <li><p><a href="./src/pdf/parallelism.pdf" target="_blank">Parallelism Panned</a></p></li>
                    <li><p><a href="./src/pdf/estate.pdf" target="_blank">An Estate of Women</a></p></li>
                    <li><p><a href="./src/pdf/expense.pdf" target="_blank">Great Expense and Inconvenience</a></p></li>
                    <li><p><a href="./src/pdf/garden.pdf" target="_blank">Weeding out the Garden</a></p></li>
                    <li><p><a href="./src/pdf/clytemnestra.pdf" target="_blank">Clytemnestra as an Antihero</a></p></li>
                  </ul>
                  <li><p><em><strong>2015:</strong></em></p></li>
                  <ul>
                    <li><p><a href="./src/pdf/polyglot.pdf" target="_blank">Polyglot Nation: South Africa and its Eleven Languages</a></p></li>
                    <li><p><a href="./src/pdf/kubrick.pdf" target="_blank">A Mental Exposé: Kubrick and Exploitation of Mental Illness</a></p></li>
                    <li><p><a href="./src/pdf/epsilon.pdf" target="_blank">[ɛpsɪlan]: The Rapper’s Delight</a></p></li>
                  </ul>
                  <li><p><em><strong>2014:</strong></em></p></li>
                  <ul>
                    <li><p><a href="./src/pdf/poe.pdf">Poe and Literary Criticism</a></p></li>
                    <li><p><a href="./src/pdf/shakespeare.pdf" target="_blank">Women in Shakespeare</a></p></li>
                  </ul>
                  <li><p><em><strong>2011:</strong></em></p></li>
                  <ul>
                    <li><p><a href="./src/pdf/sillitoe.pdf" target="_blank">Alan Sillitoe Vs The World</a></p></li>
                  </ul>
                  <li><p><em><strong>2010:</strong></em></p></li>
                  <ul>
                    <li><p><a href="./src/pdf/milton.pdf" target="_blank">Intelligence Lost: “Paradise Lost” thoughts</a></p></li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div class="modal fade" id="copy" tabindex="-1" role="dialog" aria-labelledby="register form" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-white">
                <h5 class="modal-title" id="exampleModalLabel">Copy Portfolio</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="closer" aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <h5>Long Form</h5>
                <ul>

                  <li><h6>Holts Cigars</h6></li>
                  <ul>
                    <li><p><a href="./src/pdf/holts.pdf" target="_blank">Brand Story Page</a></p></li>
                  </ul>

                  <li><h6>InvisAlign</h6></li>
                  <ul>
                    <li><p><a href="./src/pdf/invisalign.pdf" target="_blank">Information Block</a></p></li>
                  </ul>

                </ul>

                <h5>Medium Form</h5>
                <ul>

                  <li><h6>Natural Stacks</h6></li>
                  <ul>
                    <li><p><a href="./src/pdf/naturalstacks.pdf" target="_blank">Sales Letter</a></p></li>
                  </ul>

                </ul>

                <h5>Short Form</h5>
                <ul>

                  <li><h6>Comcast</h6></li>
                  <ul>
                    <li><p><a href="./src/pdf/comcast1.pdf" target="_blank">Customer Email 1</a></p></li>
                    <li><p><a href="./src/pdf/comcast2.pdf" target="_blank">Customer Email 2</a></p></li>
                    <li><p><a href="./src/pdf/comcast3.pdf" target="_blank">Customer Email 3</a></p></li>
                    <li><p><a href="./src/pdf/comcast4.pdf" target="_blank">Customer Email 4</a></p></li>
                  </ul>

                  <li><h6>Synergixx Inc.</h6></li>
                  <ul>
                    <li><p><a href="./src/pdf/synergixx.pdf" target="_blank">Radio Ad Script</a></p></li>
                  </ul>

                </ul>

                <h5>Micro Form</h5>
                <ul>

                  <li><h6>Burlington Stores</h6></li>
                  <ul>
                    <li><p><a href="https://imgur.com/a/7gVhc" target="_blank">Gallery of 12 Samples</a></p></li>
                  </ul>

                </ul>
              </div>
            </div>
          </div>
        </div>



          <div class="modal fade" id="dev" tabindex="-1" role="dialog" aria-labelledby="register form" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header text-white">
                  <h5 class="modal-title" id="exampleModalLabel">Developer Portfolio</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="closer" aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">

                  <h5>Websites</h5>
                  <ul>

                    <li><a href="http://apepe1024.github.io/" target="_blank"><h6>Personal Site (you are on it!)</h6></a></li>
                    <ul>
                      <li><a href="https://github.com/apepe1024/apepe1024.github.io" target="_blank"<p>Github Repo</p></a></li>
                      <li><p>Technologies Used:<br>
                        HTML5, CSS3, JavaScript (ES6), XML, SVG, jQuery, Bootstrap, Git, Github, Sass</p>
                      </li>
                    </ul>

                  </ul>

                  <h5>Apps</h5>
                  <ul>

                    <li><a href="https://apepe1024-simple-weather-app.herokuapp.com/" target="_blank"><h6>Simple Weather App</h6></a></li>
                    <ul>
                      <li><a href="https://github.com/apepe1024/Simple-Weather-App" target="_blank"><p>Github Repo</p></a></li>
                      <li><p>Technologies Used:<br>
                        HTML5, CSS3, JavaScript (ES6), Node.js, Git, Github, Heroku, API</p>
                      </li>
                    </ul>

                    <li><a href="https://codepen.io/apepe1024/pen/jYeowZ" target="_blank"><h6>Udacity Pixel Art Maker</h6></a></li>
                    <ul>
                      <li><a href="https://github.com/apepe1024/Udacity-Pixel-Art-Maker" target="_blank"><p>Github Repo</p></a></li>
                      <li><p>Technologies Used:<br>
                        HTML5, CSS3, JavaScript, Git, Github</p>
                      </li>
                    </ul>

                  </ul>

                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default scriptLoader(
  [
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js'
  ]
)(App);
