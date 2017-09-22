/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Navigator from 'react-native-deprecated-custom-components';

/**-------导入外部的组件类---------**/
var LaunchImage = require('./src/Component/Main/XMGLaunchImage');

class HelloBuy extends Component {
    render() {
        return (
            <Navigator.Navigator
                initialRoute={{name:'启动页',component:LaunchImage}}
                configureScene={(route) => {
                     return Navigator.Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
}

AppRegistry.registerComponent('HelloBuy', () => HelloBuy);
