import {mongoose} from  ////

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }
    catch(error){
        console.error(error.message)
    }
}

