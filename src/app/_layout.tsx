import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{ headerShown: false, title: "shop" }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: "categories" }}
      />
      <Stack.Screen
        name="products"
        options={{ headerShown: true, title: "products" }}
      />
      <Stack.Screen
        name="auth"
        options={{ headerShown: true, title: "auth" }}
      />
      <Stack.Screen
        name="cart"
        options={{ presentation: "modal", title: "cart" }}
      />
    </Stack>
  );
}
