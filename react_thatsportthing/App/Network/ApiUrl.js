let BASE_URL =
  "http://13.127.235.254/dev/laravel/thatsport/thatsportsthing-app/api/public/api/";
const ApiUrl = {
  loginUrl: BASE_URL + "users/login",
  socialLoginUrl: BASE_URL + "users/social_login",
  logoutUrl: BASE_URL + "users/logout",
  registerUrl: BASE_URL + "users/register",
  verifyEmailUrl: BASE_URL + "users/verify_email",
  forgotPasswordUrl: BASE_URL + "users/forgot_password",
  otpCheckUrl: BASE_URL + "users/get_otp",
  updatePasswordUrl: BASE_URL + "users/reset_password",
  getUserProfile: BASE_URL + "users/getProfile",
  editUserProfile: BASE_URL + "users/updateprofile",
  getCommentsList: BASE_URL + "users/posts/view_comment_all_message",
  getReplyList: BASE_URL + "users/posts/view_reply_all_message",
  addComment: BASE_URL + "users/posts/add_comment",
  addPost: BASE_URL + "users/posts/add_post",
  likePost: BASE_URL + "users/posts/add_like",
  likeComment: BASE_URL + "users/posts/add_comment__like",
  followUser: BASE_URL + "users/add_follower",
  sendRequest: BASE_URL + "users/requests/send_request",
  requestAction: BASE_URL + "users/requests/request_action",
  getPosts: BASE_URL + "users/posts/list",
  getMyPostsList: BASE_URL + "users/posts/my_post_list",
  getCrewList: BASE_URL + "users/requests/crew_list",
  getSendRequestList: BASE_URL + "users/requests/send_request_list",
  getReceivedRequestList: BASE_URL + "users/requests/received_request_list",
  getFollowerList: BASE_URL + "users/follower_list",
  sendMessage: BASE_URL + "users/conversation/store",
  searchPeople: BASE_URL + "users/search",
  userMessageList: BASE_URL + "users/conversation/list",
  
};
export default ApiUrl;
