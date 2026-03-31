document.addEventListener('DOMContentLoaded', () => {
    // Fortune Cookie Interaction
    const cookieContainer = document.getElementById('interactive-cookie');
    const fortunes = [
        '"We\'re getting married! 10.12.2027"',
        '"You\'re hired! Welcome to the team."',
        '"Baby Smith arriving this Spring!"',
        '"Your department has been outsourced to a spreadsheet."',
        '"The river is now 40% crude oil. Sorry!"',
        '"Congratulations on your promotion!"',
        '"The factory will ignite at precisely 4:30 PM."',
        '"You\'ve been accepted into the program!"',
        '"It\'s a girl!"',
        '"We regret to inform you that your data was leaked."',
        '"The quarterly earnings call has been postponed due to embezzlement."',
        '"Your mortgage has been approved!"',
        '"Please pack up your desk by 5:00 PM today."',
        '"Our entire server infrastructure is being held for ransom."',
        '"The merger has been canceled indefinitely."'
    ];
    let isCracked = false;

    if (cookieContainer) {
        cookieContainer.addEventListener('click', () => {
            if (!isCracked) {
                // Pick a random fortune
                const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
                const fortuneTextEl = cookieContainer.querySelector('.fortune-text');
                fortuneTextEl.textContent = randomFortune;

                // Crack the cookie
                cookieContainer.classList.add('cracked');
                isCracked = true;
                
                // Subtle change to hint
                const hint = document.querySelector('.hint-text');
                if (hint) hint.textContent = "Click again for more breaking news";
            } else {
                // Reset and crack again quickly
                cookieContainer.classList.remove('cracked');
                
                // Wait for transition to re-crack
                setTimeout(() => {
                    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
                    const fortuneTextEl = cookieContainer.querySelector('.fortune-text');
                    fortuneTextEl.textContent = randomFortune;
                    
                    cookieContainer.classList.add('cracked');
                }, 500); // Wait for CSS transition
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
