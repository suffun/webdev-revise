

export default function Price({ oldPrice, newPrice }) {
    let oldPriceStyles =  {
        textDecoration : "line-through",
    }
    let newPriceStyles = {
        fontWeight : "bold"
    };
    let styles = {
        backgroundColor : "lightgray",
        height : "30px",
        borderBottomLeftRadius : "10px",
        borderBottomRightRadius : "10px",
        
    }
    return (
        <div style = {styles}>
            <span style = {oldPriceStyles}> {oldPrice}</span>
            &nbsp; &nbsp;
            <span style = {newPriceStyles}> {newPrice}</span>
        </div>
    );
}