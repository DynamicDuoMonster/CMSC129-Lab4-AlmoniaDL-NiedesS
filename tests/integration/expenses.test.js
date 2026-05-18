const request = require("supertest");
const app = require("../../server/src/app");

describe("POST /api/expenses", () => {
  test("returns 201 with created expense", async () => {
    const res = await request(app)
      .post("/api/expenses")
      .send({ title: "Lunch", amount: 15, category: "Food" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("title", "Lunch");
    expect(res.body).toHaveProperty("amount", 15);
    expect(res.body).toHaveProperty("category", "Food");
    expect(res.body).toHaveProperty("createdAt");
  });

  test("returns 400 when title is missing", async () => {
    const res = await request(app)
      .post("/api/expenses")
      .send({ title: "", amount: 15, category: "Food" });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error", "Title is required");
  });
});

describe("GET /api/expenses", () => {
  test("returns 200 with an array of expenses", async () => {
    const res = await request(app).get("/api/expenses");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});