const defaultbutton = () => {
   document.querySelector("body").className = ''; 
};

const highcontrastbutton = () => {
   document.querySelector("body").className = 'high-contrast';
};

const oceanbutton = () => {
   document.querySelector("body").className = 'ocean';
};

const desertbutton = () => {
   document.querySelector("body").className = 'desert';
};


document.querySelector("#default").addEventListener('click', defaultbutton);
document.querySelector("#high-contrast").addEventListener('click', highcontrastbutton);
document.querySelector("#ocean").addEventListener('click', oceanbutton);
document.querySelector("#desert").addEventListener('click', desertbutton);
