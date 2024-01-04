const Profile = (context, data) => {
  context.commit('Profile', data);
};
const Username = (context, data) => {
  context.commit('Username', data);
};
export default {
  Profile,
  Username,
};
