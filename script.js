function detectMood() {
  const mood = document.getElementById("moodInput").value.toLowerCase().trim();
  const emoji = document.getElementById("emoji");
  const message = document.getElementById("message");

  let bgColor = "#ecf0f1";
  let moodData = {
    happy: ["😊", "Keep smiling! Happiness is contagious.", "#f1c40f"],
    sad: ["😢", "It's okay to feel sad. Better days are coming.", "#3498db"],
    angry: ["😠", "Take a deep breath. Stay calm.", "#e74c3c"],
    tired: ["😴", "You deserve some rest. Take a break.", "#8e44ad"],
    excited: ["🤩", "Yay! Keep up that energy!", "#2ecc71"],
    bored: ["🥱", "Try doing something creative!", "#95a5a6"],
    scared: ["😨", "Courage starts with showing up.", "#34495e"],
    confused: ["😕", "Clarity comes with time. Be patient.", "#7f8c8d"]
  };

  if (moodData[mood]) {
    emoji.innerText = moodData[mood][0];
    message.innerText = moodData[mood][1];
    bgColor = moodData[mood][2];
  } else {
    emoji.innerText = "🤔";
    message.innerText = "Hmm... I don't recognize that mood.";
    bgColor = "#bdc3c7";
  }

  document.body.style.backgroundColor = bgColor;
}
