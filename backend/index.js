import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const myobj ={
        name: "Priyanshu",
        age: 20,
    }
    res.send(myobj);
});

app.listen(8000, () => {
    console.log("backend connected");
})