describe("Loading tasks from local storage", () => {
  beforeEach(() => {
    cy.populateStorage();
  });

  it("can load tasks from local storage", () => {
    cy.fixture("tasks.json").then((tasks) => {
      cy.get("#task-container").find("li").its("length").should("eq", tasks.length);
    });
  });
});
