# React Whiteboard

A simple and interactive whiteboard built with React, utilizing the RoughJS library for sketchy hand-drawn style and HTML Canvas for creating various shapes and text. This project is designed for users who want to create quick sketches or diagrams with intuitive drawing tools.

## Features

- **Sketchy Drawing**: Uses RoughJS to generate rough, hand-drawn shapes like circles, rectangles, and ellipses.
- **Brush Tool**: Draw freehand strokes with a customizable brush tool, storing an array of points for smooth and dynamic drawing.
- **Shape Tools**: Create basic geometric shapes (rectangles, ellipses) by specifying initial and final coordinates, with customizable appearance using RoughJS's fill styles.
- **Text Tool**: Add text to the canvas using the Canvas API, with functionality for text erasure.
- **Eraser Tool**: Erase parts of the drawing or text using the "IsPointInPath" method, enabling precise erasure.
- **Arrow Tool**: Create arrows with a specific inclination (30 degrees), customizable to different coordinates.
- **Keyboard Shortcuts**: Switch between tools quickly using keyboard events.
- **Canvas Export**: Download the current canvas as an image using the `toDataURL` method.

## Technologies Used

- **React**: Framework for building the user interface.
- **RoughJS**: Library used for sketchy hand-drawn shapes and paths.
- **HTML Canvas API**: Used for rendering and interacting with the drawing area.
- **TailwindCSS (v3)**: For styling the app with a simple and clean design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-whiteboard.git
