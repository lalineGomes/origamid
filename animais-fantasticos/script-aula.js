function Pessoa(nome,sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
  return '${this.nome} ${this.sobrenome}'
}



const laline = new Pessoa('Laline','Gomes', 28)
console.log(Pessoa.prototype)