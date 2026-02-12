# Video Presentation Website

A modern, responsive website for showcasing videos with custom playback speed controls.

## Features

- 🎥 **Dual Video Display** - Showcase two videos simultaneously
- ⚡ **Custom Playback Speed** - Control video speed from 0.5x to 2x
- 🎨 **Modern Design** - Premium UI with gradient backgrounds and glassmorphism
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcuts** - Use arrow keys to adjust speed when video is focused
- ✨ **Smooth Animations** - Engaging micro-interactions and transitions

## Setup Instructions

### 1. Add Your Videos

Replace the placeholder video sources in `index.html`:

```html
<!-- For Video 1 -->
<source src="video1.mp4" type="video/mp4">

<!-- For Video 2 -->
<source src="video2.mp4" type="video/mp4">
```

You can use:
- Local video files (place them in the same folder)
- Video URLs (replace `src` with the full URL)

### 2. Customize Headings

Edit the video headings in `index.html`:

```html
<h2 class="video-heading">Your Custom Heading Here</h2>
```

### 3. Open in Browser

Simply open `index.html` in any modern web browser.

## Usage

### Playback Speed Controls

- Click any speed button (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x) to change playback speed
- The active speed is highlighted
- Current speed is displayed below the buttons

### Keyboard Shortcuts

When a video is focused:
- **Arrow Up** - Increase playback speed
- **Arrow Down** - Decrease playback speed

## File Structure

```
presentation/
├── index.html      # Main HTML structure
├── styles.css      # Styling and design system
├── script.js       # Playback speed functionality
├── README.md       # This file
├── video1.mp4      # Your first video (add this)
└── video2.mp4      # Your second video (add this)
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-color: #667eea;
    /* Add more customizations */
}
```

### Speed Options

Modify speed buttons in `index.html` and update the JavaScript arrays in `script.js`.

## License

Free to use and modify.

## Support

For issues or questions, please open an issue on GitHub.
