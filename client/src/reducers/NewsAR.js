export default (NewsAR=[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...NewsAR, action.payload];
        default:
            return NewsAR;
    }
}