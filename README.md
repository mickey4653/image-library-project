# image-library-project

This project is a simple image gallery webpage created using HTML, CSS, and JavaScript. It allows users to view a collection of images in a grid layout and select images using checkboxes.

## Features

- Responsive grid layout for displaying images
- Checkbox selection for images
- Cross-browser compatibility

## Getting Started

### Prerequisites

- Git
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/image-library-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd image-library-project
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

## Usage

1. Open the `index.html` file in your web browser.
2. Use the checkboxes to select images.
3. View the selected images in the grid.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images provided by ACRE Image Collections

---

## Development Process

1. **Clone Repository:** Clone the project repository to your local machine:

    ```bash
    git clone https://github.com/your-username/image-library-project.git
    ```

2. **Navigate to Project Directory:** Open a terminal or command prompt and change to the project directory:

    ```bash
    cd image-library-project
    ```

3. **Setup Project Dependencies:** Ensure that you have Node.js installed on your system. Then, install project dependencies using npm:

    ```bash
    npm install
    ```

4. **Development Environment:** Use a text editor or IDE of your choice to make changes to the project files located in the `src` directory.

5. **Run Grunt:** Grunt is used to compile SCSS and JavaScript files and generate the distribution files. Run Grunt to compile the files:

    ```bash
    grunt
    ```

6. **View Changes:** Open the `index.html` file in your web browser to view the changes you've made.

7. **Testing:** Test your webpage on different screen sizes to ensure responsiveness. Make adjustments to the HTML, CSS, and JavaScript as needed.

8. **Optimization:** Optimize images for the web to reduce page load time.

9. **Validation:** Validate your HTML and CSS using online validators to ensure correctness.

10. **Git Workflow:** Commit your changes to the repository regularly using Git. Remember to add a meaningful commit message describing the changes made.

11. **Contributions:** Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

---

## Running with npm http-server

To run the project locally with npm http-server, follow these steps:

1. **Install npm http-server:** Install the npm http-server package globally on your system:

    ```bash
    npm install -g http-server
    ```

2. **Update your package.json:** Add a script to start the http-server in your `package.json` file:

    ```json
    {
      "name": "image-gallery-project",
      "version": "1.0.0",
      "description": "Image Gallery Project",
      "main": "index.js",
      "scripts": {
        "start": "http-server dist"
      },
      "author": "Your Name",
      "license": "ISC",
      "devDependencies": {
        "grunt": "^1.4.0",
        "grunt-contrib-sass": "^2.0.0",
        "grunt-contrib-uglify": "^5.0.0"
        // Add other dependencies as needed
      }
    }
    ```

3. **Run the Project:** Run the project using npm:

    ```bash
    npm start
    ```

    This will start the http-server, and you can view your image gallery project by navigating to [http://localhost:8080](http://localhost:8080) or http://127.0.0.1:8080 in your web browser.
    Note: Make sure to navigate to the `dist/` on the browser.

