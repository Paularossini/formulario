function validar() {
  var nomeInput = document.getElementById("nome");
  var nome = nomeInput.value.trim();
  var sobrenomeInput = document.getElementById("sobrenome");
  var sobrenome = sobrenomeInput.value.trim();
  var emailInput = document.getElementById("email");
  var email = emailInput.value.trim();
  var senhaInput = document.getElementById("senha");
  var senha = senhaInput.value.trim();
  var senhaconfInput = document.getElementById("senhaconf");
  var senhaconf = senhaconfInput.value.trim();
  var dataNasInput = document.getElementById("dataNas");
  var dataNas = dataNasInput.value.trim();
  var telefoneInput = document.getElementById("telefone");
  var telefone = telefoneInput.value.trim();
  var cpfInput = document.getElementById("cpf");
  var cpf = cpfInput.value.trim();
  var cepInput = document.getElementById("cep");
  var cep = cepInput.value.trim();
  var ruaInput = document.getElementById("rua");
  var rua = ruaInput.value.trim();
  var numeroInput = document.getElementById("numero");
  var numero = numeroInput.value.trim();
  var complementoInput = document.getElementById("complemento");
  var complemento = complementoInput.value.trim();
  var bairoInput = document.getElementById("bairro");
  var bairo = bairoInput.value.trim();
  var cidadeInput = document.getElementById("cidade");
  var cidade = cidadeInput.value.trim();
  var ufInput = document.getElementById("uf");
  var uf = ufInput.value.trim();
  var fotoInput = document.getElementById("foto");
  var foto = fotoInput.value.trim();

  var  validacao = false;

  if (nome === "") {
    nomeInput.classList.add("is-invalid");
    validacao = true;
  } else {
    nomeInput.classList.remove("is-invalid");
  }

  if (sobrenome === "") {
    sobrenomeInput.classList.add("is-invalid");
    validacao = true;
  } else {
    sobrenomeInput.classList.remove("is-invalid");
  }

  if (email === "") {
    emailInput.classList.add("is-invalid");
    validacao = true;
  } else if (!validarEmail(email)) {
    validacao = true;
    emailInput.classList.add("is-invalid");
  }else{
    emailInput.classList.remove("is-invalid");
  }

  if (senha === "") {
    senhaInput.classList.add("is-invalid");
    validacao = true;
  } else {
    senhaInput.classList.remove("is-invalid");
    if (senhaconf === "") {
      senhaconfInput.classList.add("is-invalid");
      validacao = true;

    } else if(senhaconf != senha){
      alert("Senha de confirmação diferente de Senha!");
    } else {
      senhaconfInput.classList.remove("is-invalid");

    }
  }

  if (dataNas === "") {
    dataNasInput.classList.add("is-invalid");
    validacao = true;
  } else if (!validarDataNascimento(dataNas)) {
    dataNasInput.classList.add("is-invalid");
    validacao = true;
  } else {
    dataNasInput.classList.remove("is-invalid");
  }

  if (telefone === "") {
    telefoneInput.classList.add("is-invalid");
    validacao = true;
  } else if (!validarTelefone(telefone)) {
    telefoneInput.classList.add("is-invalid");
    validacao = true;
  } else {
    telefoneInput.classList.remove("is-invalid");
  }

  if (cpf === "") {
    cpfInput.classList.add("is-invalid");
    validacao = true;
  } else if (!validarCPF(cpf)) {
    cpfInput.classList.add("is-invalid");
    validacao = true;
  } else {
    cpfInput.classList.remove("is-invalid");
  }

  if (cep === "") {
    cepInput.classList.add("is-invalid");
    validacao = true;
  } else if (!validarCEP(cep)) {
    cepInput.classList.add("is-invalid");
    validacao = true;
  } else {
    cepInput.classList.remove("is-invalid");
  }

  if (rua === "") {
    ruaInput.classList.add("is-invalid");
    validacao = true;
  } else {
    ruaInput.classList.remove("is-invalid");
  }

  if (numero === "") {
    numeroInput.classList.add("is-invalid");
    validacao = true;
  } else {
    numeroInput.classList.remove("is-invalid");
  }

  if (bairro === "") {
    bairoInput.classList.add("is-invalid");
    validacao = true;
  } else {
    bairoInput.classList.remove("is-invalid");
  }

  if (cidade === "") {
    cidadeInput.classList.add("is-invalid");
    validacao = true;
  } else {
    cidadeInput.classList.remove("is-invalid");
  }

  if (uf === "") {
    ufInput.classList.add("is-invalid");
    validacao = true;
  } else {
    ufInput.classList.remove("is-invalid");
  }

  if (foto === "") {
    fotoInput.classList.add("is-invalid");
    validacao = true;
  } else {
    fotoInput.classList.remove("is-invalid");
  }

  if(validacao){
    alert("Preencha os campos corretamente!");
  }else{
    document.getElementById("meuFormulario").reset();
  }
  return;
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regexEmail.test(email);
}

function validarDataNascimento(dataNas) {
  const dataMinima = new Date();
  dataMinima.setFullYear(dataMinima.getFullYear() - 100);

  const dataHoje = new Date();

  if (dataNas > dataHoje || dataNas < dataMinima) {
    return false; 
  }
  return true;
}

function validarTelefone(telefone) {
  var telefoneNumerico = telefone.replace(/\D/g, '');
  const tamanhoValido = telefoneNumerico.length === 10 || telefoneNumerico.length === 11;
  return tamanhoValido;
}

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g,'');

  if (cpf.length !== 11) {
    return false;
  }
  return true; // CPF válido
}

function callback(conteudo) {
  if (!("erro" in conteudo)) {
    console.log(conteudo.bairro);
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
  } 
}

function pesquisacep(cep) {
  if(validarCEP(cep)){
    var script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=callback';
    document.body.appendChild(script);
  }
}

function validarCEP(cep) {
  const regexCEP = /^\d{5}-\d{3}$/;
  return regexCEP.test(cep);
}

