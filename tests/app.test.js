import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("Express API", () => {
  test("GET / returns welcome message and version", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      message: "Welcome to my Express API!",
      version: "1.1.11",
    });
  });

  test("GET /health returns ok status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      status: "ok",
    });
  });
});
