export default (evenementsENAR=[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...evenementsENAR, action.payload];
        default:
            return evenementsENAR;
    }
}