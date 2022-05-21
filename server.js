const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("HERE")
    res.send("ВОТ ЭТА ХУЕТА ПРОСТО ТЕКСТ, НО ОНА ОЗНАЧАЕТ, ЧТО ВСЁ ОХУЕННО РАБОТАЕТ")
})

app.listen(3000)