const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Chat=require('./models/chat.js');
const methodOverride=require('method-override');
const dotenv=require('dotenv');
dotenv.config();


app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
}



app.get('/',(req,res)=>{
    res.render('home.ejs');
});

//index route
app.get('/chats',async(req,res)=>{
    try{
        const allchats=await Chat.find({});
        res.render('index.ejs',{allchats});
    }catch(err){
        console.log("Error fetching chats:", err);
        res.status(500).send("Error fetching chats");
    }
});


//new route
app.get('/chats/new',(req,res)=>{
    res.render('new.ejs');
});
//inserting new chat into database
app.post('/chats',async(req,res)=>{
    try{
        const {from,to,message}=req.body;
        await Chat.create({from,to,message});
        res.redirect('/chats');
    }catch(err){
        console.log("Error creating chat:", err);
        res.status(500).send("Error creating chat");
    }
});


//edit route
app.get('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render('edit.ejs', { chat });
});

//update route
app.post('/chats/:id',async(req,res)=>{
    try{
        const {id}=req.params; 
        const {message}=req.body;
        await Chat.findByIdAndUpdate(id,{message});
        res.redirect('/chats');
    }catch(err){
        console.log("Error updating chat:", err);
        res.status(500).send("Error updating chat");
    }
});

//delete confirmation route
app.get('/chats/:id/confirm-delete', async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render('confirm-delete.ejs', { id, from: chat.from, to: chat.to, message: chat.message });
});

//delete route
app.delete('/chats/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        await Chat.findByIdAndDelete(id);
        res.redirect('/chats');
    }catch(err){
        console.log("Error deleting chat:", err);   
        res.status(500).send("Error deleting chat");
    }
});
