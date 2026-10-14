import { Await, Link, useLoaderData, useNavigate } from "react-router"
import tick from '../assets/tick.svg'

export default function Home(){
    const featuredPromise = useLoaderData()?.featured;
    const navigate = useNavigate()
    function handleShop(){
      navigate('/shop')
    }
    return(
        <section className="container">
            <div className="hero-section">
            <div className="hero-card">
            <div className="hero-content">
                <div>
                        <p className="announcement">New season drop</p>
                </div>
                  <p className="slogan">
                Everyday tech, built to 
                <span id="slogan-color"> last</span>
                 </p>
                 
                  
                <p className="marking-details">
                    Headphones, 
                    speakers and
                    wearables with free shipping
                    on orders over $50
                </p>

                <div>
                <button 
                onClick={handleShop}
                className="shop-button">
                    Shop now
                </button>
            </div>
            </div>
           
            </div>
            </div>
            <div className="offered-services">
                <div className="site-service">
                    <img src={tick} />
                    <span>Free shipping</span>
                </div>

                <div className="site-service">
                    <img src={tick} />
                    <span>30 day easy returns</span>
                </div>

                <div className="site-service">
                    <img src={tick} />
                    <span>2 year warranty</span>
                </div>
            </div>
            <div className="featured-section">
           <h2>Featured</h2>
           <div className="featured-layout">
            <Await resolve={featuredPromise}>
                {products => {
                   
                    return(
                       <>
                        {products?.map(product =>
                        <div key={product?.id} className="product-card">
                          <Link to={`/${product?.product_id}`}>
                          <img className="product-image" src={product?.img} />
                          </Link>
                          <p>{product?.title}</p>
                        </div>)}
                       </>
                    )
                }}
            </Await>
           </div>
            </div>
            
        </section>
    )
}