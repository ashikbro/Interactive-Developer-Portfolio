# Interactive Developer Portfolio

A modern, feature-rich developer portfolio built with React.js, showcasing animations, live app demos, auto-generated skill graphs, and integrated CMS for blog posts. Features a toggle for Dark/Light themes and embedded live code previews.

## ✨ Features

### 🎨 **Modern Design with Animations**
- Smooth animations powered by **Framer Motion**
- Interactive UI elements with hover effects
- Floating geometric shapes and visual effects
- Responsive design for all screen sizes

### 🌗 **Dark/Light Theme Toggle**
- Seamless theme switching
- Persistent theme preference (stored in localStorage)
- Custom color variables for easy customization
- Smooth transitions between themes

### 📊 **Auto-Generated Skill Graphs**
- Dynamic skill visualization using **Recharts**
- Radial bar charts showing proficiency levels
- Animated charts with smooth transitions
- Customizable skill categories and colors

### 🚀 **Live Project Demos**
- Embedded live code previews using iframe
- Compatible with CodeSandbox, StackBlitz, and other platforms
- Syntax-highlighted code snippets with **React Syntax Highlighter**
- Toggle-able code preview sections
- Direct links to GitHub repositories and live deployments

### 📝 **CMS Integration**
- Ready-to-use **Contentful CMS** integration
- Blog post management with rich content
- Featured images, categories, and metadata
- Easy content updates without code changes

### 🎯 **Portfolio Sections**
- **Hero Section**: Eye-catching introduction with social links
- **About Section**: Personal info with statistics
- **Skills Section**: Interactive skill graphs and technology tags
- **Projects Section**: Showcasing work with live demos
- **Blog Section**: Latest articles and tutorials
- **Navigation**: Smooth scrolling between sections

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations library
- **Recharts** - Chart and graph library
- **React Syntax Highlighter** - Code highlighting
- **Contentful** - Headless CMS
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashikbro/Interactive-Developer-Portfolio.git
   cd Interactive-Developer-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (Optional - for CMS)**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Update Personal Information

Edit the content in the following files:
- `src/components/Hero/Hero.jsx` - Name, title, and description
- `src/components/About/About.jsx` - About text and statistics
- `src/components/Skills/Skills.jsx` - Your skills and proficiency levels

### Add Your Projects

In `src/components/Projects/Projects.jsx`, update the `projects` array:
```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Project description',
  tech: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/username/repo',
  live: 'https://your-live-site.com',
  demo: 'https://codesandbox.io/embed/your-project',
  code: `// Your code snippet`
}
```

### Configure CMS (Contentful)

1. Create a free account at [Contentful](https://www.contentful.com/)
2. Create a new space
3. Add a content model called "blogPost" with fields:
   - `title` (Short text)
   - `excerpt` (Long text)
   - `date` (Date & time)
   - `readTime` (Short text)
   - `category` (Short text)
   - `image` (Media - single file)
4. Add your credentials to `.env`
5. Uncomment the Contentful API code in `src/components/Blog/Blog.jsx`

### Customize Theme Colors

Edit CSS variables in `src/index.css`:
```css
[data-theme="dark"] {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --accent-color: #10b981;
  /* ... other colors */
}
```

## 🎯 Usage

### Running the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Linting

```bash
npm run lint
```

## 📱 Responsive Design

The portfolio is fully responsive and works seamlessly on:
- Desktop computers (1920px and above)
- Laptops (1024px - 1919px)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🔗 Project Structure

```
Interactive-Developer-Portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   └── Blog/
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Framer Motion for amazing animations
- Recharts for beautiful charts
- Contentful for CMS capabilities
- React community for incredible ecosystem

## 📧 Contact

For questions or feedback, please reach out via GitHub issues.

---

**Built with ❤️ using React and modern web technologies**
