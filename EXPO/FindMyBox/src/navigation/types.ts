import { StackNavigationProp } from "@react-navigation/stack";


// mantengo privata la lista delle rotte, esporto direttamente il NavigationProp
type RootStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    EntryScreen: undefined;
    HomeScreen: undefined;
    // Se una rotta accetta parametri: Example: { id: number }
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;