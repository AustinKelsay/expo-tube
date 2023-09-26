import * as React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import Tag from './Tag';
import { LinearGradient } from 'expo-linear-gradient';

const CATEGORIES = [
    'All',
    'Popular',
    'Streams',
    'Education'
]

const TagsList = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={CATEGORIES}
                renderItem={({ item }) => 
                    <Tag 
                        value={item} 
                        isSelected={selectedCategory === item} 
                        onSelect={setSelectedCategory} 
                    />
                }
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingVertical: 15,
        position: 'relative',
    }
});

export default TagsList;