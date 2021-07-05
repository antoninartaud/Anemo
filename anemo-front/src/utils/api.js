import axios from 'axios'


const apiUrlSignup="http://localhost:8000/signup"
const apiUrlAdmin=""



export const postSignup = async (body) => {
    try {
        const response = await axios.post(`http://localhost:8000/signup/signup`, body)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}
