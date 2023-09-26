const rank = document.querySelector('.rank');
const details = document.querySelector('.description');
const indicators = document.querySelectorAll('.switch');
const image = document.querySelector('.crew-member-photo img');
const named = document.querySelector('.name');


const crewData = () => {
    fetch('data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            rank.textContent = data.crew[0].role
            details.textContent = data.crew[0].bio
            named.textContent = data.crew[0].name
            indicators[0].classList.add('active')
            image.src = `${data.crew[0].images.png}`
            indicators.forEach(indicator => {
                indicator.addEventListener('click', () => {
                    const indicatorId = indicator.id;
                    indicators.forEach(element => {
                        element.classList.remove('active')
                    })
                    indicator.classList.add('active')
                    rank.textContent = data.crew[indicatorId].role
                    details.textContent = data.crew[indicatorId].bio
                    named.textContent = data.crew[indicatorId].name
                    image.src = `${data.crew[indicatorId].images.png}`
                })
            })
        })
}
crewData();
