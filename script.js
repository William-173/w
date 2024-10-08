// Image sources for glitch effect
const images = [
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1727700672896_08f5056e.webp", // Image 1
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728098298012_e13985ab.webp", // Image 2
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728098316358_af8ef022.webp", // Image 3
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728098433189_8a074574.webp", // Image 4
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728373193955_52422b33.webp" // New Image
  ];
  
  let currentIndex = 0;
  let imageChangeInterval = 150; // Default interval
  const mainImage = document.getElementById("main-image");
  
  // Function to change image randomly
  function changeImage() {
    const randomChange = Math.random();
    
    if (randomChange < 0.2) {
      // 20% chance to revert to the previous image
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      // 80% chance to change to the next image
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    mainImage.src = images[currentIndex];
  }
  
  // Change image every 0.15 seconds to create a glitch effect
  let imageChangeIntervalId = setInterval(changeImage, imageChangeInterval); // Updated interval
  
  // Function to glitch the text
  const glitchText = document.getElementById("glitch-text");
  function glitchEffect() {
    const originalText = "William";
    let newText = "";
  
    // Randomly replace characters with symbols/numbers/upper-lowercase
    for (let i = 0; i < originalText.length; i++) {
      const randomChar = Math.random();
      if (randomChar > 0.7) {
        newText += String.fromCharCode(33 + Math.floor(Math.random() * 94)); // Random symbol
      } else if (randomChar > 0.4) {
        newText += originalText[i].toUpperCase(); // Uppercase
      } else {
        newText += originalText[i].toLowerCase(); // Lowercase
      }
    }
  
    glitchText.textContent = newText;
  }
  
  // Glitch the text every 0.1 seconds
  setInterval(glitchEffect, 100);
  
  // Change the speed and background color on image click
  mainImage.addEventListener("click", () => {
    // Speed up image change
    imageChangeInterval = Math.max(50, imageChangeInterval - 50); // Minimum interval of 50ms
    clearInterval(imageChangeIntervalId);
    imageChangeIntervalId = setInterval(changeImage, imageChangeInterval);
  
    // Start background glitch effect
    document.body.classList.toggle("red-background");
  });
  
  // Function to reset background color when not glitching
  document.body.classList.add("black-background");
  