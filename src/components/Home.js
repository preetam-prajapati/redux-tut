import React from 'react'
import Header from './Header';
import Homepage from './Homepage';
import Checkout from './Checkout'
 const Home=(props)=> {
   console.log("props",props)
  return (
    <div>
      <Header/>
      <Homepage/>
      <Checkout/>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/photos/hamburger-isolated-on-white-background-picture-id666651868?k=20&m=666651868&s=612x612&w=0&h=a84opTEm9hyv59gfW5tuuXMAG7ZnZe54U57hKtLVaSs=" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Hamburger</h5>
        <p className="card-text">price: 200</p>
      </div>
      <div>
        
      <button type="button" className="btn btn-primary" onClick={()=>props.addToCartHandler({name:'hamburger,coke,pepsi,fries',price:'200, 100, 50, 50'})}>+</button>
      <button type="button" className="btn btn-danger" onClick={()=>props.removeToCartHandler()}>-</button>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Fries</h5>
        <p className="card-text">price: 100</p>
        <p className="card-text">Total: 1</p>
        <p className="card-text">Cost(INR): 100</p>
      </div>
      <div>
        <button  
       type="button" className="btn btn-primary"onClick={()=>props.addToCartHandler({name:'hamburger,coke,pepsi,fries',price:'200, 100, 50, 50'})}>+</button>
        <button type="button" className="btn btn-danger"  onClick={()=>props.removeToCartHandler()}>-</button>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSJAINgfci_TctexqWGWAl7auKwwPsCD4_m_z8i_DdV74wFLys5Gb0zkUX2GFvxkDDG0&usqp=CAU" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Coke</h5>
        <p className="card-text">price: 50</p>
        <p className="card-text">Total: 2</p>
        <p className="card-text">Cost(INR): 100</p>
      </div>
      <div>
        <button  
       type="button" className="btn btn-primary"onClick={()=>props.addToCartHandler({name:'hamburger,coke,pepsi,fries',price:'200, 100, 50, 50'})}>+</button>
        <button type="button" className="btn btn-danger"  onClick={()=>props.removeToCartHandler()}>-</button>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.pepsi.com/en-us/uploads/images/social-share.jpg?mtime=20180110134930" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pepsi</h5>
        <p className="card-text">price: 50</p>
      </div>
      <div>
      <button type="button" className="btn btn-primary"  onClick={()=>props.addToCartHandler({name:'hamburger,coke,pepsi,fries',price:'200, 100, 50, 50'})}>+</button>
      <button type="button" className= "btn btn-danger"  onClick={()=>props.removeToCartHandler()}>-</button>

      </div>
    </div>
  </div>
</div>
    
    </div>
    
        
  );
}
export default Home;
