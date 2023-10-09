import { Router } from "express";

const indexRoute = Router()
    .get("/", (req, res) => {
        res.render("index");
    });

indexRoute.get("/", (req, res) => {
    res.render("index");
});

export {indexRoute}