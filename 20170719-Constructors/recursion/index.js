function theFinalCountdown(count) {
    if (count === 0) {
        console.log("It's the final countdown");
    } else {
        console.log(`${count}`);
        console.log("Count " + count);
        theFinalCountdown(count - 1);
    }
}

theFinalCountdown(10);