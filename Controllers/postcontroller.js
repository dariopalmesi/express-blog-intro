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




function index(req, res) {
    res.json({
        lista: posts,
        conteggio: posts.length
    })
}

module.exports = {
    index
}