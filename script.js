// Video Playback Speed Controller
document.addEventListener('DOMContentLoaded', function() {
    // Get all speed control buttons
    const speedButtons = document.querySelectorAll('.speed-btn');
    
    // Add click event listeners to all speed buttons
    speedButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            const speed = parseFloat(this.getAttribute('data-speed'));
            const video = document.getElementById(videoId);
            
            if (video) {
                // Set the playback speed
                video.playbackRate = speed;
                
                // Update the speed display
                const displayId = videoId === 'video1' ? 'speed-display-1' : 'speed-display-2';
                const speedDisplay = document.getElementById(displayId);
                if (speedDisplay) {
                    speedDisplay.textContent = speed.toFixed(2) + 'x';
                }
                
                // Update active state for buttons of this video
                const videoButtons = document.querySelectorAll(`[data-video="${videoId}"]`);
                videoButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                // Add ripple effect
                createRipple(this, event);
            }
        });
    });
    
    // Initialize video players
    const videos = document.querySelectorAll('.video-player');
    videos.forEach(video => {
        // Set default playback rate
        video.playbackRate = 1.0;
        
        // Add event listener for when video metadata is loaded
        video.addEventListener('loadedmetadata', function() {
            console.log(`Video ${video.id} loaded successfully`);
        });
        
        // Add event listener for playback rate changes
        video.addEventListener('ratechange', function() {
            console.log(`Playback rate changed to ${this.playbackRate}x for ${video.id}`);
        });
    });
    
    // Ripple effect function
    function createRipple(button, event) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        const activeElement = document.activeElement;
        
        // If a video is focused, allow keyboard controls
        if (activeElement.tagName === 'VIDEO') {
            switch(event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    increaseSpeed(activeElement);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    decreaseSpeed(activeElement);
                    break;
            }
        }
    });
    
    function increaseSpeed(video) {
        const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
        const currentSpeed = video.playbackRate;
        const currentIndex = speeds.findIndex(s => s >= currentSpeed);
        
        if (currentIndex < speeds.length - 1) {
            const newSpeed = speeds[currentIndex + 1];
            video.playbackRate = newSpeed;
            updateSpeedUI(video.id, newSpeed);
        }
    }
    
    function decreaseSpeed(video) {
        const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
        const currentSpeed = video.playbackRate;
        const currentIndex = speeds.findIndex(s => s >= currentSpeed);
        
        if (currentIndex > 0) {
            const newSpeed = speeds[currentIndex - 1];
            video.playbackRate = newSpeed;
            updateSpeedUI(video.id, newSpeed);
        }
    }
    
    function updateSpeedUI(videoId, speed) {
        // Update display
        const displayId = videoId === 'video1' ? 'speed-display-1' : 'speed-display-2';
        const speedDisplay = document.getElementById(displayId);
        if (speedDisplay) {
            speedDisplay.textContent = speed.toFixed(2) + 'x';
        }
        
        // Update active button
        const videoButtons = document.querySelectorAll(`[data-video="${videoId}"]`);
        videoButtons.forEach(btn => {
            const btnSpeed = parseFloat(btn.getAttribute('data-speed'));
            if (btnSpeed === speed) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    console.log('Video presentation initialized successfully!');
});
