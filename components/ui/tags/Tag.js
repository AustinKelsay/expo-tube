import * as React from 'react';
import { Button, useTheme } from 'react-native-paper';

const Tag = ({ value, isSelected, onSelect }) => {
    const theme = useTheme();

    return (
        <Button
            style={[isSelected ? { backgroundColor: theme.colors.primary, marginRight: 10 } : { backgroundColor: theme.colors.surface, marginRight: 10}]}
            textColor={theme.colors.text}
            mode="contained-tonal"
            onPress={() => onSelect(value)}
        >
            {value}
        </Button>
    )
};

export default Tag;
