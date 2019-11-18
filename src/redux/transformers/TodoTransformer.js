

export const transformApiPayloadToStore = (data) => {
    //console.log('transformer data = ', data)
    let newArr = data.map((item, index) => {        
        return {id: item.id, name: item.title.rendered, done: false}
    })
    //console.log('newArr = ', newArr);
    return newArr;
}
