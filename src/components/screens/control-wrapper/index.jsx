import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { EVENTS, dispatchEvent } from '../../events/event-dispatcher';

const CONTROLS = {
  SELECT: 13,
  BACK: 8,
}

const controlWrapper = (props) => {
  const onSelectClicked = () => dispatchEvent(EVENTS.ENTER);

  const onBackClicked = () => dispatchEvent(EVENTS.BACK);

  const onKeyPressed = ({ keyCode }) => {
    switch(keyCode) {
      case CONTROLS.SELECT:
        onSelectClicked();
        break;
      case CONTROLS.BACK:
        onBackClicked();
        break;
      default:
        break;
    }
  }

  const initControls = () => window.addEventListener('keydown', onKeyPressed);

  const removeControls = () => window.removeEventListener('keydown', onKeyPressed);

  useEffect(() => {
    initControls();

    return () => removeControls();
  });

  return props.children;
};

export default withRouter(controlWrapper);