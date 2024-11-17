/* eslint-disable react/prop-types */
import { getImageUrl } from "./utils";

export default function Avatar({person, size}){
    return(
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}


/*
React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>

The props you can pass to an <img> tag are predefined (ReactDOM conforms to the HTML standard). But you can pass any props to your own components, such as <Avatar>, to customize them.


You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to your component! React component functions accept a single argument, a props object

Usually you don’t need the whole props object itself, so you destructure it into individual props.

    function Avatar({ person, size }) {
    // ...
    }

    This syntax is called “destructuring” and is equivalent to reading properties from a function parameter:

    function Avatar(props) {
    let person = props.person;
    let size = props.size;
    // ...
    }

Specifying a default value for a prop 
If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:

    function Avatar({ person, size = 100 }) {
    // ...
    }
Now, if <Avatar person={...} /> is rendered with no size prop, the size will be set to 100.

The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.


Forwarding props with the JSX spread syntax 

    function Profile(props) {
    return (
        <div className="card">
        <Avatar {...props} />
        </div>
    );
    }

    Use spread syntax with restraint. If you’re using it in every other component, something is wrong. Often, it indicates that you should split your components and pass children as JSX.

Passing JSX as children

Sometimes you’ll want to nest your own components the same way:

    <Card>
    <Avatar />
    </Card>

When you nest content inside a JSX tag, the parent component will receive that content in a prop called children. For example, the Card component below will receive a children prop set to <Avatar /> and render it in a wrapper div


a component may receive different props over time. Props are not always static
Props reflect a component’s data at any point in time, rather than only in the beginning.
props are immutable
When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.
*/