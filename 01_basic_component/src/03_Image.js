import { Image, View } from "react-native";

export default function MyImage() {
    return(
        <View>
        {/* static 이미지 */}
        <Image source={ require('../assets/favicon.png') } 
               style={{ width: 100, height: 100, }} />

        {/* 네트워크 이미지 */}
        <Image source={ { uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', } }
               style={{ width: 200, height: 200, }} 
               // resizeMode="cover" />        {/* 짧은쪽 비율로 */}              
               // resizeMode="stretch" />      {/* 비율무시 */}
               resizeMode="contain" />      {/* 긴쪽 비율로 */}

        </View>
    );
}