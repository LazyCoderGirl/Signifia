
window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('main img');
    
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('reveal');
        }, index * 200);
    });
});

document.querySelectorAll('.join-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const eventName = btn.dataset.event;
        const response = await fetch('/join-event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ eventName })
        });

        const result = await response.text();
        alert(result);
    });
});
