const http=require('http')
const server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
res.end('Welcome to our home page!!')
    }
    else if(req.url==="/about")
    {
        res.end("Short history");
    }
    res.end(`<h1>Oops</h1><p>We cant seem to find the page you are looking for </p><a href="/">Home</a>`)
});

server.listen(5000)