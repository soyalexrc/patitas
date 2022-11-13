// ----------------------------------------------------------------------

export default function Button(theme: any) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: ".5rem 1rem !important",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.z8,
          color: '#000000',
          backgroundColor: '#ffffff',
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
          },
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          // "&:hover": {
          //   backgroundColor: theme.palette.action.hover,
          // },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
