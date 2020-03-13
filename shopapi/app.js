const express = require('express')
const app = express()

var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser())
const cors = require('cors');
app.use(cors());  //打开跨域请求
const hour = 1000 * 60 * 60;
var sessionOpts = {
    // 设置密钥
    secret: 'a cool secret',
    // Forces the session to be saved back to the session store
    resave: true,
    // Forces a session that is "uninitialized" to be saved to the store.
    saveUninitialized: true,
    // 设置会话cookie名, 默认是connect.sid
    key: 'myapp_sid',
    // If secure is set to true, and you access your site over HTTP, the cookie will not be set.
    cookie: { maxAge: hour * 2, secure: false }
   }
   app.use(session(sessionOpts));

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false },{ useUnifiedTopology: true }))

// const querystring = require('querystring')

const objectId = require('mongodb').ObjectId;

// 
//对象形式实现请求,class构造对象，通过 返回pramies，如果connect 方法错误则传递错误信息，reject(err),
//否则成功的信息，传递resolve(result)，在通过实例化该对象()传递对应参数,在调用对象该方法,用then接受、
//

class DAO {
    constructor(url, collectionName, collections, mounted) {
        this.url = url;
        this.collectionName = collectionName;
        this.collections = collections
        this.mounted = mounted
    }
    _connect(){
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, (err, db) => {
                if (err) {
                    return reject(err)
                } else {
                    const collection = db.db(this.collections).collection(this.collectionName)
                    collection.find(this.mounted).toArray(function (err, result) {
                        resolve(result)
                    })
                }
            })
        });
    }

}





app.post('/video', (req, res) => {
    let deo = new DAO('mongodb://localhost:27017', 'videoData', 'vueItme')
    deo._connect().then(data => {

        res.json(data)
    })
})

 

app.post('/videoDetalis', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        const collection = client.db('vueItme').collection('videoData')
        //获取formDataID
        const oid = req.body.parameter //
      
        var _id = objectId(oid);
    
        var whereArgs = {
            _id: _id
        };
        collection.findOne(whereArgs,{}, function(err,doc){
            // TODO 处理查询到的数据
            res.json(doc)
           
        })
    })
})


app.post('/userLogin',(request,response)=>{
    MongoClient.connect(url,function(err,client){
        const collection=client.db('vueItme').collection('userName');
        let {username,password} = request.body;
        var userName = {
            "username":username,
            "password":password
        } 
        collection.findOne(userName,{},function(error,doc){
            if(error){
                response.send("<script>alert('程序出现错误');location.href='http://localhost:8080/login'</script>")
            }else if(doc == null){
                response.send("<script>alert('信息不正确,请输入正确信息');location.href='http://localhost:8080/login'</script>") 
            }else{
                // request.session.userId = username           
                response.send(`<script>window.localStorage.setItem('username','root');location.href='http://localhost:8080/mine?${doc._id}';</script>`)
            }
        })     
    })
})
app.post("/userinfo",(req,res)=>{
    MongoClient.connect(url,function(err,client) {
        const collection = client.db('vueItme').collection('userName')
        //获取formDataID
        const oid = req.body.parse //
      
        var _id = objectId(oid);//对应数据id
  
        var hehehe = {
            _id: _id
        };
         //从集合中查询该数据
        collection.findOne(hehehe,{},function(err,doc){
            res.json(doc)
          
        })
    })
})


app.listen(3000, () => {

    console.log("Server Start...")


})