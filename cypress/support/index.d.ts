declare namespace Cypress {
  interface Chainable {
    /**
     * Populates local storage with tasks from fixtures/tasks.json
     */
    populateStorage(): void;
  }
}
