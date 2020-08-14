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

app.get('/list-document', (request , response) =>  {
    //return response.send('funcionou');
  

    return response.send("Listado com Sucesso");
  
});

app.post('/create-user', (request , response) =>  {
    //return response.send('funcionou');
  

    return response.send("Usuário criado com sucesso");
  
});

app.delete('/delete-user', (request , response) =>  {
    //return response.send('funcionou');
  

    return response.send("Usuário deletado com sucesso");
  
});

app.get('/list-user', (request , response) =>  {
    //return response.send('funcionou');
  

    return response.send("Usuário listado com sucesso");
  
});


app.listen(3333, () => console.log('Server Ligado.'));