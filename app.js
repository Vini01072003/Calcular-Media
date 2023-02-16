var funcao = require('./modulo/media')

//import da biblioteca para entrada de dados
var readline = require('readline')

// Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

// nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function(aluno) {
    // Variavel local para receber o nome do aluno, que vai ser retornado pela função
    let nomeAluno = aluno

    // Sexo do aluno
    entradaDados.question('Escolha o gênero: [ MASCULINO | FEMININO ]: \n', function(sexoAluno) {
        // Variavel local para receber o sexo do aluno, que vai ser retornado pela função
        let sexoDoAluno = sexoAluno.toUpperCase()


        // nome do Professor
        entradaDados.question('Digite o nome do Professor \n', function(professor) {
            // Variavel local para receber o nome do Professor, que vai ser retornado pela função
            let nomeProfessor = professor

            // Sexo do Professor
            entradaDados.question('Escolha o gênero: [ MASCULINO | FEMININO ]: \n', function(sexoProfessor) {
                // Variavel local para receber o sexo do Professor, que vai ser retornado pela função
                let sexoDoProfessor = sexoProfessor.toUpperCase()


                // Nome do curso
                entradaDados.question('Digite o curso: \n', function(curso) {
                    // Variavel local para receber o curso do aluno, que vai ser retornado pela função
                    let cursoAluno = curso

                    // Nome da disciplina
                    entradaDados.question('Digite a disciplina: \n', function(disciplina) {
                        // Variavel local para receber o sexo do Professor, que vai ser retornado pela função
                        let NomeDaDisciplina = disciplina


                        // Nota 1° Bimestre
                        entradaDados.question('Digite a nota do 1° Bimestre: [ENTRE 0 À 100] \n', function(nota1) {
                            // Variavel local para receber á primeira nota do bimestre, que vai ser retornado pela função
                            let primeiraNota = nota1


                            // Nota 2° Bimestre
                            entradaDados.question('Digite a nota do 2° Bimestre: [ENTRE 0 À 100] \n', function(nota2) {
                                // Variavel local para receber á segunda nota do bimestre, que vai ser retornado pela função
                                let segundaNota = nota2

                                // Nota 3° Bimestre
                                entradaDados.question('Digite a nota do 3° Bimestre:  [ENTRE 0 À 100] \n', function(nota3) {
                                    // Variavel local para receber á terceira nota do bimestre, que vai ser retornado pela função
                                    let terceiraNota = nota3

                                    // Nota 4° Bimestre
                                    entradaDados.question('Digite a nota do 4° Bimestre:  [ENTRE 0 À 100] \n', function(nota4) {
                                        // Variavel local para receber á quarta nota do bimestre, que vai ser retornado pela função
                                        let quartaNota = nota4

                                        let resultado = funcao.calcularMedia(primeiraNota, segundaNota, terceiraNota, quartaNota)
                                        let String = funcao.erroDeEscrita(nomeAluno, sexoDoAluno, nomeProfessor, sexoDoProfessor, cursoAluno, NomeDaDisciplina)
                                        let numero = funcao.erroNumero(nota1, nota2, nota3, nota4)


                                        console.log(
                                            '\n***************************EXAME**************************'
                                        )

                                        entradaDados.question(
                                            'Digite a nota do EXAME: ',
                                            function(
                                                notaExame
                                            ) {
                                                let exame =
                                                    notaExame
                                                let resultadoFinal =
                                                    mediaModel.exame(
                                                        resultado,
                                                        exame
                                                    )
                                                let exameFinal =
                                                    mediaModel.validarNota(
                                                        resultadoFinal,
                                                        generoAluno
                                                    )



                                            })




                                    })



                                })



                            })



                        })



                    })



                })

            })
        })
    })
})