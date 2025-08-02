# AgenticPH Website

A modern, responsive website for the AgenticPH community - a next-gen community of Filipino developers, AI builders, prompt engineers, context hackers, automation geeks, and creative technologists exploring the frontier of agentic software and intelligent systems.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by Lovable.dev
- **Responsive Layout**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Hono + Vite + Cloudflare Workers for edge computing
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Smooth Animations**: Custom CSS animations with reduced motion support

## 📱 Pages

### Home Page

- **Hero Section**: Compelling headline with gradient background and animated elements
- **About Section**: Mission statement and community features
- **Code of Conduct**: Community guidelines and standards
- **Connect Section**: Social media links and newsletter signup

### Events Page

- **Upcoming Events**: Workshop and meetup listings
- **Past Events**: Archive with recordings
- **Event Registration**: Direct links to Discord and registration

### Projects Page

- **Featured Projects**: Highlighted community projects
- **Community Projects**: Full project showcase
- **GitHub Integration**: Live stats and project information

## 🛠 Tech Stack

- **Framework**: [Hono](https://hono.dev/) - Ultrafast web framework for edge computing
- **Build Tool**: [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/) - JavaScript edge runtime
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: TypeScript with JSX support
- **SSR**: Server-side rendering with `vite-ssr-components`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Navigation.tsx      # Navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero section
│   │   ├── AboutSection.tsx    # About section
│   │   ├── CodeOfConductSection.tsx # Code of conduct
│   │   └── ConnectSection.tsx  # Connect section
│   └── pages/
│       ├── HomePage.tsx        # Home page composition
│       ├── EventsPage.tsx      # Events page
│       └── ProjectsPage.tsx    # Projects page
├── index.tsx                   # Main Hono app with routing
├── renderer.tsx                # JSX renderer configuration
└── style.css                   # Tailwind imports and custom styles
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (#3b82f6 to #1d4ed8)
- **Secondary**: Purple gradient (#8b5cf6 to #7c3aed)
- **Accent**: Various gradients for visual interest
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-900)
- **Body**: Regular weight (400)
- **Code**: Monospace for technical elements

### Components

- **Cards**: Hover effects with shadow and transform
- **Buttons**: Multiple variants with hover states
- **Navigation**: Sticky header with mobile menu
- **Forms**: Accessible inputs with focus states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/agentic-ph/agentic-ph-web.git
cd agentic-ph-web
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Cloudflare Workers
npm run deploy

# Generate Cloudflare Workers types
npm run cf-typegen
```

## 🌐 Deployment

The website is optimized for deployment on Cloudflare Workers:

1. **Build the project**:

```bash
npm run build
```

2. **Deploy to Cloudflare Workers**:

```bash
npm run deploy
```

### Environment Variables

For production deployment, set these environment variables in Cloudflare Workers:

- `ENVIRONMENT`: Set to "production"
- Add any API keys for GitHub/Discord integration (future enhancement)

## 📱 Responsive Design

The website uses a mobile-first approach with these breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Optimizations

- Collapsible navigation menu
- Stacked layouts for better readability
- Touch-friendly button sizes
- Optimized images and loading

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Screen Readers**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respects user motion preferences

## 🎯 Performance

- **Edge Computing**: Deployed on Cloudflare Workers for global performance
- **Optimized Assets**: Compressed images and minified CSS/JS
- **Lazy Loading**: Images load as needed
- **Caching**: Proper cache headers for static assets
- **Bundle Size**: Optimized with tree-shaking and code splitting

## 🤝 Contributing

We welcome contributions from the community! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Follow our coding standards
4. **Test your changes**: Ensure everything works properly
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Coding Standards

- Use TypeScript for all new code
- Follow the existing component structure
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper accessibility attributes
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [https://agentic.ph](https://agentic.ph)
- **Discord**: [https://discord.gg/agentic-ph](https://discord.gg/agentic-ph)
- **GitHub**: [https://github.com/agentic-ph](https://github.com/agentic-ph)
- **Twitter**: [https://twitter.com/agentic_ph](https://twitter.com/agentic_ph)

## 📞 Support

If you have any questions or need help:

1. **Join our Discord**: [https://discord.gg/agentic-ph](https://discord.gg/agentic-ph)
2. **Open an Issue**: [GitHub Issues](https://github.com/agentic-ph/agentic-ph-web/issues)
3. **Email us**: hello@agentic.ph

---

Built with ❤️ by the AgenticPH community
