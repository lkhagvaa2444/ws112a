import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});
books.set("2", {
  id: "2",
  title: "The Old Man",
  author: "Lee Ear",
});

const classrooms = new Map();
classrooms.set("e320", {
    roomNumber: "e320",
    class: "Multimedia Classroom",
    teacher: "Teacher",
});
classrooms.set("e319", {
    roomNumber: "e319",
    class: "Embedded Systems Lab",
    teacher: "Teacher",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  })
  .get("/room", (context) => {
    context.response.body = Array.from(classrooms.values());
  })
  .get("/room/:roomNumber", (context) => {
    if (context.params && context.params.roomNumber && classrooms.has(context.params.roomNumber)) {
      const room = classrooms.get(context.params.roomNumber);
      context.response.body = `Room ${room.roomNumber} is ${room.class}`;
    } else {
      context.response.body = "Room not found.";
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });