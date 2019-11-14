import { NetInfo } from 'react-native'

export default {

    isConnected() {
        return NetInfo.getConnectionInfo().then(res => {
            return res.type !== "none"
        })
    },

    _handleConnectionChange(connetion, para) {
        if (connetion.type == "none") {
            alert("No internet connection.");
        }
        else {

        }
    }
}