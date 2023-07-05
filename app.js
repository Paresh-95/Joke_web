// https://icanhazdadjoke.com/

document.getElementById('button').addEventListener('click',joke )

async function joke() {
    let config={
        headers:{
            Accept:"application/json"
        },
    };

    let a=await fetch("https://icanhazdadjoke.com/",config);
    let b=await a.json();
    document.getElementById('jokee').innerHTML=b.joke;
  
}
