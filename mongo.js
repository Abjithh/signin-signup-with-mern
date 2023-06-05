const mongoose=require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/livelocation", {

            useNewUrlParser : true,
            useUnifiedTopology: true,
        });
        console.log('connected to the Database');
    }catch(error){
        console.error('failed to connect to the database', error)
    }
};
module.exports = connectDB