function start() {
    // UI handling for PyC Shell
  
  const output = document.getElementById("output");
  const input = document.getElementById("input");
  const prompt = document.getElementById("prompt");
  
  function print(text) {
      output.textContent += text + "\n";
  }
  
  function clearScreen() {
      output.textContent = "";
  }
  
  function setPrompt(text) {
      prompt.textContent = text;
  }
  
  input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
          const command = input.value.trim();
          input.value = "";
          window.handleCommand(command);
      }
  });

}
