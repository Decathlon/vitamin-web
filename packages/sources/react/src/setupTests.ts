import Enzyme from 'enzyme';
// The official enzyme adapter for react-17 is not yet available (https://github.com/enzymejs/enzyme/issues/2429)
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
