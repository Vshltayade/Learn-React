/**
 * React, and many other UI libraries, model UI as a tree. Thinking of your app as a tree is useful for understanding the relationship between components. This understanding will help you debug future concepts like performance and state management.
 * 
 * 
 * Your UI as a tree 
 * 
 * Trees are a relationship model between items and UI is often represented using tree structures. For example, browsers use tree structures to model HTML (DOM) and CSS (CSSOM). Mobile platforms also use trees to represent their view hierarchy.
 * 
 * 
 * React also uses tree structures to manage and model the relationship between components in a React app. These trees are useful tools to understand how data flows through a React app and how to optimize rendering and app size.
 * 
 * 
 * The Render Tree 
 * 
 * A major feature of components is the ability to compose components of other components. As we nest components, we have the concept of parent and child components, where each parent component may itself be a child of another component.
 * When we render a React app, we can model this relationship in a tree, known as the render tree.
 * 
 * 
 * The root node in a React render tree is the root component of the app. In this case, the root component is App and it is the first component React renders. Each arrow in the tree points from a parent component to a child component.
 * 
 * 
 * Where are the HTML tags in the render tree? 
 * 
 * You’ll notice in the above render tree, there is no mention of the HTML tags that each component renders. This is because the render tree is only composed of React components.
 * 
 * React, as a UI framework, is platform agnostic. On react.dev, we showcase examples that render to the web, which uses HTML markup as its UI primitives. But a React app could just as likely render to a mobile or desktop platform, which may use different UI primitives like UIView or FrameworkElement.
 * 
 * With conditional rendering, a parent component may render different children depending on the data passed.
 * 
 * 
 * Top-level components are the components nearest to the root component and affect the rendering performance of all the components beneath them and often contain the most complexity. Leaf components are near the bottom of the tree and have no child components and are often frequently re-rendered.
 * 
 * 
 * The Module Dependency Tree 
 * 
 * Another relationship in a React app that can be modeled with a tree are an app’s module dependencies. As we break up our components and logic into separate files, we create JS modules where we may export components, functions, or constants.
 * Each node in a module dependency tree is a module and each branch represents an import statement in that module.
 * 
 * The root node of the tree is the root module, also known as the entrypoint file. It often is the module that contains the root component.
 * 
 * 
 * Dependency trees are useful to determine what modules are necessary to run your React app. When building a React app for production, there is typically a build step that will bundle all the necessary JavaScript to ship to the client. The tool responsible for this is called a bundler, and bundlers will use the dependency tree to determine what modules should be included.
 */