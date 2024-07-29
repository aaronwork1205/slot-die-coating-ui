# Slot Die Coating Control System

This project demonstrates a Slot Die Coating Control System that integrates a Python backend, a React frontend, a Flask server, and an Arduino for hardware control. The system includes a login feature to manage user access.
![Control System](https://github.com/aaronwork1205/slot-die-coating-ui/blob/main/readmeAsset/landingpage.jpg)
![Control System](https://github.com/aaronwork1205/slot-die-coating-ui/blob/main/readmeAsset/login.jpg)
![Control System](https://github.com/aaronwork1205/slot-die-coating-ui/blob/main/readmeAsset/register.jpg)
![Control System](https://github.com/aaronwork1205/slot-die-coating-ui/blob/main/readmeAsset/control.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Login System:** Secure login system to manage user access.
- **Control Interface:** A user-friendly interface to control the slot die coating process.
- **Data Visualization:** Real-time data visualization of the coating process.
- **Hardware Integration:** Integration with Arduino for precise control of the hardware components.

## Technologies Used

- **Frontend:** React
- **Backend:** Python, Flask
- **Hardware:** Arduino, LabView
- **Other Libraries:** Various Python and JavaScript libraries for data processing and visualization

## Installation

### Prerequisites

- Node.js and npm
- Python 3.10
- Arduino IDE

### Frontend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/aaronwork1205/slot-die-coating-ui.git
    cd slot-die-coating-ui
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Start the React development server:
    ```sh
    npm run dev
    ```

### Backend Setup

1. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2. Install backend dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Run the Flask server:
    ```sh
    python app.py
    ```

### Arduino Setup

1. Open the Arduino IDE.
2. Load the provided Arduino sketch from the repository.
3. Upload the sketch to your Arduino board.

## Usage

1. Ensure all components (frontend, backend, and Arduino) are running.
2. Access the frontend via your web browser at `http://localhost:5173`.
3. Log in using your credentials.
4. Use the control interface to manage the slot die coating process.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
