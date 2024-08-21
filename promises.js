

const promise = new Promise((resolve,reject)=>{
    const randomenum = Math.random()
    if (randomenum > 0.5)
        {
            resolve(randomenum)
        }
    else{
        reject(new Error('the random no. is less then 0.5'))
    }
})

promise.then((result)=>{
    console.log('the randome no. is',result)
})

.catch((error)=>{
    console.log(error)
})