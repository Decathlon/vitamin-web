import { computeRel } from './link';

describe('link', () => {
  describe('computeRel', () => {
    test('Should add noopener noreferrer if target are blank', () => {
      expect(computeRel('_blank', '')).toEqual('noopener noreferrer');
    });
    test('Should add noopener noreferrer if target are blank and rel are defined', () => {
      expect(computeRel('_blank', 'defined rel')).toEqual(
        'defined rel noopener noreferrer',
      );
    });
    test('Should not add noopener noreferrer if target are different of blank', () => {
      expect(computeRel('_self', 'defined rel')).toEqual('defined rel');
    });
    test('Should remove duplicate elements', () => {
      expect(computeRel('_blank', 'noopener noreferrer')).toEqual(
        'noopener noreferrer',
      );
    });
  });
});
