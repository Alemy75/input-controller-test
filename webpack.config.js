const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js", // Входной файл для сборки
    output: {
        filename: "bundle.[chunkhash].js", // Шаблон имени выходного файла с использованием chunkhash
        path: path.resolve(__dirname, "dist"), // Путь к папке dist
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Расширение файлов для обработки
                exclude: /node_modules/, // Исключить папку node_modules из обработки
                use: "babel-loader", // Использовать babel-loader для обработки JS файлов
            },
            {
                test: /\.css$/, // Расширение файлов для обработки
                use: ["style-loader", "css-loader"], // Использовать style-loader и css-loader для обработки CSS файлов
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192, // Если изображение меньше этого размера, оно будет встроено в код в формате Data URI
                            fallback: "file-loader", // Используется, если изображение превышает лимит
                            outputPath: "images", // Папка, в которую будут сохранены изображения после сборки
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // Очистить папку dist при каждой сборке
        new HtmlWebpackPlugin({
            template: "./src/index.html", // Путь к HTML-шаблону
        }),
        require("autoprefixer"),
    ],
};