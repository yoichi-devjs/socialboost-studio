// get the textarea where the user types product idea
const input = document.getElementById("product-gen");
// get the generated button
const button = document.getElementById("generate");
// get the output title
const title = document.getElementById("output-title");
// get the output text container
const text = document.getElementById("output-text");

// run a function when the user clicks generate button
button.addEventListener("click", function() {

    // get what the user types in textarea
    const userInput = input.value;
    // create a dots variable and set it to 0
    let dots = 0;

    
    // implement a condition that "warns" not to click with empty input field
    if(userInput.trim() === "") {
        // show the warning title
        title.textContent = "Please enter a product idea";
        // show a "helper" message
        text.textContent = "Describe your product to generate results.";

        // stop the function execution with return
        return;
    }
    
    // disable button immediately
    button.disabled = true;

    // create a container that holds the "charging phase" sentences
    const loadingStages = [
        "Analyzing input...",
        "Generating variations...",
        "Refining output...",
        "Finalizing results..."
    ];
    // create a stageIndex variable
    let stageIndex = 0;
    
    // show the "loading" title
    title.textContent = loadingStages[0];

    
    const loadingInterval = setInterval(function() {
        
        stageIndex++;

        if(stageIndex < loadingStages.length) {
            text.textContent = loadingStages[stageIndex];
        }
    }, 600);
    
    // simulate a delay like AI processing    
    setTimeout(function() {

        clearInterval(loadingInterval);

        // generate content based on input
        const results = generateDescriptions(userInput);
        // update title after generation
        title.textContent = "Generated Variations";

       text.innerHTML = `
    <div class="result-card">
        <h4>Professional</h4>
        <p id="prof-text">${results.professional}</p>
        <button class="copy-btn" data-copy="prof-text">Copy</button>
    </div>

    <div class="result-card">
        <h4>Sales</h4>
        <p id="sales-text">${results.sales}</p>
        <button class="copy-btn" data-copy="sales-text">Copy</button>
    </div>

    <div class="result-card">
        <h4>Short</h4>
        <p id="short-text">${results.short}</p>
        <button class="copy-btn" data-copy="short-text">Copy</button>
    </div>

    <div class="result-card">
        <h4>Social</h4>
        <p id="social-text">${results.social}</p>
        <button class="copy-btn" data-copy="social-text">Copy</button>
    </div>
`;

        // re-enable button after generation
        button.disabled = false;

        // setting the timer to 2000, meaning 2 seconds
    }, 2000);
})

text.addEventListener("click", function (e) {

    if (e.target.classList.contains("copy-btn")) {

        const targetId = e.target.getAttribute("data-copy");
        const textToCopy = document.getElementById(targetId).innerText;

        navigator.clipboard.writeText(textToCopy);

        e.target.textContent = "Copied!";

        setTimeout(function () {
            e.target.textContent = "Copy";
        }, 1000);
    }
});