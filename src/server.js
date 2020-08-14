const express = require('express');

const app = express();

app.post('/teste', (request , response) =>  {

    const teste = [
        {array: 'meu pai', motivo: 'como ele retorna zero'}
        ]
    //return response.send('funcionou');
    return response.json(teste);
  
});


app.listen(3333, () => console.log('Server Ligado.'));