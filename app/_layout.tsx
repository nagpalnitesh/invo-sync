import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';
import 'expo-dev-client';
import { Stack, useNavigationContainerRef } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import '../global.css';

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: !isRunningInExpoGo(),
});

Sentry.init({
  dsn: 'https://101f976506b2cea863d88b390da3265c@o4507759817785344.ingest.de.sentry.io/4508742113493072',
  debug: __DEV__, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  tracesSampleRate: 1.0, // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing. Adjusting this value in production.
  integrations: [
    // Pass integration
    navigationIntegration,
  ],
  enableNativeFramesTracking: !isRunningInExpoGo(), // Tracks slow and frozen frames in the application
});


function RootLayout() {
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref?.current) {
      navigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name='authorization' options={{ headerShown: false }} />
        <Stack.Screen name='settings' options={{ headerShown: false }} />
        <Stack.Screen name='main-screen' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='dashboard' options={{ headerShown: false }} />
        <Stack.Screen name='invoices/generate' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default Sentry.wrap(RootLayout);

// export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
//   return (
//     <View className="flex-1 items-center justify-center bg-gray-100 gap-8 p-8">
//       <View>
//         <Image
//           source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5803/5803901.png' }}
//           className="w-40 h-40 mb-4"
//         />
//       </View>
//       <View className='items-center gap-2'>
//         <Text className="text-4xl font-bold text-gray-800">Oops!</Text>
//         <Text className="text-gray-600 text-center text-lg">Something went wrong.</Text>
//         <Text className="text-gray-600 text-center mt-2">{error.message}</Text>
//         <Text className="text-dark text-lg  active:opacity-70 font-semibold" onPress={retry}>Try Again?</Text>
//       </View>
//     </View>
//   );
// }
