// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
// La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare nel browser.


const express = require('express')
const posts = require('./Controllers/postcontroller.js')
const app = express()
app.use(express.static('public'))
const host = 'http://127.0.0.1'
const port = 3000
console.log(posts);

app.get('/', (req, res) => {

    markup =`
    <h1>Benvenuto nel mio blog!</h1>
    <img src="/img/f7a5b5a8-4cb2-403c-af51-70c820cd0837.webp" alt="post">
    `


    res.send(markup)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${host}:${port}`)
})



 app.get('/post', posts.index)