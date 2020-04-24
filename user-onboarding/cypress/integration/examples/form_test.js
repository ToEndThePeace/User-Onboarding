const d = {
  name: "Daniel",
  email: "da@ni.el",
  pword: "dan1el",
  iname: "[data-cy='name']",
  iemail: "[data-cy='email']",
  ipass: "[data-cy='password']",
  err: ".ErrorMessages"
};
describe("Form", () => {
  it("can navigate to site", () => {
    cy.visit("");
    cy.url().should("have.string", "localhost");
  });
  it("has validation if name entered is less than 2 characters", () => {
    cy.get(d.iname).type("D").should("have.value", "D");
    cy.get(d.err).contains("Name requires 2 characters");
    cy.get(d.iname).type("X").should("have.value", "DX");
    cy.get(d.err).contains("Name requires 2 characters").should("not.exist");
    cy.get(d.iname).clear();
  });
  it("can type a name", () => {
    cy.get(d.iname).type(d.name).should("have.value", d.name);
  });
  it("has validation if email is invalid", () => {
    cy.get(d.iemail).type("x").should("have.value", "x");
    cy.get(d.err).contains("Invalid email entered");
    cy.get(d.iemail).type("@x.x").should("have.value", "x@x.x");
    cy.get(d.err).contains("Invalid email entered").should("not.exist");
    cy.get(d.iemail).clear();
  });
  it("can type an email", () => {
    cy.get(d.iemail).type(d.email).should("have.value", d.email);
  });
  it("has validation if password is too short", () => {
    cy.get(d.ipass).type("b").should("have.value", "b");
    cy.get(d.err).contains("Password requires 6 characters");
    cy.get(d.ipass).type("anana").should("have.value", "banana");
    cy.get(d.err)
      .contains("Password requires 6 characters")
      .should("not.exist");
  });
  it("has validation if password doesn't have at least one letter and number", () => {
    cy.get(d.err).contains(
      "Password must contain at least one letter and number"
    );
    cy.get(d.ipass).type("1").should("have.value", "banana1");
    cy.get(d.err)
      .contains("Password must contain at least one letter and number")
      .should("not.exist");
    cy.get(d.ipass).clear();
  });
  it("can type a password", () => {
    cy.get(d.ipass).type(d.pword).should("have.value", d.pword);
  });
  it("can check the ToS box", () => {
    cy.get("[data-cy='tos']").check().should("have.checked");
  });
  it("can submit the form", () => {
    cy.get("[data-cy='submit']").click();
    cy.wait(3000);
  });
});
