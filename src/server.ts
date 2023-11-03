import fastify from "fastify";

const app = fastify();

app.get("/hello", async () => {
  return "Hello world";
});

app.listen(
  {
    port: 3333,
  },
  () => console.log("Http server is running!")
);
