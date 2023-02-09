import * as React from 'react';
import '@vtmn/css-search/dist/index-with-vars.css';
import clsx from 'clsx';
import { VtmnSearchVariant, VtmnSearchSize } from './types';
import { VtmnButton } from '../../actions/VtmnButton/VtmnButton';

export interface VtmnSearchProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /**
   * The variant of the search bar.
   * @type {VtmnSearchVariant}
   * @defaultValue 'default'
   */
  variant?: VtmnSearchVariant;

  /**
   * The size of the search bar.
   * @type {VtmnSearchSize}
   * @defaultValue 'medium'
   */
  size?: VtmnSearchSize;

  /**
   * The disabled state of the search bar.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Displays the search button.
   * @type {boolean}
   * @defaultValue true
   */
  showSearchButton?: boolean;

  /**
   * The placeholder of the search bar.
   * @type {string}
   * @defaultValue 'Search'
   */
  placeholder?: string;

  /**
   * The value of the search bar.
   * @type {string}
   * @defaultValue undefined
   */
  value?: string;

  /**
   * Called when user click on search icon
   * @type {void}
   * @default undefined
   */
  onSearch?: (search: string) => void;

  /**
   * Called when user click on clear icon
   * @type {void}
   * @default undefined
   */
  onClear?: () => void;
}

export const VtmnSearch = ({
  variant = 'default',
  size = 'medium',
  disabled = false,
  placeholder = 'Search',
  showSearchButton = true,
  value = undefined,
  className,
  onSearch,
  onClear,
  ...props
}: VtmnSearchProps) => {
  const [search, setSearch] = React.useState(value);

  const searchValue = () => {
    if (onSearch && search) onSearch(search);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') searchValue();
  };

  return (
    <div
      className={clsx(
        'vtmn-search',
        `vtmn-search_variant--${variant}`,
        `vtmn-search_size--${size}`,
        className,
      )}
      role="search"
    >
      <input
        placeholder={placeholder}
        value={search}
        disabled={disabled}
        type="search"
        {...props}
        onKeyDown={handleKeyDown}
        onChange={(event) => {
          // Overwrite previously defined onChange then call it back once search is set
          setSearch(event.target.value);
          props.onChange && props.onChange(event);
        }}
      />

      <div className="vtmn-search_buttons">
        {search && (
          <VtmnButton
            variant="ghost"
            size={size}
            disabled={disabled}
            iconAlone="close-line"
            onClick={() => {
              setSearch('');
              onClear && onClear();
            }}
            aria-label="close"
            type="button"
          />
        )}

        {showSearchButton && (
          <VtmnButton
            onClick={searchValue}
            variant="ghost"
            size={size}
            disabled={disabled}
            type="submit"
            iconAlone="search-line"
            aria-label="search"
          />
        )}
      </div>
    </div>
  );
};

const MemoVtmnSearch = React.memo(VtmnSearch);

MemoVtmnSearch.displayName = 'VtmnSearch';

export default MemoVtmnSearch;
