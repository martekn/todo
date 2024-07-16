import { safeQuerySelector } from "@/js/helper/safeQuerySelector";

/**
 * Represents an error alert element in the DOM, extending HTMLElement.
 *
 * @class
 * @extends {HTMLElement}
 */
export class ErrorAlert extends HTMLElement {
  error: string;

  /**
   * Creates an instance of ErrorAlert.
   *
   * @param error - The error message to display in the alert.
   * @param id - The id to set for the alert element.
   */
  constructor(error: string, id: string) {
    super();

    this.error = error;
    this.setAttribute("id", id);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    try {
      const template = safeQuerySelector<HTMLTemplateElement>("#error-alert");

      const alert: DocumentFragment = template.content.cloneNode(true) as DocumentFragment;

      const errorMessage = safeQuerySelector<HTMLDivElement>(".error-message", alert);
      errorMessage.innerText = this.error;
      this.appendChild(alert);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Caught an unknown error", error);
      }
    }
  }
}

customElements.define("error-alert", ErrorAlert);
