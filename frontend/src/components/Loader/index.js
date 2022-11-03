import PropTypes from 'prop-types';

import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount';

import { Spinner } from '../Spinner';

import { Overlay } from './styles';
import { ReactPortal } from '../ReactPortal';

export function Loader({ isLoading }) {
  const {
    animatedElementRef,
    shouldRender,
  } = useAnimatedUnmount(isLoading);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Overlay>
      ,
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
