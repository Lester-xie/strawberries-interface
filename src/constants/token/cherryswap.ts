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
  "logoURI": getTokenLogoURL(env.wada),
  "keywords": ["cherry", "default"],
  "tokens": [
    {
      "name": "WADA",
      "symbol": "WADA",
      "address": env.wada,
      "chainId": 200101,
      "decimals": 18,
      "logoURI": getTokenLogoURL(env.wada)
    },
    {
      "name": "CHE",
      "symbol": "CHE",
      "address": env.che,
      "chainId": 200101,
      "decimals": 18,
      "logoURI": getTokenLogoURL(env.che)
    },
    {
      "name": "TEST USDT Token",
      "symbol": "TUSDT",
      "address": env.tusdt,
      "chainId": 200101,
      "decimals": 18,
      "logoURI": getTokenLogoURL(env.tusdt)
    },
    {
      "name": "TEST USDC Token",
      "symbol": "TUSDC",
      "address": env.tusdc,
      "chainId": 200101,
      "decimals": 18,
      "logoURI": getTokenLogoURL(env.tusdc)
    },
  ]
}
