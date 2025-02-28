import React from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import {
   Canvas,
   Fill,
   BackdropBlur,
   rrect,
   rect,
} from '@shopify/react-native-skia';

const BoxGlass = ({width, height}) => {
   function x (widthCanvas, widthRect) {
      return (widthCanvas / 2) - (widthRect / 2);
   }

   function y (heightCanvas, heightRect) {
      return (heightCanvas / 2) - (heightRect / 2);
   }

   return (
      <Canvas style={
         [
            {
               width: Dimensions.get('window').width,
               height: Dimensions.get('window').height + StatusBar.currentHeight,
            },
            style.canvas,
         ]}
      >
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
            <Fill color="#FFFFFF22" />
         </BackdropBlur>
      </Canvas>
   );
};

const style = StyleSheet.create({
   canvas: {
      position: 'absolute',
      backgroundColor: '#000',
   },
});

export default BoxGlass;
