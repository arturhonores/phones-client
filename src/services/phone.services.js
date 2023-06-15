import axios from 'axios'

class PhoneService {

    constructor() {

        this.api = axios.create({
            // baseURL: `${process.env.REACT_APP_API_URL}/phones`
            baseURL: `${import.meta.env.VITE_API_URL}/phones`
        })
    }

    getAllPhones() {
        return this.api.get('/getAllPhones')
    }

    getPhone(phoneId) {
        return this.api.get(`/getPhone/${phoneId}`)
    }
}

const phoneService = new PhoneService()

export default phoneService