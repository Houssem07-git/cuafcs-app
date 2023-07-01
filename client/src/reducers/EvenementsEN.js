export default (evenementsEN=[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...evenementsEN, action.payload];
        default:
            return evenementsEN;
    }
}