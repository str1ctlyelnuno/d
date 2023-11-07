var titleBar = document.getElementById("title-bar");
var exit = document.getElementById("exit");
var square = document.getElementById("square");
var minimize = document.getElementById("minimize");
var x = document.getElementById("myAudio");

////////////////// Hover listeners //////////////////
minimize.addEventListener('mouseover', function handleMouseOver() {
  minimize.style.backgroundColor = '#B9B9B9';
  minimize.style.cursor = 'context-menu';
});

minimize.addEventListener('mouseout', function handleMouseOut() {
  minimize.style.backgroundColor = '#E0DAD6';
  minimize.style.cursor = 'default';
});

square.addEventListener('mouseover', function handleMouseOver() {
  square.style.backgroundColor = '#B9B9B9';
  square.style.cursor = 'context-menu';
});

square.addEventListener('mouseout', function handleMouseOut() {
  square.style.backgroundColor = '#E0DAD6';
  square.style.cursor = 'default';
});

exit.addEventListener('mouseover', function handleMouseOver() {
  exit.style.backgroundColor = 'red';
  exit.style.cursor = 'pointer';
});

exit.addEventListener('mouseout', function handleMouseOut() {
  exit.style.backgroundColor = '#E0DAD6';
  exit.style.cursor = 'pointer';
});

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});






//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#wins');
var title = $('#title-bar');

title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});





var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");


cancel.onclick = function() {
  modal.style.display = "none";
  window.location.reload();

}

span.onclick = function() {
  modal.style.display = "none";
  window.location.reload();

}







const viewButtons = document.querySelectorAll('.view-btn');
const filesList = document.querySelector('#files-list');

// Add click event listeners to view buttons
viewButtons.forEach(button => {
  button.addEventListener('click', function () {
    const view = this.dataset.view;
    toggleView(view);
    setActiveViewButton(view);
  });
});

// Toggle view based on user selection
function toggleView(view) {
  switch (view) {
    case 'icons':
      filesList.classList.add('mega-icons');
      filesList.classList.remove('big-icons', 'normal-icons', 'details');
      break;
    case 'big-icons':
      filesList.classList.add('big-icons');
      filesList.classList.remove('mega-icons', 'normal-icons', 'details');
      break;
    case 'normal-icons':
      filesList.classList.add('normal-icons');
      filesList.classList.remove('mega-icons', 'big-icons', 'details');
      break;
    case 'table':
      filesList.classList.add('details');
      filesList.classList.remove('mega-icons', 'big-icons', 'normal-icons');
      break;}

}

// Set the active view button
function setActiveViewButton(view) {
  viewButtons.forEach(button => {
    if (button.dataset.view === view) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}


const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
document.getElementById("bck").style.display = "none";
document.getElementById("myModal").style.display = "block";

}









