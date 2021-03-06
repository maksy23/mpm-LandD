const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
  it("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  }),

  it("it should filter by a search term (uRl)", () => {
    const input = [
      { id: 1, url: "https://www.link1.dev" },
      { id: 2, url: "https://www.link2.dev" },
      { id: 3, url: "https://www.url3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.url3.dev" }];

    expect(filterByTerm(input, "uRl")).toEqual(output);
  })

  // it("it should throw when searchTerm is empty string", () => {
  //   const input = [
  //     { id: 1, url: "https://www.link1.dev" },
  //     { id: 2, url: "https://www.link2.dev" },
  //     { id: 3, url: "https://www.url3.dev" }
  //   ];

  //   expect(filterByTerm(input, "")).toThrowError("searchTerm cannot be empty");
  // })
});
