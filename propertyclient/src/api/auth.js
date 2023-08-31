import axios from "axios";

//const API = 'http://localhost:4000'

export const registerRequest = async (user) => await axios.post("http://localhost:4000/register",user)

