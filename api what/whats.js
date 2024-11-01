function gravar(){
    let nome = document.getElementById("nome").value
    let endereço = document.getElementById("endereço").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value

    localStorage.setItem('nome' , nome);
    localStorage.setItem('endereço' , nome);
    localStorage.setItem('email' , nome);
    localStorage.setItem('telefone' , telefone);
    
    alert("dados enviados com sucesso!");
}

function exibir(){
    let nome localStorage.getItem('nome');
    let nome localStorage.getItem('endereço');
    let nome localStorage.getItem('email');
    let nome localStorage.getItem('telefone');

    if (nome && endereço && email && telefone){
        ducument.getElementById("dados-nome").queryselector('p').textcontent=nome;
        ducument.getElementById("dados-endereço").queryselector('p').textcontent=exibir;
        ducument.getElementById("dados-email").queryselector('p').textcontent=d;
        ducument.getElementById("dados-telefone").queryselector('p').textcontent=nome;
    } else {
        document.getElementById
    }

    function enviar(){
        let nome localStorage.getItem('nome');
        let nome localStorage.getItem('endereço');
        let nome localStorage.getItem('email');
        let nome localStorage.getItem('telefone');

        let data = Nome: " + nome"/n"telefone: " + telefone"/n"
}
