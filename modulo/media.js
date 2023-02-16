const { isString } = require("util")

const calcularMedia = function(nota1, nota2, nota3, nota4) {
    let resultado1 = Number(nota1)
    let resultado2 = Number(nota2)
    let resultado3 = Number(nota3)
    let resultado4 = Number(nota4)


    let media

    media = (resultado1 + resultado2 + resultado3 + resultado4) / 4
    console.log(media)

}

// Função para aceitar somente string 

const erroDeEscrita = function(alu, sexoA, pro, sexoP, cur, disci) {
    let nomeAluno = alu
    let sexoDoAluno = sexoA.toUpperCase()
    let nomeProfessor = pro
    let sexoDoProfessor = sexoP.toUpperCase()
    let cursoAluno = cur
    let NomeDaDisciplina = disci

    if (nomeAluno == "" || sexoDoAluno == "" || nomeProfessor == " " || sexoDoProfessor == "" || cursoAluno == "" || NomeDaDisciplina == "") {
        console.log('ERRO: É necessario que você preencha todos os dados.')
    } else if (!isString(nomeAluno) || !isString(sexoDoAluno) || !isString(nomeProfessor) || !isString(sexoDoProfessor) || !isString(cursoAluno) || !isString(NomeDaDisciplina)) {
        console.log('ERRO: Você preencheu valores numericos no lugar errado.')
    } else if (sexoDoAluno != 'MASCULINO' && sexoDoAluno != 'FEMININO') {
        console.log('ERRO: Por favor, digite apenas MASCULINO OU FEMININO')
    } else if (sexoDoProfessor != 'MASCULINO' && sexoDoProfessor != 'FEMININO') {
        console.log('ERRO: Por favor, digite apenas MASCULINO OU FEMININO')
    }

}

const erroNumero = function(nota1, nota2, nota3, nota4) {
    let resultado1 = Number(nota1)
    let resultado2 = Number(nota2)
    let resultado3 = Number(nota3)
    let resultado4 = Number(nota4)
    let media

    if (resultado1 == "" || resultado2 == "" || resultado3 == "" || resultado4 == "") {
        console.log('ERRO: É necessario que você preencha todos os dados de forma correta.')
    } else if (isNaN(resultado1) || isNaN(resultado2) || isNaN(resultado3) || isNaN(resultado4)) {
        console.log('ERRO: Não é possivel calcular sem a entrada de valores numericos')
    } else if (resultado1 < 0 || resultado2 < 0 || resultado3 < 0 || resultado4 < 0) {
        console.log('ERRO: Digite nota entre 0 á 100')
    } else if (resultado1 > 100 || resultado2 > 100 || resultado3 > 100 || resultado4 > 100) {
        console.log('ERRO: Digite nota entre 0 á 100')

    }
    // } else {
    //     if (primeiraNota < 0 || primeiraNota > 100 || isNaN(primeiraNota) ||
    //         segundaNota < 0 || segundaNota > 100 || isNaN(segundaNota) ||
    //         terceiraNota < 0 || terceiraNota > 100 || isNaN(terceiraNota) ||
    //         quartaNota < 0 || quartaNota > 100 || isNaN(quartaNota)) {
    //         console.log('ERRO: Digite apenas NÚMEROS entre 0 á 100')
    //         entradaDados.close()

    //     }

}

function exame(mediaAluno, notaExame) {
    let media = mediaAluno
    let nota = notaExame

    let resultadoExame = (Number(media) + Number(nota)) / 2

    return resultadoExame
}


function validarNota(finalResultado, alunoGenero) {
    let resultadoFinal = finalResultado
    let generoAluno = alunoGenero

    if (resultadoFinal >= 60) {
        if (generoAluno == 'MASCULINO') {
            return 'APROVADO'
        } else {
            return 'APROVADA'
        }
    } else {
        if (generoAluno == 'MASCULINO') {
            return 'REPROVADO'
        } else {
            return 'REPROVADA'
        }
    }
}

function validarNotaSemExame(resultado, generoDoAluno) {
    let resultadoFinal = resultado
    let alunoGenero = generoDoAluno

    if (resultado >= 70) {
        if (alunoGenero == 'MASCULINO') {
            return 'APROVADO'
        } else {
            return 'APROVADA'
        }
    } else if (resultado < 50) {
        if (alunoGenero == 'MASCULINO') {
            return 'REPROVADO'
        } else {
            return 'REPROVADA'
        }
    } else {
        return false
    }
}






// calcularMedia(50, 50, 50, 50)
























module.exports = {
    calcularMedia,
    erroDeEscrita,
    erroNumero,
    exame,
    validarNota,
    validarNotaSemExame
}