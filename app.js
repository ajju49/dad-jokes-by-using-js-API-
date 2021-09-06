// method 2

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            'accept' : 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    //here we added const res (response) function to fetch
    // whenever we use await inside a function  ,
    //we have to label that function as async  (line no.8)

    const data = await res.json()
    jokeEl.innerHTML = data.joke
    
}