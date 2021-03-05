
const fs=require('fs');

const requestHandler=(req,res)=>
{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        res.setHeader('Content-Type','text/html');
     res.write('<html>');
     res.write('<head><title>Greetings</title></head>');
     res.write('<body><h1>Hello</h1></body>');
     res.write('</html>');
    return res.end();
    }

    if(url === '/create'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Create Noode.js assignment</title></head>');
        res.write('<body>');
        res.write('<form action="/add" method="POST">');
        res.write('userName: ');
        res.write('<input type="text" name="userName"></input>');
        res.write('<br>');
        res.write('<button type="submit"> send </button>');
        res.write('</form></body></html>');
        return res.end();
    }

   

    if(url==='/add' && method==='POST')
    {
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
    
        req.on('end',(chunk)=>{
            const parsedBody = Buffer.concat(body).toString();
            let message=parsedBody.split('=')[1];
            message =  "\n" + message + "\n";
            fs.appendFile('create.txt', message, err => 
            {
                res.setHeader('Content-Type', 'text/html')
                res.write('<html>')
                res.write('<head><title>Input user name</title></head>');
                res.write('<body>');
                res.write('<h3>User name added to file</h3></body></html>')
                return res.end();
            });
        });

    }


    if(url === '/users'){
        if(fs.existsSync('./create.txt')){
            let users = fs.readFileSync('create.txt', 'utf8');
            let len = users.length;
            let arr= users.split('\n');
            arr.pop();
            if(len === 0){
                res.statusCode = 302;
                res.setHeader('Location', '/create');
                return res.end();
            }

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<body>');
            res.write('<head><title>User Names</title></head>');
            res.write('<h1>List of Users</h1>')
            res.write('<ul>');
            for(const i of arr){
                res.write('<li><h3>' + i + '</h3></li>');
            }
            res.write('</ul></body></html>')
            return res.end();
        }
        else{
            res.statusCode = 302;
            res.setHeader('Location', '/create');
            return res.end();
        }
    }

    

     
};

module.exports=requestHandler;