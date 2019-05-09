import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import NewsController from './controllers/NewsController';

const News = new NewsController();
const app = express();
mongoose.connect('mongodb://localhost/news');
const port = 3003;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



//show news
app.get('/news', News.index);
//search fist news
app.get('/news/:id', News.read);
//add new news
app.post('/news', News.create);
//delete news
app.delete('/news/:id', News.delete);
//update news
app.put('/news/:id', News.update);

 // start server
app.listen(port, () => {
  console.log(`Express works at port, ${port} `);
});

