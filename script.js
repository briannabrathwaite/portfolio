function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      function () {
        alert("Gmail address copied to clipboard!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab, .tab-pane').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});


document.querySelectorAll('.section-header').forEach(button => {
  button.addEventListener('click', function () {
      const sectionItem = this.parentElement;
      const content = sectionItem.querySelector('.section-content');
      
      // Toggle active class for section item
      sectionItem.classList.toggle('active');

      // Toggle max-height for the content panel
      if (sectionItem.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + "px";
      } else {
          content.style.maxHeight = "0px";
      }
  });
});
