import React,{createContext,useState} from 'react';

const intialState = {
  products: [
    {
      id: 1,
      title: "Adidas Shoes 1",
      src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
      Description: "Best Shoes for outwear",
      price: 25,
      colors: ["red", "black", "blue"],
      count: 1,
    },
    {
      id: 2,
      title: "Adidas Shoes 2",
      src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
      Description: "Best Shoes for outwear",
      price: 25,
      colors: ["red", "black", "blue"],
      count: 1,
    },
    {
      id: 3,
      title: "Adidas Shoes 3",
      src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
      Description: "Best Shoes for outwear",
      price: 25,
      colors: ["red", "black", "blue"],
      count: 1,
    }, {
      id: 4,
      title: "Adidas Shoes 4",
      src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
      Description: "Best Shoes for outwear",
      price: 25,
      colors: ["red", "black", "blue"],
      count: 1,
    }, {
      id: 5,
      title: "Adidas Shoes 5",
      src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
      Description: "Best Shoes for outwear",
      price: 25,
      colors: ["red", "black", "blue"],
      count: 1,
    }, {
      id: 6,
      title: "Adidas Shoes 6",
      src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
      Description: "Best Shoes for outwear",
     price: 25,
      colors: ["red", "black", "blue"],
      count: 1,
    },
   ]
}



export const DataContext = createContext(intialState);

export const GlobalContext = (props)=>{
 
  const [cart, setCart] = useState([]);
  const [total ,setTotal]=useState(0)

// amount
  const totalAmount = () => {
    const amu = cart.reduce((amount, item) => {
      return amount + (item.price * item.count);
    }, 0);

    setTotal(amu);
  };


// add to cart
  const addCart = (id) => {
    const {products}=intialState;
    const check=cart.every(item=>{
      return item.id !==id
     
   })
    if(check){
      const data = products.filter(product => {
        return product.id === id
      })
      setCart([...cart, ...data])
    }else{
      alert("Item has already been Added")
    }
   
   }



  const decrement = id =>{
   cart.forEach(item =>{
      if(item.id===id){
        item.count === 1 ? item.count=1 :item.count -=1;
      }
    })

    // to make data into array and update
    const data = cart.map((item) => {
      return item;
    }

    );
    setCart(data)
    totalAmount()
  }


  const increment = id => {
    cart.forEach(item => {
      if (item.id === id) {
         item.count += 1;
      }
    })
    const data = cart.map((item) => {
      return item;
    }
    
    );
   
    setCart(data)
    totalAmount()

  }


  // to remove item
 const removeProduct =(id)=>{
   if(window.confirm('Do you want to delete this product?')){
     cart.forEach((item, index) => {
       if (item.id === id) {
         item.count = 1;
         cart.splice(index, 1)
       }

     })
     const filter = cart.filter((item) => item.id !== id)
     setCart(filter)
     totalAmount()

   }
   
  
 }



  return (
        <div>
      <DataContext.Provider value={{ products: intialState.products, addCart, cart, decrement, increment, removeProduct, totalAmount,total}}>
            {props.children}
        </DataContext.Provider>
        </div>
    )

}
