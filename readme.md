# Criteria Adding Component

This project provides a dynamic interface for adding, managing, and displaying criteria or rules. Built with modern web technologies, it aims to simplify the management of active rules and their properties.

![image](https://github.com/user-attachments/assets/eebb5dc9-84f9-4b39-9c18-9646395322e0)


## Features

- **Add and Delete Criteria**: Easily add or remove criteria with intuitive buttons.
- **Dynamic Rule Display**: Active rules are dynamically loaded and displayed from predefined data.
- **Interactive Toggles**: Enable or disable rules using interactive toggle switches.
- **Responsive Design**: Styled for a clean and responsive user experience.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- A modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HardikGoyal2003/CriteriaAddingComponent.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CriteriaAddingComponent
   ```

3. Open `index.html` in your browser to view the project:
   ```bash
   open index.html
   ```

## Project Structure

```
CriteriaAddingComponent/
├── index.html           # Main HTML file
├── style.css            # Stylesheet for the project
├── models.js            # Contains dummy data and schemas
├── index.js             # Main JavaScript logic for dynamic rendering
└── README.md            # Documentation for the project
```

## Usage

1. **Adding a Rule:**
   - Click the "ADD" button under the "Create New Criteria" section.

2. **Deleting a Rule:**
   - Use the "DELETE" button to remove unwanted criteria.

3. **Viewing Active Rules:**
   - Active rules are displayed under the "Active Rules" section. Each rule has a toggle to activate or deactivate it.

## Example Data

```javascript
const CACHING_ACTIVE_RULE = {
    name: 'Caching',
    active: false,
    criteria: [
        {'criteria_1':[        
            '192.45.1.1',
            '192.62.1.1',
            '192.60.1.1',
            '192.61.1.1'
        ]},
        {'criteria_2':[
            '192.45.1.1',
        ]},
        {'criteria_2':[]},
        {'criteria_1':[
            '192.60.1.1',
            '192.61.1.1'
        ]}
    ],
}

const HTML_ACTIVE_RULE = {
    name: 'HTML',
    active: false,
    criteria: [
        {'criteria_1': [
            '192.45.1.1',
            '192.62.1.1',
            '192.60.1.1',
            '192.61.1.1'
        ]},
        {'criteria_1': []}
    ],
}

const CSS_ACTIVE_RULE = {
    name: 'CSS',
    active: false,
    criteria: [
        {'criteria_2': []}
    ],
}

let components = [
    CACHING_ACTIVE_RULE,
    HTML_ACTIVE_RULE,
    CSS_ACTIVE_RULE,
]
```

## Technologies Used

- **HTML**: Structure and layout
- **CSS**: Styling and responsiveness
- **JavaScript**: Dynamic rendering and logic
- **Bootstrap**: Prebuilt styles for UI components

## Contribution

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author

[Hardik Goyal](https://github.com/HardikGoyal2003)

## Acknowledgments

- Bootstrap for responsive design
- JavaScript for dynamic content loading

