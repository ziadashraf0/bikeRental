
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
export async function adminEditEmail(reqBody) {
    alert('edit email');
    console.log(reqBody);

    return await http.put('http://localhost:4000/admin/edit/email', stringify(reqBody));


};
export async function adminEditPhone(reqBody) {

    console.log(reqBody);

    return await http.put('http://localhost:4000/admin/edit/phone', stringify(reqBody));


};
export async function adminEditPassword(reqBody) {

    console.log(reqBody);

    return await http.put('http://localhost:4000/admin/edit/password', stringify(reqBody));


};
export async function adminEditBirthDate(reqBody) {

    console.log(reqBody);

    return await http.put('http://localhost:4000/admin/edit/birthDate', stringify(reqBody));


};