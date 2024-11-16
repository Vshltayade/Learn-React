// default export
export default function Gallery()  {
    return(
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}

// named export
export function Profile(){
    return(
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    )
}


/*
Components can be reusable
components composed of other components
if more components in a file, then you can move them to separate files - MODULARITY

Root Component - App.js

File Routing - Next.js Framework


Exports - Default and Named

Can use both in same file
There can only be one default export but multiple named exports

default - 
export default function App(){}

to import default - import App from path 
or
to import default - import AnyName from path
- Component can have different name

named -
export function Comp(){}

to import named - import { Comp } from path
- Component should have same name



*/