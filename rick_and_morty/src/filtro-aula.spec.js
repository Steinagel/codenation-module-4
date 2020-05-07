const filtro = require("./filtro-aula");
const data = require("./data/data.json");

describe("Filtro", () => {
  describe("Status", () => {
    it("Retorna somente os vivos", () => {
      const response = filtro.filterByStatus(data.results, "Alive");
      expect(response.length).toBe(8);
    });
    it("Retorna somente os mortos", () => {
      const response = filtro.filterByStatus(data.results, "Dead");
      expect(response.length).toBe(6);
    });
    it("Retorna somente os desconhecidos", () => {
      const response = filtro.filterByStatus(data.results, "unknown");
      expect(response.length).toBe(6);
    });
  });
  describe("Sexo", () => {
    it("Retorna somente os homes", () => {
      const response = filtro.filterByGender(data.results, "Male");
      expect(response.length).toBe(15);
    });
    it("Retorna somente as mulheres", () => {
      const response = filtro.filterByGender(data.results, "Female");
      expect(response.length).toBe(4);
    });
    it("Retorna somente as desconhecidos", () => {
      const response = filtro.filterByGender(data.results, "unknown");
      expect(response.length).toBe(1);
    });
  });
  describe("Episodios", () => {
    const response = filtro.filterByEpisode(data.results, "1");
    expect(response.length).toBe(2);
    expect(response[1].name).toBe("Morty Smith");
  });
});
