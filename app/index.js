import { Text, useTheme } from "react-native-paper";
import { Feed } from "../components/feed/Feed";
import { View } from "react-native";
import TagsList from "../components/ui/tags/TagsList";

export default function FeedScreen() {
    const theme = useTheme({ dark: true });

    return (
        <View style={{backgroundColor: theme.colors.background}}>
            <Feed />
        </View>
    );
}