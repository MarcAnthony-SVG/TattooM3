//Where we have our graphql mutations/where we modify things
export const dataMutations = {
    Mutations :{
        async addData(_, {data}){
            console.log('add Data');
        }

    }
}