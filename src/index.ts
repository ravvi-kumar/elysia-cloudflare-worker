import { Elysia } from "elysia";

const app = new Elysia({ aot: false })
  .get("/", () => "Hello Elysia")

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export default {
  fetch: app.fetch
}