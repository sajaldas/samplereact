import React, { Component } from 'react';


function callMe()
{
    console.log('hey sajal');    
}

function* newCallMe()
{
    yield 'one'
    yield 'two'    
    const final = yield 'three'
    return final
}

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {            
        }
        callMe();
        const callMeIterator = newCallMe();
        console.log('1 = ', callMeIterator.next());
        console.log('2 = ', callMeIterator.next());
        console.log('3 = ', callMeIterator.next());
        console.log('4 = ', callMeIterator.next('my value'));

        let allItems = {
            fruits: ["Banana", "Orange", "Apple", "Mango"],
            flowers: ["Tulip", "Poppy", "Rose", "Sunflower"],
            birds: ["Lion", "Tiger", "Cow", "Monkey", "Cat"]
        }
        console.log(allItems)
        let newItem = {...allItems, birds: allItems.fruits}
        console.log(newItem)
    }
    

    render() {
        return (
            <div className="innercontent">
                <h1>Home Page</h1>
                <div className="prodcontainer">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        )
    }
}

export default Home;
