alerta = () => {
    alert("🚨!!!Cuidado!!!🚨")
}
const enviar = ()  => {
    let nome = document.getElementById("nome").value
    document.getElementById("reposta").innerHTML = `<h2>Olá ${nome}, formulário enviado com sucesso!!</h2>`
if (nome == "") {
    alert("Bem vindo!!!")
} else {
    alert (`Olá ${nome}, seja Bem-vindo!!!`)
}
    
}
