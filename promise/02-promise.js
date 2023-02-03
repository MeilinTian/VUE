import thenFs from "then-fs"

function promise_1() {
    thenFs.readFile('./files/1.txt', 'utf8')
        .then((r1) => {
            console.log(r1)
            return thenFs.readFile('./files/2.txt', 'utf8')
                .then((r2) => {
                    console.log(r2)
                    return thenFs.readFile('./files/3.txt', 'utf8')
                        .then((r3) => {
                            console.log(r3)
                        })
                })
        })
}

function promise_catch() {
    thenFs.readFile('./files/11.txt', 'utf8')
        .then(r1 => {
            console.log(r1)
            return thenFs.readFile('./files/2.txt', 'utf8')
        })
        .then(r2 => {
            console.log(r2)
            return thenFs.readFile('./files.3.txt', 'utf8')
        })
        .then(r3 => {
            console.log(r3)
        })
        .catch(err => {
            console.log(err.message)
        })
}
// promise_catch()

//如果不希望前面的错误导致后续的.then无法正常执行，可以把catch放在前面
function promise_catch_2() {
    thenFs.readFile('./files/11.txt', 'utf8')
        .catch(err => {
            console.log(err.message)
        })
        .then(r1 => {
            console.log(r1)
            return thenFs.readFile('./files/2.txt', 'utf8')
        })
        .then(r2 => {
            console.log(r2)
            return thenFs.readFile('./files.3.txt', 'utf8')
        })
        .then(r3 => {
            console.log(r3)
        })
}

// promise_catch_2()

function promise_all() {
    const promiseArr = [
        thenFs.readFile('./files/1.txt', 'utf8'),
        thenFs.readFile('./files/2.txt', 'utf8'),
        thenFs.readFile('./files/33.txt', 'utf8')
    ]

    // 将Promise的数组，作为Promise.all()的参数
    Promise.all(promiseArr)
        .then(([r1, r2, r3]) => {
            console.log(r1, r2, r3)
        })
        .catch(err => {
            console.log(err.message)
        })
}

// promise_all()

function promise_race() {
    const promiseArr = [
        thenFs.readFile('./files/1.txt', 'utf8'),
        thenFs.readFile('./files/2.txt', 'utf8'),
        thenFs.readFile('./files/3.txt', 'utf8')
    ]

    // 将Promise的数组，作为Promise.all()的参数
    Promise.race(promiseArr)
        .then((result) => {
            console.log(result)
        })
        .catch(err => {
            console.log(err.message)
        })
}

// promise_race()

(function() {
    // 1. 方法： getFile 接受一个形参fpath，表示要读取文件的路径
    function getFile(fpath) {
        // 方法返回值为Promise的实例对象
        return new Promise(function(resolve, reject) {
            thenFs.readFile(fpath, 'utf8', (err, dataStr) => {
                if (err) return reject(err)
                resolve(dataStr)
            })
        })
    }
    getFile('./files/1.txt').then((r1) => {
        console.log(r1)
    }, (err) => {
        console.log(err.message)
    })
})();