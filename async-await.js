let heading1 = document.getElementById('one')
let heading2 = document.getElementById('two')
let heading3 = document.getElementById('thre')


let btn = document.getElementById('btn')

btn.addEventListener('click', async ()=>{
    try{
        await addcolor(heading1, 'red',1000)
        await addcolor(heading2,'yellow',1000)
        await addcolor(heading3,'pink',1000)
    }
    catch(error){
        console.log(error)
    }
})


function addcolor(element,color,time){
    return new Promise((resolve, reject)=>{
        if(element){
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time);
        }
    })
}