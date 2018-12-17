let selected = false;
let selectedPeg = false;
const selectPeg = document.querySelectorAll('.grid-item')

for (i = 0; i < selectPeg.length; i++) {
  selectPeg[i].addEventListener('click', pegClick)

}

function pegClick(evt) {
  if (!selected) {
    selected = evt.target.children[0]
  } else {
    move(evt)
  }
};
  
    function move(evt) {
      if(selected.dataset.type === '50' || selected.dataset.type === '100' || selected.dataset.type === 
      '150'){
        if(!evt.target.children[0]) {
          evt.target.insertBefore(selected, evt.target.firstChild)
          selected = false
        } else {
          var topChild = evt.target.children[0];
          var topChildSize = parseInt(topChild.dataset.type)
          var selectedChildSize = parseInt(selected.dataset.type)
        }

          if(topChildSize < selectedChildSize){
            alert("this disk is too large for the selected peg")
            selected = false
          } else if (topChildSize > selectedChildSize){
            evt.target.insertBefore(selected, evt.target.firstChild)
            selected = false
          }
      }
    }


    //evt.target.appendChild(selected)