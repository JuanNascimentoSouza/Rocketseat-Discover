import axios from "axios"

axios
    .get('https://api.github.com/users/juannascimentosouza')
    .then(res => axios.get(user.repos_url))
    .then(repos => console.log(response.data.repos.data))
    .catch( erro => console.log(erro))