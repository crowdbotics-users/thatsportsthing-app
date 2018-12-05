import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Modal,
  ActivityIndicator,
  AsyncStorage,
  NetInfo,
  Platform
} from "react-native";
import Colors from "../Resource/Colors";
import Icons from "../Resource/Icons";
import ImagePicker from "react-native-image-crop-picker";
import ProgressCompoment from "../Compoments/ProgressCompoment";
import ApiUrl from "../Network/ApiUrl";
import { showSnackBar } from "@prince8verma/react-native-snackbar";

class SignUpScreen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: "",
      isProgress: false
    };
  }
  static navigationOptions = {
    header: null
  };

  //redirect home page

  doRedirect(screen) {
    const { navigate } = this.props.navigation;
    const { userData2 } = this.props.navigation.state.params;
    console.log(userData2);

    if (this.state.avatarSource == "") {
      alert("Select Picture");
    } else {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          AsyncStorage.getItem("token")
            .then(data => {
              console.log("AsyncStorage");
              if (data != null) {
                console.log(data);
                const bodyData = new FormData();
                bodyData.append("profile_image", {
                  uri: this.state.avatarSource,
                  type: "image/jpeg",
                  name: "image1"
                });
                bodyData.append("full_name", userData2.name);
                bodyData.append("email", userData2.email);
                bodyData.append("password", userData2.password);
                bodyData.append("dob", userData2.bdate);
                bodyData.append("device_type", Platform.OS);
                bodyData.append("fire_base_token", data);
                bodyData.append("user_name", userData2.name);
                this.openProgressbar();
                this.doRegisterApi(bodyData, screen);
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
  }
  doRegisterApi(bodyData, screen) {
    const { navigate } = this.props.navigation;
    fetch(ApiUrl.registerUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      },
      body: bodyData
    })
      .then(response => response.json())
      .then(responseJson => {
        this.hideProgressbar();
        const message = responseJson.message;
        const status = responseJson.status;

        switch (status) {
          case 200: {
            console.log(message);
            this.doShowSnackBar(message);
            navigate(screen);
            break;
          }
          case 401: {
            this.hideProgressbar();
            this.doShowSnackBar(message);
            console.log(message);
            break;
          }
          case 400: {
            this.hideProgressbar();
            this.doShowSnackBar(message);
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
  doShowSnackBar(message) {
    showSnackBar({
      message: message,
      position: 'top',
      backgroundColor: Colors.bgHeader,
      buttonColor: "#fff",
      confirmText: '',
      onConfirm: () => { },
      duration: 1000
    });
  }
  openProgressbar = () => {
    this.setState({ isProgress: true });
  };
  hideProgressbar = () => {
    this.setState({ isProgress: false });
  };
  doBack() {
    this.props.navigation.goBack();
  }

  pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      cropperCircleOverlay: true,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 640,
      compressImageQuality: 0.5,
      includeExif: true
    })
      .then(image => {
        this.setState({
          avatarSource: image.path
        });
        this.setState({
          image: { uri: image.path, width: image.width, height: image.height },
          images: null
        });
      })
      .catch(e => {
        console.log("pickSingleWithCamera", e);
      });
  }
  pickSingle(cropit, circular = true) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 640,
      compressImageQuality: 0.5,
      includeExif: true
    })
      .then(image => {
        this.setState({
          avatarSource: image.path
        });
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime
          },
          images: null
        });
      })
      .catch(e => {
        console.log("pickSingle", e);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoView}>
            <View style={styles.logo}>
              <Image style={styles.logoImage} source={Icons.logo} />
            </View>
          </View>
          <View style={styles.uploadView}>
            <View style={styles.customUploadView}>
              <View style={styles.uploadImageView}>
                <ImageBackground
                  style={{ height: 180, width: 180, justifyContent: "center" }}
                  source={Icons.ic_upload_image_bg}
                >
                  <Image
                    source={{ uri: this.state.avatarSource }}
                    style={{
                      height: 170,
                      width: 170,
                      borderRadius: 85,
                      alignSelf: "center"
                    }}
                  />
                </ImageBackground>
              </View>
              <View>
                <Text style={[styles.text, { marginTop: 10 }]}>
                  CHOOSE YOUR PROFILE PICTURE
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.uploadTypeSelectView}>
            <ProgressCompoment isProgress={this.state.isProgress} />
            <TouchableOpacity onPress={() => this.pickSingle(true)}>
              <View style={styles.galleryView}>
                <Image
                  style={{ height: 60, width: 60 }}
                  source={Icons.ic_upload_image}
                />
                <Text style={styles.text}>UPLOAD</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.pickSingleWithCamera(true)}>
              <View style={styles.cameraView}>
                <Image
                  style={{ height: 60, width: 60, alignItems: "center" }}
                  source={Icons.ic_camera}
                />
                <Text style={styles.text}>TAKE A PICTURE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 5
            }}
          >
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.doBack.bind(this)}>
                <View style={styles.backbutton}>
                  <Text
                    style={[
                      styles.buttonText,
                      { fontFamily: "JosefinSans-Bold" }
                    ]}
                  >
                    BACK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.doRedirect.bind(this, "Login")}>
                <View style={styles.button}>
                  <Text
                    style={[
                      styles.nextbuttonText,
                      { fontFamily: "JosefinSans-Bold" }
                    ]}
                  >
                    DONE!
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  logoView: { flex: 1, marginTop: 30 },
  logo: { flex: 1, marginLeft: "10%", marginTop: "5%" },
  logoImage: { height: 100, width: 152 },
  uploadView: {
    flex: 2,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  customUploadView: {
    flexDirection: "column",
    justifyContent: "center"
  },
  uploadImageView: {
    alignItems: "center",
    justifyContent: "center"
  },
  uploadTypeSelectView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  galleryView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  cameraView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  buttonView: { flex: 1, justifyContent: "flex-end", alignItems: "flex-end" },
  button: {
    marginBottom: "10%",
    backgroundColor: Colors.bgHeader,
    marginLeft: 10,
    width: Dimensions.get("screen").width / 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  backbutton: {
    marginBottom: "10%",
    marginRight: 10,
    borderWidth: 1,
    width: Dimensions.get("screen").width / 2,
    borderColor: Colors.bgHeader,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  nextbuttonText: {
    textAlign: "center",
    fontSize: 18,
    paddingBottom: 25,
    paddingTop: 25,
    paddingLeft: "15%",
    paddingRight: "15%",
    color: Colors.white
  },
  text: {
    color: Colors.colorEdittext,
    textAlign: "center",
    marginTop: 5,
    fontFamily: "OpenSans-SemiBold"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    paddingBottom: 25,
    paddingTop: 25,
    paddingLeft: "15%",
    paddingRight: "15%",
    color: Colors.bgHeader
  }
});
export default SignUpScreen3;