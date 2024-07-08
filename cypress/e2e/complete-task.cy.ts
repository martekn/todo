describe("task completion", () => {
  beforeEach(() => {
    cy.populateStorage();
  });

  it("can mark task as complete", () => {
    cy.get("#input-1").click();
    cy.get("#input-1").should("be.checked");
  });

  it("can mark competed task as incomplete", () => {
    cy.get("#input-2").click();
    cy.get("#input-2").should("not.be.checked");
  });

  it("persists through reload", () => {
    cy.get("#input-1").click();
    cy.get("#input-1").should("be.checked");
    cy.reload();
    cy.get("#input-1").should("be.checked");
  });
});
