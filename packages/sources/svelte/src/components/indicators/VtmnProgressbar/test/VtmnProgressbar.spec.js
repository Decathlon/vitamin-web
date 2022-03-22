import '@testing-library/jest-dom';

import { fireEvent, waitFor, render } from '@testing-library/svelte';

import VtmnProgressbar from '../VtmnProgressbar.svelte';

describe('VtmnProgressbar', () => {
  describe('Linear', () => {
    // Should display a linear progressbar medium
    // Should apply custom class
    // Should display progressbar with size small
    // Should display progressbar with size large
    // Should display the label
    // Should apply the correct progress value
    // Should apply an intermediate value
    // Should hide label if intermediate value are set
  });
  describe('Circular', () => {
    // Should display a circular progressbar medium without track and img
    // Should apply custom class
    // Should display progressbar with size small
    // Should display the label if displayIndicator are true
    // Should display a track if withTrack are true
    // Should display progress indicator if displayIndicator are true
    // Should hide progress indicator if indeterminate are true
    // Should apply img if img are set
  });
});
