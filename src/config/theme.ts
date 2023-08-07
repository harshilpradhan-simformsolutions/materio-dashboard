import { ThemeConfig } from 'antd';
import { palettes } from './colors';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: palettes.primary.main,
    colorError: palettes.error.main,
  },
  components: {
    Button: {
      borderRadiusSM: 5,
      borderRadius: 5,
      borderRadiusLG: 5,
      colorBorder: palettes.primary.outlinedRestingBg,
      colorText: palettes.primary.main,
      paddingContentHorizontalSM: 13,
      paddingContentVerticalSM: 4,
      paddingContentHorizontal: 22,
      paddingContentVertical: 7,
      paddingContentHorizontalLG: 26,
      paddingContentVerticalLG: 8,
      colorPrimaryHover: palettes.primary.containedHoverBg,
    },
    Tag: {
      borderRadiusSM: 16,
    },
  },
};
