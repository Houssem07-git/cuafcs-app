export default (News=[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...News, action.payload];
        default:
            return News;
    }
}