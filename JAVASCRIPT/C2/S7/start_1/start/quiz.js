// DOMS ELEMENTS  ---------------------------------------------------------
const dom_start = document.querySelector("#start");
const dom_quiz = document.querySelector("#quiz");
const dom_score = document.querySelector("#scoreContainer");

// FUNCTIONS ---------------------------------------------------------

// Hide the given element
function hide(element) {
  // TODO
  dom_quiz.style.display = "none";
  dom_start.style.display = 'block';
  return element
}

// SHow the given element
function show(element) {
  // TODO
  dom_quiz.style.display = "block";
  dom_start.style.display = "none";
  return element
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);

dom_start.addEventListener('click', show)