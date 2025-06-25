const socialLinksTemplate = document.createElement('template');

socialLinksTemplate.innerHTML = `
    <div class="social-links-header">
      <a href="https://www.instagram.com/sjsugamedev/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/instagram.png" alt="Instagram"></a>
      <a href="https://www.linkedin.com/company/sjsugamedev/" target="_blank" rel="noopener noreferrer"><img src="img/social-media/linkedin.png" alt="LinkedIn"></a>
      <a href="https://discord.gg/xGv8qYA" target="_blank" rel="noopener noreferrer" class="discord-header-button">
          <img src="img/social-media/discord.png" alt="Discord Logo">
          <div class="discord-button-text">
              <span>JOIN THE</span>
              <strong>CLUB!</strong>
          </div>
      </a>
      <a href="https://www.twitch.tv/sjsugamedev" target="_blank" rel="noopener noreferrer"><img src="img/social-media/twitch.png" alt="Twitch"></a>
      <a href="https://www.youtube.com/@SJSUGameDev" target="_blank" rel="noopener noreferrer"><img src="img/social-media/youtube.png" alt="YouTube"></a>
    </div>
`;

class SocialLinks extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(socialLinksTemplate.content.cloneNode(true));
    }
}

customElements.define('social-links-component', SocialLinks); 