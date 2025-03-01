import express from "express"
const router = express.Router();

router.get("/", (req, res) => {
    res.send("welcome to the lab router");
})
router.get("/name", (req, res) => {
    res.send("Sally")
})
router.get("/getting", (req, res) => {
    res.send("Hello, i'm sally");
})

router.get("/add/:x/:y", (req, res) => {
    let x = parseFloat (req.params.x);
    let y = parseFloat (req.params.y);

    res.send('${x + y}');
} );

router.get("/calcaulte/:a/:b/:operation", (req, res) => {
    let a = parseFloat (req.params.a);
    let b = parseFloat (req.params.b);
    switch (req. params.operation) {
        case "+":
            res.send(`${a + b}`);
            break;
        case "-":
            res.send(`${a - b}`);
            break;
        case "+":
            res.send(`${a * b}`);
            break;
        case "/":
            res.send(`${a / b}`);
            break;
        default:
            res.send("WRONG OPERATION");
    }
})
export default router;