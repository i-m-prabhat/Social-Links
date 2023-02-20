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
      <img src="./logo.jpeg" alt="Profile Picture"/>
    </a>

    <div class="overlay" id="popup">
      <div class="popup">
        <div class="popup-photo">
          <a href="./logo.jpeg" target="_blank" rel="noreferrer">
            <img src="./logo.jpeg" alt="Profile Picture"/>
          </a>
        </div>
        <div class="popup-quote">
          Hey Visitors,I 'm Prabhat. You might recognize me as MERN Stack Developer 👨‍💻
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
      ❤
      ❤
      ❤
      ❤
      ❤
    </div>
    </>
  );
}

export default App;
