export default (evenementsAR=[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...evenementsAR, action.payload];
        default:
            return evenementsAR;
    }
}