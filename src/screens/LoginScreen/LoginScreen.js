import React from 'react';
import {View, Text , Dimensions } from 'react-native';

import Screen from '../../components/Screen/Screen';
import {AppForm, AppFormField, SubmitBtn} from '../../components/Forms';
import styles from './LoginScreen.Style'
import { Header } from 'react-native-elements';

function LoginScreen(props) {
    return(
        <Screen style={styles.container}>
            <Header
                backgroundColor = '#FCEFDE'
                barStyle='dark-content' 
                containerStyle = {styles.headerContainer}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>會員登入</Text>
            </View>

            <View style={styles.bodyContainer}>
            <AppForm
                initialValues={{username: '', password: ''}}
                onSubmit={null}
                validationSchema={null}>
                <AppFormField
                    name="username"
                    placeholder="身分證字號10碼或會員7碼"
                    icon="account"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="nickname"
                    ></AppFormField>
                <AppFormField
                    name="password"
                    placeholder="請輸入 4-8 碼密碼"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"
                    ></AppFormField>
                <SubmitBtn title="登 入" color={'#EC1C24'}/>    
            </AppForm>
            <Text style={styles.registerText}>忘記密碼?</Text>
            </View>
            
            <View style={styles.footerContainer}>
                <Text style={styles.linkFooter}>前往LINE@文字客服</Text>
                <Text style={styles.noteFooter}>如有任何疑問，歡迎您來電寰宇家庭客服中心</Text>
                <Text style={styles.noteFooter}>0809-080-000 或 02-7706-8000</Text>
            </View>    

        </Screen>
    );
}

export default LoginScreen;