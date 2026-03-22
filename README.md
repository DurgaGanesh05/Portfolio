
 
# Data Science Portfolio

A modern, responsive portfolio website showcasing data science projects, skills, and experience. Built with React, TypeScript, and Tailwind CSS for a sleek, professional presentation.

## 🌐 Live Demo

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfoliods-mu.vercel.app)

**View Live Site:** [https://portfoliods-mu.vercel.app](https://portfoliods-mu.vercel.app)

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Modern UI Components**: Built with Radix UI and Material-UI
- **Dark Theme**: Professional dark theme with gradient accents
- **Sections Include**:
  - Hero with animated typing effect
  - About with statistics counters
  - Skills showcase
  - Project portfolio
  - Certifications display
  - Education background
  - Contact information

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **Material-UI** - Comprehensive component library
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
portfolio2/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── App.tsx        # Main app component
│   │   └── components/    # React components
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Certifications.tsx
│   │       ├── Education.tsx
│   │       ├── Contact.tsx
│   │       ├── Navigation.tsx
│   │       ├── Footer.tsx
│   │       └── ui/        # Reusable UI components
│   ├── styles/            # CSS and styling files
│   ├── main.tsx           # App entry point
│   └── imports/           # Additional resources
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following components with your information:
- `Hero.tsx` - Name, roles, and tagline
- `About.tsx` - Personal description and statistics
- `Skills.tsx` - Technical skills and proficiency levels
- `Projects.tsx` - Portfolio projects
- `Certifications.tsx` - Certifications and achievements
- `Education.tsx` - Educational background
- `Contact.tsx` - Contact information and social links

### Styling
- Colors and themes can be modified in `src/styles/theme.css`
- Tailwind configuration in `tailwind.config.js` (if exists)
- Component-specific styles within each component file

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

Feel free to reach out through the contact form on the website or connect via social media links provided.

---

*Built with ❤️ using modern web technologies*
  
