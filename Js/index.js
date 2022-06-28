function logar() {
    //".getElementById" ele escolhe o id e ".value" pega os dados que o usuario escrever.
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login != senha && login.length > 2 && senha.length > 4) {
        alert('Logado com Sucesso');
        location.href = 'html/home.html';
    } else {
        alert('Usuario ou Senha incorreto');
    }
}
