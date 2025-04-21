require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Join = require('./models/Join');
app.use(express.static('public'));
const hbs = require('hbs');
const app = express();


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Error:", err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index');
});


app.post('/join-event', async (req, res) => {
    const { eventName } = req.body;
    try {
        const joined = new Join({ eventName });
        await joined.save();
        res.send(`✅ Successfully joined ${eventName}`);
    } catch (error) {
        console.error("Join Error:", error);
        res.status(500).send("❌ Failed to join event");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
