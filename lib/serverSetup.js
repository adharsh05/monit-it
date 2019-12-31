import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.disable('x-powered-by');

app.use(bodyParser.urlencoded({extended:false})); // parse application/x-www-form-urlencoded

app.use(bodyParser.json()); // parse application/json

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.all('/',(req, res, next)=>{
    console.log('___inside___app with  next')
    next();
})

app.use((err,req, res,next)=>{
    req.log.error({ err, req });
    // res.setHeader('Content-type','text/plain');
    // res.write('you posted:\n');
    // res.end(JSON.stringify(req, body,null,2));
    next();
})

export default app;


