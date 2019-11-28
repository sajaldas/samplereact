
import axios from "axios";

const apiBaseUrl = 'http://localhost/react';
const username='admin'
const password='ZCL6 SkTS 3my8 t9aQ Vc07 QcgQ'
const encodedString = new Buffer(username + ':' + password).toString('base64');

export default class Api {
    // constructor() {
        
    // }

    getList() {
        return new Promise((resolve, reject) => {            
            axios.get(apiBaseUrl + '/wp-json/wp/v2/todo')
                .then(res => {
                    //console.log('res = ', res)
                    resolve(res.data)
                }).catch(error => {
                    console.log('error = ', error)
                })
        });
    }

    addtoList(data) {        
        return new Promise((resolve, reject) => {
            axios.post(apiBaseUrl + '/wp-json/wp/v2/todo', data, {headers: {Authorization: "Basic "+encodedString}})
                .then(res => {
                    //console.log('res = ', res)
                    resolve(res.data)
                }).catch(error => {
                    console.log('error = ', error)
                })
        });
    }

    deleteFromList(data)
    {        
        const newEncodedString = new Buffer(username + ':' + 'admin').toString('base64');
        return new Promise((resolve, reject) => {
            axios.delete(apiBaseUrl + '/wp-json/wp/v2/todo/'+data.id, {headers: {Authorization: "Basic "+newEncodedString}})
                .then(res => {
                    //console.log('res = ', res)
                    resolve(res.data)
                }).catch(error => {
                    console.log('error = ', error)
                })
        });
    }

}
//let apiObj = new Api();