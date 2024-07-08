describe("task deletion", () => {
  beforeEach(() => {
    cy.populateStorage();
  });

  it("can clear all tasks", () => {
    cy.get("#clear-button").click();
    cy.get("#task-container").find("li").should("not.exist");
  });
});
