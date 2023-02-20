const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let el = document.querySelectorAll('.fancy-header');

for (i in el) {
    el[i].onmouseenter = event => {
        let iterations = 0;
    
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split('')
            .map((letter, index) => {
                if(index < iterations || ['(',')',' '].includes(event.target.dataset.value[index]) ) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 52)]
            })
            .join('');
    
            if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    
            iterations += 1 / 2;
        }, 35);
    }
}
