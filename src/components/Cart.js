import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'




function Cart(props) {
    const [cartFlowers, setCartFlowers] = useState([])

    const fetchCart = () => {
        fetch('http://localhost:8080/flowers')
        .then(response => response.json())
        .then(json => {
            setCartFlowers(json)
            //console.log(json)
        })
    }

    useEffect(() => {
        console.log("Cart test")
        console.log(props.flower_id)
        fetchCart()
    }, [props.flower_id])

    
    // const cartFlower = cartFlowers.filter(function(filteredCart_el){
    //     return ((props.flower_id).filter(function(flowerID_el){
    //         return flowerID_el.id == filteredCart_el.id;
    //     }).length == 0)
    // })
    // console.log(cartFlower)

    let newCart = cartFlowers.filter(function(el){
        return ~(props.flower_id).indexOf(el.id)
    })
    console.log(newCart)
    
    return (
        <div>


            {newCart.map(item => {
                return <div key={item.id}>
                    {item.name}
                </div>
            })}
             
            {/* {cartFlowers.filter((cartFlower => !props.flower_id(cartFlower){
                return <div>
                </div>
                

            }))} */}
            {/* {props.flower_id.map((id) => {
                return <div>{id}</div>
            })} */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        flower_id : state.cartItems
    }
}

export default connect(mapStateToProps, null)(Cart)