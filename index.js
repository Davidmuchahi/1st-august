function createFloatingFlower() {
            const container = document.getElementById('flowerParticles');
            const flowers = ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '💐', '🏵️'];
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + '%';
            flower.style.animationDuration = (Math.random() * 8 + 8) + 's';
            flower.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(flower);

            setTimeout(() => {
                if (flower.parentNode) {
                    flower.parentNode.removeChild(flower);
                }
            }, 12000);
        }

        // Create floating roses for hero section
        function createFloatingRose() {
            const container = document.getElementById('floatingRoses');
            const roses = ['🌹', '🌸', '💕', '💖'];
            const rose = document.createElement('div');
            rose.className = 'floating-rose';
            rose.innerHTML = roses[Math.floor(Math.random() * roses.length)];
            rose.style.left = Math.random() * 100 + '%';
            rose.style.animationDuration = (Math.random() * 10 + 15) + 's';
            rose.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(rose);

            setTimeout(() => {
                if (rose.parentNode) {
                    rose.parentNode.removeChild(rose);
                }
            }, 20000);
        }

        // Create sparkles
        function createSparkle() {
            const container = document.getElementById('sparklesContainer');
            const sparkles = ['✨', '⭐', '💫', '🌟'];
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 4 + 's';
            container.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4000);
        }

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            // Create initial flowers
            for (let i = 0; i < 8; i++) {
                setTimeout(createFloatingFlower, i * 800);
            }
            
            // Create initial roses
            for (let i = 0; i < 5; i++) {
                setTimeout(createFloatingRose, i * 1200);
            }
            
            // Create initial sparkles
            for (let i = 0; i < 15; i++) {
                setTimeout(createSparkle, i * 300);
            }
            
            // Continue creating elements
            setInterval(createFloatingFlower, 2000);
            setInterval(createFloatingRose, 3000);
            setInterval(createSparkle, 1500);
        });

        // Smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';

        // Add parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const flowers = document.querySelectorAll('.petal-decoration');
            flowers.forEach((flower, index) => {
                const speed = 0.5 + (index * 0.1);
                flower.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });