const jobListingsSection = document.querySelector('.jobs-listings');

jobListingsSection?.addEventListener('click', (evt) => {
    const element = evt.target;
    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicaste!';
        element.classList.add('has-applied');
        element.disabled = true;
    }
});