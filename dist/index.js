const spanElements = document.getElementsByTagName('span');

for (const el of spanElements){
    el.addEventListener('mouseover', () => el.style.color = '#d4af37');

    el.addEventListener('mouseout', () => el.style.color = 'ivory');
}


    
