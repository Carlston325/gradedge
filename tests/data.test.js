import { describe, test, it, expect } from "vitest";
describe("reviewDataFiltering", () => {
  test("Should return Array with only one Chris Martin", () => {
    const data = [
      {
        id: 3,
        name: "Jane Smith",
        review: "An amazing experience! Highly recommend to others.",
        stars: 5,
        role: "Dev",
      },
      {
        id: 4,
        name: "Alice Johnson",
        review:
          "I was very satisfied with the service provided. Will use again.",
        stars: 4,
        role: "Doctor",
      },
      {
        id: 5,
        name: "Kevin Stuart",
        review:
          "A must use for anyone that wants to get a carreer in their field.",
        stars: 5,
        role: "Nurse",
      },
      {
        id: 6,
        name: "Mark Goldridge",
        review:
          "I’ve been using their services for about three months now, and honestly, I’m impressed.",
        stars: 3,
        role: "Engineer",
      },
      {
        id: 10,
        name: "Chris Martin",
        review: "This site helped me get a job, great CV building",
        stars: 4,
        role: "Dev",
      },
      {
        id: 12,
        name: "Chris Martin",
        review: "This site helped me get a job, great CV building",
        stars: 4,
        role: "Dev",
      },
    ];

    const result = data.filter((items, index, self) => {
      return index === self.findIndex((r) => r.name === items.name);
    });

    expect(result).toEqual([
      {
        id: 3,
        name: "Jane Smith",
        review: "An amazing experience! Highly recommend to others.",
        stars: 5,
        role: "Dev",
      },
      {
        id: 4,
        name: "Alice Johnson",
        review:
          "I was very satisfied with the service provided. Will use again.",
        stars: 4,
        role: "Doctor",
      },
      {
        id: 5,
        name: "Kevin Stuart",
        review:
          "A must use for anyone that wants to get a carreer in their field.",
        stars: 5,
        role: "Nurse",
      },
      {
        id: 6,
        name: "Mark Goldridge",
        review:
          "I’ve been using their services for about three months now, and honestly, I’m impressed.",
        stars: 3,
        role: "Engineer",
      },
      {
        id: 10,
        name: "Chris Martin",
        review: "This site helped me get a job, great CV building",
        stars: 4,
        role: "Dev",
      },
    ]);
  });
});
