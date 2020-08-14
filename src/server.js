const express = require('express');

const app = express();

app.post('/create-document', (request , response) =>  {

    const teste = [
        {id:'1' ,array: 'meu pai', motivo: 'como ele retorna zero'}
        ]
    //return response.send('funcionou');
    return response.json(teste);
  
});

app.delete('/delete-document', (request , response) =>  {
    //return response.send('funcionou');
  

    return response.send("Deletado com Sucesso");
  
});


app.listen(3333, () => console.log('Server Ligado.'));