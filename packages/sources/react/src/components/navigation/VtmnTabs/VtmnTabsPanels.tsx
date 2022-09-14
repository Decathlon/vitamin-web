import * as React from 'react';
import { getTabItemId, getTabPanelId } from './utils';
import { VtmnTabsPanelProps } from './VtmnTabsPanel';

export interface VtmnTabsPanelsProps {
  /**
   * The index of the active/open child panel
   * @defaultValue undefined
   */
  currentTabIndex?: number;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children: React.ReactNode;
}

export const VtmnTabsPanels = ({
  currentTabIndex,
  children,
}: VtmnTabsPanelsProps) => {
  return (
    <>
      {/* @ts-expect-error: Not all code paths return a value */}
      {React.Children.map(children, (tabPanel, index) => {
        if (React.isValidElement(tabPanel)) {
          return React.cloneElement(tabPanel, {
            id: getTabPanelId && getTabPanelId(index + 1),
            key: getTabPanelId && getTabPanelId(index + 1),
            'aria-labelledby': getTabItemId && getTabItemId(index + 1),
            isActive: index === currentTabIndex,
          } as VtmnTabsPanelProps);
        }
      })}
    </>
  );
};

const MemoVtmnTabsPanels = React.memo(VtmnTabsPanels);

MemoVtmnTabsPanels.displayName = 'VtmnTabsPanels';

export default MemoVtmnTabsPanels;
