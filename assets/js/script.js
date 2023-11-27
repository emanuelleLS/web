function adicionarNaTabela() {


    // salva os valores do formulário em variáveis
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let fone = document.getElementById('fone')
    let profissao = document.getElementById('profissao')
    
    if (nome.value == '' || email.value == '')
        return false

    let tabela = document.getElementById('tabela')
    // numero de linhas da tabela
    let tamanhoTabela = tabela.rows.length
    //insere uma linha abaixo da última da tabela
    let linha = tabela.insertRow(tamanhoTabela)
    //insere células na linha
    let celula0 = linha.insertCell(0)
    let celula1 = linha.insertCell(1)
    let celula2 = linha.insertCell(2)
    let celula3 = linha.insertCell(3)
    let celula4 = linha.insertCell(4)
    let celula5 = linha.insertCell(5)
    //adicionado o id no elemento a ser criado
    linha.id = tamanhoTabela

    celula0.innerHTML = tamanhoTabela
    celula1.innerHTML = nome.value
    celula2.innerHTML = email.value
    celula3.innerHTML = fone.value
    celula4.innerHTML = profissao.value

    //cria um botão para remover a linha atual
    let btnCodigo = "<button class='botao_remover' onclick='removerDaTabela(this)'>Remover</button> "
    celula5.innerHTML = btnCodigo

    //limpa os campos de inserção de dados 
    nome.value = ''
    email.value = ''
    fone.value = ''
    profissao.value = ''

    //retorna false para impedir o reload da pagina
    return false
}

function removerDaTabela(botao) {

    //parentNode é o elemento pai de uma tag html
    //neste caso temos uma tabela -> dentro temos uma Linha
    //dentro temos uma célula -> dentro temos um botão
    //Tablee -> rows(id) -> cell -> button
    //o pai do botão é a célula, onde ese está contido
    //toda linha tem um id
    //Id da linha: 
    let id = botao.parentNode.parentNode.id
    //a partir do id da linha, obtenho o elemento linha (tr)
    let linha = document.getElementById(id)
    // a partir do elemento linha obtém-se o elemento pai (tabela):
    let tabela = linha.parentElement
    // a partir da tabela, solicitado para remover o elemento filho: linha
    tabela.removeChild(linha)
}