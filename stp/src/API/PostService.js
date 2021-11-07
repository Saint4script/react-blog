import axios from 'axios';

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://gorest.co.in/public/v1/posts');
        return response.data.data;  
    }
}