const FileReader = require('./fileReader');
const FileReaderProxy = require('./fileReaderProxy');

const fileReader = new FileReader();
const fileReaderProxy = new FileReaderProxy(fileReader);

let fileData = fileReaderProxy.readFile();
console.log(fileData);
fileData = fileReaderProxy.readFile();
console.log(fileData);

// this part is with using es6 proxy

let p = new Proxy(new FileReader(), { get(obj, prop){
    
    if (prop === 'readFile') {
        if (obj.data) {  
             console.log('cache')
            return obj.data
        }    
        console.log('not cache');
        return obj[prop]();    
    }
}});

console.log(p.readFile);
console.log(p.readFile);