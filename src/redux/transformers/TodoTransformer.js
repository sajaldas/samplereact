

export const transformApiPayloadToStore = (data) => {
    //console.log('transformer data = ', data)
    let newArr
    if(Array.isArray(data))
    {
        newArr = data.map((item, index) => {        
            return {id: item.id, name: item.title.rendered, done: (item.status==='publish') ? false : true, loading: false}
        })
    }
    else
    {
        newArr = {id: data.id, name: data.title.rendered, done: (data.status==='publish') ? false : true, loading: false}
    }
    //console.log('newArr = ', newArr);
    return newArr;
}
