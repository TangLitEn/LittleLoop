# little loops

A minimal crochet showcase built with Next.js App Router and React. Includes the sticky yarn logo, all five supplied photos, photo previews, a home page and a contact/order page.

## Local preview

Use Node.js 20.9 or later (Node.js 22 is used for deployment).

```sh
npm install
npm run dev
```

Open http://localhost:3000. The contact page is at http://localhost:3000/contact/. Changes refresh automatically. Stop the server with Ctrl+C.

## Editing

- `app/page.jsx`: home page and collection.
- `app/contact/page.jsx`: contact page.
- `app/globals.css`: shared styles, colours and responsive layouts.
- `components/`: header, photo viewer and enquiry form.
- Photo viewers accept an `images` array to group several photos under one item, with thumbnails and previous/next controls. The rose basket uses both supplied photos.
- `lib/site.js`: email addresses, enquiry options and asset path helper.
- `public/assets/`: the photos and editable SVG yarn logo.

Product enquiry links open the contact page with the piece already selected. Orders go to **qqqianhoo@gmail.com**; selecting “Help with an order” routes the email to **tangliten512@gmail.com**.

The form opens a prefilled email draft for the visitor to review and send. It offers a copyable enquiry if no email app is configured. No backend or order database is required.

## Static build

```sh
npm run build
```

Next.js exports the complete static site into `out/`. For the GitHub project path `/LittleLoop/`, use:

```sh
npm run build:pages
```

The app uses `output: 'export'`, trailing slashes and unoptimized local images, so the exported site runs on GitHub Pages without a Node.js server. `public/.nojekyll` is included in the export. See the [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports).

## Publish to GitHub Pages

1. In `TangLitEn/LittleLoop`, open **Settings → Pages** and choose **GitHub Actions** as the source.
2. Commit the source files, including `package-lock.json` and `.github/workflows/deploy-pages.yml`, and push to `main`.
3. The included workflow installs dependencies, builds `out/` and deploys it. The default project URL is https://tangliten.github.io/LittleLoop/.

The workflow reads the publishing base path from GitHub, including when a custom domain is configured. Local development uses `/`; `build:pages` explicitly targets `/LittleLoop/` for a local export. See the [official Next.js GitHub Pages template](https://github.com/nextjs/deploy-github-pages).
