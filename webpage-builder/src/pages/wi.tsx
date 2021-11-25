import * as It from 'solidjs-icons/wi';
import Pack from '../components/Pack';
import { packages } from '../../../manifest';

const keys = Object.keys(It);
const pack = packages.find((it) => it.id === 'wi');

export default () => (
  <Pack keys={keys} It={It} pack={pack} />
)