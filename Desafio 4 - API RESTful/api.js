import express, { Router, json, urlencoded } from 'express';
import Contenedor from './contenedor.js';

const app = express();
const router = Router();
const PORT = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));

const contenedor = new Contenedor('products.json');

router.get('/', async (req, res) => {
    const products = await contenedor.getAll();
    res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await contenedor.getById(id);
    product
        ? res.status(200).json(product)
        : res.status(404).send({ error: 'producto no encontrado' });
});

router.post('/', async (req, res) => {
    const { body } = req;
    const newProduct = await contenedor.save(body);
    res.status(200).send(`Producto agregado con el siguiente ID: ${newProduct}`);
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await contenedor.updateById(id, body);
    wasUpdated
        ? res.status(200).send(`El producto de ID: ${id} fue actualizado`)
        : res.status(404).send({ error: 'producto no encontrado' });
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const wasDeleted = await contenedor.deleteById(id);
    id
        ? res.status(200).send(`El producto con el ID: ${id} fue eliminado`)
        : res.status(404).send({ error: 'producto no encontrado' });
});

app.use('/api/productos', router);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

app.on('error', (error) => {
    console.log(error);
});