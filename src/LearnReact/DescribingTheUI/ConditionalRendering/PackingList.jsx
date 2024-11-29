// eslint-disable-next-line react/prop-types
function Item({name, isPacked}){

    let itemContent = name

    if(isPacked){
        itemContent = name + '✅'
    }

    return <li>{itemContent}</li>

    // return <li>{name} {isPacked && '✅'}</li>

    // return (
    //     <li>
    //         {
    //             isPacked ? (
    //                 <del>{name} ✅</del>
    //             ) : (
    //                 name
    //             )
    //         }
    //     </li>
    // )
    
    // return <li>{isPacked ? name + ' ✅' : name}</li>

    // if(isPacked){
    //     // return null
    //     return <li>{name} ✅</li>
    // } else {
    //     return <li>{name}</li>
    // }



    // return(
    //     <li>{name}</li>
    // )
}

export default function PackingList(){
    return(
        <section>
            <h1>Sally Ride&apos;s Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}

/**
 * Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
 * 
 * Conditionally returning JSX 
 * 
 * creating branching logic with JavaScript’s if and return statements. In React, control flow (like conditions) is handled by JavaScript.
 * 
 * Conditionally returning nothing with null
 * 
 * In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return null:
 * 
 * In practice, returning null from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX.
 * 
 * Conditionally including JSX 
 * 
 * Conditional (ternary) operator (? :) 
 * 
 * JSX elements aren’t “instances” because they don’t hold any internal state and aren’t real DOM nodes. They’re lightweight descriptions, like blueprints. 
 * 
 * Logical AND operator (&&) 
 * 
 * Another common shortcut you’ll encounter is the JavaScript logical AND (&&) operator. Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With &&, you could conditionally render
 * 
 * A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. But if the condition is false, the whole expression becomes false. React considers false as a “hole” in the JSX tree, just like null or undefined, and doesn’t render anything in its place.
 * 
 * 
 * 
 * 
 * Pitfall
Don’t put numbers on the left side of &&.

To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.



Conditionally assigning JSX to a variable 

When the shortcuts get in the way of writing plain code, try using an if statement and a variable. You can reassign variables defined with let, so start by providing the default content you want to display, the name:


 */