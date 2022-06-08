import { getAddress } from '../utils/addressHelpers'

export const MERGE = process.env.REACT_APP_MERGE || 'pe'

/**
 *  ************** 有改动请 interface 和 frontend 保持同步 ******************
 */
const globalCoin = {
  wokt:{65:'0x2219845942d28716c0f7c605765fabdca1a7d9e0',64:'0x2219845942d28716c0f7c605765fabdca1a7d9e0'},
  jec:{65:'0x718aa3a8059480297a36a61417715a20210813fd',64:'0x718aa3a8059480297a36a61417715a20210813fd'},
  usdk:{64:'0x533367b864d9b9aa59d0dcb6554df0c89feef1ff',65:'0x533367b864d9b9aa59d0dcb6554df0c89feef1ff'},
  usdt:{64:'0xe579156f9decc4134b5e3a30a24ac46bb8b01281',65:'0xe579156f9decc4134b5e3a30a24ac46bb8b01281'},
  usdc:{64:'0x3e33590013b24bf21d4ccca3a965ea10e570d5b2',65:'0x3e33590013b24bf21d4ccca3a965ea10e570d5b2'},
  btck:{65:'0x09973e7e3914eb5ba69c7c025f30ab9446e3e4e0',64:'0x09973e7e3914eb5ba69c7c025f30ab9446e3e4e0'},
  ethk:{65:'0xdf950cecf33e64176ada5dd733e170a56d11478e',64:'0xdf950cecf33e64176ada5dd733e170a56d11478e'},
  dotk:{65:'0x72f8fa5da80dc6e20e00d02724cf05ebd302c35f',64:'0x72f8fa5da80dc6e20e00d02724cf05ebd302c35f'},
  filk:{65:'0xf6a0dc1fd1d2c0122ab075d7ef93ad79f02ccb93',64:'0xf6a0dc1fd1d2c0122ab075d7ef93ad79f02ccb93'},
  adak:{65:'0x6a3969f38f0c43656e186c310ae903f9ef834bde',64:'0x6a3969f38f0c43656e186c310ae903f9ef834bde'},
  xrpk:{65:'0xc3b4e0e6815cf9068c1501173b47bf6f8b52c193',64:'0xc3b4e0e6815cf9068c1501173b47bf6f8b52c193'},
  unik:{65:'0x3685400cea5d9bb70b292295d16ed7093b668ec5',64:'0x3685400cea5d9bb70b292295d16ed7093b668ec5'},
  link:{65:'0x5e2408d306592c2aed67a5ecc044119ab8152770',64:'0x5e2408d306592c2aed67a5ecc044119ab8152770'},
  theatk:{65:'0x4bb1d8c3d6231d57916345354b1b879dc2578654',64:'0x4bb1d8c3d6231d57916345354b1b879dc2578654'},
  xlmk:{65:'0xccf0f4a410ecbb3b89dc186bf83ad420974bd3a2',64:'0xccf0f4a410ecbb3b89dc186bf83ad420974bd3a2'},
  trxk:{65:'0x927248ea4ece4cb7e60a0c3ba3399b7a44103c6f',64:'0x927248ea4ece4cb7e60a0c3ba3399b7a44103c6f'},
  vetk:{65:'0x5544b25d1bccd3cf82057ba08bde74ad43193042',64:'0x5544b25d1bccd3cf82057ba08bde74ad43193042'},
  solk:{65:'0xff84df9b01b3b25a980800d43df9baf6d177b634',64:'0xff84df9b01b3b25a980800d43df9baf6d177b634'},
  bttk:{65:'0xfa446ebc087c6dcd3395e8e00604bd621af6551d',64:'0xfa446ebc087c6dcd3395e8e00604bd621af6551d'},
  aavek:{65:'0x7f70e6b0ada4dcf99f59d7fe6c2c72d40d156632',64:'0x7f70e6b0ada4dcf99f59d7fe6c2c72d40d156632'},
  xrmk:{65:'0x6fbc581322bc60a96d2198b32330a80f6046a0e6',64:'0x6fbc581322bc60a96d2198b32330a80f6046a0e6'},
  atomk:{65:'0x48541063334b726c071e94aea6f19ebdf0642c3e',64:'0x48541063334b726c071e94aea6f19ebdf0642c3e'},
  iotak:{65:'0x3b06c949f2ec549ef7a28ad63cdc456299592ec1',64:'0x3b06c949f2ec549ef7a28ad63cdc456299592ec1'},
  xtzk:{65:'0xc45cc9476b31a84ab6146848bc5ca6c55a57389e',64:'0xc45cc9476b31a84ab6146848bc5ca6c55a57389e'},
  algok:{65:'0xd2df0b193c233307d17a65325483a540f5a31e74',64:'0xd2df0b193c233307d17a65325483a540f5a31e74'},
  cfxk:{65:'0x287c9406b2db2b3d941f8bd0f2238659bc2a9a06',64:'0x287c9406b2db2b3d941f8bd0f2238659bc2a9a06'},
  nulsk:{65:'0x11e74573280f64f4460bb4b1faebcb5f094b58fa',64:'0x11e74573280f64f4460bb4b1faebcb5f094b58fa'},
  ltck:{65:'0xd616388f6533b6f1c31968a305fbee1727f55850',64:'0xd616388f6533b6f1c31968a305fbee1727f55850'},
  bchk:{65:'0x7d19bd03f65ad140b08e35c906c48289794e25f3',64:'0x7d19bd03f65ad140b08e35c906c48289794e25f3'},
  eosk:{65:'0x7fa8c8647439c5b701267ede2db4167eefd3ac1d',64:'0x7fa8c8647439c5b701267ede2db4167eefd3ac1d'},
  dogek:{65:'0x1c2a8b4307a2d381c94469dd2ac78cb3797889fb',64:'0x1c2a8b4307a2d381c94469dd2ac78cb3797889fb'},
}
const nodeConfiguration: object = {
  t1: {
    ...globalCoin,
    che: '0x83ADc60fA62bE4662a1A04d82E348943c5Ae00e8',
    init_code_hash: '0xf4c0709b4173f77b5eeca06a6f1202a0cf2267912cb220f88ebc98a9bbbde36a',
    factory: '0x50De65727dFb7bE35F954B1AD18f7baD640697D5',
    router02: '0xdc5eaF14BB76C57763F7d6036a5bC1D7CdF9D7F3',

    // farms
    che_cash_okt: {
      65: '0x510d7bd988e475c8826e4a10411bb94e303d68d6',
      64: '0x510d7bd988e475c8826e4a10411bb94e303d68d6'
    },
    che_cash_usdt: {
      65: '0xd7e6d44c80f5837089fdd70e5148355a47577cf7',
      64: '0xd7e6d44c80f5837089fdd70e5148355a47577cf7'
    },
    okt_cash_usdt: {
      65: '0xceb1f6f233c7a62811c8c716e940e4760c4e9bf1',
      64: '0xceb1f6f233c7a62811c8c716e940e4760c4e9bf1'
    },
    btck_cash_usdt: {
      65: '0x022ddf9d5ce173c137717383349fd65c9d82261a',
      64: '0x022ddf9d5ce173c137717383349fd65c9d82261a'
    },
    ethk_cash_usdt: {
      65: '0x59a8bc379dcd3c47f199562b6ebd87afa93f4131',
      64: '0x59a8bc379dcd3c47f199562b6ebd87afa93f4131'
    },
    masterchef: {
      65: '0x2b103cA1E45aA7dF7999ed889530e34310b1023E',
      64: '0x2b103cA1E45aA7dF7999ed889530e34310b1023E'
    },
    syrup: {
      65: '0xECB11F7fEB59a6ac0B32fe2af7fe864e20a83D8d',
      64: '0xECB11F7fEB59a6ac0B32fe2af7fe864e20a83D8d'
    },
    // pools
    CHE_CHE_contractaddress: {
      64: '0xc36AF4589E63bf4e60BD6Bd0235b610d21d0c8a1',
      65: '0xc36AF4589E63bf4e60BD6Bd0235b610d21d0c8a1',
    },
    USDT_CHE_contractaddress: {
      64: '0xc144bbA8cd229C64FD9888595757f4c9F70f4b51',
      65: '0xc144bbA8cd229C64FD9888595757f4c9F70f4b51',
    },
    BTCK_CHE_contractaddress: {
      64: '0x7e57Db2eC05fB84b7E018D6Dc6F8cC986eDf6D9a',
      65: '0x7e57Db2eC05fB84b7E018D6Dc6F8cC986eDf6D9a',
    },
    ETHK_CHE_contractaddress: {
      64: '0x6e0B2716aB10522075BEdadBbb4dFb23f4cc4234',
      65: '0x6e0B2716aB10522075BEdadBbb4dFb23f4cc4234',
    },
    CHE_JEC_contractaddress: {
      64: '0xc824274faeF68D7B123871A9002dDF0938F4cF31',
      65: '0xc824274faeF68D7B123871A9002dDF0938F4cF31',
    }
  },
  t2: {
    ...globalCoin,
    wokt: {
      65: '0x70c1c53e991f31981d592c2d865383ac0d212225',
      64: '0x70c1c53e991f31981d592c2d865383ac0d212225'
    },
    che: '0xDD1f88a0a273E606FF6e9db8520Ce31f4cCdAfaA',
    init_code_hash: '0x783d361e2b4b8733a13a642d62dd5359a70db098c2231e6ca14644280da9dad0',
    factory: '0xE8E4c02B5046beDb8cd1D256F84aDe725a2d37cd',
    router02: '0xba034345ED60e2A004C2318a2c5d5D826e42F7eB',
    // farms
    che_cash_okt: {
      65: '0x7acbacb6177473c85007f05479412cc362d24dfd',
      64: '0x7acbacb6177473c85007f05479412cc362d24dfd'
    },
    che_cash_usdt: {
      65: '0xcd3fa52da2b745e87c06a50cbccf25749ba6239c',
      64: '0xcd3fa52da2b745e87c06a50cbccf25749ba6239c'
    },
    okt_cash_usdt: {
      65: '0x682ccdbc01b0f89485c95d70126672a53ae8a219',
      64: '0x682ccdbc01b0f89485c95d70126672a53ae8a219'
    },
    btck_cash_usdt: {
      65: '0xb4e41f7e961d13f305aec8d1e4419d78cf3e6c9e',
      64: '0xb4e41f7e961d13f305aec8d1e4419d78cf3e6c9e'
    },
    ethk_cash_usdt: {
      65: '0x58fa29a1a6741776ade1c5a4c7d67e467c03424f',
      64: '0x58fa29a1a6741776ade1c5a4c7d67e467c03424f'
    },
    ADAK_cash_OKT:'0xf7612380951e169991427db133134929707f7345',
    DOTK_cash_USDT:'0x056a8d3c2abd21a420d6f4a9aadb12b37567dbef',
    XRPK_cash_OKT:'0x82af47b19aaf35234be0b07eab9b83f943929f39',
    UNIK_cash_OKT:'0xca866fc4e464a4949ca67a6b54fec3d99ce5619a',
    FILK_cash_OKT:'0x20c22e901d92433607bb9d9687cdd7b6cd5d821c',
    LINK_cash_USDT:'0x1488750ffa1adb42ccc1e91e3cf9790d5b2ed57c',
    THEATK_cash_USDT:'0xea9e986bbb5d0bb41d68e43d1d5b15caba000a86',
    XLMK_cash_USDT:'0xf68ffc17b06ddc67cf080f9f32b67853212b8bb3',
    TRXK_cash_USDT:'0x1c55329fc2cc88f55eb8e05f82b5d3d0655a2526',
    VETK_cash_USDT:'0x456cfa87f0ddfb5110fe4e73e1115857f4e88fa3',
    SOLK_cash_USDT:'0xc4e2abdfc5e01e5949ccf7fb97ffe00a63db7c54',
    BTTK_cash_USDT:'0x18150ec409fc4cb2841bd5c8e8a6fc5272fed201',
    AAVEK_cash_USDT:'0x99d2322f74bcc97b82b89bf52ebdf41275250f62',
    XRMK_cash_USDT:'0x8a71fa16f6624255510056191befe00346c16119',
    ATOMK_cash_USDT:'0x91c5d96b65d88fc29a109aa74087023a7b74e68e',
    IOTAK_cash_USDT:'0x96350c6f3457ce280fc5ed06cbbb9fec290d8b41',
    XTZK_cash_USDT:'0x3c109f2e5b9e834c4d8f264fa39472172307abbc',
    ALGOK_cash_USDT:'0xfa8557cd34ff65fb5b16295984d42bb593eb7bdb',
    CFXK_cash_USDT:'0x4e375710c14827f0d81554baf433f7303e2cd979',
    NULSK_cash_USDT:'0x33b78c75d312700e8c5d73e4ecf6ff07f281d577',
    masterchef: {
      65: '0xA2e622bFE437934Ae60E50f4f037F5972c4d3EBd',
      64: '0xA2e622bFE437934Ae60E50f4f037F5972c4d3EBd'
    },
    syrup: {
      65: '0x58eeaB97a70e440B9294D308d369E8b28a7fB181',
      64: '0x58eeaB97a70e440B9294D308d369E8b28a7fB181'
    },
    // pools
    CHE_CHE_contractaddress: {
      64: '0x79f7F7A66dBD976991e27D8237034e14D9048194',
      65: '0x79f7F7A66dBD976991e27D8237034e14D9048194'
    },
    USDT_CHE_contractaddress: {
      64: '0xc542d414C69818BcDbae956128d3Ea482371dcEA',
      65: '0xc542d414C69818BcDbae956128d3Ea482371dcEA',
    },
    BTCK_CHE_contractaddress: {
      64: '0x9792Ca63aDe261d4Ac55d6B63e29b46d241EBA32',
      65: '0x9792Ca63aDe261d4Ac55d6B63e29b46d241EBA32',
    },
    ETHK_CHE_contractaddress: {
      64: '0x7229857A25AE2b4B80B8e9dE8842CDa5Cc99fD2C',
      65: '0x7229857A25AE2b4B80B8e9dE8842CDa5Cc99fD2C',
    },
  },
  t3: {
    ...globalCoin,
    che: '0x0BCd7aE9AaB80DdAd569f41FcB9acE8580B90286',
    init_code_hash: '0xa0d700c65f723336ebf0a3e090ce1e61cd81bbc4d761530bd8e7b98f57c76b26',
    factory: '0x25e4089C97d7347c220E1206f12110658baD5778',
    router02: '0x3881525AE52F8a1ba1d43B3537470d0185F9Be08',
    // farms
    che_cash_okt: {
      65: '0x483221fa00bc4df7e189c87750c8e2af1afa967f',
      64: '0x483221fa00bc4df7e189c87750c8e2af1afa967f'
    },
    che_cash_usdt: {
      65: '0xfad424df069ff086306c3735f959a1e2bd90d5ad',
      64: '0xfad424df069ff086306c3735f959a1e2bd90d5ad'
    },
    okt_cash_usdt: {
      65: '0x9ffdfd631345f6de20e67d72bae79d896583a52f',
      64: '0x9ffdfd631345f6de20e67d72bae79d896583a52f'
    },
    btck_cash_usdt: {
      65: '0x7e4555120e740f0c57a3c84ab9ec9029fae7b5ab',
      64: '0x7e4555120e740f0c57a3c84ab9ec9029fae7b5ab'
    },
    ethk_cash_usdt: {
      65: '0xdb39de8b1c397b05860dfec9323a6a9dd8c30c60',
      64: '0xdb39de8b1c397b05860dfec9323a6a9dd8c30c60'
    },
    masterchef: {
      65: '0x59Af127BAB42D13dDFFeDC4E5b2dde26066c4824',
      64: '0x59Af127BAB42D13dDFFeDC4E5b2dde26066c4824'
    },
    syrup: {
      65: '0xb588a0A7A745AF037d50cCc7c7f93698073330E6',
      64: '0xb588a0A7A745AF037d50cCc7c7f93698073330E6'
    },
    // pools
    CHE_CHE_contractaddress: {
      64: '0xc36AF4589E63bf4e60BD6Bd0235b610d21d0c8a1',
      65: '0xc36AF4589E63bf4e60BD6Bd0235b610d21d0c8a1',
    },
    USDT_CHE_contractaddress: {
      64: '0xc144bbA8cd229C64FD9888595757f4c9F70f4b51',
      65: '0xc144bbA8cd229C64FD9888595757f4c9F70f4b51',
    },
    BTCK_CHE_contractaddress: {
      64: '0x7e57Db2eC05fB84b7E018D6Dc6F8cC986eDf6D9a',
      65: '0x7e57Db2eC05fB84b7E018D6Dc6F8cC986eDf6D9a',
    },
    ETHK_CHE_contractaddress: {
      64: '0x6e0B2716aB10522075BEdadBbb4dFb23f4cc4234',
      65: '0x6e0B2716aB10522075BEdadBbb4dFb23f4cc4234',
    },
  },
  t4: {
    ...globalCoin,
    che: '0x4f0FB3a2732a927baB02795F6cA544934f451fc5',
    init_code_hash: '0x2225315de8ee4ee56952cac5cbfbdbe8811ad02ae73bfe84dc4610565b95525c',
    factory: '0x77c1a72ff92Bc319eADaBD3c17dF04c7BEFe35A5',
    router02: '0x66F100fE4727Be79678de744118A69920eD52591',

    // farms
    che_cash_okt: {
      65: '0x0ae63fa414596e168f1f5b8acff45de44118d506',
      64: '0x0ae63fa414596e168f1f5b8acff45de44118d506'
    },
    che_cash_usdt: {
      65: '0x9315394aec58b4814d11fcd080b9a852da8049ed',
      64: '0x9315394aec58b4814d11fcd080b9a852da8049ed'
    },
    okt_cash_usdt: {
      65: '0x6923a6340eed8e695e1a047fe212e83284955365',
      64: '0x6923a6340eed8e695e1a047fe212e83284955365'
    },
    btck_cash_usdt: {
      65: '0x2d652cb92a0507349c5bf3ddcf5f2966ac0470d5',
      64: '0x2d652cb92a0507349c5bf3ddcf5f2966ac0470d5'
    },
    ethk_cash_usdt: {
      65: '0xa824788893e1716e3fe879e0490780a941c99174',
      64: '0xa824788893e1716e3fe879e0490780a941c99174'
    },
    masterchef: {
      65: '0x9406F4e29C14C2404474D8d923589600D5D63a9B',
      64: '0x9406F4e29C14C2404474D8d923589600D5D63a9B'
    },
    syrup: {
      65: '0xd5899EE459e8709ccEc5AB3Ad91ec3B44ec3321d',
      64: '0xd5899EE459e8709ccEc5AB3Ad91ec3B44ec3321d'
    },
    // pools
    CHE_CHE_contractaddress: {
      64: '0xc36AF4589E63bf4e60BD6Bd0235b610d21d0c8a1',
      65: '0xc36AF4589E63bf4e60BD6Bd0235b610d21d0c8a1',
    },
    USDT_CHE_contractaddress: {
      64: '0xc144bbA8cd229C64FD9888595757f4c9F70f4b51',
      65: '0xc144bbA8cd229C64FD9888595757f4c9F70f4b51',
    },
    BTCK_CHE_contractaddress: {
      64: '0x7e57Db2eC05fB84b7E018D6Dc6F8cC986eDf6D9a',
      65: '0x7e57Db2eC05fB84b7E018D6Dc6F8cC986eDf6D9a',
    },
    ETHK_CHE_contractaddress: {
      64: '0x6e0B2716aB10522075BEdadBbb4dFb23f4cc4234',
      65: '0x6e0B2716aB10522075BEdadBbb4dFb23f4cc4234',
    },
  },
  t5: {
    ...globalCoin,
    che: '0x93DEbA6E6d22bDB17590C24AE9f9520F64c90955',
    init_code_hash: '0xa613378c114550693cd4e91dd7c97bd3b803a0c9b5d8e5e855b43cbcda47463e',
    factory: '0x864736E5b954D377bCe379a05482B35B087636D4',
    router02: '0x8F59ae02BF0977Af78B907452Bbfec34a2121CcB',
    che_cash_okt: {
      65: '0x5c273e25540121508ecc145e40145efd19997381',
      64: '0x5c273e25540121508ecc145e40145efd19997381'
    },
    che_cash_usdt: {
      65: '0x8c01e06a8c92917e58fffa5c77f5b8edf9877c1a',
      64: '0x8c01e06a8c92917e58fffa5c77f5b8edf9877c1a'
    },
    okt_cash_usdt: {
      65: '0x7f792a1f42f5b9d7d7d0fa45d27818238780b37b',
      64: '0x7f792a1f42f5b9d7d7d0fa45d27818238780b37b'
    },
    btck_cash_usdt: {
      65: '0x9c5e6b47c03f1cda27af930e5150411a02dfb707',
      64: '0x9c5e6b47c03f1cda27af930e5150411a02dfb707'
    },
    ethk_cash_usdt: {
      65: '0x921a6701727691e53becdfd3e3a2f677068d21c8',
      64: '0x921a6701727691e53becdfd3e3a2f677068d21c8'
    },
    masterchef: {
      65: '0xB0A92911Fe1d2B8D5a81DB2022E01ca881ff549a',
      64: '0xB0A92911Fe1d2B8D5a81DB2022E01ca881ff549a'
    },
    syrup: {
      65: '0xeD95C5968a4ECbd374f86da3d08A6C813cE9D3D0',
      64: '0xeD95C5968a4ECbd374f86da3d08A6C813cE9D3D0'
    },
    // pools
    CHE_CHE_contractaddress: {
      64: '0xD5D4aE0d0bedF67086f17cC7c8d2FbCAf8509A35',
      65: '0xD5D4aE0d0bedF67086f17cC7c8d2FbCAf8509A35',
    },
    USDT_CHE_contractaddress: {
      64: '0xc25EF28Fc9D0BB9AE6989c22E9FA2c58e130c694',
      65: '0xc25EF28Fc9D0BB9AE6989c22E9FA2c58e130c694',
    },
    BTCK_CHE_contractaddress: {
      64: '0xFd1009A64EE1E5637F2F5DaD2c9BF6F6d320B725',
      65: '0xFd1009A64EE1E5637F2F5DaD2c9BF6F6d320B725',
    },
    ETHK_CHE_contractaddress: {
      64: '0x30e2AF1f33F890f0dead705Cc42f3Bf88a01FA4d',
      65: '0x30e2AF1f33F890f0dead705Cc42f3Bf88a01FA4d',
    }
  },
  // 主网合约
  pe: {
    ...globalCoin,
    che: '0xD7A07aB45D2832D77A9Bde5D1f437A60292c5d7F',
    init_code_hash: '0x8f97d0c5056e8ae78fb3dda0c8c1b6053283f3402778c1e15dbeb0566539322e',
    factory: '0xDd60E23b8170a16c6306a4Bfdd9Fc5554C503353',
    router02: '0xf7b89A3F94E613053B2F4b54Db9104Eb79a7085a',
    che_cash_okt: {
      65: '0x503b59dd0a8cba838c868b15f39c40d762574cc8',
      64: '0x503b59dd0a8cba838c868b15f39c40d762574cc8'
    },
    che_cash_usdt: {
      65: '0x3e94409fe0b6feaacaf145b7859a76a4b33d793f',
      64: '0x3e94409fe0b6feaacaf145b7859a76a4b33d793f'
    },
    okt_cash_usdt: {
      65: '0x5002df6038d3beca87abffc236bc4342b1b8a483',
      64: '0x5002df6038d3beca87abffc236bc4342b1b8a483'
    },
    masterchef: {
      65: '0x62aB9E3Fa437c39D959AA56D403440AD3233B365',
      64: '0x62aB9E3Fa437c39D959AA56D403440AD3233B365'
    },
    syrup: {
      65: '0x67762b58f07a1f99b5054794a351Bc30f398f7E3',
      64: '0x67762b58f07a1f99b5054794a351Bc30f398f7E3'
    },
    // pools
    CHE_CHE_contractaddress: {
      64: '0x1C2561d6AD8a24CEA5F9d99696B9018fFd607f97',
      65: '0x1C2561d6AD8a24CEA5F9d99696B9018fFd607f97',
    },
    USDT_CHE_contractaddress: {
      64: '0xfCA4f56F17Fea9Bf31c576416Feb36f7a573d518',
      65: '0xfCA4f56F17Fea9Bf31c576416Feb36f7a573d518',
    },
    BTCK_CHE_contractaddress: {
      64: '0x2C0f2539C8D26Fa0E6552ab5af3D1C12683837A0',
      65: '0x2C0f2539C8D26Fa0E6552ab5af3D1C12683837A0',
    },
    ETHK_CHE_contractaddress: {
      64: '0x787773aA941213d4B4d7A6293A4E1B78CEA95104',
      65: '0x787773aA941213d4B4d7A6293A4E1B78CEA95104',
    },
    CHE_JEC_contractaddress: {
      64: '0xB01D4B2fA9883762F311020c9AC78AF24A420964',
      65: '0xB01D4B2fA9883762F311020c9AC78AF24A420964',
    }
  },
}

if (MERGE !== 'pe') {
  console.log('当前合约环境：', MERGE)
  console.log('当前合约信息：', nodeConfiguration[MERGE])
}

let config = nodeConfiguration[MERGE]
for (let z in config){
  config[z] = getAddress(config[z])
}

export default config
