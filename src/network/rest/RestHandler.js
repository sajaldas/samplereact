
class RestHandler {
    constructor(params) {
        let config = {
            endpoint: params.endpoint,
            xApiKey: params.xApiKey,
            logLevel: 'debug',
            mock: false,
            Authorization: params.authorizationHeader,
            clientType: 'passenger'
        }
    }


   
}

//region Singleton
let instance;
export default Object.freeze({
    getInstance(params) {
        instance = null;
        if (!instance) {
            instance = new RestHandler(params);
        }
        return instance;
    }
});
