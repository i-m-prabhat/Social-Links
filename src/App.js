import './App.css';

function App() {
  return (
    <>
    <section class="animated-background">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </section>

    <a id="profilePicture" href="#popup">
      <img src="" alt="Profile Picture"/>
    </a>

    <div class="overlay" id="popup">
      <div class="popup">
        <div class="popup-photo">
          <a href="/" target="_blank" rel="noreferrer">
            <img src="/" alt="Profile Picture"/>
          </a>
        </div>
        <div class="popup-quote">
          But... the sensation that I've lost something lingers for a longtime after I wake up.
        </div>
        <a class="popup-close" onclick="history.back()">&times;</a>
      </div>
    </div>

    <div id="userName">
      Prabhat Patel
    </div>

    <div id="links">
      <a class="link" href="https://github.com/i-m-prabhat" target="_blank" rel="noreferrer">
        <i class="fab fa-github">&nbsp;</i>Github
      </a>
      <a class="link" href="https://www.linkedin.com/in/devprabhat" target="_blank" rel="noreferrer">
        <i class="fab fa-linkedin">&nbsp;</i>Linkedin
      </a>
      <a class="link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-facebook">&nbsp;</i>Facebook
      </a>
      <a class="link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-instagram">&nbsp;</i>Instagram
      </a>
      <a class="link" href="https://twitter.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-twitter">&nbsp;</i>Twitter
      </a>
    </div>

    <div id="hashtag">
      #BeHappy❤
    </div>
    </>
  );
}

export default App;
