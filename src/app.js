import express from 'express';
const app = express();

// indicar para o express ler o body com json
app.use(express.json());

function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id);
}

function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id);
}

// Rotas
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body);
    res.status(201).send("Seleção criada com sucesso!");
});

app.get('/selecoes', (req, res) =>{
    res.status(200).send(selecoes);
});

app.get('/selecoes/:id', (req, res) => {
    // let index = req.params.id;
    res.send(buscarSelecaoPorId(req.params.id));
});

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id);
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);
});

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id);
    selecoes.splice(index, 1);
    res.send(`Seleção com id: ${req.params.id} excluída com sucesso`);
});

export default app;
