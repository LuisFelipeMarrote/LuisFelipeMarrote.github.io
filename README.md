# Luis Felipe Marrote - Software Developer Portfolio

A modern, minimalist portfolio website built with vanilla HTML, CSS, and JavaScript, optimized for recruiters.

## Features

✨ **Modern & Minimalist Design**
- Clean, professional interface
- Dark/Light theme toggle
- Fully responsive on all devices
- Smooth animations and transitions

🎯 **Recruiter-Focused**
- Clear technical skills showcase
- Featured projects with tech stack display
- Social links and contact information
- Fast loading times

⚡ **Built with**
- Vanilla HTML/CSS/JavaScript (no build process)
- CSS Variables for easy theme customization
- Intersection Observer API for scroll animations
- Local storage for theme preference

## How to Customize

### 1. Add Your Projects
Edit the project cards in `index.html`:
- Replace "Project Name" with your actual project title
- Update the project description to focus on technical challenges
- Add the GitHub repository link and live demo URL
- Update the tech stack badges to match your technologies used

**Example:**
```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">E-Commerce API</h3>
        <div class="project-links">
            <a href="https://github.com/yourusername/ecommerce-api" target="_blank" class="project-link">...</a>
            <a href="https://demo.example.com" target="_blank" class="project-link">...</a>
        </div>
    </div>
    <p class="project-description">
        Built a RESTful API with Node.js and Express, implementing JWT authentication, payment processing integration, and database optimization for 10k+ concurrent users.
    </p>
    <div class="project-tech">
        <span class="tech-badge">TypeScript</span>
        <span class="tech-badge">Node.js</span>
        <span class="tech-badge">MongoDB</span>
        <span class="tech-badge">JWT Auth</span>
    </div>
</div>
```

### 2. Update Contact Information
- Replace `your-email@example.com` in the contact section with your actual email

### 3. Customize Skills
The skills section is organized by categories. Update to match your expertise:
- Languages
- Backend
- Frontend
- Databases
- DevOps & Tools

### 4. Personalize the About Section
Update the about text to reflect your personal journey and career goals.

## Project Description Best Practices

Focus on **technical implementation**, not what the project does:

❌ **DON'T:** "A website to manage tasks for teams"  
✅ **DO:** "Developed a real-time task management platform using React and WebSockets, implementing optimistic updates and conflict resolution for collaborative editing"

❌ **DON'T:** "An API for users to upload files"  
✅ **DO:** "Built a scalable file upload service with streaming capabilities, implementing multipart form handling and AWS S3 integration with rate limiting"

## Deployment

This site is ready for GitHub Pages:

1. Push the code to your `LuisFelipeMarrote.github.io` repository
2. The site will be automatically deployed at `https://luisfelipemarrote.github.io`

## Theme Customization

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Blue - change to your preferred color */
    --primary-dark: #1e40af;
    /* ... other variables ... */
}
```

## Performance

- ⚡ No external dependencies
- 🚀 Single-page load
- 🎨 CSS optimizations
- 📱 Mobile-first design

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: iOS Safari, Chrome Mobile

---

**Made with ❤️ | Luis Felipe Marrote**
