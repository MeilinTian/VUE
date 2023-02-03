import thenFs from 'then-fs'

thenFs.readFile('./files/1.txt', 'utf-8').then(r1 => { console.log(r1) }, err1 => { console.log(err1.message) })
thenFs.readFile('./files/2.txt', 'utf-8').then(r2 => { console.log(r2) }, err2 => { console.log(err2.message) })
thenFs.readFile('./files/3.txt', 'utf-8').then(r3 => { console.log(r3) }, err3 => { console.log(err3.message) })