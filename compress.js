const zipdir = require('zip-dir');
const path = require('path');
const fs = require('fs');


// Obtém o nome do projeto (o nome do diretório atual)
const nomeDoProjeto = path.basename(process.cwd());



const origem = `./${nomeDoProjeto}.php`;
const destino = `./build/${nomeDoProjeto}.php`;


fs.copyFile(origem, destino, (err) => {
    if (err) {
        console.error('Erro ao copiar o arquivo:', err);
    }
    // Nome do arquivo zip será o nome do projeto com a extensão .zip
    const arquivoZip = `${nomeDoProjeto}.zip`;
    // Comprime a pasta
    zipdir('./build', { saveTo: arquivoZip }, function (err, buffer) {
        if (err) {
            console.error('Erro ao comprimir pasta:', err);
        } else {
            console.log('Pasta comprimida com sucesso!');
        }
    });
});

