# Mumira's Cakes - A Multi-Domain Next.js Bakery Platform

Welcome to the Mumira's Cakes project! This is a comprehensive web platform built with Next.js, designed to handle all aspects of a modern bakery business. The project is structured to support multiple applications under one codebase, served on different domains.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment & Subdomains (Vercel)](#deployment--subdomains-vercel)
  - [Using a Custom Domain](#using-a-custom-domain)
  - [Using the Default `.vercel.app` Domain](#using-the-default-vercelapp-domain)
- [License](#license)
- [Contributing](#contributing)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Features**: [Google Genkit](https://firebase.google.com/docs/genkit)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Project Structure

This project uses Next.js Middleware to serve multiple applications from a single codebase. This is often referred to as a multi-tenant setup.

- `src/app/site`: The main customer-facing website.
- `src/app/admin`: The admin dashboard for managing the business.
- `src/app/app`: The client-facing mobile application view.
- `src/app/dispatch`: The application for delivery/dispatcher staff.
- `src/middleware.ts`: The core of the multi-domain logic. It inspects the request's hostname (e.g., `admin.mumirascakes.com`) or path (e.g., `/admin`) and rewrites the request to the appropriate application directory.

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    The application runs on port 9002 by default.
    ```bash
    npm run dev
    ```

4.  **Access the applications:**
    To simulate the different domains on your local machine, you need to edit your computer's `hosts` file.
    - **macOS/Linux**: `sudo nano /etc/hosts`
    - **Windows**: Edit `C:\Windows\System32\drivers\etc\hosts` as an administrator.

    Add the following lines to your hosts file:
    ```
    127.0.0.1 admin.localhost
    127.0.0.1 app.localhost
    127.0.0.1 dispatch.localhost
    ```

    Now you can access the different parts of the application in your browser:
    - **Main Site**: `http://localhost:9002`
    - **Admin Panel**: `http://admin.localhost:9002`
    - **Client App**: `http://app.localhost:9002`
    - **Dispatch App**: `http://dispatch.localhost:9002`

## Deployment & Subdomains (Vercel)

This project is configured for easy deployment on [Vercel](https://vercel.com). The middleware will automatically handle routing for both custom domains and the default Vercel domain.

### Using a Custom Domain

This is the recommended approach for a production environment (e.g., using `mumirascakes.com`).

1.  **Deploy to Vercel**: Connect your Git repository to a new Vercel project.
2.  **Add Your Main Domain**: In your Vercel project dashboard, go to **Settings -> Domains**. Add your main domain (e.g., `mumirascakes.com`) and follow the instructions to configure your DNS records. This will point to the `site` application by default.
3.  **Add Subdomains**: Add the subdomains for your other applications.
    - `admin.mumirascakes.com`
    - `app.mumirascakes.com`
    - `dispatch.mumirascakes.com`
4.  **Done!** Vercel will automatically provision SSL certificates and route traffic for these subdomains to your deployment. The `middleware.ts` file in this project will then direct each request to the correct application folder.

### Using the Default `.vercel.app` Domain

When you deploy to Vercel, you get a default URL like `your-project-name.vercel.app`. While Vercel doesn't allow creating subdomains for this URL (e.g., `admin.your-project-name.vercel.app`), the middleware is configured to support path-based access as a fallback.

- **Main Site**: `https://your-project-name.vercel.app`
- **Admin Panel**: `https://your-project-name.vercel.app/admin`
- **Client App**: `https://your-project-name.vercel.app/app`
- **Dispatch App**: `https://your-project-name.vercel.app/dispatch`

No extra configuration is needed for this to work.

## License

The code for this project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, or any portion of it, is strictly prohibited.

The open-source libraries and dependencies used in this project are subject to their own respective licenses.

## Contributing

As this is a proprietary project, we are not accepting external contributions at this time. If you have suggestions or find issues, please contact the project owner.
