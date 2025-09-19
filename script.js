document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-btn');

    likeButton.addEventListener('click', () => {
        // Toggle the 'liked' class on the button
        likeButton.classList.toggle('liked');

        // In a real app, you would also send this update to the server.
        console.log('Like button clicked!');
    });
});
