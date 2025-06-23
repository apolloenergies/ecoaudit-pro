# 🚀 How to Run the App Locally

1. **Install dependencies**
    ```bash
    npm install
    ```

2. **Create a development build**

    Since we use EAS as the build system, you’ll need to build the app for your platform:

    - **Android:**
        ```bash
        npm run android:dev
        ```
    - **iOS:**
        ```bash
        npm run ios:dev
        ```

    This will start a development server and generate a local build for your device or simulator.

3. **Install and run**

    Once you have built and installed the app on your simulator or phone, and assuming you haven’t added any additional packages, you can start the Metro bundler:

    ```bash
    npm start
    ```

    Then, select the platform you want the project to run on.

---

# 📁 Folder Structure

| Folder         | Purpose                               |
| -------------- | ------------------------------------- |
| `components/`  | Reusable UI components                |
| `contexts/`    | All React Contexts/providers          |
| `hooks/`       | Custom React hooks                    |
| `navigation/`  | Navigation stacks, tab configs        |
| `screens/`     | Each screen/page                      |
| `utils/`       | Helpers, formatters, constants        |
| `services/`    | Abstractions for third-party packages |
| `config/`      | Files for basic configuration stuff   |
| `theme/`       | Design system for the app             |
| `theme/`       | Design system for the app             |

