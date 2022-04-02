import { Server } from 'miragejs';


const makeServer = ({ environment = 'development ' } = {}) => {
  const mirage = new Server({
    environment,

    logging: true,

    routes() {
        this.get("/api/students", () => [
            { id: "1", name: "Luke" },
            { id: "2", name: "Leia" },
            { id: "3", name: "Anakin" },
        ])
    },
  });

  return mirage;
}

makeServer()

