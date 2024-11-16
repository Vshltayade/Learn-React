export default function TodoList() {
    return (
      <>
        <h1>Hedy Lamarr&apos;s Todos</h1>
        <img 
            src="https://i.imgur.com/yXOvdOSs.jpg" 
            alt="Hedy Lamarr" 
            className="photo"
        />
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
      </>
    );
  }
  


/*
JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

in React, rendering logic and markup live together in the same place—components.

JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information. 

JSX is a syntax extension, while React is a JavaScript library.

The Rules of JSX 
1. Return a single root element 

The empty tag is called a Fragment. 
Fragments let you group things without leaving any trace in the browser HTML tree.


2. Close all the tags 
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

3. camelCase all most of the things! 
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property:


JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
*/