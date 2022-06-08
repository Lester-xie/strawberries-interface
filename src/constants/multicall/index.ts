import { ChainId } from '../index'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1F98415757620B543A52E61c46B32eB19261F984', // TODO
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
