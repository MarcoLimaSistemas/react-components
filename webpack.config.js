// Importa o módulo 'path' do Node.js para lidar com caminhos de diretórios e arquivos
const path = require("path");

module.exports = {
    // Define os pontos de entrada para o Webpack. Cada chave representa um bundle separado.
    entry: {
        selectSearch: "./src/components/selectSearch.js", // Ponto de entrada para o SelectSearch
        fragosoComponent: "./src/components/fragosoComponent.js", // Ponto de entrada para o Checkboxes
        larissaComponent: "./src/components/larissaComponent.js", // Ponto de entrada para o Checkboxes
        theme: "./src/theme.js", // Ponto de entrada para o SelectSearch
        observerElements: "./src/observerElements.js", // Ponto de entrada para o SelectSearch
    },
    // Configura a saída dos arquivos processados pelo Webpack
    output: {
        // Define o diretório de saída como o diretório 'build' na raiz do projeto
        path: path.resolve(__dirname, "build"),
        // Define o nome do arquivo de saída usando o nome do ponto de entrada
        filename: "[name].js",
    },
    // Configura os loaders para os módulos do projeto
    module: {
        rules: [
            {
                // Aplica esta regra a todos os arquivos que terminam em .js
                test: /\.js$/,
                // Exclui o diretório node_modules dos arquivos que serão processados pelo loader
                exclude: /node_modules/,
                // Usa o 'babel-loader' para transpilar os arquivos JavaScript
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    // Define dependências externas que não devem ser incluídas nos bundles gerados
    externals: {
        // Indica que o React estará disponível globalmente como 'React'
        react: "React",
        // Indica que o ReactDOM estará disponível globalmente como 'ReactDOM'
        "react-dom": "ReactDOM",
        // Indica que o wp.element do WordPress estará disponível globalmente como 'wp.element'
        "wp-element": "wp.element",
    },
};


