import styled from '@emotion/native';
import {Platform, TextStyle} from 'react-native';
import {COLORS} from '../../assets/constants/colors';

export const Typography = styled.Text<{
  weight?: keyof typeof ThemeFont;
  fontSize?: TextStyle['fontSize'];
  color?: TextStyle['color'];
}>(({fontSize = 16, weight = 'regular', color = COLORS.black}) => ({
  fontSize,
  color,
  lineHeight: fontSize * 1.5,
  ...ThemeFont[weight],
}));

export const ThemeFont: Record<string, TextStyle> = {
  light: {
    fontFamily: 'IBMPlexSansArabic-Light',
    fontWeight: Platform.select({
      ios: '300',
      android: 'normal',
    }),
  },
  regular: {
    fontFamily: 'IBMPlexSansArabic',
    fontWeight: Platform.select({
      ios: '400',
      android: 'normal',
    }),
  },
  medium: {
    fontFamily: 'IBMPlexSansArabic-Medm',
    fontWeight: Platform.select({
      ios: '500',
      android: 'normal',
    }),
  },
  semiBold: {
    fontFamily: 'IBMPlexSansArabic-SmBld',
    fontWeight: Platform.select({
      ios: '600',
      android: 'bold',
    }),
  },
  bold: {
    fontFamily: 'IBMPlexSansArabic-Bold',
    fontWeight: Platform.select({
      ios: '700',
      android: 'bold',
    }),
  },
};
