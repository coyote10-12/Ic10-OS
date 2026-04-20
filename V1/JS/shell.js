function start() {
  // PyC Shell (Locked Mode)
  
  let loggedIn = false;
  
  window.onload = () => {
      setPrompt(">");
      print("Ic10-OS V1");
      print("PyC Shell");
      print("Type 'icrun' to log in.");
  };
  
  window.handleCommand = function(cmd) {
      if (!loggedIn) {
          handleLockedCommand(cmd);
      } else {
          handleUnlockedCommand(cmd);
      }
  };
  
  // ---------------- LOCKED MODE ----------------
  
  function handleLockedCommand(cmd) {
      switch (cmd) {
          case "icrun":
              askPassword();
              break;
  
          case "help":
              print("Available commands:");
              print("  icrun  - log in");
              print("  help   - show this help");
              print("  clear  - clear the screen");
              break;
  
          case "clear":
              clearScreen();
              break;
  
          default:
              print("Access denied. Please run 'icrun'.");
      }
  }
  
  function askPassword() {
      print("Enter password:");
      setPrompt("password:");
  
      window.handleCommand = function(pwd) {
          // For now, password is "1234"
          if (pwd === "1234") {
              loggedIn = true;
              clearScreen();
              print("Welcome to Ic10-OS.");
              print("Type 'help' for commands.");
              setPrompt("Ic10>");
          } else {
              print("Incorrect password.");
              setPrompt(">");
              window.handleCommand = function(cmd) {
                  if (!loggedIn) handleLockedCommand(cmd);
                  else handleUnlockedCommand(cmd);
              };
          }
      };
  }
  
  // ---------------- UNLOCKED MODE ----------------
  
  function handleUnlockedCommand(cmd) {
      switch (cmd) {
          case "help":
              print("Commands:");
              print("  explorer");
              print("  notepad");
              print("  calc");
              print("  dir");
              print("  cd");
              print("  sysinfo");
              print("  clear");
              print("  shutdown");
              break;
  
          case "clear":
              clearScreen();
              break;
  
          case "shutdown":
              print("Shutting down...");
              setTimeout(() => {
                  window.location.href = "boot.html";
              }, 1000);
              break;
  
          default:
              print("Unknown command.");
      }
  }

}
