import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";


const App  = () => {

    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"></Header>
            </div>
            <Order  /> 
           <Inventory  /> 
         
        </div>
    )
}
export default App;