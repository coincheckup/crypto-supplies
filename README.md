# Cryptocurrency circulating, available and total supplies

This is a project meant to keep track of crypto coin supply data and in a normalized format, hoping to generate community interest and involvement.

The end goal is to have a more transparent and up to date source than what's out there on the web right now.

As such, please help out by submitting a pull request with your favorite coin(s) to track.

# Contributing

1. Fork the project
2. Work on integrating your favorite coins
3. Create a pull request back to the original project

Please submit ATOMIC EDITS, one pull request per one coin, do not mix them.

# Payload structure

Implemented coins should return an object via `callback()` with the following keys:

- `c` representing the Circulating Supply
- `t` representing the Total Supply
- `m` representing the Max Supply

# How to run all coins available

1. Clone or download the repository
2. Run `npm install`
3. Run `node supplies.js get-all`

# How to run an individual coin

1. Clone or download the repository
2. Run `npm install`
3. Run `node supplies.js get bitcoin`

# Caching

This package uses a file-based cache with a default time to live (TTL) of 10 minutes.

You can optionally pass an argument to override the TTL via `--cacheTTL 10` for 10 seconds for example.

# Optional flags

- `--help` displays available commands and flags
- `--pretty` a boolean flag with no arguments, pretty prints output
- `--only-implemented` a boolean flag with no arguments, only displays implemented coins
- `--cacheTTL 10`  an integer flag with one argument, the number of seconds to cache responses

# Sample basic output

```
> ./supplies.js get-all --only-implemented

{"c":31112484646,"t":31112484646,"m":45000000000,"id":"cardano"}
{"c":65000000,"t":100000000,"m":100000000,"id":"neo"}
{"c":56560358.23095151,"t":56560358.23095151,"m":84000000,"id":"litecoin"}
{"c":8073689.96392729,"t":8073689.96392729,"m":18900000,"id":"dash"}
{"c":35017498.50875262,"id":"pivx"}
{"c":98857486.20226616,"id":"stratis"}
{"c":10258708190.732668,"m":21000000000,"id":"digibyte"}
{"c":16036035.28,"id":"monero"}
{"c":99992204718.08847,"t":99992434971,"m":100000000000,"id":"ripple"}
{"c":99461419.46,"id":"ethereum"}
{"c":7583686.03269673,"t":7583686.03269673,"id":"bulwark"}
```

# Sample pretty output

```
> ./supplies.js get-all --only-implemented --pretty

cardano
|-- Circulating: 31112484646
|-- Total: 31112484646
|-- Max: 45000000000

neo
|-- Circulating: 65000000
|-- Total: 100000000
|-- Max: 100000000

bitcoin
|-- Circulating: 17033525
|-- Total: 21000000
|-- Max: N/A

litecoin
|-- Circulating: 56560408.23095151
|-- Total: 56560408.23095151
|-- Max: 84000000
```

# Coin implementation statuses

*Total*: 1811 -- *Implemented*: 802 -- *To do*: 1009


ID | Name | Symbol | Implementation | Status
--- | --- | --- | --- | ---
[bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin.js) | Bitcoin | BTC | Dynamic | *+ Done*
[ethereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum.js) | Ethereum | ETH | Dynamic | *+ Done*
[ripple](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ripple.js) | Ripple | XRP | Dynamic | *+ Done*
[bitcoin-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-cash.js) | Bitcoin Cash | BCH | Not Implemented | `-- Not done`
[eos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eos.js) | EOS | EOS | Dynamic | *+ Done*
[litecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin.js) | Litecoin | LTC | Dynamic | *+ Done*
[stellar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stellar.js) | Stellar | XLM | Dynamic | *+ Done*
[cardano](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cardano.js) | Cardano | ADA | Static | *+ Done*
[tron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tron.js) | TRON | TRX | Dynamic | *+ Done*
[iota](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iota.js) | IOTA | MIOTA | Static | *+ Done*
[tether](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tether.js) | Tether | USDT | CoinMarketCap | *+ Done*
[neo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neo.js) | NEO | NEO | Static | *+ Done*
[dash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dash.js) | Dash | DASH | Dynamic | *+ Done*
[monero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero.js) | Monero | XMR | Dynamic | *+ Done*
[binance-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/binance-coin.js) | Binance Coin | BNB | Dynamic | *+ Done*
[ethereum-classic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-classic.js) | Ethereum Classic | ETC | Dynamic | *+ Done*
[vechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vechain.js) | VeChain | VEN | Dynamic | *+ Done*
[nem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nem.js) | NEM | XEM | Dynamic | *+ Done*
[omisego](https://github.com/coincheckup/crypto-supplies/blob/master/coins/omisego.js) | OmiseGO | OMG | Dynamic | *+ Done*
[qtum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qtum.js) | Qtum | QTUM | Dynamic | *+ Done*
[zcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zcash.js) | Zcash | ZEC | Dynamic | *+ Done*
[ontology](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ontology.js) | Ontology | ONT | Not Implemented | `-- Not done`
[icon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icon.js) | ICON | ICX | Dynamic | *+ Done*
[lisk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lisk.js) | Lisk | LSK | Not Implemented | `-- Not done`
[decred](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decred.js) | Decred | DCR | Dynamic | *+ Done*
[bytecoin-bcn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bytecoin-bcn.js) | Bytecoin | BCN | Dynamic | *+ Done*
[zilliqa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zilliqa.js) | Zilliqa | ZIL | Dynamic | *+ Done*
[aeternity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aeternity.js) | Aeternity | AE | Dynamic | *+ Done*
[bitcoin-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-gold.js) | Bitcoin Gold | BTG | Dynamic | *+ Done*
[siacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/siacoin.js) | Siacoin | SC | Dynamic | *+ Done*
[bytom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bytom.js) | Bytom | BTM | Dynamic | *+ Done*
[0x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/0x.js) | 0x | ZRX | Dynamic | *+ Done*
[bitshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitshares.js) | BitShares | BTS | Static | *+ Done*
[mixin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mixin.js) | Mixin | XIN | Dynamic | *+ Done*
[verge](https://github.com/coincheckup/crypto-supplies/blob/master/coins/verge.js) | Verge | XVG | Dynamic | *+ Done*
[steem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steem.js) | Steem | STEEM | Dynamic | *+ Done*
[augur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/augur.js) | Augur | REP | Dynamic | *+ Done*
[maker](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maker.js) | Maker | MKR | Dynamic | *+ Done*
[dogecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dogecoin.js) | Dogecoin | DOGE | Dynamic | *+ Done*
[nano](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nano.js) | Nano | NANO | Static | *+ Done*
[rchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rchain.js) | RChain | RHOC | Dynamic | *+ Done*
[bitcoin-diamond](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-diamond.js) | Bitcoin Diamond | BCD | Dynamic | *+ Done*
[waves](https://github.com/coincheckup/crypto-supplies/blob/master/coins/waves.js) | Waves | WAVES | Static | *+ Done*
[batcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/batcoin.js) | N/A | N/A | N/A | `-- Not done`
[bitcoin-private](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-private.js) | Bitcoin Private | BTCP | Dynamic | *+ Done*
[wanchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wanchain.js) | Wanchain | WAN | Static | *+ Done*
[golem-network-tokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golem-network-tokens.js) | Golem | GNT | Dynamic | *+ Done*
[stratis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stratis.js) | Stratis | STRAT | Dynamic | *+ Done*
[digibyte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digibyte.js) | DigiByte | DGB | Dynamic | *+ Done*
[kucoin-shares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kucoin-shares.js) | KuCoin Shares | KCS | Dynamic | *+ Done*
[nectar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nectar.js) | Nectar | NEC | Dynamic | *+ Done*
[digixdao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digixdao.js) | DigixDAO | DGD | Dynamic | *+ Done*
[nebulas-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nebulas-token.js) | Nebulas | NAS | Dynamic | *+ Done*
[hshare](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hshare.js) | Hshare | HSR | Dynamic | *+ Done*
[populous](https://github.com/coincheckup/crypto-supplies/blob/master/coins/populous.js) | Populous | PPT | Dynamic | *+ Done*
[status](https://github.com/coincheckup/crypto-supplies/blob/master/coins/status.js) | Status | SNT | Dynamic | *+ Done*
[huobi-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/huobi-token.js) | Huobi Token | HT | Dynamic | *+ Done*
[iostoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iostoken.js) | IOStoken | IOST | Dynamic | *+ Done*
[loopring](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loopring.js) | Loopring | LRC | Dynamic | *+ Done*
[aion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aion.js) | Aion | AION | Dynamic | *+ Done*
[gxchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gxchain.js) | GXChain | GXS | Dynamic | *+ Done*
[komodo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/komodo.js) | Komodo | KMD | Dynamic | *+ Done*
[cryptonex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptonex.js) | Cryptonex | CNX | Dynamic | *+ Done*
[bancor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bancor.js) | Bancor | BNT | Dynamic | *+ Done*
[reddcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/reddcoin.js) | ReddCoin | RDD | Dynamic | *+ Done*
[moac](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moac.js) | MOAC | MOAC | Dynamic | *+ Done*
[ark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ark.js) | Ark | ARK | Dynamic | *+ Done*
[maidsafecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maidsafecoin.js) | MaidSafeCoin | MAID | Dynamic | *+ Done*
[ardor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ardor.js) | Ardor | ARDR | Static | *+ Done*
[monacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monacoin.js) | MonaCoin | MONA | Dynamic | *+ Done*
[centrality](https://github.com/coincheckup/crypto-supplies/blob/master/coins/centrality.js) | Centrality | CENNZ | Dynamic | *+ Done*
[aelf](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aelf.js) | aelf | ELF | Dynamic | *+ Done*
[dentacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dentacoin.js) | Dentacoin | DCN | Dynamic | *+ Done*
[funfair](https://github.com/coincheckup/crypto-supplies/blob/master/coins/funfair.js) | FunFair | FUN | Dynamic | *+ Done*
[kyber-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kyber-network.js) | Kyber Network | KNC | Dynamic | *+ Done*
[veritaseum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veritaseum.js) | Veritaseum | VERI | Dynamic | *+ Done*
[emercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/emercoin.js) | Emercoin | EMC | Dynamic | *+ Done*
[gas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gas.js) | Gas | GAS | Not Implemented | `-- Not done`
[dropil](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dropil.js) | Dropil | DROP | Dynamic | *+ Done*
[mithril](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mithril.js) | Mithril | MITH | Dynamic | *+ Done*
[pivx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pivx.js) | PIVX | PIVX | Dynamic | *+ Done*
[enigma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/enigma.js) | N/A | N/A | N/A | `-- Not done`
[bibox-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bibox-token.js) | Bibox Token | BIX | Dynamic | *+ Done*
[decentraland](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decentraland.js) | Decentraland | MANA | Dynamic | *+ Done*
[syscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/syscoin.js) | Syscoin | SYS | Dynamic | *+ Done*
[fusion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fusion.js) | Fusion | FSN | Dynamic | *+ Done*
[elastos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elastos.js) | Elastos | ELA | Not Implemented | `-- Not done`
[nxt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nxt.js) | Nxt | NXT | Static | *+ Done*
[cybermiles](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybermiles.js) | CyberMiles | CMT | Dynamic | *+ Done*
[kin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kin.js) | Kin | KIN | Dynamic | *+ Done*
[dragonchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dragonchain.js) | Dragonchain | DRGN | Dynamic | *+ Done*
[factom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/factom.js) | Factom | FCT | Not Implemented | `-- Not done`
[ethos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethos.js) | Ethos | ETHOS | Dynamic | *+ Done*
[lightchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lightchain.js) | LightChain | LIGHT | Dynamic | *+ Done*
[qash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qash.js) | QASH | QASH | Dynamic | *+ Done*
[loom-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loom-network.js) | Loom Network | LOOM | Dynamic | *+ Done*
[zcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zcoin.js) | ZCoin | XZC | Dynamic | *+ Done*
[docademic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/docademic.js) | Docademic | MTC | Dynamic | *+ Done*
[waykichain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/waykichain.js) | WaykiChain | WICC | Dynamic | *+ Done*
[bnktothefuture](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bnktothefuture.js) | BnkToTheFuture | BFT | Dynamic | *+ Done*
[infinity-economics](https://github.com/coincheckup/crypto-supplies/blob/master/coins/infinity-economics.js) | Infinity Economics | XIN | Not Implemented | `-- Not done`
[nuls](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nuls.js) | Nuls | NULS | Dynamic | *+ Done*
[paypex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paypex.js) | Paypex | PAYX | Dynamic | *+ Done*
[substratum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/substratum.js) | Substratum | SUB | Dynamic | *+ Done*
[true-usd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/true-usd.js) | N/A | N/A | N/A | `-- Not done`
[blocknet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blocknet.js) | Blocknet | BLOCK | Dynamic | *+ Done*
[cortex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cortex.js) | Cortex | CTXC | Dynamic | *+ Done*
[theta-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/theta-token.js) | Theta Token | THETA | Dynamic | *+ Done*
[monaco](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monaco.js) | Monaco | MCO | Dynamic | *+ Done*
[byteball](https://github.com/coincheckup/crypto-supplies/blob/master/coins/byteball.js) | Byteball Bytes | GBYTE | Not Implemented | `-- Not done`
[storm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storm.js) | Storm | STORM | Dynamic | *+ Done*
[power-ledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/power-ledger.js) | Power Ledger | POWR | Dynamic | *+ Done*
[wax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wax.js) | WAX | WAX | Dynamic | *+ Done*
[electroneum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electroneum.js) | Electroneum | ETN | Dynamic | *+ Done*
[nexus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexus.js) | Nexus | NXS | Not Implemented | `-- Not done`
[zencash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zencash.js) | ZenCash | ZEN | Not Implemented | `-- Not done`
[eosdac](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eosdac.js) | eosDAC | EOSDAC | Dynamic | *+ Done*
[revain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/revain.js) | Revain | R | Dynamic | *+ Done*
[deepbrain-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deepbrain-chain.js) | DeepBrain Chain | DBC | Not Implemented | `-- Not done`
[rlc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rlc.js) | iExec RLC | RLC | Dynamic | *+ Done*
[chainlink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chainlink.js) | ChainLink | LINK | Dynamic | *+ Done*
[iconomi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iconomi.js) | Iconomi | ICN | Not Implemented | `-- Not done`
[gifto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gifto.js) | Gifto | GTO | Dynamic | *+ Done*
[bitcoindark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoindark.js) | BitcoinDark | BTCD | Not Implemented | `-- Not done`
[storj](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storj.js) | Storj | STORJ | Dynamic | *+ Done*
[streamr-datacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/streamr-datacoin.js) | Streamr DATAcoin | DATA | Dynamic | *+ Done*
[sonm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sonm.js) | SONM | SNM | Dynamic | *+ Done*
[matrix-ai-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/matrix-ai-network.js) | Matrix AI Network | MAN | Dynamic | *+ Done*
[salt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/salt.js) | SALT | SALT | Dynamic | *+ Done*
[civic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/civic.js) | Civic | CVC | Not Implemented | `-- Not done`
[high-performance-blockchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/high-performance-blockchain.js) | High Performance Blockchain | HPB | Dynamic | *+ Done*
[singularitynet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/singularitynet.js) | SingularityNET | AGI | Dynamic | *+ Done*
[tenx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tenx.js) | TenX | PAY | Dynamic | *+ Done*
[request-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/request-network.js) | Request Network | REQ | Dynamic | *+ Done*
[nucleus-vision](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nucleus-vision.js) | Nucleus Vision | NCASH | Dynamic | *+ Done*
[achain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/achain.js) | Achain | ACT | Not Implemented | `-- Not done`
[asch](https://github.com/coincheckup/crypto-supplies/blob/master/coins/asch.js) | Asch | XAS | Not Implemented | `-- Not done`
[holo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/holo.js) | Holo | HOT | Dynamic | *+ Done*
[aragon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aragon.js) | Aragon | ANT | Dynamic | *+ Done*
[medishares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medishares.js) | MediShares | MDS | Dynamic | *+ Done*
[neblio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neblio.js) | Neblio | NEBL | Not Implemented | `-- Not done`
[nexo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexo.js) | Nexo | NEXO | Dynamic | *+ Done*
[gnosis-gno](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gnosis-gno.js) | Gnosis | GNO | Not Implemented | `-- Not done`
[time-new-bank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/time-new-bank.js) | Time New Bank | TNB | Dynamic | *+ Done*
[skycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skycoin.js) | Skycoin | SKY | Not Implemented | `-- Not done`
[cybervein](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybervein.js) | CyberVein | CVT | Dynamic | *+ Done*
[smartmesh](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartmesh.js) | SmartMesh | SMT | Dynamic | *+ Done*
[arcblock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arcblock.js) | Arcblock | ABT | Dynamic | *+ Done*
[all-sports](https://github.com/coincheckup/crypto-supplies/blob/master/coins/all-sports.js) | All Sports | SOC | Dynamic | *+ Done*
[ruff](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ruff.js) | Ruff | RUFF | Dynamic | *+ Done*
[santiment](https://github.com/coincheckup/crypto-supplies/blob/master/coins/santiment.js) | Santiment Network Token | SAN | Dynamic | *+ Done*
[dew](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dew.js) | DEW | DEW | Dynamic | *+ Done*
[educare](https://github.com/coincheckup/crypto-supplies/blob/master/coins/educare.js) | EDUCare | EKT | Dynamic | *+ Done*
[bottos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bottos.js) | Bottos | BTO | Dynamic | *+ Done*
[cindicator](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cindicator.js) | Cindicator | CND | Dynamic | *+ Done*
[bitcoin-interest](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-interest.js) | Bitcoin Interest | BCI | Not Implemented | `-- Not done`
[dai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dai.js) | Dai | DAI | Dynamic | *+ Done*
[gamecredits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gamecredits.js) | GameCredits | GAME | Not Implemented | `-- Not done`
[dynamic-trading-rights](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dynamic-trading-rights.js) | Dynamic Trading Rights | DTR | Dynamic | *+ Done*
[digitalnote](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitalnote.js) | DigitalNote | XDN | Not Implemented | `-- Not done`
[dent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dent.js) | Dent | DENT | Dynamic | *+ Done*
[true-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/true-chain.js) | True Chain | TRUE | Dynamic | *+ Done*
[credits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/credits.js) | Credits | CS | Dynamic | *+ Done*
[crypterium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crypterium.js) | Crypterium | CRPT | Dynamic | *+ Done*
[vertcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vertcoin.js) | Vertcoin | VTC | Dynamic | *+ Done*
[enjin-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/enjin-coin.js) | Enjin Coin | ENJ | Dynamic | *+ Done*
[c20](https://github.com/coincheckup/crypto-supplies/blob/master/coins/c20.js) | CRYPTO20 | C20 | Dynamic | *+ Done*
[pillar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pillar.js) | Pillar | PLR | Dynamic | *+ Done*
[quantstamp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quantstamp.js) | Quantstamp | QSP | Dynamic | *+ Done*
[groestlcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/groestlcoin.js) | Groestlcoin | GRS | Dynamic | *+ Done*
[stakenet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stakenet.js) | StakeNet | XSN | Not Implemented | `-- Not done`
[ignis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ignis.js) | Ignis | IGNIS | Not Implemented | `-- Not done`
[storiqa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storiqa.js) | Storiqa | STQ | Dynamic | *+ Done*
[boscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boscoin.js) | BOScoin | BOS | Not Implemented | `-- Not done`
[bluzelle](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bluzelle.js) | Bluzelle | BLZ | Dynamic | *+ Done*
[raiden-network-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/raiden-network-token.js) | Raiden Network Token | RDN | Dynamic | *+ Done*
[thekey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/thekey.js) | THEKEY | TKY | Not Implemented | `-- Not done`
[peercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peercoin.js) | Peercoin | PPC | Dynamic | *+ Done*
[odem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/odem.js) | ODEM | ODE | Dynamic | *+ Done*
[particl](https://github.com/coincheckup/crypto-supplies/blob/master/coins/particl.js) | Particl | PART | Dynamic | *+ Done*
[genaro-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/genaro-network.js) | Genaro Network | GNX | Dynamic | *+ Done*
[tokenpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenpay.js) | TokenPay | TPAY | Not Implemented | `-- Not done`
[nkn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nkn.js) | NKN | NKN | Not Implemented | `-- Not done`
[odyssey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/odyssey.js) | Odyssey | OCN | Dynamic | *+ Done*
[quarkchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quarkchain.js) | QuarkChain | QKC | Dynamic | *+ Done*
[zclassic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zclassic.js) | ZClassic | ZCL | Not Implemented | `-- Not done`
[endor-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/endor-protocol.js) | Endor Protocol | EDR | Dynamic | *+ Done*
[sirin-labs-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sirin-labs-token.js) | SIRIN LABS Token | SRN | Dynamic | *+ Done*
[ubiq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ubiq.js) | Ubiq | UBQ | Not Implemented | `-- Not done`
[sophiatx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sophiatx.js) | SophiaTX | SPHTX | Dynamic | *+ Done*
[blockv](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockv.js) | BLOCKv | VEE | Dynamic | *+ Done*
[nanjcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nanjcoin.js) | NANJCOIN | NANJ | Dynamic | *+ Done*
[iht-real-estate-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iht-real-estate-protocol.js) | IHT Real Estate Protocol | IHT | Dynamic | *+ Done*
[bread](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bread.js) | Bread | BRD | Dynamic | *+ Done*
[poa-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/poa-network.js) | POA Network | POA | Dynamic | *+ Done*
[apex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apex.js) | Apex | CPX | Not Implemented | `-- Not done`
[metal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metal.js) | Metal | MTL | Dynamic | *+ Done*
[safe-exchange-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/safe-exchange-coin.js) | Safe Exchange Coin | SAFEX | Not Implemented | `-- Not done`
[bitcore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcore.js) | Bitcore | BTX | Dynamic | *+ Done*
[primecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primecoin.js) | Primecoin | XPM | Not Implemented | `-- Not done`
[telcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/telcoin.js) | Telcoin | TEL | Dynamic | *+ Done*
[cube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cube.js) | Cube | AUTO | Dynamic | *+ Done*
[bitcny](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcny.js) | bitCNY | BITCNY | Not Implemented | `-- Not done`
[electra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electra.js) | Electra | ECA | Not Implemented | `-- Not done`
[genesis-vision](https://github.com/coincheckup/crypto-supplies/blob/master/coins/genesis-vision.js) | Genesis Vision | GVT | Dynamic | *+ Done*
[poet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/poet.js) | Po.et | POE | Dynamic | *+ Done*
[ink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ink.js) | Ink | INK | Not Implemented | `-- Not done`
[iotex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iotex.js) | IoTeX | IOTX | Dynamic | *+ Done*
[burst](https://github.com/coincheckup/crypto-supplies/blob/master/coins/burst.js) | Burst | BURST | Not Implemented | `-- Not done`
[rock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rock.js) | Rock | RKT | Dynamic | *+ Done*
[edgeless](https://github.com/coincheckup/crypto-supplies/blob/master/coins/edgeless.js) | Edgeless | EDG | Dynamic | *+ Done*
[trade-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trade-token.js) | Trade Token | TIO | Dynamic | *+ Done*
[jibrel-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jibrel-network.js) | Jibrel Network | JNT | Dynamic | *+ Done*
[spankchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spankchain.js) | SpankChain | SPANK | Dynamic | *+ Done*
[republic-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/republic-protocol.js) | Republic Protocol | REN | Dynamic | *+ Done*
[wagerr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wagerr.js) | Wagerr | WGR | Dynamic | *+ Done*
[daex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daex.js) | DAEX | DAX | Not Implemented | `-- Not done`
[gulden](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gulden.js) | Gulden | NLG | Not Implemented | `-- Not done`
[lympo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lympo.js) | Lympo | LYM | Dynamic | *+ Done*
[tokenomy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenomy.js) | Tokenomy | TEN | Dynamic | *+ Done*
[internet-node-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internet-node-token.js) | Internet Node Token | INT | Dynamic | *+ Done*
[linda](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linda.js) | Linda | LINDA | Not Implemented | `-- Not done`
[iot-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iot-chain.js) | IoT Chain | ITC | Dynamic | *+ Done*
[data](https://github.com/coincheckup/crypto-supplies/blob/master/coins/data.js) | DATA | DTA | Dynamic | *+ Done*
[nav-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nav-coin.js) | NavCoin | NAV | Not Implemented | `-- Not done`
[litecoin-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin-cash.js) | Litecoin Cash | LCC | Not Implemented | `-- Not done`
[unobtanium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unobtanium.js) | Unobtanium | UNO | Dynamic | *+ Done*
[origintrail](https://github.com/coincheckup/crypto-supplies/blob/master/coins/origintrail.js) | OriginTrail | TRAC | Dynamic | *+ Done*
[eidoo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eidoo.js) | Eidoo | EDO | Dynamic | *+ Done*
[quantum-resistant-ledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quantum-resistant-ledger.js) | Quantum Resistant Ledger | QRL | Dynamic | *+ Done*
[cryptaur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptaur.js) | Cryptaur | CPT | Not Implemented | `-- Not done`
[eximchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eximchain.js) | Eximchain | EXC | Dynamic | *+ Done*
[bitbay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbay.js) | BitBay | BAY | Dynamic | *+ Done*
[red-pulse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/red-pulse.js) | Red Pulse | RPX | Not Implemented | `-- Not done`
[ravencoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ravencoin.js) | Ravencoin | RVN | Not Implemented | `-- Not done`
[ethlend](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethlend.js) | ETHLend | LEND | Dynamic | *+ Done*
[bitrent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitrent.js) | BitRent | RNTB | Dynamic | *+ Done*
[tokencard](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokencard.js) | TokenCard | TKN | Dynamic | *+ Done*
[delphy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/delphy.js) | Delphy | DPY | Dynamic | *+ Done*
[einsteinium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/einsteinium.js) | Einsteinium | EMC2 | Dynamic | *+ Done*
[prizm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prizm.js) | PRIZM | PZM | Not Implemented | `-- Not done`
[adx-net](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adx-net.js) | AdEx | ADX | Dynamic | *+ Done*
[salus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/salus.js) | SaluS | SLS | Not Implemented | `-- Not done`
[babb](https://github.com/coincheckup/crypto-supplies/blob/master/coins/babb.js) | BABB | BAX | Dynamic | *+ Done*
[presearch](https://github.com/coincheckup/crypto-supplies/blob/master/coins/presearch.js) | Presearch | PRE | Dynamic | *+ Done*
[metaverse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metaverse.js) | Metaverse ETP | ETP | Not Implemented | `-- Not done`
[legolas-exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/legolas-exchange.js) | Legolas Exchange | LGO | Dynamic | *+ Done*
[paypie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paypie.js) | PayPie | PPP | Dynamic | *+ Done*
[datx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datx.js) | DATx | DATX | Dynamic | *+ Done*
[cloakcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cloakcoin.js) | CloakCoin | CLOAK | Not Implemented | `-- Not done`
[singulardtv](https://github.com/coincheckup/crypto-supplies/blob/master/coins/singulardtv.js) | SingularDTV | SNGLS | Not Implemented | `-- Not done`
[viacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/viacoin.js) | Viacoin | VIA | Dynamic | *+ Done*
[apis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apis.js) | APIS | APIS | Dynamic | *+ Done*
[counterparty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/counterparty.js) | Counterparty | XCP | Not Implemented | `-- Not done`
[paccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paccoin.js) | PACcoin | $PAC | Not Implemented | `-- Not done`
[universa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universa.js) | Universa | UTNP | Dynamic | *+ Done*
[gincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gincoin.js) | GINcoin | GIN | Not Implemented | `-- Not done`
[tokenclub](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenclub.js) | TokenClub | TCT | Dynamic | *+ Done*
[tomochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tomochain.js) | TomoChain | TOMO | Dynamic | *+ Done*
[kickico](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kickico.js) | KickCoin | KICK | Dynamic | *+ Done*
[envion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/envion.js) | Envion | EVN | Dynamic | *+ Done*
[zebi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zebi.js) | Zebi | ZCO | Dynamic | *+ Done*
[swftcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swftcoin.js) | SwftCoin | SWFTC | Dynamic | *+ Done*
[ripio-credit-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ripio-credit-network.js) | Ripio Credit Network | RCN | Dynamic | *+ Done*
[cpchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cpchain.js) | CPChain | CPC | Dynamic | *+ Done*
[constellation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/constellation.js) | Constellation | DAG | Not Implemented | `-- Not done`
[feathercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/feathercoin.js) | Feathercoin | FTC | Dynamic | *+ Done*
[whitecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/whitecoin.js) | WhiteCoin | XWC | Not Implemented | `-- Not done`
[utrust](https://github.com/coincheckup/crypto-supplies/blob/master/coins/utrust.js) | UTRUST | UTK | Dynamic | *+ Done*
[hydro-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hydro-protocol.js) | Hydro Protocol | HOT | Dynamic | *+ Done*
[atn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atn.js) | ATN | ATN | Dynamic | *+ Done*
[havven](https://github.com/coincheckup/crypto-supplies/blob/master/coins/havven.js) | Havven | HAV | Dynamic | *+ Done*
[naga](https://github.com/coincheckup/crypto-supplies/blob/master/coins/naga.js) | NAGA | NGC | Dynamic | *+ Done*
[lykke](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lykke.js) | Lykke | LKK | Not Implemented | `-- Not done`
[airswap](https://github.com/coincheckup/crypto-supplies/blob/master/coins/airswap.js) | AirSwap | AST | Dynamic | *+ Done*
[bridgecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bridgecoin.js) | BridgeCoin | BCO | Not Implemented | `-- Not done`
[mobilego](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mobilego.js) | MobileGo | MGO | Dynamic | *+ Done*
[district0x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/district0x.js) | district0x | DNT | Dynamic | *+ Done*
[fuzex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fuzex.js) | FuzeX | FXT | Dynamic | *+ Done*
[wings](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wings.js) | Wings | WINGS | Dynamic | *+ Done*
[namecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/namecoin.js) | Namecoin | NMC | Not Implemented | `-- Not done`
[tierion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tierion.js) | Tierion | TNT | Dynamic | *+ Done*
[zeepin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zeepin.js) | Zeepin | ZPT | Not Implemented | `-- Not done`
[ins-ecosystem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ins-ecosystem.js) | INS Ecosystem | INS | Dynamic | *+ Done*
[aeon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aeon.js) | Aeon | AEON | Not Implemented | `-- Not done`
[ion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ion.js) | ION | ION | Dynamic | *+ Done*
[decision-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decision-token.js) | Decision Token | HST | Dynamic | *+ Done*
[mothership](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mothership.js) | Mothership | MSP | Dynamic | *+ Done*
[melon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/melon.js) | Melon | MLN | Dynamic | *+ Done*
[minexcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/minexcoin.js) | MinexCoin | MNX | Not Implemented | `-- Not done`
[medibloc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medibloc.js) | MediBloc | MED | Not Implemented | `-- Not done`
[library-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/library-credit.js) | LBRY Credits | LBC | Not Implemented | `-- Not done`
[oneroot-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oneroot-network.js) | OneRoot Network | RNT | Dynamic | *+ Done*
[loyalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loyalcoin.js) | LoyalCoin | LYL | Not Implemented | `-- Not done`
[phore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phore.js) | Phore | PHR | Dynamic | *+ Done*
[decent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decent.js) | DECENT | DCT | Not Implemented | `-- Not done`
[modum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/modum.js) | Modum | MOD | Dynamic | *+ Done*
[yoyow](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yoyow.js) | YOYOW | YOYOW | Dynamic | *+ Done*
[datum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datum.js) | Datum | DAT | Dynamic | *+ Done*
[wepower](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wepower.js) | WePower | WPR | Dynamic | *+ Done*
[sentinel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sentinel.js) | Sentinel | SENT | Dynamic | *+ Done*
[experience-points](https://github.com/coincheckup/crypto-supplies/blob/master/coins/experience-points.js) | Experience Points | XP | Not Implemented | `-- Not done`
[steem-dollars](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steem-dollars.js) | Steem Dollars | SBD | Not Implemented | `-- Not done`
[banca](https://github.com/coincheckup/crypto-supplies/blob/master/coins/banca.js) | Banca | BANCA | Dynamic | *+ Done*
[taas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/taas.js) | TaaS | TAAS | Not Implemented | `-- Not done`
[maecenas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maecenas.js) | Maecenas | ART | Dynamic | *+ Done*
[blox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blox.js) | Blox | CDT | Dynamic | *+ Done*
[crowd-machine](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crowd-machine.js) | Crowd Machine | CMCT | Dynamic | *+ Done*
[etherparty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etherparty.js) | Etherparty | FUEL | Dynamic | *+ Done*
[linkeye](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linkeye.js) | LinkEye | LET | Not Implemented | `-- Not done`
[xinfin-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xinfin-network.js) | XinFin Network | XDCE | Dynamic | *+ Done*
[lunyr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lunyr.js) | Lunyr | LUN | Not Implemented | `-- Not done`
[appcoins](https://github.com/coincheckup/crypto-supplies/blob/master/coins/appcoins.js) | AppCoins | APPC | Dynamic | *+ Done*
[selfsell](https://github.com/coincheckup/crypto-supplies/blob/master/coins/selfsell.js) | SelfSell | SSC | Not Implemented | `-- Not done`
[u-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/u-network.js) | U Network | UUU | Dynamic | *+ Done*
[oraclechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oraclechain.js) | OracleChain | OCT | Not Implemented | `-- Not done`
[credo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/credo.js) | Credo | CREDO | Dynamic | *+ Done*
[faircoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/faircoin.js) | FairCoin | FAIR | Not Implemented | `-- Not done`
[coss](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coss.js) | COSS | COSS | Dynamic | *+ Done*
[shift](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shift.js) | Shift | SHIFT | Not Implemented | `-- Not done`
[rialto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rialto.js) | Rialto | XRL | Dynamic | *+ Done*
[cashaa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cashaa.js) | Cashaa | CAS | Dynamic | *+ Done*
[wabi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wabi.js) | WaBi | WABI | Dynamic | *+ Done*
[soarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/soarcoin.js) | Soarcoin | SOAR | Dynamic | *+ Done*
[casinocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/casinocoin.js) | CasinoCoin | CSC | Not Implemented | `-- Not done`
[qlink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qlink.js) | QLINK | QLC | Not Implemented | `-- Not done`
[datawallet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datawallet.js) | Datawallet | DXT | Dynamic | *+ Done*
[yee](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yee.js) | YEE | YEE | Dynamic | *+ Done*
[proxeus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/proxeus.js) | Proxeus | XES | Dynamic | *+ Done*
[bankex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bankex.js) | Bankex | BKX | Dynamic | *+ Done*
[qunqun](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qunqun.js) | QunQun | QUN | Dynamic | *+ Done*
[selfkey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/selfkey.js) | Selfkey | KEY | Dynamic | *+ Done*
[vibe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vibe.js) | VIBE | VIBE | Dynamic | *+ Done*
[mobius](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mobius.js) | Mobius | MOBI | Not Implemented | `-- Not done`
[ac3](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ac3.js) | AC3 | AC3 | Not Implemented | `-- Not done`
[aurora-dao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aurora-dao.js) | Aurora DAO | AURA | Dynamic | *+ Done*
[potcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/potcoin.js) | PotCoin | POT | Dynamic | *+ Done*
[pepe-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pepe-cash.js) | Pepe Cash | PEPECASH | Not Implemented | `-- Not done`
[bitcoin-green](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-green.js) | Bitcoin Green | BITG | Not Implemented | `-- Not done`
[mediccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mediccoin.js) | MedicCoin | MEDIC | Not Implemented | `-- Not done`
[cobinhood](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cobinhood.js) | Cobinhood | COB | Dynamic | *+ Done*
[peepcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peepcoin.js) | PeepCoin | PCN | Dynamic | *+ Done*
[oyster](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oyster.js) | Oyster | PRL | Dynamic | *+ Done*
[bitusd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitusd.js) | bitUSD | BITUSD | Not Implemented | `-- Not done`
[karma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/karma.js) | Karma | KRM | Dynamic | *+ Done*
[dock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dock.js) | Dock | DOCK | Dynamic | *+ Done*
[peerplays-ppy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peerplays-ppy.js) | Peerplays | PPY | Not Implemented | `-- Not done`
[firstblood](https://github.com/coincheckup/crypto-supplies/blob/master/coins/firstblood.js) | FirstBlood | 1ST | Not Implemented | `-- Not done`
[qbao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qbao.js) | Qbao | QBT | Not Implemented | `-- Not done`
[humaniq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/humaniq.js) | Humaniq | HMQ | Dynamic | *+ Done*
[fortuna](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fortuna.js) | Fortuna | FOTA | Dynamic | *+ Done*
[xtrabytes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xtrabytes.js) | XTRABYTES | XBY | Not Implemented | `-- Not done`
[refereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/refereum.js) | Refereum | RFR | Dynamic | *+ Done*
[nolimitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nolimitcoin.js) | NoLimitCoin | NLC2 | Not Implemented | `-- Not done`
[trinity-network-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trinity-network-credit.js) | Trinity Network Credit | TNC | Not Implemented | `-- Not done`
[neurotoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neurotoken.js) | Neurotoken | NTK | Dynamic | *+ Done*
[hempcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hempcoin.js) | HempCoin | THC | Not Implemented | `-- Not done`
[prochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prochain.js) | ProChain | PRA | Dynamic | *+ Done*
[quantum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quantum.js) | Quantum | QAU | Dynamic | *+ Done*
[viberate](https://github.com/coincheckup/crypto-supplies/blob/master/coins/viberate.js) | Viberate | VIB | Dynamic | *+ Done*
[cofound-it](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cofound-it.js) | Cofound.it | CFI | Dynamic | *+ Done*
[brahmaos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/brahmaos.js) | BrahmaOS | BRM | Dynamic | *+ Done*
[elastic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elastic.js) | Elastic | XEL | Not Implemented | `-- Not done`
[covesting](https://github.com/coincheckup/crypto-supplies/blob/master/coins/covesting.js) | Covesting | COV | Dynamic | *+ Done*
[bismuth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bismuth.js) | Bismuth | BIS | Not Implemented | `-- Not done`
[luxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/luxcoin.js) | LUXCoin | LUX | Dynamic | *+ Done*
[chronobank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chronobank.js) | Chronobank | TIME | Not Implemented | `-- Not done`
[leocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leocoin.js) | LEOcoin | LEO | Not Implemented | `-- Not done`
[zeusshield](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zeusshield.js) | Zeusshield | ZSC | Dynamic | *+ Done*
[deeponion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deeponion.js) | DeepOnion | ONION | Not Implemented | `-- Not done`
[synereo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/synereo.js) | Synereo | AMP | Not Implemented | `-- Not done`
[pascal-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pascal-coin.js) | Pascal Coin | PASC | Not Implemented | `-- Not done`
[dimecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dimecoin.js) | Dimecoin | DIME | Dynamic | *+ Done*
[mercury](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mercury.js) | Mercury | MER | Not Implemented | `-- Not done`
[divi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/divi.js) | Divi | DIVX | Dynamic | *+ Done*
[spacechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spacechain.js) | SpaceChain | SPC | Not Implemented | `-- Not done`
[tao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tao.js) | Tao | XTO | Dynamic | *+ Done*
[polybius](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polybius.js) | Polybius | PLBT | Dynamic | *+ Done*
[revolutionvr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/revolutionvr.js) | RevolutionVR | RVR | Not Implemented | `-- Not done`
[olympus-labs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/olympus-labs.js) | Olympus Labs | MOT | Dynamic | *+ Done*
[shivom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shivom.js) | Shivom | OMX | Dynamic | *+ Done*
[alqo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alqo.js) | ALQO | ALQO | Not Implemented | `-- Not done`
[boolberry](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boolberry.js) | Boolberry | BBR | Not Implemented | `-- Not done`
[dimcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dimcoin.js) | DIMCOIN | DIM | Not Implemented | `-- Not done`
[alphacat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alphacat.js) | Alphacat | ACAT | Not Implemented | `-- Not done`
[primas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primas.js) | Primas | PST | Dynamic | *+ Done*
[gridcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gridcoin.js) | GridCoin | GRC | Not Implemented | `-- Not done`
[bodhi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bodhi.js) | Bodhi | BOT | Not Implemented | `-- Not done`
[crown](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crown.js) | Crown | CRW | Dynamic | *+ Done*
[oxycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oxycoin.js) | Oxycoin | OXY | Not Implemented | `-- Not done`
[diamond](https://github.com/coincheckup/crypto-supplies/blob/master/coins/diamond.js) | Diamond | DMD | Dynamic | *+ Done*
[everex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/everex.js) | Everex | EVX | Dynamic | *+ Done*
[suncontract](https://github.com/coincheckup/crypto-supplies/blob/master/coins/suncontract.js) | SunContract | SNC | Dynamic | *+ Done*
[lamden](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lamden.js) | Lamden | TAU | Dynamic | *+ Done*
[betterbetting](https://github.com/coincheckup/crypto-supplies/blob/master/coins/betterbetting.js) | BetterBetting | BETR | Not Implemented | `-- Not done`
[ceek-vr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ceek-vr.js) | CEEK VR | CEEK | Dynamic | *+ Done*
[energo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/energo.js) | Energo | TSL | Not Implemented | `-- Not done`
[uquid-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uquid-coin.js) | Uquid Coin | UQC | Dynamic | *+ Done*
[dadi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dadi.js) | DADI | DADI | Dynamic | *+ Done*
[life](https://github.com/coincheckup/crypto-supplies/blob/master/coins/life.js) | LIFE | LIFE | Dynamic | *+ Done*
[sakura-bloom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sakura-bloom.js) | Sakura Bloom | SKB | Dynamic | *+ Done*
[triggers](https://github.com/coincheckup/crypto-supplies/blob/master/coins/triggers.js) | Triggers | TRIG | Not Implemented | `-- Not done`
[dmarket](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dmarket.js) | DMarket | DMT | Dynamic | *+ Done*
[te-food](https://github.com/coincheckup/crypto-supplies/blob/master/coins/te-food.js) | TE-FOOD | TFD | Dynamic | *+ Done*
[dubaicoin-dbix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dubaicoin-dbix.js) | DubaiCoin | DBIX | Not Implemented | `-- Not done`
[blackcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blackcoin.js) | BlackCoin | BLK | Dynamic | *+ Done*
[neumark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neumark.js) | Neumark | NEU | Dynamic | *+ Done*
[phantasma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phantasma.js) | Phantasma | SOUL | Not Implemented | `-- Not done`
[nework](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nework.js) | Nework | NKC | Not Implemented | `-- Not done`
[latiumx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/latiumx.js) | LatiumX | LATX | Dynamic | *+ Done*
[guppy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guppy.js) | Matchpool | GUP | Not Implemented | `-- Not done`
[latoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/latoken.js) | LATOKEN | LA | Dynamic | *+ Done*
[numeraire](https://github.com/coincheckup/crypto-supplies/blob/master/coins/numeraire.js) | Numeraire | NMR | Dynamic | *+ Done*
[carvertical](https://github.com/coincheckup/crypto-supplies/blob/master/coins/carvertical.js) | carVertical | CV | Dynamic | *+ Done*
[propy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/propy.js) | Propy | PRO | Dynamic | *+ Done*
[radium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/radium.js) | Radium | RADS | Dynamic | *+ Done*
[monetaryunit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monetaryunit.js) | MonetaryUnit | MUE | Dynamic | *+ Done*
[ugchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ugchain.js) | ugChain | UGC | Dynamic | *+ Done*
[aichain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aichain.js) | AICHAIN | AIT | Dynamic | *+ Done*
[stk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stk.js) | STK | STK | Dynamic | *+ Done*
[ormeus-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ormeus-coin.js) | Ormeus Coin | ORME | Dynamic | *+ Done*
[switcheo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/switcheo.js) | Switcheo | SWTH | Not Implemented | `-- Not done`
[stronghands](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stronghands.js) | StrongHands | SHND | Not Implemented | `-- Not done`
[omni](https://github.com/coincheckup/crypto-supplies/blob/master/coins/omni.js) | Omni | OMNI | Not Implemented | `-- Not done`
[everus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/everus.js) | Everus | EVR | Dynamic | *+ Done*
[mooncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mooncoin.js) | Mooncoin | MOON | Dynamic | *+ Done*
[silent-notary](https://github.com/coincheckup/crypto-supplies/blob/master/coins/silent-notary.js) | Silent Notary | SNTR | Dynamic | *+ Done*
[remme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/remme.js) | Remme | REM | Dynamic | *+ Done*
[stox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stox.js) | Stox | STX | Dynamic | *+ Done*
[flash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flash.js) | Flash | FLASH | Not Implemented | `-- Not done`
[solarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/solarcoin.js) | SolarCoin | SLR | Dynamic | *+ Done*
[florincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/florincoin.js) | FlorinCoin | FLO | Not Implemented | `-- Not done`
[blockport](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockport.js) | Blockport | BPT | Dynamic | *+ Done*
[moeda-loyalty-points](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moeda-loyalty-points.js) | Moeda Loyalty Points | MDA | Dynamic | *+ Done*
[smartshare](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartshare.js) | Smartshare | SSP | Not Implemented | `-- Not done`
[adtoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adtoken.js) | adToken | ADT | Dynamic | *+ Done*
[hydrogen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hydrogen.js) | Hydrogen | HYDRO | Dynamic | *+ Done*
[monetha](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monetha.js) | Monetha | MTH | Dynamic | *+ Done*
[rubycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rubycoin.js) | Rubycoin | RBY | Dynamic | *+ Done*
[cappasity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cappasity.js) | Cappasity | CAPP | Dynamic | *+ Done*
[smartlands](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartlands.js) | Smartlands | SLT | Not Implemented | `-- Not done`
[oax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oax.js) | OAX | OAX | Dynamic | *+ Done*
[sureremit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sureremit.js) | SureRemit | RMT | Not Implemented | `-- Not done`
[banyan-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/banyan-network.js) | Banyan Network | BBN | Dynamic | *+ Done*
[etheroll](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etheroll.js) | Etheroll | DICE | Dynamic | *+ Done*
[coinpoker](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinpoker.js) | CoinPoker | CHP | Dynamic | *+ Done*
[bitqy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitqy.js) | bitqy | BQ | Dynamic | *+ Done*
[blocktix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blocktix.js) | Blocktix | TIX | Dynamic | *+ Done*
[aeron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aeron.js) | Aeron | ARN | Dynamic | *+ Done*
[policypal-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/policypal-network.js) | PolicyPal Network | PAL | Dynamic | *+ Done*
[daostack](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daostack.js) | DAOstack | GEN | Dynamic | *+ Done*
[swissborg](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swissborg.js) | SwissBorg | CHSB | Dynamic | *+ Done*
[sentinel-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sentinel-chain.js) | Sentinel Chain | SENC | Dynamic | *+ Done*
[hi-mutual-society](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hi-mutual-society.js) | Hi Mutual Society | HMC | Dynamic | *+ Done*
[exrnchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exrnchain.js) | EXRNchain | EXRN | Dynamic | *+ Done*
[deviantcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deviantcoin.js) | DeviantCoin | DEV | Not Implemented | `-- Not done`
[clams](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clams.js) | Clams | CLAM | Not Implemented | `-- Not done`
[nebula-ai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nebula-ai.js) | Nebula AI | NBAI | Dynamic | *+ Done*
[srcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/srcoin.js) | SRCOIN | SRCOIN | Not Implemented | `-- Not done`
[expanse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/expanse.js) | Expanse | EXP | Not Implemented | `-- Not done`
[iocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iocoin.js) | I/O Coin | IOC | Not Implemented | `-- Not done`
[red](https://github.com/coincheckup/crypto-supplies/blob/master/coins/red.js) | RED | RED | Dynamic | *+ Done*
[hedge](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hedge.js) | Hedge | HDG | Dynamic | *+ Done*
[databits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/databits.js) | Databits | DTB | Not Implemented | `-- Not done`
[patron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/patron.js) | Patron | PAT | Dynamic | *+ Done*
[indahash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/indahash.js) | indaHash | IDH | Dynamic | *+ Done*
[uptoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uptoken.js) | UpToken | UP | Dynamic | *+ Done*
[newyorkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/newyorkcoin.js) | NewYorkCoin | NYC | Not Implemented | `-- Not done`
[pikciochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pikciochain.js) | PikcioChain | PKC | Not Implemented | `-- Not done`
[the-champcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-champcoin.js) | The ChampCoin | TCC | Not Implemented | `-- Not done`
[echolink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/echolink.js) | EchoLink | EKO | Dynamic | *+ Done*
[the-abyss](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-abyss.js) | The Abyss | ABYSS | Dynamic | *+ Done*
[polis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polis.js) | Polis | POLIS | Not Implemented | `-- Not done`
[callisto-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/callisto-network.js) | Callisto Network | CLO | Not Implemented | `-- Not done`
[agrello-delta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/agrello-delta.js) | Agrello | DLT | Dynamic | *+ Done*
[domraider](https://github.com/coincheckup/crypto-supplies/blob/master/coins/domraider.js) | DomRaider | DRT | Dynamic | *+ Done*
[zippie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zippie.js) | Zippie | ZIPT | Not Implemented | `-- Not done`
[measurable-data-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/measurable-data-token.js) | Measurable Data Token | MDT | Not Implemented | `-- Not done`
[hexx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hexx.js) | Hexx | HXX | Not Implemented | `-- Not done`
[cvcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cvcoin.js) | CVCoin | CVCOIN | Not Implemented | `-- Not done`
[hacken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hacken.js) | Hacken | HKN | Dynamic | *+ Done*
[incent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/incent.js) | Incent | INCNT | Not Implemented | `-- Not done`
[rise](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rise.js) | Rise | RISE | Not Implemented | `-- Not done`
[heronode](https://github.com/coincheckup/crypto-supplies/blob/master/coins/heronode.js) | HeroNode | HER | Dynamic | *+ Done*
[peculium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peculium.js) | Peculium | PCL | Dynamic | *+ Done*
[axpire](https://github.com/coincheckup/crypto-supplies/blob/master/coins/axpire.js) | aXpire | AXP | Dynamic | *+ Done*
[bezop](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bezop.js) | Bezop | BEZ | Dynamic | *+ Done*
[get-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/get-protocol.js) | GET Protocol | GET | Dynamic | *+ Done*
[myriad](https://github.com/coincheckup/crypto-supplies/blob/master/coins/myriad.js) | Myriad | XMY | Dynamic | *+ Done*
[rivetz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rivetz.js) | Rivetz | RVT | Dynamic | *+ Done*
[lomocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lomocoin.js) | LoMoCoin | LMC | Not Implemented | `-- Not done`
[hollywoodcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hollywoodcoin.js) | HollyWoodCoin | HWC | Not Implemented | `-- Not done`
[neoscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neoscoin.js) | NeosCoin | NEOS | Dynamic | *+ Done*
[aphelion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aphelion.js) | Aphelion | APH | Not Implemented | `-- Not done`
[unibright](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unibright.js) | Unibright | UBT | Dynamic | *+ Done*
[vericoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vericoin.js) | VeriCoin | VRC | Dynamic | *+ Done*
[kilocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kilocoin.js) | KiloCoin | KLC | Not Implemented | `-- Not done`
[sharex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharex.js) | ShareX | SEXC | Dynamic | *+ Done*
[bulwark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bulwark.js) | Bulwark | BWK | Dynamic | *+ Done*
[icos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icos.js) | ICOS | ICOS | Dynamic | *+ Done*
[sprouts](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sprouts.js) | Sprouts | SPRTS | Dynamic | *+ Done*
[sibcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sibcoin.js) | SIBCoin | SIB | Not Implemented | `-- Not done`
[investfeed](https://github.com/coincheckup/crypto-supplies/blob/master/coins/investfeed.js) | InvestFeed | IFT | Dynamic | *+ Done*
[dynamic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dynamic.js) | Dynamic | DYN | Not Implemented | `-- Not done`
[pirl](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pirl.js) | Pirl | PIRL | Not Implemented | `-- Not done`
[shipchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shipchain.js) | ShipChain | SHIP | Dynamic | *+ Done*
[russian-mining-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/russian-mining-coin.js) | Russian Miner Coin | RMC | Not Implemented | `-- Not done`
[playkey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/playkey.js) | Playkey | PKT | Dynamic | *+ Done*
[paragon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paragon.js) | Paragon | PRG | Dynamic | *+ Done*
[hubii-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hubii-network.js) | Hubii Network | HBT | Dynamic | *+ Done*
[insurepal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insurepal.js) | InsurePal | IPL | Dynamic | *+ Done*
[musicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/musicoin.js) | Musicoin | MUSIC | Not Implemented | `-- Not done`
[bitsend](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsend.js) | BitSend | BSD | Dynamic | *+ Done*
[sharder](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharder.js) | Sharder | SS | Dynamic | *+ Done*
[novacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/novacoin.js) | Novacoin | NVC | Not Implemented | `-- Not done`
[stealthcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stealthcoin.js) | N/A | N/A | N/A | `-- Not done`
[airtoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/airtoken.js) | AirToken | AIR | Dynamic | *+ Done*
[flixxo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flixxo.js) | Flixxo | FLIXX | Dynamic | *+ Done*
[aurumcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aurumcoin.js) | AurumCoin | AU | Not Implemented | `-- Not done`
[xaurum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xaurum.js) | Xaurum | XAUR | Dynamic | *+ Done*
[leverj](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leverj.js) | Leverj | LEV | Dynamic | *+ Done*
[debitum-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/debitum-network.js) | Debitum | DEB | Dynamic | *+ Done*
[loki](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loki.js) | Loki | LOKI | Not Implemented | `-- Not done`
[nexium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexium.js) | Nexium | NXC | Dynamic | *+ Done*
[gobyte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gobyte.js) | GoByte | GBX | Not Implemented | `-- Not done`
[matryx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/matryx.js) | Matryx | MTX | Dynamic | *+ Done*
[digitex-futures](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitex-futures.js) | Digitex Futures | DGTX | Not Implemented | `-- Not done`
[stipend](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stipend.js) | Stipend | SPD | Not Implemented | `-- Not done`
[bitclave](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitclave.js) | BitClave | CAT | Dynamic | *+ Done*
[pareto-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pareto-network.js) | Pareto Network | PARETO | Dynamic | *+ Done*
[okcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/okcash.js) | OKCash | OK | Dynamic | *+ Done*
[ecobit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ecobit.js) | Ecobit | ECOB | Not Implemented | `-- Not done`
[swarm-city](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swarm-city.js) | Swarm City | SWT | Not Implemented | `-- Not done`
[guaranteed-ethurance-token-extra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guaranteed-ethurance-token-extra.js) | Guaranteed Ethurance Token Extra | GETX | Dynamic | *+ Done*
[biocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biocoin.js) | BioCoin | BIO | Not Implemented | `-- Not done`
[polyswarm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polyswarm.js) | PolySwarm | NCT | Dynamic | *+ Done*
[linker-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linker-coin.js) | Linker Coin | LNC | Dynamic | *+ Done*
[aventus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aventus.js) | Aventus | AVT | Dynamic | *+ Done*
[cargox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cargox.js) | CargoX | CXO | Dynamic | *+ Done*
[espers](https://github.com/coincheckup/crypto-supplies/blob/master/coins/espers.js) | Espers | ESP | Not Implemented | `-- Not done`
[graft](https://github.com/coincheckup/crypto-supplies/blob/master/coins/graft.js) | Graft | GRFT | Not Implemented | `-- Not done`
[canyacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/canyacoin.js) | CanYaCoin | CAN | Dynamic | *+ Done*
[foldingcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/foldingcoin.js) | FoldingCoin | FLDC | Not Implemented | `-- Not done`
[apx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apx.js) | APX | APX | Not Implemented | `-- Not done`
[change](https://github.com/coincheckup/crypto-supplies/blob/master/coins/change.js) | Change | CAG | Dynamic | *+ Done*
[pinkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pinkcoin.js) | PinkCoin | PINK | Dynamic | *+ Done*
[heat-ledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/heat-ledger.js) | HEAT | HEAT | Not Implemented | `-- Not done`
[profile-utility-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/profile-utility-token.js) | Profile Utility Token | PUT | Not Implemented | `-- Not done`
[helbiz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/helbiz.js) | Helbiz | HBZ | Dynamic | *+ Done*
[gambit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gambit.js) | Gambit | GAM | Dynamic | *+ Done*
[bitdegree](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitdegree.js) | BitDegree | BDG | Dynamic | *+ Done*
[adbank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adbank.js) | adbank | ADB | Dynamic | *+ Done*
[mintcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mintcoin.js) | Mintcoin | MINT | Not Implemented | `-- Not done`
[zilla](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zilla.js) | Zilla | ZLA | Dynamic | *+ Done*
[patientory](https://github.com/coincheckup/crypto-supplies/blob/master/coins/patientory.js) | Patientory | PTOY | Dynamic | *+ Done*
[zrcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zrcoin.js) | ZrCoin | ZRC | Not Implemented | `-- Not done`
[local-world-forwarders](https://github.com/coincheckup/crypto-supplies/blob/master/coins/local-world-forwarders.js) | Local World Forwarders | LWF | Not Implemented | `-- Not done`
[commerceblock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/commerceblock.js) | CommerceBlock | CBT | Dynamic | *+ Done*
[rentberry](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rentberry.js) | Rentberry | BERRY | Dynamic | *+ Done*
[mktcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mktcoin.js) | MktCoin | MLM | Not Implemented | `-- Not done`
[eroscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eroscoin.js) | Eroscoin | ERO | Dynamic | *+ Done*
[encrypgen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/encrypgen.js) | EncrypGen | DNA | Dynamic | *+ Done*
[asiacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/asiacoin.js) | AsiaCoin | AC | Dynamic | *+ Done*
[dero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dero.js) | Dero | DERO | Not Implemented | `-- Not done`
[zap](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zap.js) | Zap | ZAP | Dynamic | *+ Done*
[golos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golos.js) | Golos | GOLOS | Not Implemented | `-- Not done`
[yocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yocoin.js) | Yocoin | YOC | Not Implemented | `-- Not done`
[lala-world](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lala-world.js) | LALA World | LALA | Dynamic | *+ Done*
[adhive](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adhive.js) | AdHive | ADH | Dynamic | *+ Done*
[ink-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ink-protocol.js) | Ink Protocol | XNK | Dynamic | *+ Done*
[sphere](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sphere.js) | Sphere | SPHR | Not Implemented | `-- Not done`
[sense](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sense.js) | Sense | SENSE | Dynamic | *+ Done*
[aditus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aditus.js) | Aditus | ADI | Dynamic | *+ Done*
[idex-membership](https://github.com/coincheckup/crypto-supplies/blob/master/coins/idex-membership.js) | IDEX Membership | IDXM | Dynamic | *+ Done*
[fluz-fluz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fluz-fluz.js) | Fluz Fluz | FLUZ | Dynamic | *+ Done*
[sequence](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sequence.js) | Sequence | SEQ | Not Implemented | `-- Not done`
[alis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alis.js) | ALIS | ALIS | Dynamic | *+ Done*
[pandacoin-pnd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pandacoin-pnd.js) | Pandacoin | PND | Not Implemented | `-- Not done`
[nimiq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nimiq.js) | Nimiq Exchange Token | NET | Not Implemented | `-- Not done`
[trust](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trust.js) | WeTrust | TRST | Not Implemented | `-- Not done`
[zoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zoin.js) | Zoin | ZOI | Dynamic | *+ Done*
[target-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/target-coin.js) | Target Coin | TGT | Dynamic | *+ Done*
[aidcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aidcoin.js) | AidCoin | AID | Dynamic | *+ Done*
[dotcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dotcoin.js) | Dotcoin | DOT | Dynamic | *+ Done*
[morpheus-labs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/morpheus-labs.js) | Morpheus Labs | MITX | Dynamic | *+ Done*
[solaris](https://github.com/coincheckup/crypto-supplies/blob/master/coins/solaris.js) | Solaris | XLR | Dynamic | *+ Done*
[elixir](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elixir.js) | Elixir | ELIX | Dynamic | *+ Done*
[fidelium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fidelium.js) | Fidelium | FID | Not Implemented | `-- Not done`
[curecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/curecoin.js) | Curecoin | CURE | Dynamic | *+ Done*
[bounty0x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bounty0x.js) | Bounty0x | BNTY | Dynamic | *+ Done*
[dao-casino](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dao-casino.js) | DAO.Casino | BET | Dynamic | *+ Done*
[energycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/energycoin.js) | Energycoin | ENRG | Dynamic | *+ Done*
[bitcrystals](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcrystals.js) | Bitcrystals | BCY | Not Implemented | `-- Not done`
[cfun](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cfun.js) | CFun | CFUN | Not Implemented | `-- Not done`
[colu-local-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/colu-local-network.js) | Colu Local Network | CLN | Dynamic | *+ Done*
[1world](https://github.com/coincheckup/crypto-supplies/blob/master/coins/1world.js) | 1World | 1WO | Dynamic | *+ Done*
[morpheus-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/morpheus-network.js) | Morpheus Network | MORPH | Dynamic | *+ Done*
[dovu](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dovu.js) | Dovu | DOVU | Dynamic | *+ Done*
[leadcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leadcoin.js) | Leadcoin | LDC | Dynamic | *+ Done*
[spectrecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spectrecoin.js) | Spectrecoin | XSPEC | Dynamic | *+ Done*
[adshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adshares.js) | AdShares | ADST | Dynamic | *+ Done*
[mysterium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mysterium.js) | Mysterium | MYST | Dynamic | *+ Done*
[astro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/astro.js) | Astro | ASTRO | Dynamic | *+ Done*
[atbcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atbcoin.js) | ATBCoin | ATB | Not Implemented | `-- Not done`
[coinfi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinfi.js) | CoinFi | COFI | Dynamic | *+ Done*
[primalbase](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primalbase.js) | Primalbase Token | PBT | Not Implemented | `-- Not done`
[auroracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/auroracoin.js) | Auroracoin | AUR | Not Implemented | `-- Not done`
[real](https://github.com/coincheckup/crypto-supplies/blob/master/coins/real.js) | REAL | REAL | Dynamic | *+ Done*
[privatix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/privatix.js) | Privatix | PRIX | Dynamic | *+ Done*
[toacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/toacoin.js) | ToaCoin | TOA | Dynamic | *+ Done*
[faceter](https://github.com/coincheckup/crypto-supplies/blob/master/coins/faceter.js) | Faceter | FACE | Dynamic | *+ Done*
[pluton](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pluton.js) | Pluton | PLU | Not Implemented | `-- Not done`
[sether](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sether.js) | Sether | SETH | Dynamic | *+ Done*
[trueflip](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trueflip.js) | TrueFlip | TFL | Dynamic | *+ Done*
[devery](https://github.com/coincheckup/crypto-supplies/blob/master/coins/devery.js) | Devery | EVE | Dynamic | *+ Done*
[goldcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldcoin.js) | GoldCoin | GLD | Dynamic | *+ Done*
[circuits-of-value](https://github.com/coincheckup/crypto-supplies/blob/master/coins/circuits-of-value.js) | Circuits of Value | COVAL | Not Implemented | `-- Not done`
[hurify](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hurify.js) | Hurify | HUR | Dynamic | *+ Done*
[eztoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eztoken.js) | EZToken | EZT | Dynamic | *+ Done*
[maxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maxcoin.js) | MaxCoin | MAX | Dynamic | *+ Done*
[atmos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atmos.js) | Atmos | ATMOS | Dynamic | *+ Done*
[bitdice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitdice.js) | BitDice | CSNO | Dynamic | *+ Done*
[clearpoll](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clearpoll.js) | ClearPoll | POLL | Dynamic | *+ Done*
[nper](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nper.js) | NPER | NPER | Not Implemented | `-- Not done`
[snovio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/snovio.js) | Snovio | SNOV | Dynamic | *+ Done*
[travala](https://github.com/coincheckup/crypto-supplies/blob/master/coins/travala.js) | Travala | AVA | Not Implemented | `-- Not done`
[bee-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bee-token.js) | Bee Token | BEE | Dynamic | *+ Done*
[korecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/korecoin.js) | Kore | KORE | Not Implemented | `-- Not done`
[vice-industry-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vice-industry-token.js) | Vice Industry Token | VIT | Dynamic | *+ Done*
[apr-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apr-coin.js) | APR Coin | APR | Not Implemented | `-- Not done`
[ip-exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ip-exchange.js) | IP Exchange | IPSX | Dynamic | *+ Done*
[transfercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/transfercoin.js) | TransferCoin | TX | Dynamic | *+ Done*
[bitcoinz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoinz.js) | BitcoinZ | BTCZ | Not Implemented | `-- Not done`
[travelflex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/travelflex.js) | Travelflex | TRF | Not Implemented | `-- Not done`
[fedoracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fedoracoin.js) | FedoraCoin | TIPS | Not Implemented | `-- Not done`
[block-array](https://github.com/coincheckup/crypto-supplies/blob/master/coins/block-array.js) | Block Array | ARY | Dynamic | *+ Done*
[worldcore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/worldcore.js) | Worldcore | WRC | Dynamic | *+ Done*
[mybit-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mybit-token.js) | MyBit Token | MYB | Dynamic | *+ Done*
[hoqu](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hoqu.js) | HOQU | HQX | Dynamic | *+ Done*
[obits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/obits.js) | OBITS | OBITS | Not Implemented | `-- Not done`
[chips](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chips.js) | CHIPS | CHIPS | Not Implemented | `-- Not done`
[gladius-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gladius-token.js) | Gladius Token | GLA | Dynamic | *+ Done*
[atlant](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atlant.js) | ATLANT | ATL | Dynamic | *+ Done*
[ethorse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethorse.js) | Ethorse | HORSE | Dynamic | *+ Done*
[internxt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internxt.js) | Internxt | INXT | Dynamic | *+ Done*
[syndicate](https://github.com/coincheckup/crypto-supplies/blob/master/coins/syndicate.js) | Syndicate | SYNX | Not Implemented | `-- Not done`
[breakout-stake](https://github.com/coincheckup/crypto-supplies/blob/master/coins/breakout-stake.js) | Breakout Stake | BRX | Not Implemented | `-- Not done`
[goodomy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goodomy.js) | Goodomy | GOOD | Dynamic | *+ Done*
[bitcoin-plus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-plus.js) | Bitcoin Plus | XBC | Not Implemented | `-- Not done`
[verime](https://github.com/coincheckup/crypto-supplies/blob/master/coins/verime.js) | VeriME | VME | Dynamic | *+ Done*
[open-trading-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/open-trading-network.js) | Open Trading Network | OTN | Dynamic | *+ Done*
[dether](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dether.js) | Dether | DTH | Dynamic | *+ Done*
[pesetacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pesetacoin.js) | Pesetacoin | PTC | Dynamic | *+ Done*
[fundrequest](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fundrequest.js) | FundRequest | FND | Dynamic | *+ Done*
[b3coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/b3coin.js) | B3Coin | KB3 | Dynamic | *+ Done*
[payfair](https://github.com/coincheckup/crypto-supplies/blob/master/coins/payfair.js) | Payfair | PFR | Dynamic | *+ Done*
[internet-of-people](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internet-of-people.js) | Internet of People | IOP | Not Implemented | `-- Not done`
[ixcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ixcoin.js) | Ixcoin | IXC | Dynamic | *+ Done*
[2give](https://github.com/coincheckup/crypto-supplies/blob/master/coins/2give.js) | 2GIVE | 2GIVE | Dynamic | *+ Done*
[sumokoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sumokoin.js) | Sumokoin | SUMO | Not Implemented | `-- Not done`
[cryptopay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptopay.js) | Cryptopay | CPAY | Dynamic | *+ Done*
[insights-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insights-network.js) | Insights Network | INSTAR | Dynamic | *+ Done*
[oyster-shell](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oyster-shell.js) | Oyster Shell | SHL | Dynamic | *+ Done*
[auctus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/auctus.js) | Auctus | AUC | Dynamic | *+ Done*
[fidentiax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fidentiax.js) | FidentiaX | FDX | Dynamic | *+ Done*
[geocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/geocoin.js) | GeoCoin | GEO | Dynamic | *+ Done*
[global-cryptocurrency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-cryptocurrency.js) | Global Cryptocurrency | GCC | Not Implemented | `-- Not done`
[nubits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nubits.js) | NuBits | USNBT | Not Implemented | `-- Not done`
[herocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/herocoin.js) | HEROcoin | PLAY | Dynamic | *+ Done*
[hackspace-capital](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hackspace-capital.js) | Hackspace Capital | HAC | Dynamic | *+ Done*
[hyperstake](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hyperstake.js) | HyperStake | HYP | Not Implemented | `-- Not done`
[posw-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/posw-coin.js) | PoSW Coin | POSW | Not Implemented | `-- Not done`
[education-ecosystem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/education-ecosystem.js) | Education Ecosystem | LEDU | Dynamic | *+ Done*
[ethereum-blue](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-blue.js) | Blue Protocol | BLUE | Dynamic | *+ Done*
[monkey-project](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monkey-project.js) | Monkey Project | MONK | Not Implemented | `-- Not done`
[jet8](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jet8.js) | JET8 | J8T | Dynamic | *+ Done*
[haven-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/haven-protocol.js) | Haven Protocol | XHV | Not Implemented | `-- Not done`
[experty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/experty.js) | Experty | EXY | Dynamic | *+ Done*
[starbase](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starbase.js) | Starbase | STAR | Dynamic | *+ Done*
[sharpe-platform-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharpe-platform-token.js) | Sharpe Platform Token | SHP | Dynamic | *+ Done*
[waves-community-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/waves-community-token.js) | Waves Community Token | WCT | Not Implemented | `-- Not done`
[universal-currency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universal-currency.js) | Universal Currency | UNIT | Not Implemented | `-- Not done`
[hellogold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hellogold.js) | HelloGold | HGT | Dynamic | *+ Done*
[opus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/opus.js) | Opus | OPT | Dynamic | *+ Done*
[neutron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neutron.js) | Neutron | NTRN | Not Implemented | `-- Not done`
[bigbom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bigbom.js) | Bigbom | BBO | Dynamic | *+ Done*
[europecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/europecoin.js) | EuropeCoin | ERC | Dynamic | *+ Done*
[buzzcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/buzzcoin.js) | BuzzCoin | BUZZ | Not Implemented | `-- Not done`
[social-send](https://github.com/coincheckup/crypto-supplies/blob/master/coins/social-send.js) | Social Send | SEND | Not Implemented | `-- Not done`
[upfiring](https://github.com/coincheckup/crypto-supplies/blob/master/coins/upfiring.js) | Upfiring | UFR | Dynamic | *+ Done*
[bitstation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitstation.js) | BitStation | BSTN | Dynamic | *+ Done*
[mercury-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mercury-protocol.js) | Mercury Protocol | GMT | Dynamic | *+ Done*
[veriumreserve](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veriumreserve.js) | VeriumReserve | VRM | Not Implemented | `-- Not done`
[pure](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pure.js) | Pure | PURE | Not Implemented | `-- Not done`
[masari](https://github.com/coincheckup/crypto-supplies/blob/master/coins/masari.js) | Masari | MSR | Not Implemented | `-- Not done`
[qwark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qwark.js) | Qwark | QWARK | Not Implemented | `-- Not done`
[zeitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zeitcoin.js) | Zeitcoin | ZEIT | Dynamic | *+ Done*
[starta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starta.js) | Starta | STA | Not Implemented | `-- Not done`
[riecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/riecoin.js) | Riecoin | RIC | Dynamic | *+ Done*
[invacio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/invacio.js) | Invacio | INV | Dynamic | *+ Done*
[vslice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vslice.js) | vSlice | VSL | Dynamic | *+ Done*
[fintrux-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fintrux-network.js) | FintruX Network | FTX | Dynamic | *+ Done*
[tokia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokia.js) | Tokia | TKA | Dynamic | *+ Done*
[publica](https://github.com/coincheckup/crypto-supplies/blob/master/coins/publica.js) | Publica | PBL | Dynamic | *+ Done*
[hicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hicoin.js) | HiCoin | XHI | Not Implemented | `-- Not done`
[dopecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dopecoin.js) | DopeCoin | DOPE | Dynamic | *+ Done*
[tokes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokes.js) | Tokes | TKS | Not Implemented | `-- Not done`
[indorse-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/indorse-token.js) | Indorse Token | IND | Dynamic | *+ Done*
[e-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/e-coin.js) | E-coin | ECN | Not Implemented | `-- Not done`
[capricoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/capricoin.js) | Capricoin | CPC | Dynamic | *+ Done*
[exclusivecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exclusivecoin.js) | ExclusiveCoin | EXCL | Not Implemented | `-- Not done`
[reftoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/reftoken.js) | RefToken | REF | Not Implemented | `-- Not done`
[bonpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bonpay.js) | Bonpay | BON | Dynamic | *+ Done*
[cryptoping](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoping.js) | CryptoPing | PING | Not Implemented | `-- Not done`
[gatcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gatcoin.js) | Gatcoin | GAT | Dynamic | *+ Done*
[bitcloud](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcloud.js) | Bitcloud | BTDX | Dynamic | *+ Done*
[altcoin-alt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/altcoin-alt.js) | Altcoin | ALT | Not Implemented | `-- Not done`
[interstellar-holdings](https://github.com/coincheckup/crypto-supplies/blob/master/coins/interstellar-holdings.js) | Interstellar Holdings | HOLD | Not Implemented | `-- Not done`
[mywish](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mywish.js) | MyWish | WISH | Dynamic | *+ Done*
[belugapay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/belugapay.js) | BelugaPay | BBI | Dynamic | *+ Done*
[karbo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/karbo.js) | Karbo | KRB | Not Implemented | `-- Not done`
[memetic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/memetic.js) | Memetic / PepeCoin | MEME | Not Implemented | `-- Not done`
[terracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/terracoin.js) | Terracoin | TRC | Not Implemented | `-- Not done`
[bitmark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitmark.js) | Bitmark | BTM | Dynamic | *+ Done*
[quark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quark.js) | Quark | QRK | Dynamic | *+ Done*
[bluecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bluecoin.js) | BlueCoin | BLU | Not Implemented | `-- Not done`
[blockpool](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockpool.js) | Blockpool | BPL | Not Implemented | `-- Not done`
[crave](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crave.js) | Crave | CRAVE | Not Implemented | `-- Not done`
[i0coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/i0coin.js) | I0Coin | I0C | Dynamic | *+ Done*
[iungo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iungo.js) | Iungo | ING | Dynamic | *+ Done*
[bunnycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bunnycoin.js) | BunnyCoin | BUN | Not Implemented | `-- Not done`
[blockcat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockcat.js) | BlockCAT | CAT | Dynamic | *+ Done*
[bullion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bullion.js) | Bullion | CBX | Dynamic | *+ Done*
[cannabiscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cannabiscoin.js) | CannabisCoin | CANN | Dynamic | *+ Done*
[digipulse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digipulse.js) | DigiPulse | DGPT | Dynamic | *+ Done*
[viuly](https://github.com/coincheckup/crypto-supplies/blob/master/coins/viuly.js) | Viuly | VIU | Dynamic | *+ Done*
[breakout](https://github.com/coincheckup/crypto-supplies/blob/master/coins/breakout.js) | Breakout | BRK | Not Implemented | `-- Not done`
[campuscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/campuscoin.js) | CampusCoin | CMPCO | Not Implemented | `-- Not done`
[maverick-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maverick-chain.js) | Maverick Chain | MVC | Dynamic | *+ Done*
[ethbits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethbits.js) | Ethbits | ETBS | Dynamic | *+ Done*
[vtorrent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vtorrent.js) | vTorrent | VTR | Not Implemented | `-- Not done`
[parkgene](https://github.com/coincheckup/crypto-supplies/blob/master/coins/parkgene.js) | Parkgene | GENE | Dynamic | *+ Done*
[galactrum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/galactrum.js) | Galactrum | ORE | Not Implemented | `-- Not done`
[lampix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lampix.js) | Lampix | PIX | Dynamic | *+ Done*
[force](https://github.com/coincheckup/crypto-supplies/blob/master/coins/force.js) | FORCE | FOR | Not Implemented | `-- Not done`
[flypme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flypme.js) | FlypMe | FYP | Dynamic | *+ Done*
[sexcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sexcoin.js) | Sexcoin | SXC | Dynamic | *+ Done*
[copytrack](https://github.com/coincheckup/crypto-supplies/blob/master/coins/copytrack.js) | COPYTRACK | CPY | Dynamic | *+ Done*
[sharechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharechain.js) | Sharechain | SSS | Dynamic | *+ Done*
[anoncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/anoncoin.js) | Anoncoin | ANC | Dynamic | *+ Done*
[vezt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vezt.js) | Vezt | VZT | Dynamic | *+ Done*
[flik](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flik.js) | FLiK | FLIK | Dynamic | *+ Done*
[xgox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xgox.js) | XGOX | XGOX | Not Implemented | `-- Not done`
[fantomcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fantomcoin.js) | Fantomcoin | FCN | Not Implemented | `-- Not done`
[chainium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chainium.js) | Chainium | CHX | Dynamic | *+ Done*
[naviaddress](https://github.com/coincheckup/crypto-supplies/blob/master/coins/naviaddress.js) | Naviaddress | NAVI | Not Implemented | `-- Not done`
[tokenbox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenbox.js) | Tokenbox | TBX | Dynamic | *+ Done*
[startercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/startercoin.js) | StarterCoin | STAC | Dynamic | *+ Done*
[magiccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magiccoin.js) | MagicCoin | MAGE | Not Implemented | `-- Not done`
[phi-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phi-token.js) | PHI Token | PHI | Not Implemented | `-- Not done`
[coinlancer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinlancer.js) | Coinlancer | CL | Dynamic | *+ Done*
[litedoge](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litedoge.js) | LiteDoge | LDOGE | Not Implemented | `-- Not done`
[eventchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eventchain.js) | EventChain | EVC | Dynamic | *+ Done*
[daneel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daneel.js) | Daneel | DAN | Dynamic | *+ Done*
[autonio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/autonio.js) | Autonio | NIO | Dynamic | *+ Done*
[nullex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nullex.js) | Nullex | NLX | Not Implemented | `-- Not done`
[evergreencoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/evergreencoin.js) | EverGreenCoin | EGC | Dynamic | *+ Done*
[zephyr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zephyr.js) | Zephyr | ZEPH | Not Implemented | `-- Not done`
[audiocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/audiocoin.js) | AudioCoin | ADC | Dynamic | *+ Done*
[teslacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/teslacoin.js) | TeslaCoin | TES | Dynamic | *+ Done*
[trakinvest](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trakinvest.js) | TrakInvest | TRAK | Not Implemented | `-- Not done`
[monster-byte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monster-byte.js) | Monster Byte | MBI | Not Implemented | `-- Not done`
[xenon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xenon.js) | Xenon | XNN | Dynamic | *+ Done*
[verify](https://github.com/coincheckup/crypto-supplies/blob/master/coins/verify.js) | Verify | CRED | Dynamic | *+ Done*
[commodity-ad-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/commodity-ad-network.js) | Commodity Ad Network | CDX | Dynamic | *+ Done*
[aigang](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aigang.js) | Aigang | AIX | Dynamic | *+ Done*
[syncfab](https://github.com/coincheckup/crypto-supplies/blob/master/coins/syncfab.js) | SyncFab | MFG | Dynamic | *+ Done*
[sugar-exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sugar-exchange.js) | Sugar Exchange | SGR | Dynamic | *+ Done*
[pylon-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pylon-network.js) | Pylon Network | PYLNT | Dynamic | *+ Done*
[chaincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chaincoin.js) | ChainCoin | CHC | Not Implemented | `-- Not done`
[tracto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tracto.js) | Tracto | TRCT | Dynamic | *+ Done*
[wearesatoshi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wearesatoshi.js) | WeAreSatoshi | WSX | Dynamic | *+ Done*
[boutspro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boutspro.js) | BoutsPro | BOUTS | Not Implemented | `-- Not done`
[kobocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kobocoin.js) | Kobocoin | KOBO | Dynamic | *+ Done*
[russiacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/russiacoin.js) | RussiaCoin | RC | Not Implemented | `-- Not done`
[ergo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ergo.js) | Ergo | EFYT | Not Implemented | `-- Not done`
[digitalprice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitalprice.js) | DigitalPrice | DP | Not Implemented | `-- Not done`
[fantasygold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fantasygold.js) | FantasyGold | FGC | Not Implemented | `-- Not done`
[hirematch](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hirematch.js) | HireMatch | HIRE | Not Implemented | `-- Not done`
[ignition](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ignition.js) | Ignition | IC | Dynamic | *+ Done*
[dix-asset](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dix-asset.js) | Dix Asset | DIX | Not Implemented | `-- Not done`
[darcrus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/darcrus.js) | Darcrus | DAR | Not Implemented | `-- Not done`
[condensate](https://github.com/coincheckup/crypto-supplies/blob/master/coins/condensate.js) | Condensate | RAIN | Not Implemented | `-- Not done`
[creativecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/creativecoin.js) | Creativecoin | CREA | Dynamic | *+ Done*
[huntercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/huntercoin.js) | HunterCoin | HUC | Not Implemented | `-- Not done`
[op-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/op-coin.js) | OP Coin | OPC | Not Implemented | `-- Not done`
[noblecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/noblecoin.js) | NobleCoin | NOBL | Dynamic | *+ Done*
[bitwhite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitwhite.js) | BitWhite | BTW | Not Implemented | `-- Not done`
[trustplus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trustplus.js) | TrustPlus | TRUST | Dynamic | *+ Done*
[magi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magi.js) | Magi | XMG | Dynamic | *+ Done*
[stellite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stellite.js) | Stellite | XTL | Not Implemented | `-- Not done`
[biblepay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biblepay.js) | BiblePay | BBP | Not Implemented | `-- Not done`
[version](https://github.com/coincheckup/crypto-supplies/blob/master/coins/version.js) | Version | V | Not Implemented | `-- Not done`
[e-gulden](https://github.com/coincheckup/crypto-supplies/blob/master/coins/e-gulden.js) | e-Gulden | EFL | Dynamic | *+ Done*
[encryptotel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/encryptotel.js) | EncryptoTel [WAVES] | ETT | Not Implemented | `-- Not done`
[bitswift](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitswift.js) | Bitswift | SWIFT | Dynamic | *+ Done*
[tokenstars](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenstars.js) | TokenStars | TEAM | Dynamic | *+ Done*
[ace](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ace.js) | Ace | ACE | Dynamic | *+ Done*
[creditbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/creditbit.js) | Creditbit | CRB | Dynamic | *+ Done*
[zero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zero.js) | Zero | ZER | Not Implemented | `-- Not done`
[obsidian](https://github.com/coincheckup/crypto-supplies/blob/master/coins/obsidian.js) | Obsidian | ODN | Not Implemented | `-- Not done`
[goldmint](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldmint.js) | GoldMint | MNTP | Dynamic | *+ Done*
[trezarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trezarcoin.js) | TrezarCoin | TZC | Dynamic | *+ Done*
[micromoney](https://github.com/coincheckup/crypto-supplies/blob/master/coins/micromoney.js) | MicroMoney | AMM | Dynamic | *+ Done*
[crycash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crycash.js) | CryCash | CRC | Dynamic | *+ Done*
[jesus-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jesus-coin.js) | Jesus Coin | JC | Dynamic | *+ Done*
[straks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/straks.js) | STRAKS | STAK | Not Implemented | `-- Not done`
[nushares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nushares.js) | NuShares | NSR | Not Implemented | `-- Not done`
[blitzpredict](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blitzpredict.js) | BlitzPredict | XBP | Dynamic | *+ Done*
[intensecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intensecoin.js) | IntenseCoin | ITNS | Not Implemented | `-- Not done`
[putincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/putincoin.js) | PutinCoin | PUT | Dynamic | *+ Done*
[biotron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biotron.js) | Biotron | BTRN | Dynamic | *+ Done*
[jiyo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jiyo.js) | Jiyo | JIYO | Not Implemented | `-- Not done`
[firstcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/firstcoin.js) | FirstCoin | FRST | Not Implemented | `-- Not done`
[fabric-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fabric-token.js) | Fabric Token | FT | Dynamic | *+ Done*
[adzcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adzcoin.js) | Adzcoin | ADZ | Not Implemented | `-- Not done`
[bytecent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bytecent.js) | Bytecent | BYC | Dynamic | *+ Done*
[magnet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magnet.js) | Magnet | MAG | Not Implemented | `-- Not done`
[skincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skincoin.js) | SkinCoin | SKIN | Dynamic | *+ Done*
[argentum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/argentum.js) | Argentum | ARG | Dynamic | *+ Done*
[digitalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitalcoin.js) | Digitalcoin | DGC | Dynamic | *+ Done*
[photon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/photon.js) | Photon | PHO | Dynamic | *+ Done*
[incakoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/incakoin.js) | IncaKoin | NKA | Not Implemented | `-- Not done`
[carboncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/carboncoin.js) | Carboncoin | CARBON | Dynamic | *+ Done*
[42-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/42-coin.js) | 42-coin | 42 | Dynamic | *+ Done*
[vivo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vivo.js) | VIVO | VIVO | Dynamic | *+ Done*
[live-stars](https://github.com/coincheckup/crypto-supplies/blob/master/coins/live-stars.js) | Live Stars | LIVE | Dynamic | *+ Done*
[ethersportz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethersportz.js) | EtherSportz | ESZ | Not Implemented | `-- Not done`
[renos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/renos.js) | Renos | RNS | Not Implemented | `-- Not done`
[smileycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smileycoin.js) | SmileyCoin | SMLY | Dynamic | *+ Done*
[blocklancer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blocklancer.js) | Blocklancer | LNC | Dynamic | *+ Done*
[ethereum-movie-venture](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-movie-venture.js) | Ethereum Movie Venture | EMV | Dynamic | *+ Done*
[speed-mining-service](https://github.com/coincheckup/crypto-supplies/blob/master/coins/speed-mining-service.js) | Speed Mining Service | SMS | Dynamic | *+ Done*
[sovereign-hero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sovereign-hero.js) | Sovereign Hero | HERO | Not Implemented | `-- Not done`
[platinumbar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/platinumbar.js) | PlatinumBAR | XPTX | Not Implemented | `-- Not done`
[canada-ecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/canada-ecoin.js) | Canada eCoin | CDN | Not Implemented | `-- Not done`
[808coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/808coin.js) | 808Coin | 808 | Not Implemented | `-- Not done`
[vulcano](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vulcano.js) | Vulcano | VULC | Not Implemented | `-- Not done`
[wandx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wandx.js) | WandX | WAND | Dynamic | *+ Done*
[soma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/soma.js) | Soma | SCT | Dynamic | *+ Done*
[shekel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shekel.js) | Shekel | JEW | Not Implemented | `-- Not done`
[kekcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kekcoin.js) | KekCoin | KEK | Not Implemented | `-- Not done`
[signals-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/signals-network.js) | Signals Network | SGN | Dynamic | *+ Done*
[the-cypherfunks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-cypherfunks.js) | The Cypherfunks | FUNK | Not Implemented | `-- Not done`
[orbitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/orbitcoin.js) | Orbitcoin | ORB | Not Implemented | `-- Not done`
[tidex-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tidex-token.js) | Tidex Token | TDX | Not Implemented | `-- Not done`
[connectjob](https://github.com/coincheckup/crypto-supplies/blob/master/coins/connectjob.js) | ConnectJob | CJT | Dynamic | *+ Done*
[machinecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/machinecoin.js) | Machinecoin | MAC | Dynamic | *+ Done*
[datarius-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datarius-credit.js) | Datarius Credit | DTRC | Dynamic | *+ Done*
[neverdie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neverdie.js) | NEVERDIE | NDC | Dynamic | *+ Done*
[ellaism](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ellaism.js) | Ellaism | ELLA | Not Implemented | `-- Not done`
[megacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/megacoin.js) | Megacoin | MEC | Dynamic | *+ Done*
[emphy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/emphy.js) | Emphy | EPY | Dynamic | *+ Done*
[amon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/amon.js) | Amon | AMN | Dynamic | *+ Done*
[chronologic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chronologic.js) | Chronologic | DAY | Dynamic | *+ Done*
[tokendesk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokendesk.js) | TokenDesk | TDS | Dynamic | *+ Done*
[unbreakablecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unbreakablecoin.js) | UnbreakableCoin | UNB | Not Implemented | `-- Not done`
[farad](https://github.com/coincheckup/crypto-supplies/blob/master/coins/farad.js) | Farad | FRD | Dynamic | *+ Done*
[authorship](https://github.com/coincheckup/crypto-supplies/blob/master/coins/authorship.js) | Authorship | ATS | Dynamic | *+ Done*
[universe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universe.js) | Universe | UNI | Dynamic | *+ Done*
[masternodecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/masternodecoin.js) | Masternodecoin | MTNC | Not Implemented | `-- Not done`
[fundyourselfnow](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fundyourselfnow.js) | FundYourselfNow | FYN | Dynamic | *+ Done*
[unitus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unitus.js) | Unitus | UIS | Not Implemented | `-- Not done`
[draftcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/draftcoin.js) | DraftCoin | DFT | Not Implemented | `-- Not done`
[tigereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tigereum.js) | Tigereum | TIG | Dynamic | *+ Done*
[worldcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/worldcoin.js) | WorldCoin | WDC | Not Implemented | `-- Not done`
[deutsche-emark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deutsche-emark.js) | Deutsche eMark | DEM | Not Implemented | `-- Not done`
[origami](https://github.com/coincheckup/crypto-supplies/blob/master/coins/origami.js) | Origami | ORI | Dynamic | *+ Done*
[popularcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/popularcoin.js) | PopularCoin | POP | Not Implemented | `-- Not done`
[nitro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nitro.js) | Nitro | NOX | Dynamic | *+ Done*
[earth-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/earth-token.js) | Earth Token | EARTH | Dynamic | *+ Done*
[bowhead](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bowhead.js) | Bowhead | AHT | Not Implemented | `-- Not done`
[zennies](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zennies.js) | Zennies | ZENI | Not Implemented | `-- Not done`
[innova](https://github.com/coincheckup/crypto-supplies/blob/master/coins/innova.js) | Innova | INN | Not Implemented | `-- Not done`
[musiconomi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/musiconomi.js) | Musiconomi | MCI | Dynamic | *+ Done*
[drp-utility](https://github.com/coincheckup/crypto-supplies/blob/master/coins/drp-utility.js) | DRP Utility | DRPU | Dynamic | *+ Done*
[sagacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sagacoin.js) | SagaCoin | SAGA | Not Implemented | `-- Not done`
[onix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/onix.js) | Onix | ONX | Not Implemented | `-- Not done`
[etheriya](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etheriya.js) | Etheriya | RIYA | Dynamic | *+ Done*
[inpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/inpay.js) | InPay | INPAY | Not Implemented | `-- Not done`
[embers](https://github.com/coincheckup/crypto-supplies/blob/master/coins/embers.js) | Embers | MBRS | Dynamic | *+ Done*
[zetacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zetacoin.js) | Zetacoin | ZET | Dynamic | *+ Done*
[martexcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/martexcoin.js) | MarteXcoin | MXT | Not Implemented | `-- Not done`
[linx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linx.js) | Linx | LINX | Dynamic | *+ Done*
[unify](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unify.js) | Unify | UNIFY | Not Implemented | `-- Not done`
[numus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/numus.js) | Numus | NMS | Not Implemented | `-- Not done`
[more-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/more-coin.js) | More Coin | MORE | Not Implemented | `-- Not done`
[mazacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mazacoin.js) | MAZA | MZC | Not Implemented | `-- Not done`
[arcticcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arcticcoin.js) | Advanced Technology Coin | ARC | Not Implemented | `-- Not done`
[qvolta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qvolta.js) | Qvolta | QVT | Dynamic | *+ Done*
[fantasy-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fantasy-cash.js) | Fantasy Cash | FANS | Not Implemented | `-- Not done`
[plancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/plancoin.js) | Plancoin | PLAN | Not Implemented | `-- Not done`
[transcodium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/transcodium.js) | Transcodium | TNS | Dynamic | *+ Done*
[unicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unicoin.js) | UniCoin | UNIC | Not Implemented | `-- Not done`
[suretly](https://github.com/coincheckup/crypto-supplies/blob/master/coins/suretly.js) | Suretly | SUR | Dynamic | *+ Done*
[kolion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kolion.js) | Kolion | KLN | Not Implemented | `-- Not done`
[inflationcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/inflationcoin.js) | InflationCoin | IFLT | Not Implemented | `-- Not done`
[starcredits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starcredits.js) | StarCredits | STRC | Dynamic | *+ Done*
[mcap](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mcap.js) | MCAP | MCAP | Dynamic | *+ Done*
[bitzeny](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitzeny.js) | Bitzeny | ZNY | Not Implemented | `-- Not done`
[cryptonite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptonite.js) | Cryptonite | XCN | Not Implemented | `-- Not done`
[dinastycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dinastycoin.js) | Dinastycoin | DCY | Not Implemented | `-- Not done`
[equitrader](https://github.com/coincheckup/crypto-supplies/blob/master/coins/equitrader.js) | EquiTrader | EQT | Dynamic | *+ Done*
[bata](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bata.js) | Bata | BTA | Dynamic | *+ Done*
[metalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metalcoin.js) | MetalCoin | METAL | Not Implemented | `-- Not done`
[hobonickels](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hobonickels.js) | HoboNickels | HBN | Dynamic | *+ Done*
[bitradio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitradio.js) | Bitradio | BRO | Dynamic | *+ Done*
[woodcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/woodcoin.js) | Woodcoin | LOG | Not Implemented | `-- Not done`
[petrodollar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/petrodollar.js) | PetroDollar | XPD | Not Implemented | `-- Not done`
[netcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/netcoin.js) | NetCoin | NET | Not Implemented | `-- Not done`
[fluttercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fluttercoin.js) | FlutterCoin | FLT | Not Implemented | `-- Not done`
[fujicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fujicoin.js) | FujiCoin | FJC | Not Implemented | `-- Not done`
[bitdeal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitdeal.js) | Bitdeal | BDL | Not Implemented | `-- Not done`
[moin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moin.js) | Moin | MOIN | Not Implemented | `-- Not done`
[happycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/happycoin.js) | Happycoin | HPC | Not Implemented | `-- Not done`
[fastcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fastcoin.js) | Fastcoin | FST | Not Implemented | `-- Not done`
[qubitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qubitcoin.js) | QubitCoin | Q2C | Not Implemented | `-- Not done`
[cream](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cream.js) | Cream | CRM | Not Implemented | `-- Not done`
[jetcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jetcoin.js) | Jetcoin | JET | Dynamic | *+ Done*
[truckcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/truckcoin.js) | Truckcoin | TRK | Not Implemented | `-- Not done`
[equal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/equal.js) | Equal | EQL | Dynamic | *+ Done*
[zilbercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zilbercoin.js) | Zilbercoin | ZBC | Not Implemented | `-- Not done`
[fitrova](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fitrova.js) | Fitrova | FRV | Dynamic | *+ Done*
[oceanlab](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oceanlab.js) | Oceanlab | OCL | Not Implemented | `-- Not done`
[insanecoin-insn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insanecoin-insn.js) | InsaneCoin | INSN | Not Implemented | `-- Not done`
[britcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/britcoin.js) | BritCoin | BRIT | Not Implemented | `-- Not done`
[deuscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deuscoin.js) | DeusCoin | DEUS | Not Implemented | `-- Not done`
[bitsilver](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsilver.js) | bitSilver | BITSILVER | Not Implemented | `-- Not done`
[bitbar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbar.js) | BitBar | BTB | Not Implemented | `-- Not done`
[trollcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trollcoin.js) | Trollcoin | TROLL | Dynamic | *+ Done*
[piplcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/piplcoin.js) | PiplCoin | PIPL | Dynamic | *+ Done*
[qbic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qbic.js) | Qbic | QBIC | Not Implemented | `-- Not done`
[eltcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eltcoin.js) | ELTCOIN | ELTCOIN | Dynamic | *+ Done*
[greenmed](https://github.com/coincheckup/crypto-supplies/blob/master/coins/greenmed.js) | GreenMed | GRMD | Dynamic | *+ Done*
[growers-international](https://github.com/coincheckup/crypto-supplies/blob/master/coins/growers-international.js) | Growers International | GRWI | Not Implemented | `-- Not done`
[piggycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/piggycoin.js) | Piggycoin | PIGGY | Dynamic | *+ Done*
[lanacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lanacoin.js) | LanaCoin | LANA | Dynamic | *+ Done*
[veros](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veros.js) | Veros | VRS | Dynamic | *+ Done*
[btctalkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/btctalkcoin.js) | BTCtalkcoin | TALK | Dynamic | *+ Done*
[iticoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iticoin.js) | iTicoin | ITI | Not Implemented | `-- Not done`
[startcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/startcoin.js) | Startcoin | START | Not Implemented | `-- Not done`
[phoenixcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phoenixcoin.js) | Phoenixcoin | PXC | Not Implemented | `-- Not done`
[synergy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/synergy.js) | Synergy | SNRG | Dynamic | *+ Done*
[arbitragect](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arbitragect.js) | ArbitrageCT | ARCT | Dynamic | *+ Done*
[briacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/briacoin.js) | BriaCoin | BRIA | Not Implemented | `-- Not done`
[wild-crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wild-crypto.js) | Wild Crypto | WILD | Dynamic | *+ Done*
[billionaire-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/billionaire-token.js) | Billionaire Token | XBL | Dynamic | *+ Done*
[digital-money-bits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-money-bits.js) | Digital Money Bits | DMB | Not Implemented | `-- Not done`
[netko](https://github.com/coincheckup/crypto-supplies/blob/master/coins/netko.js) | Netko | NETKO | Dynamic | *+ Done*
[triangles](https://github.com/coincheckup/crypto-supplies/blob/master/coins/triangles.js) | Triangles | TRI | Not Implemented | `-- Not done`
[intelligent-trading-foundation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intelligent-trading-foundation.js) | Intelligent Trading Foundation | ITT | Dynamic | *+ Done*
[skeincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skeincoin.js) | Skeincoin | SKC | Dynamic | *+ Done*
[guncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guncoin.js) | Guncoin | GUN | Dynamic | *+ Done*
[centurion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/centurion.js) | Centurion | CNT | Not Implemented | `-- Not done`
[halcyon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/halcyon.js) | Halcyon | HAL | Not Implemented | `-- Not done`
[mao-zedong](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mao-zedong.js) | Mao Zedong | MAO | Not Implemented | `-- Not done`
[bitair](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitair.js) | Bitair | BTCA | Dynamic | *+ Done*
[aquariuscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aquariuscoin.js) | AquariusCoin | ARCO | Dynamic | *+ Done*
[trumpcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trumpcoin.js) | TrumpCoin | TRUMP | Dynamic | *+ Done*
[bitstar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitstar.js) | Bitstar | BITS | Not Implemented | `-- Not done`
[bitsum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsum.js) | Bitsum | BSM | Not Implemented | `-- Not done`
[leviarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leviarcoin.js) | N/A | N/A | N/A | `-- Not done`
[tittiecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tittiecoin.js) | TittieCoin | TTC | Not Implemented | `-- Not done`
[joulecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/joulecoin.js) | Joulecoin | XJO | Dynamic | *+ Done*
[rimbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rimbit.js) | Rimbit | RBT | Not Implemented | `-- Not done`
[bigup](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bigup.js) | BigUp | BIGUP | Not Implemented | `-- Not done`
[iethereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iethereum.js) | iEthereum | IETH | Dynamic | *+ Done*
[dashcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dashcoin.js) | Dashcoin | DSH | Not Implemented | `-- Not done`
[bitbtc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbtc.js) | bitBTC | BITBTC | Not Implemented | `-- Not done`
[aricoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aricoin.js) | Aricoin | ARI | Not Implemented | `-- Not done`
[purevidz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/purevidz.js) | PureVidz | VIDZ | Not Implemented | `-- Not done`
[nyancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nyancoin.js) | Nyancoin | NYAN | Not Implemented | `-- Not done`
[bitgem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitgem.js) | Bitgem | BTG | Dynamic | *+ Done*
[tagcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tagcoin.js) | TagCoin | TAG | Not Implemented | `-- Not done`
[minereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/minereum.js) | Minereum | MNE | Dynamic | *+ Done*
[procurrency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/procurrency.js) | ProCurrency | PROC | Not Implemented | `-- Not done`
[bitgold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitgold.js) | bitGold | BITGOLD | Not Implemented | `-- Not done`
[opal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/opal.js) | Opal | OPAL | Not Implemented | `-- Not done`
[whalecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/whalecoin.js) | WhaleCoin | WHL | Not Implemented | `-- Not done`
[regalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/regalcoin.js) | Regalcoin | REC | Not Implemented | `-- Not done`
[motocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/motocoin.js) | Motocoin | MOTO | Not Implemented | `-- Not done`
[hodlcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hodlcoin.js) | HOdlcoin | HODL | Not Implemented | `-- Not done`
[tekcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tekcoin.js) | TEKcoin | TEK | Not Implemented | `-- Not done`
[votecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/votecoin.js) | VoteCoin | VOT | Not Implemented | `-- Not done`
[elementrem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elementrem.js) | Elementrem | ELE | Not Implemented | `-- Not done`
[cryptocarbon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptocarbon.js) | CryptoCarbon | CCRB | Not Implemented | `-- Not done`
[cryptojacks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptojacks.js) | Cryptojacks | CJ | Not Implemented | `-- Not done`
[adcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adcoin.js) | AdCoin | ACC | Not Implemented | `-- Not done`
[ico-openledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ico-openledger.js) | ICO OpenLedger | ICOO | Not Implemented | `-- Not done`
[blazecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blazecoin.js) | BlazeCoin | BLZ | Not Implemented | `-- Not done`
[kubera-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kubera-coin.js) | Kubera Coin | KBR | Dynamic | *+ Done*
[smartcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartcoin.js) | SmartCoin | SMC | Not Implemented | `-- Not done`
[aerium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aerium.js) | Aerium | AERM | Not Implemented | `-- Not done`
[chesscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chesscoin.js) | ChessCoin | CHESS | Not Implemented | `-- Not done`
[wawllet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wawllet.js) | WCOIN | WIN | Dynamic | *+ Done*
[octocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/octocoin.js) | OctoCoin | 888 | Dynamic | *+ Done*
[irishcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/irishcoin.js) | IrishCoin | IRL | Not Implemented | `-- Not done`
[globalboost-y](https://github.com/coincheckup/crypto-supplies/blob/master/coins/globalboost-y.js) | GlobalBoost-Y | BSTY | Not Implemented | `-- Not done`
[bitcoin-red](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-red.js) | Bitcoin Red | BTCRED | Dynamic | *+ Done*
[ultracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ultracoin.js) | UltraCoin | UTC | Not Implemented | `-- Not done`
[blakecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blakecoin.js) | Blakecoin | BLC | Not Implemented | `-- Not done`
[litecoin-plus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin-plus.js) | Litecoin Plus | LCP | Not Implemented | `-- Not done`
[kushcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kushcoin.js) | KushCoin | KUSH | Dynamic | *+ Done*
[marscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/marscoin.js) | Marscoin | MARS | Not Implemented | `-- Not done`
[evil-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/evil-coin.js) | Evil Coin | EVIL | Not Implemented | `-- Not done`
[senderon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/senderon.js) | Senderon | SDRN | Dynamic | *+ Done*
[tigercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tigercoin.js) | Tigercoin | TGC | Not Implemented | `-- Not done`
[pakcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pakcoin.js) | Pakcoin | PAK | Dynamic | *+ Done*
[cannacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cannacoin.js) | CannaCoin | CCN | Dynamic | *+ Done*
[supercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/supercoin.js) | SuperCoin | SUPER | Dynamic | *+ Done*
[prototanium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prototanium.js) | Prototanium | PR | Dynamic | *+ Done*
[manna](https://github.com/coincheckup/crypto-supplies/blob/master/coins/manna.js) | Manna | MANNA | Dynamic | *+ Done*
[postcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/postcoin.js) | PostCoin | POST | Dynamic | *+ Done*
[gapcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gapcoin.js) | Gapcoin | GAP | Dynamic | *+ Done*
[daxxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daxxcoin.js) | DaxxCoin | DAXX | Not Implemented | `-- Not done`
[ultimate-secure-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ultimate-secure-cash.js) | Ultimate Secure Cash | USC | Not Implemented | `-- Not done`
[droxne](https://github.com/coincheckup/crypto-supplies/blob/master/coins/droxne.js) | DROXNE | DRXNE | Not Implemented | `-- Not done`
[bitcurrency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcurrency.js) | Bitcurrency | BTCR | Dynamic | *+ Done*
[accelerator-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/accelerator-network.js) | Accelerator Network | ACC | Dynamic | *+ Done*
[crystal-clear](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crystal-clear.js) | Crystal Clear | CCT | Dynamic | *+ Done*
[atomic-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atomic-coin.js) | Atomic Coin | ATOM | Not Implemented | `-- Not done`
[goldblocks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldblocks.js) | GoldBlocks | GB | Not Implemented | `-- Not done`
[ratecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ratecoin.js) | Ratecoin | XRA | Not Implemented | `-- Not done`
[litebar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litebar.js) | LiteBar | LTB | Not Implemented | `-- Not done`
[mineum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mineum.js) | Mineum | MNM | Not Implemented | `-- Not done`
[crowdcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crowdcoin.js) | CrowdCoin | CRC | Not Implemented | `-- Not done`
[impact](https://github.com/coincheckup/crypto-supplies/blob/master/coins/impact.js) | Impact | IMX | Dynamic | *+ Done*
[philosopher-stones](https://github.com/coincheckup/crypto-supplies/blob/master/coins/philosopher-stones.js) | Philosopher Stones | PHS | Not Implemented | `-- Not done`
[globalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/globalcoin.js) | GlobalCoin | GLC | Dynamic | *+ Done*
[zozocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zozocoin.js) | ZoZoCoin | ZZC | Not Implemented | `-- Not done`
[tokyo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokyo.js) | TOKYO | TOKC | Not Implemented | `-- Not done`
[parallelcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/parallelcoin.js) | ParallelCoin | DUO | Not Implemented | `-- Not done`
[kurrent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kurrent.js) | Kurrent | KURT | Not Implemented | `-- Not done`
[ethereum-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-gold.js) | Ethereum Gold | ETG | Dynamic | *+ Done*
[wavesgo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wavesgo.js) | WavesGo | WGO | Not Implemented | `-- Not done`
[crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crypto.js) | Crypto | CTO | Not Implemented | `-- Not done`
[mojocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mojocoin.js) | MojoCoin | MOJO | Not Implemented | `-- Not done`
[octanox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/octanox.js) | Octanox | OTX | Not Implemented | `-- Not done`
[spacecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spacecoin.js) | SpaceCoin | SPACE | Not Implemented | `-- Not done`
[minex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/minex.js) | Minex | MINEX | Dynamic | *+ Done*
[8bit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/8bit.js) | 8Bit | 8BIT | Dynamic | *+ Done*
[berncash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/berncash.js) | BERNcash | BERN | Not Implemented | `-- Not done`
[ethbet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethbet.js) | EthBet | EBET | Dynamic | *+ Done*
[golfcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golfcoin.js) | Golfcoin | GOLF | Not Implemented | `-- Not done`
[securecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/securecoin.js) | SecureCoin | SRC | Dynamic | *+ Done*
[erc20](https://github.com/coincheckup/crypto-supplies/blob/master/coins/erc20.js) | ERC20 | ERC20 | Dynamic | *+ Done*
[digicube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digicube.js) | DigiCube | CUBE | Not Implemented | `-- Not done`
[helleniccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/helleniccoin.js) | Helleniccoin | HNC | Not Implemented | `-- Not done`
[joincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/joincoin.js) | Joincoin | J | Dynamic | *+ Done*
[sterlingcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sterlingcoin.js) | Sterlingcoin | SLG | Dynamic | *+ Done*
[revolvercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/revolvercoin.js) | RevolverCoin | XRE | Not Implemented | `-- Not done`
[nevacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nevacoin.js) | NevaCoin | NEVA | Dynamic | *+ Done*
[advanced-internet-blocks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/advanced-internet-blocks.js) | Advanced Internet Blocks | AIB | Not Implemented | `-- Not done`
[300-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/300-token.js) | 300 Token | 300 | Dynamic | *+ Done*
[biteur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biteur.js) | bitEUR | BITEUR | Not Implemented | `-- Not done`
[titcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/titcoin.js) | Titcoin | TIT | Not Implemented | `-- Not done`
[safe-trade-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/safe-trade-coin.js) | Safe Trade Coin | XSTC | Not Implemented | `-- Not done`
[freicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/freicoin.js) | Freicoin | FRC | Not Implemented | `-- Not done`
[rubies](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rubies.js) | Rubies | RBIES | Not Implemented | `-- Not done`
[datacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datacoin.js) | Datacoin | DTC | Dynamic | *+ Done*
[leacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leacoin.js) | LeaCoin | LEA | Not Implemented | `-- Not done`
[darsek](https://github.com/coincheckup/crypto-supplies/blob/master/coins/darsek.js) | Darsek | KED | Not Implemented | `-- Not done`
[bit20](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bit20.js) | Bit20 | BTWTY | Not Implemented | `-- Not done`
[influxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/influxcoin.js) | Influxcoin | INFX | Not Implemented | `-- Not done`
[sativacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sativacoin.js) | Sativacoin | STV | Dynamic | *+ Done*
[amsterdamcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/amsterdamcoin.js) | AmsterdamCoin | AMS | Not Implemented | `-- Not done`
[coinonatx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinonatx.js) | CoinonatX | XCXT | Not Implemented | `-- Not done`
[bolivarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bolivarcoin.js) | Bolivarcoin | BOLI | Dynamic | *+ Done*
[steneum-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steneum-coin.js) | Steneum Coin | STN | Not Implemented | `-- Not done`
[bitcoinfast](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoinfast.js) | Bitcoin Fast | BCF | Not Implemented | `-- Not done`
[pascal-lite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pascal-lite.js) | Pascal Lite | PASL | Not Implemented | `-- Not done`
[virtacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virtacoin.js) | Virtacoin | VTA | Not Implemented | `-- Not done`
[chancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chancoin.js) | ChanCoin | CHAN | Not Implemented | `-- Not done`
[boostcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boostcoin.js) | BoostCoin | BOST | Not Implemented | `-- Not done`
[garlicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/garlicoin.js) | Garlicoin | GRLC | Not Implemented | `-- Not done`
[ccore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ccore.js) | Ccore | CCO | Dynamic | *+ Done*
[fujinto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fujinto.js) | Fujinto | NTO | Dynamic | *+ Done*
[islacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/islacoin.js) | IslaCoin | ISL | Not Implemented | `-- Not done`
[octoin-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/octoin-coin.js) | Octoin Coin | OCC | Not Implemented | `-- Not done`
[c-bit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/c-bit.js) | C-Bit | XCT | Not Implemented | `-- Not done`
[swing](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swing.js) | Swing | SWING | Dynamic | *+ Done*
[quazarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quazarcoin.js) | QuazarCoin | QCN | Not Implemented | `-- Not done`
[starcash-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starcash-network.js) | StarCash Network | STARS | Not Implemented | `-- Not done`
[icoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icoin.js) | iCoin | ICN | Dynamic | *+ Done*
[harvest-masternode-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/harvest-masternode-coin.js) | Harvest Masternode Coin | HC | Not Implemented | `-- Not done`
[parkbyte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/parkbyte.js) | ParkByte | PKB | Not Implemented | `-- Not done`
[ronpaulcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ronpaulcoin.js) | RonPaulCoin | RPC | Not Implemented | `-- Not done`
[prime-xi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prime-xi.js) | Prime-XI | PXI | Dynamic | *+ Done*
[bumbacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bumbacoin.js) | BumbaCoin | BUMBA | Not Implemented | `-- Not done`
[catcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/catcoin.js) | Catcoin | CAT | Not Implemented | `-- Not done`
[nekonium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nekonium.js) | Nekonium | NUKO | Not Implemented | `-- Not done`
[mustangcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mustangcoin.js) | MustangCoin | MST | Dynamic | *+ Done*
[zurcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zurcoin.js) | Zurcoin | ZUR | Not Implemented | `-- Not done`
[quatloo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quatloo.js) | Quatloo | QTL | Not Implemented | `-- Not done`
[signatum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/signatum.js) | Signatum | SIGT | Not Implemented | `-- Not done`
[eaglecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eaglecoin.js) | EagleCoin | EAGLE | Dynamic | *+ Done*
[grimcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/grimcoin.js) | Grimcoin | GRIM | Not Implemented | `-- Not done`
[secretcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/secretcoin.js) | SecretCoin | SCRT | Not Implemented | `-- Not done`
[tokugawa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokugawa.js) | Tokugawa | TOK | Not Implemented | `-- Not done`
[mincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mincoin.js) | Mincoin | MNC | Not Implemented | `-- Not done`
[sixeleven](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sixeleven.js) | SixEleven | 611 | Not Implemented | `-- Not done`
[x-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/x-coin.js) | X-Coin | XCO | Not Implemented | `-- Not done`
[redcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/redcoin.js) | RedCoin | RED | Not Implemented | `-- Not done`
[quebecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quebecoin.js) | Quebecoin | QBC | Not Implemented | `-- Not done`
[desire](https://github.com/coincheckup/crypto-supplies/blob/master/coins/desire.js) | Desire | DSR | Not Implemented | `-- Not done`
[phantomx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phantomx.js) | Phantomx | PNX | Not Implemented | `-- Not done`
[eryllium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eryllium.js) | Eryllium | ERY | Dynamic | *+ Done*
[globaltoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/globaltoken.js) | GlobalToken | GLT | Not Implemented | `-- Not done`
[yenten](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yenten.js) | YENTEN | YTN | Not Implemented | `-- Not done`
[guess](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guess.js) | Peerguess | GUESS | Dynamic | *+ Done*
[acoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/acoin.js) | Acoin | ACOIN | Not Implemented | `-- Not done`
[tajcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tajcoin.js) | TajCoin | TAJ | Dynamic | *+ Done*
[network-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/network-token.js) | Network Token | NTWK | Dynamic | *+ Done*
[eternity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eternity.js) | Eternity | ENT | Dynamic | *+ Done*
[doubloon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/doubloon.js) | BOAT | BOAT | Not Implemented | `-- Not done`
[theresa-may-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/theresa-may-coin.js) | Theresa May Coin | MAY | Not Implemented | `-- Not done`
[jin-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jin-coin.js) | Jin Coin | JIN | Not Implemented | `-- Not done`
[ecocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ecocoin.js) | EcoCoin | ECO | Not Implemented | `-- Not done`
[beatcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/beatcoin.js) | Beatcoin | XBTS | Not Implemented | `-- Not done`
[ethereum-dark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-dark.js) | Ethereum Dark | ETHD | Dynamic | *+ Done*
[bitcoin-21](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-21.js) | Bitcoin 21 | XBTC21 | Not Implemented | `-- Not done`
[polcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polcoin.js) | Polcoin | PLC | Not Implemented | `-- Not done`
[high-voltage](https://github.com/coincheckup/crypto-supplies/blob/master/coins/high-voltage.js) | High Voltage | HVCO | Not Implemented | `-- Not done`
[macron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/macron.js) | MACRON | MCRN | Not Implemented | `-- Not done`
[dalecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dalecoin.js) | Dalecoin | DALC | Dynamic | *+ Done*
[global-tour-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-tour-coin.js) | Global Tour Coin | GTC | Not Implemented | `-- Not done`
[speedcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/speedcash.js) | SpeedCash | SCS | Not Implemented | `-- Not done`
[soilcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/soilcoin.js) | SOILcoin | SOIL | Not Implemented | `-- Not done`
[eurocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eurocoin.js) | Eurocoin | EUC | Not Implemented | `-- Not done`
[debitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/debitcoin.js) | Debitcoin | DBTC | Not Implemented | `-- Not done`
[allion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/allion.js) | Allion | ALL | Not Implemented | `-- Not done`
[homeblockcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/homeblockcoin.js) | HomeBlockCoin | HBC | Not Implemented | `-- Not done`
[digital-rupees](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-rupees.js) | Digital Rupees | DRS | Not Implemented | `-- Not done`
[bitcoin-planet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-planet.js) | Bitcoin Planet | BTPL | Not Implemented | `-- Not done`
[paycon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paycon.js) | PayCon | CON | Not Implemented | `-- Not done`
[sooncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sooncoin.js) | SoonCoin | SOON | Not Implemented | `-- Not done`
[solarflarecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/solarflarecoin.js) | Solarflarecoin | SFC | Not Implemented | `-- Not done`
[dollarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dollarcoin.js) | Dollarcoin | DLC | Not Implemented | `-- Not done`
[goldpieces](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldpieces.js) | GoldPieces | GP | Not Implemented | `-- Not done`
[vaperscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vaperscoin.js) | VapersCoin | VPRC | Not Implemented | `-- Not done`
[useless-ethereum-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/useless-ethereum-token.js) | Useless Ethereum Token | UET | Dynamic | *+ Done*
[bankcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bankcoin.js) | Bankcoin | B@ | Not Implemented | `-- Not done`
[abjcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/abjcoin.js) | Abjcoin | ABJ | Not Implemented | `-- Not done`
[bitquark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitquark.js) | BitQuark | BTQ | Not Implemented | `-- Not done`
[allsafe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/allsafe.js) | AllSafe | ASAFE2 | Not Implemented | `-- Not done`
[neuro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neuro.js) | Neuro | NRO | Dynamic | *+ Done*
[funcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/funcoin.js) | FUNCoin | FUNC | Not Implemented | `-- Not done`
[benjirolls](https://github.com/coincheckup/crypto-supplies/blob/master/coins/benjirolls.js) | BenjiRolls | BENJI | Not Implemented | `-- Not done`
[money](https://github.com/coincheckup/crypto-supplies/blob/master/coins/money.js) | Money | $$$ | Not Implemented | `-- Not done`
[fuzzballs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fuzzballs.js) | FuzzBalls | FUZZ | Not Implemented | `-- Not done`
[cachecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cachecoin.js) | CacheCoin | CACH | Dynamic | *+ Done*
[bitasean](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitasean.js) | BitAsean | BAS | Dynamic | *+ Done*
[californium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/californium.js) | Californium | CF | Not Implemented | `-- Not done`
[geysercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/geysercoin.js) | GeyserCoin | GSR | Not Implemented | `-- Not done`
[ponzicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ponzicoin.js) | PonziCoin | PONZI | Not Implemented | `-- Not done`
[marijuanacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/marijuanacoin.js) | Marijuanacoin | MAR | Not Implemented | `-- Not done`
[bipcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bipcoin.js) | BipCoin | BIP | Not Implemented | `-- Not done`
[honey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/honey.js) | Honey | HONEY | Not Implemented | `-- Not done`
[songcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/songcoin.js) | SongCoin | SONG | Not Implemented | `-- Not done`
[elysium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elysium.js) | Elysium | ELS | Not Implemented | `-- Not done`
[comet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/comet.js) | Comet | CMT | Not Implemented | `-- Not done`
[postoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/postoken.js) | PoSToken | POS | Dynamic | *+ Done*
[master-swiscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/master-swiscoin.js) | Master Swiscoin | MSCN | Not Implemented | `-- Not done`
[compucoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/compucoin.js) | CompuCoin | CPN | Not Implemented | `-- Not done`
[gold-pressed-latinum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gold-pressed-latinum.js) | Gold Pressed Latinum | GPL | Not Implemented | `-- Not done`
[bitcoal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoal.js) | BitCoal | COAL | Not Implemented | `-- Not done`
[icobid](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icobid.js) | ICOBID | ICOB | Not Implemented | `-- Not done`
[visio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/visio.js) | Visio | VISIO | Dynamic | *+ Done*
[jobscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jobscoin.js) | JobsCoin | JOBS | Not Implemented | `-- Not done`
[litebitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litebitcoin.js) | LiteBitcoin | LBTC | Not Implemented | `-- Not done`
[guccionecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guccionecoin.js) | GuccioneCoin | GCC | Not Implemented | `-- Not done`
[pioneer-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pioneer-coin.js) | Pioneer Coin | PCOIN | Not Implemented | `-- Not done`
[zetamicron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zetamicron.js) | ZetaMicron | ZMC | Not Implemented | `-- Not done`
[flaxscript](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flaxscript.js) | Flaxscript | FLAX | Dynamic | *+ Done*
[virta-unique-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virta-unique-coin.js) | Virta Unique Coin | VUC | Not Implemented | `-- Not done`
[healthywormcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/healthywormcoin.js) | HealthyWormCoin | WORM | Dynamic | *+ Done*
[javascript-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/javascript-token.js) | JavaScript Token | JS | Dynamic | *+ Done*
[bolenum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bolenum.js) | Bolenum | BLN | Dynamic | *+ Done*
[coinonat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinonat.js) | Coinonat | CXT | Not Implemented | `-- Not done`
[roofs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/roofs.js) | Roofs | ROOFS | Not Implemented | `-- Not done`
[bnrtxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bnrtxcoin.js) | BnrtxCoin | BNX | Not Implemented | `-- Not done`
[veltor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veltor.js) | Veltor | VLT | Not Implemented | `-- Not done`
[shadow-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shadow-token.js) | Shadow Token | SHDW | Not Implemented | `-- Not done`
[asiadigicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/asiadigicoin.js) | Asiadigicoin | ADCN | Not Implemented | `-- Not done`
[luna-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/luna-coin.js) | Luna Coin | LUNA | Not Implemented | `-- Not done`
[geertcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/geertcoin.js) | GeertCoin | GEERT | Not Implemented | `-- Not done`
[kronecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kronecoin.js) | Kronecoin | KRONE | Not Implemented | `-- Not done`
[dreamcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dreamcoin.js) | Dreamcoin | DRM | Not Implemented | `-- Not done`
[cabbage](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cabbage.js) | Cabbage | CAB | Not Implemented | `-- Not done`
[iconic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iconic.js) | Iconic | ICON | Not Implemented | `-- Not done`
[slevin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/slevin.js) | Slevin | SLEVIN | Not Implemented | `-- Not done`
[independent-money-system](https://github.com/coincheckup/crypto-supplies/blob/master/coins/independent-money-system.js) | Independent Money System | IMS | Not Implemented | `-- Not done`
[playercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/playercoin.js) | PlayerCoin | PLACO | Not Implemented | `-- Not done`
[litecred](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecred.js) | Litecred | LTCR | Not Implemented | `-- Not done`
[kingn-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kingn-coin.js) | KingN Coin | KNC | Not Implemented | `-- Not done`
[creatio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/creatio.js) | Creatio | XCRE | Not Implemented | `-- Not done`
[arbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arbit.js) | ARbit | ARB | Not Implemented | `-- Not done`
[vector](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vector.js) | VectorAI | VEC2 | Not Implemented | `-- Not done`
[litecoin-ultra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin-ultra.js) | LiteCoin Ultra | LTCU | Not Implemented | `-- Not done`
[milocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/milocoin.js) | MiloCoin | MILO | Not Implemented | `-- Not done`
[piecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/piecoin.js) | PIECoin | PIE | Not Implemented | `-- Not done`
[letitride](https://github.com/coincheckup/crypto-supplies/blob/master/coins/letitride.js) | LetItRide | LIR | Dynamic | *+ Done*
[zayedcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zayedcoin.js) | Zayedcoin | ZYD | Not Implemented | `-- Not done`
[interzone](https://github.com/coincheckup/crypto-supplies/blob/master/coins/interzone.js) | Interzone | ITZ | Not Implemented | `-- Not done`
[glasscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/glasscoin.js) | GlassCoin | GLS | Not Implemented | `-- Not done`
[credence-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/credence-coin.js) | Credence Coin | CRDNC | Not Implemented | `-- Not done`
[cannation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cannation.js) | Cannation | CNNC | Not Implemented | `-- Not done`
[posex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/posex.js) | PosEx | PEX | Not Implemented | `-- Not done`
[plncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/plncoin.js) | PLNcoin | PLNC | Not Implemented | `-- Not done`
[coupecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coupecoin.js) | Coupecoin | COUPE | Not Implemented | `-- Not done`
[anarchistsprime](https://github.com/coincheckup/crypto-supplies/blob/master/coins/anarchistsprime.js) | AnarchistsPrime | ACP | Not Implemented | `-- Not done`
[prcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prcoin.js) | PRCoin | PRC | Not Implemented | `-- Not done`
[save-and-gain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/save-and-gain.js) | Save and Gain | SANDG | Not Implemented | `-- Not done`
[bitvolt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitvolt.js) | Bitvolt | VOLT | Not Implemented | `-- Not done`
[argus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/argus.js) | Argus | ARGUS | Not Implemented | `-- Not done`
[wild-beast-block](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wild-beast-block.js) | Wild Beast Block | WBB | Not Implemented | `-- Not done`
[dollar-online](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dollar-online.js) | Dollar Online | DOLLAR | Not Implemented | `-- Not done`
[bowscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bowscoin.js) | BowsCoin | BSC | Not Implemented | `-- Not done`
[ibank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ibank.js) | iBank | IBANK | Not Implemented | `-- Not done`
[biobar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biobar.js) | BioBar | BIOB | Not Implemented | `-- Not done`
[artex-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/artex-coin.js) | Artex Coin | ATX | Not Implemented | `-- Not done`
[crevacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crevacoin.js) | CrevaCoin | CREVA | Not Implemented | `-- Not done`
[concoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/concoin.js) | Concoin | CONX | Not Implemented | `-- Not done`
[vault-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vault-coin.js) | Vault Coin | VLTC | Not Implemented | `-- Not done`
[project-x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/project-x.js) | Project-X | NANOX | Not Implemented | `-- Not done`
[magnum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magnum.js) | Magnum | MGM | Not Implemented | `-- Not done`
[ulatech](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ulatech.js) | Ulatech | ULA | Not Implemented | `-- Not done`
[levoplus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/levoplus.js) | LevoPlus | LVPS | Not Implemented | `-- Not done`
[tristar-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tristar-coin.js) | Tristar Coin | TSTR | Not Implemented | `-- Not done`
[poly-ai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/poly-ai.js) | POLY AI | AI | Dynamic | *+ Done*
[blockmesh](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockmesh.js) | BlockMesh | BMH | Dynamic | *+ Done*
[investdigital](https://github.com/coincheckup/crypto-supplies/blob/master/coins/investdigital.js) | InvestDigital | IDT | Not Implemented | `-- Not done`
[superior-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/superior-coin.js) | Superior Coin | SUP | Not Implemented | `-- Not done`
[oceanchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oceanchain.js) | OceanChain | OC | Not Implemented | `-- Not done`
[ofcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ofcoin.js) | OFCOIN | OF | Not Implemented | `-- Not done`
[bittwatt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bittwatt.js) | Bittwatt | BWT | Not Implemented | `-- Not done`
[xmax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xmax.js) | XMax | XMX | Dynamic | *+ Done*
[cashbet-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cashbet-coin.js) | CashBet Coin | CBC | Dynamic | *+ Done*
[maggie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maggie.js) | Maggie | MAG | Dynamic | *+ Done*
[global-social-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-social-chain.js) | Global Social Chain | GSC | Not Implemented | `-- Not done`
[influence-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/influence-chain.js) | Influence Chain | INC | Not Implemented | `-- Not done`
[ipchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ipchain.js) | IPChain | IPC | Dynamic | *+ Done*
[traxia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/traxia.js) | TRAXIA | TMT | Dynamic | *+ Done*
[stockchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stockchain.js) | StockChain | SCC | Dynamic | *+ Done*
[pchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pchain.js) | PCHAIN | PAI | Dynamic | *+ Done*
[open-platform](https://github.com/coincheckup/crypto-supplies/blob/master/coins/open-platform.js) | Open Platform | OPEN | Dynamic | *+ Done*
[levocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/levocoin.js) | Levocoin | LEVO | Not Implemented | `-- Not done`
[engine](https://github.com/coincheckup/crypto-supplies/blob/master/coins/engine.js) | Engine | EGCC | Not Implemented | `-- Not done`
[intelligent-investment-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intelligent-investment-chain.js) | Intelligent Investment Chain | IIC | Not Implemented | `-- Not done`
[first-bitcoin-capital](https://github.com/coincheckup/crypto-supplies/blob/master/coins/first-bitcoin-capital.js) | First Bitcoin Capital | BITCF | Not Implemented | `-- Not done`
[quotient](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quotient.js) | Quotient | XQN | Dynamic | *+ Done*
[tellurion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tellurion.js) | Tellurion | TELL | Not Implemented | `-- Not done`
[numuscash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/numuscash.js) | NumusCash | NUMUS | Not Implemented | `-- Not done`
[btcmoon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/btcmoon.js) | BTCMoon | BTCM | Dynamic | *+ Done*
[bigone-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bigone-token.js) | BigONE Token | BIG | Not Implemented | `-- Not done`
[t-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/t-coin.js) | T-coin | TCOIN | Not Implemented | `-- Not done`
[universalroyalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universalroyalcoin.js) | UniversalRoyalCoin | UNRC | Not Implemented | `-- Not done`
[sjwcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sjwcoin.js) | SJWCoin | SJW | Not Implemented | `-- Not done`
[budbo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/budbo.js) | Budbo | BUBO | Not Implemented | `-- Not done`
[axiom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/axiom.js) | Axiom | AXIOM | Not Implemented | `-- Not done`
[richcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/richcoin.js) | RichCoin | RICHX | Not Implemented | `-- Not done`
[omicron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/omicron.js) | Omicron | OMC | Not Implemented | `-- Not done`
[coffeecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coffeecoin.js) | CoffeeCoin | CFC | Not Implemented | `-- Not done`
[antimatter](https://github.com/coincheckup/crypto-supplies/blob/master/coins/antimatter.js) | Antimatter | ANTX | Not Implemented | `-- Not done`
[ur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ur.js) | UR | UR | Not Implemented | `-- Not done`
[magnetcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magnetcoin.js) | Magnetcoin | MAGN | Not Implemented | `-- Not done`
[slothcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/slothcoin.js) | Slothcoin | SLOTH | Not Implemented | `-- Not done`
[protean](https://github.com/coincheckup/crypto-supplies/blob/master/coins/protean.js) | Protean | PRN | Not Implemented | `-- Not done`
[akuya-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/akuya-coin.js) | Akuya Coin | AKY | Not Implemented | `-- Not done`
[consensus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/consensus.js) | Consensus | SEN | Dynamic | *+ Done*
[zsecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zsecoin.js) | ZSEcoin | ZSE | Not Implemented | `-- Not done`
[sakuracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sakuracoin.js) | Sakuracoin | SKR | Not Implemented | `-- Not done`
[w3coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/w3coin.js) | W3Coin | W3C | Not Implemented | `-- Not done`
[etherecash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etherecash.js) | Etherecash | ECH | Not Implemented | `-- Not done`
[embercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/embercoin.js) | EmberCoin | EMB | Not Implemented | `-- Not done`
[zengold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zengold.js) | ZenGold | ZENGOLD | Not Implemented | `-- Not done`
[dragon-coins](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dragon-coins.js) | Dragon Coins | DRG | Dynamic | *+ Done*
[shacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shacoin.js) | SHACoin | SHA | Dynamic | *+ Done*
[blockcdn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockcdn.js) | BlockCDN | BCDN | Dynamic | *+ Done*
[kcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kcash.js) | Kcash | KCASH | Not Implemented | `-- Not done`
[cropcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cropcoin.js) | Cropcoin | CROP | Not Implemented | `-- Not done`
[bt2-cst](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bt2-cst.js) | BT2 [CST] | BT2 | Not Implemented | `-- Not done`
[pixie-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pixie-coin.js) | Pixie Coin | PXC | Dynamic | *+ Done*
[president-johnson](https://github.com/coincheckup/crypto-supplies/blob/master/coins/president-johnson.js) | President Johnson | GARY | Not Implemented | `-- Not done`
[contractnet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/contractnet.js) | ContractNet | CNET | Not Implemented | `-- Not done`
[decentralized-machine-learning](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decentralized-machine-learning.js) | Decentralized Machine Learning | DML | Dynamic | *+ Done*
[rupee](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rupee.js) | Rupee | RUP | Not Implemented | `-- Not done`
[freyrchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/freyrchain.js) | Freyrchain | FREC | Not Implemented | `-- Not done`
[gochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gochain.js) | GoChain | GO | Not Implemented | `-- Not done`
[bezant](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bezant.js) | Bezant | BZNT | Dynamic | *+ Done*
[noah-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/noah-coin.js) | Noah Coin | NOAH | Dynamic | *+ Done*
[nexty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexty.js) | Nexty | NTY | Not Implemented | `-- Not done`
[comsa-xem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/comsa-xem.js) | COMSA [XEM] | CMS | Not Implemented | `-- Not done`
[rublix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rublix.js) | Rublix | RBLX | Dynamic | *+ Done*
[sentinel-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sentinel-protocol.js) | Sentinel Protocol | UPP | Not Implemented | `-- Not done`
[skrumble-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skrumble-network.js) | Skrumble Network | SKM | Dynamic | *+ Done*
[couchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/couchain.js) | Couchain | COU | Dynamic | *+ Done*
[bitcoin-god](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-god.js) | Bitcoin God | GOD | Not Implemented | `-- Not done`
[iquant](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iquant.js) | iQuant | IQT | Dynamic | *+ Done*
[super-game-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/super-game-chain.js) | Super Game Chain | SGCC | Not Implemented | `-- Not done`
[cybereits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybereits.js) | Cybereits | CRE | Dynamic | *+ Done*
[halalchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/halalchain.js) | HalalChain | HLC | Not Implemented | `-- Not done`
[salpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/salpay.js) | SalPay | SAL | Dynamic | *+ Done*
[tripio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tripio.js) | Tripio | TRIO | Not Implemented | `-- Not done`
[merculet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/merculet.js) | Merculet | MVP | Not Implemented | `-- Not done`
[libra-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/libra-credit.js) | Libra Credit | LBA | Dynamic | *+ Done*
[valuechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/valuechain.js) | ValueChain | VLC | Not Implemented | `-- Not done`
[insurchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insurchain.js) | InsurChain | INSUR | Dynamic | *+ Done*
[jingtum-tech](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jingtum-tech.js) | Jingtum Tech | SWTC | Not Implemented | `-- Not done`
[spindle](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spindle.js) | SPINDLE | SPD | Dynamic | *+ Done*
[vcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vcash.js) | Vcash | XVC | Not Implemented | `-- Not done`
[shopin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shopin.js) | Shopin | SHOP | Not Implemented | `-- Not done`
[sphre-air](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sphre-air.js) | Sphre AIR | XID | Dynamic | *+ Done*
[medx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medx.js) | MediBloc [ERC20] | MEDX | Not Implemented | `-- Not done`
[snipcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/snipcoin.js) | SnipCoin | SNIP | Not Implemented | `-- Not done`
[b2bcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/b2bcoin.js) | B2Bcoin | BBC | Dynamic | *+ Done*
[indicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/indicoin.js) | Indicoin | INDI | Dynamic | *+ Done*
[ether-zero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ether-zero.js) | Ether Zero | ETZ | Not Implemented | `-- Not done`
[weth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/weth.js) | WETH | WETH | Not Implemented | `-- Not done`
[vipstar-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vipstar-coin.js) | Vipstar Coin | VIPS | Not Implemented | `-- Not done`
[comsa-eth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/comsa-eth.js) | COMSA [ETH] | CMS | Dynamic | *+ Done*
[swisscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swisscoin.js) | Swisscoin | SIC | Not Implemented | `-- Not done`
[royalties](https://github.com/coincheckup/crypto-supplies/blob/master/coins/royalties.js) | Royalties | XRY | Not Implemented | `-- Not done`
[entcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/entcash.js) | ENTCash | ENT | Not Implemented | `-- Not done`
[fargocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fargocoin.js) | Fargocoin | FRGC | Not Implemented | `-- Not done`
[hyper-pay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hyper-pay.js) | Hyper Pay | HPY | Not Implemented | `-- Not done`
[hero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hero.js) | Hero | HERO | Dynamic | *+ Done*
[gold-reward-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gold-reward-token.js) | GOLD Reward Token | GRX | Dynamic | *+ Done*
[topcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/topcoin.js) | TopCoin | TOP | Not Implemented | `-- Not done`
[rabbitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rabbitcoin.js) | RabbitCoin | RBBT | Not Implemented | `-- Not done`
[huncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/huncoin.js) | Huncoin | HNC | Not Implemented | `-- Not done`
[pressone](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pressone.js) | PressOne | PRS | Dynamic | *+ Done*
[high-gain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/high-gain.js) | High Gain | HIGH | Dynamic | *+ Done*
[aidos-kuneen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aidos-kuneen.js) | Aidos Kuneen | ADK | Not Implemented | `-- Not done`
[etherdelta-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etherdelta-token.js) | EtherDelta Token | EDT | Dynamic | *+ Done*
[bastonet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bastonet.js) | Bastonet | BSN | Not Implemented | `-- Not done`
[lightning-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lightning-bitcoin.js) | Lightning Bitcoin | LBTC | Dynamic | *+ Done*
[futurocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/futurocoin.js) | FuturoCoin | FTO | Not Implemented | `-- Not done`
[francs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/francs.js) | Francs | FRN | Not Implemented | `-- Not done`
[curriculum-vitae](https://github.com/coincheckup/crypto-supplies/blob/master/coins/curriculum-vitae.js) | Curriculum Vitae | CVH | Dynamic | *+ Done*
[topchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/topchain.js) | TopChain | TOPC | Dynamic | *+ Done*
[rcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rcoin.js) | Rcoin | RCN | Not Implemented | `-- Not done`
[bankera](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bankera.js) | Bankera | BNK | Dynamic | *+ Done*
[penta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/penta.js) | Penta | PNT | Dynamic | *+ Done*
[smoke](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smoke.js) | Smoke | SMOKE | Not Implemented | `-- Not done`
[cazcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cazcoin.js) | Cazcoin | CAZ | Not Implemented | `-- Not done`
[fapcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fapcoin.js) | FAPcoin | FAP | Dynamic | *+ Done*
[corion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/corion.js) | CORION | COR | Not Implemented | `-- Not done`
[exchange-union](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exchange-union.js) | Exchange Union | XUC | Dynamic | *+ Done*
[animecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/animecoin.js) | Animecoin | ANI | Not Implemented | `-- Not done`
[aston](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aston.js) | Aston | ATX | Dynamic | *+ Done*
[monero-original](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero-original.js) | Monero Original | XMO | Not Implemented | `-- Not done`
[cubits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cubits.js) | Cubits | QBT | Not Implemented | `-- Not done`
[electronic-pk-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electronic-pk-chain.js) | Electronic PK Chain | EPC | Not Implemented | `-- Not done`
[fairgame](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fairgame.js) | FairGame | FAIR | Not Implemented | `-- Not done`
[dascoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dascoin.js) | Dascoin | DASC | Not Implemented | `-- Not done`
[molecular-future](https://github.com/coincheckup/crypto-supplies/blob/master/coins/molecular-future.js) | Molecular Future | MOF | Dynamic | *+ Done*
[chatcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chatcoin.js) | ChatCoin | CHAT | Not Implemented | `-- Not done`
[teslacoilcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/teslacoilcoin.js) | TeslaCoilCoin | TESLA | Not Implemented | `-- Not done`
[super-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/super-bitcoin.js) | Super Bitcoin | SBTC | Not Implemented | `-- Not done`
[storjcoin-x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storjcoin-x.js) | Storjcoin X | SJCX | Not Implemented | `-- Not done`
[bank-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bank-coin.js) | Bank Coin | BANK | Not Implemented | `-- Not done`
[acute-angle-cloud](https://github.com/coincheckup/crypto-supplies/blob/master/coins/acute-angle-cloud.js) | Acute Angle Cloud | AAC | Not Implemented | `-- Not done`
[united-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/united-bitcoin.js) | United Bitcoin | UBTC | Not Implemented | `-- Not done`
[xyo-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xyo-network.js) | XYO Network | XYO | Dynamic | *+ Done*
[zip](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zip.js) | ZIP | ZIP | Dynamic | *+ Done*
[lendroid-support-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lendroid-support-token.js) | Lendroid Support Token | LST | Dynamic | *+ Done*
[first-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/first-bitcoin.js) | First Bitcoin | BIT | Not Implemented | `-- Not done`
[powercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/powercoin.js) | Powercoin | PWR | Not Implemented | `-- Not done`
[msd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/msd.js) | MSD | MSD | Not Implemented | `-- Not done`
[acchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/acchain.js) | ACChain | ACC | Not Implemented | `-- Not done`
[animation-vision-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/animation-vision-cash.js) | Animation Vision Cash | AVH | Dynamic | *+ Done*
[encryptotel-eth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/encryptotel-eth.js) | EncryptoTel [ETH] | ETT | Dynamic | *+ Done*
[content-neutrality-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/content-neutrality-network.js) | Content Neutrality Network | CNN | Dynamic | *+ Done*
[qube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qube.js) | Qube | QUBE | Not Implemented | `-- Not done`
[paymon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paymon.js) | Paymon | PMNT | Dynamic | *+ Done*
[mytoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mytoken.js) | MyToken | MT | Dynamic | *+ Done*
[president-trump](https://github.com/coincheckup/crypto-supplies/blob/master/coins/president-trump.js) | President Trump | PRES | Not Implemented | `-- Not done`
[arbitracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arbitracoin.js) | Arbitracoin | ATC | Not Implemented | `-- Not done`
[trustnote](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trustnote.js) | TrustNote | TTT | Not Implemented | `-- Not done`
[cyder](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cyder.js) | Cyder | CYDER | Not Implemented | `-- Not done`
[sisa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sisa.js) | SISA | SISA | Dynamic | *+ Done*
[supernet-unity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/supernet-unity.js) | SuperNET | UNITY | Not Implemented | `-- Not done`
[realchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/realchain.js) | RealChain | RCT | Dynamic | *+ Done*
[belacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/belacoin.js) | Bela | BELA | Dynamic | *+ Done*
[betacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/betacoin.js) | BetaCoin | BET | Not Implemented | `-- Not done`
[wi-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wi-coin.js) | Wi Coin | WIC | Dynamic | *+ Done*
[rhenium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rhenium.js) | Rhenium | XRH | Not Implemented | `-- Not done`
[digix-gold-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digix-gold-token.js) | Digix Gold Token | DGX | Dynamic | *+ Done*
[avoncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/avoncoin.js) | Avoncoin | ACN | Not Implemented | `-- Not done`
[ea-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ea-coin.js) | EA Coin | EAG | Not Implemented | `-- Not done`
[aseancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aseancoin.js) | Aseancoin | ASN | Not Implemented | `-- Not done`
[sparks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sparks.js) | Sparks | SPK | Not Implemented | `-- Not done`
[aces](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aces.js) | Aces | ACES | Not Implemented | `-- Not done`
[prismchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prismchain.js) | PrismChain | PRM | Not Implemented | `-- Not done`
[edrcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/edrcoin.js) | EDRCoin | EDRC | Not Implemented | `-- Not done`
[clubcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clubcoin.js) | ClubCoin | CLUB | Dynamic | *+ Done*
[ejoy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ejoy.js) | EJOY | EJOY | Dynamic | *+ Done*
[ugain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ugain.js) | UGAIN | GAIN | Not Implemented | `-- Not done`
[goldmaxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldmaxcoin.js) | GoldMaxCoin | GMX | Not Implemented | `-- Not done`
[grandcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/grandcoin.js) | GrandCoin | GDC | Not Implemented | `-- Not done`
[neo-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neo-gold.js) | NEO GOLD | NEOG | Dynamic | *+ Done*
[dutch-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dutch-coin.js) | Dutch Coin | DUTCH | Not Implemented | `-- Not done`
[wink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wink.js) | Wink | WINK | Not Implemented | `-- Not done`
[candy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/candy.js) | Candy | CANDY | Not Implemented | `-- Not done`
[bitok](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitok.js) | Bitok | BITOK | Not Implemented | `-- Not done`
[turbocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/turbocoin.js) | TurboCoin | TURBO | Not Implemented | `-- Not done`
[donationcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/donationcoin.js) | Donationcoin | DON | Not Implemented | `-- Not done`
[halloween-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/halloween-coin.js) | Halloween Coin | HALLO | Not Implemented | `-- Not done`
[dynamiccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dynamiccoin.js) | DynamicCoin | DMC | Not Implemented | `-- Not done`
[xtd-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xtd-coin.js) | XTD Coin | XTD | Not Implemented | `-- Not done`
[cheapcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cheapcoin.js) | Cheapcoin | CHEAP | Not Implemented | `-- Not done`
[utrum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/utrum.js) | Utrum | OOT | Not Implemented | `-- Not done`
[avatarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/avatarcoin.js) | AvatarCoin | AV | Not Implemented | `-- Not done`
[proud-money](https://github.com/coincheckup/crypto-supplies/blob/master/coins/proud-money.js) | PROUD Money | PROUD | Not Implemented | `-- Not done`
[landcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/landcoin.js) | LandCoin | LDCN | Not Implemented | `-- Not done`
[blazercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blazercoin.js) | BlazerCoin | BLAZR | Not Implemented | `-- Not done`
[hodl-bucks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hodl-bucks.js) | HODL Bucks | HDLB | Dynamic | *+ Done*
[shellcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shellcoin.js) | ShellCoin | SHELL | Not Implemented | `-- Not done`
[hyper](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hyper.js) | Hyper | HYPER | Not Implemented | `-- Not done`
[bubble](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bubble.js) | Bubble | BUB | Not Implemented | `-- Not done`
[cryptcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptcoin.js) | CryptCoin | CRYPT | Dynamic | *+ Done*
[show](https://github.com/coincheckup/crypto-supplies/blob/master/coins/show.js) | Show | SHOW | Not Implemented | `-- Not done`
[ivy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ivy.js) | Ivy | IVY | Dynamic | *+ Done*
[terranova](https://github.com/coincheckup/crypto-supplies/blob/master/coins/terranova.js) | TerraNova | TER | Not Implemented | `-- Not done`
[atmcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atmcoin.js) | ATMCoin | ATMC | Not Implemented | `-- Not done`
[cloud](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cloud.js) | Cloud | CLD | Dynamic | *+ Done*
[ethereum-lite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-lite.js) | Ethereum Lite | ELITE | Dynamic | *+ Done*
[dignity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dignity.js) | Dignity | DIG | Dynamic | *+ Done*
[key](https://github.com/coincheckup/crypto-supplies/blob/master/coins/key.js) | KEY | KEY | Dynamic | *+ Done*
[seele](https://github.com/coincheckup/crypto-supplies/blob/master/coins/seele.js) | Seele | SEELE | Dynamic | *+ Done*
[read](https://github.com/coincheckup/crypto-supplies/blob/master/coins/read.js) | Read | READ | Dynamic | *+ Done*
[monero-classic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero-classic.js) | Monero Classic | XMC | Not Implemented | `-- Not done`
[loopring-neo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loopring-neo.js) | Loopring [NEO] | LRN | Not Implemented | `-- Not done`
[content-and-ad-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/content-and-ad-network.js) | Content and AD Network | CAN | Not Implemented | `-- Not done`
[unlimitedip](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unlimitedip.js) | UnlimitedIP | UIP | Dynamic | *+ Done*
[namocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/namocoin.js) | NamoCoin | NAMO | Not Implemented | `-- Not done`
[mirq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mirq.js) | MIRQ | MRQ | Not Implemented | `-- Not done`
[bitbase](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbase.js) | Bitbase | BTBc | Not Implemented | `-- Not done`
[repo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/repo.js) | REPO | REPO | Not Implemented | `-- Not done`
[sharkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharkcoin.js) | Sharkcoin | SAK | Not Implemented | `-- Not done`
[cryptopiafeeshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptopiafeeshares.js) | CryptopiaFeeShares | CEFS | Not Implemented | `-- Not done`
[runners](https://github.com/coincheckup/crypto-supplies/blob/master/coins/runners.js) | Runners | RUNNERS | Not Implemented | `-- Not done`
[sigmacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sigmacoin.js) | SIGMAcoin | SIGMA | Not Implemented | `-- Not done`
[klondikecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/klondikecoin.js) | KlondikeCoin | KDC | Not Implemented | `-- Not done`
[eggcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eggcoin.js) | EggCoin | EGG | Not Implemented | `-- Not done`
[internet-of-things](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internet-of-things.js) | Internet of Things | XOT | Not Implemented | `-- Not done`
[bitserial](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitserial.js) | BitSerial | BTE | Dynamic | *+ Done*
[bitsoar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsoar.js) | BitSoar | BSR | Not Implemented | `-- Not done`
[infinitecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/infinitecoin.js) | Infinitecoin | IFC | Dynamic | *+ Done*
[golos-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golos-gold.js) | Golos Gold | GBG | Not Implemented | `-- Not done`
[wa-space](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wa-space.js) | WA Space | WA | Not Implemented | `-- Not done`
[birds](https://github.com/coincheckup/crypto-supplies/blob/master/coins/birds.js) | Birds | BIRDS | Not Implemented | `-- Not done`
[coinmeet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinmeet.js) | CoinMeet | MEET | Dynamic | *+ Done*
[marxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/marxcoin.js) | MarxCoin | MARX | Not Implemented | `-- Not done`
[0xbtc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/0xbtc.js) | 0xBitcoin | 0xBTC | Not Implemented | `-- Not done`
[1337coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/1337coin.js) | Elite | 1337 | Not Implemented | `-- Not done`
[abncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/abncoin.js) | N/A | N/A | N/A | `-- Not done`
[agrolifecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/agrolifecoin.js) | AgrolifeCoin | AGLC | Not Implemented | `-- Not done`
[aidoc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aidoc.js) | AI Doctor | AIDOC | Not Implemented | `-- Not done`
[alpacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alpacoin.js) | N/A | N/A | N/A | `-- Not done`
[alphabitcoinfund](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alphabitcoinfund.js) | Alphabit | ABC | Not Implemented | `-- Not done`
[altcommunity-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/altcommunity-coin.js) | SONO | SONO | Not Implemented | `-- Not done`
[amber](https://github.com/coincheckup/crypto-supplies/blob/master/coins/amber.js) | Ambrosus | AMB | Not Implemented | `-- Not done`
[ambercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ambercoin.js) | AmberCoin | AMBER | Not Implemented | `-- Not done`
[amlt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/amlt.js) | AMLT Token | AMLT | Not Implemented | `-- Not done`
[ammo-reloaded](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ammo-reloaded.js) | Ammo Reloaded | AMMO | Not Implemented | `-- Not done`
[anryze](https://github.com/coincheckup/crypto-supplies/blob/master/coins/anryze.js) | ANRYZE | RYZ | Not Implemented | `-- Not done`
[antibitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/antibitcoin.js) | N/A | N/A | N/A | `-- Not done`
[antilitecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/antilitecoin.js) | N/A | N/A | N/A | `-- Not done`
[artbyte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/artbyte.js) | ArtByte | ABY | Not Implemented | `-- Not done`
[attention-token-of-media](https://github.com/coincheckup/crypto-supplies/blob/master/coins/attention-token-of-media.js) | ATMChain | ATM | Not Implemented | `-- Not done`
[aware](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aware.js) | AWARE | AWR | Not Implemented | `-- Not done`
[b2bx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/b2bx.js) | B2BX | B2B | Dynamic | *+ Done*
[basic-attention-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/basic-attention-token.js) | Basic Attention Token | BAT | Dynamic | *+ Done*
[bean-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bean-cash.js) | Bean Cash | BITB | Not Implemented | `-- Not done`
[bestchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bestchain.js) | BestChain | BEST | Not Implemented | `-- Not done`
[billarycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/billarycoin.js) | N/A | N/A | N/A | `-- Not done`
[bios-crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bios-crypto.js) | BiosCrypto | BIOS | Not Implemented | `-- Not done`
[bit-tube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bit-tube.js) | BitTube | TUBE | Not Implemented | `-- Not done`
[bitalphacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitalphacoin.js) | N/A | N/A | N/A | `-- Not done`
[bitboost](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitboost.js) | N/A | N/A | N/A | `-- Not done`
[bitcedi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcedi.js) | N/A | N/A | N/A | `-- Not done`
[bitcoin-atom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-atom.js) | Bitcoin Atom | BCA | Not Implemented | `-- Not done`
[bitcoin-scrypt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-scrypt.js) | Bitcoin Scrypt | BTCS | Not Implemented | `-- Not done`
[bitcoinx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoinx.js) | BitcoinX | BCX | Not Implemented | `-- Not done`
[bitconnect](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitconnect.js) | BitConnect | BCC | Not Implemented | `-- Not done`
[bitfid](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitfid.js) | N/A | N/A | N/A | `-- Not done`
[bitpark-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitpark-coin.js) | Bitpark Coin | BPC | Dynamic | *+ Done*
[bitshares-music](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitshares-music.js) | MUSE | MUSE | Not Implemented | `-- Not done`
[bittokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bittokens.js) | BitTokens | BXT | Not Implemented | `-- Not done`
[bitz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitz.js) | Bitz | BITZ | Not Implemented | `-- Not done`
[blackmoon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blackmoon.js) | Blackmoon | BMC | Not Implemented | `-- Not done`
[blackstar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blackstar.js) | N/A | N/A | N/A | `-- Not done`
[blakestar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blakestar.js) | ERA | ERA | Not Implemented | `-- Not done`
[blitzcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blitzcash.js) | Blitzcash | BLITZ | Dynamic | *+ Done*
[blockmason](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockmason.js) | BlockMason Credit Protocol | BCPT | Not Implemented | `-- Not done`
[blockpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockpay.js) | BlockPay | BLOCKPAY | Not Implemented | `-- Not done`
[bloomtoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bloomtoken.js) | Bloom | BLT | Not Implemented | `-- Not done`
[braincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/braincoin.js) | N/A | N/A | N/A | `-- Not done`
[brat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/brat.js) | BROTHER | BRAT | Not Implemented | `-- Not done`
[caliphcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/caliphcoin.js) | CaliphCoin | CALC | Not Implemented | `-- Not done`
[cartaxi-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cartaxi-token.js) | CarTaxi Token | CTX | Not Implemented | `-- Not done`
[cashcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cashcoin.js) | Cashcoin | CASH | Not Implemented | `-- Not done`
[cashme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cashme.js) | N/A | N/A | N/A | `-- Not done`
[ccminer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ccminer.js) | N/A | N/A | N/A | `-- Not done`
[centra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/centra.js) | Centra | CTR | Dynamic | *+ Done*
[chronos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chronos.js) | Chronos | CRX | Not Implemented | `-- Not done`
[ckusd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ckusd.js) | CK USD | CKUSD | Not Implemented | `-- Not done`
[clearcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clearcoin.js) | ClearCoin | CLR | Dynamic | *+ Done*
[coexistcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coexistcoin.js) | N/A | N/A | N/A | `-- Not done`
[coimatic-2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coimatic-2.js) | Coimatic 2.0 | CTIC2 | Not Implemented | `-- Not done`
[coimatic-3](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coimatic-3.js) | Coimatic 3.0 | CTIC3 | Not Implemented | `-- Not done`
[coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coin.js) | Coin(O) | CNO | Not Implemented | `-- Not done`
[coin2-1](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coin2-1.js) | Coin2.1 | C2 | Not Implemented | `-- Not done`
[colossuscoin-v2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/colossuscoin-v2.js) | N/A | N/A | N/A | `-- Not done`
[colossusxt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/colossusxt.js) | ColossusXT | COLX | Dynamic | *+ Done*
[compcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/compcoin.js) | N/A | N/A | N/A | `-- Not done`
[confido](https://github.com/coincheckup/crypto-supplies/blob/master/coins/confido.js) | N/A | N/A | N/A | `-- Not done`
[copico](https://github.com/coincheckup/crypto-supplies/blob/master/coins/copico.js) | Copico | XCPO | Not Implemented | `-- Not done`
[crtcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crtcoin.js) | N/A | N/A | N/A | `-- Not done`
[cryptoescudo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoescudo.js) | N/A | N/A | N/A | `-- Not done`
[cryptoforecast](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoforecast.js) | N/A | N/A | N/A | `-- Not done`
[cryptoworldx-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoworldx-token.js) | CryptoWorldX Token | CWXT | Not Implemented | `-- Not done`
[cthulhu-offerings](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cthulhu-offerings.js) | Cthulhu Offerings | OFF | Not Implemented | `-- Not done`
[cybercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybercoin.js) | N/A | N/A | N/A | `-- Not done`
[cycling-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cycling-coin.js) | Cycling Coin | CYC | Not Implemented | `-- Not done`
[cypher](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cypher.js) | N/A | N/A | N/A | `-- Not done`
[dappster](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dappster.js) | DAPPSTER | DLISK | Not Implemented | `-- Not done`
[darklisk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/darklisk.js) | DarkLisk | DISK | Not Implemented | `-- Not done`
[dashs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dashs.js) | Dashs | DASHS | Not Implemented | `-- Not done`
[davorcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/davorcoin.js) | DavorCoin | DAV | Not Implemented | `-- Not done`
[dcorp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dcorp.js) | DCORP | DRP | Dynamic | *+ Done*
[decent-bet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decent-bet.js) | DecentBet | DBET | Not Implemented | `-- Not done`
[deltacredits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deltacredits.js) | DeltaCredits | DCRE | Not Implemented | `-- Not done`
[denarius-dnr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/denarius-dnr.js) | Denarius | DNR | Not Implemented | `-- Not done`
[destiny](https://github.com/coincheckup/crypto-supplies/blob/master/coins/destiny.js) | Destiny | DES | Not Implemented | `-- Not done`
[dfscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dfscoin.js) | N/A | N/A | N/A | `-- Not done`
[dibcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dibcoin.js) | N/A | N/A | N/A | `-- Not done`
[digital-bullion-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-bullion-gold.js) | N/A | N/A | N/A | `-- Not done`
[digital-credits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-credits.js) | N/A | N/A | N/A | `-- Not done`
[digital-developers-fund](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-developers-fund.js) | DigitalDevelopersFund | DDF | Not Implemented | `-- Not done`
[dnotes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dnotes.js) | N/A | N/A | N/A | *+ Done*
[dubstep](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dubstep.js) | N/A | N/A | N/A | `-- Not done`
[e-dinar-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/e-dinar-coin.js) | E-Dinar Coin | EDR | Not Implemented | `-- Not done`
[earthcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/earthcoin.js) | N/A | N/A | N/A | *+ Done*
[ebitcoin-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ebitcoin-cash.js) | eBitcoinCash | EBCH | Not Implemented | `-- Not done`
[ebittree-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ebittree-coin.js) | Ebittree Coin | EBT | Not Implemented | `-- Not done`
[eboostcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eboostcoin.js) | eBoost | EBST | Not Implemented | `-- Not done`
[ebtcnew](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ebtcnew.js) | eBitcoin | EBTC | Not Implemented | `-- Not done`
[eccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eccoin.js) | ECC | ECC | Not Implemented | `-- Not done`
[edu-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/edu-coin.js) | EduCoin | EDU | Not Implemented | `-- Not done`
[effect-ai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/effect-ai.js) | Effect.AI | EFX | Not Implemented | `-- Not done`
[ego](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ego.js) | N/A | N/A | N/A | `-- Not done`
[egold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/egold.js) | N/A | N/A | N/A | `-- Not done`
[elacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elacoin.js) | N/A | N/A | N/A | `-- Not done`
[elcoin-el](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elcoin-el.js) | Elcoin | EL | Not Implemented | `-- Not done`
[electrifyasia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electrifyasia.js) | Electrify.Asia | ELEC | Not Implemented | `-- Not done`
[emerald](https://github.com/coincheckup/crypto-supplies/blob/master/coins/emerald.js) | Emerald Crypto | EMD | Dynamic | *+ Done*
[enigma-project](https://github.com/coincheckup/crypto-supplies/blob/master/coins/enigma-project.js) | Enigma | ENG | Dynamic | *+ Done*
[eot-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eot-token.js) | N/A | N/A | N/A | `-- Not done`
[ereal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ereal.js) | eREAL | EREAL | Dynamic | *+ Done*
[escoro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/escoro.js) | Escroco | ESC | Not Implemented | `-- Not done`
[ethereumcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereumcash.js) | Ethereum Cash | ECASH | Not Implemented | `-- Not done`
[evotion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/evotion.js) | N/A | N/A | N/A | `-- Not done`
[exchangen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exchangen.js) | ExchangeN | EXN | Not Implemented | `-- Not done`
[farstcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/farstcoin.js) | Farstcoin | FRCT | Not Implemented | `-- Not done`
[fazzcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fazzcoin.js) | Fazzcoin | FAZZ | Not Implemented | `-- Not done`
[filecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/filecoin.js) | Filecoin [Futures] | FIL | Not Implemented | `-- Not done`
[fimkrypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fimkrypto.js) | N/A | N/A | N/A | `-- Not done`
[fincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fincoin.js) | FinCoin | FNC | Not Implemented | `-- Not done`
[firecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/firecoin.js) | Firecoin | FIRE | Not Implemented | `-- Not done`
[flappycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flappycoin.js) | N/A | N/A | N/A | `-- Not done`
[flycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flycoin.js) | Flycoin | FLY | Not Implemented | `-- Not done`
[fonziecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fonziecoin.js) | N/A | N/A | N/A | `-- Not done`
[footy-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/footy-cash.js) | N/A | N/A | N/A | `-- Not done`
[franko](https://github.com/coincheckup/crypto-supplies/blob/master/coins/franko.js) | N/A | N/A | N/A | `-- Not done`
[frankywillcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/frankywillcoin.js) | N/A | N/A | N/A | `-- Not done`
[friends](https://github.com/coincheckup/crypto-supplies/blob/master/coins/friends.js) | Friendz | FDZ | Not Implemented | `-- Not done`
[fucktoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fucktoken.js) | N/A | N/A | N/A | `-- Not done`
[fuelcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fuelcoin.js) | N/A | N/A | N/A | *+ Done*
[futcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/futcoin.js) | N/A | N/A | N/A | `-- Not done`
[futurexe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/futurexe.js) | FuturXe | FXE | Not Implemented | `-- Not done`
[gaia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gaia.js) | N/A | N/A | N/A | `-- Not done`
[game](https://github.com/coincheckup/crypto-supplies/blob/master/coins/game.js) | Game.com | GTC | Dynamic | *+ Done*
[gamechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gamechain.js) | GameChain System | GCS | Not Implemented | `-- Not done`
[gameleaguecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gameleaguecoin.js) | N/A | N/A | N/A | `-- Not done`
[gameunits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gameunits.js) | GameUnits | UNITS | Not Implemented | `-- Not done`
[ganjacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ganjacoin.js) | N/A | N/A | N/A | `-- Not done`
[gaycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gaycoin.js) | N/A | N/A | N/A | `-- Not done`
[gbcgoldcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gbcgoldcoin.js) | GBCGoldCoin | GBC | Not Implemented | `-- Not done`
[gcn-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gcn-coin.js) | GCN Coin | GCN | Not Implemented | `-- Not done`
[gems-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gems-protocol.js) | Gems | GEM | Not Implemented | `-- Not done`
[genstake](https://github.com/coincheckup/crypto-supplies/blob/master/coins/genstake.js) | N/A | N/A | N/A | `-- Not done`
[giga-watt-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/giga-watt-token.js) | N/A | N/A | N/A | `-- Not done`
[global-currency-reserve](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-currency-reserve.js) | Global Currency Reserve | GCR | Not Implemented | `-- Not done`
[global-jobcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-jobcoin.js) | Global Jobcoin | GJC | Dynamic | *+ Done*
[goldreserve](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldreserve.js) | N/A | N/A | N/A | `-- Not done`
[gpu-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gpu-coin.js) | N/A | N/A | N/A | `-- Not done`
[granitecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/granitecoin.js) | Granite | GRN | Not Implemented | `-- Not done`
[greencoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/greencoin.js) | N/A | N/A | N/A | *+ Done*
[grid](https://github.com/coincheckup/crypto-supplies/blob/master/coins/grid.js) | Grid+ | GRID | Not Implemented | `-- Not done`
[hade-platform](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hade-platform.js) | Hade Platform | HADE | Not Implemented | `-- Not done`
[happy-creator-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/happy-creator-coin.js) | N/A | N/A | N/A | `-- Not done`
[harmonycoin-hmc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/harmonycoin-hmc.js) | HarmonyCoin | HMC | Not Implemented | `-- Not done`
[hat-exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hat-exchange.js) | Hat.Exchange | HAT | Not Implemented | `-- Not done`
[hawala-today](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hawala-today.js) | N/A | N/A | N/A | `-- Not done`
[hempcoin-hmp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hempcoin-hmp.js) | HempCoin | HMP | Not Implemented | `-- Not done`
[hitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hitcoin.js) | N/A | N/A | N/A | `-- Not done`
[hive-project](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hive-project.js) | Hive Project | HVN | Not Implemented | `-- Not done`
[html-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/html-coin.js) | HTMLCOIN | HTML | Not Implemented | `-- Not done`
[hush](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hush.js) | Hush | HUSH | Not Implemented | `-- Not done`
[idice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/idice.js) | N/A | N/A | N/A | `-- Not done`
[imbrex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/imbrex.js) | imbrex | REX | Dynamic | *+ Done*
[impulsecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/impulsecoin.js) | ImpulseCoin | IMPS | Not Implemented | `-- Not done`
[india-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/india-coin.js) | India Coin | INDIA | Not Implemented | `-- Not done`
[infchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/infchain.js) | N/A | N/A | N/A | `-- Not done`
[intelligent-trading-tech](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intelligent-trading-tech.js) | N/A | N/A | N/A | `-- Not done`
[international-diamond](https://github.com/coincheckup/crypto-supplies/blob/master/coins/international-diamond.js) | N/A | N/A | N/A | `-- Not done`
[interplanetary-broadcast-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/interplanetary-broadcast-coin.js) | Interplanetary Broadcast Coin | IPBC | Not Implemented | `-- Not done`
[invisiblecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/invisiblecoin.js) | N/A | N/A | N/A | `-- Not done`
[ixledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ixledger.js) | iXledger | IXT | Dynamic | *+ Done*
[jewels](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jewels.js) | Jewels | JWL | Not Implemented | `-- Not done`
[karmacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/karmacoin.js) | Karmacoin | KARMA | Not Implemented | `-- Not done`
[kashhcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kashhcoin.js) | KashhCoin | KASHH | Not Implemented | `-- Not done`
[kayicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kayicoin.js) | N/A | N/A | N/A | `-- Not done`
[kzcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kzcash.js) | N/A | N/A | N/A | `-- Not done`
[lathaan](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lathaan.js) | N/A | N/A | N/A | `-- Not done`
[lazaruscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lazaruscoin.js) | N/A | N/A | N/A | `-- Not done`
[leafcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leafcoin.js) | N/A | N/A | N/A | `-- Not done`
[legends-room](https://github.com/coincheckup/crypto-supplies/blob/master/coins/legends-room.js) | Legends Room | LGD | Not Implemented | `-- Not done`
[lendconnect](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lendconnect.js) | N/A | N/A | N/A | `-- Not done`
[lendingblock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lendingblock.js) | Lendingblock | LND | Not Implemented | `-- Not done`
[lepen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lepen.js) | LePen | LEPEN | Not Implemented | `-- Not done`
[level-up](https://github.com/coincheckup/crypto-supplies/blob/master/coins/level-up.js) | Level Up Coin | LUC | Not Implemented | `-- Not done`
[leviar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leviar.js) | Leviar | XLC | Not Implemented | `-- Not done`
[link-platform](https://github.com/coincheckup/crypto-supplies/blob/master/coins/link-platform.js) | N/A | N/A | N/A | `-- Not done`
[linkedcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linkedcoin.js) | LinkedCoin | LKC | Not Implemented | `-- Not done`
[lltoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lltoken.js) | N/A | N/A | N/A | `-- Not done`
[locicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/locicoin.js) | LOCIcoin | LOCI | Not Implemented | `-- Not done`
[lockchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lockchain.js) | LockTrip | LOC | Not Implemented | `-- Not done`
[luckchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/luckchain.js) | LuckChain | BASH | Dynamic | *+ Done*
[macro1](https://github.com/coincheckup/crypto-supplies/blob/master/coins/macro1.js) | Macro | MCR | Not Implemented | `-- Not done`
[madcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/madcoin.js) | Madcoin | MDC | Not Implemented | `-- Not done`
[mark-space](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mark-space.js) | MARK.SPACE | MRK | Not Implemented | `-- Not done`
[medical-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medical-chain.js) | Medicalchain | MTN | Not Implemented | `-- Not done`
[mergecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mergecoin.js) | N/A | N/A | N/A | `-- Not done`
[metal-music-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metal-music-coin.js) | Metal Music Coin | MTLMC3 | Not Implemented | `-- Not done`
[mindcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mindcoin.js) | MindCoin | MND | Dynamic | *+ Done*
[miners-reward-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/miners-reward-token.js) | Miners' Reward Token | MRT | Not Implemented | `-- Not done`
[mmxvi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mmxvi.js) | N/A | N/A | N/A | `-- Not done`
[mobilecash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mobilecash.js) | N/A | N/A | N/A | `-- Not done`
[monacocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monacocoin.js) | Monoeci | XMCC | Not Implemented | `-- Not done`
[monero-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero-gold.js) | N/A | N/A | N/A | `-- Not done`
[moneta2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moneta2.js) | N/A | N/A | N/A | `-- Not done`
[napoleonx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/napoleonx.js) | NaPoleonX | NPX | Not Implemented | `-- Not done`
[natcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/natcoin.js) | N/A | N/A | N/A | `-- Not done`
[netbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/netbit.js) | N/A | N/A | N/A | `-- Not done`
[newbium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/newbium.js) | Newbium | NEWB | Dynamic | *+ Done*
[nexxus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexxus.js) | N/A | N/A | N/A | `-- Not done`
[nodecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nodecoin.js) | NodeCoin | NODC | Not Implemented | `-- Not done`
[nvo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nvo.js) | N/A | N/A | N/A | `-- Not done`
[ocow](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ocow.js) | N/A | N/A | N/A | `-- Not done`
[ongsocial](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ongsocial.js) | onG.social | ONG | Not Implemented | `-- Not done`
[operand](https://github.com/coincheckup/crypto-supplies/blob/master/coins/operand.js) | Operand | OP | Not Implemented | `-- Not done`
[opescoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/opescoin.js) | Opescoin | OPES | Not Implemented | `-- Not done`
[orlycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/orlycoin.js) | N/A | N/A | N/A | `-- Not done`
[osmiumcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/osmiumcoin.js) | N/A | N/A | N/A | `-- Not done`
[ost](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ost.js) | OST | OST | Not Implemented | `-- Not done`
[ox-fina](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ox-fina.js) | OX Fina | OX | Dynamic | *+ Done*
[p7coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/p7coin.js) | N/A | N/A | N/A | `-- Not done`
[pabyosi-coin-special](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pabyosi-coin-special.js) | Pabyosi Coin (Special) | PCS | Not Implemented | `-- Not done`
[paycoin2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paycoin2.js) | PayCoin | XPY | Not Implemented | `-- Not done`
[paypeer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paypeer.js) | N/A | N/A | N/A | `-- Not done`
[pinkdog](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pinkdog.js) | N/A | N/A | N/A | `-- Not done`
[pirate-blocks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pirate-blocks.js) | Pirate Blocks | SKULL | Not Implemented | `-- Not done`
[pizzacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pizzacoin.js) | N/A | N/A | N/A | `-- Not done`
[plexcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/plexcoin.js) | PlexCoin | PLX | Not Implemented | `-- Not done`
[pluscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pluscoin.js) | PlusCoin | PLC | Dynamic | *+ Done*
[pokecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pokecoin.js) | PokeCoin | POKE | Not Implemented | `-- Not done`
[polymath-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polymath-network.js) | Polymath | POLY | Dynamic | *+ Done*
[primulon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primulon.js) | Primulon | PRIMU | Not Implemented | `-- Not done`
[printerium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/printerium.js) | Printerium | PRX | Not Implemented | `-- Not done`
[project-decorum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/project-decorum.js) | N/A | N/A | N/A | `-- Not done`
[prospectors-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prospectors-gold.js) | N/A | N/A | N/A | `-- Not done`
[psilocybin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/psilocybin.js) | N/A | N/A | N/A | `-- Not done`
[pulse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pulse.js) | N/A | N/A | N/A | `-- Not done`
[pundi-x-old](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pundi-x-old.js) | N/A | N/A | N/A | `-- Not done`
[pundi-x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pundi-x.js) | Pundi X | NPXS | Not Implemented | `-- Not done`
[pura](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pura.js) | Pura | PURA | Dynamic | *+ Done*
[px](https://github.com/coincheckup/crypto-supplies/blob/master/coins/px.js) | PX | PX | Not Implemented | `-- Not done`
[qora](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qora.js) | Qora | QORA | Not Implemented | `-- Not done`
[rawcoin2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rawcoin2.js) | Rawcoin | XRC | Not Implemented | `-- Not done`
[real-estate-tokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/real-estate-tokens.js) | N/A | N/A | N/A | `-- Not done`
[rebl](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rebl.js) | REBL | REBL | Not Implemented | `-- Not done`
[reecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/reecoin.js) | ReeCoin | REE | Not Implemented | `-- Not done`
[regacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/regacoin.js) | Regacoin | REGA | Not Implemented | `-- Not done`
[remicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/remicoin.js) | N/A | N/A | N/A | `-- Not done`
[restart-energy-mwat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/restart-energy-mwat.js) | Restart Energy MWAT | MWAT | Not Implemented | `-- Not done`
[rhfcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rhfcoin.js) | N/A | N/A | N/A | `-- Not done`
[ride-my-car](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ride-my-car.js) | N/A | N/A | N/A | `-- Not done`
[ripto-bux](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ripto-bux.js) | N/A | N/A | N/A | `-- Not done`
[roulettetoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/roulettetoken.js) | RouletteToken | RLT | Dynamic | *+ Done*
[royal-kingdom-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/royal-kingdom-coin.js) | Royal Kingdom Coin | RKC | Dynamic | *+ Done*
[royalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/royalcoin.js) | RoyalCoin | ROYAL | Not Implemented | `-- Not done`
[rsgpcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rsgpcoin.js) | RSGPcoin | RSGP | Not Implemented | `-- Not done`
[rublebit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rublebit.js) | N/A | N/A | N/A | `-- Not done`
[rupaya](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rupaya.js) | Rupaya | RUPX | Not Implemented | `-- Not done`
[rustbits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rustbits.js) | N/A | N/A | N/A | `-- Not done`
[sacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sacoin.js) | N/A | N/A | N/A | `-- Not done`
[safecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/safecoin.js) | N/A | N/A | N/A | `-- Not done`
[sand-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sand-coin.js) | N/A | N/A | N/A | `-- Not done`
[satoshimadness](https://github.com/coincheckup/crypto-supplies/blob/master/coins/satoshimadness.js) | SatoshiMadness | MAD | Not Implemented | `-- Not done`
[scorecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/scorecoin.js) | Scorecoin | SCORE | Not Implemented | `-- Not done`
[scryinfo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/scryinfo.js) | Scry.info | DDD | Dynamic | *+ Done*
[segwit2x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/segwit2x.js) | SegWit2x | B2X | Not Implemented | `-- Not done`
[selfiecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/selfiecoin.js) | Selfiecoin | SLFI | Not Implemented | `-- Not done`
[shadowcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shadowcash.js) | ShadowCash | SDC | Not Implemented | `-- Not done`
[shield-xsh](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shield-xsh.js) | SHIELD | XSH | Not Implemented | `-- Not done`
[shilling](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shilling.js) | Shilling | SH | Dynamic | *+ Done*
[shorty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shorty.js) | Shorty | SHORTY | Not Implemented | `-- Not done`
[signal-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/signal-token.js) | Spectiv | SIG | Not Implemented | `-- Not done`
[slimcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/slimcoin.js) | N/A | N/A | N/A | `-- Not done`
[smartcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartcash.js) | SmartCash | SMART | Not Implemented | `-- Not done`
[snakeeyes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/snakeeyes.js) | N/A | N/A | N/A | `-- Not done`
[socialcoin-socc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/socialcoin-socc.js) | SocialCoin | SOCC | Not Implemented | `-- Not done`
[sociall](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sociall.js) | Sociall | SCL | Not Implemented | `-- Not done`
[sojourn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sojourn.js) | N/A | N/A | N/A | `-- Not done`
[spectre-dividend](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spectre-dividend.js) | Spectre.ai Dividend Token | SXDT | Not Implemented | `-- Not done`
[spectre-utility](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spectre-utility.js) | Spectre.ai Utility Token | SXUT | Not Implemented | `-- Not done`
[spherepay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spherepay.js) | N/A | N/A | N/A | `-- Not done`
[sportscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sportscoin.js) | SportsCoin | SPORT | Not Implemented | `-- Not done`
[sportyco](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sportyco.js) | SportyCo | SPF | Not Implemented | `-- Not done`
[spots](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spots.js) | N/A | N/A | N/A | `-- Not done`
[spreadcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spreadcoin.js) | SpreadCoin | SPR | Dynamic | *+ Done*
[sproutsextreme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sproutsextreme.js) | N/A | N/A | N/A | `-- Not done`
[starchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starchain.js) | StarChain | STC | Not Implemented | `-- Not done`
[starcointv](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starcointv.js) | StarCoin | KST | Not Implemented | `-- Not done`
[stealth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stealth.js) | Stealth | XST | Dynamic | *+ Done*
[steps](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steps.js) | Steps | STEPS | Not Implemented | `-- Not done`
[stex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stex.js) | STEX | STEX | Not Implemented | `-- Not done`
[strikebitclub](https://github.com/coincheckup/crypto-supplies/blob/master/coins/strikebitclub.js) | StrikeBitClub | SBC | Not Implemented | `-- Not done`
[student-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/student-coin.js) | bitJob | STU | Not Implemented | `-- Not done`
[swagbucks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swagbucks.js) | N/A | N/A | N/A | *+ Done*
[swaptoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swaptoken.js) | N/A | N/A | N/A | `-- Not done`
[swarm-fund](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swarm-fund.js) | Swarm | SWM | Not Implemented | `-- Not done`
[sydpak](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sydpak.js) | N/A | N/A | N/A | `-- Not done`
[tagrcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tagrcoin.js) | TAGRcoin | TAGR | Not Implemented | `-- Not done`
[tattoocoin-limited](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tattoocoin-limited.js) | Tattoocoin (Limited Edition) | TLE | Not Implemented | `-- Not done`
[tattoocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tattoocoin.js) | Tattoocoin (Standard Edition) | TSE | Not Implemented | `-- Not done`
[teamup](https://github.com/coincheckup/crypto-supplies/blob/master/coins/teamup.js) | N/A | N/A | N/A | `-- Not done`
[techshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/techshares.js) | TechShares | THS | Not Implemented | `-- Not done`
[tezos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tezos.js) | Tezos (Pre-Launch) | XTZ | Not Implemented | `-- Not done`
[the-vegan-initiative](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-vegan-initiative.js) | N/A | N/A | N/A | `-- Not done`
[thecreed](https://github.com/coincheckup/crypto-supplies/blob/master/coins/thecreed.js) | N/A | N/A | N/A | `-- Not done`
[tiesdb](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tiesdb.js) | Ties.DB | TIE | Not Implemented | `-- Not done`
[timescoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/timescoin.js) | N/A | N/A | N/A | `-- Not done`
[titanium-bar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/titanium-bar.js) | Titanium BAR | TBAR | Dynamic | *+ Done*
[titanium-blockchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/titanium-blockchain.js) | Titanium Blockchain | BAR | Dynamic | *+ Done*
[todaycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/todaycoin.js) | TodayCoin | TODAY | Not Implemented | `-- Not done`
[topaz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/topaz.js) | N/A | N/A | N/A | `-- Not done`
[torcoin-tor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/torcoin-tor.js) | N/A | N/A | N/A | `-- Not done`
[trackr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trackr.js) | CryptoInsight | TKR | Not Implemented | `-- Not done`
[triaconta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/triaconta.js) | Triaconta | TRIA | Dynamic | *+ Done*
[trickycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trickycoin.js) | N/A | N/A | N/A | `-- Not done`
[trident](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trident.js) | Trident Group | TRDT | Not Implemented | `-- Not done`
[trueusd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trueusd.js) | TrueUSD | TUSD | Not Implemented | `-- Not done`
[tychocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tychocoin.js) | N/A | N/A | N/A | `-- Not done`
[ucash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ucash.js) | U.CASH | UCASH | Not Implemented | `-- Not done`
[ucom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ucom.js) | United Crypto Community | UCOM | Not Implemented | `-- Not done`
[ug-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ug-token.js) | N/A | N/A | N/A | `-- Not done`
[uncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uncoin.js) | UNCoin | UNC | Not Implemented | `-- Not done`
[uniform-fiscal-object](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uniform-fiscal-object.js) | Uniform Fiscal Object | UFO | Not Implemented | `-- Not done`
[unikoin-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unikoin-gold.js) | Unikoin Gold | UKG | Dynamic | *+ Done*
[unity-ingot](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unity-ingot.js) | N/A | N/A | N/A | `-- Not done`
[unrealcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unrealcoin.js) | N/A | N/A | N/A | `-- Not done`
[uro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uro.js) | Uro | URO | Not Implemented | `-- Not done`
[uttoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uttoken.js) | United Traders Token | UTT | Not Implemented | `-- Not done`
[valorbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/valorbit.js) | N/A | N/A | N/A | `-- Not done`
[vip-tokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vip-tokens.js) | N/A | N/A | N/A | `-- Not done`
[virtacoinplus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virtacoinplus.js) | N/A | N/A | N/A | *+ Done*
[virtualcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virtualcoin.js) | N/A | N/A | N/A | `-- Not done`
[voisecom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/voisecom.js) | Voise | VOISE | Not Implemented | `-- Not done`
[voyacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/voyacoin.js) | N/A | N/A | N/A | `-- Not done`
[vpncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vpncoin.js) | N/A | N/A | N/A | *+ Done*
[vsync-vsx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vsync-vsx.js) | Vsync | VSX | Not Implemented | `-- Not done`
[waltonchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/waltonchain.js) | Waltonchain | WTC | Dynamic | *+ Done*
[warp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/warp.js) | N/A | N/A | N/A | `-- Not done`
[wayguide](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wayguide.js) | N/A | N/A | N/A | `-- Not done`
[win-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/win-coin.js) | WINCOIN | WC | Not Implemented | `-- Not done`
[women](https://github.com/coincheckup/crypto-supplies/blob/master/coins/women.js) | WomenCoin | WOMEN | Not Implemented | `-- Not done`
[wowcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wowcoin.js) | N/A | N/A | N/A | `-- Not done`
[x2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/x2.js) | X2 | X2 | Not Implemented | `-- Not done`
[xaucoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xaucoin.js) | N/A | N/A | N/A | `-- Not done`
[xios](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xios.js) | Xios | XIOS | Not Implemented | `-- Not done`
[xonecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xonecoin.js) | N/A | N/A | N/A | `-- Not done`
[xpa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xpa.js) | XPA | XPA | Not Implemented | `-- Not done`
[yacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yacoin.js) | N/A | N/A | N/A | `-- Not done`
[yashcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yashcoin.js) | N/A | N/A | N/A | `-- Not done`
[zcash-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zcash-gold.js) | Zlancer | ZCG | Dynamic | *+ Done*
[zonecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zonecoin.js) | N/A | N/A | N/A | `-- Not done`