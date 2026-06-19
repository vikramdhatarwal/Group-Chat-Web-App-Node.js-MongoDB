const mongoose=require('mongoose');
const Chat=require('./models/chat.js');
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
    console.log("Connected to MongoDB");
}

let allChats=[
    {
        from:"Vikram",  
        to:"Amit",
        message:"Hello, how are you?",
        created_at: new Date()
    },
    {
        from:"Amit",
        to:"Vikram",
        message:"I am good, how about you?",
        created_at: new Date()
    },  
    {
        from:"Vikram",
        to:"Amit",
        message:"I am doing well, thanks for asking!",
        created_at: new Date()
    },
    {
        from:"Amit",
        to:"Vikram",
        message:"That's great to hear!",
        created_at: new Date()
    }
];
Chat.insertMany(allChats).then(()=>{
    console.log("All chats saved successfully");
}).catch((err)=>{
    console.log("Error saving chats:", err);
});
