// var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Assignment Name: JavaScript Video Basics
// Due Date: See Canvas
// Goals:
// 1. Demonstrate ability to access and modify HTML general DOM elements.
// 2. Demonstrate ability to add eventListeners (not to add events to the HTML code).
// 3. Demonstrate ability to access and modify a video element.
// 4. Demonstrate ability to use problem-solving with JS operators to modify element attributes.
// 5. Demonstrate the ability to create output via the console.
// 6. Demonstrate ability to use JS to utilize existing code (particularly CSS code).

// Resources:
// You are provided with a repo that contains the necessary HTML and CSS code, as well as a video file with transcripts.
// You will need to edit the JS file to transform the original page to one that has the same functionality as our example.
// Remember, resource files often have a few bugs in them to provide an opportunity to debug and problem-solve.
// Example repo: https://github.com/UMSIComplexWebDesign/hw7-2021

// Requirements:
// 01. All files and folders present, HTML in proper format, no styles in HTML, etc. 
// Do not make any changes to the HTML unless it is to fix validation errors and/or link to the JavaScript.
// Do not add any classes or ids.
// 02. Validate all of the code - do this throughout the entire process.

// Functionalities to Implement

// Page load: Initialize the video element and turn off autoplay and turn off looping.
let video = document.getElementById('player1');
window.onload = function () {
    video.autoplay = false;
    video.loop = false;
    video.currentTime = 0;
    video.muted = false;
};



// Play Button: Play the video and update the volume information.
const playButton = document.getElementById('play');
playButton.addEventListener("click", function (){
	video.play();
	document.getElementById("volume").innerHTML(`100`);
	// console.log("play");
});

// Pause Button: Pause the video.
const pauseButton = document.getElementById('pause');
pauseButton.addEventListener("click", function (){
	video.pause();
	// console.log("pause");
});

// Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
// window.addEventListener("slower", function(){
// 	video.pause();
// });
const slowerButton = document.getElementById('slower');
slowerButton.addEventListener('click', function () {
    video.playbackRate /= 1.1;
    console.log(`New speed: ${video.playbackRate}`);
});

// Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.
//           The change should be proportional to the slow down. If you slow down three times and then speed up three times, 
//           you should be within 5 digits of 100% again.
const fasterButton = document.getElementById('faster');
fasterButton.addEventListener('click', function () {
    video.playbackRate *= 1.1;
    console.log(`New speed: ${video.playbackRate}`);
});

// Skip Ahead: Advance the current video by 10 seconds. If the video length has been exceeded, go back to the start of the video.
//             Log the current location of the video.
 const skipButton = document.getElementById('skip');
 skipButton.addEventListener('click', function () {
    video.currentTime += 10;

    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log(`Current location: ${video.currentTime}`);
 });

// Mute: Mute/unmute the video and update the text in the button.
const muteButton = document.getElementById('mute');
muteButton.addEventListener('click', function () {
    if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteButton.innerHTML = "Unmute";
    }
});

// Volume Slider: Change the volume based on the slider and update the volume information.
const volumeSlider = document.getElementById('slider');
volumeSlider.addEventListener('input', function () {
    video.volume = volumeSlider.value / 100;

    const vol = document.getElementById("volume");
    vol.innerHTML = `${video.volume * 100}%`;
});

// Styled: Utilize the existing oldSchool class on the video element.
const vintageButton = document.getElementById('vintage');
vintageButton.addEventListener('click', function () {
    // Toggle the 'oldSchool' class on the video element
    video.classList.add('oldSchool');
});
// Original: Remove the oldSchool class from the video.
const origButton = document.getElementById('orig');
origButton.addEventListener('click', function () {
    // Remove the 'oldSchool' class from the video element
    video.classList.remove('oldSchool');
});
// Example Demo link is posted on Canvas.

// Tips:
// 1. IMPORTANT: The video format may not play in many versions of Safari. 
// Develop in Chrome or Firefox. The autograder will ONLY be testing in Chrome.
// 2. Look things up! W3Schools has a great HTML Audio/Video DOM Reference, as does https://www.html5rocks.com/en/tutorials/video/basics/.
// 3. Many of these functions alter more than one DOM element. Ensure you check your code carefully as many update both the volume 
//    and the video element.
// 4. Make sure "speed up" is the reverse of "slow down." If you hit slow down, then speed up, you should be back at the original speed.
// 5. Don’t forget the resource from the readings: HTML Audio/Video DOM Reference.
// 6. It is okay if you have errors about the favicon.

// Submission Requirements:
// Submit a link to your working demo repo in Canvas. 
// We want to see the deployed page, not the code. The URL should be similar to:
// http://www.<your-user-name>.github.io/hw6-2024

// Deeper Questions:
// 1. Can you add something that shows the current runtime of the video?
// 2. Can you have the video element show a thumbnail?
// 3. Can you use a different video and get it to work?
// 4. Is your player accessible? Including the slider? See: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia
