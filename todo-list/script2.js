let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
    localStorage.setItem ("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
   
    tarefas.forEach ((tarefa, indice) => {
        const item = document.createElement("li");
        item.textContent = tarefa.texto;

        if (tarefa.concluida) {
            item.classList.add("concluida");
        }

        lista.appendChild(item);
    });

}

const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Concluir";
    botaoConcluir.onclick = function () {
        tarefas[indice].concluida = !tarefas[indice].concluida;
        salvarTarefas();
        renderizarTarefas();
            item.appendChild(botaoConcluir);
    }

const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Exlcuir";
    botaoExcluir.onclick = function () {
        tarefas.splice(indice, 1);
        salvarTarefas();
        renderizarTarefas();
            item.appendChild(botaoExcluir);
    }    

function adicionarTarefas() {
    const input = document.getElementById("tarefas");
    if (input.ariaValueMax.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }
    tarefas.push({
        texto: input.ariaValueMax, concluida: false });
        salvarTarefas();
        renderizarTarefas();
        input.value = "";
}

renderizarTarefas();
   

