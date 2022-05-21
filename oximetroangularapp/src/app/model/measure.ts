export class Measure {

  nome: string;
  medida: string;
  dataatual: string;

  constructor(nome: string, medida:string){
    this.nome = nome;
    this.medida = medida;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.dataatual =  dd + '/' + mm + '/' + yyyy;
  }

}
