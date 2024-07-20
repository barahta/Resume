const express = require('express');
const db = require('./models'); // Подключение моделей
const userRoutes = require('./routes/userRoutes'); // Подключение маршрутов
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/users', userRoutes);

db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });