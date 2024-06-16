document.getElementById('listStates').addEventListener('click', function () {
    fetch('URL_DA_SUA_API_GET')
        .then(response => response.json())
        .then(data => {
            const stateList = document.getElementById('stateList');
            stateList.innerHTML = '<h2>Lista de Estados:</h2>';
            const list = document.createElement('ul');
            data.forEach(state => {
                const listItem = document.createElement('li');
                listItem.textContent = state.nome;
                list.appendChild(listItem);
            });
            stateList.appendChild(list);
        })
        .catch(error => console.error('Erro ao listar estados:', error));
});

document.getElementById('addState').addEventListener('click', function () {
    const stateName = prompt('Digite o nome do novo estado:');
    if (stateName) {
        fetch('URL_DA_SUA_API_POST', {
            method: 'POST',
            body: JSON.stringify({ nome: stateName }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                alert('Estado adicionado com sucesso!');
                // Você pode atualizar a lista de estados aqui, se necessário
            })
            .catch(error => console.error('Erro ao adicionar estado:', error));
    }
});

document.getElementById('updateState').addEventListener('click', function () {
    const stateId = prompt('Digite o ID do estado a ser atualizado:');
    const newStateName = prompt('Digite o novo nome do estado:');
    if (stateId && newStateName) {
        fetch(`URL_DA_SUA_API_PUT/${stateId}`, {
            method: 'PUT',
            body: JSON.stringify({ nome: newStateName }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                alert('Estado atualizado com sucesso!');
                // Você pode atualizar a lista de estados aqui, se necessário
            })
            .catch(error => console.error('Erro ao atualizar estado:', error));
    }
});

document.getElementById('deleteState').addEventListener('click', function () {
    const stateId = prompt('Digite o ID do estado a ser deletado:');
    if (stateId) {
        fetch(`URL_DA_SUA_API_DELETE/${stateId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                alert('Estado deletado com sucesso!');
                // Você pode atualizar a lista de estados aqui, se necessário
            })
            .catch(error => console.error('Erro ao deletar estado:', error));
    }
});
