// SETUP MODULE START

// Set up the to-do list and task recommender
const todoList = document.querySelector('#todo-list');
const taskRecommender = document.querySelector('#task-recommender');
const todoForm = document.querySelector('#todo-form');

// SETUP MODULE END

// TASK ADDING MODULE START

// Add a new task to the to-do list when the form is submitted
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();  // prevent the form from reloading the page
    const task = event.target.task.value;  // get the task from the form input
    addTask(task);  // add the task to the to-do list
    event.target.task.value = '';  // clear the form input
});


// Add a task to the to-do list
function addTask(task) {
    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = task;
    // Add a "delete" button to the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        openPopup(); // upon deleting the task star rating pops up
        li.remove();  // remove the task from the to-do list
    });
    li.appendChild(deleteButton);
    // Add the task to the to-do list
    todoList.appendChild(li);
}

// TASK ADDING MODULE END

// TIME MODULE START

// Determine the time range
let timeRange = getTime();

function getTime(){
    // Get the current time
    const currentTime = new Date();
    let timeRange;

    if (currentTime.getHours() >= 4 && currentTime.getHours() < 8) {
    timeRange = 'Early Morning';
    } else if (currentTime.getHours() >= 8 && currentTime.getHours() < 12) {
    timeRange = 'Morning';
    } else if (currentTime.getHours() >= 12 && currentTime.getHours() < 16) {
    timeRange = 'Afternoon';
    } else if (currentTime.getHours() >= 16 && currentTime.getHours() < 20){
    timeRange = 'Evening';
    } else if (currentTime.getHours() >= 20 && currentTime.getHours() < 24){
    timeRange = 'Night';
    } else {
    timeRange = 'Late Night';
    }
    return timeRange;
}

// Get the recommendations for the current time range
let recommendations;
switch (timeRange) {
case 'Early Morning':
    recommendations = ['Brush Teeth', 'Exercise', 'Bath'];
    break;
case 'Morning':
    recommendations = ['Drink Coffee', 'Break Fast', 'Get Ready to work...'];
    break;
case 'Afternoon':
    recommendations = ['Lunch foods', 'Take a small Nap', 'Complete the works...'];
    break;
case 'Evening':
    recommendations = ['Pack the things before leaving','Buy Groceries', 'pick up laundry'];
    break;

case 'Night':
    recommendations = ['prepare dinner', 'Do your dishes', 'pack things for tommorow']
    break;
case 'Late Night':
    recommendations = ['Dinner', 'Brush your Teeth', 'Go to BED...'];
    break;
}

// TIME MODULE END

// DISPLAY MODULE START

// Get the table element
const table = document.getElementById('recommendation-table');

// Create a new table row element
const tr = document.createElement('tr');

// Create a new table cell element for the time range
const tdTimeRange = document.createElement('td');
tdTimeRange.textContent = timeRange;

document.getElementById('time').innerHTML = "TIME :  " + timeRange;

// Create a new table cell element for the recommendations
const tdRecommendations = document.createElement('td');
tdRecommendations.textContent = recommendations.join(',');

// Append the cells to the row
tr.appendChild(tdRecommendations);

// Append the row to the table
table.appendChild(tr);

// DISPLAY MODULE END

// RATING MODULE START

let popup = document.getElementById("popup");

// includes the .open-popup style in the css
function openPopup(){
	popup.classList.add("open-popup");
}

// Star Rating
function getRating(){
    let star = document.querySelectorAll('input');
    let showValue = document.querySelector('#rating-value');
    for(let i = 0; i < star.length; i++){
        star[i].addEventListener('click', function(){
            i = this.value;
        });
    let starValue = i;
    return starValue;
    }
}

// excludes the .open-popup style in the css
function closePopup(){
    let Rating = getRating();

    localStorage.setItem("Time", timeRange);
    localStorage.setItem("Rating", Rating);
    localStorage.setItem("Task", task);
    popup.classList.remove("open-popup");
}

// RATING MODULE END

// SORTING MODULE START

function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  
// SORTING MODULE END