const path = require('path');
module.exports = {
    entry: './assets/app.js',
    watch: true,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};