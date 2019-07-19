const UPDATE_USER = "update_user";

export const actionTypes = {
    UPDATE_USER
  }

  export function updateLoggedInUser(payload) {
    //console.log('payload = ', payload)    
    // return new Promise(function(resolve, reject){
    //   let action = {
    //     type: UPDATE_USER,
    //     payload: payload
    //   }
    //   console.log('in here');
    //   if(action)
    //   resolve(action)
    //   else
    //   reject('error')
    //   console.log('not called');
    // })
    return {
        type: UPDATE_USER,
        payload: payload
    }
  }

  export default {
    updateLoggedInUser,    
  }