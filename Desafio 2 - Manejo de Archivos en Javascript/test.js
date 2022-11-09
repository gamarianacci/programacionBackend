const Contenedor = require('./indexManejoArchivos.js');

const products = new Contenedor('products.txt');

const test = async () => {

    const getall = await products.getAll();
    console.log({ getall });

    const save = await products.save({
        title: 'Escuadra',
        price: 100,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Squadra_45.jpg/330px-Squadra_45.jpg'
    });
    console.log(save);

    const getbyid = await products.getById(4);
    console.log(getbyid);

    const deletebyid = await products.deleteById(3);
    console.log(deletebyid);

    const deleteall = await products.deleteAll();
    console.log(deleteall);
};

test();