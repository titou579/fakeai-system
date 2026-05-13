const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("IA esclave de Nelio active 😎")
})

app.post("/message", async (req, res) => {

  const pseudo = req.body.pseudo
  const message = req.body.message

  const webhookURL = "COLLE_ICI_TON_WEBHOOK"

  const content = `
🧠 Nouveau message IA

👤 Pseudo : ${pseudo}

💬 Message :
${message}
  `

  await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: content
    })
  })

  res.json({
    success: true
  })

})

app.listen(3000, () => {
  console.log("Serveur lancé sur le port 3000 😎")
})
