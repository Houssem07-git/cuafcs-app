export default (evenementsFR=[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...evenementsFR, action.payload];
        default:
            return evenementsFR;
    }
}