import io from "socket.io-client";

const socket = io.connect(location.origin);

export default socket;
