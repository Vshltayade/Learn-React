export default function JavascriptInJSX() {
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
          backgroundColor: 'black',
          color: 'pink'
        }
    };

    return (
        <div style={person.theme}>
            <h1>{person.name}&#39;s Todos</h1>
            <img
              className="avatar"
              src="https://i.imgur.com/7vQD0fPs.jpg"
              alt="Gregorio Y. Zara"
            />
            <ul>
              <li>Improve the videophone</li>
              <li>Prepare aeronautics lectures</li>
              <li>Work on the alcohol-fuelled engine</li>
            </ul>
          </div>
    )
}


/*

JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

Where to use curly braces 
You can only use curly braces in two ways inside JSX:

1. As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.

2. As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".



Using “double curlies”: CSS and other objects in JSX 

In addition to strings, numbers, and other JavaScript expressions, you can even pass objects in JSX. Objects are also denoted with curly braces, like { name: "Hedy Lamarr", inventions: 5 }. Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: person={{ name: "Hedy Lamarr", inventions: 5 }}.
*/