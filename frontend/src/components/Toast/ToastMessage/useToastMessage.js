import { useEffect } from 'react';

export function useToastMessage(
  onRemoveMessage,
  message,
) {
  // const animatedElementRef = useRef(null);

  // useEffect(() => {
  //   function handleAnimationEnd() {
  //     onAnimationEnd(message.id);
  //   }

  //   const elementRef = animatedElementRef.current;
  //   if (isLeaving) {
  //     elementRef.addEventListener(
  //       'animationend',
  //       handleAnimationEnd,
  //     );
  //   }

  //   return () => {
  //     elementRef.removeEventListener(
  //       'animationend',
  //       handleAnimationEnd,
  //     );
  //   };
  // }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return {
    handleRemoveToast,
  };
}
