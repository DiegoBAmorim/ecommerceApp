interface ProductsType{
    Products: Array<string>
}


export default function (state = [], action: any){
    switch(action.type){
        case 'SET_CART':
            return [...state, {
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                price: action.payload.price,
                score: action.payload.score
            }]
        // const newProducts: Object = {
        //     product: action.payload.data
        // }
        // return {
        //     ...state,
        //     newProducts
        // }
        default: 
        return state; 
    }
}