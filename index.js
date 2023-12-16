console.log("hi team Mates");

const http = require('http');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:"shalini mishra", email:"shamishra604@gmail.com"}));
resp.end();
}).listen(5000);
// echo "# Hiring-Platform" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:Shalini0127/Hiring-Platform.git
// git push -u origin main