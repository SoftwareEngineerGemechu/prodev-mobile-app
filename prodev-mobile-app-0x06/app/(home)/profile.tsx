import { View, Text, Image } from "react-native";

export default function Profile() {
    return (
        <View className="flex-1 items-center justify-center bg-white p-4">
            <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                className="w-24 h-24 rounded-full mb-4"
            />
            <Text className="text-xl font-bold text-gray-900">John Doe</Text>
            <Text className="text-gray-600 mb-6">@johndoe</Text>

            <View className="flex-row space-x-8">
                <View className="items-center">
                    <Text className="text-lg font-bold">120</Text>
                    <Text className="text-gray-600">Posts</Text>
                </View>
                <View className="items-center">
                    <Text className="text-lg font-bold">4.5K</Text>
                    <Text className="text-gray-600">Followers</Text>
                </View>
                <View className="items-center">
                    <Text className="text-lg font-bold">300</Text>
                    <Text className="text-gray-600">Following</Text>
                </View>
            </View>
        </View>
    );
}
