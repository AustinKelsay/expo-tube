import * as React from 'react';
import { Stack } from 'expo-router';
import Header from '../components/ui/Header';
import { MD3DarkTheme as DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
  } from 'expo-router';

const theme = {
  colors: {
    background: '#121212',
    secondaryBackground: '#282828',
    surface: '#3f3f3f',
    primary: '#463beb',
    secondary: '#bb86fc',
    danger: '#cf6679',
    text: 'ghostwhite',
  }
};

export default function RootLayout() {
    return (
        <PaperProvider theme={theme}>
            <Stack screenOptions={{ header: Header }} >
                <Stack.Screen name="/" />
            </Stack>
        </PaperProvider>
    );
}
