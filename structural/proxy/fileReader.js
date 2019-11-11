const fs = require('fs');

class fileReader {
    readFile() {
        const obj = fs.readFileSync('./data.txt');
        this.data = JSON.parse(obj);
        
        return this.data;
    }
}

module.exports = fileReader;