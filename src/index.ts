import { Elysia } from "elysia";

const app = new Elysia({ aot: false })
  .get("/", () => "Hello Elysia")

console.log(
  `🦊 Elysia is running`
);

export default {
  fetch: app.fetch
}