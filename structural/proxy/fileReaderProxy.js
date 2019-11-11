class fileReaderProxy {

    constructor(fileReader) {
        this.fileReader = fileReader;
    }

    readFile() {
        if (this.fileReader.data) {
            console.log('from cache');
            return this.fileReader.data;
        }

        console.log('from file reader');
        return this.fileReader.readFile();
    }
}

module.exports = fileReaderProxy;