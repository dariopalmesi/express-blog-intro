// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
// La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare nel browser.


const express = require('express')
const app = express()
const host = 'http://127.0.0.1'
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${host}:${port}`)
})

const posts = [
    {
        titolo: "Introduzione alla Programmazione",
        contenuto: "La programmazione è un'abilità fondamentale nel mondo moderno. In questo post esploreremo i concetti di base.",
        immagine: "https://example.com/images/intro_programmazione.jpg",
        tags: ["programmazione", "sviluppo", "tecnologia", "coding"]
    },
    {
        titolo: "Le Basi del JavaScript",
        contenuto: "JavaScript è uno dei linguaggi più usati per lo sviluppo web. Scopriamo insieme i primi passi.",
        immagine: "https://example.com/images/javascript_basics.jpg",
        tags: ["javascript", "web development", "frontend", "coding"]
    },
    {
        titolo: "Guida ai CSS per Principianti",
        contenuto: "CSS è il linguaggio che permette di dare stile e struttura alle pagine web. Vediamo come iniziare.",
        immagine: "https://example.com/images/css_guide.jpg",
        tags: ["CSS", "web design", "frontend", "styling"]
    },
    {
        titolo: "Python: Esempi Pratici per Iniziare",
        contenuto: "Python è semplice e versatile. Vediamo alcuni esempi pratici per iniziare a scrivere il tuo primo codice.",
        immagine: "https://example.com/images/python_tutorial.jpg",
        tags: ["python", "programmazione", "esempi", "coding"]
    },
    {
        titolo: "Strumenti Utili per Sviluppatori Web",
        contenuto: "Una raccolta degli strumenti più utili per chi lavora come sviluppatore web.",
        immagine: "https://example.com/images/web_dev_tools.jpg",
        tags: ["strumenti", "web development", "produttività", "tool"]
    }
];

app.get('/post', (req, res) => {
    res.json({
        lista: posts,
        conteggio: posts.length
    })
})