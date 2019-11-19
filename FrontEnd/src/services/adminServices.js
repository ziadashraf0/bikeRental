
import { stringify } from 'querystring';
import http from './httpService';

export async function adminRegister(reqBody) {
    alert('posting');
    
    

    return await http.post('http://localhost:4000/admin/signup', stringify(reqBody));
   
}