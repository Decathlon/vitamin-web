import * as React from 'react';
import '@vtmn/css-tabs/dist/index-with-vars.css';
import { VtmnTabsItemProps } from './VtmnTabsItem';
import { VtmnTabsPanelProps } from './VtmnTabsPanel';

export interface VtmnTabsProps extends React.ComponentPropsWithoutRef<'ul'> {
  /**
   * The default current tab index.
   * @type {number}
   * @defaultValue 0
   */
  defaultCurrentTabIndex?: number;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children: React.ReactNode;
}

const VtmnTabs = ({
  className,
  defaultCurrentTabIndex = 0,
  children,
  ...props
}: VtmnTabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(
    defaultCurrentTabIndex,
  );

  return (
    <>
      {/* @ts-expect-error: Not all code paths return a value */}
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            currentTabIndex,
            setCurrentTabIndex,
            key: index,
            props,
          } as Partial<VtmnTabsItemProps | VtmnTabsPanelProps>);
        }
      })}
    </>
  );
};

const MemoVtmnTabs = React.memo(VtmnTabs);

MemoVtmnTabs.displayName = 'VtmnTabs';

export default MemoVtmnTabs;
