describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/SiparisFormu");
  });
  it("isim inputu ekle", () => {
    const newItem = "Buse";
    cy.get("[ cy=input]").type(`${newItem}{enter}`);
  });
  it("");
});
