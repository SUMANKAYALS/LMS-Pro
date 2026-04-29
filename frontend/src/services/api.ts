// import axios from "axios";

// export const api = axios.create({
//     baseURL: "http://localhost:5001/api",

//     withCredentials: true,
// });

import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true, // keep this — sends cookies automatically
});
