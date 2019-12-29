import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import startupScreen from '../screen/StartupScreen'
import welcomeScreen from '../screen/WelcomeScreen'
import AuthScreen from '../screen/users/AuthScreen';

const MainNavigator = createSwitchNavigator({
    startupScreen:startupScreen,
    Jobs : welcomeScreen,
    Auth:AuthScreen
})

export default createAppContainer(MainNavigator)