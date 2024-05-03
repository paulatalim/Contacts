import React from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import {
   Canvas,
   Fill,
   BackdropBlur,
   rrect,
   rect,
   Image,
   useImage,
   Blur,
   RoundedRect,
} from '@shopify/react-native-skia';

const BoxGlass = ({width, height}) => {
   function x (widthCanvas, widthRect) {
      return (widthCanvas / 2) - (widthRect / 2);
   }

   function y (heightCanvas, heightRect) {
      return (heightCanvas / 2) - (heightRect / 2);
   }

   return (
      <Canvas style={[{ width: Dimensions.get('window').width, height: Dimensions.get('window').height + StatusBar.currentHeight }, style.canvas]}>
         <Image image={
            useImage(require('../../assets/img/sunflower.png'))}
            x={0}
            y={0}
            fit="cover"
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').height + StatusBar.currentHeight} />
         <BackdropBlur
            blur={40}
            clip={rrect(
               rect(
                  x(Dimensions.get('window').width, width),
                  y(Dimensions.get('window').height + StatusBar.currentHeight, height),
                  width,
                  height),
               40, 40
            )}
            >
            <Fill color="#FFFFFF33" />

            <RoundedRect
               x={x(Dimensions.get('window').width, width + 50)}
               y={y(Dimensions.get('window').height + StatusBar.currentHeight, height + 50)}
               width={width + 50}
               height={height + 50}
               color={'#FFF'}
               r={40}
               style={'stroke'}
               strokeWidth={40}
               >
               <Blur blur={10} />
            </RoundedRect>
         </BackdropBlur>
      </Canvas>
   );
};

const style = StyleSheet.create({
   canvas: {
      position: 'absolute',
   },
});

export default BoxGlass;
