import { Server } from 'miragejs';


const makeServer = ({ environment = 'development ' } = {}) => {
  const mirage = new Server({
    environment,

    logging: true,

    routes() {
      this.get("/api/students", () => [
        { id: "1", name: "Luke", grade: 1 },
        { id: "2", name: "Leia", grade: 4 },
        { id: "3", name: "Anakin", grade: 2 },
        { id: "4", name: "Test", grade: 3 },
        { id: "5", name: "Hello", grade: 7 },
        { id: "6", name: "Hi", grade: 6 }
      ])

      // delete student
      this.delete("/api/deletestudent", () => {
        return { status: "success" }
      })

      // add sutdent
      this.post("/api/addstudent", () => {
        return { status: "success" }
      })

    },
  });

  return mirage;
}

makeServer()

