//http-module (built-in)

const http = require('http');


const server = http.createServer((req, res)=>{
   if (req.url === '/'){
    res.end('Welcome to our homepage')
    return
   }
   if (req.url === '/about'){
    res.end('Here is out short history')
    return
   }
   res.end(`
    <h1>404 not found</h1>
    <p>We can't find the page your looking for</p>
    <a href="/">back home</a>
    `)
    return  
})

server.listen(5000)
