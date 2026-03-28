// const os = require('os')
//  const user = os.userInfo()
//  console.log(user)

// const CurrentOs ={
//     name:os.type(),
//     realse:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem()
// }

// console.log(CurrentOs);


// console.logo('current time is : ${os.uptime} second')

// const path = require('path');
// console.log(path.sep);

// const filepath =path.join('/content, subfolder,test.txt')
// console.log(filepath);

// const absoulte= path.resolve(__dirname,'/content', 'subfolder','test.txt')
// console.logo(absoulte)

// const {readFileSync,writeFileSync}=require('fs')
//  const first=readFileSync('./content/first.txt','utf8')
//  const second=readFileSync('./content/subfolder/second.txt','utf8')
// console.log(first,second)

// writeFileSync('./content/result-sync.txt',`here is the result : ${first}, ${second}`)

//async example

// const {readFile,writeFile}=require('fs');

//  readFile('./content/first.txt','utf-8',(err,result)=>{

//     if(err){
//         console.log(err)
//         return
//     }
    
//     const first=result;
    
//     readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{

//     if(err){
//         console.log(err)
//         return
//     }

//         const second =result;
//      writeFile('./content/result-async.txt',`i created this text file : ${first},${second}`,(err,result)=>{

//         if(err){
//             console.log(err)
//             return
//         }

//          console.log(result);

//   })  

// })

// })


// const http = require('http');

//  server =http.createServer((req,res)=>{
//     console.log(req)
//     res.write('Welcom to the Server')
//     res.end()

//  })
 
//  server.listen(5000)

// const http = require('http')

//  const server =http.createServer((req,res)=>{
//    if(req.url === '/'){
//     res.end('Welcom to the Homepage')
    
//    }

//    if(req.url==='/about'){
//     res.end('Here is our short history')
//    }
   
//     res.end( `<h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back to home</a>`
//     )

//  })
 
//  server.listen(5000)


const _=require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);