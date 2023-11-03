const express = require('express');
const app = express();

const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy',
        },
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK',
        },
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy',
        },
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy',
        },
    },
];

// Handler untuk menampilkan data lengkap
app.get('/', (req, res) => {
    res.json(motoGP);
});

// Handler untuk menampilkan data berdasarkan pengelompokan negara
app.get('/country', (req, res) => {
    const countryData = {};

    for (const race of motoGP) {
        const country = race.winner.country;
        if (!countryData[country]) {
            countryData[country] = [];
        }
        countryData[country].push(race);
    }

    res.json(countryData);
});

// Handler untuk menampilkan data berdasarkan pengelompokan nama pemenang
app.get('/name', (req, res) => {
    const nameData = {};

    for (const race of motoGP) {
        const fullName = `${race.winner.firstName} ${race.winner.lastName}`;
        if (!nameData[fullName]) {
            nameData[fullName] = [];
        }
        nameData[fullName].push(race);
    }

    res.json(nameData);
});

// Handler untuk tampilkan pesan "Bad Request" jika URL tidak sesuai
app.use((req, res) => {
    res.status(400).send('Bad Request');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});