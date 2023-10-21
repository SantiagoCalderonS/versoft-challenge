const request = require('supertest');
const app = require('./src/app.js');

/*NO TENGO MUCHA EXPERIENCIA CON LAS PRUEBAS. CONOZCO LA TEORIA Y RECIBI UN PAR DE CLASES
PERO NO LAS HE PUESTO EN PRACTICA MUY SEGUIDO, PUES TODOS MIS PROYECTOS HASTA AHORA HAN SIDO
DE PEQUEÑO TAMAÑO, PERO NADA QUE UN BUEN REPASO NO SOLUCIONE*/

describe("peticion de info por medio de las coordenadas", ()=>{
    
    it('deberia dar un objeto, con estado 200 al mandar los parametros correctos', async () => {
        const res = await request(app).get('/info?lat=37.716058&lon=20.9910054');
        console.log(res.body)
        expect( typeof res.body).toBe("object");
        expect(res.body).toBeDefined();
        expect(res.statusCode).toBe(200);
      });
      
      it('con los parametros incorrectos, deberia devolver un estado 404', async () => {
        const res = await request(app).get('/info?lat=37.ddsd&lon=20.9sjjd54');
        expect(res.statusCode).toBe(404);
      });
})


describe("peticion de sitios por medio del nombre", ()=>{
    
    it('deberia dar un arreglo, con estado 200 al mandar los parametros correctos', async () => {
        const res = await request(app).get('/ubicacion?ciudad=cartagena&pais=CO');
        expect( typeof res.body).toBe("object");
        expect( typeof res.body[0]).toBe("object");
        expect(res.body).toBeDefined();
        expect(res.statusCode).toBe(200);
      });
      
      it('con los parametros incorrectos, deberia devolver un estado 404', async () => {
        const res = await request(app).get('/ubicacion?ciudad=aknsvinaiud&pais=WO');
        expect(res.statusCode).toBe(404);
      });
})
