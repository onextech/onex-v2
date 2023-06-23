import getLayoutProviderProps from './getLayoutProviderProps'

const withLayoutProviderPropsToStaticProps =
  (context) => (staticPropsResult) => {
    const layoutProviderProps = getLayoutProviderProps({ context })

    console.log('jjj: layoutProviderProps', layoutProviderProps)

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
