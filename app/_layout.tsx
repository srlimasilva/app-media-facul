import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack 
    //Oculta o cabeçalho
    screenOptions={
      {headerShown: false}
    }>
      <Stack.Screen name="index" />
    </Stack>
  );
}
