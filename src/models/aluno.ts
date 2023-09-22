class Aluno {
    constructor(
      public id: number,
      public nome: string,
      public cursosConcluidos: string[],
      public moedas: number,
      public voucher: number,
      public estaPagando: boolean,
      public status: string
    ) {}
  
    contagemCursosConcluidos(): number {
      return this.cursosConcluidos.length;
    }
  }
  
  export default Aluno;