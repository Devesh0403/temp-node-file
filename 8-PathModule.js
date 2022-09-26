const path=require('path')
console.log(path.sep)

const pathname=path.join("folder","this","that")
console.log(pathname);

const base=path.basename(pathname)
console.log(base);