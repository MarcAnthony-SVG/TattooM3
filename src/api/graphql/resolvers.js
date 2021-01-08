//Where we return the data
export const dataMutations = {
    Query :{
        async data(){
            console.log('add Data');
        return [{
            _id: 'somethingFunkky',
            name: 'Marc'
        }]} 

    }
}