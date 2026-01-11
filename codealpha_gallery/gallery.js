        const natureBtn = document.getElementById('Nature');
        const friendshipBtn = document.getElementById('Friendship');
        const birdsBtn = document.getElementById('Birds');

        const natureDiv = document.getElementById('Nature_img');
        const friendshipDiv = document.getElementById('Friendship_img');
        const birdsDiv = document.getElementById('Birds_img');

        const allDivs = [
            natureDiv,
            friendshipDiv,
            birdsDiv,
        ];

        allDivs.forEach(div => div.style.display = 'none');
        function showOnly(divToShow) {
            allDivs.forEach(div => {
                div.style.display = 'none';
            });
            divToShow.style.display = 'block';
        }

        natureBtn.addEventListener('click', () => showOnly(natureDiv));
        friendshipBtn.addEventListener('click', () => showOnly(friendshipDiv));
        birdsBtn.addEventListener('click', () => showOnly(birdsDiv));
        