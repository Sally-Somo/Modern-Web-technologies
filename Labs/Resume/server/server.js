// server.js (or app.js)
const express = require('express');
const app = express();
const port = 5000;

// Sample resume data (this can be expanded to include all your sections like experience, education, skills, etc.)
const resumeData = {
    name: "Sally Kpufotitin",
    jobTitle: "Software Developer",
    contact: {
        phone: "(123) 456-7890",
        email: "sally@email.com",
        linkedin: "https://www.linkedin.com/in/sallykpufotitin",
    },
    experience: [
        {
            title: "Software Engineer",
            company: "Tech Co.",
            date: "2023 - Present",
            description: "Developing web applications with React and Node.js.",
        },
        {
            title: "Junior Developer",
            company: "Web Solutions",
            date: "2021 - 2023",
            description: "Assisted in building e-commerce platforms and APIs.",
        },
    ],
    skills: ["JavaScript", "React", "Node.js", "Express", "HTML", "CSS"],
    education: [
        {
            degree: "Bachelor's in Computer Science",
            school: "XYZ University",
            year: "2021",
        },
    ],
};

// Endpoint to serve resume data
app.get('/api/resume', (req, res) => {
    res.json(resumeData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
