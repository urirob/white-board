# 🎨 React Whiteboard 🖼️

An interactive whiteboard built with **React**, utilizing the **RoughJS** library for sketchy hand-drawn styles and **HTML Canvas** for creating shapes and text. Perfect for quick sketches, diagrams, and creative brainstorming sessions!

## Features 🚀

- ✍️ **Sketchy Drawing**: Uses **RoughJS** to generate rough, hand-drawn shapes like circles, rectangles, and ellipses. 
- 🎨 **Brush Tool**: Draw freehand strokes with a customizable brush tool, storing an array of points for smooth and dynamic drawing.
- 🔲 **Shape Tools**: Draw basic geometric shapes (rectangles, circles, ellipses) with customizable appearance using RoughJS's fill styles.
- ✏️ **Text Tool**: Add text to the canvas using the **[Canvas API's `fillText`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText)** method, with functionality for text erasure.
- 🧹 **Eraser Tool**: Erase parts of the drawing or text with the **[isPointInPath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath)** method for precise erasure.
- 🔽 **Arrow Tool**: Draw arrows with a 30-degree inclination at the end.
- ⌨️ **Keyboard Shortcuts**: Switch between tools quickly using keyboard events (like arrow keys).
- 💾 **Canvas Export**: Download the current canvas as an image using the **[toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)** method.

## Technologies Used 🛠️

- **React**: Framework for building the user interface.
- **RoughJS**: Library used for sketchy hand-drawn shapes and paths.
- **HTML Canvas API**: Used for rendering and interacting with the drawing area.
- **TailwindCSS (v3)**: For styling the app with a simple and clean design.

## Installation 🧑‍💻

1. **Clone the repository**:
   ```bash
   git clone https://github.com/urirob/react-whiteboard.git

2. Navigate into the project directory:
   cd react-whiteboard
3. Install dependencies:
   npm install
4. Start the development server:
   npm start

This will open the app in your browser at http://localhost:3000. You can now begin drawing on the whiteboard, experimenting with the tools and features available.
