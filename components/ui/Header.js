import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

export default function Header() {
    const theme = useTheme();

    return (
        <Appbar.Header style={{backgroundColor: theme.colors.secondaryBackground}}>
            {/* <Appbar.BackAction onPress={() => { }} /> */}
            <Appbar.Content titleStyle={{color: theme.colors.text}} title="NostrTV" />
            <Appbar.Action iconColor='ghostwhite' style={{backgroundColor: theme.colors.primary}} icon="magnify" onPress={() => { }} />
            <Appbar.Action iconColor='ghostwhite' style={{backgroundColor: theme.colors.primary}} icon="account-circle" onPress={() => { }} />
        </Appbar.Header>
    );
}
