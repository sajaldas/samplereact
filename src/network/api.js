
import axios from "axios";

let apiBaseUrl = 'http://localhost/react';

export default class Api {
    constructor() {

    }

    getList() {
        return new Promise((resolve, reject) => {
            let returnValues = "";
            axios.get(apiBaseUrl + '/wp-json/wp/v2/todo')
                .then(res => {
                    console.log('res = ', res)
                    resolve(res)
                }).catch(error => {
                    console.log('error = ', error)
                })
        });
    }

}
let apiObj = new Api();