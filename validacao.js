document.getElementById("submitButton").addEventListener("click", function (event) {

  console.log("oi");
  event.preventDefault();

  // Aqui você pode adicionar suas validações
  var nome = document.getElementById("nome");
  nome.classList.remove("form-control");;
  nome.classList.add("form-control is-invalid");

  var sobrenome = document.getElementById("sobrenome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var senhaconf = document.getElementById("senhaconf").value;
  var dataNas = document.getElementById("dataNas").value;
  var telefone = document.getElementById("telefone").value;
  var cpf = document.getElementById("cpf").value;
  var cep = document.getElementById("cep").value;
  var rua = document.getElementById("rua").value;
  var numero = document.getElementById("numero").value;
  var complemento = document.getElementById("complemento").value;
  var bairo = document.getElementById("bairo").value;
  var cidade = document.getElementById("cidade").value;
  var uf = document.getElementById("uf").value;
  var foto = document.getElementById("foto").value;

  console.log("oi");
  nome.removeClass();
  nome.classList.add("form-control is-invalid");

  /*if (nome.value.trim() === "") {
    alert("Por favor, preencha o campo Nome.");
    nome.classList.add("is-invalid");
    return; 
  }*/

});

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('uf').value = "...";
      document.getElementById('ibge').value = "...";

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback. 
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

    } 
    else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } 
  else {
    limpa_formulário_cep();
  }
};