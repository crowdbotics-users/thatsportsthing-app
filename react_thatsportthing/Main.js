import { createStackNavigator } from "react-navigation";
import Colors from "./App/Resource/Colors";

import LoginType from "./App/Screen/LoginTypeScreen";
import Login from "./App/Screen/LoginScreen";
import SignUp1 from "./App/Screen/SignUpScreen1";
import SignUp2 from "./App/Screen/SignUpScreen2";
import SignUp3 from "./App/Screen/SignUpScreen3";
import ForgotPasswordScreen from "./App/Screen/ForgotPasswordScreen";
import HomePage from "./App/Screen/HomePage";

import EditProfileScreen from "./App/Screen/EditProfileScreen";
import AddPostScreen from "./App/Screen/AddPostScreen";
import OneTimePasswordScreen from "./App/Screen/OneTimePasswordScreen";
import UpdatePasswordScreen from "./App/Screen/UpdatePasswordScreen";
import CommentListScreen from "./App/Screen/CommentListScreen";
import AddCommentScreen from "./App/Screen/AddCommentScreen";
import MyCrewScreen from "./App/Screen/MyCrewScreen";
import MyFollowersScreen from "./App/Screen/MyFollowersScreen";
import ProfileScreen from "./App/Screen/ProfileScreen";
import ReplyCommentListScreen from "./App/Screen/ReplyCommentListScreen";
import AddReplyScreen from "./App/Screen/AddReplyScreen";
import TestScreen from "./App/Screen/TestScreen";
import MessageListScreen from "./App/Screen/Messages/MessageListScreen";
import SendMessageScreen from "./App/Screen/Messages/SendMessageScreen";
import NotificationSettingScreen from "./App/Screen/AccountSetting/NotificationSettingScreen";
import PrivacySettingScreen from "./App/Screen/AccountSetting/PrivacySettingScreen";
import SecuritySettingScreen from "./App/Screen/AccountSetting/SecuritySettingScreen";
import ChangePasswordScreen from "./App/Screen/Secutiry/ChangePasswordScreen";
import SaveLoginInfoScreen from "./App/Screen/Secutiry/SaveLoginInfoScreen";
import ActivityStatusScreen from "./App/Screen/Privacy/ActivityStatusScreen";
import PhotoVideosPrivacyScreen from "./App/Screen/Privacy/PhotoVideosPrivacyScreen";

const EditProfileScreenNavigator = createStackNavigator({
  EditProfileScreen: {
    screen: EditProfileScreen
  }
});
const MyCrewScreenNavigator = createStackNavigator({
  MyCrewScreen: {
    screen: MyCrewScreen
  }
});
const MyFollowersScreenNavigator = createStackNavigator({
  MyFollowersScreen: {
    screen: MyFollowersScreen
  }
});
const AddPostScreenNavigator = createStackNavigator({
  AddPostScreen: {
    screen: AddPostScreen
  }
});
const AddCommentScreenNavigator = createStackNavigator({
  AddCommentScreen: {
    screen: AddCommentScreen
  }
});
const AddReplyScreenNavigator = createStackNavigator({
  AddReplyScreen: {
    screen: AddReplyScreen
  }
});
const CommentListScreenNavigator = createStackNavigator({
  CommentListScreen: {
    screen: CommentListScreen
  }
});
const ReplyCommentListScreenNavigator = createStackNavigator({
  ReplyCommentListScreen: {
    screen: ReplyCommentListScreen
  }
});
const ProfileScreenNavigator = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen
  }
});
const MessageListScreenNavigator = createStackNavigator({
  MessageListScreen: {
    screen: MessageListScreen
  }
});
const SendMessageScreenNavigator = createStackNavigator({
  SendMessageScreen: {
    screen: SendMessageScreen
  }
});
const NotificationSettingScreenNavigator = createStackNavigator({
  NotificationSettingScreen: {
    screen: NotificationSettingScreen
  }
});
const PrivacySettingScreenNavigator = createStackNavigator({
  PrivacySettingScreen: {
    screen: PrivacySettingScreen
  }
});
const SecuritySettingScreenNavigator = createStackNavigator({
  SecuritySettingScreen: {
    screen: SecuritySettingScreen
  }
});
const ChangePasswordScreenNavigator = createStackNavigator({
  ChangePasswordScreen: {
    screen: ChangePasswordScreen
  }
});
const SaveLoginInfoScreenNavigator = createStackNavigator({
  SaveLoginInfoScreen: {
    screen: SaveLoginInfoScreen
  }
});
const ActivityStatusScreenNavigator = createStackNavigator({
  ActivityStatusScreen: {
    screen: ActivityStatusScreen
  }
});
const PhotoVideosPrivacyScreenNavigator = createStackNavigator({
  PhotoVideosPrivacyScreen: {
    screen: PhotoVideosPrivacyScreen
  }
});

const Main = createStackNavigator(
  {
    TestScreen: { screen: TestScreen },
    LoginType: { screen: LoginType },
    Login: { screen: Login },
    SignUp1: { screen: SignUp1 },
    SignUp2: { screen: SignUp2 },
    SignUp3: { screen: SignUp3 },
    ForgotPasswordScreen: { screen: ForgotPasswordScreen },
    OneTimePasswordScreen: { screen: OneTimePasswordScreen },
    UpdatePasswordScreen: { screen: UpdatePasswordScreen },
    ProfileScreen: {
      screen: ProfileScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    EditProfileScreen: {
      screen: EditProfileScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    AddPostScreen: {
      screen: AddPostScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    AddCommentScreen: {
      screen: AddCommentScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    AddReplyScreen: {
      screen: AddReplyScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    MyCrewScreen: {
      screen: MyCrewScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    MyFollowersScreen: {
      screen: MyFollowersScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    CommentListScreen: {
      screen: CommentListScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    ReplyCommentListScreen: {
      screen: ReplyCommentListScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    MessageListScreen: {
      screen: MessageListScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    SendMessageScreen: {
      screen: SendMessageScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    NotificationSettingScreen: {
      screen: NotificationSettingScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    PrivacySettingScreen: {
      screen: PrivacySettingScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    SecuritySettingScreen: {
      screen: SecuritySettingScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    ChangePasswordScreen: {
      screen: ChangePasswordScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    SaveLoginInfoScreen: {
      screen: SaveLoginInfoScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    ActivityStatusScreen: {
      screen: ActivityStatusScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    PhotoVideosPrivacyScreen: {
      screen: PhotoVideosPrivacyScreenNavigator,
      navigationOptions: {
        header: null
      }
    },
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "LoginType",
    headerMode: "float",
    navigationOptions: {
      gesturesEnabled: false,
      headerTitleStyle: {
        color: Colors.black
      },
      headerStyle: {
        backgroundColor: Colors.colorBg
      }
    }
  }
);
export default Main;
