const parent = React.createElement("div", { id:parent }, [
    React.createElement("h1",{},"h1 tag from child 1"),
    React.createElement("h2",{},"h2 tag from child 1"),
    React.createElement("h3",{},"h3 tag from child 1"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);