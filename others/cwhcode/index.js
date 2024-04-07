const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    let siteName = "Bitmap"
    let searchText = "search now"
   
    res.render("index", { siteName: siteName, searchText: searchText})
    let arr = ["hello", 0 ,1, 2,3 ,4]

})


app.get('/blog/:slug', (req, res) => {

    let blogTitle = "Bitmap iz good website"
    let blogContent = "u know whats an bitmap"
    res.render("blogpost", {blogtitle: blogTitle,blogContent: blogContent})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})