function showPosts(posts) {

    // Сховати всі section або показати all:
    if (posts === "all") {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'block';
        });

    } else {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
    }

    document.querySelectorAll('#btn > button').forEach(button => {
        if (button.classList.contains('active')) {
            button.classList.remove('active')
        }
    });

    // Показати posts, переданий у аргументі функції
    document.querySelectorAll(`.${posts}`).forEach(posts => {
        posts.style.display = 'block';
    });
    document.querySelector('#head-title').innerHTML = `<h3>${posts.charAt(0).toUpperCase() + posts.slice(1)}</h3>`;
}

// Зачекати завантаження сторінки:
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#btn').addEventListener('click', event => {

        const elem = event.target;

        if (elem.closest('#btn > button')) {
            showPosts(elem.dataset.posts);
            elem.classList.add('active');
        }
    })

    document.querySelector('#head-title').innerHTML = `<h3>All</h3>`;
});