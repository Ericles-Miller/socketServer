import { httpServer } from "jobs/sockets";

const PORT = process.env.PORT || 3333;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
