import Aluno from '../src/models/aluno';
import Recompensa from '../src/models/recompensa';

describe('Recompensas', () => {
  it('deve conceder recompensas quando 12 cursos são concluídos, o aluno está pagando e o aluno não é "Premium"', () => {
    const recompensa= new Recompensa();
    const cursosConcluidos = ['Curso1', 'Curso2', 'Curso3', 'Curso4', 'Curso5', 'Curso6', 'Curso7', 'Curso8', 'Curso9', 'Curso10', 'Curso11', 'Curso12'];
    const aluno = new Aluno(1,'João', cursosConcluidos, 0, 0,true,"Normal");

    recompensa.verificaRecompensa(aluno);

    expect(aluno.moedas).toBe(3);
    expect(aluno.voucher).toBe(1);
    expect(aluno.status).toBe("Premium");

  });

  it('não deve conceder recompensas quando menos de 12 cursos são concluídos', () => {
    const recompensa= new Recompensa();
    const cursosConcluidos = ['Curso1', 'Curso2', 'Curso3'];
    const aluno = new Aluno(2,'Maria', cursosConcluidos, 0, 0,true,"Normal");

    recompensa.verificaRecompensa(aluno);

    expect(aluno.moedas).toBe(0);
    expect(aluno.voucher).toBe(0);
    expect(aluno.status).toBe("Normal");

  });

  it('não deve conceder recompensas quando não está pagando', () => {
    const recompensa= new Recompensa();
    const cursosConcluidos = ['Curso1', 'Curso2', 'Curso3', 'Curso4', 'Curso5', 'Curso6', 'Curso7', 'Curso8', 'Curso9', 'Curso10', 'Curso11', 'Curso12'];
    const aluno = new Aluno(3,'José', cursosConcluidos,  0, 0, false,"Normal");

    recompensa.verificaRecompensa(aluno);

    expect(aluno.moedas).toBe(0);
    expect(aluno.voucher).toBe(0);
    expect(aluno.status).toBe("Normal");

  });

  it('não deve conceder recompensas quando o aluno ja é "Premium"', () => {
    const recompensa= new Recompensa();
    const cursosConcluidos = ['Curso1', 'Curso2', 'Curso3', 'Curso4', 'Curso5', 'Curso6', 'Curso7', 'Curso8', 'Curso9', 'Curso10', 'Curso11', 'Curso12'];
    const aluno = new Aluno(4,'Paulo', cursosConcluidos,  0, 0, true,"Premium");

    recompensa.verificaRecompensa(aluno);
    
    expect(aluno.moedas).toBe(0);
    expect(aluno.voucher).toBe(0);
    expect(aluno.status).toBe("Premium");

  });

});