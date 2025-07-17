document.addEventListener('DOMContentLoaded', function () {
  function setAccessTime() {
    const timeElement = document.getElementById('access-time');
    if (timeElement) {
      const accessTime = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dataCompleta = accessTime.toLocaleDateString('pt-BR', options);
      const partesDaData = dataCompleta.split(', ');
      timeElement.innerHTML = `${partesDaData[0]}<br>${partesDaData[1]}`;
    }
  }

  setAccessTime();

  document.body.addEventListener('click', (ev) => {
    // Find the title bar that was clicked
    const expandableTitle = ev.target.closest('.expandable__title-bar');
    if (!expandableTitle) {
      return;
    }

    // Find the parent expandable container and toggle the class
    const expandable = expandableTitle.closest('.expandable');
    if (expandable) {
      expandable.classList.toggle('expandable__open');
    }
  });
});