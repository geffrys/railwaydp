import Router from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.send('router Works!');
});


export default router;