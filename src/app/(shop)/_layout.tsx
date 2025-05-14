import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      size={24}
      style={{ marginBottom: -3, color: "#1BC464" }}
      {...props}
    />
  );
}
const TabsLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.SafeArea}>
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
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "shop",
            tabBarIcon(props) {
              return <TabBarIcon name="shopping-cart" {...props} />;
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "orders",
            tabBarIcon(props) {
              return <TabBarIcon name="book" {...props} />;
            },
          }}
        />
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
