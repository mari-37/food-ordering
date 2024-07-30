
const Heading1 = () => (
    <h1>H1 TAG BY FUNCTIONAL COMPONENT</h1>   
) ;


const heading2 = <h1>H1 TAG BY JSX</h1> ;


const heading3 = (
    <div id="heading">
       <h1>H1 TAG BY REACT ELEMENT</h1>
       <Heading1/>
       {heading2}
    </div>
) ;



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading3);
