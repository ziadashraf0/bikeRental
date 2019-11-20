
import { stringify } from 'querystring';
import http from './httpService';

export function adminRegister(reqBody) {
    alert('posting');

    
    return http.post('http://localhost:4000/admin/signup', stringify(reqBody));

   
}
export  async function adminLogin(reqBody) {
   
    console.log(reqBody);

    return await http.post('http://localhost:4000/admin/login', stringify(reqBody));


};