import { Stack } from "expo-router";
import '../global.css';  // Import global CSS styles

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="movies/[id]"
      options={{headerShown: false}}
    />
  </Stack>
}
