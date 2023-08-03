import { hello } from "./index";

describe("index.ts", () => {
  describe("hello()", () => {
    test("should return the correct greeting", () => {
      // Arrange
      const name = "John";

      // Act
      const result = hello(name);

      // Assert
      expect(result).toBe(`Hello ${name}!`);
    });

    test("should return the default greeting when no name is provided", () => {
      // Act
      const result = hello();

      // Assert
      expect(result).toBe(`Hello world!`);
    });
  });
});
