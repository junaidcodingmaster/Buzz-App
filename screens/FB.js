import React from 'react';
import { View, StyleSheet, Button  , Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Facebook extends React.Component {
  constructor() {
    super();
    this.state = {
      app_launch: false,
    };
  }

  render() {
    if (this.state.app_launch === false) {
      return (
        <View style={styles.container}>
          
          <Image
        style={styles.logo}
        source={{
          uri: 'https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.6435-9/58755156_2234755236561385_7086399608347164672_n.png?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=-sub-vvwk4cAX-leSBt&_nc_ht=scontent.fhyd5-1.fna&oh=3aa2e51799f4963bfb609be3d5fe36cb&oe=6133FCCB',
        }}
      />
          <View style={styles.button}>
            <Button
              title="Launch"
              onPress={() => {
                this.setState({ app_launch: true })
              }}
              color="#1877F2"
            />
          </View>
        </View>
      );
    } else {
      return (
<View style={styles.webView}>
<WebView 
          source={{ uri: 'https://www.facebook.com/' }}
        /> 
</View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 25,
    width: 150
  },
  webView:{
    flex: 1,
    height:100
  },
  logo:{
    width: 150,
    height: 150,
  }
});
