import { ThemeType } from "grommet";
import { css } from "styled-components";

export const theme: ThemeType = {
  global: {
    colors: {
      brand: '#e2e2e2',
      'accent-1': '#062e61',
      'accent-2': '#ff951f',
      'accent-3': '#19b1cc',
      'accent-4': '#333333',
      'placeholder': '#bbbbbb',
      'link': '#062e61',
      'list-new': 'rgba(255, 149, 31, 0.1)',
      'list-updated': 'rgba(25, 177, 204, 0.15)',
      'list-ended': 'rgba(242, 242, 242, 0.25)',
      'list-removed_from_list': 'rgba(242, 242, 242, 0.25)',
      'list-refresh': '#19b1cc',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    focus: {
      border:  {
        color: '#e0a244',
      },
      outline: {
        color: '#e0a244',
      }
    },
    drop: {
      zIndex: 101,
    },
  },
  table: {
    header: {
      border: undefined,
    },
    body: {
      border: undefined,
      extend: css`
        overflow: visible;
      `
    },
  },
  heading: {
    color: '#444444',
    extend: css`
      margin-top: 0;
    `
  },
  formField: {
    label: {
      requiredIndicator: true,
    }
  },
  textArea: {
    extend: css`
      font-weight: normal;
      ::placeholder {
        font-weight: normal;
        color: ${props => props.theme.global.colors.placeholder};
      }
    `,
  },
  maskedInput: {
    extend: css`
      ::placeholder {
        font-weight: normal;
        color: ${props => props.theme.global.colors.placeholder};
      }
    `,
  },
  textInput: {
    extend: css`
      ::placeholder {
        font-weight: normal;
        color: ${props => props.theme.global.colors.placeholder};
      }
    `,
    placeholder: {
      extend: css`
          font-weight: normal;
          color: ${props => props.theme.global.colors.placeholder};
        `
    }
  },
  button: {
    default: {
      background: '#ffffff',
      border: { color: 'accent-1', width: '3px' },
      color: 'accent-3'
    },
    primary: {
      background: 'accent-1',
      border: { color: 'accent-2', width: '3px' },
      color: 'accent-3'
    },
    secondary: {
      background: 'accent-2',
      border: { color: 'accent-3', width: '3px' },
      color: 'accent-1'
    },
    hover: {
      default: {
        background: 'accent-1',
        color: 'accent-3'
      },
      primary: {
        background: 'accent-2',
        color: 'accent-1'
      },
      secondary: {
        background: 'accent-3',
        color: 'accent-1'
      }
    },
    disabled: {
      opacity: 1,
      color: 'dark-4',
      background: 'light-2',
      border: { color: 'light-4' }
    }
  },
  accordion: {
    heading: {
      margin: 'small'
    },
    icons: {
      color: 'accent-3'
    }
  },
  dataTable: {
    pinned: {
      header: {
        background: {
          color: 'accent-2',
          opacity: 'strong'
        },
        extend: css`
          z-index: 19;
        `
      },
    }
  },
  page: {
    wide: {
      width: {
        min: 'small',
        max: 'xlarge'
      }
    }
  },
  paragraph: {
    extend: css`
      margin-top: 0;
    `
  },
  checkBox: {
    size: '20px',
    color: 'black',
  },
  tip: {
    content: {
      background: "white"
    },
  },
  layer: {
    zIndex: '100',
  },
};
