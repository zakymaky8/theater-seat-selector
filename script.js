const soldSeats = document.querySelectorAll('.sold');
const soldSeatsArr = Array.from(soldSeats);
soldSeatsArr.forEach((sold)=>{
    sold.addEventListener('click', ()=>{
        alert('The seat is engaged')
    })
})

const seatsToBeSelected = document.querySelectorAll('.seat');
const arrOfSeats = Array.from(seatsToBeSelected);
const countDisplay = document.getElementById('count')
const seatLableList = document.getElementById('seat-lables')


let seatCount = 0;
let seatLables = [];
arrOfSeats.forEach((seat)=>{
    seat.addEventListener('click', ()=>{       
        seat.style.background = seat.style.background==='yellow' ? 'none' : 'yellow'

        switch (seat.style.background) {
            case 'yellow':
                seatCount+=1;
                countDisplay.textContent =seatCount;
                seatLables.push(seat.textContent)
                seatLableList.textContent = seatLables.join(',')
                break;
            case 'none':
                seatCount-=1
                countDisplay.textContent =seatCount;
                let i = seatLables.indexOf(seat.textContent)
                seatLables.splice(i,1);
                seatLableList.textContent = seatLables.join(',')
                break;
        }
        updateTotalCost()
    })
})


const totalPrice = document.getElementById('total-price')
totalPrice.style.color = 'red';
function updateTotalCost() {
    switch (movieLists.value) {
        case 'The Matrix Resurrections':
            totalPrice.textContent='$'+ 12.50*+seatCount;
            break;
        case 'Spider-Man: No Way Home':
            totalPrice.textContent='$' + 14.75*+seatCount;
            break;
        case 'Dune':
            totalPrice.textContent='$' + 11.25*+seatCount;
            break;
        case 'jA Quiet Place Part II':
            totalPrice.textContent='$' + 10.00*+seatCount;
            break;
    }
}

const movieName = document.querySelector('#movie-name');
const movieLists = document.querySelector('select');
movieName.textContent = 'Dune';
movieLists.addEventListener('change',()=>{
    updateTotalCost()
    movieName.textContent = movieLists.value;

})

//flipping message
const h1 = document.querySelector('#project');
function showMessage() {
    h1.textContent = 'Theater seat selector';
}
document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showMessage, 6000)
})