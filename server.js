const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const webhookURL = "https://discord.com/api/webhooks/1504168506353254421/h8W2Fh2--q0557T2gIm7OYEn5qvQsX-TpY5_oCpmk8q6iHizaO62DpOQ4sFFE6jhrlHT";

app.post("/message", async (req, res) => {
    const { pseudo, message } = req.body;

    try {
        await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content:
`🤖 Nouveau message IA

👤 Utilisateur : ${pseudo}

💬 Message :
${message}`
            })
        });

        res.json({ success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

app.get("/", (req, res) => {
    res.send("IA esclave de Nelio active 😎");
});

app.listen(3000, () => {
    console.log("Serveur lancé sur le port 3000 😎");
});
