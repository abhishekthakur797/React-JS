# Video No. 3: Installation Methods in JavaScript Projects

## Direct Installation

- **JavaScript Linking**: JavaScript will not work without being linked in the HTML. Ensure correct linking.
- **.gitignore File**: Defines which files to push to the repository and which to exclude.
  - Example: The `public` folder can be excluded.
- **Manifest.json**: Used for mobile device compatibility.
- **Index.html**:
  - Also known as a Single Page Application (SPA) file.
  - Contains an empty `<div id="root"></div>` for rendering.
  - Does not directly include JavaScript file links.
- **Index.js**:
  - Creates a constant `root` that selects the `<div id="root">` using `getElementById`.
  - Renders the main `App` component within the `root` element.
  - Inspecting `index.html` shows a `<script src="/static/js/bundle.js"></script>` tag behind the scenes.

### Function Naming Conventions

- Functions with lowercase names won't render correctly in JSX.
  - Function names should start with uppercase letters (e.g., `MyComponent`).
  - Lowercase function names can cause errors, as they are interpreted as HTML elements.

### File Naming Best Practice

- It is recommended to name files in `CapitalCase` to avoid errors and improve readability.

## Vite Installation

- **Script Linking**: Vite directly links JavaScript through the `src` attribute in the script tag.
- **Function Naming**: In Vite, functions should also start with uppercase letters for correct usage.

## Additional Notes

- **JSX (JavaScript XML)**:
  - JSX allows JavaScript to include HTML-like syntax for component creation.
- **JSON (JavaScript Object Notation)**:
  - JSON is used to structure data in a readable, key-value format.
- **React Fragments**:
  - React only allows one root element to be returned by a component.
  - `<></>` (Fragment) is introduced to allow multiple elements to be grouped without adding extra nodes to the DOM.
  - Fragments let you return multiple elements without wrapping them in a div.
