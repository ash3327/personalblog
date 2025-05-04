# For developers

Migrating the previous webpage to React, as a learning experience for myself, and NodeJS and React being the most popular front end language for web.

References:
* React, learning from scratch: https://github.com/gitname/react-gh-pages

## Dependencies

<!-- NextJS:
```bash
npm install next react react-dom
``` -->
React Router:
```bash
npm install react-router-dom
```

Tailwind:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Material UI:
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/lab
```

Font Awesome:
```bash
npm install @fortawesome/fontawesome-free
```

## Local Deployment

Execute the following:
```bash
cd my-app
npm run start
```

## GitHub Pages Deployment

Execute the following:
```bash
npm run build
npm run deploy
```


## Setting Up

Make sure that you `cd my-app` into the subfolder `my-app` before executing the following:

Re-installing packages:
```bash
npm install
```

Local running:
```bash
npm run dev
```

## Notes

Adding packages for `"@/components/ui/<component-name>"`:
```bash
npx shadcn@latest add <component-name>
```

Other packages originally missing:
```bash
npm install <package-name>
```


