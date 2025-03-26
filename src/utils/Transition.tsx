import { CSSTransitionProps, TransitionContextType, TransitionProps } from '../types/type';
import React, { useRef, useEffect, useContext, ReactNode, CSSProperties, JSX } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';




const TransitionContext = React.createContext<TransitionContextType>({
  parent: {},
});

function useIsInitialRender(): boolean {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}



function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}: CSSTransitionProps) {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: HTMLElement, classes: string[]): void {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement, classes: string[]): void {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = React.useRef<HTMLElement>(null);

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done) => {
        nodeRef.current?.addEventListener('transitionend', done, false);
      }}
      onEnter={() => {
        if (!removeFromDom && nodeRef.current) nodeRef.current.style.display = '';
        nodeRef.current && addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        nodeRef.current && removeClasses(nodeRef.current, enterStartClasses);
        nodeRef.current && addClasses(nodeRef.current, enterEndClasses);
      }}
      onEntered={() => {
        nodeRef.current && removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
      }}
      onExit={() => {
        nodeRef.current && addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        nodeRef.current && removeClasses(nodeRef.current, leaveStartClasses);
        nodeRef.current && addClasses(nodeRef.current, leaveEndClasses);
      }}
      onExited={() => {
        nodeRef.current && removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
        if (!removeFromDom && nodeRef.current) nodeRef.current.style.display = 'none';
      }}
    >
      {React.createElement(tag as keyof JSX.IntrinsicElements, {
        ref: nodeRef,
        ...rest,
        style: { display: !removeFromDom ? 'none': undefined, ...rest.style }
      }, children)}
    </ReactCSSTransition>
  );
}



function Transition({ show, appear, ...rest }: TransitionProps) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
