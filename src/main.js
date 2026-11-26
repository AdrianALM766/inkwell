//El codigo se dividira en 3 partes

//REFERENCIAS AL DOM
const root = document.documentElement;
const viewLibrary = document.getElementById('view-library');
const viewReader = document.getElementById('view-reader');
const booksGrid = document.getElementById('books-grid');

//?SEARCH
const searchBook = document.getElementById('search-input');
//!BOTONES
//para regresar a la bibliteca
const btnHome = document.getElementById('btn-home'); 
const btnAdd = document.getElementById('btn-add');
const btnDelete = document.getElementById('btn-delete');
//botones para añadidos del tema y tamaño de letra.
const btnSettings = document.getElementById('btn-settings');
const settingsPopover = document.getElementById('settings-popover');
const btnDarkTheme = document.getElementById('btn-dark-theme');
const btnLightTheme = document.getElementById('btn-light-theme');
const btnPapiroTheme = document.getElementById('btn-papiro-theme');
const btnSmallLetter = document.getElementById('btn-small-letter');
const btnBigLetter = document.getElementById('btn-big-letter');

//const theme = document.querySelectorAll() nota no se usar esto asi que explicacion en este caso

//ESTADO INICIAL
//! THEME pasado.
const savedTheme = localStorage.getItem("theme");
if (savedTheme){
  changeTheme(savedTheme);
}
//!TAMAÑO DE LETRAS
//tamaño de letra salvado para que se mantenga como el de antes me inspire en el del theme
let fontSize = 18;
const savedFontSize = localStorage.getItem("fontSize");
if (savedFontSize){
  fontSize = parseInt(savedFontSize)
  root.style.setProperty('--reader-font-size', fontSize + 'px');
}

// btnHome.addEventListener("click", () =>{
//   console.log("arre compa bochi");
// });

//EVENTOS
//cambiar fuente?
function changeFontSize(delta){
  fontSize += delta;
  if(fontSize < 14){
    fontSize = 14;
  } else if (fontSize > 28){
    fontSize = 28;
  }
  root.style.setProperty('--reader-font-size', fontSize+'px');
  //guardo el valor actual para usarlo despues
  localStorage.setItem("fontSize", fontSize);
}
//cambiar estilos esta es la forma en que lo hice yo
function changeTheme(newTheme){
  root.dataset.theme = newTheme; //basicamente lo que hicmos arriba para cambiar el tema
  localStorage.setItem("theme", newTheme);
}
btnDarkTheme.addEventListener("click", ()=>{
  changeTheme("dark");
});
btnLightTheme.addEventListener("click", ()=>{
  changeTheme("light");
});
btnPapiroTheme.addEventListener("click", ()=>{
  changeTheme("papiro");
});
//mostrar settings?
//asumo que se hace asi:
btnSettings.addEventListener("click", ()=>{
  settingsPopover.classList.toggle('hidden');
});

//ingresar en los libros
function showView(viewName){
  if(viewName === 'reader'){
    viewLibrary.classList.add('hidden');
    viewReader.classList.remove('hidden');
  } else {
    viewLibrary.classList.remove('hidden');
    viewReader.classList.add('hidden');
  }
}

//bton para ingresar en la vista de los libros
booksGrid.addEventListener("click", (e)=>{
  if (e.target.closest('.book-card')){
    showView('reader');
  }
});

//para volver al home
btnHome.addEventListener("click", ()=>{
  showView("library");
});

//agrandar y bajar tamaño de letras
btnBigLetter.addEventListener("click", ()=>{
  changeFontSize(2);
});
btnSmallLetter.addEventListener("click", ()=>{
  changeFontSize(-2);
})
