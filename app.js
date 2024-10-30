// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
// La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare nel browser.


const express = require('express')
const blog = require('./Controllers/postcontroller.js')
const posts = require('./Controllers/postcontroller.js')
const app = express()
app.use(express.static('public'))
const host = 'http://127.0.0.1'
const port = 3000
console.log(posts);

app.get('/', (req, res) => {
    posts.forEach(post => {
        const {titolo, contenuto, immagine, tags} = post
       
        const markup = `
     <h1>${titolo}</h1>
     <p>${contenuto}</p>
     <img src="${immagine}" alt="post">
     <p>${tags}</p>
     `
     return markup
    });



    res.send(markup)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${host}:${port}`)
})



app.get('/post', blog.index)