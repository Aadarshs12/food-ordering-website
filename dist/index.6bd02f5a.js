// const heading = React.createElement("h1",{id: "heading"},"Hello World from React❤️");
// console.log(heading);
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
impo;
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "hey i'm h1 tag"),
    React.createElement("h2", {}, "hey i'm h2 tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
