let cards = document.querySelectorAll('.goods__card');

for (let card of cards){
  card.addEventListener('mouseover', function(){
        let visit = document.createElement('div');
        let button = document.createElement('button');
        let shadow = document.createElement('div')
        shadow.classList.toggle('shadow__visit')
        button.textContent = 'Подробнее'
        button.classList.toggle('card__visit')
        visit.classList.toggle('button__visit');

        card.appendChild(visit);
        visit.appendChild(shadow)
        visit.appendChild(button)
        

        card.addEventListener('mouseout', function(){
            visit.remove();
            button.remove()
        })
    })
    
}
