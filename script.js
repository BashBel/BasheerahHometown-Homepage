var Visit_Lagos;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


Visit_Lagos = ['Beaches', 'Local Markets', 'Historical Sites', 'Cultural Spots'];


document.getElementById('button1').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('nameInput').value;
  Visit_Lagos.unshift(document.getElementById('nameInput').value);

  element_list.appendChild(new_li);

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_Visit_Lagos = document.getElementById('Visit_Lagos');
  let new_ul = document.createElement('ul');
  new_ul.innerText = randomMember(Visit_Lagos);

  element_Visit_Lagos.appendChild(new_ul);

});
