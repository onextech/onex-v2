import getLayoutProviderProps from './getLayoutProviderProps'

const withLayoutProviderPropsToStaticProps =
  (context) => (staticPropsResult) => {
    const layoutProviderProps = getLayoutProviderProps({ context })
    return {
      ...staticPropsResult,
      props: {
        ...staticPropsResult?.props,
        pageProviderProps: {
          layoutProviderProps,
        },
      },
    }
  }

export default withLayoutProviderPropsToStaticProps
