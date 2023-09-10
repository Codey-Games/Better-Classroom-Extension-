// Function to modify the body's background color
// Define a function with parameters
function waitToExecute(selector, styleProperty, styleValue) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.matches && node.matches(selector)) {
                    node.style[styleProperty] = styleValue;
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}










function update() {

    // HOME PAGE

    document.body.style.backgroundColor = "#1a1a1a"; //background
    document.querySelector("#kO001e > div.QRiHXd").style.backgroundColor = "#333333"; //header
    waitToExecute('.TQYOZc', 'background-color', '#333333'); // top of class boxes
    waitToExecute('.SZ0kZe', 'backgroundColor', '#333333'); // bottom of class boxes
    document.querySelector('.rpo4wf-J3yWx.Pce5Kb').style.color = "white"; //classroom text
    document.querySelector('.NMm5M').style.fill = "white"; //add classroom svg
    /*add classroom svg*/new MutationObserver(mutations => mutations.forEach(mutation => mutation.addedNodes.forEach(node => node.matches?.('.SZ0kZe') && (node.style.backgroundColor = '#333333')))).observe(document.body, { childList: true, subtree: true });
}










// Wait for the page to finish loading
window.onload = update;




//document.querySelector('.your-class-name').style.backgroundColor = "black";

//Background:

//Background Color: #333333(Dark gray)
//Alternative Dark Background: #1a1a1a
//Very Dark Background: #000000(Black)
//Menu:

//Menu Background: #222222
//Menu Text: #FFFFFF(White)
//Menu Highlight: #FFA500(Orange)
//Header:

//Header Background: #333333
//Header Text: #FFFFFF
//Header Accent: #FF5733(Orange)
//Footer:

//Footer Background: #222222
//Footer Text: #CCCCCC(Light gray)
//Footer Link: #FFA500
//Popups:

//Popup Background: #444444
//Popup Text: #FFFFFF
//Popup Close Button: #FF5733