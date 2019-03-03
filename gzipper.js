const gzipAll = require('gzip-all')
gzipAll('./dist/**/*.*(js|css|html)').then(newFiles => {
    console.log('yay, created', newFiles.length, 'compressed files!')
});