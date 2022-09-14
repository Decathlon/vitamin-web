import '@vtmn/css-tabs/dist/index-with-vars.css';
import * as React from 'react';

export interface VtmnTabsPanelProps {
  /**
   * Is current tab panel active/open.
   * @defaultValue false
   */
  isActive?: boolean;

  /**
   * The content to render inside the panel.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnTabsPanel = React.forwardRef<HTMLElement, VtmnTabsPanelProps>(
  ({ isActive = false, children, ...props }, ref) => {
    return (
      <section
        role="tabpanel"
        ref={ref}
        {...props}
        tabIndex={0}
        className={isActive ? '' : 'vtmn-hidden'}
      >
        {children}
      </section>
    );
  },
);

const MemoVtmnTabsPanel = React.memo(VtmnTabsPanel);

MemoVtmnTabsPanel.displayName = 'VtmnTabsPanel';

export default MemoVtmnTabsPanel;
