import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import VideoItem from './VideoItem';
import TagsList from '../ui/tags/TagsList';

export const Feed = () => {
    return (
        <View style={styles.container}>
            <TagsList />
            <Text variant='headlineMedium' style={styles.text}>Popular Streams</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.carousel}
                contentContainerStyle={styles.carouselContent}
            >
                {[...Array(12)].map((_, index) => (
                    <Card style={styles.videoCard} key={index}>
                        <VideoItem />
                    </Card>
                ))}
            </ScrollView>
            <Text variant='headlineMedium' style={styles.text}>Popular Videos</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.carousel}
                contentContainerStyle={styles.carouselContent}
            >
                {[...Array(12)].map((_, index) => (
                    <Card style={styles.videoCard} key={index}>
                        <VideoItem />
                    </Card>
                ))}
            </ScrollView>
            <Text variant='headlineMedium' style={styles.text}>Recently uploaded</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.carousel}
                contentContainerStyle={styles.carouselContent}
            >
                {[...Array(12)].map((_, index) => (
                    <Card style={styles.videoCard} key={index}>
                        <VideoItem />
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
    },
    carousel: {
        flexDirection: 'column',
        marginVertical: 15,
    },
    carouselContent: {
        width: '100%',
        flexDirection: 'row',
    },
    videoCard: {
        margin: 15,
    },
    text: {
        color: 'ghostwhite',
        paddingLeft: 20,
        paddingTop: 10,
    }
});
