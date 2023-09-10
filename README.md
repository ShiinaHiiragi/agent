# Agents

<p align="right"> Version: 0.0.1 </p>

## Usage

1. Install dependencies listed in `package.json`;

    ```shell
    cd agent/
    npm install
    ```

2. Start Python back end program (default listening at port 9000);

    ```shell
    # in NLUI/
    python backend.py
    ```

    > ATTENTION: This is an early access version. Python's automatic start will be implemented in later versions.

3. For development, execute `npm start` and wait for react webpage and electron to start.

    For users, execute `npm run pack` and wait for build version.

## Prompts Examples

- I want to start working now. Please help set up the working environment for me.
- Please show me my upcoming meetings.
- Please create a meeting.
