let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    let getusers = async () => {
        let input = document.querySelector('.input').value
        let data = await fetch(`https://api.nationalize.io/?name=${input}`)
        let res = await data.json()
        let result = res.country

        let ul = document.querySelector('.list')
        ul.innerHTML = ''  // Eski natijalarni tozalash

        result.forEach(elem => {
            let li = document.createElement('li')
            li.classList = 'country'
            li.innerHTML = `
                 ${elem.country_id}
                 <strong>${(elem.probability * 100).toFixed(2)}%</strong>
            `
            ul.append(li)

        });
    }
    getusers()
})




