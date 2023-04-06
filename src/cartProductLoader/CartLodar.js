import { getShoppingCart } from "../utilities/fakedb"

const cartProductLoader = async()=>{
    const cartProduct = await fetch('products.json')
    const loadedCart= await cartProduct.json()
    // console.log(loadedCart)


    const storedCart= getShoppingCart()
    // console.log(storedCart)
    const saveCart= []
    for (const id in storedCart) {
    //    console.log(id)
       const findStoredCart = loadedCart.find(pd=> pd.id=== id)
       if (findStoredCart) {
        const quantity= storedCart[id]
        findStoredCart.quantity=quantity
        saveCart.push(findStoredCart)
       }
    }



    return saveCart
}

export default cartProductLoader