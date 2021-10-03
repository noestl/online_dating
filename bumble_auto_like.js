var counter = 0;

// A single iteration of your loop
// log the current value of counter as an example
// then wait before doing the next iteration
function printCounter() {
    console.log(counter);
    counter++;
    document.querySelector("#main > div > div.page__layout > main > div.page__content-inner > div > div > span > div.encounters-user__controls > div > div:nth-child(2) > div > div:nth-child(3) > div").click()
    if (counter < 100)
        setTimeout(printCounter, 2200);
}

// Start the loop    
printCounter();