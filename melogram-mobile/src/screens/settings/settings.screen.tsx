import { View, FlatList } from "native-base";
import { colors, darkModeBackgroundColor } from "../../styles/theme";
import { SafeAreaView } from "react-native";
import * as Helpers from "../../helpers/helpers";
import SettingsButtonComponent from "../../components/settings/settings-button.component";
import HeaderComponent from "../../components/shared/header/header.component";

export default function SettingsScreen({ navigation }: { navigation: any }) {
  const scrollViewHeight = Helpers.getScrollViewHeight();

  const buttons = [
    <SettingsButtonComponent
      buttonText="Linked Accounts"
      iconName="musical-notes-outline"
    />,
    <SettingsButtonComponent
      buttonText="Notifications"
      iconName="notifications-outline"
    />,
    <SettingsButtonComponent
      buttonText="Account Information"
      iconName="list-outline"
    />,
    <SettingsButtonComponent
      buttonText="Edit Profile"
      iconName="person-circle-outline"
    />,
    <SettingsButtonComponent
      buttonText="Log Out"
      iconName="log-out-outline"
      iconColor={colors.red[400]}
      textColor={colors.red[400]}
      showArrow={false}
      textFontWeight={600}
    />,
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkModeBackgroundColor,
      }}
    >
      <HeaderComponent
        title={"Settings"}
        showProfile={false}
        navigation={navigation}
      />
      <FlatList
        paddingLeft={5}
        paddingRight={5}
        showsVerticalScrollIndicator={false}
        height={scrollViewHeight}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        data={buttons}
        renderItem={({ item }) => item}
      />
    </SafeAreaView>
  );
}
