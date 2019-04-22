function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    salt: document.querySelector("#salt").value,
    iterations: document.querySelector("#iterations").value,
    legacy: document.querySelector("#legacy").checked
  });
}

function setLegacy() {
    if (document.querySelector("#legacy").checked) {
      document.querySelector("#salt").disabled  = true
      document.querySelector("#iterations").disabled  = true
    } else {
      document.querySelector("#salt").disabled  = false
      document.querySelector("#iterations").disabled  = false
    }
}


function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#salt").value = result.salt || "";
    document.querySelector("#iterations").value = result.iterations || "50000";
    document.querySelector("#legacy").checked = (result.legacy == null ? true : result.legacy); // default to legacy mode
    setLegacy();
  }

  function onError(error) {
    console.log("Error: ${error}");
  }

  browser.storage.local.get().then(setCurrentChoice, onError);
  
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.querySelector('#legacy').addEventListener('change', setLegacy);
