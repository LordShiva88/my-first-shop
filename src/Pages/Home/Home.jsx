
import { Helmet } from "react-helmet-async";

import Banner from "../../Components/Banner/Banner";

import useData from "../../Components/Hooks/useData";
import HomeData from "./HomeData";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { MyAuthContext } from "../Context/AuthContext";




const Home = () => {

  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  const getProducts = useData()
  
  useEffect(()=>{
    setProducts(getProducts)
    setFilterProducts(getProducts)
  },[getProducts])

  const {getText} = useContext(MyAuthContext);
  
  


  useEffect(()=>{
    if(getText === 'Shoes' || getText === 'Watch' || getText=== 'Headphones'){
      if(getText === 'Shoes'){
        const filterShoes = products.filter(product => product.category === 'Shoes')
        setFilterProducts(filterShoes)
        return
      }else if(getText === 'Watch'){
        const filterShoes = products.filter(product => product.category === 'Watch')
        setFilterProducts(filterShoes)
      }else if(getText === 'Headphones'){
        const filterShoes = products.filter(product => product.category === 'Headphones')
        setFilterProducts(filterShoes)
      }
    }
  },[products, getText])






  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 my-10">
        {
          filterProducts.map(product =><HomeData key={product.id} product={product}></HomeData>
          )
        }
      </div>
      
    </div>
  );
};

export default Home;