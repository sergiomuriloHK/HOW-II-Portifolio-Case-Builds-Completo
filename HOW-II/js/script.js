// Scroll suave para link
$('a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
    console.log(id);
});

// Condições ao clicar o botão enviar
$('#btn-enviar').click(function(){
    var nome = document.getElementById('nome');
    var email = document.querySelector("#email");
    var mensagem = document.querySelector("#mensagem");
    if (nome.value === ""){
        alert("Preencha o campo: Nome");
    }
    else if (email.value === ""){
        alert("Preencha o campo: Email");
    }
    else if (mensagem.value === ""){
        alert("Preencha o campo: Mensagem");
    }
    else {
        alert("Email enviado");
    }
})