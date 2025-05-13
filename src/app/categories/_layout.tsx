import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={(navigation) => ({
          headerShown: false,
          title: "categories",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                // Navigate back to the previous screen
                navigation.goBack();
              }}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                // style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
}
