const headerTemplate = document.createElement('template');

headerTemplate.innerHTML =
`
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
    background-color: rgba(0,0,0,0);
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

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
  }

  .hamburger .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 70px; /* Adjust as needed */
      left: 0;
      background-color: #003e82; /* Same as header or a suitable color */
      text-align: center;
      z-index: 1000; /* Ensures menu is on top */
    }

    .nav-links.active {
      display: flex;
    }

    .nav-links li {
      padding: 15px 0;
      display: block;
      width: 100%;
    }

    .hamburger {
      display: flex;
    }

    .sjsu-game-dev {
      display: none; /* Optionally hide the text logo on small screens */
    }
  }

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
  <header>
      <!-- div is for the left side of the header-->
      <div class="navbar-left">
        <a href="index.html"><img href=""src="logo.png" alt="logo" class="logo"></a>
        <a href="index.html" class="sjsu-game-dev">SJSU Game Dev Club</a>
      </div>
      
      <nav>
        <ul class="nav-links">
          <li> <a href="about.html">About</a></li>
          <li> <a href="games.html">Games</a></li>
          <li> <a href="events.html">Events</a></li>
        </ul>
        <div class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </nav>
    </header>
`;

class Header extends HTMLElement
{
    constructor()
    {
      super();
    }
  
    connectedCallback()
    {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.appendChild(headerTemplate.content);

      const hamburger = shadowRoot.querySelector('.hamburger');
      const navLinks = shadowRoot.querySelector('.nav-links');

      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
}
  
customElements.define('header-component', Header);
  