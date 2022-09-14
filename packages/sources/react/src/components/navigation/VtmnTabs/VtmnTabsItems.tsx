import * as React from 'react';
import { VtmnTabsAlign, VtmnTabsSize } from './types';
import { VtmnDivider } from '../../../components/structure/VtmnDivider';
import { getTabItemId, getTabPanelId } from './utils';
import { VtmnTabsItemProps } from './VtmnTabsItem';

import clsx from 'clsx';

export interface VtmnTabsItemsProps {
  /**
   * The alignment of the tabs.
   * @type {VtmnTabsAlign}
   * @defaultValue 'start'
   */
  align?: VtmnTabsAlign;

  /**
   * The size of the tabs.
   * @type {VtmnTabsSize}
   * @defaultValue 'medium'
   */
  size?: VtmnTabsSize;

  /**
   * A specific class to put on items list.
   * @defaultValue undefined
   */
  className?: string;

  /**
   * The index of the active/open child panel.
   * @defaultValue undefined
   */
  currentTabIndex?: number;

  /**
   * The method to set tab index state.
   * @defaultValue undefined
   */
  setCurrentTabIndex?: React.Dispatch<React.SetStateAction<number>>;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children: React.ReactNode;
}

export const VtmnTabsItems = ({
  className,
  currentTabIndex = 0,
  setCurrentTabIndex,
  children,
  ...props
}: VtmnTabsItemsProps) => {
  ('');

  const tabsLength = Array.isArray(children) ? children.length : 1;

  const handleNext = () => {
    setCurrentTabIndex &&
      setCurrentTabIndex((prevTabIndex) =>
        prevTabIndex + 1 === tabsLength ? 0 : prevTabIndex + 1,
      );
  };

  const handlePrev = () => {
    setCurrentTabIndex &&
      setCurrentTabIndex((prevTabIndex) =>
        prevTabIndex - 1 < 0 ? tabsLength - 1 : prevTabIndex - 1,
      );
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowLeft') handlePrev();
    if (event.key === 'ArrowRight') handleNext();
  };

  // Collect ref of all items to set focus when a tab is active
  const refIndex = Array.isArray(children)
    ? children.reduce(
        (prev, _, index) => ({
          ...prev,
          [index]: React.useRef(null),
        }),
        {},
      )
    : {};
  React.useEffect(() => {
    refIndex[currentTabIndex].current.focus();
  }, [currentTabIndex]);

  return (
    <>
      <ul
        className={clsx(
          'vtmn-tabs',
          `vtmn-tabs_align--${props.align}`,
          `vtmn-tabs_size--${props.size}`,
          className,
        )}
        role="tablist"
        onKeyDown={handleKeyPress}
        {...props}
      >
        {/* @ts-expect-error: Not all code paths return a value */}
        {React.Children.map(children, (tabItem, index) => {
          if (React.isValidElement(tabItem)) {
            return React.cloneElement(tabItem, {
              id: getTabItemId(index + 1),
              key: getTabItemId(index + 1),
              'aria-controls': getTabPanelId(index + 1),
              itemIndex: index,
              isActive: index === currentTabIndex,
              ref: refIndex[index],
              ...(setCurrentTabIndex
                ? { onClick: () => setCurrentTabIndex(index) }
                : {}),
            } as VtmnTabsItemProps);
          }
        })}
      </ul>
      <VtmnDivider />
    </>
  );
};

const MemoVtmnTabsItems = React.memo(VtmnTabsItems);

MemoVtmnTabsItems.displayName = 'VtmnTabsItems';

export default MemoVtmnTabsItems;
