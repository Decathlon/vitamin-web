import { format } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Joseph', undefined)).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(format('Joseph', 'Publique')).toEqual('Joseph Publique');
  });
});
