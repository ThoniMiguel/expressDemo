const express = require("express");
const app = express();

app.use(express.json());
const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
]
//routes 
app.get("/", (req,res) => {
    res.send("Hello api world!");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const c = courses.find(course => course.id == parseInt(req.params.id))
    if(!c) {
        res.status(404).send("Course not found :(");
    }else{
        res.send(c);
    }
    //OR
    courses.find(course => course.id === req.params.id);
});



app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses );
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));