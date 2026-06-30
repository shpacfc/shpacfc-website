// SH PAC FC Website

document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".button");

    if(button){

        button.addEventListener("click", function(e){

            e.preventDefault();

            alert("Thank you for your interest!\n\nBooking for FREE trials will be available soon.\n\nFor now please email:\n\ninfo@shpacfc.com");

        });

    }

});
