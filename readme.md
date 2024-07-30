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



