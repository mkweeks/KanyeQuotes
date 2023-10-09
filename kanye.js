let text = document.querySelector(".KanyesWords")
let nextButton = document.querySelector(".Next")

nextButton.addEventListener("click", async () => {
    try {
        const response = await fetch("https://api.kanye.rest", {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json()
            text.innerHTML = data.quote;
        }
        else {
            text.innerHTML = "An error occured"
        }
    } catch (error) {
        console.log("An error occured and the error is", error)
        text.innerHTML = `An error occured and the error is ${error}`
    }

})