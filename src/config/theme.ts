import { ThemeConfig } from 'antd';
import { colors } from './colors';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary.main,
    colorError: colors.error.main,
  },
  components: {
    Button: {
      borderRadiusSM: 5,
      borderRadius: 5,
      borderRadiusLG: 5,
      colorBorder: colors.primary.outlinedRestingBg,
      colorText: colors.primary.main,
      paddingContentHorizontalSM: 13,
      paddingContentVerticalSM: 4,
      paddingContentHorizontal: 22,
      paddingContentVertical: 7,
      paddingContentHorizontalLG: 26,
      paddingContentVerticalLG: 8,
      colorPrimaryHover: colors.primary.containedHoverBg,
    },
  },
};
