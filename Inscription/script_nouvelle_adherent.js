const register = event => {
        event.preventDefault()
        for (let i of event.target)
            console.log(i.value)

    } //on ne modifie pas une méthoe, register c'est une fonction en paramettre submit 


document.querySelector("#Enregistrement").addEventListener('submit', register)