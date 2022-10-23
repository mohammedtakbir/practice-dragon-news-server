const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const cors = require('cors')

app.use(cors());

//* get data from json file
const categories = require('./data/category.json');
const allNews = require('./data/news.json');

//* create a simple API
app.get('/', (req, res) => {
    res.send('for the third time, we test the dragon news API')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

//* get news category from API
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(allNews)
    } else {
        const categoriesNews = allNews.filter(news => news.category_id === id);
        res.send(categoriesNews);
    }
})

//* get news detail from API
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = allNews.find(news => news._id === id);
    res.send(selectedNews);
});

//* get all news for home page
app.get('/news', (req, res) => {
    res.send(allNews)
})


app.listen(port, () => {
    console.log('testing the dragon news API')
})