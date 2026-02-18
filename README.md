# Alumni UI - Kolakadi Shale School Website

A modern, responsive Angular web application for the Kolakadi Shale School Alumni, celebrating 100 years of educational excellence. This website showcases the school's history, facilities, gallery, and provides registration and donation capabilities.

## 🌟 Features

- **Centenary Celebration Page** - Commemorating 100 years of the school's journey
- **School History** - Interactive timeline and historical information
- **Gallery** - Photo gallery with lightbox modal for viewing images
- **Facilities** - Showcase of school facilities and features
- **Registration Form** - Alumni registration with form validation
- **Contact & Donation** - Contact information and donation options
- **Responsive Design** - Fully responsive across all devices
- **Kannada Language Support** - Content in Kannada (ಕನ್ನಡ)

## 🛠️ Tech Stack

- **Framework**: Angular 13.3.0
- **Styling**: Bootstrap 5.1.3, Custom CSS
- **Language**: TypeScript 4.6.2
- **Build Tool**: Angular CLI
- **Deployment**: GitHub Pages

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v13 or higher)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Alumni-UI
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

### Development

The application will automatically reload if you change any of the source files.

```bash
# Development server
ng serve

# Build for production
ng build --configuration production

# Run unit tests
ng test
```

## 📁 Project Structure

```
src/
├── app/
│   ├── centenary-page/      # 100 years celebration page
│   ├── contact-us/          # Contact and donation page
│   ├── gallery-page/        # Photo gallery with lightbox
│   ├── history-page/        # School history page
│   ├── home-page/           # Facilities and features page
│   ├── navbar/              # Navigation component
│   ├── registraion-form/    # Alumni registration form
│   ├── services/            # API services
│   └── app-routing.module.ts # Routing configuration
├── assets/
│   └── gallery/             # Gallery images
└── styles.css               # Global styles
```

## 🎨 Pages & Routes

- `/centenary` - Centenary celebration page (default)
- `/home` - School facilities and features
- `/history` - School history and timeline
- `/gallery` - Photo gallery
- `/registration` - Alumni registration form
- `/contact` - Contact information and donations

## 🚀 Deployment

The application is deployed to GitHub Pages. Follow these steps to deploy:

### Step 1: Build for Production

```bash
ng build --configuration production --base-href /
```

This creates a `dist` folder with the production build.

### Step 2: Deploy to GitHub Pages

```bash
npx angular-cli-ghpages --dir=dist/alumni-ui
```

This command:
- Pushes the `dist/alumni-ui` folder to the `gh-pages` branch
- Automatically triggers GitHub Pages deployment

### Step 3: Custom Domain Setup (if applicable)

1. Create a file named `CNAME` in the repository root
2. Add your domain name (e.g., `kolakaadishaale.com`)
3. Push the file to the repository

### Step 4: Configure GitHub Pages (First Time Only)

If you're setting up deployment for the first time:
1. Go to repository **Settings** > **Pages**
2. Select the deployment branch (usually `gh-pages`)
3. Select the deployment folder (usually `/ (root)`)
4. Save changes

**Note**: If you're pushing to an existing deployment branch, deployment happens automatically after Step 2.

## 📝 Development Notes

### Registration Form Validation
- All fields in the registration form are mandatory
- Form includes loading spinner during submission
- Form validation implemented with Angular Reactive Forms

### Gallery Features
- Dynamic image loading from `assets/gallery` folder
- Lightbox modal for full-screen image viewing
- Keyboard navigation (Arrow keys, Escape)
- Image counter display
- Responsive grid layout

## 🤝 Contributing

1. Make changes in the `master` branch (or create a feature branch)
2. Test your changes locally
3. Build and verify the production build
4. Follow the deployment steps above

## 📄 License

This project is private and proprietary.

## 📞 Contact

For questions or support, please contact the project maintainers.

---

**Last Updated**: March 2024
