import Aluno from './aluno';

class Recompensa {

  verificaRecompensa(aluno: Aluno): void {
    const numCursosConcluidos = aluno.contagemCursosConcluidos();
    //const numCursosConcluidos = aluno.cursosConcluidos.length
    if (numCursosConcluidos >= 12 && aluno.estaPagando && aluno.status != "Premium") {
        aluno.moedas += 3;
        aluno.voucher += 1;
        aluno.status = "Premium";  
    }
  }
}

export default Recompensa;