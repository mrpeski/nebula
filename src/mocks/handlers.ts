import { http, HttpResponse } from "msw";
import cards from "./responses/cards.ts";
import transactions from "./responses/transactions.ts";
import charts from "./responses/charts.ts";
import favorites from "./responses/favorites.ts";

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json({
      user: {
        id: "abc-123",
        name: "John Maverick",
      },
    });
  }),
  http.get("/api/cards", () => {
    return HttpResponse.json({
      data: cards,
    });
  }),
  http.get("/api/recent-transactions", () => {
    return HttpResponse.json({
      data: transactions,
    });
  }),
  http.get("/api/charts", () => {
    return HttpResponse.json({
      data: charts,
    });
  }),
  http.get("/api/favorites", () => {
    return HttpResponse.json({
      data: favorites,
    });
  }),
];
