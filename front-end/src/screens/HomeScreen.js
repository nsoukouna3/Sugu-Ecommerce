import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen(){
    return <div> <h1>Feature Products</h1>
    <div className="products" >
      {
      data.products.map((product)=>(
      <div className="product-item" key={product.slug}>
        <Link to={`product-item/${product.slug}`}>
          <img src={product.image} alt={product.name}/>
        </Link>
        <div className='product-info' >
          <Link to={`product-item/${product.slug}`}>
          <p>{product.name}</p> 
          </Link>
          <p><strong>${product.price}</strong></p>
          <button>Add to Cart</button>
        </div>

      </div>))}
    </div></div>
}
export default HomeScreen;