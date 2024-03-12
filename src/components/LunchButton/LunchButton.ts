import './style.css';

interface LunchButtonProps {
  text: string;
  color: string;
  type: string;
}

const LUNCH_BUTTON = ({ text, color, type }: LunchButtonProps) => `
  <button class="button button--${color} text-caption" type="${type}">${text}</button>
`;

class LunchButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.getAttribute('text') ?? '';
    const color = this.getAttribute('color') ?? '';
    const type = this.getAttribute('type') ?? '';
    this.innerHTML = LUNCH_BUTTON({ text, color, type });
  }
}

customElements.define('lunch-button', LunchButton);
