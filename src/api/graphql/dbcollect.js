//Database Collections
import mongoose, {Schema } from 'mongoose'
export const DataSchema =newSchema({
    name:{
        type: String,
        required: true
    }
})

export default mongoose.models.data || mongoose.model('data', DataSchema)
