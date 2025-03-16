import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    const IconSize = 20
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#071739',
            tabBarStyle: {
                backgroundColor: '#f0f2f2',
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={IconSize} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="invoices/generate"
                options={{
                    headerShown: false,
                    title: 'Invoices',
                    tabBarIcon: ({ color }) => <FontAwesome size={IconSize} name="support" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={IconSize} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}
