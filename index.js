const dotenv = require("dotenv");
dotenv.config();

console.log("hi team Mates", process.env.server_name);

const http = require('http');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'text/html'});
resp.write(JSON.stringify({name:"shalini mishra", email:"shamishra604@gmail.com"}));
resp.write("<h1>Hello world</h1>");
resp.end();
}).listen(process.env.port);
// echo "# Hiring-Platform" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:Shalini0127/Hiring-Platform.git
// git push -u origin main