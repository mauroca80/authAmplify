import {connect} from 'react-redux';
import signIn from '../redux/actions/signIn';

const withSignIn = WrappedComponent => {
  const mapStateToProps = ({signIn}) => ({
    loading: signIn.loading,
    error: signIn.error,
  });
  const mapDispatchToProps = {
    signIn,
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent);
};

export default withSignIn;
