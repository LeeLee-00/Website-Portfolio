# Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, dark theme, and professional design. This single-page application showcases projects, skills, and provides a contact form for potential clients and employers.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Dark Theme**: Eye-friendly dark color scheme with teal accent colors
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Hover effects, animations, and transitions
- **Contact Form**: Functional contact form with validation and submission simulation
- **Skills Showcase**: Visual representation of technical skills with animated progress bars
- **Project Gallery**: Featured projects with live demo and GitHub links
- **Social Media Integration**: Links to professional social profiles
- **PWA Ready**: Progressive Web App capabilities with manifest and service worker support

## Technologies Used

- **Frontend Framework**: React 18.3.1
- **Animations**: Framer Motion 12.23.24
- **Icons**: React Icons 5.5.0
- **Routing**: React Router DOM 7.9.4
- **Styling**: CSS3 with custom properties and modern layouts
- **Build Tool**: Create React App with React Scripts 5.0.1
- **Testing**: Jest and React Testing Library
- **Package Manager**: npm

## Project Structure

```
website_portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── pages/
│   ├── styles/
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── reportWebVitals.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14.0 or higher recommended)
- npm or yarn package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LeeLee-00/Website-Portfolio.git
cd website_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode at http://localhost:3000
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from Create React App (irreversible operation)

## Component Overview

### Header
- Fixed navigation bar with smooth scrolling to sections
- Responsive mobile menu with hamburger toggle
- Animated logo and navigation links
- Dynamic background on scroll

### Hero
- Eye-catching landing section with animated introduction
- Call-to-action buttons for navigation
- Social media links with hover animations
- Responsive design with profile image placeholder

### About
- Personal introduction and story
- Highlight cards with key information
- Professional image with overlay effects
- Grid-based responsive layout

### Skills
- Categorized skill showcase (Frontend, Backend, Tools)
- Animated progress bars for proficiency levels
- Technology icons from React Icons
- Summary statistics with animated counters

### Projects
- Featured project cards with descriptions
- Technology stack badges for each project
- Live demo and GitHub repository links
- Hover effects and smooth animations

### Contact
- Contact information with icons
- Functional contact form with validation
- Social media links
- Form submission with loading states

### Footer
- Simple footer with copyright information
- Scroll-to-top functionality
- Animated heart icon

## Customization

### Personal Information

Update the following components with your personal information:

1. **src/components/Header.js**: Update logo/name in the header
2. **src/components/Hero.js**: Update name, title, description, and social links
3. **src/components/About.js**: Add your personal story, highlights, and professional image
4. **src/components/Skills.js**: Update skills, proficiency levels, and statistics
5. **src/components/Projects.js**: Add your projects with descriptions, technologies, and links
6. **src/components/Contact.js**: Update contact information and social media links
7. **public/index.html**: Update meta tags, title, and descriptions for SEO

### Styling and Theme

The project uses CSS custom properties for easy theming. Main color variables:

- Primary background: `#0a192f` (Dark blue)
- Secondary background: `#112240` (Lighter blue)
- Accent color: `#64ffda` (Teal)
- Primary text: `#ccd6f6` (Light blue-gray)
- Secondary text: `#8892b0` (Medium blue-gray)

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update navigation in `src/components/Header.js`
4. Add corresponding CSS for styling

## Responsive Design

The website is fully responsive with breakpoints:
- Desktop: 1200px and above
- Tablet: 768px to 1199px
- Mobile: Below 768px

All components adapt gracefully to different screen sizes with:
- Flexible grid layouts
- Responsive typography using `clamp()`
- Mobile-optimized navigation
- Touch-friendly interactive elements

## Performance Optimization

- **Efficient animations**: Using `transform` and `opacity` for smooth performance
- **Code splitting ready**: Prepared for React.lazy() implementation
- **Image optimization**: Proper alt tags and responsive images
- **Smooth scrolling**: Native CSS `scroll-behavior: smooth`
- **Minimal dependencies**: Only essential packages included

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Deployment Options

**Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

**Vercel**
1. Import your project to Vercel
2. Configure build settings (auto-detected)
3. Deploy with custom domain support

**GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   {
     "homepage": "https://leelee-00.github.io/Website-Portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. Deploy: `npm run deploy`

## Known Issues and Solutions

### Babel Warning Fix
The project includes `@babel/plugin-proposal-private-property-in-object` in devDependencies to resolve Create React App babel warnings.

### Node.js Version
Some dependencies require Node.js 20+. The project works with Node.js 18+ but may show engine warnings.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Lee Joey Noel - [leejnoel@gmail.com](mailto:your.leejnoel@gmail.com)

Project Link: [https://github.com/LeeLee-00/Website-Portfolio](https://github.com/LeeLee-00/Website-Portfolio)

## Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [React Icons](https://react-icons.github.io/react-icons/) - For beautiful icons
- [Create React App](https://create-react-app.dev/) - For project bootstrapping

---

Star this repository if you found it helpful!
