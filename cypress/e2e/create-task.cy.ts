describe("task creation", () => {
  const taskContent = "Created task";
  beforeEach(() => {
    cy.visit("/");
  });

  it("can add task using enter when input is focused", () => {
    cy.get("#task-input").type(`${taskContent} {enter}`);
    cy.get("#task-container li").last().get(".task-content").should("have.text", taskContent);
  });

  it("can add task using button to add", () => {
    cy.get("#task-input").type(taskContent);
    cy.get("#input-button").click();
    cy.get("#task-container li").last().get(".task-content").should("have.text", taskContent);
  });

  it("does not add task when input is empty", () => {
    cy.get("#input-button").click();
    cy.get("#input-error").should("be.visible");
    cy.get("#task-container li").should("not.exist");
  });

  it("does not add task when its longer than 150", () => {
    const longTaskContent =
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p";
    cy.get("#task-input").type(`${longTaskContent} {enter}`);
    cy.get("#input-error").should("be.visible");
    cy.get("#task-container li").should("not.exist");
  });
});
