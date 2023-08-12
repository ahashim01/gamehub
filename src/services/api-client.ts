import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f1ce367aa6f84bf7bee487f3a4ff2fd5"
    }
});