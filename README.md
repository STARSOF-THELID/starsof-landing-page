<a name="readme-top"></a>

<div align="center">
  <div align="center">
    <img src="components/ui/PearHeroLogo.svg" alt="PearAI Logo" />
  </div>
  <h3 align="center">STARSOF THELID Landing Page</h3>
  <p align="center">
    AR shit
    <br />
    <a href="https://trypear.ai"><strong>Explore the Website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/trypear/pear-landing-page/issues">Report Bug</a>
    ·
    <a href="https://github.com/trypear/pear-landing-page/issues">Request Feature</a>
  </p>
</div>

---

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables-description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

This is the landing page for [PearAI:](https://trypear.ai) the Open Source AI-powered code editor. This product is managed by [Nang](https://youtube.com/nang88) and [Pan](https://youtube.com/FryingPan).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![nextjs][nextjs]][nextjs-url]
- [![vercel][vercel]][vercel-url]
- [![tailwindcss][tailwindcss]][tailwindcss-url]
- [![typescript][typescript]][typescripturl]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/STARSOF-THELID/starsof-landing-page.git
    ```
2.  Install NPM packages
    ```sh
    yarn install
    ```
    <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Configuration

This project requires environment variables to be set up in a `.env.local` file for proper configuration and operation. Below are the required environment variables and instructions on how to set them up.

### Required Environment Variables

1. `NEXT_PUBLIC_SUPABASE_URL`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Environment Variables Description

- **NEXT_PUBLIC_SUPABASE_URL**: This is the URL of your Supabase project.

  Example: `NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co`

- **NEXT_PUBLIC_SUPABASE_ANON_KEY**: This is the anonymous public key for your Supabase project. This key allows your frontend application to interact with the Supabase backend.

  Example: `NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key`

- **NEXT_PUBLIC_VERCEL_URL**: This is the URL to which users will be redirected after certain actions, such as authentication. During local development, this is typically `http://localhost:3000`. For Vercel preview/dev deployments, it will be whatever URL Vercel generates. For production, we should use `NEXT_PUBLIC_SITE_URL` instead. Both `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_VERCEL_URL` are auto-generated by Vercel, so no need to worry about it.

  Example: `NEXT_PUBLIC_REDIRECT_URL=http://localhost:3000`

## Usage

To run the project locally:

1. Start the development server
   ```sh
   yarn dev
   ```
2. Visit `http://localhost:3000` in your browser.

### Recommended Extensions

- Prettier
  - Open your command palette, choose your default formatter to be Prettier, and enable format on save.
- ESLint
  - When you push a commit, we have a pre-commit hook that automatically runs prettier, eslint, and builds your project to make sure everything is ok.
- JavaScript and TypeScript Nightly

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

- inquiry - [contact](https://www.google.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescripturl]: https://www.typescriptlang.org/
[vercel]: https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[vercel-url]: https://vercel.com/
[nextjs]: https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white
[nextjs-url]: https://nextjs.org/
[tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-%231a202c.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/
[discord]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=discord&logoColor=white
