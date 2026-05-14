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

  const webhookURL = "https://discord.com/api/webhooks/1504168506353254421/h8W2Fh2--q0557T2gIm7OYEn5qvQsX-TpY5_oCpmk8q6iHizaO62DpOQ4sFFE6jhrlHT"

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
