import React from 'react';
import { View, StyleSheet, Button  , Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Instagram extends React.Component {
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
          uri: 'https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png',
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
          source={{ uri: 'https://www.instagram.com/' }}
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
