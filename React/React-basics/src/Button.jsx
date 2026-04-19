

export default function Button() {
     function doSomething() {
    console.log("Button clicked!");
}
   
    return(
        <div>
            <button onClick={doSomething}>Click me</button>
        </div>
    );

}