const http=require('http')
const fs=require('fs')
const port=3002

const server =http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('error,the server cannot find the requested resource')
        }else{
            res.write(data,)
        }
        res.end()
    })
res.write('The request has succeeded')
})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong', error);
    }else{
        console.log('server is listening on port ' + port)
    }
})