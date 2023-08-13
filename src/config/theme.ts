import { ThemeConfig } from 'antd';
import { dark, misc, palettes, typography } from './colors';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: palettes.primary.main,
    colorError: palettes.error.main,
    colorSuccess: palettes.success.main,
    colorText: typography.main,
    fontFamily: 'Inter,system-ui,Avenir,Helvetica,Arial,sans-serif',
    green: palettes.success.main,
    yellow: palettes.warning.main,
    blue: palettes.info.main,
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
      borderRadiusSM: 50,
      fontSizeSM: 12,
    },
    Typography: {
      colorText: typography.main,
      colorTextHeading: typography.main,
    },
    Divider: {
      colorSplit: misc.divider,
      fontSize: 12,
    },
    Radio: {
      fontSize: 16,
    },
    Input: {
      colorBgContainer: dark.background,
      colorBorder: dark.other,
      colorText: typography.secondary,
      borderRadiusSM: 6,
      borderRadius: 6,
      borderRadiusLG: 6,
      fontSize: 16,
      colorTextPlaceholder: typography.secondary,
    },
    Card: {
      colorBgContainer: dark.background,
      colorText: typography.main,
      colorTextDescription: typography.secondary,
      fontSizeHeading1: 24,
    },
  },
};
