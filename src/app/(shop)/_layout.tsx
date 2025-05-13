import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
const TabsLayout = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarStyle: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingTop: 0,
          },
          //   headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "index",
          }}
        />
        <Tabs.Screen name="orders" options={{}} />
        {/* <Tabs.Screen name="/index" options={{}} />
      <Tabs.Screen name="/index" options={{}} />
      <Tabs.Screen name="/index" options={{}} /> */}
        {/* <Tabs.Screen name="/index" options={{}} /> */}
      </Tabs>
    </SafeAreaView>
  );
};
export default TabsLayout;
const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
});
