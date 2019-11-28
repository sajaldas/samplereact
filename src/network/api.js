
import axios from "axios";
import { constants } from "buffer";
import * as myConstants from '../constants'

const encodedString = new Buffer(myConstants.API_USER + ':' + myConstants.API_PASS).toString('base64');

export default class Api {
    // constructor() {
        
    // }

    getList() {
        return new Promise((resolve, reject) => {            
            axios.get(myConstants.API_BASE_URL + '/wp-json/wp/v2/todo')
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
            axios.post(myConstants.API_BASE_URL + '/wp-json/wp/v2/todo', data, {headers: {Authorization: "Basic "+encodedString}})
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
        const newEncodedString = new Buffer(myConstants.API_USER + ':' + myConstants.API_PASS2).toString('base64');
        return new Promise((resolve, reject) => {
            axios.delete(myConstants.API_BASE_URL + '/wp-json/wp/v2/todo/'+data.id, {headers: {Authorization: "Basic "+newEncodedString}})
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