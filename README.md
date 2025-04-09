# D&D Gas Station Website

A modern, single-page website for D&D Gas Station that conveys professionalism, reliability, and cutting-edge service.

## Features

- Modern, sleek dark mode design
- Responsive layout for all device sizes
- Interactive 3D gas station model in the hero section
- Smooth animations and transitions using Framer Motion
- Comprehensive sections showcasing all gas station services and amenities
- Contact form with validation
- Optimized for performance

## Tech Stack

- **Framework**: Next.js with Static Site Generation (SSG)
- **UI Library**: shadcn/ui components
- **Animation**: Framer Motion for smooth transitions and scroll animations
- **3D Model**: Three.js with React Three Fiber for the gas station model
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS for responsive design

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd d-and-d-gas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `/src/app`: Main Next.js app directory
- `/src/components`: Reusable components
  - `/ui`: UI components from shadcn/ui
  - `/layout`: Layout components like Navbar and Footer
  - `/sections`: Page sections like Hero, About, Services, etc.
  - `/3d`: 3D model components for Three.js

## Build for Production

```bash
npm run build
```

This will generate a static export in the `out` directory that can be deployed to any static hosting service.

## Customization

### Updating Content

Most content is stored directly in the component files. To update:

1. Navigate to the relevant section component in `/src/components/sections/`
2. Update the text or data as needed
3. Save the file and the changes will be reflected in the UI

### Changing Colors

1. The color scheme is defined in `/src/app/globals.css`
2. Update the color variables in the `:root` and `.dark` sections

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- 3D model is a simplified placeholder representation of a gas station
- All product data, prices, and service information are for demonstration purposes only
