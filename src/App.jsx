// DescribingTheUI/JavaScriptInJSXWithCurlyBraces

import JavascriptInJSX from "./LearnReact/DescribingTheUI/JavaScriptInJSXWithCurlyBraces/JavascriptInJSX";

export default function App(){
  return(
    <JavascriptInJSX/>
  )
}




// DescribingTheUI/WritingMarkupWithJSX

// Markup With JSX
/*
import TodoList from "./LearnReact/DescribingTheUI/WritingMarkupWithJSX/TodoList";

export default function App(){
  return(
    <>
      <TodoList/>
    </>
  )
}
*/





// DescribingTheUI/ImportingAndExportingComponents

// Both default and named imports
/*
import { Profile } from "./LearnReact/DescribingTheUI/ImportingAndExportingComponents/Gallery";
import Gallery from './LearnReact/DescribingTheUI/ImportingAndExportingComponents/Gallery'

export default function App(){
  return(
    <>
      <Gallery/>
      
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
    </>
  )
}
*/

// Named Import
/*
import { Profile } from "./LearnReact/DescribingTheUI/ImportingAndExportingComponents/Gallery";

export default function App(){
  return(
    <>
      <Profile/>
      <Profile/>
      <Profile/>
    </>
  )
}
*/

// Default Import
/*
import Gallery from './LearnReact/DescribingTheUI/ImportingAndExportingComponents/Gallery'


export default function App() {
  return(
    <Gallery/>
  )
}
*/





// DescribingTheUI/YourFirstComponent
// First Component
/*


import './App.css'
import Gallery from './LearnReact/DescribingTheUI/YourFirstComponent/Gallery'


// function Profile(){
//   return (
//     <img 
//       src='https://i.imgur.com/MK3eW3As.jpg'
//       alt='Katherine Johnson'
//     />
//   )
// }

// function Gallery(){
//   return (
//     <section>
//       <h1>Amazing Scientists</h1>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//     </section>
//   )
// }

function App() {

  return (
    <>
      <Gallery/>
    </>
  )
}

export default App

*/