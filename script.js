let selected = false;

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
  evt.target.insertBefore(selected, evt.target.firstChild)
  selected = false
}