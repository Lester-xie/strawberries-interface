import env, { MERGE } from '../../config/env'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
export default {
  "name": "cherryswap",
  "timestamp": "2020-08-25T15:41:29.665Z",
  "version": {
    "major": 1,
    "minor": 3,
    "patch": 1
  },
  "tags": {},
  "logoURI": getTokenLogoURL(env.wokt),
  "keywords": ["cherry", "default"],
  "tokens": [
    {
      "name": "CHE",
      "symbol": "CHE",
      "address": env.che,
      "chainId": 65,
      "decimals": 18,
      "logoURI": getTokenLogoURL(env.che)
    },
    {
      "name": "BTCK",
      "symbol": "BTCK",
      "address": env.btck,
      "chainId": 65,
      "decimals": 10,
      "logoURI": getTokenLogoURL(env.btck),
    },
    {
      "name": "ETHK",
      "symbol": "ETHK",
      "address": env.ethk,
      "chainId": 65,
      "decimals": 10,
      "logoURI": getTokenLogoURL(env.ethk)
    },
    {
      "name": "USDT",
      "symbol": "USDT",
      "address": env.usdt,
      "chainId": 65,
      "decimals": 10,
      "logoURI": getTokenLogoURL(env.usdt)
    },
    {
      "name": "USDK",
      "symbol": "USDK",
      "address":env.usdk,
      "chainId": 65,
      "decimals": 10,
      "logoURI": getTokenLogoURL(env.usdk)
    },
    {
      "name": "USDC",
      "symbol": "USDC",
      "address":env.usdc,
      "chainId": 65,
      "decimals": 10,
      "logoURI": getTokenLogoURL(env.usdc)
    },
    {
      "name":"DOTK",
      "symbol":"DOTK",
      "chainId": 65,
      "address":env.dotk,
      "logoURI": getTokenLogoURL(env.dotk),
      "decimals": 10,
    },
    {
      "name":"FILK",
      "symbol":"FILK",
      "chainId": 65,
      "address":env.filk,
      "logoURI": getTokenLogoURL(env.filk),
      "decimals": 10,
    },
    {
      "name": "ADAK",
      "symbol":"ADAK",
      "chainId":65,
      "address":env.adak,
      "logoURI": getTokenLogoURL(env.adak),
      "decimals": 10
    },
    {
      "name": "XRPK",
      "symbol":"XRPK",
      "chainId":65,
      "address":env.xrpk,
      "logoURI": getTokenLogoURL(env.xrpk),
      "decimals": 10
    },
    {
      "name": "UNIK",
      "symbol":"UNIK",
      "chainId":65,
      "address":env.unik,
      "logoURI": getTokenLogoURL(env.unik),
      "decimals": 10
    },
    {
      "name": "LINK",
      "symbol":"LINK",
      "chainId":65,
      "address":env.link,
      "logoURI": getTokenLogoURL(env.link),
      "decimals": 10
    },
    {
      "name": "THEATK",
      "symbol":"THEATK",
      "chainId":65,
      "address":env.theatk,
      "logoURI": getTokenLogoURL(env.theatk),
      "decimals": 10
    },
    {
      "name": "XLMK",
      "symbol":"XLMK",
      "chainId":65,
      "address":env.xlmk,
      "logoURI": getTokenLogoURL(env.xlmk),
      "decimals": 10
    },
    {
      "name": "TRXK",
      "symbol":"TRXK",
      "chainId":65,
      "address":env.trxk,
      "logoURI": getTokenLogoURL(env.trxk),
      "decimals": 10
    },
    {
      "name": "VETK",
      "symbol":"VETK",
      "chainId":65,
      "address":env.vetk,
      "logoURI": getTokenLogoURL(env.vetk),
      "decimals": 10
    },
    {
      "name": "SOLK",
      "symbol":"SOLK",
      "chainId":65,
      "address":env.solk,
      "logoURI": getTokenLogoURL(env.solk),
      "decimals": 10
    },
    {
      "name": "BTTK",
      "symbol":"BTTK",
      "chainId":65,
      "address":env.bttk,
      "logoURI": getTokenLogoURL(env.bttk),
      "decimals": 10
    },
    {
      "name": "AAVEK",
      "symbol":"AAVEK",
      "chainId":65,
      "address":env.aavek,
      "logoURI": getTokenLogoURL(env.aavek),
      "decimals": 10
    },
    {
      "name": "XRMK",
      "symbol":"XRMK",
      "chainId":65,
      "address":env.xrmk,
      "logoURI": getTokenLogoURL(env.xrmk),
      "decimals": 10
    },
    {
      "name": "ATOMK",
      "symbol":"ATOMK",
      "chainId":65,
      "address":env.atomk,
      "logoURI": getTokenLogoURL(env.atomk),
      "decimals": 10
    },
    {
      "name": "IOTAK",
      "symbol":"IOTAK",
      "chainId":65,
      "address":env.iotak,
      "logoURI": getTokenLogoURL(env.iotak),
      "decimals": 10
    },
    {
      "name": "XTZK",
      "symbol":"XTZK",
      "chainId":65,
      "address":env.xtzk,
      "logoURI": getTokenLogoURL(env.xtzk),
      "decimals": 10
    },
    {
      "name": "ALGOK",
      "symbol":"ALGOK",
      "chainId":65,
      "address":env.algok,
      "logoURI": getTokenLogoURL(env.algok),
      "decimals": 10
    },
    {
      "name": "CFXK",
      "symbol":"CFXK",
      "chainId":65,
      "address":env.cfxk,
      "logoURI": getTokenLogoURL(env.cfxk),
      "decimals": 10
    },
    {
      "name": "NULSK",
      "symbol":"NULSK",
      "chainId":65,
      "address":env.nulsk,
      "logoURI": getTokenLogoURL(env.nulsk),
      "decimals": 10
    }
  ]
}
