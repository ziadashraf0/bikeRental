import http from './httpService';

export  function adminRegister(body) {
    console.log('posting');
    return  http.get('http://localhost:4000/admin');
}
