import * as React from 'react';
import ReactDOM from 'react-dom';
import '@vtmn/css-tooltip/dist/index-with-vars.css';
import { VtmnTooltipPosition } from './types';

export interface VtmnTooltipProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * The position of tooltip from original element.
   * @defaultValue 'top'
   */
  position?: VtmnTooltipPosition;

  /**
   * The tooltip text of the span.
   * @defaultValue undefined
   */
  tooltip: string;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children: React.ReactNode;

  /**
   * The container ref where the tooltip will be rendered.
   * @defaultValue undefined
   */
  containerRef: React.RefObject<HTMLElement>;
}

export const VtmnTooltip = ({
  children,
  position = 'top',
  tooltip,
  className,
  containerRef,
  ...props
}: VtmnTooltipProps) => {
  const divEl = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const [mount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  return mount
    ? ReactDOM.createPortal(
        <div className="vtmn-flex" ref={divEl}>
          <span
            tabIndex={0}
            role="tooltip"
            className={`vtmn-tooltip ${className ?? className}`}
            data-tooltip={tooltip}
            data-position={position}
            {...props}
          >
            {children}
          </span>
        </div>,
        containerRef && containerRef.current
          ? containerRef.current
          : divEl.current,
      )
    : null;
};

const MemoVtmnTooltip = React.memo(VtmnTooltip);

MemoVtmnTooltip.displayName = 'VtmnTooltip';

export default MemoVtmnTooltip;
