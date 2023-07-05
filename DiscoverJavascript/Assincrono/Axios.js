import axios from "axios"

axios.get('https://api.github.com/users/juannascimentosouza')
    .then(res => {
        console.log(res.data)
    })