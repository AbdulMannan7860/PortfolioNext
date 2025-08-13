# Abdul Mannan Siddiqui - Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Mobile Responsive**: Optimized for all device sizes
- **Interactive Components**: Code preview sections with live demos
- **Performance Optimized**: Fast loading with optimized assets
- **Accessible**: Built with accessibility best practices
- **Dark/Light Mode**: Automatic theme switching

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Hero.tsx      # Hero section
│   ├── Navigation.tsx # Navigation bar
│   ├── About.tsx     # About section
│   ├── Experience.tsx # Experience timeline
│   ├── ProjectShowcase.tsx # Projects with code preview
│   ├── Contact.tsx   # Contact form
│   └── Footer.tsx    # Footer
├── pages/
│   └── Index.tsx     # Main page
└── lib/
    └── utils.ts      # Utility functions
```

## 🎨 Key Components

### CodePreview Component
Interactive component that allows users to toggle between project preview and code view:
- Live project previews
- Syntax-highlighted code snippets
- Technology badges
- Direct links to live demos and GitHub repos

### Responsive Navigation
- Sticky navigation with scroll effects
- Mobile hamburger menu
- Smooth scrolling to sections
- Dynamic background on scroll

### Project Showcase
- Interactive project cards
- Technology stack display
- Live demo and GitHub links
- Code preview functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/AbdulMannan7860/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Performance Features

- Lazy loading of components
- Optimized images and assets
- Efficient CSS with Tailwind
- Fast build times with Vite
- SEO optimized meta tags

## 🔧 Customization

### Colors and Themes
Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  // ... other colors
}
```

### Content Updates
- Update personal information in component files
- Modify project data in `ProjectShowcase.tsx`
- Change contact information in `Contact.tsx`

### Adding New Projects
Add new projects to the `projects` array in `ProjectShowcase.tsx`:
```typescript
{
  id: 4,
  title: "New Project",
  description: "Project description",
  preview: <YourPreviewComponent />,
  code: "// Your code snippet",
  liveUrl: "https://project-url.com",
  githubUrl: "https://github.com/username/project",
  technologies: ["React", "Node.js"]
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: abdulmannan.dev@gmail.com
- **GitHub**: [@AbdulMannan7860](https://github.com/AbdulMannan7860)
- **LinkedIn**: [Abdul Mannan Siddiqui](https://linkedin.com/in/abdulmannan-dev)

---

Made with ❤️ by Abdul Mannan Siddiqui
