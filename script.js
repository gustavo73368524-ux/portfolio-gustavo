// Seleciona o botão responsável pela troca de tema
const temaBtn = document.getElementById("temaBtn");
// Alterna entre tema claro e escuro
temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// Captura o formulário de contato
const formulario = document.getElementById("formContato");
// Realiza a validação antes do envio do formulário
formulario.addEventListener("submit", function(event){
// Impede o envio padrão do formulário
    event.preventDefault();
// Obtém os valores digitados pelo usuário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
// Verifica se todos os campos foram preenchidos
    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos.");
        return;
    }
// Expressão regular para validar o formato do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexEmail.test(email)){
        alert("Digite um e-mail válido.");
        return;
    }
// Exibe mensagem de sucesso e limpa os campos
    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});