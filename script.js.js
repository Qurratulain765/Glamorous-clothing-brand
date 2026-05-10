downloadButtons.forEach(button => {
    button.addEventListener('click', async function() {
        const imageUrl = this.getAttribute('data-image');
        const filename = this.getAttribute('data-filename');
        const originalText = this.innerHTML; // Store original text here

        try {
            // ... rest of the code ...
        } catch (error) {
            console.error('Download failed:', error);
            this.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed';
            this.style.backgroundColor = 'red';
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = 'var(--olivine)';
                this.style.color = 'var(--pine-tree)';
            }, 2000);
        }
    });
});