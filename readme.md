 git push https://github.com/mari-37/react.git master



# what is cdn links?
     A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.


# what is cross origin?
      The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

   
# diff btwn npm and npx
        NPM is a package manager used to install, delete, and update Javascript packages on your machine.
        NPX is a package executer, and it is used to execute javascript packages directly, without installing them.


# diff btwn ~ and ^
        ~version “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

        ^version “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.

# for npm build - remove main from package.json

# def package.json
         configuration for npm

# def package-lock.json
          it maintains the exact version of all packages which installed

# what are folder not send to github
          the folder which are installed again not send to github like node_modules
          
# diff btwn git and github
           The key difference between Git and GitHub is that Git is a free, open source version control tool that developers install locally on their personal computers, while GitHub is a pay-for-use online service built to run Git in the cloud. Git is a piece of software. GitHub is an online SaaS service.

# def  parcel 
           Parcel is a zero-configuration bundler for web applications. It automatically bundles your code and its dependencies
 
# diff btwn normal dependies and dev dependies
            normal dependies are used in production
            dev dependies are used in development

# type=module
            This attribute is used to indicate that the script is a module. 
            JS Modules can only be loaded from a web server, so if you are merely opening the HTML file in your browser directly from your filesystem then the module file won’t load. The Live Server VSCode extension provides a web server for you so that you can run your HTML page through it and thus be able to load a module.
           

# PARCEL

    dev build
    local server
    HMR (hot module replacement)
    file watching algorithm - written by  ++
    caching
    tree shaking-rremove unused codes
    error handling
    minification
    https
    bundling
    compressing
    diagonostic
    image optimazation
    compressing
    consistent hashing
    code splitting
    diffrential bundling - support old browser


# JSX

 JSX  ~ [by babel(transpiles)] => React.createElement => react element (normal js object) [~ by (.render)]=> HTML  

 JSX => HTML like sintax

 JSX is not core react

 JSX = HTML + JAVASCRIPT

 in JSX more than one line code must use parenthesis()

 babel = compiler , transpiler

 we can do any javascript codes and expression on jsx by curlybraces{}

 while we use api call from {} ,jsx will sanitize the data comming from that api.


 # COMPONENTS

    - start a component name by capital letter  
    - we can use react element from component and vice versa

 2 TYPES
    - class component (old way)
    - functional component (new way)

# FUNCTIONAL COMPONENT
 
  - It is a normal javascript function that return some pieces of jsx
  - Call the function by three ways
    1.<call/>
    2.<call></call>
    3.{call()}


# COMPONENT COMPOSITION

  - call other components from a component (nested component)

# props
    - it is like argument
    - react bundles object in component ans passed to functional component as props

# configure driven ui
     - Config-driven UI is a technique that allows you to create dynamic and customizable UIs without hard coding them. 

# key in map
     - on using map function key must be used
     - coz when new items are added react got confused which properties belongs to which component
     - not using key <<<<< index <<<<< id 

# optional chaining ?.
     -The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

# 2 types of import
    normal import    -- export default component ;     --   import component from "path" ;
    name import      -- export const component = ;     --   import {component} from "path" ;


# hooks
     -normal javascript function
     -Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

# usestate()
      -const [state, setState] = useState(initialState)
      -The React useState Hook allows us to track state in a function component.
      -State generally refers to data or properties that need to be tracking in an application.

# react fiber
      -React Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.

      - Because Fiber is asynchronous, React can:

       * Pause, resume, and restart rendering work on components as new updates come in
       * Reuse previously completed work and even abort it if not needed
       * Split work into chunks and prioritize tasks based on importance

# reconciliation
        -The algorithm React uses to diff one tree with another to determine which parts need to be changed.
        -React uses a technique called reconciliation to determine which components need to be updated when the state of the variable changes.

# diff algorithm
        -The diff algorithm is a technique used by React to determine which components need to be updated when  state changes
        -Diffing short for Differences Algorithm is used to differentiate the DOM Tree for efficient updates. React utilize diffing algorithm to identify the changes in the newly created virtual dom and previous version of dom after any changes are made.

# useEffect
        -The useEffect Hook allows you to perform side effects in your components.

        -Some examples of side effects are: fetching data, directly updating the DOM, and timers.

        -useEffect accepts two arguments. The second argument is optional.

        -useEffect(<function>, <dependency>)

      *  useEffect(() => {
        //Runs on every render
        });

      *  useEffect(() => {
         //Runs only on the first render
         return()=>{
          // code after page leaves (clean)
         }
        }, []);

      *  useEffect(() => {
         //Runs on the first render
         //And any time any dependency value changes
        }, [prop, state]);

# async can't be used in useEffect 
-You can't use async/await directly inside the useEffect callback. 
-async function returns promise and the useEffect doesn't expect callback function to return promise. It should return nothing or a function.
-we can use inside useEffect

# corcs
        -CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.

        -CORS allows resource requests from different origins, bypassing the Same Origin Policy.

# * whenever state variable changes react will rerender the component

# two types to load web
    - loads => api => render
    - loads => render => api => reRender   (it is best for user experience)

# * whenever writes on search text it will reRender the body component again  🤯

#  * we couldn't update the state directly

# createBrowserRouter
     -createBrowserRouter is a function provided by react-router-dom that creates a router instance for client-side

# routerProvider
     -The RouterProvider in React Router is similar to the traffic controller of our React apps. It helps us monitor how users move between pages and objects in a single-page application (SPA). Essentially, it’s the backbone of React Router, handling all the routing magic behind the scenes.

# Outlet
     - Outlet is a component provided by react-router-dom that renders the current route's component.
     -React Outlet is used within the AllRoutes component to render child routes within a parent route. It allows for the modularization of routes, making it easier to manage complex navigation structures. Nested routes can have their own layouts and functionality while still being part of a larger parent route.

# Link
- Link is a component provided by react-router-dom that creates a link to a route.
- Link is used to navigate between routes in a React application.
- it doesn't reload the page
- it use <a>

# useRouterError
- Inside of an errorElement, this hook returns anything thrown during an action, loader, or rendering. 

# useParams
-React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL. The react-router-dom package has useParams hooks that let you access and use the parameters of the current route as required.

# 2 types of routing
   1.serverSide routing
   2.clientSide routing

# lazy loading
    - lazy loading is a technique to load the component only when it is needed
    - another names : chunking , code splitting , dynamic bundling , on demand loading , dynamic import
    - const x = lazy(()=>import("path")) ;
    - lazy loading is used to improve the performance of the application

# react class component life cycle
     - Parent constructor
     - Parent render

        - FirstChild constructor
        - FirstChild render

        - SecondChild constructor
        - SecondChild render

        - Firstchild componentDidMount
        - SecondChild componentDidMount

      - Parent componentDidMount

# TWO PHASES 
    1.RENDER PHASE
    2.COMMIT PHASE

 # MOUNTING 
 - mounting is the process of creating a component in the DOM
 - mounting is the first phase of the component life cycle
     * constructor(dummy)
     * render(dummy)
     *<HTML Dummy>
     * component did mount
     *api call
     * <this.setState> state update


# UPDATE 
- update is the process of updating the component in the DOM
 - update is the second phase of the component life cycle
        * reRender(api data)
        * <HTML (new api data)>
        * component did update

# COMPONENT DID MOUNT
- this method is called after the component is rendered to the DOM (api call) [in useEffect 1st parameter]

# COMPONENT DID UPDATE
- this method is called after the component is updated in the DOM [in useEffect 2nd parameter]

# COMPONENT DID UNMOUNT
- this method is called after the page leaves
- this method is called after the component is removed from the DOM
- this is used to clean