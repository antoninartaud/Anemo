import axios from 'axios'


const apiUrlSignup = "http://localhost:8000/signup"
const apiUrlAdmin = "http://localhost:8000/admin"
const apiUrlResponse = "http://localhost:8000/response"



export const postSignup = async (body) => {
    try {
        const response = await axios.post(`${apiUrlSignup}/signup`, body)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}

export const postLogin = async (body) => {
    try {
        const response = await axios.post(`${apiUrlSignup}/login`, body)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}


export const getQuestions = async () => {
    try {

        const token = localStorage.getItem("token")
        const response = await axios.get(`${apiUrlAdmin}/`, { headers: { Authorization: `Bearer ${token}` } })
        console.log("r", response.data)
        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}

export const postReponse = async (body) => {
    try {
        const response = await axios.post(`${apiUrlResponse}/`, body)

        return response.data
        console.log(response.data)
    } catch (error) {
        console.error(error)
        return false
    }
}


