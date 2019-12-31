import express from 'express';
import { readdirSync } from 'fs';
const router = express.router();

router.get('/', (req, res)=>{
    res.json({message: 'public access straight to home page'})
});

export default router;
