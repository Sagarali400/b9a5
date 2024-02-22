document.addEventListener("DOMContentLoaded", function () {
    // Get all seat elements
    const seats = document.querySelectorAll(".grid div[id='seat']");

    // Total price variable
    let totalPrice = 0;

    // Maximum seats user can buy
    const maxSeatsToBuy = 4;

    // Add click event listener to each seat
    seats.forEach((seat) => {
        seat.addEventListener("click", function () {
            // Check if the seat is already selected
            if (seat.classList.contains("selected")) {
                // If selected, remove from total price and reset color
                totalPrice -= 500;
                seat.classList.remove("selected");
            } else if (totalPrice < maxSeatsToBuy * 500) {
                // If not selected and user can buy more seats, add to total price and set color to green
                totalPrice += 500;
                seat.classList.add("selected");
            }

            // Display the selected seat details in div-new
            displaySelectedSeat();

            // Update total price
            displayTotalPrice(totalPrice);
        });
    });

    // Function to display selected seat details
    function displaySelectedSeat() {
        const divNew = document.querySelector(".div-new");

        // Clear previous seat details and reset classes
        divNew.innerHTML = "";
        divNew.classList.remove("economy");

        // Add the "economy" class to div-new
        if (totalPrice > 0) {
            divNew.classList.add("economy");
        }

        // Iterate over selected seats and display details
        seats.forEach((seat, index) => {
            if (seat.classList.contains("selected")) {
                const seatDetailsDiv = document.createElement("div");
                const seatLabel = getSeatLabel(index);
                seatDetailsDiv.innerHTML = `
                    <p>Seat: ${seatLabel}</p>
                    <p>Class: Economy</p>
                    <p>Price: $500</p>
                `;
                divNew.appendChild(seatDetailsDiv);
            }
        });
    }

    // Function to generate seat label based on index
    function getSeatLabel(index) {
        const row = String.fromCharCode('A'.charCodeAt(0) + Math.floor(index / 4));
        const column = (index % 4) + 1;
        return `${row}${column}`;
    }

    // Function to display total price
    function displayTotalPrice(total) {
        const totalPriceElement = document.getElementById("total-price");
        const totalPriceText = `BDT: ${total}`;
        totalPriceElement.textContent = totalPriceText;
    }
});


