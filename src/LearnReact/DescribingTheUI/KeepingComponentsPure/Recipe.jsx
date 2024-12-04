// eslint-disable-next-line react/prop-types
function Recipe({ drinkers }){
    return(
        <ol>    
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    )
}

export default function Drink(){
    return(
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Recipe drinkers={2} />
            <h2>For a gathering</h2>
            <Recipe drinkers={4} />
        </section>
    )
}







/**
 * 
 * a pure function is a function with the following characteristics
 * 
 * It minds its own business. It does not change any objects or variables that existed before it was called.
 * Same inputs, same output. Given the same inputs, a pure function should always return the same result.
 * 
 * Consider this math formula: y = 2x.
If x = 2 then y = 4. Always.
If x = 3 then y = 6. Always.
If x = 3, y won’t sometimes be 9 or –1 or 2.5 depending on the time of day or the state of the stock market.
If y = 2x and x = 3, y will always be 6.
 *
 * 
 * React is designed around this concept. React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs:
 * 
 * 
 * Side Effects: (un)intended consequences 
 * 
 * React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!
 * 
 * produce different JSX, too, depending on when they were rendered! That’s not predictable.
 * 
 * each component should only “think for itself”, and not attempt to coordinate with or depend upon others during rendering. Rendering is like a school exam: each component should calculate JSX on their own!
 * 
 * 
 * Detecting impure calculations with StrictMode 
 * 
 * Although you might not have used them all yet, in React there are three kinds of inputs that you can read while rendering: props, state, and context. You should always treat these inputs as read-only.
 * When you want to change something in response to user input, you should set state instead of writing to a variable. You should never change preexisting variables or objects while your component is rendering.
 * React offers a “Strict Mode” in which it calls each component’s function twice during development. By calling the component functions twice, Strict Mode helps find components that break these rules.
 * Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into <React.StrictMode>. Some frameworks do this by default.
 * 
 * 
 * Local mutation: Your component’s little secret 
 * 
 *  it’s completely fine to change variables and objects that you’ve just created while rendering
 *  This is called “local mutation”—it’s like your component’s little secret.
 * 
 * 
 * Where you can cause side effects
 * 
 * While functional programming relies heavily on purity, at some point, somewhere, something has to change. That’s kind of the point of programming! These changes—updating the screen, starting an animation, changing the data—are called side effects. They’re things that happen “on the side”, not during rendering.
 * 
 * In React, side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.
 * 
 * If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a useEffect call in your component. This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.
 * 
 * 
 * Why does React care about purity?
 * 
 * Your components could run in a different environment—for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.
 * You can improve performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
 * If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.
 * 
 * 
 * Every new React feature we’re building takes advantage of purity. From data fetching to animations to performance, keeping components pure unlocks the power of the React paradigm.
 */