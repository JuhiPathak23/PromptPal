chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'insertPrompt') {
      var text = request.text;
      var inputField = document.querySelector('textarea[placeholder="Type a message"]');
      if (inputField && window.location.href === "https://google.com/") {
        inputField.value = text;
        inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
      } else {
        console.log("No textarea found or not on chat.openai.com");
      }
    }
  });
  