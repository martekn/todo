describe("task deletion", () => {
  beforeEach(() => {
    cy.populateStorage();
  });

  it("can delete a single task", () => {
    cy.fixture("tasks.json").then((tasks) => {
      cy.get(`li#${tasks[0].id} .delete-button`).click();
      cy.get(`li#${tasks[0].id} .delete-button`).should("not.exist");
    });
  });
});
