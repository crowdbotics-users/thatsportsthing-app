import React, { Component } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  ListView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  FlatList
} from "react-native";
import Colors from "../Resource/Colors";
import Icons from "../Resource/Icons";
import styles from "../Resource/Styles";
import ImagePicker from "react-native-image-crop-picker";
import TabCompoment from "../Compoments/TabCompoment";
import HamburgerIcon from "../Compoments/DrawerIcon";
import ListCompoment from "../Compoments/ListCompoment";
import { ViewPager } from "rn-viewpager";
import BannerCompoment from "../Compoments/BannerCompoment";
import PictureTabCompoment from "../Compoments/PictureTabCompoment";
import hometabstyles from "../Resource/hometabstyles";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class HomeTabScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      header: props => <HamburgerIcon {...props} props={navigation} />
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
      tabTitle: "Stream",
      columnCount: 1,
      isStreamActive: true,
      isFriendsPostActive: false,
      isSearchActive: false,
      isLoading: true,
      activeColor: Colors.orange,
      activeTextColor: Colors.white,
      inactiveColor: Colors.white,
      inactiveTextColor: Colors.backgroundLogin,
      avatarSource: "",
      dataSource: [
        {
          companyname: "ADIDAS",
          outletname: "Outlets name",
          time: "09/02/2018 11:10 am",
          points: "100 Points",
          image: Icons.ball5
        },
        {
          companyname: "NIKE",
          outletname: "Outlets name",
          time: "09/02/2018 11:10 am",
          points: "08 Points",
          image: Icons.ball2
        },
        {
          companyname: "THE BAY",
          outletname: "Outlets name",
          time: "09/02/2018 11:10 am",
          points: "20 Points",
          image: Icons.ball3
        },
        {
          companyname: "ZARA",
          outletname: "Outlets name",
          time: "09/02/2018 11:10 am",
          points: "06 Points",
          image: Icons.ball4
        },
        {
          companyname: "BEST BUY",
          outletname: "Outlets name",
          time: "09/02/2018 11:10 am",
          points: "15 Points",
          image: Icons.ball1
        }
      ],
      dataSource1: [
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 2,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        },
        {
          name: "JOHN SCHUFFER",
          username: "@schufferj",
          location: "New york City,Newyork",
          description:
            "As Messi maintained his goalscoring form into the second half of the season, the year 2012 saw him break several longstanding records. On 7 March, two weeks after scoring four goals in a league fixture against Valencia, he scored five times in a Champions League last 16-round match against Bayer Leverkusen, an unprecedented achievement in the history of the competition.",
          time: "1:32 PM ",
          likes: "123",
          commnets: "12",
          image: Icons.messi,
          playerImage: Icons.ic_player,
          friendstatus: 1,
          followstatus: 1
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      isLoading: false
    });
  }
  renderRow(data) {
    return (
      <View style={[styles.row, { alignItems: "center" }]}>
        <Image
          source={data.image}
          style={{ width: 50, height: 50, margin: 5 }}
        />
      </View>
    );
  }

  doChangeTab(tabName) {
    if (tabName == "stream") {
      this.setState({
        tabTitle: "Stream",
        columnCount: 1,
        isStreamActive: true,
        isFriendsPostActive: false,
        isSearchActive: false
      });
      this.refs.viewPager.setPage(0);
    } else if (tabName == "friendspost") {
      this.setState({
        tabTitle: "Friends's Post",
        columnCount: 1,
        isStreamActive: false,
        isFriendsPostActive: true,
        isSearchActive: false
      });
      this.refs.viewPager.setPage(1);
    } else if (tabName == "search") {
      this.setState({
        tabTitle: "Search",
        columnCount: 1,
        isStreamActive: false,
        isFriendsPostActive: false,
        isSearchActive: true
      });
      this.refs.viewPager.setPage(2);
    }
  }

  renderFooter(data) {
    return (
      <View style={[styles.row, { alignItems: "center" }]}>
        <Image
          source={Icons.ic_add}
          style={{ width: 50, height: 50, margin: 5 }}
        />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          nestedScrollEnabled={true}
        >
          <View>
            <BannerCompoment
              tabTitle={this.state.tabTitle}
              profilePicture={this.state.avatarSource}
            />
          </View>
          <View>
            <View
              style={{
                height: 80,
                backgroundColor: "#BABABA",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <ActivityIndicator
                color={Colors.white}
                style={{ display: this.state.isLoading ? "flex" : "none" }}
              />
              <ListView
                style={{ display: this.state.isLoading ? "none" : "flex" }}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                bounces={false}
                dataSource={ds.cloneWithRows(this.state.dataSource)}
                renderRow={this.renderRow.bind(this)}
                renderFooter={this.renderFooter.bind(this)}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: Colors.white,
                  fontSize: 11,
                  fontFamily: "OpenSans-SemiBold"
                }}
              >
                FAVORITE SPORTS
              </Text>
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: "#414141" }}>
              <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <TouchableOpacity onPress={() => this.doChangeTab("stream")}>
                  <View
                    style={
                      this.state.isStreamActive
                        ? hometabstyles.StreamActiveTab
                        : hometabstyles.StreamInactiveTab
                    }
                  >
                    <Text
                      style={
                        this.state.isStreamActive
                          ? hometabstyles.StreamActiveTabText
                          : hometabstyles.StreamInactiveTabText
                      }
                    >
                      Stream
                    </Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.doChangeTab("friendspost")}
                  >
                    <View
                    style={
                      this.state.isFriendsPostActive
                        ? hometabstyles.FriendsPostActiveTab
                        : hometabstyles.FriendsPostInactiveTab
                    }
                  >
                    <Text
                      style={
                        this.state.isFriendsPostActive
                          ? hometabstyles.FriendsPostActiveTabText
                          : hometabstyles.FriendsPostInactiveTabText
                      }
                    >
                      Friend's Post
                    </Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.doChangeTab("search")}>
                  <View
                    style={
                      this.state.isSearchActive
                        ? hometabstyles.SearchActiveTab
                        : hometabstyles.SearchInactiveTab
                    }
                  >
                    <Text
                      style={
                        this.state.isSearchActive
                          ? hometabstyles.SearchActiveTabText
                          : hometabstyles.SearchInactiveTabText
                      }
                    >
                     Search
                    </Text>
                  </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <View style={{ flex: 1 }}>
                <ViewPager
                  scrollEnabled={false}
                  ref={"viewPager"}
                  initialPage={this.state.currentTab}
                  style={{ flex: 1, height: Dimensions.get("screen").height }}
                >
                  <View>
                    <ListCompoment
                      tabTitle={this.state.tabTitle}
                      columns={this.state.columnCount}
                      data={this.state.dataSource1}
                      navigation={this.props.navigation}
                    />
                  </View>
                  <View>
                    <ListCompoment
                      tabTitle={this.state.tabTitle}
                      columns={this.state.columnCount}
                      data={this.state.dataSource1}
                      navigation={this.props.navigation}
                    />
                  </View>
                  <View>
                    <View>
                      <View
                        style={{
                          alignItems: "center",
                          backgroundColor: "#313131",
                          flexDirection: "row",
                          padding: Platform.OS == "android" ? 0 : 10,
                          borderColor: Colors.colorSearch,
                          marginTop: 15,
                          margin: 10,
                          borderRadius: 5
                        }}
                      >
                        <Image
                          source={Icons.ic_search}
                          style={{
                            width: 24,
                            height: 24,
                            marginLeft: 10,
                            marginRight: 5
                          }}
                        />
                        <TextInput
                          returnKeyType="done"
                          placeholder="Search.."
                          style={{
                            padding: Platform.OS == "android" ? 5 : 0,
                            color: Colors.colorSearch,
                            flex: 1,
                            marginLeft: 5,
                            fontSize: 14,
                            fontFamily: "OpenSans-SemiBold"
                          }}
                          placeholderTextColor={Colors.colorSearch}
                          underlineColorAndroid={Colors.transparent}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        position: "relative",
                        marginTop: 20,
                        marginBottom: 15
                      }}
                    >
                      <View style={{ position: "relative" }}>
                        <View
                          style={{
                            height: 2,
                            width: "100%",
                            backgroundColor: Colors.bgHeader
                          }}
                        />
                      </View>
                      <View
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          bottom: -10,
                          justifyContent: "center",
                          alignContent: "center"
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: Colors.bgHeader,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignContent: "center",
                            flexDirection: "row",
                            alignItems: "center"
                          }}
                        >
                          <Image
                            source={Icons.ic_down_arrow_white}
                            style={{ width: 15, height: 9, margin: 3 }}
                          />
                          <Text
                            style={{
                              color: Colors.white,
                              padding: 1,
                              margin: 1
                            }}
                          >
                            Advanced Search
                          </Text>
                          <Image
                            source={Icons.ic_down_arrow_white}
                            style={{ width: 15, height: 9, margin: 3 }}
                          />
                        </View>
                      </View>
                    </View>
                    <ListCompoment
                      tabTitle={this.state.tabTitle}
                      columns={this.state.columnCount}
                      data={this.state.dataSource1}
                      navigation={this.props.navigation}
                    />
                  </View>
                </ViewPager>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default HomeTabScreen;