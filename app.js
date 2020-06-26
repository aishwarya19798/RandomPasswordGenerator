const generate = document.querySelector('#generate');
const output = document.querySelector('#output');

generate.addEventListener('click',function(){
    let small = ['a','b','c','d','e','f','g','h','i','j','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let capital = [];
    small.forEach(i => {
        big = i.toUpperCase();
        capital.push(big);
    })
    let numbers = [];
    for(i=0;i<10;i++){
        numbers.push(i);
    }
    let special = ['!','@','#','$','%','^','&','*','=','?','_','/','~','(',')','<','>'];
    let pswd = '';
    while(pswd.length < 12){
        pswd += small[Math.floor(Math.random()*small.length)];
        pswd += capital[Math.floor(Math.random()*capital.length)];
        pswd += numbers[Math.floor(Math.random()*numbers.length)];
        pswd += special[Math.floor(Math.random()*special.length)]
    }
    console.log(pswd.length);
    
    output.innerText = pswd;
})