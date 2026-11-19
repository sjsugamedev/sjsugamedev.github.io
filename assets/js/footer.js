const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <style>
  *
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  li, a
  {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 16px;
    color: white;
  
    text-decoration: none;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  
  }
  
  .navbar-left
  {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  
  header
  {
    background-color: #003E82;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1.5rem ;
  }
  
  .logo
  {
    margin-right: 10px;
    width: 50px;
    cursor: pointer;
  }
  
  .sjsu-game-dev
  {
    font-weight: 700;
    font-size: 20px;
    color: white;
    font-family: "Poppins";
  }
  
  .nav-links
  {
    list-style: none;
    margin-left: auto;
  }
  
  
  .nav-links li
  {
    display: flex;
    margin-left: auto;
    display: inline-block;
    padding: 0px 20px;
  }
  
  /* target nav tags and a tag inside them */
  .nav-links li a
  {
    transition: all .3s ease 0s;
  }
  
  .nav-links li a:hover
  {
    color: #face0d;
  }
  
  
  /* may need to get rid of this: will target all buttons */
  
  /* footer */
  footer
  {
    display: flex;
    text-align: center;
    padding: .5rem 1.5rem ;
    background-color: #003E82;
    color: white;
    /* align = vertical  */
    align-items: center;
  }
  
  .social-media-link
  {
    display: flex;
    width: 10rem;
    /* justify images to container because container holds images to apply justify content */
    justify-content: right;
    gap: 1rem;
  }
  
  .social-media-link, img
  {
    /* max-height fits to parent - social media link div whose size is 2rem */
    /* max height because height forces whole dimension */
    height: auto;
    max-width: 100%;
  }
  
  </style>
  <footer>
  <!-- reused header navbar for footer -->
  <div class="navbar-left">
    <a href="index.html"><img href=""src="assets/img/shared/logo.png" alt="logo" class="logo"></a>
    <a href="index.html" class="sjsu-game-dev">SJSU Game Dev Club</a>
  </div>
  
  <nav>
    <div class="social-media-link">
      <!-- used nested img tags in the 'a' tag -->
      <a href="https://www.instagram.com/sjsugamedev/"><img href=""src="assets/img/shared/social-media/instagram.png" alt="logo" class="social-media-logo"></a>
      <a href="https://www.linkedin.com/company/sjsugamedev/"><img href=""src="assets/img/shared/social-media/linkedin.png" alt="logo" class="social-media-logo"></a>
      <a href="https://www.twitch.tv/sjsugamedev"><img href=""src="assets/img/shared/social-media/twitch.png" alt="logo" class="social-media-logo6"></a>
      <a href="https://www.youtube.com/@SJSUGameDev"><img href=""src="assets/img/shared/social-media/youtube.png" alt="logo" class="social-media-logo"></a>
  </div>
  </nav>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
