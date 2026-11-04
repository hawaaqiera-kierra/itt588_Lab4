# Kinfolk | Bennett Family Tree

A responsive, interactive front-end family tree built with HTML, CSS, and vanilla JavaScript. Family information is loaded dynamically from `people.json`.

## Features
- Family tree grouped by generations
- Click any person to open a profile drawer
- Family connections: parents, spouses, and children
- Search by name, profession, location, or blood group
- Generation filters, zoom controls, and reset
- All-members directory with search
- Responsive layout for desktop and mobile
- MVC-inspired separation: `people.json` (data), `app.js` (logic/controller), `index.html` + `style.css` (view)

## Run locally
Because the app loads `people.json` with `fetch`, open the folder using a local server. In VS Code, install/use **Live Server**, then right-click `index.html` and choose **Open with Live Server**.

Alternative with Python installed:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Customize the data
Edit `people.json`. Each person uses `fatherId`, `motherId`, and `spouses` to describe relationships. Keep IDs consistent when adding family members.
