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
var draggable = $('#win');
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

// Get the button that opens the modal
var btn1 = document.getElementById("doc1");
var btn2 = document.getElementById("doc2");
var btn3 = document.getElementById("doc3");
var btn4 = document.getElementById("doc4");
var btn5 = document.getElementById("doc5");
var btn6 = document.getElementById("doc6");
var btn7 = document.getElementById("doc7");
var btn8 = document.getElementById("doc8");
var btn9 = document.getElementById("doc9");
var btn10 = document.getElementById("doc10");
var btn11 = document.getElementById("doc11");
var btn12 = document.getElementById("doc12");
var btn13 = document.getElementById("doc13");
var btn14 = document.getElementById("doc14");
var btn15 = document.getElementById("doc15");
var btn16 = document.getElementById("doc16");
var btn17 = document.getElementById("doc17");
var btn18 = document.getElementById("doc18");
var btn0 = document.getElementById("doc0");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");
var move = document.getElementById("move");


var phase1 = document.getElementById("phase1");
var phase2 = document.getElementById("phase2");
var move1 = document.getElementById("move1");
var move2 = document.getElementById("move2");



// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
btn5.onclick = function() {
  modal.style.display = "block";
}
btn6.onclick = function() {
  modal.style.display = "block";
}
btn7.onclick = function() {
  modal.style.display = "block";
}
btn8.onclick = function() {
  modal.style.display = "block";
}
btn9.onclick = function() {
  modal.style.display = "block";
}
btn10.onclick = function() {
  modal.style.display = "block";
}
btn11.onclick = function() {
  modal.style.display = "block";
}
btn12.onclick = function() {
  modal.style.display = "block";
}
btn13.onclick = function() {
  modal.style.display = "block";
}
btn14.onclick = function() {
  modal.style.display = "block";
}
btn15.onclick = function() {
  modal.style.display = "block";
}
btn16.onclick = function() {
  modal.style.display = "block";
}
btn17.onclick = function() {
  modal.style.display = "block";
}
btn18.onclick = function() {
  modal.style.display = "block";
}
btn0.onclick = function() {
  modal.style.display = "block";
}

cancel.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}


move.onclick = function() {
  phase1.style.display = "none";
  phase2.style.display = "block";
  move1.style.display = "none";
  move2.style.display = "block";

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









