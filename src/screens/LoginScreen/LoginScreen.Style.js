import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headerContainer : {
      height: 84
    },
    container: {
      backgroundColor: '#FCEFDE',
      width: '100%',
      flex: 1
    },
    titleContainer: {
      position: 'absolute',
      left: '3.86%',
      right: '0%',
      top: 84,
      bottom: '1.79%',
      height: 56
    },
    title: {
      width: '100%',
      lineHeight: 52,
      fontSize: 46,
      color: '#F48120',
      letterSpacing: 0.5,
    },
    bodyContainer: {
      alignItems: 'center'
    },
    registerText: {
      margin: 20,
      alignSelf: 'center',
      position:'absolute',
      top: 360
    },
    footerContainer : {
      position: 'absolute',
      width: '100%',
      top : 600,
      alignContent:'center',
      alignItems:'center'
    },
    linkFooter: {
      color: '#F48120',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 20,
      display: 'flex',
      alignItems: 'center',
      letterSpacing: 0.8,
      color: '#F48120',
      margin: 10
    },
    noteFooter: {
      fontSize: 10,
      alignContent: 'center'
    }
  });

  export default styles;