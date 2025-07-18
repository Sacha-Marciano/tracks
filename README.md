# Tracks App

A React Native (Expo) application for tracking and recording your movement on a map, saving tracks, and managing your account. The app features authentication, real-time location tracking, and persistent storage of user-created tracks.

## Features

- **User Authentication**: Sign up, sign in, and sign out securely.
- **Track Recording**: Record your movement using GPS, name your tracks, and save them.
- **Track List & Details**: View a list of your saved tracks and see each track's path on a map.
- **Account Management**: Manage your account and sign out.
- **Mock Location Support**: For development/testing without moving physically.

## Screenshots

*Add screenshots here if available*

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```bash
  npm install -g expo-cli
  ```
- Android/iOS device or emulator, or [Expo Go](https://expo.dev/client)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd tracks
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   Or use:
   - `npm run android` for Android
   - `npm run ios` for iOS
   - `npm run web` for web

4. **Run on your device:**
   - Scan the QR code with Expo Go, or run on an emulator.

### API Backend
This app expects a backend server for authentication and track storage. The API base URL is set in `src/api/tracker.js` (currently using an ngrok URL). You may need to:
- Set up your own backend (Node.js/Express/MongoDB recommended)
- Update the `baseURL` in `src/api/tracker.js` to your server's address

## Usage

1. **Sign Up / Sign In**: Create an account or log in.
2. **Create a Track**:
   - Go to 'Add Track'.
   - Enter a name, start recording, and move around.
   - Stop recording and save the track.
3. **View Tracks**:
   - Go to 'Tracks List' to see all saved tracks.
   - Tap a track to view its path on a map.
4. **Account**:
   - Go to 'Settings' to sign out.

## Development Notes

- **Mock Location**: For development, you can use `src/_mockLocation.js` to simulate movement. Uncomment the import in `TrackCreateScreen.js` to enable.
- **Navigation**: Uses `react-navigation` (stack, switch, and bottom tab navigators).
- **State Management**: Custom context with reducers for authentication, location, and tracks.
- **Location**: Uses `expo-location` for GPS tracking.
- **UI**: Built with `react-native-elements` and `react-native-paper`.

## Project Structure

```
tracks/
  App.js                # Main app entry
  index.js              # Expo entry point
  app.json              # Expo config
  src/
    api/                # API client (axios)
    components/         # Reusable UI components
    contexts/           # Context providers (Auth, Location, Track)
    hooks/              # Custom React hooks
    screens/            # App screens (Sign in, Sign up, Track, etc.)
    navigationRef.js    # Navigation service
    _mockLocation.js    # Mock location for dev
```

## Dependencies

- react, react-native, expo
- react-navigation, react-navigation-stack
- react-native-elements, react-native-paper
- expo-location, react-native-maps
- axios, @react-native-async-storage/async-storage

See `package.json` for the full list.

## License

*Specify your license here (e.g., MIT, Apache 2.0, etc.)*

## Author

- [Your Name or Organization]

---

*Feel free to open issues or pull requests for improvements!* 