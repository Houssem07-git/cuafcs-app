export default (albums=[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...albums, action.payload];
        default:
            return albums;
    }
}