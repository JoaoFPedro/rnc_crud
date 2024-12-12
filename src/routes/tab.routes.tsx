import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserList from '../UserList';
import UserForm from '../UserForm';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserList" component={UserList} />
      <Tab.Screen name="UserForm" component={UserForm} />
    </Tab.Navigator>
  );
}

export default TabRoutes;