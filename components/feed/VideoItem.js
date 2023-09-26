import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Text, useTheme } from 'react-native-paper';

const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;

const ChannelAvatar = ({ uri }) => <Avatar.Image size={48} source={{ uri }} />

const VideoItem = () => {
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const theme = useTheme();

  // Fetch channel data
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCRPvdcPYyWAXF7cOjW_dJCA&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          setChannelData(data.items[0]);
        }
      });
  }, []);

  // Fetch video data when the component mounts
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=QHIHf3rGew4&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          setVideoData(data.items[0]);
        }
      });
  }, []);

  // Return null or a loading spinner until both video and channel data are fetched
  if (!videoData || !channelData) return null;

  return (
    <Card style={{backgroundColor: theme.colors.secondaryBackground}}>
        <Card.Cover source={{ uri: videoData.snippet.thumbnails.high.url }} />
      <Card.Title 
        titleStyle={styles.text}
        subtitleStyle={styles.boldText}
        title={videoData.snippet.title}
        subtitle={videoData.snippet.channelTitle}
        // Use channel avatar from channel data
        left={() => <ChannelAvatar uri={channelData.snippet.thumbnails.default.url} />} 
      />
      <Card.Content>
        <Text style={styles.text}>Views: {videoData.statistics.viewCount} • {new Date(videoData.snippet.publishedAt).toDateString()}</Text>
      </Card.Content>
      <Card.Actions>
        {/* Can have actions or buttons here like Share or Save */}
      </Card.Actions>
    </Card>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
    text: {
        color: 'ghostwhite'
    },
    boldText: {
        color: 'ghostwhite',
        fontWeight: 'bold'
    }
});
