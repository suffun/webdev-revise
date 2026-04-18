import Product from "./Product.jsx"

export default function ProductTab(){
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
    }
    return(
        <div style = {styles}> 
        
        <Product title = "Logitech Keyboard "  idx ={0}/>
        <Product title = "Razer Mouse"  idx ={1}/>
        <Product title = "Samsung Monitor"  idx ={2}/>
        <Product title = "Apple MacBook" idx ={3}/>

        </div>
    )
}