const app=require('express')();
const server=require('http').createServer(app);



const io=require("socket.io")(server,{
	cors: {
    origin: "*",
  },
});

io.on("connection",(socket)=> {
 
   
   console.log("socket is active to be connected connected");
   // can call chat anything we want it is a listener or a event which is created and socket will listen to it
   socket.on("chat",(payload)=>{ 
   	console.log("What is playload",payload);
   })


})

// app.listen(5000,()=>{console.log("server is active");})

server.listen(5000,()=>console.log("server is listening at port 5000"));