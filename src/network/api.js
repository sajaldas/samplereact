
import axios from "axios";
import * as myConstants from '../constants'

//const encodedString = new Buffer(myConstants.API_USER + ':' + myConstants.API_PASS).toString('base64');
const newEncodedString = new Buffer(myConstants.API_USER + ':' + myConstants.API_PASS2).toString('base64');

export default class Api {
    // constructor() {

    // }

    getList() {        
        let config = {
            headers: { 'Authorization': 'Basic ' + newEncodedString },
            params: {
                status: 'publish,draft',
                per_page: 100
            },
        }

        return new Promise((resolve, reject) => {
            axios.get(
                myConstants.API_BASE_URL + '/wp-json/wp/v2/todo', config)
                .then(res => {
                    //console.log('res = ', res)
                    resolve(res.data)
                }).catch(error => {
                    console.log('error = ', error)
                    reject(error)
                })
        });
    }

    addtoList(data) {
        return new Promise((resolve, reject) => {
            axios.post(myConstants.API_BASE_URL + '/wp-json/wp/v2/todo', data, { headers: { Authorization: "Basic " + newEncodedString } })
                .then(res => {
                    //console.log('res = ', res)
                    resolve(res.data)
                }).catch(error => {
                    console.log('error = ', error)
                    reject(error)
                })
        });
    }

    updateTodoStatus(data)
    {
        return new Promise((resolve, reject) => {            
            axios.post(myConstants.API_BASE_URL + '/wp-json/wp/v2/todo/' + data.id, {status: data.status}, {headers: { 'Authorization': 'Basic ' + newEncodedString }})
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                console.log('error = ', error)
                reject(error)
            })
        })
    }

    deleteFromList(data) {
        return new Promise((resolve, reject) => {
            axios.delete(myConstants.API_BASE_URL + '/wp-json/wp/v2/todo/' + data.id, { headers: { Authorization: "Basic " + newEncodedString } })
                .then(res => {
                    //console.log('res = ', res)
                    resolve(res.data)
                }).catch(error => {
                    console.log('error = ', error)
                    reject(error)
                })
        });
    }

}
//let apiObj = new Api();