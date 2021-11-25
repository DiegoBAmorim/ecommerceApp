interface ProductsType{
    Products: Array<string>
}

const Products = [{diego: 'teste'}]


export default function (state = Products, action: any){
    switch(action.type){
        case 'SET_CART':
        const newProducts = {
            product: action.payload
        }
        return {
            ...state,
            newProducts
        }
        default: 
        return state; 
    }
}