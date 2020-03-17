import {connect} from 'react-redux';

import signUp from '../redux/actions/signUp';

const withSignIn = WrappedComponent => {
  const mapStateToProps = ({signUp}) => ({
    loading: signUp.loading,
    error: signUp.error,
  });

  const mapDispatchToProps = {
    signUp,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent);
};

export default withSignIn;
