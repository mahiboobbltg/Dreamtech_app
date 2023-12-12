import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        const Api = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const result = await res.json()
                setproduct(result)
            } catch (error) {
                console.error('somthing wrong while fetching', error)
            }
        }
        Api()
    }, [])

    return (
        <div>
            <div className='container '>
                <div className='row '>

                    <h1 className='text-center m-5 text-capitalize  text-primary  '>this is react app</h1>

                    {
                        product.map(

                            (item) => (

                                <div className='col-md-3  my-2 ' style={{ minHeight: '200px' }} key={item.id}>
                                    <div className='card w-100'  >
                                        <img src={item.image} alt='iamge' className='card-img-top' style={{ height: '200px' }} />
                                        
                                            
                                            <div className='card-body'>
                                            <div className='card-title mt-4 ' style={{ minHeight: '50px' }}>
                                            <h6 className='text-center'>{item.title}</h6>
                                                <span>{item.price}</span>
                                                <span>{item.category}</span>
                                                <p className='text-truncate'>{item.description}</p>
                                                <span className="badge btn-info text-dark btn"> <i class="fa-regular fa-star">{item.rating.rate}</i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default App













