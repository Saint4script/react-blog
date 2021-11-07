import axios from 'axios';

export default class PostService {
    static async getAll(page = 1) {
        const response = await axios.get('https://gorest.co.in/public/v1/posts', {
            params: {page: page}
        });
        return response;  
    }
}