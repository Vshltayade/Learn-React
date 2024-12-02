import { Fragment } from 'react'
import { people } from './data'
import { getImageUrl } from './util'

export default function List(){

    // const chemists = people.filter(person => person.profession === 'chemist')

    const listItems = people.map(person => {
        return(
            <Fragment key={person.id}>
                <img src={getImageUrl(person)} alt={person.name} style={{borderRadius:'50%'}}/>
                <p>
                    <strong>{person.name}</strong>
                    {' ' + person.profession + " "} known for {" " + person.accomplishment}
                </p>
                <br />
            </Fragment>
        )
    })

    return(
        <Fragment>
            { listItems }
        </Fragment>
    )
}




/**
 * Rendering data from arrays 
 * 
 * You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images. In these situations, you can store that data in JavaScript objects and arrays and use methods like map() and filter() to render lists of components from them.
 * 
 * 1.Move the data into an array:
 * 2.Map the people members into a new array of JSX nodes, listItems:
 * 3.Return listItems from your component wrapped in a <ul>:
 * 
 * 
 * 
 * 
 * Filtering arrays of items 
 * 
 * You can use JavaScript’s filter() method to return just those people. This method takes an array of items, passes them through a “test” (a function that returns true or false), and returns a new array of only those items that passed the test (returned true).
 * 
 * You only want the items where profession is 'chemist'. The “test” function for this looks like (person) => person.profession === 'chemist'.
 * 
 * 1.Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':
 * 2.Now map over chemists:
 * 3.Lastly, return the listItems from your component:
 * 
 * 
 * 
 * Pitfall
 * 
 * Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:
 * However, you must write return explicitly if your => is followed by a { curly brace!
 * Arrow functions containing => { are said to have a “block body”. They let you write more than a single line of code, but you have to write a return statement yourself. If you forget it, nothing gets returned!
 * 
 * 
 * 
 * 
 * Keeping list items in order with key 
 * 
 * You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:
 * <li key={person.id}>...</li>
 * JSX elements directly inside a map() call always need keys!
 * 
 * Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
 * 
 * Displaying several DOM nodes for each list item 
 * What do you do when each item needs to render not one, but several DOM nodes?
 * The short <>...</> Fragment syntax won’t let you pass a key, so you need to either group them into a single <div>, or use the slightly longer and more explicit <Fragment> syntax:
 * Fragments disappear from the DOM, so this will produce a flat list of <h1>, <p>, <h1>, <p>, and so on.
 * 
 * 
 * Where to get your key 
Different sources of data provide different sources of keys:

Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

 * Rules of keys 
Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
Keys must not change or that defeats their purpose! Don’t generate them while rendering.



 */