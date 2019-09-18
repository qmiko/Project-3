import React from "react";
function Menu(){
   return <div>
            <ul>
                <li> all </li>
                <li> feminine </li>
                <li> masculine </li>
                <li> tops </li>
                <li> bottoms </li>
                <li> dresses / jumpsuits </li>
                <li> outerwear </li>
                <li> kicks </li>
            </ul>
        </div>
}
function Clothes(){
    return <div>
            <ClothingItem/>
            <ClothingItem/>
            <ClothingItem/>
            <ClothingItem/>
            <ClothingItem/>

         </div>
 }

 function ClothingItem(){
     return <div className="clothing-item">Something</div>
 }
class Shop extends Component{

    state={menuOpen:true}

    render(){
        return (
            <div>
            {this.state.menuOpen ? <Menu/> : ""}
            <Clothes/>
            </div>
           
        )
    }
    
}

export default Shop;