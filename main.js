import {getPlans} from "./plans.js";

const plansEl = document.querySelector('#plans');

getPlans()
    .then(data =>{
        console.log(data)
        // data.forEach(item => console.log(item))
        // data.forEach(item => showTravelPlans(item))
    })

function showTravelPlans(item = {}) {

  // console.log("works")
  const div = document.createElement('div');
  div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">${item['date']}</h3>
            <p class="text-gray-600">Destination: ${item['location']}</p>
            <p>${item['plan']}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">View More</button>
            </div>
          </div>
        </div>
    `

  plansEl.appendChild(div);
}