import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    return io(BASE_URL);
  } else {
    // return io("/", { path: "/api/socket.io" });
    return io("https://devtinder-backend-3-2bt5.onrender.com");
  }
};
