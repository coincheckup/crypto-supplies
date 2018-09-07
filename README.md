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

*Total*: 1810 -- *Implemented*: 848 -- *To do*: 962


ID | Name | Symbol | Implementation | Status
--- | --- | --- | --- | ---
[bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin.js) | [Bitcoin](https://coincheckup.com/coins/bitcoin) | BTC | Dynamic | :white_check_mark: Done
[ethereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum.js) | [Ethereum](https://coincheckup.com/coins/ethereum) | ETH | Dynamic | :white_check_mark: Done
[ripple](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ripple.js) | [Ripple](https://coincheckup.com/coins/ripple) | XRP | Dynamic | :white_check_mark: Done
[bitcoin-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-cash.js) | [Bitcoin Cash](https://coincheckup.com/coins/bitcoin-cash) | BCH | Dynamic | :white_check_mark: Done
[eos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eos.js) | [EOS](https://coincheckup.com/coins/eos) | EOS | Dynamic | :white_check_mark: Done
[litecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin.js) | [Litecoin](https://coincheckup.com/coins/litecoin) | LTC | Dynamic | :white_check_mark: Done
[stellar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stellar.js) | [Stellar](https://coincheckup.com/coins/stellar) | XLM | Dynamic | :white_check_mark: Done
[cardano](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cardano.js) | [Cardano](https://coincheckup.com/coins/cardano) | ADA | Static | :white_check_mark: Done
[tron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tron.js) | [TRON](https://coincheckup.com/coins/tron) | TRX | Dynamic | :white_check_mark: Done
[iota](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iota.js) | [IOTA](https://coincheckup.com/coins/iota) | MIOTA | Static | :white_check_mark: Done
[tether](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tether.js) | [Tether](https://coincheckup.com/coins/tether) | USDT | CoinMarketCap | :white_check_mark: Done
[neo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neo.js) | [NEO](https://coincheckup.com/coins/neo) | NEO | Static | :white_check_mark: Done
[dash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dash.js) | [Dash](https://coincheckup.com/coins/dash) | DASH | Dynamic | :white_check_mark: Done
[monero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero.js) | [Monero](https://coincheckup.com/coins/monero) | XMR | Dynamic | :white_check_mark: Done
[binance-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/binance-coin.js) | [Binance Coin](https://coincheckup.com/coins/binance-coin) | BNB | Dynamic | :white_check_mark: Done
[ethereum-classic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-classic.js) | [Ethereum Classic](https://coincheckup.com/coins/ethereum-classic) | ETC | Dynamic | :white_check_mark: Done
[vechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vechain.js) | [VeChain](https://coincheckup.com/coins/vechain) | VEN | Dynamic | :white_check_mark: Done
[nem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nem.js) | [NEM](https://coincheckup.com/coins/nem) | XEM | Dynamic | :white_check_mark: Done
[omisego](https://github.com/coincheckup/crypto-supplies/blob/master/coins/omisego.js) | [OmiseGO](https://coincheckup.com/coins/omisego) | OMG | Dynamic | :white_check_mark: Done
[qtum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qtum.js) | [Qtum](https://coincheckup.com/coins/qtum) | QTUM | Dynamic | :white_check_mark: Done
[zcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zcash.js) | [Zcash](https://coincheckup.com/coins/zcash) | ZEC | Dynamic | :white_check_mark: Done
[ontology](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ontology.js) | [Ontology](https://coincheckup.com/coins/ontology) | ONT | Not Implemented | :x: Not done
[icon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icon.js) | [ICON](https://coincheckup.com/coins/icon) | ICX | Dynamic | :white_check_mark: Done
[lisk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lisk.js) | [Lisk](https://coincheckup.com/coins/lisk) | LSK | Not Implemented | :x: Not done
[decred](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decred.js) | [Decred](https://coincheckup.com/coins/decred) | DCR | Dynamic | :white_check_mark: Done
[bytecoin-bcn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bytecoin-bcn.js) | [Bytecoin](https://coincheckup.com/coins/bytecoin-bcn) | BCN | Dynamic | :white_check_mark: Done
[zilliqa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zilliqa.js) | [Zilliqa](https://coincheckup.com/coins/zilliqa) | ZIL | Dynamic | :white_check_mark: Done
[aeternity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aeternity.js) | [Aeternity](https://coincheckup.com/coins/aeternity) | AE | Dynamic | :white_check_mark: Done
[bitcoin-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-gold.js) | [Bitcoin Gold](https://coincheckup.com/coins/bitcoin-gold) | BTG | Dynamic | :white_check_mark: Done
[siacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/siacoin.js) | [Siacoin](https://coincheckup.com/coins/siacoin) | SC | Dynamic | :white_check_mark: Done
[bytom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bytom.js) | [Bytom](https://coincheckup.com/coins/bytom) | BTM | Dynamic | :white_check_mark: Done
[0x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/0x.js) | [0x](https://coincheckup.com/coins/0x) | ZRX | Dynamic | :white_check_mark: Done
[bitshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitshares.js) | [BitShares](https://coincheckup.com/coins/bitshares) | BTS | Static | :white_check_mark: Done
[mixin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mixin.js) | [Mixin](https://coincheckup.com/coins/mixin) | XIN | Dynamic | :white_check_mark: Done
[verge](https://github.com/coincheckup/crypto-supplies/blob/master/coins/verge.js) | [Verge](https://coincheckup.com/coins/verge) | XVG | Dynamic | :white_check_mark: Done
[steem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steem.js) | [Steem](https://coincheckup.com/coins/steem) | STEEM | Dynamic | :white_check_mark: Done
[augur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/augur.js) | [Augur](https://coincheckup.com/coins/augur) | REP | Dynamic | :white_check_mark: Done
[maker](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maker.js) | [Maker](https://coincheckup.com/coins/maker) | MKR | Dynamic | :white_check_mark: Done
[dogecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dogecoin.js) | [Dogecoin](https://coincheckup.com/coins/dogecoin) | DOGE | Dynamic | :white_check_mark: Done
[nano](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nano.js) | [Nano](https://coincheckup.com/coins/nano) | NANO | Static | :white_check_mark: Done
[rchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rchain.js) | [RChain](https://coincheckup.com/coins/rchain) | RHOC | Dynamic | :white_check_mark: Done
[bitcoin-diamond](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-diamond.js) | [Bitcoin Diamond](https://coincheckup.com/coins/bitcoin-diamond) | BCD | Dynamic | :white_check_mark: Done
[waves](https://github.com/coincheckup/crypto-supplies/blob/master/coins/waves.js) | [Waves](https://coincheckup.com/coins/waves) | WAVES | Static | :white_check_mark: Done
[bitcoin-private](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-private.js) | [Bitcoin Private](https://coincheckup.com/coins/bitcoin-private) | BTCP | Dynamic | :white_check_mark: Done
[wanchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wanchain.js) | [Wanchain](https://coincheckup.com/coins/wanchain) | WAN | Static | :white_check_mark: Done
[golem-network-tokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golem-network-tokens.js) | [Golem](https://coincheckup.com/coins/golem-network-tokens) | GNT | Dynamic | :white_check_mark: Done
[stratis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stratis.js) | [Stratis](https://coincheckup.com/coins/stratis) | STRAT | Dynamic | :white_check_mark: Done
[digibyte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digibyte.js) | [DigiByte](https://coincheckup.com/coins/digibyte) | DGB | Dynamic | :white_check_mark: Done
[walton](https://github.com/coincheckup/crypto-supplies/blob/master/coins/walton.js) | [Waltonchain](https://coincheckup.com/coins/walton) | WTC | Dynamic | :white_check_mark: Done
[kucoin-shares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kucoin-shares.js) | [KuCoin Shares](https://coincheckup.com/coins/kucoin-shares) | KCS | Dynamic | :white_check_mark: Done
[nectar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nectar.js) | [Nectar](https://coincheckup.com/coins/nectar) | NEC | Dynamic | :white_check_mark: Done
[digixdao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digixdao.js) | [DigixDAO](https://coincheckup.com/coins/digixdao) | DGD | Dynamic | :white_check_mark: Done
[nebulas-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nebulas-token.js) | [Nebulas](https://coincheckup.com/coins/nebulas-token) | NAS | Dynamic | :white_check_mark: Done
[hshare](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hshare.js) | [Hshare](https://coincheckup.com/coins/hshare) | HSR | Dynamic | :white_check_mark: Done
[populous](https://github.com/coincheckup/crypto-supplies/blob/master/coins/populous.js) | [Populous](https://coincheckup.com/coins/populous) | PPT | Dynamic | :white_check_mark: Done
[status](https://github.com/coincheckup/crypto-supplies/blob/master/coins/status.js) | [Status](https://coincheckup.com/coins/status) | SNT | Dynamic | :white_check_mark: Done
[huobi-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/huobi-token.js) | [Huobi Token](https://coincheckup.com/coins/huobi-token) | HT | Dynamic | :white_check_mark: Done
[iostoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iostoken.js) | [IOStoken](https://coincheckup.com/coins/iostoken) | IOST | Dynamic | :white_check_mark: Done
[loopring](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loopring.js) | [Loopring](https://coincheckup.com/coins/loopring) | LRC | Dynamic | :white_check_mark: Done
[aion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aion.js) | [Aion](https://coincheckup.com/coins/aion) | AION | Dynamic | :white_check_mark: Done
[gxchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gxchain.js) | [GXChain](https://coincheckup.com/coins/gxchain) | GXS | Dynamic | :white_check_mark: Done
[komodo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/komodo.js) | [Komodo](https://coincheckup.com/coins/komodo) | KMD | Dynamic | :white_check_mark: Done
[cryptonex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptonex.js) | [Cryptonex](https://coincheckup.com/coins/cryptonex) | CNX | Dynamic | :white_check_mark: Done
[bancor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bancor.js) | [Bancor](https://coincheckup.com/coins/bancor) | BNT | Dynamic | :white_check_mark: Done
[reddcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/reddcoin.js) | [ReddCoin](https://coincheckup.com/coins/reddcoin) | RDD | Dynamic | :white_check_mark: Done
[moac](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moac.js) | [MOAC](https://coincheckup.com/coins/moac) | MOAC | Dynamic | :white_check_mark: Done
[ark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ark.js) | [Ark](https://coincheckup.com/coins/ark) | ARK | Dynamic | :white_check_mark: Done
[maidsafecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maidsafecoin.js) | [MaidSafeCoin](https://coincheckup.com/coins/maidsafecoin) | MAID | Dynamic | :white_check_mark: Done
[ardor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ardor.js) | [Ardor](https://coincheckup.com/coins/ardor) | ARDR | Static | :white_check_mark: Done
[monacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monacoin.js) | [MonaCoin](https://coincheckup.com/coins/monacoin) | MONA | Dynamic | :white_check_mark: Done
[centrality](https://github.com/coincheckup/crypto-supplies/blob/master/coins/centrality.js) | [Centrality](https://coincheckup.com/coins/centrality) | CENNZ | Dynamic | :white_check_mark: Done
[aelf](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aelf.js) | [aelf](https://coincheckup.com/coins/aelf) | ELF | Dynamic | :white_check_mark: Done
[dentacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dentacoin.js) | [Dentacoin](https://coincheckup.com/coins/dentacoin) | DCN | Dynamic | :white_check_mark: Done
[funfair](https://github.com/coincheckup/crypto-supplies/blob/master/coins/funfair.js) | [FunFair](https://coincheckup.com/coins/funfair) | FUN | Dynamic | :white_check_mark: Done
[kyber-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kyber-network.js) | [Kyber Network](https://coincheckup.com/coins/kyber-network) | KNC | Dynamic | :white_check_mark: Done
[veritaseum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veritaseum.js) | [Veritaseum](https://coincheckup.com/coins/veritaseum) | VERI | Dynamic | :white_check_mark: Done
[emercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/emercoin.js) | [Emercoin](https://coincheckup.com/coins/emercoin) | EMC | Dynamic | :white_check_mark: Done
[gas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gas.js) | [Gas](https://coincheckup.com/coins/gas) | GAS | Not Implemented | :x: Not done
[dropil](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dropil.js) | [Dropil](https://coincheckup.com/coins/dropil) | DROP | Dynamic | :white_check_mark: Done
[mithril](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mithril.js) | [Mithril](https://coincheckup.com/coins/mithril) | MITH | Dynamic | :white_check_mark: Done
[pivx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pivx.js) | [PIVX](https://coincheckup.com/coins/pivx) | PIVX | Dynamic | :white_check_mark: Done
[enigma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/enigma.js) | [Enigma](https://coincheckup.com/coins/enigma) | ENG | Dynamic | :white_check_mark: Done
[bibox-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bibox-token.js) | [Bibox Token](https://coincheckup.com/coins/bibox-token) | BIX | Dynamic | :white_check_mark: Done
[decentraland](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decentraland.js) | [Decentraland](https://coincheckup.com/coins/decentraland) | MANA | Dynamic | :white_check_mark: Done
[syscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/syscoin.js) | [Syscoin](https://coincheckup.com/coins/syscoin) | SYS | Dynamic | :white_check_mark: Done
[fusion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fusion.js) | [Fusion](https://coincheckup.com/coins/fusion) | FSN | Dynamic | :white_check_mark: Done
[elastos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elastos.js) | [Elastos](https://coincheckup.com/coins/elastos) | ELA | Not Implemented | :x: Not done
[nxt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nxt.js) | [Nxt](https://coincheckup.com/coins/nxt) | NXT | Static | :white_check_mark: Done
[cybermiles](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybermiles.js) | [CyberMiles](https://coincheckup.com/coins/cybermiles) | CMT | Dynamic | :white_check_mark: Done
[kin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kin.js) | [Kin](https://coincheckup.com/coins/kin) | KIN | Dynamic | :white_check_mark: Done
[dragonchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dragonchain.js) | [Dragonchain](https://coincheckup.com/coins/dragonchain) | DRGN | Dynamic | :white_check_mark: Done
[factom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/factom.js) | [Factom](https://coincheckup.com/coins/factom) | FCT | Not Implemented | :x: Not done
[ethos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethos.js) | [Ethos](https://coincheckup.com/coins/ethos) | ETHOS | Dynamic | :white_check_mark: Done
[lightchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lightchain.js) | [LightChain](https://coincheckup.com/coins/lightchain) | LIGHT | Dynamic | :white_check_mark: Done
[qash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qash.js) | [QASH](https://coincheckup.com/coins/qash) | QASH | Dynamic | :white_check_mark: Done
[loom-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loom-network.js) | [Loom Network](https://coincheckup.com/coins/loom-network) | LOOM | Dynamic | :white_check_mark: Done
[zcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zcoin.js) | [ZCoin](https://coincheckup.com/coins/zcoin) | XZC | Dynamic | :white_check_mark: Done
[docademic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/docademic.js) | [Docademic](https://coincheckup.com/coins/docademic) | MTC | Dynamic | :white_check_mark: Done
[waykichain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/waykichain.js) | [WaykiChain](https://coincheckup.com/coins/waykichain) | WICC | Dynamic | :white_check_mark: Done
[bnktothefuture](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bnktothefuture.js) | [BnkToTheFuture](https://coincheckup.com/coins/bnktothefuture) | BFT | Dynamic | :white_check_mark: Done
[polymath](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polymath.js) | [Polymath](https://coincheckup.com/coins/polymath) | POLY | Dynamic | :white_check_mark: Done
[infinity-economics](https://github.com/coincheckup/crypto-supplies/blob/master/coins/infinity-economics.js) | [Infinity Economics](https://coincheckup.com/coins/infinity-economics) | XIN | Static | :white_check_mark: Done
[scry.info](https://github.com/coincheckup/crypto-supplies/blob/master/coins/scry.info.js) | [Scry.info](https://coincheckup.com/coins/scry.info) | DDD | Dynamic | :white_check_mark: Done
[nuls](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nuls.js) | [Nuls](https://coincheckup.com/coins/nuls) | NULS | Dynamic | :white_check_mark: Done
[paypex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paypex.js) | [Paypex](https://coincheckup.com/coins/paypex) | PAYX | Dynamic | :white_check_mark: Done
[substratum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/substratum.js) | [Substratum](https://coincheckup.com/coins/substratum) | SUB | Dynamic | :white_check_mark: Done
[true-usd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/true-usd.js) | [TrueUSD](https://coincheckup.com/coins/true-usd) | TUSD | Dynamic | :white_check_mark: Done
[blocknet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blocknet.js) | [Blocknet](https://coincheckup.com/coins/blocknet) | BLOCK | Dynamic | :white_check_mark: Done
[cortex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cortex.js) | [Cortex](https://coincheckup.com/coins/cortex) | CTXC | Dynamic | :white_check_mark: Done
[theta-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/theta-token.js) | [Theta Token](https://coincheckup.com/coins/theta-token) | THETA | Dynamic | :white_check_mark: Done
[monaco](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monaco.js) | [Monaco](https://coincheckup.com/coins/monaco) | MCO | Dynamic | :white_check_mark: Done
[byteball](https://github.com/coincheckup/crypto-supplies/blob/master/coins/byteball.js) | [Byteball Bytes](https://coincheckup.com/coins/byteball) | GBYTE | Not Implemented | :x: Not done
[storm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storm.js) | [Storm](https://coincheckup.com/coins/storm) | STORM | Dynamic | :white_check_mark: Done
[game.com](https://github.com/coincheckup/crypto-supplies/blob/master/coins/game.com.js) | [Game.com](https://coincheckup.com/coins/game.com) | GTC | Dynamic | :white_check_mark: Done
[power-ledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/power-ledger.js) | [Power Ledger](https://coincheckup.com/coins/power-ledger) | POWR | Dynamic | :white_check_mark: Done
[wax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wax.js) | [WAX](https://coincheckup.com/coins/wax) | WAX | Dynamic | :white_check_mark: Done
[electroneum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electroneum.js) | [Electroneum](https://coincheckup.com/coins/electroneum) | ETN | Dynamic | :white_check_mark: Done
[nexus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexus.js) | [Nexus](https://coincheckup.com/coins/nexus) | NXS | Dynamic | :white_check_mark: Done
[zencash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zencash.js) | [ZenCash](https://coincheckup.com/coins/zencash) | ZEN | Not Implemented | :x: Not done
[eosdac](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eosdac.js) | [eosDAC](https://coincheckup.com/coins/eosdac) | EOSDAC | Dynamic | :white_check_mark: Done
[revain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/revain.js) | [Revain](https://coincheckup.com/coins/revain) | R | Dynamic | :white_check_mark: Done
[deepbrain-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deepbrain-chain.js) | [DeepBrain Chain](https://coincheckup.com/coins/deepbrain-chain) | DBC | Not Implemented | :x: Not done
[rlc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rlc.js) | [iExec RLC](https://coincheckup.com/coins/rlc) | RLC | Dynamic | :white_check_mark: Done
[chainlink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chainlink.js) | [ChainLink](https://coincheckup.com/coins/chainlink) | LINK | Dynamic | :white_check_mark: Done
[iconomi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iconomi.js) | [Iconomi](https://coincheckup.com/coins/iconomi) | ICN | Dynamic | :white_check_mark: Done
[gifto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gifto.js) | [Gifto](https://coincheckup.com/coins/gifto) | GTO | Dynamic | :white_check_mark: Done
[bitcoindark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoindark.js) | [BitcoinDark](https://coincheckup.com/coins/bitcoindark) | BTCD | Not Implemented | :x: Not done
[storj](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storj.js) | [Storj](https://coincheckup.com/coins/storj) | STORJ | Dynamic | :white_check_mark: Done
[streamr-datacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/streamr-datacoin.js) | [Streamr DATAcoin](https://coincheckup.com/coins/streamr-datacoin) | DATA | Dynamic | :white_check_mark: Done
[sonm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sonm.js) | [SONM](https://coincheckup.com/coins/sonm) | SNM | Dynamic | :white_check_mark: Done
[matrix-ai-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/matrix-ai-network.js) | [Matrix AI Network](https://coincheckup.com/coins/matrix-ai-network) | MAN | Dynamic | :white_check_mark: Done
[salt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/salt.js) | [SALT](https://coincheckup.com/coins/salt) | SALT | Dynamic | :white_check_mark: Done
[civic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/civic.js) | [Civic](https://coincheckup.com/coins/civic) | CVC | Dynamic | :white_check_mark: Done
[high-performance-blockchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/high-performance-blockchain.js) | [High Performance Blockchain](https://coincheckup.com/coins/high-performance-blockchain) | HPB | Dynamic | :white_check_mark: Done
[singularitynet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/singularitynet.js) | [SingularityNET](https://coincheckup.com/coins/singularitynet) | AGI | Dynamic | :white_check_mark: Done
[tenx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tenx.js) | [TenX](https://coincheckup.com/coins/tenx) | PAY | Dynamic | :white_check_mark: Done
[request-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/request-network.js) | [Request Network](https://coincheckup.com/coins/request-network) | REQ | Dynamic | :white_check_mark: Done
[nucleus-vision](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nucleus-vision.js) | [Nucleus Vision](https://coincheckup.com/coins/nucleus-vision) | NCASH | Dynamic | :white_check_mark: Done
[achain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/achain.js) | [Achain](https://coincheckup.com/coins/achain) | ACT | Static | :white_check_mark: Done
[asch](https://github.com/coincheckup/crypto-supplies/blob/master/coins/asch.js) | [Asch](https://coincheckup.com/coins/asch) | XAS | Not Implemented | :x: Not done
[holo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/holo.js) | [Holo](https://coincheckup.com/coins/holo) | HOT | Dynamic | :white_check_mark: Done
[aragon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aragon.js) | [Aragon](https://coincheckup.com/coins/aragon) | ANT | Dynamic | :white_check_mark: Done
[medishares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medishares.js) | [MediShares](https://coincheckup.com/coins/medishares) | MDS | Dynamic | :white_check_mark: Done
[neblio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neblio.js) | [Neblio](https://coincheckup.com/coins/neblio) | NEBL | Dynamic | :white_check_mark: Done
[nexo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexo.js) | [Nexo](https://coincheckup.com/coins/nexo) | NEXO | Dynamic | :white_check_mark: Done
[gnosis-gno](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gnosis-gno.js) | [Gnosis](https://coincheckup.com/coins/gnosis-gno) | GNO | Dynamic | :white_check_mark: Done
[time-new-bank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/time-new-bank.js) | [Time New Bank](https://coincheckup.com/coins/time-new-bank) | TNB | Dynamic | :white_check_mark: Done
[skycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skycoin.js) | [Skycoin](https://coincheckup.com/coins/skycoin) | SKY | Not Implemented | :x: Not done
[cybervein](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybervein.js) | [CyberVein](https://coincheckup.com/coins/cybervein) | CVT | Dynamic | :white_check_mark: Done
[smartmesh](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartmesh.js) | [SmartMesh](https://coincheckup.com/coins/smartmesh) | SMT | Dynamic | :white_check_mark: Done
[arcblock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arcblock.js) | [Arcblock](https://coincheckup.com/coins/arcblock) | ABT | Dynamic | :white_check_mark: Done
[all-sports](https://github.com/coincheckup/crypto-supplies/blob/master/coins/all-sports.js) | [All Sports](https://coincheckup.com/coins/all-sports) | SOC | Dynamic | :white_check_mark: Done
[ruff](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ruff.js) | [Ruff](https://coincheckup.com/coins/ruff) | RUFF | Dynamic | :white_check_mark: Done
[santiment](https://github.com/coincheckup/crypto-supplies/blob/master/coins/santiment.js) | [Santiment Network Token](https://coincheckup.com/coins/santiment) | SAN | Dynamic | :white_check_mark: Done
[dew](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dew.js) | [DEW](https://coincheckup.com/coins/dew) | DEW | Dynamic | :white_check_mark: Done
[educare](https://github.com/coincheckup/crypto-supplies/blob/master/coins/educare.js) | [EDUCare](https://coincheckup.com/coins/educare) | EKT | Dynamic | :white_check_mark: Done
[bottos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bottos.js) | [Bottos](https://coincheckup.com/coins/bottos) | BTO | Dynamic | :white_check_mark: Done
[cindicator](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cindicator.js) | [Cindicator](https://coincheckup.com/coins/cindicator) | CND | Dynamic | :white_check_mark: Done
[bitcoin-interest](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-interest.js) | [Bitcoin Interest](https://coincheckup.com/coins/bitcoin-interest) | BCI | Not Implemented | :x: Not done
[dai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dai.js) | [Dai](https://coincheckup.com/coins/dai) | DAI | Dynamic | :white_check_mark: Done
[gamecredits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gamecredits.js) | [GameCredits](https://coincheckup.com/coins/gamecredits) | GAME | Dynamic | :white_check_mark: Done
[dynamic-trading-rights](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dynamic-trading-rights.js) | [Dynamic Trading Rights](https://coincheckup.com/coins/dynamic-trading-rights) | DTR | Dynamic | :white_check_mark: Done
[digitalnote](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitalnote.js) | [DigitalNote](https://coincheckup.com/coins/digitalnote) | XDN | Not Implemented | :x: Not done
[dent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dent.js) | [Dent](https://coincheckup.com/coins/dent) | DENT | Dynamic | :white_check_mark: Done
[true-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/true-chain.js) | [True Chain](https://coincheckup.com/coins/true-chain) | TRUE | Dynamic | :white_check_mark: Done
[credits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/credits.js) | [Credits](https://coincheckup.com/coins/credits) | CS | Dynamic | :white_check_mark: Done
[crypterium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crypterium.js) | [Crypterium](https://coincheckup.com/coins/crypterium) | CRPT | Dynamic | :white_check_mark: Done
[vertcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vertcoin.js) | [Vertcoin](https://coincheckup.com/coins/vertcoin) | VTC | Dynamic | :white_check_mark: Done
[enjin-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/enjin-coin.js) | [Enjin Coin](https://coincheckup.com/coins/enjin-coin) | ENJ | Dynamic | :white_check_mark: Done
[c20](https://github.com/coincheckup/crypto-supplies/blob/master/coins/c20.js) | [CRYPTO20](https://coincheckup.com/coins/c20) | C20 | Dynamic | :white_check_mark: Done
[pillar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pillar.js) | [Pillar](https://coincheckup.com/coins/pillar) | PLR | Dynamic | :white_check_mark: Done
[quantstamp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quantstamp.js) | [Quantstamp](https://coincheckup.com/coins/quantstamp) | QSP | Dynamic | :white_check_mark: Done
[groestlcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/groestlcoin.js) | [Groestlcoin](https://coincheckup.com/coins/groestlcoin) | GRS | Dynamic | :white_check_mark: Done
[stakenet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stakenet.js) | [StakeNet](https://coincheckup.com/coins/stakenet) | XSN | Dynamic | :white_check_mark: Done
[ignis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ignis.js) | [Ignis](https://coincheckup.com/coins/ignis) | IGNIS | Not Implemented | :x: Not done
[storiqa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storiqa.js) | [Storiqa](https://coincheckup.com/coins/storiqa) | STQ | Dynamic | :white_check_mark: Done
[boscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boscoin.js) | [BOScoin](https://coincheckup.com/coins/boscoin) | BOS | Not Implemented | :x: Not done
[bluzelle](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bluzelle.js) | [Bluzelle](https://coincheckup.com/coins/bluzelle) | BLZ | Dynamic | :white_check_mark: Done
[raiden-network-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/raiden-network-token.js) | [Raiden Network Token](https://coincheckup.com/coins/raiden-network-token) | RDN | Dynamic | :white_check_mark: Done
[thekey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/thekey.js) | [THEKEY](https://coincheckup.com/coins/thekey) | TKY | Not Implemented | :x: Not done
[peercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peercoin.js) | [Peercoin](https://coincheckup.com/coins/peercoin) | PPC | Dynamic | :white_check_mark: Done
[odem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/odem.js) | [ODEM](https://coincheckup.com/coins/odem) | ODE | Dynamic | :white_check_mark: Done
[particl](https://github.com/coincheckup/crypto-supplies/blob/master/coins/particl.js) | [Particl](https://coincheckup.com/coins/particl) | PART | Dynamic | :white_check_mark: Done
[genaro-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/genaro-network.js) | [Genaro Network](https://coincheckup.com/coins/genaro-network) | GNX | Dynamic | :white_check_mark: Done
[tokenpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenpay.js) | [TokenPay](https://coincheckup.com/coins/tokenpay) | TPAY | Dynamic | :white_check_mark: Done
[nkn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nkn.js) | [NKN](https://coincheckup.com/coins/nkn) | NKN | Not Implemented | :x: Not done
[ambrosus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ambrosus.js) | [Ambrosus](https://coincheckup.com/coins/ambrosus) | AMB | Not Implemented | :x: Not done
[odyssey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/odyssey.js) | [Odyssey](https://coincheckup.com/coins/odyssey) | OCN | Dynamic | :white_check_mark: Done
[quarkchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quarkchain.js) | [QuarkChain](https://coincheckup.com/coins/quarkchain) | QKC | Dynamic | :white_check_mark: Done
[zclassic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zclassic.js) | [ZClassic](https://coincheckup.com/coins/zclassic) | ZCL | Not Implemented | :x: Not done
[endor-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/endor-protocol.js) | [Endor Protocol](https://coincheckup.com/coins/endor-protocol) | EDR | Dynamic | :white_check_mark: Done
[sirin-labs-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sirin-labs-token.js) | [SIRIN LABS Token](https://coincheckup.com/coins/sirin-labs-token) | SRN | Dynamic | :white_check_mark: Done
[ubiq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ubiq.js) | [Ubiq](https://coincheckup.com/coins/ubiq) | UBQ | Not Implemented | :x: Not done
[sophiatx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sophiatx.js) | [SophiaTX](https://coincheckup.com/coins/sophiatx) | SPHTX | Dynamic | :white_check_mark: Done
[blockv](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockv.js) | [BLOCKv](https://coincheckup.com/coins/blockv) | VEE | Dynamic | :white_check_mark: Done
[nanjcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nanjcoin.js) | [NANJCOIN](https://coincheckup.com/coins/nanjcoin) | NANJ | Dynamic | :white_check_mark: Done
[iht-real-estate-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iht-real-estate-protocol.js) | [IHT Real Estate Protocol](https://coincheckup.com/coins/iht-real-estate-protocol) | IHT | Dynamic | :white_check_mark: Done
[bread](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bread.js) | [Bread](https://coincheckup.com/coins/bread) | BRD | Dynamic | :white_check_mark: Done
[poa-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/poa-network.js) | [POA Network](https://coincheckup.com/coins/poa-network) | POA | Dynamic | :white_check_mark: Done
[apex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apex.js) | [Apex](https://coincheckup.com/coins/apex) | CPX | Not Implemented | :x: Not done
[metal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metal.js) | [Metal](https://coincheckup.com/coins/metal) | MTL | Dynamic | :white_check_mark: Done
[safe-exchange-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/safe-exchange-coin.js) | [Safe Exchange Coin](https://coincheckup.com/coins/safe-exchange-coin) | SAFEX | Not Implemented | :x: Not done
[bitcore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcore.js) | [Bitcore](https://coincheckup.com/coins/bitcore) | BTX | Dynamic | :white_check_mark: Done
[primecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primecoin.js) | [Primecoin](https://coincheckup.com/coins/primecoin) | XPM | Not Implemented | :x: Not done
[telcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/telcoin.js) | [Telcoin](https://coincheckup.com/coins/telcoin) | TEL | Dynamic | :white_check_mark: Done
[cube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cube.js) | [Cube](https://coincheckup.com/coins/cube) | AUTO | Dynamic | :white_check_mark: Done
[bitcny](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcny.js) | [bitCNY](https://coincheckup.com/coins/bitcny) | BITCNY | Not Implemented | :x: Not done
[electra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electra.js) | [Electra](https://coincheckup.com/coins/electra) | ECA | Dynamic | :white_check_mark: Done
[genesis-vision](https://github.com/coincheckup/crypto-supplies/blob/master/coins/genesis-vision.js) | [Genesis Vision](https://coincheckup.com/coins/genesis-vision) | GVT | Dynamic | :white_check_mark: Done
[poet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/poet.js) | [Po.et](https://coincheckup.com/coins/poet) | POE | Dynamic | :white_check_mark: Done
[ink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ink.js) | [Ink](https://coincheckup.com/coins/ink) | INK | Not Implemented | :x: Not done
[iotex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iotex.js) | [IoTeX](https://coincheckup.com/coins/iotex) | IOTX | Dynamic | :white_check_mark: Done
[burst](https://github.com/coincheckup/crypto-supplies/blob/master/coins/burst.js) | [Burst](https://coincheckup.com/coins/burst) | BURST | Dynamic | :white_check_mark: Done
[rock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rock.js) | [Rock](https://coincheckup.com/coins/rock) | RKT | Dynamic | :white_check_mark: Done
[edgeless](https://github.com/coincheckup/crypto-supplies/blob/master/coins/edgeless.js) | [Edgeless](https://coincheckup.com/coins/edgeless) | EDG | Dynamic | :white_check_mark: Done
[trade-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trade-token.js) | [Trade Token](https://coincheckup.com/coins/trade-token) | TIO | Dynamic | :white_check_mark: Done
[jibrel-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jibrel-network.js) | [Jibrel Network](https://coincheckup.com/coins/jibrel-network) | JNT | Dynamic | :white_check_mark: Done
[spankchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spankchain.js) | [SpankChain](https://coincheckup.com/coins/spankchain) | SPANK | Dynamic | :white_check_mark: Done
[republic-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/republic-protocol.js) | [Republic Protocol](https://coincheckup.com/coins/republic-protocol) | REN | Dynamic | :white_check_mark: Done
[wagerr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wagerr.js) | [Wagerr](https://coincheckup.com/coins/wagerr) | WGR | Dynamic | :white_check_mark: Done
[daex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daex.js) | [DAEX](https://coincheckup.com/coins/daex) | DAX | Dynamic | :white_check_mark: Done
[gulden](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gulden.js) | [Gulden](https://coincheckup.com/coins/gulden) | NLG | Not Implemented | :x: Not done
[lympo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lympo.js) | [Lympo](https://coincheckup.com/coins/lympo) | LYM | Dynamic | :white_check_mark: Done
[tokenomy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenomy.js) | [Tokenomy](https://coincheckup.com/coins/tokenomy) | TEN | Dynamic | :white_check_mark: Done
[internet-node-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internet-node-token.js) | [Internet Node Token](https://coincheckup.com/coins/internet-node-token) | INT | Dynamic | :white_check_mark: Done
[linda](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linda.js) | [Linda](https://coincheckup.com/coins/linda) | LINDA | Not Implemented | :x: Not done
[iot-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iot-chain.js) | [IoT Chain](https://coincheckup.com/coins/iot-chain) | ITC | Dynamic | :white_check_mark: Done
[data](https://github.com/coincheckup/crypto-supplies/blob/master/coins/data.js) | [DATA](https://coincheckup.com/coins/data) | DTA | Dynamic | :white_check_mark: Done
[nav-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nav-coin.js) | [NavCoin](https://coincheckup.com/coins/nav-coin) | NAV | Dynamic | :white_check_mark: Done
[litecoin-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin-cash.js) | [Litecoin Cash](https://coincheckup.com/coins/litecoin-cash) | LCC | Not Implemented | :x: Not done
[unobtanium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unobtanium.js) | [Unobtanium](https://coincheckup.com/coins/unobtanium) | UNO | Dynamic | :white_check_mark: Done
[origintrail](https://github.com/coincheckup/crypto-supplies/blob/master/coins/origintrail.js) | [OriginTrail](https://coincheckup.com/coins/origintrail) | TRAC | Dynamic | :white_check_mark: Done
[eidoo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eidoo.js) | [Eidoo](https://coincheckup.com/coins/eidoo) | EDO | Dynamic | :white_check_mark: Done
[quantum-resistant-ledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quantum-resistant-ledger.js) | [Quantum Resistant Ledger](https://coincheckup.com/coins/quantum-resistant-ledger) | QRL | Dynamic | :white_check_mark: Done
[cryptaur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptaur.js) | [Cryptaur](https://coincheckup.com/coins/cryptaur) | CPT | Dynamic | :white_check_mark: Done
[eximchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eximchain.js) | [Eximchain](https://coincheckup.com/coins/eximchain) | EXC | Dynamic | :white_check_mark: Done
[bitbay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbay.js) | [BitBay](https://coincheckup.com/coins/bitbay) | BAY | Dynamic | :white_check_mark: Done
[red-pulse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/red-pulse.js) | [Red Pulse](https://coincheckup.com/coins/red-pulse) | RPX | Not Implemented | :x: Not done
[ravencoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ravencoin.js) | [Ravencoin](https://coincheckup.com/coins/ravencoin) | RVN | Not Implemented | :x: Not done
[ethlend](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethlend.js) | [ETHLend](https://coincheckup.com/coins/ethlend) | LEND | Dynamic | :white_check_mark: Done
[bitrent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitrent.js) | [BitRent](https://coincheckup.com/coins/bitrent) | RNTB | Dynamic | :white_check_mark: Done
[tokencard](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokencard.js) | [TokenCard](https://coincheckup.com/coins/tokencard) | TKN | Dynamic | :white_check_mark: Done
[delphy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/delphy.js) | [Delphy](https://coincheckup.com/coins/delphy) | DPY | Dynamic | :white_check_mark: Done
[einsteinium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/einsteinium.js) | [Einsteinium](https://coincheckup.com/coins/einsteinium) | EMC2 | Dynamic | :white_check_mark: Done
[prizm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prizm.js) | [PRIZM](https://coincheckup.com/coins/prizm) | PZM | Not Implemented | :x: Not done
[adx-net](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adx-net.js) | [AdEx](https://coincheckup.com/coins/adx-net) | ADX | Dynamic | :white_check_mark: Done
[salus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/salus.js) | [SaluS](https://coincheckup.com/coins/salus) | SLS | Dynamic | :white_check_mark: Done
[babb](https://github.com/coincheckup/crypto-supplies/blob/master/coins/babb.js) | [BABB](https://coincheckup.com/coins/babb) | BAX | Dynamic | :white_check_mark: Done
[presearch](https://github.com/coincheckup/crypto-supplies/blob/master/coins/presearch.js) | [Presearch](https://coincheckup.com/coins/presearch) | PRE | Dynamic | :white_check_mark: Done
[metaverse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metaverse.js) | [Metaverse ETP](https://coincheckup.com/coins/metaverse) | ETP | Not Implemented | :x: Not done
[legolas-exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/legolas-exchange.js) | [Legolas Exchange](https://coincheckup.com/coins/legolas-exchange) | LGO | Dynamic | :white_check_mark: Done
[paypie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paypie.js) | [PayPie](https://coincheckup.com/coins/paypie) | PPP | Dynamic | :white_check_mark: Done
[datx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datx.js) | [DATx](https://coincheckup.com/coins/datx) | DATX | Dynamic | :white_check_mark: Done
[cloakcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cloakcoin.js) | [CloakCoin](https://coincheckup.com/coins/cloakcoin) | CLOAK | Dynamic | :white_check_mark: Done
[singulardtv](https://github.com/coincheckup/crypto-supplies/blob/master/coins/singulardtv.js) | [SingularDTV](https://coincheckup.com/coins/singulardtv) | SNGLS | Dynamic | :white_check_mark: Done
[viacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/viacoin.js) | [Viacoin](https://coincheckup.com/coins/viacoin) | VIA | Dynamic | :white_check_mark: Done
[apis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apis.js) | [APIS](https://coincheckup.com/coins/apis) | APIS | Dynamic | :white_check_mark: Done
[swarm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swarm.js) | [Swarm](https://coincheckup.com/coins/swarm) | SWM | Dynamic | :white_check_mark: Done
[counterparty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/counterparty.js) | [Counterparty](https://coincheckup.com/coins/counterparty) | XCP | Not Implemented | :x: Not done
[paccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paccoin.js) | [PACcoin](https://coincheckup.com/coins/paccoin) | $PAC | Not Implemented | :x: Not done
[universa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universa.js) | [Universa](https://coincheckup.com/coins/universa) | UTNP | Dynamic | :white_check_mark: Done
[gincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gincoin.js) | [GINcoin](https://coincheckup.com/coins/gincoin) | GIN | Dynamic | :white_check_mark: Done
[tokenclub](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenclub.js) | [TokenClub](https://coincheckup.com/coins/tokenclub) | TCT | Dynamic | :white_check_mark: Done
[tomochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tomochain.js) | [TomoChain](https://coincheckup.com/coins/tomochain) | TOMO | Dynamic | :white_check_mark: Done
[kickico](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kickico.js) | [KickCoin](https://coincheckup.com/coins/kickico) | KICK | Dynamic | :white_check_mark: Done
[envion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/envion.js) | [Envion](https://coincheckup.com/coins/envion) | EVN | Dynamic | :white_check_mark: Done
[zebi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zebi.js) | [Zebi](https://coincheckup.com/coins/zebi) | ZCO | Dynamic | :white_check_mark: Done
[swftcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swftcoin.js) | [SwftCoin](https://coincheckup.com/coins/swftcoin) | SWFTC | Dynamic | :white_check_mark: Done
[ripio-credit-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ripio-credit-network.js) | [Ripio Credit Network](https://coincheckup.com/coins/ripio-credit-network) | RCN | Dynamic | :white_check_mark: Done
[cpchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cpchain.js) | [CPChain](https://coincheckup.com/coins/cpchain) | CPC | Dynamic | :white_check_mark: Done
[constellation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/constellation.js) | [Constellation](https://coincheckup.com/coins/constellation) | DAG | Dynamic | :white_check_mark: Done
[feathercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/feathercoin.js) | [Feathercoin](https://coincheckup.com/coins/feathercoin) | FTC | Dynamic | :white_check_mark: Done
[whitecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/whitecoin.js) | [WhiteCoin](https://coincheckup.com/coins/whitecoin) | XWC | Dynamic | :white_check_mark: Done
[spectre.ai-dividend-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spectre.ai-dividend-token.js) | [Spectre.ai Dividend Token](https://coincheckup.com/coins/spectre.ai-dividend-token) | SXDT | Not Implemented | :x: Not done
[utrust](https://github.com/coincheckup/crypto-supplies/blob/master/coins/utrust.js) | [UTRUST](https://coincheckup.com/coins/utrust) | UTK | Dynamic | :white_check_mark: Done
[hydro-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hydro-protocol.js) | [Hydro Protocol](https://coincheckup.com/coins/hydro-protocol) | HOT | Dynamic | :white_check_mark: Done
[atn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atn.js) | [ATN](https://coincheckup.com/coins/atn) | ATN | Dynamic | :white_check_mark: Done
[havven](https://github.com/coincheckup/crypto-supplies/blob/master/coins/havven.js) | [Havven](https://coincheckup.com/coins/havven) | HAV | Dynamic | :white_check_mark: Done
[naga](https://github.com/coincheckup/crypto-supplies/blob/master/coins/naga.js) | [NAGA](https://coincheckup.com/coins/naga) | NGC | Dynamic | :white_check_mark: Done
[simple-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/simple-token.js) | [OST](https://coincheckup.com/coins/simple-token) | OST | Dynamic | :white_check_mark: Done
[lykke](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lykke.js) | [Lykke](https://coincheckup.com/coins/lykke) | LKK | Not Implemented | :x: Not done
[airswap](https://github.com/coincheckup/crypto-supplies/blob/master/coins/airswap.js) | [AirSwap](https://coincheckup.com/coins/airswap) | AST | Dynamic | :white_check_mark: Done
[htmlcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/htmlcoin.js) | [HTMLCOIN](https://coincheckup.com/coins/htmlcoin) | HTML | Not Implemented | :x: Not done
[bridgecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bridgecoin.js) | [BridgeCoin](https://coincheckup.com/coins/bridgecoin) | BCO | Not Implemented | :x: Not done
[mobilego](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mobilego.js) | [MobileGo](https://coincheckup.com/coins/mobilego) | MGO | Dynamic | :white_check_mark: Done
[district0x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/district0x.js) | [district0x](https://coincheckup.com/coins/district0x) | DNT | Dynamic | :white_check_mark: Done
[fuzex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fuzex.js) | [FuzeX](https://coincheckup.com/coins/fuzex) | FXT | Dynamic | :white_check_mark: Done
[wings](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wings.js) | [Wings](https://coincheckup.com/coins/wings) | WINGS | Dynamic | :white_check_mark: Done
[namecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/namecoin.js) | [Namecoin](https://coincheckup.com/coins/namecoin) | NMC | Not Implemented | :x: Not done
[tierion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tierion.js) | [Tierion](https://coincheckup.com/coins/tierion) | TNT | Dynamic | :white_check_mark: Done
[zeepin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zeepin.js) | [Zeepin](https://coincheckup.com/coins/zeepin) | ZPT | Not Implemented | :x: Not done
[ins-ecosystem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ins-ecosystem.js) | [INS Ecosystem](https://coincheckup.com/coins/ins-ecosystem) | INS | Dynamic | :white_check_mark: Done
[aeon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aeon.js) | [Aeon](https://coincheckup.com/coins/aeon) | AEON | Dynamic | :white_check_mark: Done
[ion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ion.js) | [ION](https://coincheckup.com/coins/ion) | ION | Dynamic | :white_check_mark: Done
[decision-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decision-token.js) | [Decision Token](https://coincheckup.com/coins/decision-token) | HST | Dynamic | :white_check_mark: Done
[mothership](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mothership.js) | [Mothership](https://coincheckup.com/coins/mothership) | MSP | Dynamic | :white_check_mark: Done
[melon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/melon.js) | [Melon](https://coincheckup.com/coins/melon) | MLN | Dynamic | :white_check_mark: Done
[minexcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/minexcoin.js) | [MinexCoin](https://coincheckup.com/coins/minexcoin) | MNX | Not Implemented | :x: Not done
[medibloc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medibloc.js) | [MediBloc](https://coincheckup.com/coins/medibloc) | MED | Not Implemented | :x: Not done
[library-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/library-credit.js) | [LBRY Credits](https://coincheckup.com/coins/library-credit) | LBC | Not Implemented | :x: Not done
[oneroot-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oneroot-network.js) | [OneRoot Network](https://coincheckup.com/coins/oneroot-network) | RNT | Dynamic | :white_check_mark: Done
[loyalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loyalcoin.js) | [LoyalCoin](https://coincheckup.com/coins/loyalcoin) | LYL | Not Implemented | :x: Not done
[phore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phore.js) | [Phore](https://coincheckup.com/coins/phore) | PHR | Dynamic | :white_check_mark: Done
[decent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decent.js) | [DECENT](https://coincheckup.com/coins/decent) | DCT | Dynamic | :white_check_mark: Done
[ecc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ecc.js) | [ECC](https://coincheckup.com/coins/ecc) | ECC | Not Implemented | :x: Not done
[modum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/modum.js) | [Modum](https://coincheckup.com/coins/modum) | MOD | Dynamic | :white_check_mark: Done
[yoyow](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yoyow.js) | [YOYOW](https://coincheckup.com/coins/yoyow) | YOYOW | Dynamic | :white_check_mark: Done
[hive](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hive.js) | [Hive Project](https://coincheckup.com/coins/hive) | HVN | Not Implemented | :x: Not done
[datum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datum.js) | [Datum](https://coincheckup.com/coins/datum) | DAT | Dynamic | :white_check_mark: Done
[wepower](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wepower.js) | [WePower](https://coincheckup.com/coins/wepower) | WPR | Dynamic | :white_check_mark: Done
[sentinel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sentinel.js) | [Sentinel](https://coincheckup.com/coins/sentinel) | SENT | Dynamic | :white_check_mark: Done
[experience-points](https://github.com/coincheckup/crypto-supplies/blob/master/coins/experience-points.js) | [Experience Points](https://coincheckup.com/coins/experience-points) | XP | Dynamic | :white_check_mark: Done
[steem-dollars](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steem-dollars.js) | [Steem Dollars](https://coincheckup.com/coins/steem-dollars) | SBD | Not Implemented | :x: Not done
[banca](https://github.com/coincheckup/crypto-supplies/blob/master/coins/banca.js) | [Banca](https://coincheckup.com/coins/banca) | BANCA | Dynamic | :white_check_mark: Done
[taas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/taas.js) | [TaaS](https://coincheckup.com/coins/taas) | TAAS | Not Implemented | :x: Not done
[decentbet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decentbet.js) | [DecentBet](https://coincheckup.com/coins/decentbet) | DBET | Not Implemented | :x: Not done
[maecenas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maecenas.js) | [Maecenas](https://coincheckup.com/coins/maecenas) | ART | Dynamic | :white_check_mark: Done
[blox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blox.js) | [Blox](https://coincheckup.com/coins/blox) | CDT | Dynamic | :white_check_mark: Done
[crowd-machine](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crowd-machine.js) | [Crowd Machine](https://coincheckup.com/coins/crowd-machine) | CMCT | Dynamic | :white_check_mark: Done
[etherparty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etherparty.js) | [Etherparty](https://coincheckup.com/coins/etherparty) | FUEL | Dynamic | :white_check_mark: Done
[pura-pura](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pura-pura.js) | [Pura](https://coincheckup.com/coins/pura-pura) | PURA | Dynamic | :white_check_mark: Done
[linkeye](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linkeye.js) | [LinkEye](https://coincheckup.com/coins/linkeye) | LET | Not Implemented | :x: Not done
[xinfin-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xinfin-network.js) | [XinFin Network](https://coincheckup.com/coins/xinfin-network) | XDCE | Dynamic | :white_check_mark: Done
[lunyr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lunyr.js) | [Lunyr](https://coincheckup.com/coins/lunyr) | LUN | Dynamic | :white_check_mark: Done
[appcoins](https://github.com/coincheckup/crypto-supplies/blob/master/coins/appcoins.js) | [AppCoins](https://coincheckup.com/coins/appcoins) | APPC | Dynamic | :white_check_mark: Done
[selfsell](https://github.com/coincheckup/crypto-supplies/blob/master/coins/selfsell.js) | [SelfSell](https://coincheckup.com/coins/selfsell) | SSC | Not Implemented | :x: Not done
[u-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/u-network.js) | [U Network](https://coincheckup.com/coins/u-network) | UUU | Dynamic | :white_check_mark: Done
[oraclechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oraclechain.js) | [OracleChain](https://coincheckup.com/coins/oraclechain) | OCT | Not Implemented | :x: Not done
[credo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/credo.js) | [Credo](https://coincheckup.com/coins/credo) | CREDO | Dynamic | :white_check_mark: Done
[faircoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/faircoin.js) | [FairCoin](https://coincheckup.com/coins/faircoin) | FAIR | Not Implemented | :x: Not done
[coss](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coss.js) | [COSS](https://coincheckup.com/coins/coss) | COSS | Dynamic | :white_check_mark: Done
[shift](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shift.js) | [Shift](https://coincheckup.com/coins/shift) | SHIFT | Not Implemented | :x: Not done
[rialto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rialto.js) | [Rialto](https://coincheckup.com/coins/rialto) | XRL | Dynamic | :white_check_mark: Done
[cashaa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cashaa.js) | [Cashaa](https://coincheckup.com/coins/cashaa) | CAS | Dynamic | :white_check_mark: Done
[wabi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wabi.js) | [WaBi](https://coincheckup.com/coins/wabi) | WABI | Dynamic | :white_check_mark: Done
[soarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/soarcoin.js) | [Soarcoin](https://coincheckup.com/coins/soarcoin) | SOAR | Dynamic | :white_check_mark: Done
[casinocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/casinocoin.js) | [CasinoCoin](https://coincheckup.com/coins/casinocoin) | CSC | Not Implemented | :x: Not done
[qlink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qlink.js) | [QLINK](https://coincheckup.com/coins/qlink) | QLC | Not Implemented | :x: Not done
[datawallet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datawallet.js) | [Datawallet](https://coincheckup.com/coins/datawallet) | DXT | Dynamic | :white_check_mark: Done
[yee](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yee.js) | [YEE](https://coincheckup.com/coins/yee) | YEE | Dynamic | :white_check_mark: Done
[proxeus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/proxeus.js) | [Proxeus](https://coincheckup.com/coins/proxeus) | XES | Dynamic | :white_check_mark: Done
[bankex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bankex.js) | [Bankex](https://coincheckup.com/coins/bankex) | BKX | Dynamic | :white_check_mark: Done
[qunqun](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qunqun.js) | [QunQun](https://coincheckup.com/coins/qunqun) | QUN | Dynamic | :white_check_mark: Done
[selfkey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/selfkey.js) | [Selfkey](https://coincheckup.com/coins/selfkey) | KEY | Dynamic | :white_check_mark: Done
[vibe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vibe.js) | [VIBE](https://coincheckup.com/coins/vibe) | VIBE | Dynamic | :white_check_mark: Done
[electrify.asia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electrify.asia.js) | [Electrify.Asia](https://coincheckup.com/coins/electrify.asia) | ELEC | Not Implemented | :x: Not done
[mobius](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mobius.js) | [Mobius](https://coincheckup.com/coins/mobius) | MOBI | Not Implemented | :x: Not done
[ac3](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ac3.js) | [AC3](https://coincheckup.com/coins/ac3) | AC3 | Not Implemented | :x: Not done
[aurora-dao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aurora-dao.js) | [Aurora DAO](https://coincheckup.com/coins/aurora-dao) | AURA | Dynamic | :white_check_mark: Done
[potcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/potcoin.js) | [PotCoin](https://coincheckup.com/coins/potcoin) | POT | Dynamic | :white_check_mark: Done
[pepe-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pepe-cash.js) | [Pepe Cash](https://coincheckup.com/coins/pepe-cash) | PEPECASH | Not Implemented | :x: Not done
[bitcoin-green](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-green.js) | [Bitcoin Green](https://coincheckup.com/coins/bitcoin-green) | BITG | Not Implemented | :x: Not done
[mediccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mediccoin.js) | [MedicCoin](https://coincheckup.com/coins/mediccoin) | MEDIC | Not Implemented | :x: Not done
[cobinhood](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cobinhood.js) | [Cobinhood](https://coincheckup.com/coins/cobinhood) | COB | Dynamic | :white_check_mark: Done
[grid-plus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/grid-plus.js) | [Grid+](https://coincheckup.com/coins/grid-plus) | GRID | Not Implemented | :x: Not done
[peepcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peepcoin.js) | [PeepCoin](https://coincheckup.com/coins/peepcoin) | PCN | Dynamic | :white_check_mark: Done
[oyster](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oyster.js) | [Oyster](https://coincheckup.com/coins/oyster) | PRL | Dynamic | :white_check_mark: Done
[bitusd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitusd.js) | [bitUSD](https://coincheckup.com/coins/bitusd) | BITUSD | Not Implemented | :x: Not done
[karma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/karma.js) | [Karma](https://coincheckup.com/coins/karma) | KRM | Dynamic | :white_check_mark: Done
[dock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dock.js) | [Dock](https://coincheckup.com/coins/dock) | DOCK | Dynamic | :white_check_mark: Done
[peerplays-ppy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peerplays-ppy.js) | [Peerplays](https://coincheckup.com/coins/peerplays-ppy) | PPY | Not Implemented | :x: Not done
[firstblood](https://github.com/coincheckup/crypto-supplies/blob/master/coins/firstblood.js) | [FirstBlood](https://coincheckup.com/coins/firstblood) | 1ST | Not Implemented | :x: Not done
[blackmoon-crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blackmoon-crypto.js) | [Blackmoon](https://coincheckup.com/coins/blackmoon-crypto) | BMC | Not Implemented | :x: Not done
[qbao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qbao.js) | [Qbao](https://coincheckup.com/coins/qbao) | QBT | Not Implemented | :x: Not done
[ixledger-ixt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ixledger-ixt.js) | [iXledger](https://coincheckup.com/coins/ixledger-ixt) | IXT | Dynamic | :white_check_mark: Done
[humaniq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/humaniq.js) | [Humaniq](https://coincheckup.com/coins/humaniq) | HMQ | Dynamic | :white_check_mark: Done
[fortuna](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fortuna.js) | [Fortuna](https://coincheckup.com/coins/fortuna) | FOTA | Dynamic | :white_check_mark: Done
[xtrabytes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xtrabytes.js) | [XTRABYTES](https://coincheckup.com/coins/xtrabytes) | XBY | Not Implemented | :x: Not done
[refereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/refereum.js) | [Refereum](https://coincheckup.com/coins/refereum) | RFR | Dynamic | :white_check_mark: Done
[nolimitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nolimitcoin.js) | [NoLimitCoin](https://coincheckup.com/coins/nolimitcoin) | NLC2 | Not Implemented | :x: Not done
[trinity-network-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trinity-network-credit.js) | [Trinity Network Credit](https://coincheckup.com/coins/trinity-network-credit) | TNC | Not Implemented | :x: Not done
[neurotoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neurotoken.js) | [Neurotoken](https://coincheckup.com/coins/neurotoken) | NTK | Dynamic | :white_check_mark: Done
[hempcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hempcoin.js) | [HempCoin](https://coincheckup.com/coins/hempcoin) | THC | Not Implemented | :x: Not done
[prochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prochain.js) | [ProChain](https://coincheckup.com/coins/prochain) | PRA | Dynamic | :white_check_mark: Done
[quantum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quantum.js) | [Quantum](https://coincheckup.com/coins/quantum) | QAU | Dynamic | :white_check_mark: Done
[medicalchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medicalchain.js) | [Medicalchain](https://coincheckup.com/coins/medicalchain) | MTN | Not Implemented | :x: Not done
[viberate](https://github.com/coincheckup/crypto-supplies/blob/master/coins/viberate.js) | [Viberate](https://coincheckup.com/coins/viberate) | VIB | Dynamic | :white_check_mark: Done
[cofound-it](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cofound-it.js) | [Cofound.it](https://coincheckup.com/coins/cofound-it) | CFI | Dynamic | :white_check_mark: Done
[brahmaos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/brahmaos.js) | [BrahmaOS](https://coincheckup.com/coins/brahmaos) | BRM | Dynamic | :white_check_mark: Done
[colossuscoinxt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/colossuscoinxt.js) | [ColossusXT](https://coincheckup.com/coins/colossuscoinxt) | COLX | Dynamic | :white_check_mark: Done
[elastic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elastic.js) | [Elastic](https://coincheckup.com/coins/elastic) | XEL | Not Implemented | :x: Not done
[covesting](https://github.com/coincheckup/crypto-supplies/blob/master/coins/covesting.js) | [Covesting](https://coincheckup.com/coins/covesting) | COV | Dynamic | :white_check_mark: Done
[bismuth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bismuth.js) | [Bismuth](https://coincheckup.com/coins/bismuth) | BIS | Not Implemented | :x: Not done
[luxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/luxcoin.js) | [LUXCoin](https://coincheckup.com/coins/luxcoin) | LUX | Dynamic | :white_check_mark: Done
[chronobank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chronobank.js) | [Chronobank](https://coincheckup.com/coins/chronobank) | TIME | Dynamic | :white_check_mark: Done
[leocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leocoin.js) | [LEOcoin](https://coincheckup.com/coins/leocoin) | LEO | Not Implemented | :x: Not done
[zeusshield](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zeusshield.js) | [Zeusshield](https://coincheckup.com/coins/zeusshield) | ZSC | Dynamic | :white_check_mark: Done
[deeponion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deeponion.js) | [DeepOnion](https://coincheckup.com/coins/deeponion) | ONION | Not Implemented | :x: Not done
[synereo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/synereo.js) | [Synereo](https://coincheckup.com/coins/synereo) | AMP | Not Implemented | :x: Not done
[pascal-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pascal-coin.js) | [Pascal Coin](https://coincheckup.com/coins/pascal-coin) | PASC | Not Implemented | :x: Not done
[shield](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shield.js) | [SHIELD](https://coincheckup.com/coins/shield) | XSH | Not Implemented | :x: Not done
[dimecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dimecoin.js) | [Dimecoin](https://coincheckup.com/coins/dimecoin) | DIME | Dynamic | :white_check_mark: Done
[mercury](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mercury.js) | [Mercury](https://coincheckup.com/coins/mercury) | MER | Not Implemented | :x: Not done
[divi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/divi.js) | [Divi](https://coincheckup.com/coins/divi) | DIVX | Dynamic | :white_check_mark: Done
[spacechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spacechain.js) | [SpaceChain](https://coincheckup.com/coins/spacechain) | SPC | Not Implemented | :x: Not done
[tao](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tao.js) | [Tao](https://coincheckup.com/coins/tao) | XTO | Dynamic | :white_check_mark: Done
[blockmason-credit-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockmason-credit-protocol.js) | [BlockMason Credit Protocol](https://coincheckup.com/coins/blockmason-credit-protocol) | BCPT | Not Implemented | :x: Not done
[polybius](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polybius.js) | [Polybius](https://coincheckup.com/coins/polybius) | PLBT | Dynamic | :white_check_mark: Done
[revolutionvr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/revolutionvr.js) | [RevolutionVR](https://coincheckup.com/coins/revolutionvr) | RVR | Not Implemented | :x: Not done
[olympus-labs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/olympus-labs.js) | [Olympus Labs](https://coincheckup.com/coins/olympus-labs) | MOT | Dynamic | :white_check_mark: Done
[shivom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shivom.js) | [Shivom](https://coincheckup.com/coins/shivom) | OMX | Dynamic | :white_check_mark: Done
[alqo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alqo.js) | [ALQO](https://coincheckup.com/coins/alqo) | ALQO | Not Implemented | :x: Not done
[boolberry](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boolberry.js) | [Boolberry](https://coincheckup.com/coins/boolberry) | BBR | Not Implemented | :x: Not done
[dimcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dimcoin.js) | [DIMCOIN](https://coincheckup.com/coins/dimcoin) | DIM | Not Implemented | :x: Not done
[alphacat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alphacat.js) | [Alphacat](https://coincheckup.com/coins/alphacat) | ACAT | Not Implemented | :x: Not done
[primas](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primas.js) | [Primas](https://coincheckup.com/coins/primas) | PST | Dynamic | :white_check_mark: Done
[gridcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gridcoin.js) | [GridCoin](https://coincheckup.com/coins/gridcoin) | GRC | Not Implemented | :x: Not done
[bodhi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bodhi.js) | [Bodhi](https://coincheckup.com/coins/bodhi) | BOT | Not Implemented | :x: Not done
[crown](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crown.js) | [Crown](https://coincheckup.com/coins/crown) | CRW | Dynamic | :white_check_mark: Done
[oxycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oxycoin.js) | [Oxycoin](https://coincheckup.com/coins/oxycoin) | OXY | Not Implemented | :x: Not done
[unikoin-gold-ukg](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unikoin-gold-ukg.js) | [Unikoin Gold](https://coincheckup.com/coins/unikoin-gold-ukg) | UKG | Dynamic | :white_check_mark: Done
[diamond](https://github.com/coincheckup/crypto-supplies/blob/master/coins/diamond.js) | [Diamond](https://coincheckup.com/coins/diamond) | DMD | Dynamic | :white_check_mark: Done
[everex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/everex.js) | [Everex](https://coincheckup.com/coins/everex) | EVX | Dynamic | :white_check_mark: Done
[suncontract](https://github.com/coincheckup/crypto-supplies/blob/master/coins/suncontract.js) | [SunContract](https://coincheckup.com/coins/suncontract) | SNC | Dynamic | :white_check_mark: Done
[lamden](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lamden.js) | [Lamden](https://coincheckup.com/coins/lamden) | TAU | Dynamic | :white_check_mark: Done
[betterbetting](https://github.com/coincheckup/crypto-supplies/blob/master/coins/betterbetting.js) | [BetterBetting](https://coincheckup.com/coins/betterbetting) | BETR | Not Implemented | :x: Not done
[muse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/muse.js) | [MUSE](https://coincheckup.com/coins/muse) | MUSE | Not Implemented | :x: Not done
[ceek-vr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ceek-vr.js) | [CEEK VR](https://coincheckup.com/coins/ceek-vr) | CEEK | Dynamic | :white_check_mark: Done
[energo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/energo.js) | [Energo](https://coincheckup.com/coins/energo) | TSL | Not Implemented | :x: Not done
[uquid-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uquid-coin.js) | [Uquid Coin](https://coincheckup.com/coins/uquid-coin) | UQC | Dynamic | :white_check_mark: Done
[dadi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dadi.js) | [DADI](https://coincheckup.com/coins/dadi) | DADI | Dynamic | :white_check_mark: Done
[life](https://github.com/coincheckup/crypto-supplies/blob/master/coins/life.js) | [LIFE](https://coincheckup.com/coins/life) | LIFE | Dynamic | :white_check_mark: Done
[sakura-bloom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sakura-bloom.js) | [Sakura Bloom](https://coincheckup.com/coins/sakura-bloom) | SKB | Dynamic | :white_check_mark: Done
[bitbean](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbean.js) | [Bean Cash](https://coincheckup.com/coins/bitbean) | BITB | Not Implemented | :x: Not done
[triggers](https://github.com/coincheckup/crypto-supplies/blob/master/coins/triggers.js) | [Triggers](https://coincheckup.com/coins/triggers) | TRIG | Not Implemented | :x: Not done
[red-mwat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/red-mwat.js) | [Restart Energy MWAT](https://coincheckup.com/coins/red-mwat) | MWAT | Dynamic | :white_check_mark: Done
[bitcoin-atom-futures](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-atom-futures.js) | [Bitcoin Atom](https://coincheckup.com/coins/bitcoin-atom-futures) | BCA | Not Implemented | :x: Not done
[dmarket](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dmarket.js) | [DMarket](https://coincheckup.com/coins/dmarket) | DMT | Dynamic | :white_check_mark: Done
[te-food](https://github.com/coincheckup/crypto-supplies/blob/master/coins/te-food.js) | [TE-FOOD](https://coincheckup.com/coins/te-food) | TFD | Dynamic | :white_check_mark: Done
[dubaicoin-dbix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dubaicoin-dbix.js) | [DubaiCoin](https://coincheckup.com/coins/dubaicoin-dbix) | DBIX | Not Implemented | :x: Not done
[blackcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blackcoin.js) | [BlackCoin](https://coincheckup.com/coins/blackcoin) | BLK | Dynamic | :white_check_mark: Done
[gems](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gems.js) | [Gems](https://coincheckup.com/coins/gems) | GEM | Not Implemented | :x: Not done
[neumark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neumark.js) | [Neumark](https://coincheckup.com/coins/neumark) | NEU | Dynamic | :white_check_mark: Done
[phantasma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phantasma.js) | [Phantasma](https://coincheckup.com/coins/phantasma) | SOUL | Not Implemented | :x: Not done
[nework](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nework.js) | [Nework](https://coincheckup.com/coins/nework) | NKC | Not Implemented | :x: Not done
[latiumx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/latiumx.js) | [LatiumX](https://coincheckup.com/coins/latiumx) | LATX | Dynamic | :white_check_mark: Done
[guppy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guppy.js) | [Matchpool](https://coincheckup.com/coins/guppy) | GUP | Not Implemented | :x: Not done
[latoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/latoken.js) | [LATOKEN](https://coincheckup.com/coins/latoken) | LA | Dynamic | :white_check_mark: Done
[numeraire](https://github.com/coincheckup/crypto-supplies/blob/master/coins/numeraire.js) | [Numeraire](https://coincheckup.com/coins/numeraire) | NMR | Dynamic | :white_check_mark: Done
[carvertical](https://github.com/coincheckup/crypto-supplies/blob/master/coins/carvertical.js) | [carVertical](https://coincheckup.com/coins/carvertical) | CV | Dynamic | :white_check_mark: Done
[propy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/propy.js) | [Propy](https://coincheckup.com/coins/propy) | PRO | Dynamic | :white_check_mark: Done
[radium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/radium.js) | [Radium](https://coincheckup.com/coins/radium) | RADS | Dynamic | :white_check_mark: Done
[monetaryunit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monetaryunit.js) | [MonetaryUnit](https://coincheckup.com/coins/monetaryunit) | MUE | Dynamic | :white_check_mark: Done
[ugchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ugchain.js) | [ugChain](https://coincheckup.com/coins/ugchain) | UGC | Dynamic | :white_check_mark: Done
[aichain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aichain.js) | [AICHAIN](https://coincheckup.com/coins/aichain) | AIT | Dynamic | :white_check_mark: Done
[stk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stk.js) | [STK](https://coincheckup.com/coins/stk) | STK | Dynamic | :white_check_mark: Done
[ormeus-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ormeus-coin.js) | [Ormeus Coin](https://coincheckup.com/coins/ormeus-coin) | ORME | Dynamic | :white_check_mark: Done
[switcheo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/switcheo.js) | [Switcheo](https://coincheckup.com/coins/switcheo) | SWTH | Not Implemented | :x: Not done
[bitcoin-lightning](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-lightning.js) | [Bloom](https://coincheckup.com/coins/bitcoin-lightning) | BLT | Not Implemented | :x: Not done
[stronghands](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stronghands.js) | [StrongHands](https://coincheckup.com/coins/stronghands) | SHND | Not Implemented | :x: Not done
[omni](https://github.com/coincheckup/crypto-supplies/blob/master/coins/omni.js) | [Omni](https://coincheckup.com/coins/omni) | OMNI | Not Implemented | :x: Not done
[everus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/everus.js) | [Everus](https://coincheckup.com/coins/everus) | EVR | Dynamic | :white_check_mark: Done
[mooncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mooncoin.js) | [Mooncoin](https://coincheckup.com/coins/mooncoin) | MOON | Dynamic | :white_check_mark: Done
[silent-notary](https://github.com/coincheckup/crypto-supplies/blob/master/coins/silent-notary.js) | [Silent Notary](https://coincheckup.com/coins/silent-notary) | SNTR | Dynamic | :white_check_mark: Done
[remme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/remme.js) | [Remme](https://coincheckup.com/coins/remme) | REM | Dynamic | :white_check_mark: Done
[stox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stox.js) | [Stox](https://coincheckup.com/coins/stox) | STX | Dynamic | :white_check_mark: Done
[flash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flash.js) | [Flash](https://coincheckup.com/coins/flash) | FLASH | Not Implemented | :x: Not done
[solarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/solarcoin.js) | [SolarCoin](https://coincheckup.com/coins/solarcoin) | SLR | Dynamic | :white_check_mark: Done
[florincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/florincoin.js) | [FlorinCoin](https://coincheckup.com/coins/florincoin) | FLO | Not Implemented | :x: Not done
[blockport](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockport.js) | [Blockport](https://coincheckup.com/coins/blockport) | BPT | Dynamic | :white_check_mark: Done
[atmchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atmchain.js) | [ATMChain](https://coincheckup.com/coins/atmchain) | ATM | Not Implemented | :x: Not done
[locktrip](https://github.com/coincheckup/crypto-supplies/blob/master/coins/locktrip.js) | [LockTrip](https://coincheckup.com/coins/locktrip) | LOC | Not Implemented | :x: Not done
[moeda-loyalty-points](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moeda-loyalty-points.js) | [Moeda Loyalty Points](https://coincheckup.com/coins/moeda-loyalty-points) | MDA | Dynamic | :white_check_mark: Done
[smartshare](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartshare.js) | [Smartshare](https://coincheckup.com/coins/smartshare) | SSP | Not Implemented | :x: Not done
[adtoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adtoken.js) | [adToken](https://coincheckup.com/coins/adtoken) | ADT | Dynamic | :white_check_mark: Done
[hydrogen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hydrogen.js) | [Hydrogen](https://coincheckup.com/coins/hydrogen) | HYDRO | Dynamic | :white_check_mark: Done
[monetha](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monetha.js) | [Monetha](https://coincheckup.com/coins/monetha) | MTH | Dynamic | :white_check_mark: Done
[rubycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rubycoin.js) | [Rubycoin](https://coincheckup.com/coins/rubycoin) | RBY | Dynamic | :white_check_mark: Done
[cappasity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cappasity.js) | [Cappasity](https://coincheckup.com/coins/cappasity) | CAPP | Dynamic | :white_check_mark: Done
[smartlands](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartlands.js) | [Smartlands](https://coincheckup.com/coins/smartlands) | SLT | Not Implemented | :x: Not done
[oax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oax.js) | [OAX](https://coincheckup.com/coins/oax) | OAX | Dynamic | :white_check_mark: Done
[sureremit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sureremit.js) | [SureRemit](https://coincheckup.com/coins/sureremit) | RMT | Not Implemented | :x: Not done
[banyan-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/banyan-network.js) | [Banyan Network](https://coincheckup.com/coins/banyan-network) | BBN | Dynamic | :white_check_mark: Done
[etheroll](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etheroll.js) | [Etheroll](https://coincheckup.com/coins/etheroll) | DICE | Dynamic | :white_check_mark: Done
[coinpoker](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinpoker.js) | [CoinPoker](https://coincheckup.com/coins/coinpoker) | CHP | Dynamic | :white_check_mark: Done
[bitqy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitqy.js) | [bitqy](https://coincheckup.com/coins/bitqy) | BQ | Dynamic | :white_check_mark: Done
[blocktix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blocktix.js) | [Blocktix](https://coincheckup.com/coins/blocktix) | TIX | Dynamic | :white_check_mark: Done
[friendz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/friendz.js) | [Friendz](https://coincheckup.com/coins/friendz) | FDZ | Not Implemented | :x: Not done
[aeron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aeron.js) | [Aeron](https://coincheckup.com/coins/aeron) | ARN | Dynamic | :white_check_mark: Done
[policypal-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/policypal-network.js) | [PolicyPal Network](https://coincheckup.com/coins/policypal-network) | PAL | Dynamic | :white_check_mark: Done
[daostack](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daostack.js) | [DAOstack](https://coincheckup.com/coins/daostack) | GEN | Dynamic | :white_check_mark: Done
[ai-doctor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ai-doctor.js) | [AI Doctor](https://coincheckup.com/coins/ai-doctor) | AIDOC | Not Implemented | :x: Not done
[swissborg](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swissborg.js) | [SwissBorg](https://coincheckup.com/coins/swissborg) | CHSB | Dynamic | :white_check_mark: Done
[sentinel-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sentinel-chain.js) | [Sentinel Chain](https://coincheckup.com/coins/sentinel-chain) | SENC | Dynamic | :white_check_mark: Done
[hi-mutual-society](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hi-mutual-society.js) | [Hi Mutual Society](https://coincheckup.com/coins/hi-mutual-society) | HMC | Dynamic | :white_check_mark: Done
[exrnchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exrnchain.js) | [EXRNchain](https://coincheckup.com/coins/exrnchain) | EXRN | Dynamic | :white_check_mark: Done
[deviantcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deviantcoin.js) | [DeviantCoin](https://coincheckup.com/coins/deviantcoin) | DEV | Not Implemented | :x: Not done
[clams](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clams.js) | [Clams](https://coincheckup.com/coins/clams) | CLAM | Not Implemented | :x: Not done
[nebula-ai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nebula-ai.js) | [Nebula AI](https://coincheckup.com/coins/nebula-ai) | NBAI | Dynamic | :white_check_mark: Done
[srcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/srcoin.js) | [SRCOIN](https://coincheckup.com/coins/srcoin) | SRCOIN | Not Implemented | :x: Not done
[expanse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/expanse.js) | [Expanse](https://coincheckup.com/coins/expanse) | EXP | Not Implemented | :x: Not done
[iocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iocoin.js) | [I/O Coin](https://coincheckup.com/coins/iocoin) | IOC | Not Implemented | :x: Not done
[red](https://github.com/coincheckup/crypto-supplies/blob/master/coins/red.js) | [RED](https://coincheckup.com/coins/red) | RED | Dynamic | :white_check_mark: Done
[hedge](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hedge.js) | [Hedge](https://coincheckup.com/coins/hedge) | HDG | Dynamic | :white_check_mark: Done
[databits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/databits.js) | [Databits](https://coincheckup.com/coins/databits) | DTB | Not Implemented | :x: Not done
[patron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/patron.js) | [Patron](https://coincheckup.com/coins/patron) | PAT | Dynamic | :white_check_mark: Done
[indahash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/indahash.js) | [indaHash](https://coincheckup.com/coins/indahash) | IDH | Dynamic | :white_check_mark: Done
[uptoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uptoken.js) | [UpToken](https://coincheckup.com/coins/uptoken) | UP | Dynamic | :white_check_mark: Done
[newyorkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/newyorkcoin.js) | [NewYorkCoin](https://coincheckup.com/coins/newyorkcoin) | NYC | Not Implemented | :x: Not done
[pikciochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pikciochain.js) | [PikcioChain](https://coincheckup.com/coins/pikciochain) | PKC | Not Implemented | :x: Not done
[the-champcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-champcoin.js) | [The ChampCoin](https://coincheckup.com/coins/the-champcoin) | TCC | Not Implemented | :x: Not done
[echolink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/echolink.js) | [EchoLink](https://coincheckup.com/coins/echolink) | EKO | Dynamic | :white_check_mark: Done
[the-abyss](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-abyss.js) | [The Abyss](https://coincheckup.com/coins/the-abyss) | ABYSS | Dynamic | :white_check_mark: Done
[polis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polis.js) | [Polis](https://coincheckup.com/coins/polis) | POLIS | Not Implemented | :x: Not done
[callisto-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/callisto-network.js) | [Callisto Network](https://coincheckup.com/coins/callisto-network) | CLO | Not Implemented | :x: Not done
[agrello-delta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/agrello-delta.js) | [Agrello](https://coincheckup.com/coins/agrello-delta) | DLT | Dynamic | :white_check_mark: Done
[domraider](https://github.com/coincheckup/crypto-supplies/blob/master/coins/domraider.js) | [DomRaider](https://coincheckup.com/coins/domraider) | DRT | Dynamic | :white_check_mark: Done
[zippie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zippie.js) | [Zippie](https://coincheckup.com/coins/zippie) | ZIPT | Not Implemented | :x: Not done
[measurable-data-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/measurable-data-token.js) | [Measurable Data Token](https://coincheckup.com/coins/measurable-data-token) | MDT | Not Implemented | :x: Not done
[hexx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hexx.js) | [Hexx](https://coincheckup.com/coins/hexx) | HXX | Not Implemented | :x: Not done
[cvcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cvcoin.js) | [CVCoin](https://coincheckup.com/coins/cvcoin) | CVCOIN | Not Implemented | :x: Not done
[hacken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hacken.js) | [Hacken](https://coincheckup.com/coins/hacken) | HKN | Dynamic | :white_check_mark: Done
[incent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/incent.js) | [Incent](https://coincheckup.com/coins/incent) | INCNT | Not Implemented | :x: Not done
[rise](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rise.js) | [Rise](https://coincheckup.com/coins/rise) | RISE | Not Implemented | :x: Not done
[heronode](https://github.com/coincheckup/crypto-supplies/blob/master/coins/heronode.js) | [HeroNode](https://coincheckup.com/coins/heronode) | HER | Dynamic | :white_check_mark: Done
[rebellious](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rebellious.js) | [REBL](https://coincheckup.com/coins/rebellious) | REBL | Dynamic | :white_check_mark: Done
[peculium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/peculium.js) | [Peculium](https://coincheckup.com/coins/peculium) | PCL | Dynamic | :white_check_mark: Done
[mark.space](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mark.space.js) | [MARK.SPACE](https://coincheckup.com/coins/mark.space) | MRK | Not Implemented | :x: Not done
[axpire](https://github.com/coincheckup/crypto-supplies/blob/master/coins/axpire.js) | [aXpire](https://coincheckup.com/coins/axpire) | AXP | Dynamic | :white_check_mark: Done
[bezop](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bezop.js) | [Bezop](https://coincheckup.com/coins/bezop) | BEZ | Dynamic | :white_check_mark: Done
[get-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/get-protocol.js) | [GET Protocol](https://coincheckup.com/coins/get-protocol) | GET | Dynamic | :white_check_mark: Done
[myriad](https://github.com/coincheckup/crypto-supplies/blob/master/coins/myriad.js) | [Myriad](https://coincheckup.com/coins/myriad) | XMY | Dynamic | :white_check_mark: Done
[rivetz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rivetz.js) | [Rivetz](https://coincheckup.com/coins/rivetz) | RVT | Dynamic | :white_check_mark: Done
[lomocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lomocoin.js) | [LoMoCoin](https://coincheckup.com/coins/lomocoin) | LMC | Not Implemented | :x: Not done
[hollywoodcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hollywoodcoin.js) | [HollyWoodCoin](https://coincheckup.com/coins/hollywoodcoin) | HWC | Not Implemented | :x: Not done
[neoscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neoscoin.js) | [NeosCoin](https://coincheckup.com/coins/neoscoin) | NEOS | Dynamic | :white_check_mark: Done
[aphelion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aphelion.js) | [Aphelion](https://coincheckup.com/coins/aphelion) | APH | Not Implemented | :x: Not done
[unibright](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unibright.js) | [Unibright](https://coincheckup.com/coins/unibright) | UBT | Dynamic | :white_check_mark: Done
[vericoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vericoin.js) | [VeriCoin](https://coincheckup.com/coins/vericoin) | VRC | Dynamic | :white_check_mark: Done
[kilocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kilocoin.js) | [KiloCoin](https://coincheckup.com/coins/kilocoin) | KLC | Not Implemented | :x: Not done
[sharex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharex.js) | [ShareX](https://coincheckup.com/coins/sharex) | SEXC | Dynamic | :white_check_mark: Done
[bulwark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bulwark.js) | [Bulwark](https://coincheckup.com/coins/bulwark) | BWK | Dynamic | :white_check_mark: Done
[icos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icos.js) | [ICOS](https://coincheckup.com/coins/icos) | ICOS | Dynamic | :white_check_mark: Done
[sprouts](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sprouts.js) | [Sprouts](https://coincheckup.com/coins/sprouts) | SPRTS | Dynamic | :white_check_mark: Done
[sibcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sibcoin.js) | [SIBCoin](https://coincheckup.com/coins/sibcoin) | SIB | Not Implemented | :x: Not done
[investfeed](https://github.com/coincheckup/crypto-supplies/blob/master/coins/investfeed.js) | [InvestFeed](https://coincheckup.com/coins/investfeed) | IFT | Dynamic | :white_check_mark: Done
[dynamic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dynamic.js) | [Dynamic](https://coincheckup.com/coins/dynamic) | DYN | Not Implemented | :x: Not done
[pirl](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pirl.js) | [Pirl](https://coincheckup.com/coins/pirl) | PIRL | Not Implemented | :x: Not done
[shipchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shipchain.js) | [ShipChain](https://coincheckup.com/coins/shipchain) | SHIP | Dynamic | :white_check_mark: Done
[russian-mining-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/russian-mining-coin.js) | [Russian Miner Coin](https://coincheckup.com/coins/russian-mining-coin) | RMC | Not Implemented | :x: Not done
[playkey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/playkey.js) | [Playkey](https://coincheckup.com/coins/playkey) | PKT | Dynamic | :white_check_mark: Done
[paragon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paragon.js) | [Paragon](https://coincheckup.com/coins/paragon) | PRG | Dynamic | :white_check_mark: Done
[hubii-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hubii-network.js) | [Hubii Network](https://coincheckup.com/coins/hubii-network) | HBT | Dynamic | :white_check_mark: Done
[insurepal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insurepal.js) | [InsurePal](https://coincheckup.com/coins/insurepal) | IPL | Dynamic | :white_check_mark: Done
[musicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/musicoin.js) | [Musicoin](https://coincheckup.com/coins/musicoin) | MUSIC | Not Implemented | :x: Not done
[bitsend](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsend.js) | [BitSend](https://coincheckup.com/coins/bitsend) | BSD | Dynamic | :white_check_mark: Done
[sharder](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharder.js) | [Sharder](https://coincheckup.com/coins/sharder) | SS | Dynamic | :white_check_mark: Done
[novacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/novacoin.js) | [Novacoin](https://coincheckup.com/coins/novacoin) | NVC | Not Implemented | :x: Not done
[napoleon-x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/napoleon-x.js) | [NaPoleonX](https://coincheckup.com/coins/napoleon-x) | NPX | Dynamic | :white_check_mark: Done
[stealthcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stealthcoin.js) | N/A | N/A | N/A | :x: Not done
[airtoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/airtoken.js) | [AirToken](https://coincheckup.com/coins/airtoken) | AIR | Dynamic | :white_check_mark: Done
[flixxo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flixxo.js) | [Flixxo](https://coincheckup.com/coins/flixxo) | FLIXX | Dynamic | :white_check_mark: Done
[aurumcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aurumcoin.js) | [AurumCoin](https://coincheckup.com/coins/aurumcoin) | AU | Not Implemented | :x: Not done
[xaurum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xaurum.js) | [Xaurum](https://coincheckup.com/coins/xaurum) | XAUR | Dynamic | :white_check_mark: Done
[effect.ai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/effect.ai.js) | [Effect.AI](https://coincheckup.com/coins/effect.ai) | EFX | Not Implemented | :x: Not done
[leverj](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leverj.js) | [Leverj](https://coincheckup.com/coins/leverj) | LEV | Dynamic | :white_check_mark: Done
[debitum-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/debitum-network.js) | [Debitum](https://coincheckup.com/coins/debitum-network) | DEB | Dynamic | :white_check_mark: Done
[loki](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loki.js) | [Loki](https://coincheckup.com/coins/loki) | LOKI | Not Implemented | :x: Not done
[nexium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexium.js) | [Nexium](https://coincheckup.com/coins/nexium) | NXC | Dynamic | :white_check_mark: Done
[gobyte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gobyte.js) | [GoByte](https://coincheckup.com/coins/gobyte) | GBX | Not Implemented | :x: Not done
[matryx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/matryx.js) | [Matryx](https://coincheckup.com/coins/matryx) | MTX | Dynamic | :white_check_mark: Done
[digitex-futures](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitex-futures.js) | [Digitex Futures](https://coincheckup.com/coins/digitex-futures) | DGTX | Not Implemented | :x: Not done
[xplay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xplay.js) | [XPA](https://coincheckup.com/coins/xplay) | XPA | Dynamic | :white_check_mark: Done
[stipend](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stipend.js) | [Stipend](https://coincheckup.com/coins/stipend) | SPD | Not Implemented | :x: Not done
[bitclave](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitclave.js) | [BitClave](https://coincheckup.com/coins/bitclave) | CAT | Dynamic | :white_check_mark: Done
[pareto-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pareto-network.js) | [Pareto Network](https://coincheckup.com/coins/pareto-network) | PARETO | Dynamic | :white_check_mark: Done
[okcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/okcash.js) | [OKCash](https://coincheckup.com/coins/okcash) | OK | Dynamic | :white_check_mark: Done
[ecobit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ecobit.js) | [Ecobit](https://coincheckup.com/coins/ecobit) | ECOB | Not Implemented | :x: Not done
[swarm-city](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swarm-city.js) | [Swarm City](https://coincheckup.com/coins/swarm-city) | SWT | Not Implemented | :x: Not done
[guaranteed-ethurance-token-extra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guaranteed-ethurance-token-extra.js) | [Guaranteed Ethurance Token Extra](https://coincheckup.com/coins/guaranteed-ethurance-token-extra) | GETX | Dynamic | :white_check_mark: Done
[biocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biocoin.js) | [BioCoin](https://coincheckup.com/coins/biocoin) | BIO | Not Implemented | :x: Not done
[polyswarm](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polyswarm.js) | [PolySwarm](https://coincheckup.com/coins/polyswarm) | NCT | Dynamic | :white_check_mark: Done
[linker-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linker-coin.js) | [Linker Coin](https://coincheckup.com/coins/linker-coin) | LNC | Dynamic | :white_check_mark: Done
[aventus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aventus.js) | [Aventus](https://coincheckup.com/coins/aventus) | AVT | Dynamic | :white_check_mark: Done
[cargox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cargox.js) | [CargoX](https://coincheckup.com/coins/cargox) | CXO | Dynamic | :white_check_mark: Done
[espers](https://github.com/coincheckup/crypto-supplies/blob/master/coins/espers.js) | [Espers](https://coincheckup.com/coins/espers) | ESP | Not Implemented | :x: Not done
[graft](https://github.com/coincheckup/crypto-supplies/blob/master/coins/graft.js) | [Graft](https://coincheckup.com/coins/graft) | GRFT | Not Implemented | :x: Not done
[canyacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/canyacoin.js) | [CanYaCoin](https://coincheckup.com/coins/canyacoin) | CAN | Dynamic | :white_check_mark: Done
[foldingcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/foldingcoin.js) | [FoldingCoin](https://coincheckup.com/coins/foldingcoin) | FLDC | Not Implemented | :x: Not done
[apx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apx.js) | [APX](https://coincheckup.com/coins/apx) | APX | Not Implemented | :x: Not done
[change](https://github.com/coincheckup/crypto-supplies/blob/master/coins/change.js) | [Change](https://coincheckup.com/coins/change) | CAG | Dynamic | :white_check_mark: Done
[pinkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pinkcoin.js) | [PinkCoin](https://coincheckup.com/coins/pinkcoin) | PINK | Dynamic | :white_check_mark: Done
[heat-ledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/heat-ledger.js) | [HEAT](https://coincheckup.com/coins/heat-ledger) | HEAT | Not Implemented | :x: Not done
[profile-utility-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/profile-utility-token.js) | [Profile Utility Token](https://coincheckup.com/coins/profile-utility-token) | PUT | Not Implemented | :x: Not done
[helbiz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/helbiz.js) | [Helbiz](https://coincheckup.com/coins/helbiz) | HBZ | Dynamic | :white_check_mark: Done
[bittube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bittube.js) | [BitTube](https://coincheckup.com/coins/bittube) | TUBE | Not Implemented | :x: Not done
[gambit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gambit.js) | [Gambit](https://coincheckup.com/coins/gambit) | GAM | Dynamic | :white_check_mark: Done
[bitdegree](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitdegree.js) | [BitDegree](https://coincheckup.com/coins/bitdegree) | BDG | Dynamic | :white_check_mark: Done
[adbank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adbank.js) | [adbank](https://coincheckup.com/coins/adbank) | ADB | Dynamic | :white_check_mark: Done
[mintcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mintcoin.js) | [Mintcoin](https://coincheckup.com/coins/mintcoin) | MINT | Not Implemented | :x: Not done
[zilla](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zilla.js) | [Zilla](https://coincheckup.com/coins/zilla) | ZLA | Dynamic | :white_check_mark: Done
[patientory](https://github.com/coincheckup/crypto-supplies/blob/master/coins/patientory.js) | [Patientory](https://coincheckup.com/coins/patientory) | PTOY | Dynamic | :white_check_mark: Done
[zrcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zrcoin.js) | [ZrCoin](https://coincheckup.com/coins/zrcoin) | ZRC | Not Implemented | :x: Not done
[local-world-forwarders](https://github.com/coincheckup/crypto-supplies/blob/master/coins/local-world-forwarders.js) | [Local World Forwarders](https://coincheckup.com/coins/local-world-forwarders) | LWF | Not Implemented | :x: Not done
[commerceblock](https://github.com/coincheckup/crypto-supplies/blob/master/coins/commerceblock.js) | [CommerceBlock](https://coincheckup.com/coins/commerceblock) | CBT | Dynamic | :white_check_mark: Done
[rentberry](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rentberry.js) | [Rentberry](https://coincheckup.com/coins/rentberry) | BERRY | Dynamic | :white_check_mark: Done
[mktcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mktcoin.js) | [MktCoin](https://coincheckup.com/coins/mktcoin) | MLM | Not Implemented | :x: Not done
[eroscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eroscoin.js) | [Eroscoin](https://coincheckup.com/coins/eroscoin) | ERO | Dynamic | :white_check_mark: Done
[spectiv](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spectiv.js) | [Spectiv](https://coincheckup.com/coins/spectiv) | SIG | Dynamic | :white_check_mark: Done
[encrypgen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/encrypgen.js) | [EncrypGen](https://coincheckup.com/coins/encrypgen) | DNA | Dynamic | :white_check_mark: Done
[asiacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/asiacoin.js) | [AsiaCoin](https://coincheckup.com/coins/asiacoin) | AC | Dynamic | :white_check_mark: Done
[dero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dero.js) | [Dero](https://coincheckup.com/coins/dero) | DERO | Not Implemented | :x: Not done
[zap](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zap.js) | [Zap](https://coincheckup.com/coins/zap) | ZAP | Dynamic | :white_check_mark: Done
[golos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golos.js) | [Golos](https://coincheckup.com/coins/golos) | GOLOS | Not Implemented | :x: Not done
[yocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yocoin.js) | [Yocoin](https://coincheckup.com/coins/yocoin) | YOC | Not Implemented | :x: Not done
[lala-world](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lala-world.js) | [LALA World](https://coincheckup.com/coins/lala-world) | LALA | Dynamic | :white_check_mark: Done
[adhive](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adhive.js) | [AdHive](https://coincheckup.com/coins/adhive) | ADH | Dynamic | :white_check_mark: Done
[ink-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ink-protocol.js) | [Ink Protocol](https://coincheckup.com/coins/ink-protocol) | XNK | Dynamic | :white_check_mark: Done
[sphere](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sphere.js) | [Sphere](https://coincheckup.com/coins/sphere) | SPHR | Not Implemented | :x: Not done
[sense](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sense.js) | [Sense](https://coincheckup.com/coins/sense) | SENSE | Dynamic | :white_check_mark: Done
[b2bx-b2b](https://github.com/coincheckup/crypto-supplies/blob/master/coins/b2bx-b2b.js) | [B2BX](https://coincheckup.com/coins/b2bx-b2b) | B2B | Dynamic | :white_check_mark: Done
[aditus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aditus.js) | [Aditus](https://coincheckup.com/coins/aditus) | ADI | Dynamic | :white_check_mark: Done
[idex-membership](https://github.com/coincheckup/crypto-supplies/blob/master/coins/idex-membership.js) | [IDEX Membership](https://coincheckup.com/coins/idex-membership) | IDXM | Dynamic | :white_check_mark: Done
[fluz-fluz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fluz-fluz.js) | [Fluz Fluz](https://coincheckup.com/coins/fluz-fluz) | FLUZ | Dynamic | :white_check_mark: Done
[sequence](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sequence.js) | [Sequence](https://coincheckup.com/coins/sequence) | SEQ | Not Implemented | :x: Not done
[alis](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alis.js) | [ALIS](https://coincheckup.com/coins/alis) | ALIS | Dynamic | :white_check_mark: Done
[pandacoin-pnd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pandacoin-pnd.js) | [Pandacoin](https://coincheckup.com/coins/pandacoin-pnd) | PND | Not Implemented | :x: Not done
[nimiq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nimiq.js) | [Nimiq Exchange Token](https://coincheckup.com/coins/nimiq) | NET | Not Implemented | :x: Not done
[trust](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trust.js) | [WeTrust](https://coincheckup.com/coins/trust) | TRST | Not Implemented | :x: Not done
[zoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zoin.js) | [Zoin](https://coincheckup.com/coins/zoin) | ZOI | Dynamic | :white_check_mark: Done
[target-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/target-coin.js) | [Target Coin](https://coincheckup.com/coins/target-coin) | TGT | Dynamic | :white_check_mark: Done
[aidcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aidcoin.js) | [AidCoin](https://coincheckup.com/coins/aidcoin) | AID | Dynamic | :white_check_mark: Done
[dotcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dotcoin.js) | [Dotcoin](https://coincheckup.com/coins/dotcoin) | DOT | Dynamic | :white_check_mark: Done
[morpheus-labs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/morpheus-labs.js) | [Morpheus Labs](https://coincheckup.com/coins/morpheus-labs) | MITX | Dynamic | :white_check_mark: Done
[solaris](https://github.com/coincheckup/crypto-supplies/blob/master/coins/solaris.js) | [Solaris](https://coincheckup.com/coins/solaris) | XLR | Dynamic | :white_check_mark: Done
[elixir](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elixir.js) | [Elixir](https://coincheckup.com/coins/elixir) | ELIX | Dynamic | :white_check_mark: Done
[fidelium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fidelium.js) | [Fidelium](https://coincheckup.com/coins/fidelium) | FID | Not Implemented | :x: Not done
[curecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/curecoin.js) | [Curecoin](https://coincheckup.com/coins/curecoin) | CURE | Dynamic | :white_check_mark: Done
[bounty0x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bounty0x.js) | [Bounty0x](https://coincheckup.com/coins/bounty0x) | BNTY | Dynamic | :white_check_mark: Done
[dao-casino](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dao-casino.js) | [DAO.Casino](https://coincheckup.com/coins/dao-casino) | BET | Dynamic | :white_check_mark: Done
[energycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/energycoin.js) | [Energycoin](https://coincheckup.com/coins/energycoin) | ENRG | Dynamic | :white_check_mark: Done
[bitcrystals](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcrystals.js) | [Bitcrystals](https://coincheckup.com/coins/bitcrystals) | BCY | Not Implemented | :x: Not done
[cfun](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cfun.js) | [CFun](https://coincheckup.com/coins/cfun) | CFUN | Not Implemented | :x: Not done
[colu-local-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/colu-local-network.js) | [Colu Local Network](https://coincheckup.com/coins/colu-local-network) | CLN | Dynamic | :white_check_mark: Done
[1world](https://github.com/coincheckup/crypto-supplies/blob/master/coins/1world.js) | [1World](https://coincheckup.com/coins/1world) | 1WO | Dynamic | :white_check_mark: Done
[morpheus-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/morpheus-network.js) | [Morpheus Network](https://coincheckup.com/coins/morpheus-network) | MORPH | Dynamic | :white_check_mark: Done
[dovu](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dovu.js) | [Dovu](https://coincheckup.com/coins/dovu) | DOVU | Dynamic | :white_check_mark: Done
[u.cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/u.cash.js) | [U.CASH](https://coincheckup.com/coins/u.cash) | UCASH | Not Implemented | :x: Not done
[leadcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leadcoin.js) | [Leadcoin](https://coincheckup.com/coins/leadcoin) | LDC | Dynamic | :white_check_mark: Done
[spectrecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spectrecoin.js) | [Spectrecoin](https://coincheckup.com/coins/spectrecoin) | XSPEC | Dynamic | :white_check_mark: Done
[adshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adshares.js) | [AdShares](https://coincheckup.com/coins/adshares) | ADST | Dynamic | :white_check_mark: Done
[mysterium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mysterium.js) | [Mysterium](https://coincheckup.com/coins/mysterium) | MYST | Dynamic | :white_check_mark: Done
[astro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/astro.js) | [Astro](https://coincheckup.com/coins/astro) | ASTRO | Dynamic | :white_check_mark: Done
[atbcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atbcoin.js) | [ATBCoin](https://coincheckup.com/coins/atbcoin) | ATB | Not Implemented | :x: Not done
[coinfi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinfi.js) | [CoinFi](https://coincheckup.com/coins/coinfi) | COFI | Dynamic | :white_check_mark: Done
[primalbase](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primalbase.js) | [Primalbase Token](https://coincheckup.com/coins/primalbase) | PBT | Not Implemented | :x: Not done
[auroracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/auroracoin.js) | [Auroracoin](https://coincheckup.com/coins/auroracoin) | AUR | Not Implemented | :x: Not done
[real](https://github.com/coincheckup/crypto-supplies/blob/master/coins/real.js) | [REAL](https://coincheckup.com/coins/real) | REAL | Dynamic | :white_check_mark: Done
[privatix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/privatix.js) | [Privatix](https://coincheckup.com/coins/privatix) | PRIX | Dynamic | :white_check_mark: Done
[toacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/toacoin.js) | [ToaCoin](https://coincheckup.com/coins/toacoin) | TOA | Dynamic | :white_check_mark: Done
[faceter](https://github.com/coincheckup/crypto-supplies/blob/master/coins/faceter.js) | [Faceter](https://coincheckup.com/coins/faceter) | FACE | Dynamic | :white_check_mark: Done
[pluton](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pluton.js) | [Pluton](https://coincheckup.com/coins/pluton) | PLU | Not Implemented | :x: Not done
[sether](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sether.js) | [Sether](https://coincheckup.com/coins/sether) | SETH | Dynamic | :white_check_mark: Done
[trueflip](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trueflip.js) | [TrueFlip](https://coincheckup.com/coins/trueflip) | TFL | Dynamic | :white_check_mark: Done
[devery](https://github.com/coincheckup/crypto-supplies/blob/master/coins/devery.js) | [Devery](https://coincheckup.com/coins/devery) | EVE | Dynamic | :white_check_mark: Done
[goldcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldcoin.js) | [GoldCoin](https://coincheckup.com/coins/goldcoin) | GLD | Dynamic | :white_check_mark: Done
[circuits-of-value](https://github.com/coincheckup/crypto-supplies/blob/master/coins/circuits-of-value.js) | [Circuits of Value](https://coincheckup.com/coins/circuits-of-value) | COVAL | Not Implemented | :x: Not done
[hurify](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hurify.js) | [Hurify](https://coincheckup.com/coins/hurify) | HUR | Dynamic | :white_check_mark: Done
[lending-block](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lending-block.js) | [Lendingblock](https://coincheckup.com/coins/lending-block) | LND | Not Implemented | :x: Not done
[eztoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eztoken.js) | [EZToken](https://coincheckup.com/coins/eztoken) | EZT | Dynamic | :white_check_mark: Done
[maxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maxcoin.js) | [MaxCoin](https://coincheckup.com/coins/maxcoin) | MAX | Dynamic | :white_check_mark: Done
[atmos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atmos.js) | [Atmos](https://coincheckup.com/coins/atmos) | ATMOS | Dynamic | :white_check_mark: Done
[bitdice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitdice.js) | [BitDice](https://coincheckup.com/coins/bitdice) | CSNO | Dynamic | :white_check_mark: Done
[clearpoll](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clearpoll.js) | [ClearPoll](https://coincheckup.com/coins/clearpoll) | POLL | Dynamic | :white_check_mark: Done
[nper](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nper.js) | [NPER](https://coincheckup.com/coins/nper) | NPER | Not Implemented | :x: Not done
[snovio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/snovio.js) | [Snovio](https://coincheckup.com/coins/snovio) | SNOV | Dynamic | :white_check_mark: Done
[travala](https://github.com/coincheckup/crypto-supplies/blob/master/coins/travala.js) | [Travala](https://coincheckup.com/coins/travala) | AVA | Not Implemented | :x: Not done
[bee-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bee-token.js) | [Bee Token](https://coincheckup.com/coins/bee-token) | BEE | Dynamic | :white_check_mark: Done
[korecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/korecoin.js) | [Kore](https://coincheckup.com/coins/korecoin) | KORE | Not Implemented | :x: Not done
[vice-industry-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vice-industry-token.js) | [Vice Industry Token](https://coincheckup.com/coins/vice-industry-token) | VIT | Dynamic | :white_check_mark: Done
[apr-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/apr-coin.js) | [APR Coin](https://coincheckup.com/coins/apr-coin) | APR | Not Implemented | :x: Not done
[ip-exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ip-exchange.js) | [IP Exchange](https://coincheckup.com/coins/ip-exchange) | IPSX | Dynamic | :white_check_mark: Done
[artbyte-aby](https://github.com/coincheckup/crypto-supplies/blob/master/coins/artbyte-aby.js) | [ArtByte](https://coincheckup.com/coins/artbyte-aby) | ABY | Not Implemented | :x: Not done
[transfercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/transfercoin.js) | [TransferCoin](https://coincheckup.com/coins/transfercoin) | TX | Dynamic | :white_check_mark: Done
[bitcoinz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoinz.js) | [BitcoinZ](https://coincheckup.com/coins/bitcoinz) | BTCZ | Not Implemented | :x: Not done
[travelflex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/travelflex.js) | [Travelflex](https://coincheckup.com/coins/travelflex) | TRF | Not Implemented | :x: Not done
[fedoracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fedoracoin.js) | [FedoraCoin](https://coincheckup.com/coins/fedoracoin) | TIPS | Not Implemented | :x: Not done
[block-array](https://github.com/coincheckup/crypto-supplies/blob/master/coins/block-array.js) | [Block Array](https://coincheckup.com/coins/block-array) | ARY | Dynamic | :white_check_mark: Done
[worldcore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/worldcore.js) | [Worldcore](https://coincheckup.com/coins/worldcore) | WRC | Dynamic | :white_check_mark: Done
[mybit-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mybit-token.js) | [MyBit Token](https://coincheckup.com/coins/mybit-token) | MYB | Dynamic | :white_check_mark: Done
[hoqu](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hoqu.js) | [HOQU](https://coincheckup.com/coins/hoqu) | HQX | Dynamic | :white_check_mark: Done
[obits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/obits.js) | [OBITS](https://coincheckup.com/coins/obits) | OBITS | Not Implemented | :x: Not done
[chips](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chips.js) | [CHIPS](https://coincheckup.com/coins/chips) | CHIPS | Not Implemented | :x: Not done
[gladius-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gladius-token.js) | [Gladius Token](https://coincheckup.com/coins/gladius-token) | GLA | Dynamic | :white_check_mark: Done
[atlant](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atlant.js) | [ATLANT](https://coincheckup.com/coins/atlant) | ATL | Dynamic | :white_check_mark: Done
[ethorse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethorse.js) | [Ethorse](https://coincheckup.com/coins/ethorse) | HORSE | Dynamic | :white_check_mark: Done
[internxt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internxt.js) | [Internxt](https://coincheckup.com/coins/internxt) | INXT | Dynamic | :white_check_mark: Done
[syndicate](https://github.com/coincheckup/crypto-supplies/blob/master/coins/syndicate.js) | [Syndicate](https://coincheckup.com/coins/syndicate) | SYNX | Not Implemented | :x: Not done
[breakout-stake](https://github.com/coincheckup/crypto-supplies/blob/master/coins/breakout-stake.js) | [Breakout Stake](https://coincheckup.com/coins/breakout-stake) | BRX | Not Implemented | :x: Not done
[goodomy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goodomy.js) | [Goodomy](https://coincheckup.com/coins/goodomy) | GOOD | Dynamic | :white_check_mark: Done
[bitcoin-plus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-plus.js) | [Bitcoin Plus](https://coincheckup.com/coins/bitcoin-plus) | XBC | Not Implemented | :x: Not done
[verime](https://github.com/coincheckup/crypto-supplies/blob/master/coins/verime.js) | [VeriME](https://coincheckup.com/coins/verime) | VME | Dynamic | :white_check_mark: Done
[open-trading-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/open-trading-network.js) | [Open Trading Network](https://coincheckup.com/coins/open-trading-network) | OTN | Dynamic | :white_check_mark: Done
[dether](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dether.js) | [Dether](https://coincheckup.com/coins/dether) | DTH | Dynamic | :white_check_mark: Done
[pesetacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pesetacoin.js) | [Pesetacoin](https://coincheckup.com/coins/pesetacoin) | PTC | Dynamic | :white_check_mark: Done
[fundrequest](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fundrequest.js) | [FundRequest](https://coincheckup.com/coins/fundrequest) | FND | Dynamic | :white_check_mark: Done
[b3coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/b3coin.js) | [B3Coin](https://coincheckup.com/coins/b3coin) | KB3 | Dynamic | :white_check_mark: Done
[payfair](https://github.com/coincheckup/crypto-supplies/blob/master/coins/payfair.js) | [Payfair](https://coincheckup.com/coins/payfair) | PFR | Dynamic | :white_check_mark: Done
[0xbitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/0xbitcoin.js) | [0xBitcoin](https://coincheckup.com/coins/0xbitcoin) | 0xBTC | Not Implemented | :x: Not done
[internet-of-people](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internet-of-people.js) | [Internet of People](https://coincheckup.com/coins/internet-of-people) | IOP | Not Implemented | :x: Not done
[ixcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ixcoin.js) | [Ixcoin](https://coincheckup.com/coins/ixcoin) | IXC | Dynamic | :white_check_mark: Done
[2give](https://github.com/coincheckup/crypto-supplies/blob/master/coins/2give.js) | [2GIVE](https://coincheckup.com/coins/2give) | 2GIVE | Dynamic | :white_check_mark: Done
[sumokoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sumokoin.js) | [Sumokoin](https://coincheckup.com/coins/sumokoin) | SUMO | Not Implemented | :x: Not done
[cryptopay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptopay.js) | [Cryptopay](https://coincheckup.com/coins/cryptopay) | CPAY | Dynamic | :white_check_mark: Done
[insights-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insights-network.js) | [Insights Network](https://coincheckup.com/coins/insights-network) | INSTAR | Dynamic | :white_check_mark: Done
[oyster-shell](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oyster-shell.js) | [Oyster Shell](https://coincheckup.com/coins/oyster-shell) | SHL | Dynamic | :white_check_mark: Done
[auctus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/auctus.js) | [Auctus](https://coincheckup.com/coins/auctus) | AUC | Dynamic | :white_check_mark: Done
[fidentiax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fidentiax.js) | [FidentiaX](https://coincheckup.com/coins/fidentiax) | FDX | Dynamic | :white_check_mark: Done
[geocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/geocoin.js) | [GeoCoin](https://coincheckup.com/coins/geocoin) | GEO | Dynamic | :white_check_mark: Done
[global-cryptocurrency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-cryptocurrency.js) | [Global Cryptocurrency](https://coincheckup.com/coins/global-cryptocurrency) | GCC | Not Implemented | :x: Not done
[nubits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nubits.js) | [NuBits](https://coincheckup.com/coins/nubits) | USNBT | Not Implemented | :x: Not done
[herocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/herocoin.js) | [HEROcoin](https://coincheckup.com/coins/herocoin) | PLAY | Dynamic | :white_check_mark: Done
[hackspace-capital](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hackspace-capital.js) | [Hackspace Capital](https://coincheckup.com/coins/hackspace-capital) | HAC | Dynamic | :white_check_mark: Done
[hyperstake](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hyperstake.js) | [HyperStake](https://coincheckup.com/coins/hyperstake) | HYP | Not Implemented | :x: Not done
[posw-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/posw-coin.js) | [PoSW Coin](https://coincheckup.com/coins/posw-coin) | POSW | Not Implemented | :x: Not done
[education-ecosystem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/education-ecosystem.js) | [Education Ecosystem](https://coincheckup.com/coins/education-ecosystem) | LEDU | Dynamic | :white_check_mark: Done
[ethereum-blue](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-blue.js) | [Blue Protocol](https://coincheckup.com/coins/ethereum-blue) | BLUE | Dynamic | :white_check_mark: Done
[monkey-project](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monkey-project.js) | [Monkey Project](https://coincheckup.com/coins/monkey-project) | MONK | Not Implemented | :x: Not done
[jet8](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jet8.js) | [JET8](https://coincheckup.com/coins/jet8) | J8T | Dynamic | :white_check_mark: Done
[haven-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/haven-protocol.js) | [Haven Protocol](https://coincheckup.com/coins/haven-protocol) | XHV | Not Implemented | :x: Not done
[experty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/experty.js) | [Experty](https://coincheckup.com/coins/experty) | EXY | Dynamic | :white_check_mark: Done
[starbase](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starbase.js) | [Starbase](https://coincheckup.com/coins/starbase) | STAR | Dynamic | :white_check_mark: Done
[sharpe-platform-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharpe-platform-token.js) | [Sharpe Platform Token](https://coincheckup.com/coins/sharpe-platform-token) | SHP | Dynamic | :white_check_mark: Done
[waves-community-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/waves-community-token.js) | [Waves Community Token](https://coincheckup.com/coins/waves-community-token) | WCT | Not Implemented | :x: Not done
[universal-currency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universal-currency.js) | [Universal Currency](https://coincheckup.com/coins/universal-currency) | UNIT | Not Implemented | :x: Not done
[hellogold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hellogold.js) | [HelloGold](https://coincheckup.com/coins/hellogold) | HGT | Dynamic | :white_check_mark: Done
[opus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/opus.js) | [Opus](https://coincheckup.com/coins/opus) | OPT | Dynamic | :white_check_mark: Done
[sportyfi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sportyfi.js) | [SportyCo](https://coincheckup.com/coins/sportyfi) | SPF | Dynamic | :white_check_mark: Done
[neutron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neutron.js) | [Neutron](https://coincheckup.com/coins/neutron) | NTRN | Not Implemented | :x: Not done
[bigbom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bigbom.js) | [Bigbom](https://coincheckup.com/coins/bigbom) | BBO | Dynamic | :white_check_mark: Done
[europecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/europecoin.js) | [EuropeCoin](https://coincheckup.com/coins/europecoin) | ERC | Dynamic | :white_check_mark: Done
[spectre.ai-utility-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spectre.ai-utility-token.js) | [Spectre.ai Utility Token](https://coincheckup.com/coins/spectre.ai-utility-token) | SXUT | Not Implemented | :x: Not done
[buzzcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/buzzcoin.js) | [BuzzCoin](https://coincheckup.com/coins/buzzcoin) | BUZZ | Not Implemented | :x: Not done
[monoeci](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monoeci.js) | [Monoeci](https://coincheckup.com/coins/monoeci) | XMCC | Not Implemented | :x: Not done
[social-send](https://github.com/coincheckup/crypto-supplies/blob/master/coins/social-send.js) | [Social Send](https://coincheckup.com/coins/social-send) | SEND | Not Implemented | :x: Not done
[upfiring](https://github.com/coincheckup/crypto-supplies/blob/master/coins/upfiring.js) | [Upfiring](https://coincheckup.com/coins/upfiring) | UFR | Dynamic | :white_check_mark: Done
[social](https://github.com/coincheckup/crypto-supplies/blob/master/coins/social.js) | [Sociall](https://coincheckup.com/coins/social) | SCL | Dynamic | :white_check_mark: Done
[bitstation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitstation.js) | [BitStation](https://coincheckup.com/coins/bitstation) | BSTN | Dynamic | :white_check_mark: Done
[amlt-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/amlt-token.js) | [AMLT Token](https://coincheckup.com/coins/amlt-token) | AMLT | Not Implemented | :x: Not done
[mercury-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mercury-protocol.js) | [Mercury Protocol](https://coincheckup.com/coins/mercury-protocol) | GMT | Dynamic | :white_check_mark: Done
[veriumreserve](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veriumreserve.js) | [VeriumReserve](https://coincheckup.com/coins/veriumreserve) | VRM | Not Implemented | :x: Not done
[pure](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pure.js) | [Pure](https://coincheckup.com/coins/pure) | PURE | Not Implemented | :x: Not done
[masari](https://github.com/coincheckup/crypto-supplies/blob/master/coins/masari.js) | [Masari](https://coincheckup.com/coins/masari) | MSR | Not Implemented | :x: Not done
[qwark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qwark.js) | [Qwark](https://coincheckup.com/coins/qwark) | QWARK | Not Implemented | :x: Not done
[zeitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zeitcoin.js) | [Zeitcoin](https://coincheckup.com/coins/zeitcoin) | ZEIT | Dynamic | :white_check_mark: Done
[starta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starta.js) | [Starta](https://coincheckup.com/coins/starta) | STA | Not Implemented | :x: Not done
[rupaya-old](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rupaya-old.js) | [Rupaya](https://coincheckup.com/coins/rupaya-old) | RUPX | Dynamic | :white_check_mark: Done
[riecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/riecoin.js) | [Riecoin](https://coincheckup.com/coins/riecoin) | RIC | Dynamic | :white_check_mark: Done
[invacio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/invacio.js) | [Invacio](https://coincheckup.com/coins/invacio) | INV | Dynamic | :white_check_mark: Done
[vslice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vslice.js) | [vSlice](https://coincheckup.com/coins/vslice) | VSL | Dynamic | :white_check_mark: Done
[fintrux-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fintrux-network.js) | [FintruX Network](https://coincheckup.com/coins/fintrux-network) | FTX | Dynamic | :white_check_mark: Done
[tokia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokia.js) | [Tokia](https://coincheckup.com/coins/tokia) | TKA | Dynamic | :white_check_mark: Done
[rex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rex.js) | [imbrex](https://coincheckup.com/coins/rex) | REX | Dynamic | :white_check_mark: Done
[publica](https://github.com/coincheckup/crypto-supplies/blob/master/coins/publica.js) | [Publica](https://coincheckup.com/coins/publica) | PBL | Dynamic | :white_check_mark: Done
[hicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hicoin.js) | [HiCoin](https://coincheckup.com/coins/hicoin) | XHI | Not Implemented | :x: Not done
[dopecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dopecoin.js) | [DopeCoin](https://coincheckup.com/coins/dopecoin) | DOPE | Dynamic | :white_check_mark: Done
[tokes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokes.js) | [Tokes](https://coincheckup.com/coins/tokes) | TKS | Not Implemented | :x: Not done
[indorse-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/indorse-token.js) | [Indorse Token](https://coincheckup.com/coins/indorse-token) | IND | Dynamic | :white_check_mark: Done
[e-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/e-coin.js) | [E-coin](https://coincheckup.com/coins/e-coin) | ECN | Not Implemented | :x: Not done
[voise](https://github.com/coincheckup/crypto-supplies/blob/master/coins/voise.js) | [Voise](https://coincheckup.com/coins/voise) | VOISE | Dynamic | :white_check_mark: Done
[capricoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/capricoin.js) | [Capricoin](https://coincheckup.com/coins/capricoin) | CPC | Dynamic | :white_check_mark: Done
[exclusivecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exclusivecoin.js) | [ExclusiveCoin](https://coincheckup.com/coins/exclusivecoin) | EXCL | Not Implemented | :x: Not done
[reftoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/reftoken.js) | [RefToken](https://coincheckup.com/coins/reftoken) | REF | Not Implemented | :x: Not done
[bonpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bonpay.js) | [Bonpay](https://coincheckup.com/coins/bonpay) | BON | Dynamic | :white_check_mark: Done
[cryptoping](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoping.js) | [CryptoPing](https://coincheckup.com/coins/cryptoping) | PING | Not Implemented | :x: Not done
[gatcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gatcoin.js) | [Gatcoin](https://coincheckup.com/coins/gatcoin) | GAT | Dynamic | :white_check_mark: Done
[bitcloud](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcloud.js) | [Bitcloud](https://coincheckup.com/coins/bitcloud) | BTDX | Dynamic | :white_check_mark: Done
[altcoin-alt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/altcoin-alt.js) | [Altcoin](https://coincheckup.com/coins/altcoin-alt) | ALT | Not Implemented | :x: Not done
[interstellar-holdings](https://github.com/coincheckup/crypto-supplies/blob/master/coins/interstellar-holdings.js) | [Interstellar Holdings](https://coincheckup.com/coins/interstellar-holdings) | HOLD | Not Implemented | :x: Not done
[mywish](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mywish.js) | [MyWish](https://coincheckup.com/coins/mywish) | WISH | Dynamic | :white_check_mark: Done
[belugapay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/belugapay.js) | [BelugaPay](https://coincheckup.com/coins/belugapay) | BBI | Dynamic | :white_check_mark: Done
[karbo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/karbo.js) | [Karbo](https://coincheckup.com/coins/karbo) | KRB | Not Implemented | :x: Not done
[memetic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/memetic.js) | [Memetic / PepeCoin](https://coincheckup.com/coins/memetic) | MEME | Not Implemented | :x: Not done
[terracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/terracoin.js) | [Terracoin](https://coincheckup.com/coins/terracoin) | TRC | Not Implemented | :x: Not done
[bitmark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitmark.js) | [Bitmark](https://coincheckup.com/coins/bitmark) | BTM | Dynamic | :white_check_mark: Done
[quark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quark.js) | [Quark](https://coincheckup.com/coins/quark) | QRK | Dynamic | :white_check_mark: Done
[hash-rush](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hash-rush.js) | [Hush](https://coincheckup.com/coins/hash-rush) | HUSH | Not Implemented | :x: Not done
[bluecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bluecoin.js) | [BlueCoin](https://coincheckup.com/coins/bluecoin) | BLU | Not Implemented | :x: Not done
[blockpool](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockpool.js) | [Blockpool](https://coincheckup.com/coins/blockpool) | BPL | Not Implemented | :x: Not done
[crave](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crave.js) | [Crave](https://coincheckup.com/coins/crave) | CRAVE | Not Implemented | :x: Not done
[i0coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/i0coin.js) | [I0Coin](https://coincheckup.com/coins/i0coin) | I0C | Dynamic | :white_check_mark: Done
[iungo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iungo.js) | [Iungo](https://coincheckup.com/coins/iungo) | ING | Dynamic | :white_check_mark: Done
[eboost](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eboost.js) | [eBoost](https://coincheckup.com/coins/eboost) | EBST | Not Implemented | :x: Not done
[bunnycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bunnycoin.js) | [BunnyCoin](https://coincheckup.com/coins/bunnycoin) | BUN | Not Implemented | :x: Not done
[blockcat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockcat.js) | [BlockCAT](https://coincheckup.com/coins/blockcat) | CAT | Dynamic | :white_check_mark: Done
[bullion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bullion.js) | [Bullion](https://coincheckup.com/coins/bullion) | CBX | Dynamic | :white_check_mark: Done
[cannabiscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cannabiscoin.js) | [CannabisCoin](https://coincheckup.com/coins/cannabiscoin) | CANN | Dynamic | :white_check_mark: Done
[digipulse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digipulse.js) | [DigiPulse](https://coincheckup.com/coins/digipulse) | DGPT | Dynamic | :white_check_mark: Done
[viuly](https://github.com/coincheckup/crypto-supplies/blob/master/coins/viuly.js) | [Viuly](https://coincheckup.com/coins/viuly) | VIU | Dynamic | :white_check_mark: Done
[breakout](https://github.com/coincheckup/crypto-supplies/blob/master/coins/breakout.js) | [Breakout](https://coincheckup.com/coins/breakout) | BRK | Not Implemented | :x: Not done
[campuscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/campuscoin.js) | [CampusCoin](https://coincheckup.com/coins/campuscoin) | CMPCO | Not Implemented | :x: Not done
[ufo-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ufo-coin.js) | [Uniform Fiscal Object](https://coincheckup.com/coins/ufo-coin) | UFO | Not Implemented | :x: Not done
[maverick-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maverick-chain.js) | [Maverick Chain](https://coincheckup.com/coins/maverick-chain) | MVC | Dynamic | :white_check_mark: Done
[elite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elite.js) | [Elite](https://coincheckup.com/coins/elite) | 1337 | Not Implemented | :x: Not done
[ethbits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethbits.js) | [Ethbits](https://coincheckup.com/coins/ethbits) | ETBS | Dynamic | :white_check_mark: Done
[denarius](https://github.com/coincheckup/crypto-supplies/blob/master/coins/denarius.js) | [Denarius](https://coincheckup.com/coins/denarius) | DNR | Not Implemented | :x: Not done
[vtorrent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vtorrent.js) | [vTorrent](https://coincheckup.com/coins/vtorrent) | VTR | Not Implemented | :x: Not done
[parkgene](https://github.com/coincheckup/crypto-supplies/blob/master/coins/parkgene.js) | [Parkgene](https://coincheckup.com/coins/parkgene) | GENE | Dynamic | :white_check_mark: Done
[galactrum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/galactrum.js) | [Galactrum](https://coincheckup.com/coins/galactrum) | ORE | Not Implemented | :x: Not done
[lampix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lampix.js) | [Lampix](https://coincheckup.com/coins/lampix) | PIX | Dynamic | :white_check_mark: Done
[force](https://github.com/coincheckup/crypto-supplies/blob/master/coins/force.js) | [FORCE](https://coincheckup.com/coins/force) | FOR | Not Implemented | :x: Not done
[flypme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flypme.js) | [FlypMe](https://coincheckup.com/coins/flypme) | FYP | Dynamic | :white_check_mark: Done
[sexcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sexcoin.js) | [Sexcoin](https://coincheckup.com/coins/sexcoin) | SXC | Dynamic | :white_check_mark: Done
[copytrack](https://github.com/coincheckup/crypto-supplies/blob/master/coins/copytrack.js) | [COPYTRACK](https://coincheckup.com/coins/copytrack) | CPY | Dynamic | :white_check_mark: Done
[sharechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharechain.js) | [Sharechain](https://coincheckup.com/coins/sharechain) | SSS | Dynamic | :white_check_mark: Done
[anoncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/anoncoin.js) | [Anoncoin](https://coincheckup.com/coins/anoncoin) | ANC | Dynamic | :white_check_mark: Done
[ties-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ties-network.js) | [Ties.DB](https://coincheckup.com/coins/ties-network) | TIE | Dynamic | :white_check_mark: Done
[vezt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vezt.js) | [Vezt](https://coincheckup.com/coins/vezt) | VZT | Dynamic | :white_check_mark: Done
[flik](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flik.js) | [FLiK](https://coincheckup.com/coins/flik) | FLIK | Dynamic | :white_check_mark: Done
[xgox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xgox.js) | [XGOX](https://coincheckup.com/coins/xgox) | XGOX | Not Implemented | :x: Not done
[fantomcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fantomcoin.js) | [Fantomcoin](https://coincheckup.com/coins/fantomcoin) | FCN | Not Implemented | :x: Not done
[chainium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chainium.js) | [Chainium](https://coincheckup.com/coins/chainium) | CHX | Dynamic | :white_check_mark: Done
[naviaddress](https://github.com/coincheckup/crypto-supplies/blob/master/coins/naviaddress.js) | [Naviaddress](https://coincheckup.com/coins/naviaddress) | NAVI | Not Implemented | :x: Not done
[tokenbox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenbox.js) | [Tokenbox](https://coincheckup.com/coins/tokenbox) | TBX | Dynamic | :white_check_mark: Done
[startercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/startercoin.js) | [StarterCoin](https://coincheckup.com/coins/startercoin) | STAC | Dynamic | :white_check_mark: Done
[magiccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magiccoin.js) | [MagicCoin](https://coincheckup.com/coins/magiccoin) | MAGE | Not Implemented | :x: Not done
[phi-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phi-token.js) | [PHI Token](https://coincheckup.com/coins/phi-token) | PHI | Not Implemented | :x: Not done
[coinlancer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinlancer.js) | [Coinlancer](https://coincheckup.com/coins/coinlancer) | CL | Dynamic | :white_check_mark: Done
[litedoge](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litedoge.js) | [LiteDoge](https://coincheckup.com/coins/litedoge) | LDOGE | Not Implemented | :x: Not done
[eventchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eventchain.js) | [EventChain](https://coincheckup.com/coins/eventchain) | EVC | Dynamic | :white_check_mark: Done
[daneel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daneel.js) | [Daneel](https://coincheckup.com/coins/daneel) | DAN | Dynamic | :white_check_mark: Done
[autonio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/autonio.js) | [Autonio](https://coincheckup.com/coins/autonio) | NIO | Dynamic | :white_check_mark: Done
[nullex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nullex.js) | [Nullex](https://coincheckup.com/coins/nullex) | NLX | Not Implemented | :x: Not done
[evergreencoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/evergreencoin.js) | [EverGreenCoin](https://coincheckup.com/coins/evergreencoin) | EGC | Dynamic | :white_check_mark: Done
[zephyr](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zephyr.js) | [Zephyr](https://coincheckup.com/coins/zephyr) | ZEPH | Not Implemented | :x: Not done
[audiocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/audiocoin.js) | [AudioCoin](https://coincheckup.com/coins/audiocoin) | ADC | Dynamic | :white_check_mark: Done
[teslacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/teslacoin.js) | [TeslaCoin](https://coincheckup.com/coins/teslacoin) | TES | Dynamic | :white_check_mark: Done
[vsync](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vsync.js) | [Vsync](https://coincheckup.com/coins/vsync) | VSX | Not Implemented | :x: Not done
[trakinvest](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trakinvest.js) | [TrakInvest](https://coincheckup.com/coins/trakinvest) | TRAK | Not Implemented | :x: Not done
[monster-byte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monster-byte.js) | [Monster Byte](https://coincheckup.com/coins/monster-byte) | MBI | Not Implemented | :x: Not done
[xenon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xenon.js) | [Xenon](https://coincheckup.com/coins/xenon) | XNN | Dynamic | :white_check_mark: Done
[verify](https://github.com/coincheckup/crypto-supplies/blob/master/coins/verify.js) | [Verify](https://coincheckup.com/coins/verify) | CRED | Dynamic | :white_check_mark: Done
[commodity-ad-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/commodity-ad-network.js) | [Commodity Ad Network](https://coincheckup.com/coins/commodity-ad-network) | CDX | Dynamic | :white_check_mark: Done
[aigang](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aigang.js) | [Aigang](https://coincheckup.com/coins/aigang) | AIX | Dynamic | :white_check_mark: Done
[syncfab](https://github.com/coincheckup/crypto-supplies/blob/master/coins/syncfab.js) | [SyncFab](https://coincheckup.com/coins/syncfab) | MFG | Dynamic | :white_check_mark: Done
[sugar-exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sugar-exchange.js) | [Sugar Exchange](https://coincheckup.com/coins/sugar-exchange) | SGR | Dynamic | :white_check_mark: Done
[ong.social](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ong.social.js) | [onG.social](https://coincheckup.com/coins/ong.social) | ONG | Not Implemented | :x: Not done
[loci-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loci-coin.js) | [LOCIcoin](https://coincheckup.com/coins/loci-coin) | LOCI | Not Implemented | :x: Not done
[pylon-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pylon-network.js) | [Pylon Network](https://coincheckup.com/coins/pylon-network) | PYLNT | Dynamic | :white_check_mark: Done
[chaincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chaincoin.js) | [ChainCoin](https://coincheckup.com/coins/chaincoin) | CHC | Not Implemented | :x: Not done
[tracto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tracto.js) | [Tracto](https://coincheckup.com/coins/tracto) | TRCT | Dynamic | :white_check_mark: Done
[wearesatoshi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wearesatoshi.js) | [WeAreSatoshi](https://coincheckup.com/coins/wearesatoshi) | WSX | Dynamic | :white_check_mark: Done
[boutspro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boutspro.js) | [BoutsPro](https://coincheckup.com/coins/boutspro) | BOUTS | Not Implemented | :x: Not done
[kobocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kobocoin.js) | [Kobocoin](https://coincheckup.com/coins/kobocoin) | KOBO | Dynamic | :white_check_mark: Done
[russiacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/russiacoin.js) | [RussiaCoin](https://coincheckup.com/coins/russiacoin) | RC | Not Implemented | :x: Not done
[ergo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ergo.js) | [Ergo](https://coincheckup.com/coins/ergo) | EFYT | Not Implemented | :x: Not done
[digitalprice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitalprice.js) | [DigitalPrice](https://coincheckup.com/coins/digitalprice) | DP | Not Implemented | :x: Not done
[fantasygold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fantasygold.js) | [FantasyGold](https://coincheckup.com/coins/fantasygold) | FGC | Not Implemented | :x: Not done
[hirematch](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hirematch.js) | [HireMatch](https://coincheckup.com/coins/hirematch) | HIRE | Not Implemented | :x: Not done
[ignition](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ignition.js) | [Ignition](https://coincheckup.com/coins/ignition) | IC | Dynamic | :white_check_mark: Done
[dix-asset](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dix-asset.js) | [Dix Asset](https://coincheckup.com/coins/dix-asset) | DIX | Not Implemented | :x: Not done
[darcrus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/darcrus.js) | [Darcrus](https://coincheckup.com/coins/darcrus) | DAR | Not Implemented | :x: Not done
[condensate](https://github.com/coincheckup/crypto-supplies/blob/master/coins/condensate.js) | [Condensate](https://coincheckup.com/coins/condensate) | RAIN | Not Implemented | :x: Not done
[creativecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/creativecoin.js) | [Creativecoin](https://coincheckup.com/coins/creativecoin) | CREA | Dynamic | :white_check_mark: Done
[huntercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/huntercoin.js) | [HunterCoin](https://coincheckup.com/coins/huntercoin) | HUC | Not Implemented | :x: Not done
[op-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/op-coin.js) | [OP Coin](https://coincheckup.com/coins/op-coin) | OPC | Not Implemented | :x: Not done
[noblecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/noblecoin.js) | [NobleCoin](https://coincheckup.com/coins/noblecoin) | NOBL | Dynamic | :white_check_mark: Done
[bitwhite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitwhite.js) | [BitWhite](https://coincheckup.com/coins/bitwhite) | BTW | Not Implemented | :x: Not done
[hat.exchange](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hat.exchange.js) | [Hat.Exchange](https://coincheckup.com/coins/hat.exchange) | HAT | Not Implemented | :x: Not done
[trustplus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trustplus.js) | [TrustPlus](https://coincheckup.com/coins/trustplus) | TRUST | Dynamic | :white_check_mark: Done
[magi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magi.js) | [Magi](https://coincheckup.com/coins/magi) | XMG | Dynamic | :white_check_mark: Done
[stellite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stellite.js) | [Stellite](https://coincheckup.com/coins/stellite) | XTL | Not Implemented | :x: Not done
[biblepay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biblepay.js) | [BiblePay](https://coincheckup.com/coins/biblepay) | BBP | Not Implemented | :x: Not done
[version](https://github.com/coincheckup/crypto-supplies/blob/master/coins/version.js) | [Version](https://coincheckup.com/coins/version) | V | Not Implemented | :x: Not done
[e-gulden](https://github.com/coincheckup/crypto-supplies/blob/master/coins/e-gulden.js) | [e-Gulden](https://coincheckup.com/coins/e-gulden) | EFL | Dynamic | :white_check_mark: Done
[encryptotel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/encryptotel.js) | [EncryptoTel [WAVES]](https://coincheckup.com/coins/encryptotel) | ETT | Not Implemented | :x: Not done
[bitswift](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitswift.js) | [Bitswift](https://coincheckup.com/coins/bitswift) | SWIFT | Dynamic | :white_check_mark: Done
[tokenstars](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokenstars.js) | [TokenStars](https://coincheckup.com/coins/tokenstars) | TEAM | Dynamic | :white_check_mark: Done
[ace](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ace.js) | [Ace](https://coincheckup.com/coins/ace) | ACE | Dynamic | :white_check_mark: Done
[creditbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/creditbit.js) | [Creditbit](https://coincheckup.com/coins/creditbit) | CRB | Dynamic | :white_check_mark: Done
[zero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zero.js) | [Zero](https://coincheckup.com/coins/zero) | ZER | Not Implemented | :x: Not done
[obsidian](https://github.com/coincheckup/crypto-supplies/blob/master/coins/obsidian.js) | [Obsidian](https://coincheckup.com/coins/obsidian) | ODN | Not Implemented | :x: Not done
[gcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gcoin.js) | [GCN Coin](https://coincheckup.com/coins/gcoin) | GCN | Not Implemented | :x: Not done
[goldmint](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldmint.js) | [GoldMint](https://coincheckup.com/coins/goldmint) | MNTP | Dynamic | :white_check_mark: Done
[trezarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trezarcoin.js) | [TrezarCoin](https://coincheckup.com/coins/trezarcoin) | TZC | Dynamic | :white_check_mark: Done
[micromoney](https://github.com/coincheckup/crypto-supplies/blob/master/coins/micromoney.js) | [MicroMoney](https://coincheckup.com/coins/micromoney) | AMM | Dynamic | :white_check_mark: Done
[crycash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crycash.js) | [CryCash](https://coincheckup.com/coins/crycash) | CRC | Dynamic | :white_check_mark: Done
[jesus-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jesus-coin.js) | [Jesus Coin](https://coincheckup.com/coins/jesus-coin) | JC | Dynamic | :white_check_mark: Done
[straks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/straks.js) | [STRAKS](https://coincheckup.com/coins/straks) | STAK | Not Implemented | :x: Not done
[ebitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ebitcoin.js) | [eBitcoin](https://coincheckup.com/coins/ebitcoin) | EBTC | Not Implemented | :x: Not done
[miners'-reward-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/miners'-reward-token.js) | [Miners' Reward Token](https://coincheckup.com/coins/miners'-reward-token) | MRT | Not Implemented | :x: Not done
[nushares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nushares.js) | [NuShares](https://coincheckup.com/coins/nushares) | NSR | Not Implemented | :x: Not done
[blitzpredict](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blitzpredict.js) | [BlitzPredict](https://coincheckup.com/coins/blitzpredict) | XBP | Dynamic | :white_check_mark: Done
[intensecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intensecoin.js) | [IntenseCoin](https://coincheckup.com/coins/intensecoin) | ITNS | Not Implemented | :x: Not done
[putincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/putincoin.js) | [PutinCoin](https://coincheckup.com/coins/putincoin) | PUT | Dynamic | :white_check_mark: Done
[biotron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biotron.js) | [Biotron](https://coincheckup.com/coins/biotron) | BTRN | Dynamic | :white_check_mark: Done
[jiyo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jiyo.js) | [Jiyo](https://coincheckup.com/coins/jiyo) | JIYO | Not Implemented | :x: Not done
[firstcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/firstcoin.js) | [FirstCoin](https://coincheckup.com/coins/firstcoin) | FRST | Not Implemented | :x: Not done
[fabric-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fabric-token.js) | [Fabric Token](https://coincheckup.com/coins/fabric-token) | FT | Dynamic | :white_check_mark: Done
[adzcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adzcoin.js) | [Adzcoin](https://coincheckup.com/coins/adzcoin) | ADZ | Not Implemented | :x: Not done
[bytecent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bytecent.js) | [Bytecent](https://coincheckup.com/coins/bytecent) | BYC | Dynamic | :white_check_mark: Done
[magnet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magnet.js) | [Magnet](https://coincheckup.com/coins/magnet) | MAG | Not Implemented | :x: Not done
[skincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skincoin.js) | [SkinCoin](https://coincheckup.com/coins/skincoin) | SKIN | Dynamic | :white_check_mark: Done
[argentum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/argentum.js) | [Argentum](https://coincheckup.com/coins/argentum) | ARG | Dynamic | :white_check_mark: Done
[digitalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitalcoin.js) | [Digitalcoin](https://coincheckup.com/coins/digitalcoin) | DGC | Dynamic | :white_check_mark: Done
[photon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/photon.js) | [Photon](https://coincheckup.com/coins/photon) | PHO | Dynamic | :white_check_mark: Done
[incakoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/incakoin.js) | [IncaKoin](https://coincheckup.com/coins/incakoin) | NKA | Not Implemented | :x: Not done
[carboncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/carboncoin.js) | [Carboncoin](https://coincheckup.com/coins/carboncoin) | CARBON | Dynamic | :white_check_mark: Done
[42-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/42-coin.js) | [42-coin](https://coincheckup.com/coins/42-coin) | 42 | Dynamic | :white_check_mark: Done
[vivo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vivo.js) | [VIVO](https://coincheckup.com/coins/vivo) | VIVO | Dynamic | :white_check_mark: Done
[live-stars](https://github.com/coincheckup/crypto-supplies/blob/master/coins/live-stars.js) | [Live Stars](https://coincheckup.com/coins/live-stars) | LIVE | Dynamic | :white_check_mark: Done
[ethersportz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethersportz.js) | [EtherSportz](https://coincheckup.com/coins/ethersportz) | ESZ | Not Implemented | :x: Not done
[renos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/renos.js) | [Renos](https://coincheckup.com/coins/renos) | RNS | Not Implemented | :x: Not done
[smileycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smileycoin.js) | [SmileyCoin](https://coincheckup.com/coins/smileycoin) | SMLY | Dynamic | :white_check_mark: Done
[blocklancer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blocklancer.js) | [Blocklancer](https://coincheckup.com/coins/blocklancer) | LNC | Dynamic | :white_check_mark: Done
[ethereum-movie-venture](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-movie-venture.js) | [Ethereum Movie Venture](https://coincheckup.com/coins/ethereum-movie-venture) | EMV | Dynamic | :white_check_mark: Done
[speed-mining-service](https://github.com/coincheckup/crypto-supplies/blob/master/coins/speed-mining-service.js) | [Speed Mining Service](https://coincheckup.com/coins/speed-mining-service) | SMS | Dynamic | :white_check_mark: Done
[sovereign-hero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sovereign-hero.js) | [Sovereign Hero](https://coincheckup.com/coins/sovereign-hero) | HERO | Not Implemented | :x: Not done
[platinumbar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/platinumbar.js) | [PlatinumBAR](https://coincheckup.com/coins/platinumbar) | XPTX | Not Implemented | :x: Not done
[canada-ecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/canada-ecoin.js) | [Canada eCoin](https://coincheckup.com/coins/canada-ecoin) | CDN | Not Implemented | :x: Not done
[808coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/808coin.js) | [808Coin](https://coincheckup.com/coins/808coin) | 808 | Not Implemented | :x: Not done
[united-crypto-community](https://github.com/coincheckup/crypto-supplies/blob/master/coins/united-crypto-community.js) | [United Crypto Community](https://coincheckup.com/coins/united-crypto-community) | UCOM | Not Implemented | :x: Not done
[ebitcoincash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ebitcoincash.js) | [eBitcoinCash](https://coincheckup.com/coins/ebitcoincash) | EBCH | Not Implemented | :x: Not done
[vulcano](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vulcano.js) | [Vulcano](https://coincheckup.com/coins/vulcano) | VULC | Not Implemented | :x: Not done
[wandx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wandx.js) | [WandX](https://coincheckup.com/coins/wandx) | WAND | Dynamic | :white_check_mark: Done
[soma](https://github.com/coincheckup/crypto-supplies/blob/master/coins/soma.js) | [Soma](https://coincheckup.com/coins/soma) | SCT | Dynamic | :white_check_mark: Done
[shekel](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shekel.js) | [Shekel](https://coincheckup.com/coins/shekel) | JEW | Not Implemented | :x: Not done
[kekcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kekcoin.js) | [KekCoin](https://coincheckup.com/coins/kekcoin) | KEK | Not Implemented | :x: Not done
[signals-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/signals-network.js) | [Signals Network](https://coincheckup.com/coins/signals-network) | SGN | Dynamic | :white_check_mark: Done
[the-cypherfunks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-cypherfunks.js) | [The Cypherfunks](https://coincheckup.com/coins/the-cypherfunks) | FUNK | Not Implemented | :x: Not done
[orbitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/orbitcoin.js) | [Orbitcoin](https://coincheckup.com/coins/orbitcoin) | ORB | Not Implemented | :x: Not done
[tidex-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tidex-token.js) | [Tidex Token](https://coincheckup.com/coins/tidex-token) | TDX | Not Implemented | :x: Not done
[connectjob](https://github.com/coincheckup/crypto-supplies/blob/master/coins/connectjob.js) | [ConnectJob](https://coincheckup.com/coins/connectjob) | CJT | Dynamic | :white_check_mark: Done
[machinecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/machinecoin.js) | [Machinecoin](https://coincheckup.com/coins/machinecoin) | MAC | Dynamic | :white_check_mark: Done
[datarius-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datarius-credit.js) | [Datarius Credit](https://coincheckup.com/coins/datarius-credit) | DTRC | Dynamic | :white_check_mark: Done
[neverdie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neverdie.js) | [NEVERDIE](https://coincheckup.com/coins/neverdie) | NDC | Dynamic | :white_check_mark: Done
[ellaism](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ellaism.js) | [Ellaism](https://coincheckup.com/coins/ellaism) | ELLA | Not Implemented | :x: Not done
[megacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/megacoin.js) | [Megacoin](https://coincheckup.com/coins/megacoin) | MEC | Dynamic | :white_check_mark: Done
[emphy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/emphy.js) | [Emphy](https://coincheckup.com/coins/emphy) | EPY | Dynamic | :white_check_mark: Done
[amon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/amon.js) | [Amon](https://coincheckup.com/coins/amon) | AMN | Dynamic | :white_check_mark: Done
[chronologic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chronologic.js) | [Chronologic](https://coincheckup.com/coins/chronologic) | DAY | Dynamic | :white_check_mark: Done
[tokendesk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokendesk.js) | [TokenDesk](https://coincheckup.com/coins/tokendesk) | TDS | Dynamic | :white_check_mark: Done
[bitjob](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitjob.js) | [bitJob](https://coincheckup.com/coins/bitjob) | STU | Dynamic | :white_check_mark: Done
[unbreakablecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unbreakablecoin.js) | [UnbreakableCoin](https://coincheckup.com/coins/unbreakablecoin) | UNB | Not Implemented | :x: Not done
[farad](https://github.com/coincheckup/crypto-supplies/blob/master/coins/farad.js) | [Farad](https://coincheckup.com/coins/farad) | FRD | Dynamic | :white_check_mark: Done
[authorship](https://github.com/coincheckup/crypto-supplies/blob/master/coins/authorship.js) | [Authorship](https://coincheckup.com/coins/authorship) | ATS | Dynamic | :white_check_mark: Done
[universe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universe.js) | [Universe](https://coincheckup.com/coins/universe) | UNI | Dynamic | :white_check_mark: Done
[masternodecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/masternodecoin.js) | [Masternodecoin](https://coincheckup.com/coins/masternodecoin) | MTNC | Not Implemented | :x: Not done
[fundyourselfnow](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fundyourselfnow.js) | [FundYourselfNow](https://coincheckup.com/coins/fundyourselfnow) | FYN | Dynamic | :white_check_mark: Done
[unitus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unitus.js) | [Unitus](https://coincheckup.com/coins/unitus) | UIS | Not Implemented | :x: Not done
[draftcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/draftcoin.js) | [DraftCoin](https://coincheckup.com/coins/draftcoin) | DFT | Not Implemented | :x: Not done
[tigereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tigereum.js) | [Tigereum](https://coincheckup.com/coins/tigereum) | TIG | Dynamic | :white_check_mark: Done
[worldcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/worldcoin.js) | [WorldCoin](https://coincheckup.com/coins/worldcoin) | WDC | Not Implemented | :x: Not done
[deutsche-emark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deutsche-emark.js) | [Deutsche eMark](https://coincheckup.com/coins/deutsche-emark) | DEM | Not Implemented | :x: Not done
[origami](https://github.com/coincheckup/crypto-supplies/blob/master/coins/origami.js) | [Origami](https://coincheckup.com/coins/origami) | ORI | Dynamic | :white_check_mark: Done
[popularcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/popularcoin.js) | [PopularCoin](https://coincheckup.com/coins/popularcoin) | POP | Not Implemented | :x: Not done
[nitro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nitro.js) | [Nitro](https://coincheckup.com/coins/nitro) | NOX | Dynamic | :white_check_mark: Done
[earth-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/earth-token.js) | [Earth Token](https://coincheckup.com/coins/earth-token) | EARTH | Dynamic | :white_check_mark: Done
[bowhead](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bowhead.js) | [Bowhead](https://coincheckup.com/coins/bowhead) | AHT | Not Implemented | :x: Not done
[zennies](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zennies.js) | [Zennies](https://coincheckup.com/coins/zennies) | ZENI | Not Implemented | :x: Not done
[innova](https://github.com/coincheckup/crypto-supplies/blob/master/coins/innova.js) | [Innova](https://coincheckup.com/coins/innova) | INN | Not Implemented | :x: Not done
[musiconomi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/musiconomi.js) | [Musiconomi](https://coincheckup.com/coins/musiconomi) | MCI | Dynamic | :white_check_mark: Done
[drp-utility](https://github.com/coincheckup/crypto-supplies/blob/master/coins/drp-utility.js) | [DRP Utility](https://coincheckup.com/coins/drp-utility) | DRPU | Dynamic | :white_check_mark: Done
[sagacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sagacoin.js) | [SagaCoin](https://coincheckup.com/coins/sagacoin) | SAGA | Not Implemented | :x: Not done
[onix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/onix.js) | [Onix](https://coincheckup.com/coins/onix) | ONX | Not Implemented | :x: Not done
[etheriya](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etheriya.js) | [Etheriya](https://coincheckup.com/coins/etheriya) | RIYA | Dynamic | :white_check_mark: Done
[inpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/inpay.js) | [InPay](https://coincheckup.com/coins/inpay) | INPAY | Not Implemented | :x: Not done
[embers](https://github.com/coincheckup/crypto-supplies/blob/master/coins/embers.js) | [Embers](https://coincheckup.com/coins/embers) | MBRS | Dynamic | :white_check_mark: Done
[zetacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zetacoin.js) | [Zetacoin](https://coincheckup.com/coins/zetacoin) | ZET | Dynamic | :white_check_mark: Done
[martexcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/martexcoin.js) | [MarteXcoin](https://coincheckup.com/coins/martexcoin) | MXT | Not Implemented | :x: Not done
[linx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linx.js) | [Linx](https://coincheckup.com/coins/linx) | LINX | Dynamic | :white_check_mark: Done
[unify](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unify.js) | [Unify](https://coincheckup.com/coins/unify) | UNIFY | Not Implemented | :x: Not done
[numus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/numus.js) | [Numus](https://coincheckup.com/coins/numus) | NMS | Not Implemented | :x: Not done
[elcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elcoin.js) | [Elcoin](https://coincheckup.com/coins/elcoin) | EL | Not Implemented | :x: Not done
[more-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/more-coin.js) | [More Coin](https://coincheckup.com/coins/more-coin) | MORE | Not Implemented | :x: Not done
[mazacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mazacoin.js) | [MAZA](https://coincheckup.com/coins/mazacoin) | MZC | Not Implemented | :x: Not done
[arcticcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arcticcoin.js) | [Advanced Technology Coin](https://coincheckup.com/coins/arcticcoin) | ARC | Not Implemented | :x: Not done
[qvolta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qvolta.js) | [Qvolta](https://coincheckup.com/coins/qvolta) | QVT | Dynamic | :white_check_mark: Done
[fantasy-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fantasy-cash.js) | [Fantasy Cash](https://coincheckup.com/coins/fantasy-cash) | FANS | Not Implemented | :x: Not done
[plancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/plancoin.js) | [Plancoin](https://coincheckup.com/coins/plancoin) | PLAN | Not Implemented | :x: Not done
[transcodium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/transcodium.js) | [Transcodium](https://coincheckup.com/coins/transcodium) | TNS | Dynamic | :white_check_mark: Done
[unicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unicoin.js) | [UniCoin](https://coincheckup.com/coins/unicoin) | UNIC | Not Implemented | :x: Not done
[suretly](https://github.com/coincheckup/crypto-supplies/blob/master/coins/suretly.js) | [Suretly](https://coincheckup.com/coins/suretly) | SUR | Dynamic | :white_check_mark: Done
[kolion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kolion.js) | [Kolion](https://coincheckup.com/coins/kolion) | KLN | Not Implemented | :x: Not done
[inflationcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/inflationcoin.js) | [InflationCoin](https://coincheckup.com/coins/inflationcoin) | IFLT | Not Implemented | :x: Not done
[starcredits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starcredits.js) | [StarCredits](https://coincheckup.com/coins/starcredits) | STRC | Dynamic | :white_check_mark: Done
[mcap](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mcap.js) | [MCAP](https://coincheckup.com/coins/mcap) | MCAP | Dynamic | :white_check_mark: Done
[bitzeny](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitzeny.js) | [Bitzeny](https://coincheckup.com/coins/bitzeny) | ZNY | Not Implemented | :x: Not done
[cryptonite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptonite.js) | [Cryptonite](https://coincheckup.com/coins/cryptonite) | XCN | Not Implemented | :x: Not done
[dinastycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dinastycoin.js) | [Dinastycoin](https://coincheckup.com/coins/dinastycoin) | DCY | Not Implemented | :x: Not done
[equitrader](https://github.com/coincheckup/crypto-supplies/blob/master/coins/equitrader.js) | [EquiTrader](https://coincheckup.com/coins/equitrader) | EQT | Dynamic | :white_check_mark: Done
[bata](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bata.js) | [Bata](https://coincheckup.com/coins/bata) | BTA | Dynamic | :white_check_mark: Done
[metalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metalcoin.js) | [MetalCoin](https://coincheckup.com/coins/metalcoin) | METAL | Not Implemented | :x: Not done
[hobonickels](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hobonickels.js) | [HoboNickels](https://coincheckup.com/coins/hobonickels) | HBN | Dynamic | :white_check_mark: Done
[bitradio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitradio.js) | [Bitradio](https://coincheckup.com/coins/bitradio) | BRO | Dynamic | :white_check_mark: Done
[woodcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/woodcoin.js) | [Woodcoin](https://coincheckup.com/coins/woodcoin) | LOG | Not Implemented | :x: Not done
[petrodollar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/petrodollar.js) | [PetroDollar](https://coincheckup.com/coins/petrodollar) | XPD | Not Implemented | :x: Not done
[realt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/realt.js) | [RouletteToken](https://coincheckup.com/coins/realt) | RLT | Dynamic | :white_check_mark: Done
[netcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/netcoin.js) | [NetCoin](https://coincheckup.com/coins/netcoin) | NET | Not Implemented | :x: Not done
[fluttercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fluttercoin.js) | [FlutterCoin](https://coincheckup.com/coins/fluttercoin) | FLT | Not Implemented | :x: Not done
[fujicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fujicoin.js) | [FujiCoin](https://coincheckup.com/coins/fujicoin) | FJC | Not Implemented | :x: Not done
[bitdeal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitdeal.js) | [Bitdeal](https://coincheckup.com/coins/bitdeal) | BDL | Not Implemented | :x: Not done
[moin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moin.js) | [Moin](https://coincheckup.com/coins/moin) | MOIN | Not Implemented | :x: Not done
[happycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/happycoin.js) | [Happycoin](https://coincheckup.com/coins/happycoin) | HPC | Not Implemented | :x: Not done
[fastcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fastcoin.js) | [Fastcoin](https://coincheckup.com/coins/fastcoin) | FST | Not Implemented | :x: Not done
[qubitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qubitcoin.js) | [QubitCoin](https://coincheckup.com/coins/qubitcoin) | Q2C | Not Implemented | :x: Not done
[cream](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cream.js) | [Cream](https://coincheckup.com/coins/cream) | CRM | Not Implemented | :x: Not done
[jetcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jetcoin.js) | [Jetcoin](https://coincheckup.com/coins/jetcoin) | JET | Dynamic | :white_check_mark: Done
[truckcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/truckcoin.js) | [Truckcoin](https://coincheckup.com/coins/truckcoin) | TRK | Not Implemented | :x: Not done
[equal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/equal.js) | [Equal](https://coincheckup.com/coins/equal) | EQL | Dynamic | :white_check_mark: Done
[zilbercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zilbercoin.js) | [Zilbercoin](https://coincheckup.com/coins/zilbercoin) | ZBC | Not Implemented | :x: Not done
[fitrova](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fitrova.js) | [Fitrova](https://coincheckup.com/coins/fitrova) | FRV | Dynamic | :white_check_mark: Done
[oceanlab](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oceanlab.js) | [Oceanlab](https://coincheckup.com/coins/oceanlab) | OCL | Not Implemented | :x: Not done
[insanecoin-insn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insanecoin-insn.js) | [InsaneCoin](https://coincheckup.com/coins/insanecoin-insn) | INSN | Not Implemented | :x: Not done
[britcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/britcoin.js) | [BritCoin](https://coincheckup.com/coins/britcoin) | BRIT | Not Implemented | :x: Not done
[deuscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deuscoin.js) | [DeusCoin](https://coincheckup.com/coins/deuscoin) | DEUS | Not Implemented | :x: Not done
[bitsilver](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsilver.js) | [bitSilver](https://coincheckup.com/coins/bitsilver) | BITSILVER | Not Implemented | :x: Not done
[bitbar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbar.js) | [BitBar](https://coincheckup.com/coins/bitbar) | BTB | Not Implemented | :x: Not done
[trollcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trollcoin.js) | [Trollcoin](https://coincheckup.com/coins/trollcoin) | TROLL | Dynamic | :white_check_mark: Done
[piplcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/piplcoin.js) | [PiplCoin](https://coincheckup.com/coins/piplcoin) | PIPL | Dynamic | :white_check_mark: Done
[qbic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qbic.js) | [Qbic](https://coincheckup.com/coins/qbic) | QBIC | Not Implemented | :x: Not done
[eltcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eltcoin.js) | [ELTCOIN](https://coincheckup.com/coins/eltcoin) | ELTCOIN | Dynamic | :white_check_mark: Done
[greenmed](https://github.com/coincheckup/crypto-supplies/blob/master/coins/greenmed.js) | [GreenMed](https://coincheckup.com/coins/greenmed) | GRMD | Dynamic | :white_check_mark: Done
[growers-international](https://github.com/coincheckup/crypto-supplies/blob/master/coins/growers-international.js) | [Growers International](https://coincheckup.com/coins/growers-international) | GRWI | Not Implemented | :x: Not done
[tattoocoin-(standard-edition)](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tattoocoin-(standard-edition).js) | [Tattoocoin (Standard Edition)](https://coincheckup.com/coins/tattoocoin-(standard-edition)) | TSE | Not Implemented | :x: Not done
[piggycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/piggycoin.js) | [Piggycoin](https://coincheckup.com/coins/piggycoin) | PIGGY | Dynamic | :white_check_mark: Done
[lanacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lanacoin.js) | [LanaCoin](https://coincheckup.com/coins/lanacoin) | LANA | Dynamic | :white_check_mark: Done
[veros](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veros.js) | [Veros](https://coincheckup.com/coins/veros) | VRS | Dynamic | :white_check_mark: Done
[btctalkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/btctalkcoin.js) | [BTCtalkcoin](https://coincheckup.com/coins/btctalkcoin) | TALK | Dynamic | :white_check_mark: Done
[iticoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iticoin.js) | [iTicoin](https://coincheckup.com/coins/iticoin) | ITI | Not Implemented | :x: Not done
[startcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/startcoin.js) | [Startcoin](https://coincheckup.com/coins/startcoin) | START | Not Implemented | :x: Not done
[phoenixcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phoenixcoin.js) | [Phoenixcoin](https://coincheckup.com/coins/phoenixcoin) | PXC | Not Implemented | :x: Not done
[synergy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/synergy.js) | [Synergy](https://coincheckup.com/coins/synergy) | SNRG | Dynamic | :white_check_mark: Done
[arbitragect](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arbitragect.js) | [ArbitrageCT](https://coincheckup.com/coins/arbitragect) | ARCT | Dynamic | :white_check_mark: Done
[briacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/briacoin.js) | [BriaCoin](https://coincheckup.com/coins/briacoin) | BRIA | Not Implemented | :x: Not done
[wild-crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wild-crypto.js) | [Wild Crypto](https://coincheckup.com/coins/wild-crypto) | WILD | Dynamic | :white_check_mark: Done
[billionaire-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/billionaire-token.js) | [Billionaire Token](https://coincheckup.com/coins/billionaire-token) | XBL | Dynamic | :white_check_mark: Done
[digital-money-bits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-money-bits.js) | [Digital Money Bits](https://coincheckup.com/coins/digital-money-bits) | DMB | Not Implemented | :x: Not done
[netko](https://github.com/coincheckup/crypto-supplies/blob/master/coins/netko.js) | [Netko](https://coincheckup.com/coins/netko) | NETKO | Dynamic | :white_check_mark: Done
[triangles](https://github.com/coincheckup/crypto-supplies/blob/master/coins/triangles.js) | [Triangles](https://coincheckup.com/coins/triangles) | TRI | Not Implemented | :x: Not done
[intelligent-trading-foundation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intelligent-trading-foundation.js) | [Intelligent Trading Foundation](https://coincheckup.com/coins/intelligent-trading-foundation) | ITT | Dynamic | :white_check_mark: Done
[skeincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skeincoin.js) | [Skeincoin](https://coincheckup.com/coins/skeincoin) | SKC | Dynamic | :white_check_mark: Done
[guncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guncoin.js) | [Guncoin](https://coincheckup.com/coins/guncoin) | GUN | Dynamic | :white_check_mark: Done
[centurion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/centurion.js) | [Centurion](https://coincheckup.com/coins/centurion) | CNT | Not Implemented | :x: Not done
[bitcoin-silver](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-silver.js) | [Bitcoin Scrypt](https://coincheckup.com/coins/bitcoin-silver) | BTCS | Not Implemented | :x: Not done
[halcyon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/halcyon.js) | [Halcyon](https://coincheckup.com/coins/halcyon) | HAL | Not Implemented | :x: Not done
[mao-zedong](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mao-zedong.js) | [Mao Zedong](https://coincheckup.com/coins/mao-zedong) | MAO | Not Implemented | :x: Not done
[bitair](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitair.js) | [Bitair](https://coincheckup.com/coins/bitair) | BTCA | Dynamic | :white_check_mark: Done
[cash-poker-pro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cash-poker-pro.js) | [Cashcoin](https://coincheckup.com/coins/cash-poker-pro) | CASH | Not Implemented | :x: Not done
[aquariuscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aquariuscoin.js) | [AquariusCoin](https://coincheckup.com/coins/aquariuscoin) | ARCO | Dynamic | :white_check_mark: Done
[trumpcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trumpcoin.js) | [TrumpCoin](https://coincheckup.com/coins/trumpcoin) | TRUMP | Dynamic | :white_check_mark: Done
[ethereum-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-cash.js) | [Ethereum Cash](https://coincheckup.com/coins/ethereum-cash) | ECASH | Not Implemented | :x: Not done
[bitstar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitstar.js) | [Bitstar](https://coincheckup.com/coins/bitstar) | BITS | Not Implemented | :x: Not done
[bitsum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsum.js) | [Bitsum](https://coincheckup.com/coins/bitsum) | BSM | Not Implemented | :x: Not done
[leviarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leviarcoin.js) | N/A | N/A | N/A | :x: Not done
[tittiecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tittiecoin.js) | [TittieCoin](https://coincheckup.com/coins/tittiecoin) | TTC | Not Implemented | :x: Not done
[joulecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/joulecoin.js) | [Joulecoin](https://coincheckup.com/coins/joulecoin) | XJO | Dynamic | :white_check_mark: Done
[rimbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rimbit.js) | [Rimbit](https://coincheckup.com/coins/rimbit) | RBT | Not Implemented | :x: Not done
[bigup](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bigup.js) | [BigUp](https://coincheckup.com/coins/bigup) | BIGUP | Not Implemented | :x: Not done
[iethereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iethereum.js) | [iEthereum](https://coincheckup.com/coins/iethereum) | IETH | Dynamic | :white_check_mark: Done
[dashcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dashcoin.js) | [Dashcoin](https://coincheckup.com/coins/dashcoin) | DSH | Not Implemented | :x: Not done
[bitbtc](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbtc.js) | [bitBTC](https://coincheckup.com/coins/bitbtc) | BITBTC | Not Implemented | :x: Not done
[aricoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aricoin.js) | [Aricoin](https://coincheckup.com/coins/aricoin) | ARI | Not Implemented | :x: Not done
[purevidz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/purevidz.js) | [PureVidz](https://coincheckup.com/coins/purevidz) | VIDZ | Not Implemented | :x: Not done
[nyancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nyancoin.js) | [Nyancoin](https://coincheckup.com/coins/nyancoin) | NYAN | Not Implemented | :x: Not done
[bitgem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitgem.js) | [Bitgem](https://coincheckup.com/coins/bitgem) | BTG | Dynamic | :white_check_mark: Done
[tagcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tagcoin.js) | [TagCoin](https://coincheckup.com/coins/tagcoin) | TAG | Not Implemented | :x: Not done
[minereum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/minereum.js) | [Minereum](https://coincheckup.com/coins/minereum) | MNE | Dynamic | :white_check_mark: Done
[procurrency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/procurrency.js) | [ProCurrency](https://coincheckup.com/coins/procurrency) | PROC | Not Implemented | :x: Not done
[bitgold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitgold.js) | [bitGold](https://coincheckup.com/coins/bitgold) | BITGOLD | Not Implemented | :x: Not done
[opal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/opal.js) | [Opal](https://coincheckup.com/coins/opal) | OPAL | Not Implemented | :x: Not done
[whalecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/whalecoin.js) | [WhaleCoin](https://coincheckup.com/coins/whalecoin) | WHL | Not Implemented | :x: Not done
[regalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/regalcoin.js) | [Regalcoin](https://coincheckup.com/coins/regalcoin) | REC | Not Implemented | :x: Not done
[motocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/motocoin.js) | [Motocoin](https://coincheckup.com/coins/motocoin) | MOTO | Not Implemented | :x: Not done
[hodlcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hodlcoin.js) | [HOdlcoin](https://coincheckup.com/coins/hodlcoin) | HODL | Not Implemented | :x: Not done
[tekcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tekcoin.js) | [TEKcoin](https://coincheckup.com/coins/tekcoin) | TEK | Not Implemented | :x: Not done
[votecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/votecoin.js) | [VoteCoin](https://coincheckup.com/coins/votecoin) | VOT | Not Implemented | :x: Not done
[elementrem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elementrem.js) | [Elementrem](https://coincheckup.com/coins/elementrem) | ELE | Not Implemented | :x: Not done
[cryptocarbon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptocarbon.js) | [CryptoCarbon](https://coincheckup.com/coins/cryptocarbon) | CCRB | Not Implemented | :x: Not done
[cryptojacks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptojacks.js) | [Cryptojacks](https://coincheckup.com/coins/cryptojacks) | CJ | Not Implemented | :x: Not done
[adcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/adcoin.js) | [AdCoin](https://coincheckup.com/coins/adcoin) | ACC | Not Implemented | :x: Not done
[paycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paycoin.js) | [PayCoin](https://coincheckup.com/coins/paycoin) | XPY | Not Implemented | :x: Not done
[ico-openledger](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ico-openledger.js) | [ICO OpenLedger](https://coincheckup.com/coins/ico-openledger) | ICOO | Not Implemented | :x: Not done
[blazecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blazecoin.js) | [BlazeCoin](https://coincheckup.com/coins/blazecoin) | BLZ | Not Implemented | :x: Not done
[kubera-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kubera-coin.js) | [Kubera Coin](https://coincheckup.com/coins/kubera-coin) | KBR | Dynamic | :white_check_mark: Done
[smartcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartcoin.js) | [SmartCoin](https://coincheckup.com/coins/smartcoin) | SMC | Not Implemented | :x: Not done
[aerium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aerium.js) | [Aerium](https://coincheckup.com/coins/aerium) | AERM | Not Implemented | :x: Not done
[chesscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chesscoin.js) | [ChessCoin](https://coincheckup.com/coins/chesscoin) | CHESS | Not Implemented | :x: Not done
[wawllet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wawllet.js) | [WCOIN](https://coincheckup.com/coins/wawllet) | WIN | Dynamic | :white_check_mark: Done
[octocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/octocoin.js) | [OctoCoin](https://coincheckup.com/coins/octocoin) | 888 | Dynamic | :white_check_mark: Done
[irishcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/irishcoin.js) | [IrishCoin](https://coincheckup.com/coins/irishcoin) | IRL | Not Implemented | :x: Not done
[globalboost-y](https://github.com/coincheckup/crypto-supplies/blob/master/coins/globalboost-y.js) | [GlobalBoost-Y](https://coincheckup.com/coins/globalboost-y) | BSTY | Not Implemented | :x: Not done
[bitcoin-red](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-red.js) | [Bitcoin Red](https://coincheckup.com/coins/bitcoin-red) | BTCRED | Dynamic | :white_check_mark: Done
[ultracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ultracoin.js) | [UltraCoin](https://coincheckup.com/coins/ultracoin) | UTC | Not Implemented | :x: Not done
[blakecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blakecoin.js) | [Blakecoin](https://coincheckup.com/coins/blakecoin) | BLC | Not Implemented | :x: Not done
[litecoin-plus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin-plus.js) | [Litecoin Plus](https://coincheckup.com/coins/litecoin-plus) | LCP | Not Implemented | :x: Not done
[kushcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kushcoin.js) | [KushCoin](https://coincheckup.com/coins/kushcoin) | KUSH | Dynamic | :white_check_mark: Done
[marscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/marscoin.js) | [Marscoin](https://coincheckup.com/coins/marscoin) | MARS | Not Implemented | :x: Not done
[evil-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/evil-coin.js) | [Evil Coin](https://coincheckup.com/coins/evil-coin) | EVIL | Not Implemented | :x: Not done
[senderon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/senderon.js) | [Senderon](https://coincheckup.com/coins/senderon) | SDRN | Dynamic | :white_check_mark: Done
[tigercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tigercoin.js) | [Tigercoin](https://coincheckup.com/coins/tigercoin) | TGC | Not Implemented | :x: Not done
[pakcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pakcoin.js) | [Pakcoin](https://coincheckup.com/coins/pakcoin) | PAK | Dynamic | :white_check_mark: Done
[cannacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cannacoin.js) | [CannaCoin](https://coincheckup.com/coins/cannacoin) | CCN | Dynamic | :white_check_mark: Done
[supercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/supercoin.js) | [SuperCoin](https://coincheckup.com/coins/supercoin) | SUPER | Dynamic | :white_check_mark: Done
[prototanium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prototanium.js) | [Prototanium](https://coincheckup.com/coins/prototanium) | PR | Dynamic | :white_check_mark: Done
[manna](https://github.com/coincheckup/crypto-supplies/blob/master/coins/manna.js) | [Manna](https://coincheckup.com/coins/manna) | MANNA | Dynamic | :white_check_mark: Done
[cartaxi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cartaxi.js) | [CarTaxi Token](https://coincheckup.com/coins/cartaxi) | CTX | Not Implemented | :x: Not done
[postcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/postcoin.js) | [PostCoin](https://coincheckup.com/coins/postcoin) | POST | Dynamic | :white_check_mark: Done
[gapcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gapcoin.js) | [Gapcoin](https://coincheckup.com/coins/gapcoin) | GAP | Dynamic | :white_check_mark: Done
[daxxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/daxxcoin.js) | [DaxxCoin](https://coincheckup.com/coins/daxxcoin) | DAXX | Not Implemented | :x: Not done
[ultimate-secure-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ultimate-secure-cash.js) | [Ultimate Secure Cash](https://coincheckup.com/coins/ultimate-secure-cash) | USC | Not Implemented | :x: Not done
[droxne](https://github.com/coincheckup/crypto-supplies/blob/master/coins/droxne.js) | [DROXNE](https://coincheckup.com/coins/droxne) | DRXNE | Not Implemented | :x: Not done
[bitcurrency](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcurrency.js) | [Bitcurrency](https://coincheckup.com/coins/bitcurrency) | BTCR | Dynamic | :white_check_mark: Done
[accelerator-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/accelerator-network.js) | [Accelerator Network](https://coincheckup.com/coins/accelerator-network) | ACC | Dynamic | :white_check_mark: Done
[crystal-clear](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crystal-clear.js) | [Crystal Clear](https://coincheckup.com/coins/crystal-clear) | CCT | Dynamic | :white_check_mark: Done
[atomic-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atomic-coin.js) | [Atomic Coin](https://coincheckup.com/coins/atomic-coin) | ATOM | Not Implemented | :x: Not done
[goldblocks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldblocks.js) | [GoldBlocks](https://coincheckup.com/coins/goldblocks) | GB | Not Implemented | :x: Not done
[ratecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ratecoin.js) | [Ratecoin](https://coincheckup.com/coins/ratecoin) | XRA | Not Implemented | :x: Not done
[litebar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litebar.js) | [LiteBar](https://coincheckup.com/coins/litebar) | LTB | Not Implemented | :x: Not done
[mineum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mineum.js) | [Mineum](https://coincheckup.com/coins/mineum) | MNM | Not Implemented | :x: Not done
[crowdcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crowdcoin.js) | [CrowdCoin](https://coincheckup.com/coins/crowdcoin) | CRC | Not Implemented | :x: Not done
[impact](https://github.com/coincheckup/crypto-supplies/blob/master/coins/impact.js) | [Impact](https://coincheckup.com/coins/impact) | IMX | Dynamic | :white_check_mark: Done
[philosopher-stones](https://github.com/coincheckup/crypto-supplies/blob/master/coins/philosopher-stones.js) | [Philosopher Stones](https://coincheckup.com/coins/philosopher-stones) | PHS | Not Implemented | :x: Not done
[cryptoinsight](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoinsight.js) | [CryptoInsight](https://coincheckup.com/coins/cryptoinsight) | TKR | Dynamic | :white_check_mark: Done
[globalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/globalcoin.js) | [GlobalCoin](https://coincheckup.com/coins/globalcoin) | GLC | Dynamic | :white_check_mark: Done
[zozocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zozocoin.js) | [ZoZoCoin](https://coincheckup.com/coins/zozocoin) | ZZC | Not Implemented | :x: Not done
[tokyo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokyo.js) | [TOKYO](https://coincheckup.com/coins/tokyo) | TOKC | Not Implemented | :x: Not done
[parallelcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/parallelcoin.js) | [ParallelCoin](https://coincheckup.com/coins/parallelcoin) | DUO | Not Implemented | :x: Not done
[kurrent](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kurrent.js) | [Kurrent](https://coincheckup.com/coins/kurrent) | KURT | Not Implemented | :x: Not done
[ethereum-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-gold.js) | [Ethereum Gold](https://coincheckup.com/coins/ethereum-gold) | ETG | Dynamic | :white_check_mark: Done
[wavesgo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wavesgo.js) | [WavesGo](https://coincheckup.com/coins/wavesgo) | WGO | Not Implemented | :x: Not done
[crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crypto.js) | [Crypto](https://coincheckup.com/coins/crypto) | CTO | Not Implemented | :x: Not done
[mojocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mojocoin.js) | [MojoCoin](https://coincheckup.com/coins/mojocoin) | MOJO | Not Implemented | :x: Not done
[octanox](https://github.com/coincheckup/crypto-supplies/blob/master/coins/octanox.js) | [Octanox](https://coincheckup.com/coins/octanox) | OTX | Not Implemented | :x: Not done
[spacecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spacecoin.js) | [SpaceCoin](https://coincheckup.com/coins/spacecoin) | SPACE | Not Implemented | :x: Not done
[minex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/minex.js) | [Minex](https://coincheckup.com/coins/minex) | MINEX | Dynamic | :white_check_mark: Done
[8bit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/8bit.js) | [8Bit](https://coincheckup.com/coins/8bit) | 8BIT | Dynamic | :white_check_mark: Done
[berncash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/berncash.js) | [BERNcash](https://coincheckup.com/coins/berncash) | BERN | Not Implemented | :x: Not done
[ethbet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethbet.js) | [EthBet](https://coincheckup.com/coins/ethbet) | EBET | Dynamic | :white_check_mark: Done
[golfcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golfcoin.js) | [Golfcoin](https://coincheckup.com/coins/golfcoin) | GOLF | Not Implemented | :x: Not done
[securecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/securecoin.js) | [SecureCoin](https://coincheckup.com/coins/securecoin) | SRC | Dynamic | :white_check_mark: Done
[erc20](https://github.com/coincheckup/crypto-supplies/blob/master/coins/erc20.js) | [ERC20](https://coincheckup.com/coins/erc20) | ERC20 | Dynamic | :white_check_mark: Done
[digicube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digicube.js) | [DigiCube](https://coincheckup.com/coins/digicube) | CUBE | Not Implemented | :x: Not done
[helleniccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/helleniccoin.js) | [Helleniccoin](https://coincheckup.com/coins/helleniccoin) | HNC | Not Implemented | :x: Not done
[joincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/joincoin.js) | [Joincoin](https://coincheckup.com/coins/joincoin) | J | Dynamic | :white_check_mark: Done
[sterlingcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sterlingcoin.js) | [Sterlingcoin](https://coincheckup.com/coins/sterlingcoin) | SLG | Dynamic | :white_check_mark: Done
[revolvercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/revolvercoin.js) | [RevolverCoin](https://coincheckup.com/coins/revolvercoin) | XRE | Not Implemented | :x: Not done
[nevacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nevacoin.js) | [NevaCoin](https://coincheckup.com/coins/nevacoin) | NEVA | Dynamic | :white_check_mark: Done
[advanced-internet-blocks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/advanced-internet-blocks.js) | [Advanced Internet Blocks](https://coincheckup.com/coins/advanced-internet-blocks) | AIB | Not Implemented | :x: Not done
[300-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/300-token.js) | [300 Token](https://coincheckup.com/coins/300-token) | 300 | Dynamic | :white_check_mark: Done
[biteur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biteur.js) | [bitEUR](https://coincheckup.com/coins/biteur) | BITEUR | Not Implemented | :x: Not done
[titcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/titcoin.js) | [Titcoin](https://coincheckup.com/coins/titcoin) | TIT | Not Implemented | :x: Not done
[safe-trade-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/safe-trade-coin.js) | [Safe Trade Coin](https://coincheckup.com/coins/safe-trade-coin) | XSTC | Not Implemented | :x: Not done
[freicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/freicoin.js) | [Freicoin](https://coincheckup.com/coins/freicoin) | FRC | Not Implemented | :x: Not done
[rubies](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rubies.js) | [Rubies](https://coincheckup.com/coins/rubies) | RBIES | Not Implemented | :x: Not done
[datacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/datacoin.js) | [Datacoin](https://coincheckup.com/coins/datacoin) | DTC | Dynamic | :white_check_mark: Done
[leacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leacoin.js) | [LeaCoin](https://coincheckup.com/coins/leacoin) | LEA | Not Implemented | :x: Not done
[ammo-rewards](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ammo-rewards.js) | [Ammo Reloaded](https://coincheckup.com/coins/ammo-rewards) | AMMO | Not Implemented | :x: Not done
[darsek](https://github.com/coincheckup/crypto-supplies/blob/master/coins/darsek.js) | [Darsek](https://coincheckup.com/coins/darsek) | KED | Not Implemented | :x: Not done
[emerald-crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/emerald-crypto.js) | [Emerald Crypto](https://coincheckup.com/coins/emerald-crypto) | EMD | Dynamic | :white_check_mark: Done
[bit20](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bit20.js) | [Bit20](https://coincheckup.com/coins/bit20) | BTWTY | Not Implemented | :x: Not done
[influxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/influxcoin.js) | [Influxcoin](https://coincheckup.com/coins/influxcoin) | INFX | Not Implemented | :x: Not done
[coin2.1](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coin2.1.js) | [Coin2.1](https://coincheckup.com/coins/coin2.1) | C2 | Not Implemented | :x: Not done
[granite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/granite.js) | [Granite](https://coincheckup.com/coins/granite) | GRN | Not Implemented | :x: Not done
[sativacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sativacoin.js) | [Sativacoin](https://coincheckup.com/coins/sativacoin) | STV | Dynamic | :white_check_mark: Done
[amsterdamcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/amsterdamcoin.js) | [AmsterdamCoin](https://coincheckup.com/coins/amsterdamcoin) | AMS | Not Implemented | :x: Not done
[coinonatx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinonatx.js) | [CoinonatX](https://coincheckup.com/coins/coinonatx) | XCXT | Not Implemented | :x: Not done
[bolivarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bolivarcoin.js) | [Bolivarcoin](https://coincheckup.com/coins/bolivarcoin) | BOLI | Dynamic | :white_check_mark: Done
[steneum-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steneum-coin.js) | [Steneum Coin](https://coincheckup.com/coins/steneum-coin) | STN | Not Implemented | :x: Not done
[bitcoinfast](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoinfast.js) | [Bitcoin Fast](https://coincheckup.com/coins/bitcoinfast) | BCF | Not Implemented | :x: Not done
[pascal-lite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pascal-lite.js) | [Pascal Lite](https://coincheckup.com/coins/pascal-lite) | PASL | Not Implemented | :x: Not done
[virtacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virtacoin.js) | [Virtacoin](https://coincheckup.com/coins/virtacoin) | VTA | Not Implemented | :x: Not done
[chancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chancoin.js) | [ChanCoin](https://coincheckup.com/coins/chancoin) | CHAN | Not Implemented | :x: Not done
[boostcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/boostcoin.js) | [BoostCoin](https://coincheckup.com/coins/boostcoin) | BOST | Not Implemented | :x: Not done
[garlicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/garlicoin.js) | [Garlicoin](https://coincheckup.com/coins/garlicoin) | GRLC | Not Implemented | :x: Not done
[ccore](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ccore.js) | [Ccore](https://coincheckup.com/coins/ccore) | CCO | Dynamic | :white_check_mark: Done
[fujinto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fujinto.js) | [Fujinto](https://coincheckup.com/coins/fujinto) | NTO | Dynamic | :white_check_mark: Done
[islacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/islacoin.js) | [IslaCoin](https://coincheckup.com/coins/islacoin) | ISL | Not Implemented | :x: Not done
[octoin-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/octoin-coin.js) | [Octoin Coin](https://coincheckup.com/coins/octoin-coin) | OCC | Not Implemented | :x: Not done
[c-bit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/c-bit.js) | [C-Bit](https://coincheckup.com/coins/c-bit) | XCT | Not Implemented | :x: Not done
[swing](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swing.js) | [Swing](https://coincheckup.com/coins/swing) | SWING | Dynamic | :white_check_mark: Done
[coin(o)](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coin(o).js) | [Coin(O)](https://coincheckup.com/coins/coin(o)) | CNO | Not Implemented | :x: Not done
[quazarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quazarcoin.js) | [QuazarCoin](https://coincheckup.com/coins/quazarcoin) | QCN | Not Implemented | :x: Not done
[starcash-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starcash-network.js) | [StarCash Network](https://coincheckup.com/coins/starcash-network) | STARS | Not Implemented | :x: Not done
[icoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icoin.js) | [iCoin](https://coincheckup.com/coins/icoin) | ICN | Dynamic | :white_check_mark: Done
[escroco](https://github.com/coincheckup/crypto-supplies/blob/master/coins/escroco.js) | [Escroco](https://coincheckup.com/coins/escroco) | ESC | Not Implemented | :x: Not done
[harvest-masternode-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/harvest-masternode-coin.js) | [Harvest Masternode Coin](https://coincheckup.com/coins/harvest-masternode-coin) | HC | Not Implemented | :x: Not done
[parkbyte](https://github.com/coincheckup/crypto-supplies/blob/master/coins/parkbyte.js) | [ParkByte](https://coincheckup.com/coins/parkbyte) | PKB | Not Implemented | :x: Not done
[ronpaulcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ronpaulcoin.js) | [RonPaulCoin](https://coincheckup.com/coins/ronpaulcoin) | RPC | Not Implemented | :x: Not done
[prime-xi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prime-xi.js) | [Prime-XI](https://coincheckup.com/coins/prime-xi) | PXI | Dynamic | :white_check_mark: Done
[bumbacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bumbacoin.js) | [BumbaCoin](https://coincheckup.com/coins/bumbacoin) | BUMBA | Not Implemented | :x: Not done
[catcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/catcoin.js) | [Catcoin](https://coincheckup.com/coins/catcoin) | CAT | Not Implemented | :x: Not done
[nekonium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nekonium.js) | [Nekonium](https://coincheckup.com/coins/nekonium) | NUKO | Not Implemented | :x: Not done
[mustangcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mustangcoin.js) | [MustangCoin](https://coincheckup.com/coins/mustangcoin) | MST | Dynamic | :white_check_mark: Done
[digitaldevelopersfund](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digitaldevelopersfund.js) | [DigitalDevelopersFund](https://coincheckup.com/coins/digitaldevelopersfund) | DDF | Not Implemented | :x: Not done
[zurcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zurcoin.js) | [Zurcoin](https://coincheckup.com/coins/zurcoin) | ZUR | Not Implemented | :x: Not done
[quatloo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quatloo.js) | [Quatloo](https://coincheckup.com/coins/quatloo) | QTL | Not Implemented | :x: Not done
[signatum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/signatum.js) | [Signatum](https://coincheckup.com/coins/signatum) | SIGT | Not Implemented | :x: Not done
[eaglecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eaglecoin.js) | [EagleCoin](https://coincheckup.com/coins/eaglecoin) | EAGLE | Dynamic | :white_check_mark: Done
[grimcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/grimcoin.js) | [Grimcoin](https://coincheckup.com/coins/grimcoin) | GRIM | Not Implemented | :x: Not done
[secretcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/secretcoin.js) | [SecretCoin](https://coincheckup.com/coins/secretcoin) | SCRT | Not Implemented | :x: Not done
[tokugawa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tokugawa.js) | [Tokugawa](https://coincheckup.com/coins/tokugawa) | TOK | Not Implemented | :x: Not done
[mincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mincoin.js) | [Mincoin](https://coincheckup.com/coins/mincoin) | MNC | Not Implemented | :x: Not done
[sixeleven](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sixeleven.js) | [SixEleven](https://coincheckup.com/coins/sixeleven) | 611 | Not Implemented | :x: Not done
[x-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/x-coin.js) | [X-Coin](https://coincheckup.com/coins/x-coin) | XCO | Not Implemented | :x: Not done
[redcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/redcoin.js) | [RedCoin](https://coincheckup.com/coins/redcoin) | RED | Not Implemented | :x: Not done
[quebecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quebecoin.js) | [Quebecoin](https://coincheckup.com/coins/quebecoin) | QBC | Not Implemented | :x: Not done
[desire](https://github.com/coincheckup/crypto-supplies/blob/master/coins/desire.js) | [Desire](https://coincheckup.com/coins/desire) | DSR | Not Implemented | :x: Not done
[phantomx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/phantomx.js) | [Phantomx](https://coincheckup.com/coins/phantomx) | PNX | Not Implemented | :x: Not done
[eryllium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eryllium.js) | [Eryllium](https://coincheckup.com/coins/eryllium) | ERY | Dynamic | :white_check_mark: Done
[globaltoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/globaltoken.js) | [GlobalToken](https://coincheckup.com/coins/globaltoken) | GLT | Not Implemented | :x: Not done
[yenten](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yenten.js) | [YENTEN](https://coincheckup.com/coins/yenten) | YTN | Not Implemented | :x: Not done
[guess](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guess.js) | [Peerguess](https://coincheckup.com/coins/guess) | GUESS | Dynamic | :white_check_mark: Done
[acoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/acoin.js) | [Acoin](https://coincheckup.com/coins/acoin) | ACOIN | Not Implemented | :x: Not done
[tajcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tajcoin.js) | [TajCoin](https://coincheckup.com/coins/tajcoin) | TAJ | Dynamic | :white_check_mark: Done
[network-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/network-token.js) | [Network Token](https://coincheckup.com/coins/network-token) | NTWK | Dynamic | :white_check_mark: Done
[eternity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eternity.js) | [Eternity](https://coincheckup.com/coins/eternity) | ENT | Dynamic | :white_check_mark: Done
[doubloon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/doubloon.js) | [BOAT](https://coincheckup.com/coins/doubloon) | BOAT | Not Implemented | :x: Not done
[theresa-may-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/theresa-may-coin.js) | [Theresa May Coin](https://coincheckup.com/coins/theresa-may-coin) | MAY | Not Implemented | :x: Not done
[jin-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jin-coin.js) | [Jin Coin](https://coincheckup.com/coins/jin-coin) | JIN | Not Implemented | :x: Not done
[ecocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ecocoin.js) | [EcoCoin](https://coincheckup.com/coins/ecocoin) | ECO | Not Implemented | :x: Not done
[beatcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/beatcoin.js) | [Beatcoin](https://coincheckup.com/coins/beatcoin) | XBTS | Not Implemented | :x: Not done
[ethereum-dark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-dark.js) | [Ethereum Dark](https://coincheckup.com/coins/ethereum-dark) | ETHD | Dynamic | :white_check_mark: Done
[bitcoin-21](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-21.js) | [Bitcoin 21](https://coincheckup.com/coins/bitcoin-21) | XBTC21 | Not Implemented | :x: Not done
[polcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/polcoin.js) | [Polcoin](https://coincheckup.com/coins/polcoin) | PLC | Not Implemented | :x: Not done
[high-voltage](https://github.com/coincheckup/crypto-supplies/blob/master/coins/high-voltage.js) | [High Voltage](https://coincheckup.com/coins/high-voltage) | HVCO | Not Implemented | :x: Not done
[macron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/macron.js) | [MACRON](https://coincheckup.com/coins/macron) | MCRN | Not Implemented | :x: Not done
[dalecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dalecoin.js) | [Dalecoin](https://coincheckup.com/coins/dalecoin) | DALC | Dynamic | :white_check_mark: Done
[global-tour-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-tour-coin.js) | [Global Tour Coin](https://coincheckup.com/coins/global-tour-coin) | GTC | Not Implemented | :x: Not done
[speedcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/speedcash.js) | [SpeedCash](https://coincheckup.com/coins/speedcash) | SCS | Not Implemented | :x: Not done
[soilcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/soilcoin.js) | [SOILcoin](https://coincheckup.com/coins/soilcoin) | SOIL | Not Implemented | :x: Not done
[eurocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eurocoin.js) | [Eurocoin](https://coincheckup.com/coins/eurocoin) | EUC | Not Implemented | :x: Not done
[debitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/debitcoin.js) | [Debitcoin](https://coincheckup.com/coins/debitcoin) | DBTC | Not Implemented | :x: Not done
[allion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/allion.js) | [Allion](https://coincheckup.com/coins/allion) | ALL | Not Implemented | :x: Not done
[homeblockcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/homeblockcoin.js) | [HomeBlockCoin](https://coincheckup.com/coins/homeblockcoin) | HBC | Not Implemented | :x: Not done
[digital-rupees](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-rupees.js) | [Digital Rupees](https://coincheckup.com/coins/digital-rupees) | DRS | Not Implemented | :x: Not done
[bitcoin-planet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-planet.js) | [Bitcoin Planet](https://coincheckup.com/coins/bitcoin-planet) | BTPL | Not Implemented | :x: Not done
[exchange-n](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exchange-n.js) | [ExchangeN](https://coincheckup.com/coins/exchange-n) | EXN | Not Implemented | :x: Not done
[paycon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paycon.js) | [PayCon](https://coincheckup.com/coins/paycon) | CON | Not Implemented | :x: Not done
[sooncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sooncoin.js) | [SoonCoin](https://coincheckup.com/coins/sooncoin) | SOON | Not Implemented | :x: Not done
[solarflarecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/solarflarecoin.js) | [Solarflarecoin](https://coincheckup.com/coins/solarflarecoin) | SFC | Not Implemented | :x: Not done
[dollarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dollarcoin.js) | [Dollarcoin](https://coincheckup.com/coins/dollarcoin) | DLC | Not Implemented | :x: Not done
[goldpieces](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldpieces.js) | [GoldPieces](https://coincheckup.com/coins/goldpieces) | GP | Not Implemented | :x: Not done
[vaperscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vaperscoin.js) | [VapersCoin](https://coincheckup.com/coins/vaperscoin) | VPRC | Not Implemented | :x: Not done
[useless-ethereum-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/useless-ethereum-token.js) | [Useless Ethereum Token](https://coincheckup.com/coins/useless-ethereum-token) | UET | Dynamic | :white_check_mark: Done
[bankcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bankcoin.js) | [Bankcoin](https://coincheckup.com/coins/bankcoin) | B@ | Not Implemented | :x: Not done
[abjcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/abjcoin.js) | [Abjcoin](https://coincheckup.com/coins/abjcoin) | ABJ | Not Implemented | :x: Not done
[bitquark](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitquark.js) | [BitQuark](https://coincheckup.com/coins/bitquark) | BTQ | Not Implemented | :x: Not done
[allsafe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/allsafe.js) | [AllSafe](https://coincheckup.com/coins/allsafe) | ASAFE2 | Not Implemented | :x: Not done
[neuro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neuro.js) | [Neuro](https://coincheckup.com/coins/neuro) | NRO | Dynamic | :white_check_mark: Done
[funcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/funcoin.js) | [FUNCoin](https://coincheckup.com/coins/funcoin) | FUNC | Not Implemented | :x: Not done
[benjirolls](https://github.com/coincheckup/crypto-supplies/blob/master/coins/benjirolls.js) | [BenjiRolls](https://coincheckup.com/coins/benjirolls) | BENJI | Not Implemented | :x: Not done
[money](https://github.com/coincheckup/crypto-supplies/blob/master/coins/money.js) | [Money](https://coincheckup.com/coins/money) | $ | Not Implemented | :x: Not done
[fuzzballs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fuzzballs.js) | [FuzzBalls](https://coincheckup.com/coins/fuzzballs) | FUZZ | Not Implemented | :x: Not done
[cachecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cachecoin.js) | [CacheCoin](https://coincheckup.com/coins/cachecoin) | CACH | Dynamic | :white_check_mark: Done
[bitasean](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitasean.js) | [BitAsean](https://coincheckup.com/coins/bitasean) | BAS | Dynamic | :white_check_mark: Done
[californium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/californium.js) | [Californium](https://coincheckup.com/coins/californium) | CF | Not Implemented | :x: Not done
[geysercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/geysercoin.js) | [GeyserCoin](https://coincheckup.com/coins/geysercoin) | GSR | Not Implemented | :x: Not done
[ponzicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ponzicoin.js) | [PonziCoin](https://coincheckup.com/coins/ponzicoin) | PONZI | Not Implemented | :x: Not done
[marijuanacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/marijuanacoin.js) | [Marijuanacoin](https://coincheckup.com/coins/marijuanacoin) | MAR | Not Implemented | :x: Not done
[bipcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bipcoin.js) | [BipCoin](https://coincheckup.com/coins/bipcoin) | BIP | Not Implemented | :x: Not done
[honey](https://github.com/coincheckup/crypto-supplies/blob/master/coins/honey.js) | [Honey](https://coincheckup.com/coins/honey) | HONEY | Not Implemented | :x: Not done
[songcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/songcoin.js) | [SongCoin](https://coincheckup.com/coins/songcoin) | SONG | Not Implemented | :x: Not done
[elysium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elysium.js) | [Elysium](https://coincheckup.com/coins/elysium) | ELS | Not Implemented | :x: Not done
[comet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/comet.js) | [Comet](https://coincheckup.com/coins/comet) | CMT | Not Implemented | :x: Not done
[postoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/postoken.js) | [PoSToken](https://coincheckup.com/coins/postoken) | POS | Dynamic | :white_check_mark: Done
[master-swiscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/master-swiscoin.js) | [Master Swiscoin](https://coincheckup.com/coins/master-swiscoin) | MSCN | Not Implemented | :x: Not done
[compucoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/compucoin.js) | [CompuCoin](https://coincheckup.com/coins/compucoin) | CPN | Not Implemented | :x: Not done
[gold-pressed-latinum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gold-pressed-latinum.js) | [Gold Pressed Latinum](https://coincheckup.com/coins/gold-pressed-latinum) | GPL | Not Implemented | :x: Not done
[bitcoal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoal.js) | [BitCoal](https://coincheckup.com/coins/bitcoal) | COAL | Not Implemented | :x: Not done
[icobid](https://github.com/coincheckup/crypto-supplies/blob/master/coins/icobid.js) | [ICOBID](https://coincheckup.com/coins/icobid) | ICOB | Not Implemented | :x: Not done
[visio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/visio.js) | [Visio](https://coincheckup.com/coins/visio) | VISIO | Dynamic | :white_check_mark: Done
[trident-group](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trident-group.js) | [Trident Group](https://coincheckup.com/coins/trident-group) | TRDT | Dynamic | :white_check_mark: Done
[jobscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jobscoin.js) | [JobsCoin](https://coincheckup.com/coins/jobscoin) | JOBS | Not Implemented | :x: Not done
[litebitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litebitcoin.js) | [LiteBitcoin](https://coincheckup.com/coins/litebitcoin) | LBTC | Not Implemented | :x: Not done
[guccionecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/guccionecoin.js) | [GuccioneCoin](https://coincheckup.com/coins/guccionecoin) | GCC | Not Implemented | :x: Not done
[pioneer-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pioneer-coin.js) | [Pioneer Coin](https://coincheckup.com/coins/pioneer-coin) | PCOIN | Not Implemented | :x: Not done
[zetamicron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zetamicron.js) | [ZetaMicron](https://coincheckup.com/coins/zetamicron) | ZMC | Not Implemented | :x: Not done
[flaxscript](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flaxscript.js) | [Flaxscript](https://coincheckup.com/coins/flaxscript) | FLAX | Dynamic | :white_check_mark: Done
[virta-unique-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virta-unique-coin.js) | [Virta Unique Coin](https://coincheckup.com/coins/virta-unique-coin) | VUC | Not Implemented | :x: Not done
[healthywormcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/healthywormcoin.js) | [HealthyWormCoin](https://coincheckup.com/coins/healthywormcoin) | WORM | Dynamic | :white_check_mark: Done
[javascript-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/javascript-token.js) | [JavaScript Token](https://coincheckup.com/coins/javascript-token) | JS | Dynamic | :white_check_mark: Done
[bolenum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bolenum.js) | [Bolenum](https://coincheckup.com/coins/bolenum) | BLN | Dynamic | :white_check_mark: Done
[coinonat](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinonat.js) | [Coinonat](https://coincheckup.com/coins/coinonat) | CXT | Not Implemented | :x: Not done
[roofs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/roofs.js) | [Roofs](https://coincheckup.com/coins/roofs) | ROOFS | Not Implemented | :x: Not done
[brother](https://github.com/coincheckup/crypto-supplies/blob/master/coins/brother.js) | [BROTHER](https://coincheckup.com/coins/brother) | BRAT | Not Implemented | :x: Not done
[bnrtxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bnrtxcoin.js) | [BnrtxCoin](https://coincheckup.com/coins/bnrtxcoin) | BNX | Not Implemented | :x: Not done
[veltor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/veltor.js) | [Veltor](https://coincheckup.com/coins/veltor) | VLT | Not Implemented | :x: Not done
[shadow-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shadow-token.js) | [Shadow Token](https://coincheckup.com/coins/shadow-token) | SHDW | Not Implemented | :x: Not done
[asiadigicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/asiadigicoin.js) | [Asiadigicoin](https://coincheckup.com/coins/asiadigicoin) | ADCN | Not Implemented | :x: Not done
[luna-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/luna-coin.js) | [Luna Coin](https://coincheckup.com/coins/luna-coin) | LUNA | Not Implemented | :x: Not done
[geertcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/geertcoin.js) | [GeertCoin](https://coincheckup.com/coins/geertcoin) | GEERT | Not Implemented | :x: Not done
[kronecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kronecoin.js) | [Kronecoin](https://coincheckup.com/coins/kronecoin) | KRONE | Not Implemented | :x: Not done
[dreamcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dreamcoin.js) | [Dreamcoin](https://coincheckup.com/coins/dreamcoin) | DRM | Not Implemented | :x: Not done
[cabbage](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cabbage.js) | [Cabbage](https://coincheckup.com/coins/cabbage) | CAB | Not Implemented | :x: Not done
[iconic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iconic.js) | [Iconic](https://coincheckup.com/coins/iconic) | ICON | Not Implemented | :x: Not done
[slevin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/slevin.js) | [Slevin](https://coincheckup.com/coins/slevin) | SLEVIN | Not Implemented | :x: Not done
[independent-money-system](https://github.com/coincheckup/crypto-supplies/blob/master/coins/independent-money-system.js) | [Independent Money System](https://coincheckup.com/coins/independent-money-system) | IMS | Not Implemented | :x: Not done
[playercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/playercoin.js) | [PlayerCoin](https://coincheckup.com/coins/playercoin) | PLACO | Not Implemented | :x: Not done
[litecred](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecred.js) | [Litecred](https://coincheckup.com/coins/litecred) | LTCR | Not Implemented | :x: Not done
[kingn-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kingn-coin.js) | [KingN Coin](https://coincheckup.com/coins/kingn-coin) | KNC | Not Implemented | :x: Not done
[creatio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/creatio.js) | [Creatio](https://coincheckup.com/coins/creatio) | XCRE | Not Implemented | :x: Not done
[arbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arbit.js) | [ARbit](https://coincheckup.com/coins/arbit) | ARB | Not Implemented | :x: Not done
[vector](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vector.js) | [VectorAI](https://coincheckup.com/coins/vector) | VEC2 | Not Implemented | :x: Not done
[litecoin-ultra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/litecoin-ultra.js) | [LiteCoin Ultra](https://coincheckup.com/coins/litecoin-ultra) | LTCU | Not Implemented | :x: Not done
[milocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/milocoin.js) | [MiloCoin](https://coincheckup.com/coins/milocoin) | MILO | Not Implemented | :x: Not done
[piecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/piecoin.js) | [PIECoin](https://coincheckup.com/coins/piecoin) | PIE | Not Implemented | :x: Not done
[letitride](https://github.com/coincheckup/crypto-supplies/blob/master/coins/letitride.js) | [LetItRide](https://coincheckup.com/coins/letitride) | LIR | Dynamic | :white_check_mark: Done
[zayedcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zayedcoin.js) | [Zayedcoin](https://coincheckup.com/coins/zayedcoin) | ZYD | Not Implemented | :x: Not done
[interzone](https://github.com/coincheckup/crypto-supplies/blob/master/coins/interzone.js) | [Interzone](https://coincheckup.com/coins/interzone) | ITZ | Not Implemented | :x: Not done
[glasscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/glasscoin.js) | [GlassCoin](https://coincheckup.com/coins/glasscoin) | GLS | Not Implemented | :x: Not done
[credence-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/credence-coin.js) | [Credence Coin](https://coincheckup.com/coins/credence-coin) | CRDNC | Not Implemented | :x: Not done
[cannation](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cannation.js) | [Cannation](https://coincheckup.com/coins/cannation) | CNNC | Not Implemented | :x: Not done
[posex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/posex.js) | [PosEx](https://coincheckup.com/coins/posex) | PEX | Not Implemented | :x: Not done
[plncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/plncoin.js) | [PLNcoin](https://coincheckup.com/coins/plncoin) | PLNC | Not Implemented | :x: Not done
[coupecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coupecoin.js) | [Coupecoin](https://coincheckup.com/coins/coupecoin) | COUPE | Not Implemented | :x: Not done
[anarchistsprime](https://github.com/coincheckup/crypto-supplies/blob/master/coins/anarchistsprime.js) | [AnarchistsPrime](https://coincheckup.com/coins/anarchistsprime) | ACP | Not Implemented | :x: Not done
[prcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prcoin.js) | [PRCoin](https://coincheckup.com/coins/prcoin) | PRC | Not Implemented | :x: Not done
[save-and-gain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/save-and-gain.js) | [Save and Gain](https://coincheckup.com/coins/save-and-gain) | SANDG | Not Implemented | :x: Not done
[bitvolt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitvolt.js) | [Bitvolt](https://coincheckup.com/coins/bitvolt) | VOLT | Not Implemented | :x: Not done
[womencoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/womencoin.js) | [WomenCoin](https://coincheckup.com/coins/womencoin) | WOMEN | Not Implemented | :x: Not done
[argus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/argus.js) | [Argus](https://coincheckup.com/coins/argus) | ARGUS | Not Implemented | :x: Not done
[wild-beast-block](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wild-beast-block.js) | [Wild Beast Block](https://coincheckup.com/coins/wild-beast-block) | WBB | Not Implemented | :x: Not done
[dollar-online](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dollar-online.js) | [Dollar Online](https://coincheckup.com/coins/dollar-online) | DOLLAR | Not Implemented | :x: Not done
[bowscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bowscoin.js) | [BowsCoin](https://coincheckup.com/coins/bowscoin) | BSC | Not Implemented | :x: Not done
[ibank](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ibank.js) | [iBank](https://coincheckup.com/coins/ibank) | IBANK | Not Implemented | :x: Not done
[socialcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/socialcoin.js) | [SocialCoin](https://coincheckup.com/coins/socialcoin) | SOCC | Not Implemented | :x: Not done
[rawcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rawcoin.js) | [Rawcoin](https://coincheckup.com/coins/rawcoin) | XRC | Not Implemented | :x: Not done
[biobar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/biobar.js) | [BioBar](https://coincheckup.com/coins/biobar) | BIOB | Not Implemented | :x: Not done
[coimatic-2.0](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coimatic-2.0.js) | [Coimatic 2.0](https://coincheckup.com/coins/coimatic-2.0) | CTIC2 | Not Implemented | :x: Not done
[coimatic-3.0](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coimatic-3.0.js) | [Coimatic 3.0](https://coincheckup.com/coins/coimatic-3.0) | CTIC3 | Not Implemented | :x: Not done
[artex-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/artex-coin.js) | [Artex Coin](https://coincheckup.com/coins/artex-coin) | ATX | Not Implemented | :x: Not done
[crevacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crevacoin.js) | [CrevaCoin](https://coincheckup.com/coins/crevacoin) | CREVA | Not Implemented | :x: Not done
[concoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/concoin.js) | [Concoin](https://coincheckup.com/coins/concoin) | CONX | Not Implemented | :x: Not done
[vault-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vault-coin.js) | [Vault Coin](https://coincheckup.com/coins/vault-coin) | VLTC | Not Implemented | :x: Not done
[project-x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/project-x.js) | [Project-X](https://coincheckup.com/coins/project-x) | NANOX | Not Implemented | :x: Not done
[magnum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magnum.js) | [Magnum](https://coincheckup.com/coins/magnum) | MGM | Not Implemented | :x: Not done
[ulatech](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ulatech.js) | [Ulatech](https://coincheckup.com/coins/ulatech) | ULA | Not Implemented | :x: Not done
[harmonycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/harmonycoin.js) | [HarmonyCoin](https://coincheckup.com/coins/harmonycoin) | HMC | Not Implemented | :x: Not done
[levoplus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/levoplus.js) | [LevoPlus](https://coincheckup.com/coins/levoplus) | LVPS | Not Implemented | :x: Not done
[tristar-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tristar-coin.js) | [Tristar Coin](https://coincheckup.com/coins/tristar-coin) | TSTR | Not Implemented | :x: Not done
[poly-ai](https://github.com/coincheckup/crypto-supplies/blob/master/coins/poly-ai.js) | [POLY AI](https://coincheckup.com/coins/poly-ai) | AI | Dynamic | :white_check_mark: Done
[futurxe](https://github.com/coincheckup/crypto-supplies/blob/master/coins/futurxe.js) | [FuturXe](https://coincheckup.com/coins/futurxe) | FXE | Not Implemented | :x: Not done
[blockmesh](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockmesh.js) | [BlockMesh](https://coincheckup.com/coins/blockmesh) | BMH | Dynamic | :white_check_mark: Done
[investdigital](https://github.com/coincheckup/crypto-supplies/blob/master/coins/investdigital.js) | [InvestDigital](https://coincheckup.com/coins/investdigital) | IDT | Not Implemented | :x: Not done
[superior-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/superior-coin.js) | [Superior Coin](https://coincheckup.com/coins/superior-coin) | SUP | Not Implemented | :x: Not done
[oceanchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/oceanchain.js) | [OceanChain](https://coincheckup.com/coins/oceanchain) | OC | Not Implemented | :x: Not done
[ofcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ofcoin.js) | [OFCOIN](https://coincheckup.com/coins/ofcoin) | OF | Not Implemented | :x: Not done
[bittwatt](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bittwatt.js) | [Bittwatt](https://coincheckup.com/coins/bittwatt) | BWT | Not Implemented | :x: Not done
[xmax](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xmax.js) | [XMax](https://coincheckup.com/coins/xmax) | XMX | Dynamic | :white_check_mark: Done
[cashbet-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cashbet-coin.js) | [CashBet Coin](https://coincheckup.com/coins/cashbet-coin) | CBC | Dynamic | :white_check_mark: Done
[maggie](https://github.com/coincheckup/crypto-supplies/blob/master/coins/maggie.js) | [Maggie](https://coincheckup.com/coins/maggie) | MAG | Dynamic | :white_check_mark: Done
[global-social-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-social-chain.js) | [Global Social Chain](https://coincheckup.com/coins/global-social-chain) | GSC | Not Implemented | :x: Not done
[influence-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/influence-chain.js) | [Influence Chain](https://coincheckup.com/coins/influence-chain) | INC | Not Implemented | :x: Not done
[ipchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ipchain.js) | [IPChain](https://coincheckup.com/coins/ipchain) | IPC | Dynamic | :white_check_mark: Done
[traxia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/traxia.js) | [TRAXIA](https://coincheckup.com/coins/traxia) | TMT | Dynamic | :white_check_mark: Done
[stockchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stockchain.js) | [StockChain](https://coincheckup.com/coins/stockchain) | SCC | Dynamic | :white_check_mark: Done
[filecoin-futures](https://github.com/coincheckup/crypto-supplies/blob/master/coins/filecoin-futures.js) | [Filecoin [Futures]](https://coincheckup.com/coins/filecoin-futures) | FIL | Not Implemented | :x: Not done
[pchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pchain.js) | [PCHAIN](https://coincheckup.com/coins/pchain) | PAI | Dynamic | :white_check_mark: Done
[open-platform](https://github.com/coincheckup/crypto-supplies/blob/master/coins/open-platform.js) | [Open Platform](https://coincheckup.com/coins/open-platform) | OPEN | Dynamic | :white_check_mark: Done
[levocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/levocoin.js) | [Levocoin](https://coincheckup.com/coins/levocoin) | LEVO | Not Implemented | :x: Not done
[engine](https://github.com/coincheckup/crypto-supplies/blob/master/coins/engine.js) | [Engine](https://coincheckup.com/coins/engine) | EGCC | Not Implemented | :x: Not done
[santa-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/santa-coin.js) | [StarChain](https://coincheckup.com/coins/santa-coin) | STC | Not Implemented | :x: Not done
[intelligent-investment-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intelligent-investment-chain.js) | [Intelligent Investment Chain](https://coincheckup.com/coins/intelligent-investment-chain) | IIC | Not Implemented | :x: Not done
[first-bitcoin-capital](https://github.com/coincheckup/crypto-supplies/blob/master/coins/first-bitcoin-capital.js) | [First Bitcoin Capital](https://coincheckup.com/coins/first-bitcoin-capital) | BITCF | Not Implemented | :x: Not done
[quotient](https://github.com/coincheckup/crypto-supplies/blob/master/coins/quotient.js) | [Quotient](https://coincheckup.com/coins/quotient) | XQN | Dynamic | :white_check_mark: Done
[tellurion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tellurion.js) | [Tellurion](https://coincheckup.com/coins/tellurion) | TELL | Not Implemented | :x: Not done
[numuscash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/numuscash.js) | [NumusCash](https://coincheckup.com/coins/numuscash) | NUMUS | Not Implemented | :x: Not done
[btcmoon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/btcmoon.js) | [BTCMoon](https://coincheckup.com/coins/btcmoon) | BTCM | Dynamic | :white_check_mark: Done
[bigone-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bigone-token.js) | [BigONE Token](https://coincheckup.com/coins/bigone-token) | BIG | Not Implemented | :x: Not done
[t-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/t-coin.js) | [T-coin](https://coincheckup.com/coins/t-coin) | TCOIN | Not Implemented | :x: Not done
[universalroyalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/universalroyalcoin.js) | [UniversalRoyalCoin](https://coincheckup.com/coins/universalroyalcoin) | UNRC | Not Implemented | :x: Not done
[sjwcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sjwcoin.js) | [SJWCoin](https://coincheckup.com/coins/sjwcoin) | SJW | Not Implemented | :x: Not done
[pundi-x-new](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pundi-x-new.js) | [Pundi X](https://coincheckup.com/coins/pundi-x-new) | NPXS | Not Implemented | :x: Not done
[budbo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/budbo.js) | [Budbo](https://coincheckup.com/coins/budbo) | BUBO | Not Implemented | :x: Not done
[axiom](https://github.com/coincheckup/crypto-supplies/blob/master/coins/axiom.js) | [Axiom](https://coincheckup.com/coins/axiom) | AXIOM | Not Implemented | :x: Not done
[richcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/richcoin.js) | [RichCoin](https://coincheckup.com/coins/richcoin) | RICHX | Not Implemented | :x: Not done
[omicron](https://github.com/coincheckup/crypto-supplies/blob/master/coins/omicron.js) | [Omicron](https://coincheckup.com/coins/omicron) | OMC | Not Implemented | :x: Not done
[coffeecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coffeecoin.js) | [CoffeeCoin](https://coincheckup.com/coins/coffeecoin) | CFC | Not Implemented | :x: Not done
[antimatter](https://github.com/coincheckup/crypto-supplies/blob/master/coins/antimatter.js) | [Antimatter](https://coincheckup.com/coins/antimatter) | ANTX | Not Implemented | :x: Not done
[ur](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ur.js) | [UR](https://coincheckup.com/coins/ur) | UR | Not Implemented | :x: Not done
[magnetcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/magnetcoin.js) | [Magnetcoin](https://coincheckup.com/coins/magnetcoin) | MAGN | Not Implemented | :x: Not done
[slothcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/slothcoin.js) | [Slothcoin](https://coincheckup.com/coins/slothcoin) | SLOTH | Not Implemented | :x: Not done
[protean](https://github.com/coincheckup/crypto-supplies/blob/master/coins/protean.js) | [Protean](https://coincheckup.com/coins/protean) | PRN | Not Implemented | :x: Not done
[akuya-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/akuya-coin.js) | [Akuya Coin](https://coincheckup.com/coins/akuya-coin) | AKY | Not Implemented | :x: Not done
[consensus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/consensus.js) | [Consensus](https://coincheckup.com/coins/consensus) | SEN | Dynamic | :white_check_mark: Done
[stex-stex](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stex-stex.js) | [STEX](https://coincheckup.com/coins/stex-stex) | STEX | Not Implemented | :x: Not done
[zsecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zsecoin.js) | [ZSEcoin](https://coincheckup.com/coins/zsecoin) | ZSE | Not Implemented | :x: Not done
[sakuracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sakuracoin.js) | [Sakuracoin](https://coincheckup.com/coins/sakuracoin) | SKR | Not Implemented | :x: Not done
[w3coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/w3coin.js) | [W3Coin](https://coincheckup.com/coins/w3coin) | W3C | Not Implemented | :x: Not done
[etherecash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etherecash.js) | [Etherecash](https://coincheckup.com/coins/etherecash) | ECH | Not Implemented | :x: Not done
[embercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/embercoin.js) | [EmberCoin](https://coincheckup.com/coins/embercoin) | EMB | Not Implemented | :x: Not done
[zengold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zengold.js) | [ZenGold](https://coincheckup.com/coins/zengold) | ZENGOLD | Not Implemented | :x: Not done
[dragon-coins](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dragon-coins.js) | [Dragon Coins](https://coincheckup.com/coins/dragon-coins) | DRG | Dynamic | :white_check_mark: Done
[shacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shacoin.js) | [SHACoin](https://coincheckup.com/coins/shacoin) | SHA | Dynamic | :white_check_mark: Done
[blockcdn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockcdn.js) | [BlockCDN](https://coincheckup.com/coins/blockcdn) | BCDN | Dynamic | :white_check_mark: Done
[kcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kcash.js) | [Kcash](https://coincheckup.com/coins/kcash) | KCASH | Not Implemented | :x: Not done
[cropcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cropcoin.js) | [Cropcoin](https://coincheckup.com/coins/cropcoin) | CROP | Not Implemented | :x: Not done
[bt2-cst](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bt2-cst.js) | [BT2 [CST]](https://coincheckup.com/coins/bt2-cst) | BT2 | Not Implemented | :x: Not done
[pixie-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pixie-coin.js) | [Pixie Coin](https://coincheckup.com/coins/pixie-coin) | PXC | Dynamic | :white_check_mark: Done
[president-johnson](https://github.com/coincheckup/crypto-supplies/blob/master/coins/president-johnson.js) | [President Johnson](https://coincheckup.com/coins/president-johnson) | GARY | Not Implemented | :x: Not done
[contractnet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/contractnet.js) | [ContractNet](https://coincheckup.com/coins/contractnet) | CNET | Not Implemented | :x: Not done
[decentralized-machine-learning](https://github.com/coincheckup/crypto-supplies/blob/master/coins/decentralized-machine-learning.js) | [Decentralized Machine Learning](https://coincheckup.com/coins/decentralized-machine-learning) | DML | Dynamic | :white_check_mark: Done
[rupee](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rupee.js) | [Rupee](https://coincheckup.com/coins/rupee) | RUP | Not Implemented | :x: Not done
[freyrchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/freyrchain.js) | [Freyrchain](https://coincheckup.com/coins/freyrchain) | FREC | Not Implemented | :x: Not done
[gochain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gochain.js) | [GoChain](https://coincheckup.com/coins/gochain) | GO | Not Implemented | :x: Not done
[bezant](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bezant.js) | [Bezant](https://coincheckup.com/coins/bezant) | BZNT | Dynamic | :white_check_mark: Done
[noah-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/noah-coin.js) | [Noah Coin](https://coincheckup.com/coins/noah-coin) | NOAH | Dynamic | :white_check_mark: Done
[nexty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexty.js) | [Nexty](https://coincheckup.com/coins/nexty) | NTY | Not Implemented | :x: Not done
[comsa-xem](https://github.com/coincheckup/crypto-supplies/blob/master/coins/comsa-xem.js) | [COMSA [XEM]](https://coincheckup.com/coins/comsa-xem) | CMS | Not Implemented | :x: Not done
[rublix](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rublix.js) | [Rublix](https://coincheckup.com/coins/rublix) | RBLX | Dynamic | :white_check_mark: Done
[sentinel-protocol](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sentinel-protocol.js) | [Sentinel Protocol](https://coincheckup.com/coins/sentinel-protocol) | UPP | Not Implemented | :x: Not done
[skrumble-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/skrumble-network.js) | [Skrumble Network](https://coincheckup.com/coins/skrumble-network) | SKM | Dynamic | :white_check_mark: Done
[couchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/couchain.js) | [Couchain](https://coincheckup.com/coins/couchain) | COU | Dynamic | :white_check_mark: Done
[bitcoin-god](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoin-god.js) | [Bitcoin God](https://coincheckup.com/coins/bitcoin-god) | GOD | Not Implemented | :x: Not done
[segwit2x-futures](https://github.com/coincheckup/crypto-supplies/blob/master/coins/segwit2x-futures.js) | [SegWit2x](https://coincheckup.com/coins/segwit2x-futures) | B2X | Not Implemented | :x: Not done
[iquant](https://github.com/coincheckup/crypto-supplies/blob/master/coins/iquant.js) | [iQuant](https://coincheckup.com/coins/iquant) | IQT | Dynamic | :white_check_mark: Done
[super-game-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/super-game-chain.js) | [Super Game Chain](https://coincheckup.com/coins/super-game-chain) | SGCC | Not Implemented | :x: Not done
[cybereits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybereits.js) | [Cybereits](https://coincheckup.com/coins/cybereits) | CRE | Dynamic | :white_check_mark: Done
[halalchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/halalchain.js) | [HalalChain](https://coincheckup.com/coins/halalchain) | HLC | Not Implemented | :x: Not done
[salpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/salpay.js) | [SalPay](https://coincheckup.com/coins/salpay) | SAL | Dynamic | :white_check_mark: Done
[tripio](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tripio.js) | [Tripio](https://coincheckup.com/coins/tripio) | TRIO | Not Implemented | :x: Not done
[merculet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/merculet.js) | [Merculet](https://coincheckup.com/coins/merculet) | MVP | Not Implemented | :x: Not done
[libra-credit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/libra-credit.js) | [Libra Credit](https://coincheckup.com/coins/libra-credit) | LBA | Dynamic | :white_check_mark: Done
[valuechain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/valuechain.js) | [ValueChain](https://coincheckup.com/coins/valuechain) | VLC | Not Implemented | :x: Not done
[insurchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/insurchain.js) | [InsurChain](https://coincheckup.com/coins/insurchain) | INSUR | Dynamic | :white_check_mark: Done
[educoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/educoin.js) | [EduCoin](https://coincheckup.com/coins/educoin) | EDU | Not Implemented | :x: Not done
[jingtum-tech](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jingtum-tech.js) | [Jingtum Tech](https://coincheckup.com/coins/jingtum-tech) | SWTC | Not Implemented | :x: Not done
[spindle](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spindle.js) | [SPINDLE](https://coincheckup.com/coins/spindle) | SPD | Dynamic | :white_check_mark: Done
[vcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vcash.js) | [Vcash](https://coincheckup.com/coins/vcash) | XVC | Not Implemented | :x: Not done
[shopin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shopin.js) | [Shopin](https://coincheckup.com/coins/shopin) | SHOP | Not Implemented | :x: Not done
[sphre-air](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sphre-air.js) | [Sphre AIR](https://coincheckup.com/coins/sphre-air) | XID | Dynamic | :white_check_mark: Done
[medx](https://github.com/coincheckup/crypto-supplies/blob/master/coins/medx.js) | [MediBloc [ERC20]](https://coincheckup.com/coins/medx) | MEDX | Not Implemented | :x: Not done
[snipcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/snipcoin.js) | [SnipCoin](https://coincheckup.com/coins/snipcoin) | SNIP | Not Implemented | :x: Not done
[b2bcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/b2bcoin.js) | [B2Bcoin](https://coincheckup.com/coins/b2bcoin) | BBC | Dynamic | :white_check_mark: Done
[indicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/indicoin.js) | [Indicoin](https://coincheckup.com/coins/indicoin) | INDI | Dynamic | :white_check_mark: Done
[ether-zero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ether-zero.js) | [Ether Zero](https://coincheckup.com/coins/ether-zero) | ETZ | Not Implemented | :x: Not done
[weth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/weth.js) | [WETH](https://coincheckup.com/coins/weth) | WETH | Not Implemented | :x: Not done
[vipstar-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vipstar-coin.js) | [Vipstar Coin](https://coincheckup.com/coins/vipstar-coin) | VIPS | Not Implemented | :x: Not done
[comsa-eth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/comsa-eth.js) | [COMSA [ETH]](https://coincheckup.com/coins/comsa-eth) | CMS | Dynamic | :white_check_mark: Done
[swisscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swisscoin.js) | [Swisscoin](https://coincheckup.com/coins/swisscoin) | SIC | Not Implemented | :x: Not done
[royalties](https://github.com/coincheckup/crypto-supplies/blob/master/coins/royalties.js) | [Royalties](https://coincheckup.com/coins/royalties) | XRY | Not Implemented | :x: Not done
[entcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/entcash.js) | [ENTCash](https://coincheckup.com/coins/entcash) | ENT | Not Implemented | :x: Not done
[fargocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fargocoin.js) | [Fargocoin](https://coincheckup.com/coins/fargocoin) | FRGC | Not Implemented | :x: Not done
[hyper-pay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hyper-pay.js) | [Hyper Pay](https://coincheckup.com/coins/hyper-pay) | HPY | Not Implemented | :x: Not done
[hero](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hero.js) | [Hero](https://coincheckup.com/coins/hero) | HERO | Dynamic | :white_check_mark: Done
[gold-reward-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gold-reward-token.js) | [GOLD Reward Token](https://coincheckup.com/coins/gold-reward-token) | GRX | Dynamic | :white_check_mark: Done
[topcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/topcoin.js) | [TopCoin](https://coincheckup.com/coins/topcoin) | TOP | Not Implemented | :x: Not done
[rabbitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rabbitcoin.js) | [RabbitCoin](https://coincheckup.com/coins/rabbitcoin) | RBBT | Not Implemented | :x: Not done
[huncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/huncoin.js) | [Huncoin](https://coincheckup.com/coins/huncoin) | HNC | Not Implemented | :x: Not done
[pressone](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pressone.js) | [PressOne](https://coincheckup.com/coins/pressone) | PRS | Dynamic | :white_check_mark: Done
[high-gain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/high-gain.js) | [High Gain](https://coincheckup.com/coins/high-gain) | HIGH | Dynamic | :white_check_mark: Done
[aidos-kuneen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aidos-kuneen.js) | [Aidos Kuneen](https://coincheckup.com/coins/aidos-kuneen) | ADK | Not Implemented | :x: Not done
[etherdelta-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/etherdelta-token.js) | [EtherDelta Token](https://coincheckup.com/coins/etherdelta-token) | EDT | Dynamic | :white_check_mark: Done
[bastonet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bastonet.js) | [Bastonet](https://coincheckup.com/coins/bastonet) | BSN | Not Implemented | :x: Not done
[lightning-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lightning-bitcoin.js) | [Lightning Bitcoin](https://coincheckup.com/coins/lightning-bitcoin) | LBTC | Dynamic | :white_check_mark: Done
[futurocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/futurocoin.js) | [FuturoCoin](https://coincheckup.com/coins/futurocoin) | FTO | Not Implemented | :x: Not done
[francs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/francs.js) | [Francs](https://coincheckup.com/coins/francs) | FRN | Not Implemented | :x: Not done
[curriculum-vitae](https://github.com/coincheckup/crypto-supplies/blob/master/coins/curriculum-vitae.js) | [Curriculum Vitae](https://coincheckup.com/coins/curriculum-vitae) | CVH | Dynamic | :white_check_mark: Done
[topchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/topchain.js) | [TopChain](https://coincheckup.com/coins/topchain) | TOPC | Dynamic | :white_check_mark: Done
[rcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rcoin.js) | [Rcoin](https://coincheckup.com/coins/rcoin) | RCN | Not Implemented | :x: Not done
[bankera](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bankera.js) | [Bankera](https://coincheckup.com/coins/bankera) | BNK | Dynamic | :white_check_mark: Done
[regacoin-rega](https://github.com/coincheckup/crypto-supplies/blob/master/coins/regacoin-rega.js) | [Regacoin](https://coincheckup.com/coins/regacoin-rega) | REGA | Not Implemented | :x: Not done
[penta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/penta.js) | [Penta](https://coincheckup.com/coins/penta) | PNT | Dynamic | :white_check_mark: Done
[smoke](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smoke.js) | [Smoke](https://coincheckup.com/coins/smoke) | SMOKE | Not Implemented | :x: Not done
[cazcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cazcoin.js) | [Cazcoin](https://coincheckup.com/coins/cazcoin) | CAZ | Not Implemented | :x: Not done
[fapcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fapcoin.js) | [FAPcoin](https://coincheckup.com/coins/fapcoin) | FAP | Dynamic | :white_check_mark: Done
[corion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/corion.js) | [CORION](https://coincheckup.com/coins/corion) | COR | Not Implemented | :x: Not done
[wincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wincoin.js) | [WINCOIN](https://coincheckup.com/coins/wincoin) | WC | Dynamic | :white_check_mark: Done
[exchange-union](https://github.com/coincheckup/crypto-supplies/blob/master/coins/exchange-union.js) | [Exchange Union](https://coincheckup.com/coins/exchange-union) | XUC | Dynamic | :white_check_mark: Done
[animecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/animecoin.js) | [Animecoin](https://coincheckup.com/coins/animecoin) | ANI | Not Implemented | :x: Not done
[tezos-(pre-launch)](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tezos-(pre-launch).js) | [Tezos (Pre-Launch)](https://coincheckup.com/coins/tezos-(pre-launch)) | XTZ | Not Implemented | :x: Not done
[aston](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aston.js) | [Aston](https://coincheckup.com/coins/aston) | ATX | Dynamic | :white_check_mark: Done
[monero-original](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero-original.js) | [Monero Original](https://coincheckup.com/coins/monero-original) | XMO | Not Implemented | :x: Not done
[cubits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cubits.js) | [Cubits](https://coincheckup.com/coins/cubits) | QBT | Not Implemented | :x: Not done
[electronic-pk-chain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/electronic-pk-chain.js) | [Electronic PK Chain](https://coincheckup.com/coins/electronic-pk-chain) | EPC | Not Implemented | :x: Not done
[fairgame](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fairgame.js) | [FairGame](https://coincheckup.com/coins/fairgame) | FAIR | Not Implemented | :x: Not done
[alphabit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alphabit.js) | [Alphabit](https://coincheckup.com/coins/alphabit) | ABC | Not Implemented | :x: Not done
[dascoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dascoin.js) | [Dascoin](https://coincheckup.com/coins/dascoin) | DASC | Not Implemented | :x: Not done
[molecular-future](https://github.com/coincheckup/crypto-supplies/blob/master/coins/molecular-future.js) | [Molecular Future](https://coincheckup.com/coins/molecular-future) | MOF | Dynamic | :white_check_mark: Done
[chatcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chatcoin.js) | [ChatCoin](https://coincheckup.com/coins/chatcoin) | CHAT | Not Implemented | :x: Not done
[teslacoilcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/teslacoilcoin.js) | [TeslaCoilCoin](https://coincheckup.com/coins/teslacoilcoin) | TESLA | Not Implemented | :x: Not done
[super-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/super-bitcoin.js) | [Super Bitcoin](https://coincheckup.com/coins/super-bitcoin) | SBTC | Not Implemented | :x: Not done
[storjcoin-x](https://github.com/coincheckup/crypto-supplies/blob/master/coins/storjcoin-x.js) | [Storjcoin X](https://coincheckup.com/coins/storjcoin-x) | SJCX | Not Implemented | :x: Not done
[bank-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bank-coin.js) | [Bank Coin](https://coincheckup.com/coins/bank-coin) | BANK | Not Implemented | :x: Not done
[acute-angle-cloud](https://github.com/coincheckup/crypto-supplies/blob/master/coins/acute-angle-cloud.js) | [Acute Angle Cloud](https://coincheckup.com/coins/acute-angle-cloud) | AAC | Not Implemented | :x: Not done
[united-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/united-bitcoin.js) | [United Bitcoin](https://coincheckup.com/coins/united-bitcoin) | UBTC | Not Implemented | :x: Not done
[xyo-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xyo-network.js) | [XYO Network](https://coincheckup.com/coins/xyo-network) | XYO | Dynamic | :white_check_mark: Done
[zip](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zip.js) | [ZIP](https://coincheckup.com/coins/zip) | ZIP | Dynamic | :white_check_mark: Done
[lendroid-support-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lendroid-support-token.js) | [Lendroid Support Token](https://coincheckup.com/coins/lendroid-support-token) | LST | Dynamic | :white_check_mark: Done
[level-up-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/level-up-coin.js) | [Level Up Coin](https://coincheckup.com/coins/level-up-coin) | LUC | Not Implemented | :x: Not done
[first-bitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/first-bitcoin.js) | [First Bitcoin](https://coincheckup.com/coins/first-bitcoin) | BIT | Not Implemented | :x: Not done
[era](https://github.com/coincheckup/crypto-supplies/blob/master/coins/era.js) | [ERA](https://coincheckup.com/coins/era) | ERA | Not Implemented | :x: Not done
[powercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/powercoin.js) | [Powercoin](https://coincheckup.com/coins/powercoin) | PWR | Not Implemented | :x: Not done
[msd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/msd.js) | [MSD](https://coincheckup.com/coins/msd) | MSD | Not Implemented | :x: Not done
[acchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/acchain.js) | [ACChain](https://coincheckup.com/coins/acchain) | ACC | Not Implemented | :x: Not done
[animation-vision-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/animation-vision-cash.js) | [Animation Vision Cash](https://coincheckup.com/coins/animation-vision-cash) | AVH | Dynamic | :white_check_mark: Done
[encryptotel-eth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/encryptotel-eth.js) | [EncryptoTel [ETH]](https://coincheckup.com/coins/encryptotel-eth) | ETT | Dynamic | :white_check_mark: Done
[content-neutrality-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/content-neutrality-network.js) | [Content Neutrality Network](https://coincheckup.com/coins/content-neutrality-network) | CNN | Dynamic | :white_check_mark: Done
[qube](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qube.js) | [Qube](https://coincheckup.com/coins/qube) | QUBE | Not Implemented | :x: Not done
[paymon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paymon.js) | [Paymon](https://coincheckup.com/coins/paymon) | PMNT | Dynamic | :white_check_mark: Done
[mytoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mytoken.js) | [MyToken](https://coincheckup.com/coins/mytoken) | MT | Dynamic | :white_check_mark: Done
[president-trump](https://github.com/coincheckup/crypto-supplies/blob/master/coins/president-trump.js) | [President Trump](https://coincheckup.com/coins/president-trump) | PRES | Not Implemented | :x: Not done
[arbitracoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/arbitracoin.js) | [Arbitracoin](https://coincheckup.com/coins/arbitracoin) | ATC | Not Implemented | :x: Not done
[trustnote](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trustnote.js) | [TrustNote](https://coincheckup.com/coins/trustnote) | TTT | Not Implemented | :x: Not done
[cyder](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cyder.js) | [Cyder](https://coincheckup.com/coins/cyder) | CYDER | Not Implemented | :x: Not done
[sisa](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sisa.js) | [SISA](https://coincheckup.com/coins/sisa) | SISA | Dynamic | :white_check_mark: Done
[plex-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/plex-coin.js) | [PlexCoin](https://coincheckup.com/coins/plex-coin) | PLX | Not Implemented | :x: Not done
[supernet-unity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/supernet-unity.js) | [SuperNET](https://coincheckup.com/coins/supernet-unity) | UNITY | Not Implemented | :x: Not done
[realchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/realchain.js) | [RealChain](https://coincheckup.com/coins/realchain) | RCT | Dynamic | :white_check_mark: Done
[bitcoinx-futures](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcoinx-futures.js) | [BitcoinX](https://coincheckup.com/coins/bitcoinx-futures) | BCX | Not Implemented | :x: Not done
[belacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/belacoin.js) | [Bela](https://coincheckup.com/coins/belacoin) | BELA | Dynamic | :white_check_mark: Done
[betacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/betacoin.js) | [BetaCoin](https://coincheckup.com/coins/betacoin) | BET | Not Implemented | :x: Not done
[wi-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wi-coin.js) | [Wi Coin](https://coincheckup.com/coins/wi-coin) | WIC | Dynamic | :white_check_mark: Done
[rhenium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rhenium.js) | [Rhenium](https://coincheckup.com/coins/rhenium) | XRH | Not Implemented | :x: Not done
[digix-gold-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digix-gold-token.js) | [Digix Gold Token](https://coincheckup.com/coins/digix-gold-token) | DGX | Dynamic | :white_check_mark: Done
[avoncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/avoncoin.js) | [Avoncoin](https://coincheckup.com/coins/avoncoin) | ACN | Not Implemented | :x: Not done
[ea-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ea-coin.js) | [EA Coin](https://coincheckup.com/coins/ea-coin) | EAG | Not Implemented | :x: Not done
[aseancoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aseancoin.js) | [Aseancoin](https://coincheckup.com/coins/aseancoin) | ASN | Not Implemented | :x: Not done
[sparks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sparks.js) | [Sparks](https://coincheckup.com/coins/sparks) | SPK | Not Implemented | :x: Not done
[aces](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aces.js) | [Aces](https://coincheckup.com/coins/aces) | ACES | Not Implemented | :x: Not done
[prismchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prismchain.js) | [PrismChain](https://coincheckup.com/coins/prismchain) | PRM | Not Implemented | :x: Not done
[edrcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/edrcoin.js) | [EDRCoin](https://coincheckup.com/coins/edrcoin) | EDRC | Not Implemented | :x: Not done
[clubcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clubcoin.js) | [ClubCoin](https://coincheckup.com/coins/clubcoin) | CLUB | Dynamic | :white_check_mark: Done
[ejoy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ejoy.js) | [EJOY](https://coincheckup.com/coins/ejoy) | EJOY | Dynamic | :white_check_mark: Done
[ugain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ugain.js) | [UGAIN](https://coincheckup.com/coins/ugain) | GAIN | Not Implemented | :x: Not done
[goldmaxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldmaxcoin.js) | [GoldMaxCoin](https://coincheckup.com/coins/goldmaxcoin) | GMX | Not Implemented | :x: Not done
[grandcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/grandcoin.js) | [GrandCoin](https://coincheckup.com/coins/grandcoin) | GDC | Not Implemented | :x: Not done
[neo-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/neo-gold.js) | [NEO GOLD](https://coincheckup.com/coins/neo-gold) | NEOG | Dynamic | :white_check_mark: Done
[dutch-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dutch-coin.js) | [Dutch Coin](https://coincheckup.com/coins/dutch-coin) | DUTCH | Not Implemented | :x: Not done
[gamechain-system](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gamechain-system.js) | [GameChain System](https://coincheckup.com/coins/gamechain-system) | GCS | Not Implemented | :x: Not done
[wink](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wink.js) | [Wink](https://coincheckup.com/coins/wink) | WINK | Not Implemented | :x: Not done
[candy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/candy.js) | [Candy](https://coincheckup.com/coins/candy) | CANDY | Not Implemented | :x: Not done
[bitok](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitok.js) | [Bitok](https://coincheckup.com/coins/bitok) | BITOK | Not Implemented | :x: Not done
[turbocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/turbocoin.js) | [TurboCoin](https://coincheckup.com/coins/turbocoin) | TURBO | Not Implemented | :x: Not done
[united-traders-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/united-traders-token.js) | [United Traders Token](https://coincheckup.com/coins/united-traders-token) | UTT | Not Implemented | :x: Not done
[donationcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/donationcoin.js) | [Donationcoin](https://coincheckup.com/coins/donationcoin) | DON | Not Implemented | :x: Not done
[halloween-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/halloween-coin.js) | [Halloween Coin](https://coincheckup.com/coins/halloween-coin) | HALLO | Not Implemented | :x: Not done
[dynamiccoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dynamiccoin.js) | [DynamicCoin](https://coincheckup.com/coins/dynamiccoin) | DMC | Not Implemented | :x: Not done
[xtd-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xtd-coin.js) | [XTD Coin](https://coincheckup.com/coins/xtd-coin) | XTD | Not Implemented | :x: Not done
[tattoocoin-(limited-edition)](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tattoocoin-(limited-edition).js) | [Tattoocoin (Limited Edition)](https://coincheckup.com/coins/tattoocoin-(limited-edition)) | TLE | Not Implemented | :x: Not done
[cheapcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cheapcoin.js) | [Cheapcoin](https://coincheckup.com/coins/cheapcoin) | CHEAP | Not Implemented | :x: Not done
[utrum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/utrum.js) | [Utrum](https://coincheckup.com/coins/utrum) | OOT | Not Implemented | :x: Not done
[avatarcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/avatarcoin.js) | [AvatarCoin](https://coincheckup.com/coins/avatarcoin) | AV | Not Implemented | :x: Not done
[proud-money](https://github.com/coincheckup/crypto-supplies/blob/master/coins/proud-money.js) | [PROUD Money](https://coincheckup.com/coins/proud-money) | PROUD | Not Implemented | :x: Not done
[pabyosi-coin-(special)](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pabyosi-coin-(special).js) | [Pabyosi Coin (Special)](https://coincheckup.com/coins/pabyosi-coin-(special)) | PCS | Not Implemented | :x: Not done
[landcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/landcoin.js) | [LandCoin](https://coincheckup.com/coins/landcoin) | LDCN | Not Implemented | :x: Not done
[blazercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blazercoin.js) | [BlazerCoin](https://coincheckup.com/coins/blazercoin) | BLAZR | Not Implemented | :x: Not done
[hodl-bucks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hodl-bucks.js) | [HODL Bucks](https://coincheckup.com/coins/hodl-bucks) | HDLB | Dynamic | :white_check_mark: Done
[shellcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shellcoin.js) | [ShellCoin](https://coincheckup.com/coins/shellcoin) | SHELL | Not Implemented | :x: Not done
[hyper](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hyper.js) | [Hyper](https://coincheckup.com/coins/hyper) | HYPER | Not Implemented | :x: Not done
[bubble](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bubble.js) | [Bubble](https://coincheckup.com/coins/bubble) | BUB | Not Implemented | :x: Not done
[cryptcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptcoin.js) | [CryptCoin](https://coincheckup.com/coins/cryptcoin) | CRYPT | Dynamic | :white_check_mark: Done
[show](https://github.com/coincheckup/crypto-supplies/blob/master/coins/show.js) | [Show](https://coincheckup.com/coins/show) | SHOW | Not Implemented | :x: Not done
[ivy](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ivy.js) | [Ivy](https://coincheckup.com/coins/ivy) | IVY | Dynamic | :white_check_mark: Done
[starcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/starcoin.js) | [StarCoin](https://coincheckup.com/coins/starcoin) | KST | Not Implemented | :x: Not done
[terranova](https://github.com/coincheckup/crypto-supplies/blob/master/coins/terranova.js) | [TerraNova](https://coincheckup.com/coins/terranova) | TER | Not Implemented | :x: Not done
[atmcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/atmcoin.js) | [ATMCoin](https://coincheckup.com/coins/atmcoin) | ATMC | Not Implemented | :x: Not done
[cloud](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cloud.js) | [Cloud](https://coincheckup.com/coins/cloud) | CLD | Dynamic | :white_check_mark: Done
[ethereum-lite](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ethereum-lite.js) | [Ethereum Lite](https://coincheckup.com/coins/ethereum-lite) | ELITE | Dynamic | :white_check_mark: Done
[dignity](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dignity.js) | [Dignity](https://coincheckup.com/coins/dignity) | DIG | Dynamic | :white_check_mark: Done
[key](https://github.com/coincheckup/crypto-supplies/blob/master/coins/key.js) | [KEY](https://coincheckup.com/coins/key) | KEY | Dynamic | :white_check_mark: Done
[seele](https://github.com/coincheckup/crypto-supplies/blob/master/coins/seele.js) | [Seele](https://coincheckup.com/coins/seele) | SEELE | Dynamic | :white_check_mark: Done
[read](https://github.com/coincheckup/crypto-supplies/blob/master/coins/read.js) | [Read](https://coincheckup.com/coins/read) | READ | Dynamic | :white_check_mark: Done
[monero-classic](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero-classic.js) | [Monero Classic](https://coincheckup.com/coins/monero-classic) | XMC | Not Implemented | :x: Not done
[ck-usd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ck-usd.js) | [CK USD](https://coincheckup.com/coins/ck-usd) | CKUSD | Not Implemented | :x: Not done
[loopring-neo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/loopring-neo.js) | [Loopring [NEO]](https://coincheckup.com/coins/loopring-neo) | LRN | Not Implemented | :x: Not done
[content-and-ad-network](https://github.com/coincheckup/crypto-supplies/blob/master/coins/content-and-ad-network.js) | [Content and AD Network](https://coincheckup.com/coins/content-and-ad-network) | CAN | Not Implemented | :x: Not done
[unlimitedip](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unlimitedip.js) | [UnlimitedIP](https://coincheckup.com/coins/unlimitedip) | UIP | Dynamic | :white_check_mark: Done
[namocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/namocoin.js) | [NamoCoin](https://coincheckup.com/coins/namocoin) | NAMO | Not Implemented | :x: Not done
[mirq](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mirq.js) | [MIRQ](https://coincheckup.com/coins/mirq) | MRQ | Not Implemented | :x: Not done
[bitbase](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitbase.js) | [Bitbase](https://coincheckup.com/coins/bitbase) | BTBc | Not Implemented | :x: Not done
[repo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/repo.js) | [REPO](https://coincheckup.com/coins/repo) | REPO | Not Implemented | :x: Not done
[sharkcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sharkcoin.js) | [Sharkcoin](https://coincheckup.com/coins/sharkcoin) | SAK | Not Implemented | :x: Not done
[cryptopiafeeshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptopiafeeshares.js) | [CryptopiaFeeShares](https://coincheckup.com/coins/cryptopiafeeshares) | CEFS | Not Implemented | :x: Not done
[runners](https://github.com/coincheckup/crypto-supplies/blob/master/coins/runners.js) | [Runners](https://coincheckup.com/coins/runners) | RUNNERS | Not Implemented | :x: Not done
[sigmacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sigmacoin.js) | [SIGMAcoin](https://coincheckup.com/coins/sigmacoin) | SIGMA | Not Implemented | :x: Not done
[klondikecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/klondikecoin.js) | [KlondikeCoin](https://coincheckup.com/coins/klondikecoin) | KDC | Not Implemented | :x: Not done
[eggcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eggcoin.js) | [EggCoin](https://coincheckup.com/coins/eggcoin) | EGG | Not Implemented | :x: Not done
[internet-of-things](https://github.com/coincheckup/crypto-supplies/blob/master/coins/internet-of-things.js) | [Internet of Things](https://coincheckup.com/coins/internet-of-things) | XOT | Not Implemented | :x: Not done
[bitserial](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitserial.js) | [BitSerial](https://coincheckup.com/coins/bitserial) | BTE | Dynamic | :white_check_mark: Done
[bitsoar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitsoar.js) | [BitSoar](https://coincheckup.com/coins/bitsoar) | BSR | Not Implemented | :x: Not done
[infinitecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/infinitecoin.js) | [Infinitecoin](https://coincheckup.com/coins/infinitecoin) | IFC | Dynamic | :white_check_mark: Done
[golos-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/golos-gold.js) | [Golos Gold](https://coincheckup.com/coins/golos-gold) | GBG | Not Implemented | :x: Not done
[wa-space](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wa-space.js) | [WA Space](https://coincheckup.com/coins/wa-space) | WA | Not Implemented | :x: Not done
[birds](https://github.com/coincheckup/crypto-supplies/blob/master/coins/birds.js) | [Birds](https://coincheckup.com/coins/birds) | BIRDS | Not Implemented | :x: Not done
[coinmeet](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coinmeet.js) | [CoinMeet](https://coincheckup.com/coins/coinmeet) | MEET | Dynamic | :white_check_mark: Done
[marxcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/marxcoin.js) | [MarxCoin](https://coincheckup.com/coins/marxcoin) | MARX | Not Implemented | :x: Not done
[abncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/abncoin.js) | N/A | N/A | N/A | :x: Not done
[agrolifecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/agrolifecoin.js) | [AgrolifeCoin](https://coincheckup.com/coins/agrolifecoin) | AGLC | Not Implemented | :x: Not done
[alpacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/alpacoin.js) | N/A | N/A | N/A | :x: Not done
[altcommunity-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/altcommunity-coin.js) | [SONO](https://coincheckup.com/coins/altcommunity-coin) | SONO | Not Implemented | :x: Not done
[ambercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ambercoin.js) | [AmberCoin](https://coincheckup.com/coins/ambercoin) | AMBER | Not Implemented | :x: Not done
[anryze](https://github.com/coincheckup/crypto-supplies/blob/master/coins/anryze.js) | [ANRYZE](https://coincheckup.com/coins/anryze) | RYZ | Not Implemented | :x: Not done
[antibitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/antibitcoin.js) | N/A | N/A | N/A | :x: Not done
[antilitecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/antilitecoin.js) | N/A | N/A | N/A | :x: Not done
[aware](https://github.com/coincheckup/crypto-supplies/blob/master/coins/aware.js) | [AWARE](https://coincheckup.com/coins/aware) | AWR | Not Implemented | :x: Not done
[basic-attention-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/basic-attention-token.js) | [Basic Attention Token](https://coincheckup.com/coins/basic-attention-token) | BAT | Dynamic | :white_check_mark: Done
[bestchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bestchain.js) | [BestChain](https://coincheckup.com/coins/bestchain) | BEST | Not Implemented | :x: Not done
[billarycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/billarycoin.js) | N/A | N/A | N/A | :x: Not done
[bios-crypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bios-crypto.js) | [BiosCrypto](https://coincheckup.com/coins/bios-crypto) | BIOS | Not Implemented | :x: Not done
[bitalphacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitalphacoin.js) | N/A | N/A | N/A | :x: Not done
[bitboost](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitboost.js) | N/A | N/A | N/A | :x: Not done
[bitcedi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitcedi.js) | N/A | N/A | N/A | :x: Not done
[bitconnect](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitconnect.js) | [BitConnect](https://coincheckup.com/coins/bitconnect) | BCC | Not Implemented | :x: Not done
[bitfid](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitfid.js) | N/A | N/A | N/A | :x: Not done
[bitpark-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitpark-coin.js) | [Bitpark Coin](https://coincheckup.com/coins/bitpark-coin) | BPC | Dynamic | :white_check_mark: Done
[bittokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bittokens.js) | [BitTokens](https://coincheckup.com/coins/bittokens) | BXT | Not Implemented | :x: Not done
[bitz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/bitz.js) | [Bitz](https://coincheckup.com/coins/bitz) | BITZ | Not Implemented | :x: Not done
[blackstar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blackstar.js) | N/A | N/A | N/A | :x: Not done
[blitzcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blitzcash.js) | [Blitzcash](https://coincheckup.com/coins/blitzcash) | BLITZ | Dynamic | :white_check_mark: Done
[blockpay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/blockpay.js) | [BlockPay](https://coincheckup.com/coins/blockpay) | BLOCKPAY | Not Implemented | :x: Not done
[braincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/braincoin.js) | N/A | N/A | N/A | :x: Not done
[caliphcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/caliphcoin.js) | [CaliphCoin](https://coincheckup.com/coins/caliphcoin) | CALC | Not Implemented | :x: Not done
[cashme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cashme.js) | N/A | N/A | N/A | :x: Not done
[ccminer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ccminer.js) | N/A | N/A | N/A | :x: Not done
[centra](https://github.com/coincheckup/crypto-supplies/blob/master/coins/centra.js) | [Centra](https://coincheckup.com/coins/centra) | CTR | Dynamic | :white_check_mark: Done
[chronos](https://github.com/coincheckup/crypto-supplies/blob/master/coins/chronos.js) | [Chronos](https://coincheckup.com/coins/chronos) | CRX | Not Implemented | :x: Not done
[clearcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/clearcoin.js) | [ClearCoin](https://coincheckup.com/coins/clearcoin) | CLR | Dynamic | :white_check_mark: Done
[coexistcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/coexistcoin.js) | N/A | N/A | N/A | :x: Not done
[colossuscoin-v2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/colossuscoin-v2.js) | N/A | N/A | N/A | :x: Not done
[compcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/compcoin.js) | N/A | N/A | N/A | :x: Not done
[confido](https://github.com/coincheckup/crypto-supplies/blob/master/coins/confido.js) | N/A | N/A | N/A | :x: Not done
[copico](https://github.com/coincheckup/crypto-supplies/blob/master/coins/copico.js) | [Copico](https://coincheckup.com/coins/copico) | XCPO | Not Implemented | :x: Not done
[crtcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/crtcoin.js) | N/A | N/A | N/A | :x: Not done
[cryptoescudo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoescudo.js) | N/A | N/A | N/A | :x: Not done
[cryptoforecast](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoforecast.js) | N/A | N/A | N/A | :x: Not done
[cryptoworldx-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cryptoworldx-token.js) | [CryptoWorldX Token](https://coincheckup.com/coins/cryptoworldx-token) | CWXT | Not Implemented | :x: Not done
[cthulhu-offerings](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cthulhu-offerings.js) | [Cthulhu Offerings](https://coincheckup.com/coins/cthulhu-offerings) | OFF | Not Implemented | :x: Not done
[cybercoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cybercoin.js) | N/A | N/A | N/A | :x: Not done
[cycling-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cycling-coin.js) | [Cycling Coin](https://coincheckup.com/coins/cycling-coin) | CYC | Not Implemented | :x: Not done
[cypher](https://github.com/coincheckup/crypto-supplies/blob/master/coins/cypher.js) | N/A | N/A | N/A | :x: Not done
[dappster](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dappster.js) | [DAPPSTER](https://coincheckup.com/coins/dappster) | DLISK | Not Implemented | :x: Not done
[darklisk](https://github.com/coincheckup/crypto-supplies/blob/master/coins/darklisk.js) | [DarkLisk](https://coincheckup.com/coins/darklisk) | DISK | Not Implemented | :x: Not done
[dashs](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dashs.js) | [Dashs](https://coincheckup.com/coins/dashs) | DASHS | Not Implemented | :x: Not done
[davorcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/davorcoin.js) | [DavorCoin](https://coincheckup.com/coins/davorcoin) | DAV | Not Implemented | :x: Not done
[dcorp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dcorp.js) | [DCORP](https://coincheckup.com/coins/dcorp) | DRP | Dynamic | :white_check_mark: Done
[deltacredits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/deltacredits.js) | [DeltaCredits](https://coincheckup.com/coins/deltacredits) | DCRE | Not Implemented | :x: Not done
[destiny](https://github.com/coincheckup/crypto-supplies/blob/master/coins/destiny.js) | [Destiny](https://coincheckup.com/coins/destiny) | DES | Not Implemented | :x: Not done
[dfscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dfscoin.js) | N/A | N/A | N/A | :x: Not done
[dibcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dibcoin.js) | N/A | N/A | N/A | :x: Not done
[digital-bullion-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-bullion-gold.js) | N/A | N/A | N/A | :x: Not done
[digital-credits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/digital-credits.js) | N/A | N/A | N/A | :x: Not done
[dnotes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dnotes.js) | N/A | N/A | N/A | :white_check_mark: Done
[dubstep](https://github.com/coincheckup/crypto-supplies/blob/master/coins/dubstep.js) | N/A | N/A | N/A | :x: Not done
[e-dinar-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/e-dinar-coin.js) | [E-Dinar Coin](https://coincheckup.com/coins/e-dinar-coin) | EDR | Not Implemented | :x: Not done
[earthcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/earthcoin.js) | N/A | N/A | N/A | :white_check_mark: Done
[ebittree-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ebittree-coin.js) | [Ebittree Coin](https://coincheckup.com/coins/ebittree-coin) | EBT | Not Implemented | :x: Not done
[ego](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ego.js) | N/A | N/A | N/A | :x: Not done
[egold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/egold.js) | N/A | N/A | N/A | :x: Not done
[elacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/elacoin.js) | N/A | N/A | N/A | :x: Not done
[eot-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/eot-token.js) | N/A | N/A | N/A | :x: Not done
[ereal](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ereal.js) | [eREAL](https://coincheckup.com/coins/ereal) | EREAL | Dynamic | :white_check_mark: Done
[evotion](https://github.com/coincheckup/crypto-supplies/blob/master/coins/evotion.js) | N/A | N/A | N/A | :x: Not done
[farstcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/farstcoin.js) | [Farstcoin](https://coincheckup.com/coins/farstcoin) | FRCT | Not Implemented | :x: Not done
[fazzcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fazzcoin.js) | [Fazzcoin](https://coincheckup.com/coins/fazzcoin) | FAZZ | Not Implemented | :x: Not done
[fimkrypto](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fimkrypto.js) | N/A | N/A | N/A | :x: Not done
[fincoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fincoin.js) | [FinCoin](https://coincheckup.com/coins/fincoin) | FNC | Not Implemented | :x: Not done
[firecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/firecoin.js) | [Firecoin](https://coincheckup.com/coins/firecoin) | FIRE | Not Implemented | :x: Not done
[flappycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flappycoin.js) | N/A | N/A | N/A | :x: Not done
[flycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/flycoin.js) | [Flycoin](https://coincheckup.com/coins/flycoin) | FLY | Not Implemented | :x: Not done
[fonziecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fonziecoin.js) | N/A | N/A | N/A | :x: Not done
[footy-cash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/footy-cash.js) | N/A | N/A | N/A | :x: Not done
[franko](https://github.com/coincheckup/crypto-supplies/blob/master/coins/franko.js) | N/A | N/A | N/A | :x: Not done
[frankywillcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/frankywillcoin.js) | N/A | N/A | N/A | :x: Not done
[fucktoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fucktoken.js) | N/A | N/A | N/A | :x: Not done
[fuelcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/fuelcoin.js) | N/A | N/A | N/A | :white_check_mark: Done
[futcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/futcoin.js) | N/A | N/A | N/A | :x: Not done
[gaia](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gaia.js) | N/A | N/A | N/A | :x: Not done
[gameleaguecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gameleaguecoin.js) | N/A | N/A | N/A | :x: Not done
[gameunits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gameunits.js) | [GameUnits](https://coincheckup.com/coins/gameunits) | UNITS | Not Implemented | :x: Not done
[ganjacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ganjacoin.js) | N/A | N/A | N/A | :x: Not done
[gaycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gaycoin.js) | N/A | N/A | N/A | :x: Not done
[gbcgoldcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gbcgoldcoin.js) | [GBCGoldCoin](https://coincheckup.com/coins/gbcgoldcoin) | GBC | Not Implemented | :x: Not done
[genstake](https://github.com/coincheckup/crypto-supplies/blob/master/coins/genstake.js) | N/A | N/A | N/A | :x: Not done
[giga-watt-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/giga-watt-token.js) | N/A | N/A | N/A | :x: Not done
[global-currency-reserve](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-currency-reserve.js) | [Global Currency Reserve](https://coincheckup.com/coins/global-currency-reserve) | GCR | Not Implemented | :x: Not done
[global-jobcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/global-jobcoin.js) | [Global Jobcoin](https://coincheckup.com/coins/global-jobcoin) | GJC | Dynamic | :white_check_mark: Done
[goldreserve](https://github.com/coincheckup/crypto-supplies/blob/master/coins/goldreserve.js) | N/A | N/A | N/A | :x: Not done
[gpu-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/gpu-coin.js) | N/A | N/A | N/A | :x: Not done
[greencoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/greencoin.js) | N/A | N/A | N/A | :white_check_mark: Done
[hade-platform](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hade-platform.js) | [Hade Platform](https://coincheckup.com/coins/hade-platform) | HADE | Not Implemented | :x: Not done
[happy-creator-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/happy-creator-coin.js) | N/A | N/A | N/A | :x: Not done
[hawala-today](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hawala-today.js) | N/A | N/A | N/A | :x: Not done
[hempcoin-hmp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hempcoin-hmp.js) | [HempCoin](https://coincheckup.com/coins/hempcoin-hmp) | HMP | Not Implemented | :x: Not done
[hitcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/hitcoin.js) | N/A | N/A | N/A | :x: Not done
[idice](https://github.com/coincheckup/crypto-supplies/blob/master/coins/idice.js) | N/A | N/A | N/A | :x: Not done
[impulsecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/impulsecoin.js) | [ImpulseCoin](https://coincheckup.com/coins/impulsecoin) | IMPS | Not Implemented | :x: Not done
[india-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/india-coin.js) | [India Coin](https://coincheckup.com/coins/india-coin) | INDIA | Not Implemented | :x: Not done
[infchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/infchain.js) | N/A | N/A | N/A | :x: Not done
[intelligent-trading-tech](https://github.com/coincheckup/crypto-supplies/blob/master/coins/intelligent-trading-tech.js) | N/A | N/A | N/A | :x: Not done
[international-diamond](https://github.com/coincheckup/crypto-supplies/blob/master/coins/international-diamond.js) | N/A | N/A | N/A | :x: Not done
[interplanetary-broadcast-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/interplanetary-broadcast-coin.js) | [Interplanetary Broadcast Coin](https://coincheckup.com/coins/interplanetary-broadcast-coin) | IPBC | Not Implemented | :x: Not done
[invisiblecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/invisiblecoin.js) | N/A | N/A | N/A | :x: Not done
[jewels](https://github.com/coincheckup/crypto-supplies/blob/master/coins/jewels.js) | [Jewels](https://coincheckup.com/coins/jewels) | JWL | Not Implemented | :x: Not done
[karmacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/karmacoin.js) | [Karmacoin](https://coincheckup.com/coins/karmacoin) | KARMA | Not Implemented | :x: Not done
[kashhcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kashhcoin.js) | [KashhCoin](https://coincheckup.com/coins/kashhcoin) | KASHH | Not Implemented | :x: Not done
[kayicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kayicoin.js) | N/A | N/A | N/A | :x: Not done
[kzcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/kzcash.js) | N/A | N/A | N/A | :x: Not done
[lathaan](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lathaan.js) | N/A | N/A | N/A | :x: Not done
[lazaruscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lazaruscoin.js) | N/A | N/A | N/A | :x: Not done
[leafcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leafcoin.js) | N/A | N/A | N/A | :x: Not done
[legends-room](https://github.com/coincheckup/crypto-supplies/blob/master/coins/legends-room.js) | [Legends Room](https://coincheckup.com/coins/legends-room) | LGD | Not Implemented | :x: Not done
[lendconnect](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lendconnect.js) | N/A | N/A | N/A | :x: Not done
[lepen](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lepen.js) | [LePen](https://coincheckup.com/coins/lepen) | LEPEN | Not Implemented | :x: Not done
[leviar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/leviar.js) | [Leviar](https://coincheckup.com/coins/leviar) | XLC | Not Implemented | :x: Not done
[link-platform](https://github.com/coincheckup/crypto-supplies/blob/master/coins/link-platform.js) | N/A | N/A | N/A | :x: Not done
[linkedcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/linkedcoin.js) | [LinkedCoin](https://coincheckup.com/coins/linkedcoin) | LKC | Not Implemented | :x: Not done
[lltoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/lltoken.js) | N/A | N/A | N/A | :x: Not done
[luckchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/luckchain.js) | [LuckChain](https://coincheckup.com/coins/luckchain) | BASH | Dynamic | :white_check_mark: Done
[macro1](https://github.com/coincheckup/crypto-supplies/blob/master/coins/macro1.js) | [Macro](https://coincheckup.com/coins/macro1) | MCR | Not Implemented | :x: Not done
[madcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/madcoin.js) | [Madcoin](https://coincheckup.com/coins/madcoin) | MDC | Not Implemented | :x: Not done
[mergecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mergecoin.js) | N/A | N/A | N/A | :x: Not done
[metal-music-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/metal-music-coin.js) | [Metal Music Coin](https://coincheckup.com/coins/metal-music-coin) | MTLMC3 | Not Implemented | :x: Not done
[mindcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mindcoin.js) | [MindCoin](https://coincheckup.com/coins/mindcoin) | MND | Dynamic | :white_check_mark: Done
[mmxvi](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mmxvi.js) | N/A | N/A | N/A | :x: Not done
[mobilecash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/mobilecash.js) | N/A | N/A | N/A | :x: Not done
[monero-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/monero-gold.js) | N/A | N/A | N/A | :x: Not done
[moneta2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/moneta2.js) | N/A | N/A | N/A | :x: Not done
[natcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/natcoin.js) | N/A | N/A | N/A | :x: Not done
[netbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/netbit.js) | N/A | N/A | N/A | :x: Not done
[newbium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/newbium.js) | [Newbium](https://coincheckup.com/coins/newbium) | NEWB | Dynamic | :white_check_mark: Done
[nexxus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nexxus.js) | N/A | N/A | N/A | :x: Not done
[nodecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nodecoin.js) | [NodeCoin](https://coincheckup.com/coins/nodecoin) | NODC | Not Implemented | :x: Not done
[nvo](https://github.com/coincheckup/crypto-supplies/blob/master/coins/nvo.js) | N/A | N/A | N/A | :x: Not done
[ocow](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ocow.js) | N/A | N/A | N/A | :x: Not done
[operand](https://github.com/coincheckup/crypto-supplies/blob/master/coins/operand.js) | [Operand](https://coincheckup.com/coins/operand) | OP | Not Implemented | :x: Not done
[opescoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/opescoin.js) | [Opescoin](https://coincheckup.com/coins/opescoin) | OPES | Not Implemented | :x: Not done
[orlycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/orlycoin.js) | N/A | N/A | N/A | :x: Not done
[osmiumcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/osmiumcoin.js) | N/A | N/A | N/A | :x: Not done
[ox-fina](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ox-fina.js) | [OX Fina](https://coincheckup.com/coins/ox-fina) | OX | Dynamic | :white_check_mark: Done
[p7coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/p7coin.js) | N/A | N/A | N/A | :x: Not done
[paypeer](https://github.com/coincheckup/crypto-supplies/blob/master/coins/paypeer.js) | N/A | N/A | N/A | :x: Not done
[pinkdog](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pinkdog.js) | N/A | N/A | N/A | :x: Not done
[pirate-blocks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pirate-blocks.js) | [Pirate Blocks](https://coincheckup.com/coins/pirate-blocks) | SKULL | Not Implemented | :x: Not done
[pizzacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pizzacoin.js) | N/A | N/A | N/A | :x: Not done
[pluscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pluscoin.js) | [PlusCoin](https://coincheckup.com/coins/pluscoin) | PLC | Dynamic | :white_check_mark: Done
[pokecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pokecoin.js) | [PokeCoin](https://coincheckup.com/coins/pokecoin) | POKE | Not Implemented | :x: Not done
[primulon](https://github.com/coincheckup/crypto-supplies/blob/master/coins/primulon.js) | [Primulon](https://coincheckup.com/coins/primulon) | PRIMU | Not Implemented | :x: Not done
[printerium](https://github.com/coincheckup/crypto-supplies/blob/master/coins/printerium.js) | [Printerium](https://coincheckup.com/coins/printerium) | PRX | Not Implemented | :x: Not done
[project-decorum](https://github.com/coincheckup/crypto-supplies/blob/master/coins/project-decorum.js) | N/A | N/A | N/A | :x: Not done
[prospectors-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/prospectors-gold.js) | N/A | N/A | N/A | :x: Not done
[psilocybin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/psilocybin.js) | N/A | N/A | N/A | :x: Not done
[pulse](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pulse.js) | N/A | N/A | N/A | :x: Not done
[pundi-x-old](https://github.com/coincheckup/crypto-supplies/blob/master/coins/pundi-x-old.js) | N/A | N/A | N/A | :x: Not done
[px](https://github.com/coincheckup/crypto-supplies/blob/master/coins/px.js) | [PX](https://coincheckup.com/coins/px) | PX | Not Implemented | :x: Not done
[qora](https://github.com/coincheckup/crypto-supplies/blob/master/coins/qora.js) | [Qora](https://coincheckup.com/coins/qora) | QORA | Not Implemented | :x: Not done
[real-estate-tokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/real-estate-tokens.js) | N/A | N/A | N/A | :x: Not done
[reecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/reecoin.js) | [ReeCoin](https://coincheckup.com/coins/reecoin) | REE | Not Implemented | :x: Not done
[remicoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/remicoin.js) | N/A | N/A | N/A | :x: Not done
[rhfcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rhfcoin.js) | N/A | N/A | N/A | :x: Not done
[ride-my-car](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ride-my-car.js) | N/A | N/A | N/A | :x: Not done
[ripto-bux](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ripto-bux.js) | N/A | N/A | N/A | :x: Not done
[royal-kingdom-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/royal-kingdom-coin.js) | [Royal Kingdom Coin](https://coincheckup.com/coins/royal-kingdom-coin) | RKC | Dynamic | :white_check_mark: Done
[royalcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/royalcoin.js) | [RoyalCoin](https://coincheckup.com/coins/royalcoin) | ROYAL | Not Implemented | :x: Not done
[rsgpcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rsgpcoin.js) | [RSGPcoin](https://coincheckup.com/coins/rsgpcoin) | RSGP | Not Implemented | :x: Not done
[rublebit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rublebit.js) | N/A | N/A | N/A | :x: Not done
[rustbits](https://github.com/coincheckup/crypto-supplies/blob/master/coins/rustbits.js) | N/A | N/A | N/A | :x: Not done
[sacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sacoin.js) | N/A | N/A | N/A | :x: Not done
[safecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/safecoin.js) | N/A | N/A | N/A | :x: Not done
[sand-coin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sand-coin.js) | N/A | N/A | N/A | :x: Not done
[satoshimadness](https://github.com/coincheckup/crypto-supplies/blob/master/coins/satoshimadness.js) | [SatoshiMadness](https://coincheckup.com/coins/satoshimadness) | MAD | Not Implemented | :x: Not done
[scorecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/scorecoin.js) | [Scorecoin](https://coincheckup.com/coins/scorecoin) | SCORE | Not Implemented | :x: Not done
[selfiecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/selfiecoin.js) | [Selfiecoin](https://coincheckup.com/coins/selfiecoin) | SLFI | Not Implemented | :x: Not done
[shadowcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shadowcash.js) | [ShadowCash](https://coincheckup.com/coins/shadowcash) | SDC | Not Implemented | :x: Not done
[shilling](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shilling.js) | [Shilling](https://coincheckup.com/coins/shilling) | SH | Dynamic | :white_check_mark: Done
[shorty](https://github.com/coincheckup/crypto-supplies/blob/master/coins/shorty.js) | [Shorty](https://coincheckup.com/coins/shorty) | SHORTY | Not Implemented | :x: Not done
[slimcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/slimcoin.js) | N/A | N/A | N/A | :x: Not done
[smartcash](https://github.com/coincheckup/crypto-supplies/blob/master/coins/smartcash.js) | [SmartCash](https://coincheckup.com/coins/smartcash) | SMART | Not Implemented | :x: Not done
[snakeeyes](https://github.com/coincheckup/crypto-supplies/blob/master/coins/snakeeyes.js) | N/A | N/A | N/A | :x: Not done
[sojourn](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sojourn.js) | N/A | N/A | N/A | :x: Not done
[spherepay](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spherepay.js) | N/A | N/A | N/A | :x: Not done
[sportscoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sportscoin.js) | [SportsCoin](https://coincheckup.com/coins/sportscoin) | SPORT | Not Implemented | :x: Not done
[spots](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spots.js) | N/A | N/A | N/A | :x: Not done
[spreadcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/spreadcoin.js) | [SpreadCoin](https://coincheckup.com/coins/spreadcoin) | SPR | Dynamic | :white_check_mark: Done
[sproutsextreme](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sproutsextreme.js) | N/A | N/A | N/A | :x: Not done
[stealth](https://github.com/coincheckup/crypto-supplies/blob/master/coins/stealth.js) | [Stealth](https://coincheckup.com/coins/stealth) | XST | Dynamic | :white_check_mark: Done
[steps](https://github.com/coincheckup/crypto-supplies/blob/master/coins/steps.js) | [Steps](https://coincheckup.com/coins/steps) | STEPS | Not Implemented | :x: Not done
[strikebitclub](https://github.com/coincheckup/crypto-supplies/blob/master/coins/strikebitclub.js) | [StrikeBitClub](https://coincheckup.com/coins/strikebitclub) | SBC | Dynamic | :white_check_mark: Done
[swagbucks](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swagbucks.js) | N/A | N/A | N/A | :white_check_mark: Done
[swaptoken](https://github.com/coincheckup/crypto-supplies/blob/master/coins/swaptoken.js) | N/A | N/A | N/A | :x: Not done
[sydpak](https://github.com/coincheckup/crypto-supplies/blob/master/coins/sydpak.js) | N/A | N/A | N/A | :x: Not done
[tagrcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tagrcoin.js) | [TAGRcoin](https://coincheckup.com/coins/tagrcoin) | TAGR | Not Implemented | :x: Not done
[tatatu](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tatatu.js) | [TaTaTu](https://coincheckup.com/coins/tatatu) | TTU | Dynamic | :white_check_mark: Done
[teamup](https://github.com/coincheckup/crypto-supplies/blob/master/coins/teamup.js) | N/A | N/A | N/A | :x: Not done
[techshares](https://github.com/coincheckup/crypto-supplies/blob/master/coins/techshares.js) | [TechShares](https://coincheckup.com/coins/techshares) | THS | Not Implemented | :x: Not done
[the-vegan-initiative](https://github.com/coincheckup/crypto-supplies/blob/master/coins/the-vegan-initiative.js) | N/A | N/A | N/A | :x: Not done
[thecreed](https://github.com/coincheckup/crypto-supplies/blob/master/coins/thecreed.js) | N/A | N/A | N/A | :x: Not done
[timescoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/timescoin.js) | N/A | N/A | N/A | :x: Not done
[titanium-bar](https://github.com/coincheckup/crypto-supplies/blob/master/coins/titanium-bar.js) | [Titanium BAR](https://coincheckup.com/coins/titanium-bar) | TBAR | Dynamic | :white_check_mark: Done
[titanium-blockchain](https://github.com/coincheckup/crypto-supplies/blob/master/coins/titanium-blockchain.js) | [Titanium Blockchain](https://coincheckup.com/coins/titanium-blockchain) | BAR | Dynamic | :white_check_mark: Done
[todaycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/todaycoin.js) | [TodayCoin](https://coincheckup.com/coins/todaycoin) | TODAY | Not Implemented | :x: Not done
[topaz](https://github.com/coincheckup/crypto-supplies/blob/master/coins/topaz.js) | N/A | N/A | N/A | :x: Not done
[torcoin-tor](https://github.com/coincheckup/crypto-supplies/blob/master/coins/torcoin-tor.js) | N/A | N/A | N/A | :x: Not done
[triaconta](https://github.com/coincheckup/crypto-supplies/blob/master/coins/triaconta.js) | [Triaconta](https://coincheckup.com/coins/triaconta) | TRIA | Dynamic | :white_check_mark: Done
[trickycoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trickycoin.js) | N/A | N/A | N/A | :x: Not done
[trueusd](https://github.com/coincheckup/crypto-supplies/blob/master/coins/trueusd.js) | [TrueUSD](https://coincheckup.com/coins/trueusd) | TUSD | Not Implemented | :x: Not done
[tychocoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/tychocoin.js) | N/A | N/A | N/A | :x: Not done
[ug-token](https://github.com/coincheckup/crypto-supplies/blob/master/coins/ug-token.js) | N/A | N/A | N/A | :x: Not done
[uncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uncoin.js) | [UNCoin](https://coincheckup.com/coins/uncoin) | UNC | Not Implemented | :x: Not done
[unity-ingot](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unity-ingot.js) | N/A | N/A | N/A | :x: Not done
[unrealcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/unrealcoin.js) | N/A | N/A | N/A | :x: Not done
[uro](https://github.com/coincheckup/crypto-supplies/blob/master/coins/uro.js) | [Uro](https://coincheckup.com/coins/uro) | URO | Not Implemented | :x: Not done
[valorbit](https://github.com/coincheckup/crypto-supplies/blob/master/coins/valorbit.js) | N/A | N/A | N/A | :x: Not done
[vip-tokens](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vip-tokens.js) | N/A | N/A | N/A | :x: Not done
[virtacoinplus](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virtacoinplus.js) | N/A | N/A | N/A | :white_check_mark: Done
[virtualcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/virtualcoin.js) | N/A | N/A | N/A | :x: Not done
[voyacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/voyacoin.js) | N/A | N/A | N/A | :x: Not done
[vpncoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/vpncoin.js) | N/A | N/A | N/A | :white_check_mark: Done
[warp](https://github.com/coincheckup/crypto-supplies/blob/master/coins/warp.js) | N/A | N/A | N/A | :x: Not done
[wayguide](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wayguide.js) | N/A | N/A | N/A | :x: Not done
[wowcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/wowcoin.js) | N/A | N/A | N/A | :x: Not done
[x2](https://github.com/coincheckup/crypto-supplies/blob/master/coins/x2.js) | [X2](https://coincheckup.com/coins/x2) | X2 | Not Implemented | :x: Not done
[xaucoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xaucoin.js) | N/A | N/A | N/A | :x: Not done
[xios](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xios.js) | [Xios](https://coincheckup.com/coins/xios) | XIOS | Not Implemented | :x: Not done
[xonecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/xonecoin.js) | N/A | N/A | N/A | :x: Not done
[yacoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yacoin.js) | N/A | N/A | N/A | :x: Not done
[yashcoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/yashcoin.js) | N/A | N/A | N/A | :x: Not done
[zcash-gold](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zcash-gold.js) | [Zlancer](https://coincheckup.com/coins/zcash-gold) | ZCG | Dynamic | :white_check_mark: Done
[zonecoin](https://github.com/coincheckup/crypto-supplies/blob/master/coins/zonecoin.js) | N/A | N/A | N/A | :x: Not done