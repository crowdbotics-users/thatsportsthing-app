import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  Linking,
  TextInput,
  Platform,
  NetInfo,
  Alert
} from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

import PropTypes from "prop-types";

import styles from "../Resource/Styles";
import Color from "../Resource/Colors";
import Icon from "../Resource/Icons";
import Icons from "../Resource/Icons";
import ApiUrl from "../Network/ApiUrl";
import ProgressCompoment from "./ProgressCompoment";

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProgress: false,
      username: "",
      useremail: "",
      userimage: "",
      isActiveTab: false,
      isActiveHome: true,
      isActiveProfile: false,
      isActivePosts: false,
      isActivePhotos: false,
      isActiveVideos: false,
      isActiveFriends: false,
      isActiveAccountSettings: false,
      isActiveLogout: false
    };
  }
  componentDidMount() {
    if(this.props.activeDrawer=="home"){
      this.doHome();
    }
  }
  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
    this.closeDrawer();
  };
  doLogout(screen) {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        AsyncStorage.getItem("data")
          .then(data => {
            console.log("AsyncStorage");
            if (data != null) {
              const myData = JSON.parse(data);
              console.log(data);

              let postData = {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + myData.token,
                  "Content-Type": "multipart/form-data"
                }
              };

              this.openProgressbar();
              this.doLogoutApi(postData, screen);
            } else {
              console.log(data);
            }
          })
          .done();
      } else {
        Alert.alert(
          "Internet Connection",
          "Kindly connect to internet then try again"
        );
      }
    });
  }
  openProgressbar = () => {
    this.setState({ isProgress: true });
  };
  hideProgressbar = () => {
    this.setState({ isProgress: false });
  };
  doLogoutApi(bodyData, screen) {
    const { navigate, dispatch } = this.props.navigation;
    fetch(ApiUrl.logoutUrl, bodyData)
      .then(response => response.json())
      .then(responseJson => {
        this.hideProgressbar();
        const message = responseJson.message;
        const status = responseJson.status;

        switch (status) {
          case 200: {
            console.log(message);
           
            AsyncStorage.clear();
            AsyncStorage.setItem("logged", "false");
            
            const resetAction = StackActions.reset({
              index: 0,
              key: null,
              actions: [NavigationActions.navigate({ routeName: screen })]
            });
            dispatch(resetAction);
            this.closeDrawer();
            break;
          }
          case 401: {
           
            alert(message);
            console.log(message);
            break;
          }
          case 400: {
          
            alert(message);
            console.log(message);
            break;
          }
        }
      })
      .catch(error => {
        this.hideProgressbar();
        console.log(error);
      });
  }
  doRateUs() {
    Linking.openURL("http://www.goodindiabadindia.com/terms-conditons.html");
    this.closeDrawer();
  }
  doHome = () => {
    this.setState({
      isActiveHome: true,
      isActiveProfile: false,
      isActivePosts: false,
      isActivePhotos: false,
      isActiveVideos: false,
      isActiveFriends: false,
      isActiveAccountSettings: false,
      isActiveLogout: false
    });
    this.closeDrawer();
  };
  doProfile = () => {
    this.setState({
      isActiveHome: false,
      isActiveProfile: true,
      isActivePosts: false,
      isActivePhotos: false,
      isActiveVideos: false,
      isActiveFriends: false,
      isActiveAccountSettings: false,
      isActiveLogout: false
    });
    this.closeDrawer();
  };
  doPosts = () => {
    this.setState({
      isActiveHome: false,
      isActiveProfile: false,
      isActivePosts: true,
      isActivePhotos: false,
      isActiveVideos: false,
      isActiveFriends: false,
      isActiveAccountSettings: false,
      isActiveLogout: false
    });
    this.closeDrawer();
  };
  doPhotos = () => {
    this.setState({
      isActiveHome: false,
      isActiveProfile: false,
      isActivePosts: false,
      isActivePhotos: true,
      isActiveVideos: false,
      isActiveFriends: false,
      isActiveAccountSettings: false,
      isActiveLogout: false
    });
    this.closeDrawer();
  };
  doVideos = () => {
    this.setState({
      isActiveHome: false,
      isActiveProfile: false,
      isActivePosts: false,
      isActivePhotos: false,
      isActiveVideos: true,
      isActiveFriends: false,
      isActiveAccountSettings: false,
      isActiveLogout: false
    });
    this.closeDrawer();
  };
  doFriends = () => {
    this.setState({
      isActiveHome: false,
      isActiveProfile: false,
      isActivePosts: false,
      isActivePhotos: false,
      isActiveVideos: false,
      isActiveFriends: true,
      isActiveAccountSettings: false,
      isActiveLogout: false
    });
    this.doRedirect("MyCrewScreen");
    this.closeDrawer();
  };
  doAccountSetting = () => {
    this.setState({
      isActiveHome: false,
      isActiveProfile: false,
      isActivePosts: false,
      isActivePhotos: false,
      isActiveVideos: false,
      isActiveFriends: false,
      isActiveAccountSettings: true,
      isActiveLogout: false
    });
    this.closeDrawer();
  };
  closeDrawer = () => {
    this.props.navigation.closeDrawer();
  };
  doRedirect(screen) {
    
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: Color.navBg,
            justifyContent: "flex-start",

            height: 200
          }
        ]}
      >
        <ProgressCompoment isProgress={this.state.isProgress} />
        <View
          style={{
            backgroundColor: Color.bgHeader,
            height: 100,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                alignContent: "flex-start",
                justifyContent: "center"
              }}
            >
              <Image
                source={Icons.logo_white}
                style={{
                  margin: 10,
                  width: 90,
                  height: 59
                }}
              />
            </View>
            <View
              style={{
                margin: 10,
                width: 81,
                height: 81,
                borderRadius: 45,
                backgroundColor: "#F8F6F7",
                alignSelf: "flex-end",
                justifyContent: "flex-end",
                alignContent: "flex-end"
              }}
            >
              <Image
                source={Icons.messi}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 1.5,
                  borderColor: "#D1D0D0",
                  alignSelf: "center"
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#313131",
              flexDirection: "row",
              padding: Platform.OS == "android" ? 0 : 10,
              borderColor: Color.colorSearch,
              margin: 10,
              borderRadius: 5
            }}
          >
            <Image
              source={Icons.ic_search}
              style={{ width: 24, height: 24, marginRight: 5, marginLeft: 10 }}
            />
            <TextInput
              returnKeyType="done"
              placeholder="Search.."
              style={{
                padding: Platform.OS == "android" ? 5 : 0,
                color: Color.colorSearch,
                flex: 1,
                marginLeft: 5,
                fontSize: 14,
                fontFamily: "OpenSans-SemiBold"
              }}
              underlineColorAndroid={Color.transparent}
              placeholderTextColor={Color.colorSearch}
            />
          </View>
        </View>
        <View
          style={{ height: 2, width: "100%", backgroundColor: Color.bgHeader }}
        />
        <View>
          <View style={{ backgroundColor: Color.navBg }}>
            <TouchableOpacity onPress={this.doHome.bind(this)}>
              <View
                style={{
                  backgroundColor: this.state.isActiveHome
                    ? "#313131"
                    : Color.transparent,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch,
                  marginTop: 10
                }}
              >
                <Image
                  resizeMode="contain"
                  source={Icons.ic_home}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  Home
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.doProfile.bind(this)}>
              <View
                style={{
                  backgroundColor: this.state.isActiveProfile
                    ? "#313131"
                    : Color.navBg,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch
                }}
              >
                <Image
                  source={Icons.ic_profile}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  My Profile
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.doPosts.bind(this)}>
              <View
                style={{
                  backgroundColor: this.state.isActivePosts
                    ? "#313131"
                    : Color.navBg,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch
                }}
              >
                <Image
                  source={Icons.ic_posts}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  My Posts
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.doPhotos.bind(this)}>
              <View
                style={{
                  backgroundColor: this.state.isActivePhotos
                    ? "#313131"
                    : Color.navBg,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch
                }}
              >
                <Image
                  resizeMode="contain"
                  source={Icons.ic_photos}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  Photos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.doVideos.bind(this)}>
              <View
                style={{
                  backgroundColor: this.state.isActiveVideos
                    ? "#313131"
                    : Color.navBg,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch
                }}
              >
                <Image
                  resizeMode="contain"
                  source={Icons.ic_videos}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  Videos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.doFriends.bind(this)}>
              <View
                style={{
                  backgroundColor: this.state.isActiveFriends
                    ? "#313131"
                    : Color.navBg,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch
                }}
              >
                <Image
                  resizeMode="contain"
                  source={Icons.ic_friends}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  Crew
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.doAccountSetting.bind(this)}>
              <View
                style={{
                  backgroundColor: this.state.isActiveAccountSettings
                    ? "#313131"
                    : Color.navBg,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch,
                  marginTop: 30
                }}
              >
                <Image
                  resizeMode="contain"
                  source={Icons.ic_account_settings}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  Account Setting
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.doLogout("LoginType")}>
              <View
                style={{
                  backgroundColor: this.state.isActiveLogout
                    ? "#313131"
                    : Color.navBg,
                  flexDirection: "row",
                  padding: 10,
                  borderColor: Color.colorSearch
                }}
              >
                <Image
                  resizeMode="contain"
                  source={Icons.ic_logout}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    marginRight: 5
                  }}
                />
                <Text
                  style={{
                    color: Color.colorSearch,
                    flex: 1,
                    marginLeft: 5,
                    fontSize: 16,
                    fontFamily: "OpenSans-SemiBold"
                  }}
                >
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object,
  activeDrawer:PropTypes.string
};
export default DrawerContent;
