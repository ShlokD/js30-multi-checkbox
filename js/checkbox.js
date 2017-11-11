let lastChecked;

const onCheckboxChange = (ev) => {
  if(!ev.target.checked) return;
  let between = false;
  if (ev.shiftKey) {
    checkboxes.forEach((checkbox) => {

      if (checkbox === lastChecked || checkbox === ev.target) {
        between = !between;
      }
      
      if (between) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = ev.target;
};


const checkboxes = document.querySelectorAll('input[type=checkbox]')
checkboxes.forEach((checkbox) => checkbox.addEventListener('click', onCheckboxChange));