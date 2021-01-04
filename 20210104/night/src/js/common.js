
const colorChip = document.querySelectorAll('span');

function changeColor(event) {
  // reset and remove active class first
  document.querySelectorAll('span.active').forEach(function(item){ //span.active.forEach 
    item.classList.remove('active');
  });
  // add active class to selected menu item
  event.target.classList.add('active');
}

colorChip.forEach(function(item){ //item - span(parameter)
  item.addEventListener('click', function(event){ //item(selected) click -> function
    changeColor(event);
  });
});