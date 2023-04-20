const heading = React.createElement("h1",
{
    id : "heading"//React.Create Element here creates an object
},
"Hello world from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);//root.render method here converts this object into h1 tag.
