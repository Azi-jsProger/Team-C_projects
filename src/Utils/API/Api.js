import axios from "axios";

const  axiosInstance = axios.create({
    baseURL: 'https://codify-graduation-project.vercel.app'
})

export {
    axiosInstance
}