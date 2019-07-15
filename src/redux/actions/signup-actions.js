const UPDATE_USER = "update_user";

export const actionTypes = {
    UPDATE_USER
  }

  export function updateLoggedInUser(payload) {
    console.log('payload = ', payload)
    return {
        type: UPDATE_USER,
        payload: payload
    }
  }

  export default {
    updateLoggedInUser,    
  }