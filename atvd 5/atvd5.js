const listaOl = document.querySelector('#listaOlId');

const aparecerTask = (data) => {
    listaOl.innerHTML = '';
    const resultado = data.results;

    resultado.forEach((result) => {
        const texto = document.createTextNode(`${result.descricao}`)
        const lista = document.createElement('li');
        lista.appendChild(texto);
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = result.concluida;
        checkBox.disabled = true;
        lista.appendChild(checkBox);
        listaOl.appendChild(lista);
    });
}

const pegarTarefa = async () =>{
   try {
        const response = await fetch('https://parseapi.back4app.com/classes/Tarefa', {
            method: "GET",
            headers: {
                "X-Parse-Application-Id": "R2xqcuyHiZPkGwwboT8GZBPRJ1WGoqLQRMuqnBAn",
                "X-Parse-REST-API-Key": "m1jImyihojLugsWT69xrWsZg5KqMxcIAFUTSOI8R",
            }
        })
        if(!response.ok){
            alert(`Erro encontrado${response.status}`);
            throw new Error(`Erro encontrado ${response.status}`);
        }
        const data = await response.json();
        aparecerTask(data)
    } catch (error) {
        console.log(error);
    }
}

window.onload = pegarTarefa