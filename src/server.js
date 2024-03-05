import express from "express"

const app = express ()

//parsea el body
app.use(express.json())

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

