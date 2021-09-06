const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            'accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    //after fetching , we get response from json
    //but we dont want full json
    //we just wants data from json

    // .then((data) => console.log(data))

    // see output by commentout ths line. we get data of id, joke and status

    // now we want only joke from that and to insert at our page
    
    .then((data) => { 
        jokeEl.innerHTML = data.joke
    })
}