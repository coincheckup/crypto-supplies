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

*Total*: 1732 -- *Implemented*: 180 -- *To do*: 1552

ID | Name | Symbol | Implementation | Status
--- | ---
0x | 0x | ZRX | Not Implemented | `-- Not done`
1337coin | Elite | 1337 | Not Implemented | `-- Not done`
1world | 1World | 1WO | Not Implemented | `-- Not done`
2give | 2GIVE | 2GIVE | Dynamic | *+ Done*
300-token | 300 Token | 300 | Not Implemented | `-- Not done`
42-coin | 42-coin | 42 | Dynamic | *+ Done*
808coin | 808Coin | 808 | Not Implemented | `-- Not done`
8bit | 8Bit | 8BIT | Dynamic | *+ Done*
abjcoin | Abjcoin | ABJ | Not Implemented | `-- Not done`
abncoin | N/A | N/A | N/A | `-- Not done`
ac3 | AC3 | AC3 | Not Implemented | `-- Not done`
accelerator-network | Accelerator Network | ACC | Not Implemented | `-- Not done`
acchain | ACChain | ACC | Not Implemented | `-- Not done`
ace | Ace | ACE | Not Implemented | `-- Not done`
aces | Aces | ACES | Not Implemented | `-- Not done`
achain | Achain | ACT | Not Implemented | `-- Not done`
acoin | Acoin | ACOIN | Not Implemented | `-- Not done`
acute-angle-cloud | Acute Angle Cloud | AAC | Not Implemented | `-- Not done`
adbank | adbank | ADB | Not Implemented | `-- Not done`
adcoin | AdCoin | ACC | Not Implemented | `-- Not done`
adhive | AdHive | ADH | Dynamic | *+ Done*
aditus | Aditus | ADI | Not Implemented | `-- Not done`
adshares | AdShares | ADST | Not Implemented | `-- Not done`
adtoken | adToken | ADT | Not Implemented | `-- Not done`
advanced-internet-blocks | Advanced Internet Blocks | AIB | Not Implemented | `-- Not done`
adx-net | AdEx | ADX | Not Implemented | `-- Not done`
adzcoin | Adzcoin | ADZ | Not Implemented | `-- Not done`
aelf | aelf | ELF | Not Implemented | `-- Not done`
aeon | Aeon | AEON | Not Implemented | `-- Not done`
aerium | Aerium | AERM | Not Implemented | `-- Not done`
aeron | Aeron | ARN | Not Implemented | `-- Not done`
aeternity | Aeternity | AE | Not Implemented | `-- Not done`
agrello-delta | Agrello | DLT | Not Implemented | `-- Not done`
agrolifecoin | AgrolifeCoin | AGLC | Not Implemented | `-- Not done`
aichain | AICHAIN | AIT | Not Implemented | `-- Not done`
aidcoin | AidCoin | AID | Not Implemented | `-- Not done`
aidoc | AI Doctor | AIDOC | Not Implemented | `-- Not done`
aidos-kuneen | Aidos Kuneen | ADK | Not Implemented | `-- Not done`
aigang | Aigang | AIX | Not Implemented | `-- Not done`
aion | Aion | AION | Not Implemented | `-- Not done`
airswap | AirSwap | AST | Not Implemented | `-- Not done`
airtoken | AirToken | AIR | Not Implemented | `-- Not done`
akuya-coin | Akuya Coin | AKY | Not Implemented | `-- Not done`
alis | ALIS | ALIS | Not Implemented | `-- Not done`
all-sports | All Sports | SOC | Not Implemented | `-- Not done`
allion | Allion | ALL | Not Implemented | `-- Not done`
allsafe | AllSafe | ASAFE2 | Not Implemented | `-- Not done`
alpacoin | N/A | N/A | N/A | `-- Not done`
alphabitcoinfund | Alphabit | ABC | Not Implemented | `-- Not done`
alphacat | Alphacat | ACAT | Not Implemented | `-- Not done`
alqo | ALQO | ALQO | Not Implemented | `-- Not done`
altcoin-alt | Altcoin | ALT | Not Implemented | `-- Not done`
altcommunity-coin | SONO | SONO | Not Implemented | `-- Not done`
amber | Ambrosus | AMB | Not Implemented | `-- Not done`
ambercoin | AmberCoin | AMBER | Not Implemented | `-- Not done`
amlt | AMLT Token | AMLT | Not Implemented | `-- Not done`
ammo-reloaded | Ammo Reloaded | AMMO | Not Implemented | `-- Not done`
amon | Amon | AMN | Not Implemented | `-- Not done`
amsterdamcoin | AmsterdamCoin | AMS | Not Implemented | `-- Not done`
anarchistsprime | AnarchistsPrime | ACP | Not Implemented | `-- Not done`
animation-vision-cash | Animation Vision Cash | AVH | Not Implemented | `-- Not done`
animecoin | Animecoin | ANI | Not Implemented | `-- Not done`
anoncoin | Anoncoin | ANC | Dynamic | *+ Done*
anryze | ANRYZE | RYZ | Not Implemented | `-- Not done`
antibitcoin | N/A | N/A | N/A | `-- Not done`
antilitecoin | N/A | N/A | N/A | `-- Not done`
antimatter | Antimatter | ANTX | Not Implemented | `-- Not done`
apex | Apex | CPX | Not Implemented | `-- Not done`
aphelion | Aphelion | APH | Not Implemented | `-- Not done`
appcoins | AppCoins | APPC | Not Implemented | `-- Not done`
apr-coin | APR Coin | APR | Not Implemented | `-- Not done`
apx | APX | APX | Not Implemented | `-- Not done`
aquariuscoin | AquariusCoin | ARCO | Dynamic | *+ Done*
aragon | Aragon | ANT | Not Implemented | `-- Not done`
arbit | ARbit | ARB | Not Implemented | `-- Not done`
arbitracoin | Arbitracoin | ATC | Not Implemented | `-- Not done`
arbitragect | ArbitrageCT | ARCT | Not Implemented | `-- Not done`
arcblock | Arcblock | ABT | Not Implemented | `-- Not done`
arcticcoin | Advanced Technology Coin | ARC | Not Implemented | `-- Not done`
ardor | Ardor | ARDR | Not Implemented | `-- Not done`
argentum | Argentum | ARG | Dynamic | *+ Done*
argus | Argus | ARGUS | Not Implemented | `-- Not done`
aricoin | Aricoin | ARI | Not Implemented | `-- Not done`
ark | Ark | ARK | Not Implemented | `-- Not done`
artbyte | ArtByte | ABY | Not Implemented | `-- Not done`
artex-coin | Artex Coin | ATX | Not Implemented | `-- Not done`
asch | Asch | XAS | Not Implemented | `-- Not done`
aseancoin | Aseancoin | ASN | Not Implemented | `-- Not done`
asiacoin | AsiaCoin | AC | Dynamic | *+ Done*
asiadigicoin | Asiadigicoin | ADCN | Not Implemented | `-- Not done`
aston | Aston | ATX | Not Implemented | `-- Not done`
astro | Astro | ASTRO | Not Implemented | `-- Not done`
atbcoin | ATBCoin | ATB | Not Implemented | `-- Not done`
atlant | ATLANT | ATL | Not Implemented | `-- Not done`
atmcoin | ATMCoin | ATMC | Not Implemented | `-- Not done`
atmos | Atmos | ATMOS | Dynamic | *+ Done*
atn | ATN | ATN | Not Implemented | `-- Not done`
atomic-coin | Atomic Coin | ATOM | Not Implemented | `-- Not done`
attention-token-of-media | ATMChain | ATM | Not Implemented | `-- Not done`
auctus | Auctus | AUC | Not Implemented | `-- Not done`
audiocoin | AudioCoin | ADC | Dynamic | *+ Done*
augur | Augur | REP | Not Implemented | `-- Not done`
aurora-dao | Aurora DAO | AURA | Not Implemented | `-- Not done`
auroracoin | Auroracoin | AUR | Not Implemented | `-- Not done`
aurumcoin | AurumCoin | AU | Not Implemented | `-- Not done`
authorship | Authorship | ATS | Not Implemented | `-- Not done`
autonio | Autonio | NIO | Not Implemented | `-- Not done`
avatarcoin | AvatarCoin | AV | Not Implemented | `-- Not done`
aventus | Aventus | AVT | Not Implemented | `-- Not done`
avoncoin | Avoncoin | ACN | Not Implemented | `-- Not done`
aware | AWARE | AWR | Not Implemented | `-- Not done`
axiom | Axiom | AXIOM | Not Implemented | `-- Not done`
axpire | aXpire | AXP | Not Implemented | `-- Not done`
b2bcoin | B2Bcoin | BBC | Not Implemented | `-- Not done`
b2bx | B2BX | B2B | Not Implemented | `-- Not done`
b3coin | B3Coin | KB3 | Dynamic | *+ Done*
babb | BABB | BAX | Not Implemented | `-- Not done`
banca | Banca | BANCA | Not Implemented | `-- Not done`
bancor | Bancor | BNT | Not Implemented | `-- Not done`
bank-coin | Bank Coin | BANK | Not Implemented | `-- Not done`
bankcoin | Bankcoin | B@ | Not Implemented | `-- Not done`
bankex | Bankex | BKX | Not Implemented | `-- Not done`
banyan-network | Banyan Network | BBN | Not Implemented | `-- Not done`
basic-attention-token | Basic Attention Token | BAT | Not Implemented | `-- Not done`
bastonet | Bastonet | BSN | Not Implemented | `-- Not done`
bata | Bata | BTA | Dynamic | *+ Done*
batcoin | N/A | N/A | N/A | `-- Not done`
bean-cash | Bean Cash | BITB | Not Implemented | `-- Not done`
beatcoin | Beatcoin | XBTS | Not Implemented | `-- Not done`
bee-token | Bee Token | BEE | Not Implemented | `-- Not done`
belacoin | Bela | BELA | Dynamic | *+ Done*
belugapay | BelugaPay | BBI | Not Implemented | `-- Not done`
benjirolls | BenjiRolls | BENJI | Not Implemented | `-- Not done`
berncash | BERNcash | BERN | Not Implemented | `-- Not done`
bestchain | BestChain | BEST | Not Implemented | `-- Not done`
betacoin | BetaCoin | BET | Not Implemented | `-- Not done`
betterbetting | BetterBetting | BETR | Not Implemented | `-- Not done`
bezant | Bezant | BZNT | Not Implemented | `-- Not done`
bezop | Bezop | BEZ | Not Implemented | `-- Not done`
biblepay | BiblePay | BBP | Not Implemented | `-- Not done`
bibox-token | Bibox Token | BIX | Not Implemented | `-- Not done`
bigone-token | BigONE Token | BIG | Not Implemented | `-- Not done`
bigup | BigUp | BIGUP | Not Implemented | `-- Not done`
billarycoin | N/A | N/A | N/A | `-- Not done`
billionaire-token | Billionaire Token | XBL | Not Implemented | `-- Not done`
binance-coin | Binance Coin | BNB | Not Implemented | `-- Not done`
biobar | BioBar | BIOB | Not Implemented | `-- Not done`
biocoin | BioCoin | BIO | Not Implemented | `-- Not done`
bios-crypto | BiosCrypto | BIOS | Not Implemented | `-- Not done`
biotron | Biotron | BTRN | Not Implemented | `-- Not done`
bipcoin | BipCoin | BIP | Not Implemented | `-- Not done`
birds | Birds | BIRDS | Not Implemented | `-- Not done`
bismuth | Bismuth | BIS | Not Implemented | `-- Not done`
bit20 | Bit20 | BTWTY | Not Implemented | `-- Not done`
bitair | Bitair | BTCA | Not Implemented | `-- Not done`
bitalphacoin | N/A | N/A | N/A | `-- Not done`
bitasean | BitAsean | BAS | Not Implemented | `-- Not done`
bitbar | BitBar | BTB | Not Implemented | `-- Not done`
bitbase | Bitbase | BTBc | Not Implemented | `-- Not done`
bitbay | BitBay | BAY | Dynamic | *+ Done*
bitboost | N/A | N/A | N/A | `-- Not done`
bitbtc | bitBTC | BITBTC | Not Implemented | `-- Not done`
bitcedi | N/A | N/A | N/A | `-- Not done`
bitclave | BitClave | CAT | Not Implemented | `-- Not done`
bitcloud | Bitcloud | BTDX | Dynamic | *+ Done*
bitcny | bitCNY | BITCNY | Not Implemented | `-- Not done`
bitcoal | BitCoal | COAL | Not Implemented | `-- Not done`
bitcoin-21 | Bitcoin 21 | XBTC21 | Not Implemented | `-- Not done`
bitcoin-atom | Bitcoin Atom | BCA | Not Implemented | `-- Not done`
bitcoin-cash | Bitcoin Cash | BCH | Not Implemented | `-- Not done`
bitcoin-diamond | Bitcoin Diamond | BCD | Not Implemented | `-- Not done`
bitcoin-god | Bitcoin God | GOD | Not Implemented | `-- Not done`
bitcoin-gold | Bitcoin Gold | BTG | Not Implemented | `-- Not done`
bitcoin-green | Bitcoin Green | BITG | Not Implemented | `-- Not done`
bitcoin-interest | Bitcoin Interest | BCI | Not Implemented | `-- Not done`
bitcoin-planet | Bitcoin Planet | BTPL | Not Implemented | `-- Not done`
bitcoin-plus | Bitcoin Plus | XBC | Not Implemented | `-- Not done`
bitcoin-private | Bitcoin Private | BTCP | Not Implemented | `-- Not done`
bitcoin-red | Bitcoin Red | BTCRED | Not Implemented | `-- Not done`
bitcoin-scrypt | Bitcoin Scrypt | BTCS | Not Implemented | `-- Not done`
bitcoin | Bitcoin | BTC | Dynamic | *+ Done*
bitcoindark | BitcoinDark | BTCD | Not Implemented | `-- Not done`
bitcoinfast | Bitcoin Fast | BCF | Not Implemented | `-- Not done`
bitcoinx | BitcoinX | BCX | Not Implemented | `-- Not done`
bitcoinz | BitcoinZ | BTCZ | Not Implemented | `-- Not done`
bitconnect | BitConnect | BCC | Not Implemented | `-- Not done`
bitcore | Bitcore | BTX | Dynamic | *+ Done*
bitcrystals | Bitcrystals | BCY | Not Implemented | `-- Not done`
bitcurrency | Bitcurrency | BTCR | Dynamic | *+ Done*
bitdeal | Bitdeal | BDL | Not Implemented | `-- Not done`
bitdegree | BitDegree | BDG | Not Implemented | `-- Not done`
bitdice | BitDice | CSNO | Not Implemented | `-- Not done`
biteur | bitEUR | BITEUR | Not Implemented | `-- Not done`
bitfid | N/A | N/A | N/A | `-- Not done`
bitgem | Bitgem | BTG | Dynamic | *+ Done*
bitgold | bitGold | BITGOLD | Not Implemented | `-- Not done`
bitmark | Bitmark | BTM | Dynamic | *+ Done*
bitok | Bitok | BITOK | Not Implemented | `-- Not done`
bitpark-coin | Bitpark Coin | BPC | Not Implemented | `-- Not done`
bitquark | BitQuark | BTQ | Not Implemented | `-- Not done`
bitqy | bitqy | BQ | Not Implemented | `-- Not done`
bitradio | Bitradio | BRO | Dynamic | *+ Done*
bitrent | BitRent | RNTB | Not Implemented | `-- Not done`
bitsend | BitSend | BSD | Dynamic | *+ Done*
bitserial | BitSerial | BTE | Not Implemented | `-- Not done`
bitshares-music | MUSE | MUSE | Not Implemented | `-- Not done`
bitshares | BitShares | BTS | Static | *+ Done*
bitsilver | bitSilver | BITSILVER | Not Implemented | `-- Not done`
bitsoar | N/A | N/A | N/A | `-- Not done`
bitstar | Bitstar | BITS | Not Implemented | `-- Not done`
bitstation | BitStation | BSTN | Not Implemented | `-- Not done`
bitsum | Bitsum | BSM | Not Implemented | `-- Not done`
bitswift | Bitswift | SWIFT | Dynamic | *+ Done*
bittokens | BitTokens | BXT | Not Implemented | `-- Not done`
bitusd | bitUSD | BITUSD | Not Implemented | `-- Not done`
bitvolt | Bitvolt | VOLT | Not Implemented | `-- Not done`
bitwhite | BitWhite | BTW | Not Implemented | `-- Not done`
bitz | Bitz | BITZ | Not Implemented | `-- Not done`
bitzeny | Bitzeny | ZNY | Not Implemented | `-- Not done`
blackcoin | BlackCoin | BLK | Dynamic | *+ Done*
blackmoon | Blackmoon | BMC | Not Implemented | `-- Not done`
blackstar | N/A | N/A | N/A | `-- Not done`
blakecoin | Blakecoin | BLC | Not Implemented | `-- Not done`
blakestar | ERA | ERA | Not Implemented | `-- Not done`
blazecoin | BlazeCoin | BLZ | Not Implemented | `-- Not done`
blazercoin | BlazerCoin | BLAZR | Not Implemented | `-- Not done`
blitzcash | Blitzcash | BLITZ | Dynamic | *+ Done*
blitzpredict | BlitzPredict | XBP | Not Implemented | `-- Not done`
block-array | Block Array | ARY | Not Implemented | `-- Not done`
blockcat | BlockCAT | CAT | Not Implemented | `-- Not done`
blockcdn | BlockCDN | BCDN | Not Implemented | `-- Not done`
blocklancer | Blocklancer | LNC | Not Implemented | `-- Not done`
blockmason | BlockMason Credit Protocol | BCPT | Not Implemented | `-- Not done`
blocknet | Blocknet | BLOCK | Dynamic | *+ Done*
blockpay | BlockPay | BLOCKPAY | Not Implemented | `-- Not done`
blockpool | Blockpool | BPL | Not Implemented | `-- Not done`
blockport | Blockport | BPT | Not Implemented | `-- Not done`
blocktix | Blocktix | TIX | Not Implemented | `-- Not done`
blockv | BLOCKv | VEE | Not Implemented | `-- Not done`
bloomtoken | Bloom | BLT | Not Implemented | `-- Not done`
blox | Blox | CDT | Not Implemented | `-- Not done`
bluecoin | BlueCoin | BLU | Not Implemented | `-- Not done`
bluzelle | Bluzelle | BLZ | Not Implemented | `-- Not done`
bnktothefuture | BnkToTheFuture | BFT | Not Implemented | `-- Not done`
bnrtxcoin | BnrtxCoin | BNX | Not Implemented | `-- Not done`
bodhi | Bodhi | BOT | Not Implemented | `-- Not done`
bolenum | Bolenum | BLN | Not Implemented | `-- Not done`
bolivarcoin | Bolivarcoin | BOLI | Dynamic | *+ Done*
bonpay | Bonpay | BON | Not Implemented | `-- Not done`
boolberry | Boolberry | BBR | Not Implemented | `-- Not done`
boostcoin | BoostCoin | BOST | Not Implemented | `-- Not done`
boscoin | BOScoin | BOS | Not Implemented | `-- Not done`
bottos | Bottos | BTO | Not Implemented | `-- Not done`
bounty0x | Bounty0x | BNTY | Not Implemented | `-- Not done`
boutspro | BoutsPro | BOUTS | Not Implemented | `-- Not done`
bowhead | Bowhead | AHT | Not Implemented | `-- Not done`
bowscoin | BowsCoin | BSC | Not Implemented | `-- Not done`
brahmaos | BrahmaOS | BRM | Not Implemented | `-- Not done`
braincoin | N/A | N/A | N/A | `-- Not done`
brat | BROTHER | BRAT | Not Implemented | `-- Not done`
bread | Bread | BRD | Not Implemented | `-- Not done`
breakout-stake | Breakout Stake | BRX | Not Implemented | `-- Not done`
breakout | Breakout | BRK | Not Implemented | `-- Not done`
briacoin | BriaCoin | BRIA | Not Implemented | `-- Not done`
bridgecoin | BridgeCoin | BCO | Not Implemented | `-- Not done`
britcoin | BritCoin | BRIT | Not Implemented | `-- Not done`
bt2-cst | BT2 [CST] | BT2 | Not Implemented | `-- Not done`
btcmoon | BTCMoon | BTCM | Not Implemented | `-- Not done`
btctalkcoin | BTCtalkcoin | TALK | Dynamic | *+ Done*
bubble | Bubble | BUB | Not Implemented | `-- Not done`
budbo | Budbo | BUBO | Not Implemented | `-- Not done`
bullion | Bullion | CBX | Dynamic | *+ Done*
bulwark | Bulwark | BWK | Dynamic | *+ Done*
bumbacoin | BumbaCoin | BUMBA | Not Implemented | `-- Not done`
bunnycoin | BunnyCoin | BUN | Not Implemented | `-- Not done`
burst | Burst | BURST | Not Implemented | `-- Not done`
buzzcoin | BuzzCoin | BUZZ | Not Implemented | `-- Not done`
byteball | Byteball Bytes | GBYTE | Not Implemented | `-- Not done`
bytecent | Bytecent | BYC | Dynamic | *+ Done*
bytecoin-bcn | Bytecoin | BCN | Not Implemented | `-- Not done`
bytom | Bytom | BTM | Not Implemented | `-- Not done`
c-bit | C-Bit | XCT | Not Implemented | `-- Not done`
c20 | CRYPTO20 | C20 | Not Implemented | `-- Not done`
cabbage | Cabbage | CAB | Not Implemented | `-- Not done`
cachecoin | CacheCoin | CACH | Dynamic | *+ Done*
californium | Californium | CF | Not Implemented | `-- Not done`
caliphcoin | CaliphCoin | CALC | Not Implemented | `-- Not done`
campuscoin | CampusCoin | CMPCO | Not Implemented | `-- Not done`
canada-ecoin | Canada eCoin | CDN | Not Implemented | `-- Not done`
candy | Candy | CANDY | Not Implemented | `-- Not done`
cannabiscoin | CannabisCoin | CANN | Dynamic | *+ Done*
cannacoin | CannaCoin | CCN | Dynamic | *+ Done*
cannation | Cannation | CNNC | Not Implemented | `-- Not done`
canyacoin | CanYaCoin | CAN | Not Implemented | `-- Not done`
cappasity | Cappasity | CAPP | Not Implemented | `-- Not done`
capricoin | Capricoin | CPC | Dynamic | *+ Done*
carboncoin | Carboncoin | CARBON | Dynamic | *+ Done*
cardano | Cardano | ADA | Static | *+ Done*
cargox | CargoX | CXO | Not Implemented | `-- Not done`
cartaxi-token | CarTaxi Token | CTX | Not Implemented | `-- Not done`
carvertical | carVertical | CV | Not Implemented | `-- Not done`
cashaa | Cashaa | CAS | Not Implemented | `-- Not done`
cashcoin | Cashcoin | CASH | Not Implemented | `-- Not done`
cashme | N/A | N/A | N/A | `-- Not done`
casinocoin | CasinoCoin | CSC | Not Implemented | `-- Not done`
catcoin | Catcoin | CAT | Not Implemented | `-- Not done`
ccminer | N/A | N/A | N/A | `-- Not done`
ccore | Ccore | CCO | Not Implemented | `-- Not done`
centra | Centra | CTR | Not Implemented | `-- Not done`
centrality | Centrality | CENNZ | Not Implemented | `-- Not done`
centurion | Centurion | CNT | Not Implemented | `-- Not done`
cfun | CFun | CFUN | Not Implemented | `-- Not done`
chaincoin | ChainCoin | CHC | Not Implemented | `-- Not done`
chainium | Chainium | CHX | Not Implemented | `-- Not done`
chainlink | ChainLink | LINK | Not Implemented | `-- Not done`
chancoin | ChanCoin | CHAN | Not Implemented | `-- Not done`
change | Change | CAG | Not Implemented | `-- Not done`
chatcoin | ChatCoin | CHAT | Not Implemented | `-- Not done`
cheapcoin | Cheapcoin | CHEAP | Not Implemented | `-- Not done`
chesscoin | ChessCoin | CHESS | Not Implemented | `-- Not done`
chips | CHIPS | CHIPS | Not Implemented | `-- Not done`
chronobank | Chronobank | TIME | Not Implemented | `-- Not done`
chronologic | Chronologic | DAY | Not Implemented | `-- Not done`
chronos | Chronos | CRX | Not Implemented | `-- Not done`
cindicator | Cindicator | CND | Not Implemented | `-- Not done`
circuits-of-value | Circuits of Value | COVAL | Not Implemented | `-- Not done`
civic | Civic | CVC | Not Implemented | `-- Not done`
ckusd | CK USD | CKUSD | Not Implemented | `-- Not done`
clams | Clams | CLAM | Not Implemented | `-- Not done`
clearcoin | ClearCoin | CLR | Not Implemented | `-- Not done`
clearpoll | ClearPoll | POLL | Not Implemented | `-- Not done`
cloakcoin | CloakCoin | CLOAK | Not Implemented | `-- Not done`
cloud | Cloud | CLD | Not Implemented | `-- Not done`
clubcoin | ClubCoin | CLUB | Dynamic | *+ Done*
cobinhood | Cobinhood | COB | Not Implemented | `-- Not done`
coexistcoin | N/A | N/A | N/A | `-- Not done`
coffeecoin | CoffeeCoin | CFC | Not Implemented | `-- Not done`
cofound-it | Cofound.it | CFI | Not Implemented | `-- Not done`
coimatic-2 | Coimatic 2.0 | CTIC2 | Not Implemented | `-- Not done`
coimatic-3 | Coimatic 3.0 | CTIC3 | Not Implemented | `-- Not done`
coin | Coin(O) | CNO | Not Implemented | `-- Not done`
coin2-1 | Coin2.1 | C2 | Not Implemented | `-- Not done`
coinfi | CoinFi | COFI | Not Implemented | `-- Not done`
coinlancer | Coinlancer | CL | Not Implemented | `-- Not done`
coinmeet | CoinMeet | MEET | Not Implemented | `-- Not done`
coinonat | Coinonat | CXT | Not Implemented | `-- Not done`
coinonatx | CoinonatX | XCXT | Not Implemented | `-- Not done`
coinpoker | CoinPoker | CHP | Not Implemented | `-- Not done`
colossuscoin-v2 | N/A | N/A | N/A | `-- Not done`
colossusxt | ColossusXT | COLX | Dynamic | *+ Done*
comet | Comet | CMT | Not Implemented | `-- Not done`
commerceblock | CommerceBlock | CBT | Not Implemented | `-- Not done`
commodity-ad-network | Commodity Ad Network | CDX | Not Implemented | `-- Not done`
compcoin | N/A | N/A | N/A | `-- Not done`
compucoin | CompuCoin | CPN | Not Implemented | `-- Not done`
comsa-eth | COMSA [ETH] | CMS | Not Implemented | `-- Not done`
comsa-xem | COMSA [XEM] | CMS | Not Implemented | `-- Not done`
concoin | Concoin | CONX | Not Implemented | `-- Not done`
condensate | Condensate | RAIN | Not Implemented | `-- Not done`
confido | N/A | N/A | N/A | `-- Not done`
connectjob | ConnectJob | CJT | Not Implemented | `-- Not done`
consensus | Consensus | SEN | Not Implemented | `-- Not done`
content-and-ad-network | Content and AD Network | CAN | Not Implemented | `-- Not done`
content-neutrality-network | Content Neutrality Network | CNN | Not Implemented | `-- Not done`
copico | Copico | XCPO | Not Implemented | `-- Not done`
copytrack | COPYTRACK | CPY | Not Implemented | `-- Not done`
corion | CORION | COR | Not Implemented | `-- Not done`
cortex | Cortex | CTXC | Not Implemented | `-- Not done`
coss | COSS | COSS | Not Implemented | `-- Not done`
counterparty | Counterparty | XCP | Not Implemented | `-- Not done`
coupecoin | Coupecoin | COUPE | Not Implemented | `-- Not done`
covesting | Covesting | COV | Not Implemented | `-- Not done`
cpchain | CPChain | CPC | Not Implemented | `-- Not done`
crave | Crave | CRAVE | Not Implemented | `-- Not done`
cream | Cream | CRM | Not Implemented | `-- Not done`
creatio | Creatio | XCRE | Not Implemented | `-- Not done`
creativecoin | Creativecoin | CREA | Dynamic | *+ Done*
credence-coin | Credence Coin | CRDNC | Not Implemented | `-- Not done`
creditbit | Creditbit | CRB | Not Implemented | `-- Not done`
credits | Credits | CS | Not Implemented | `-- Not done`
credo | Credo | CREDO | Not Implemented | `-- Not done`
crevacoin | CrevaCoin | CREVA | Not Implemented | `-- Not done`
cropcoin | Cropcoin | CROP | Not Implemented | `-- Not done`
crowd-machine | Crowd Machine | CMCT | Not Implemented | `-- Not done`
crowdcoin | CrowdCoin | CRC | Not Implemented | `-- Not done`
crown | Crown | CRW | Dynamic | *+ Done*
crtcoin | N/A | N/A | N/A | `-- Not done`
crycash | CryCash | CRC | Not Implemented | `-- Not done`
cryptcoin | CryptCoin | CRYPT | Dynamic | *+ Done*
crypterium | Crypterium | CRPT | Not Implemented | `-- Not done`
crypto | Crypto | CTO | Not Implemented | `-- Not done`
cryptocarbon | CryptoCarbon | CCRB | Not Implemented | `-- Not done`
cryptoescudo | N/A | N/A | N/A | `-- Not done`
cryptoforecast | N/A | N/A | N/A | `-- Not done`
cryptojacks | Cryptojacks | CJ | Not Implemented | `-- Not done`
cryptonex | Cryptonex | CNX | Not Implemented | `-- Not done`
cryptonite | Cryptonite | XCN | Not Implemented | `-- Not done`
cryptopay | Cryptopay | CPAY | Not Implemented | `-- Not done`
cryptopiafeeshares | CryptopiaFeeShares | CEFS | Not Implemented | `-- Not done`
cryptoping | CryptoPing | PING | Not Implemented | `-- Not done`
cryptoworldx-token | CryptoWorldX Token | CWXT | Not Implemented | `-- Not done`
crystal-clear | Crystal Clear | CCT | Not Implemented | `-- Not done`
cthulhu-offerings | Cthulhu Offerings | OFF | Not Implemented | `-- Not done`
cube | Cube | AUTO | Not Implemented | `-- Not done`
cubits | Cubits | QBT | Not Implemented | `-- Not done`
curecoin | Curecoin | CURE | Dynamic | *+ Done*
curriculum-vitae | Curriculum Vitae | CVH | Not Implemented | `-- Not done`
cvcoin | CVCoin | CVCOIN | Not Implemented | `-- Not done`
cybercoin | N/A | N/A | N/A | `-- Not done`
cybereits | Cybereits | CRE | Not Implemented | `-- Not done`
cybermiles | CyberMiles | CMT | Not Implemented | `-- Not done`
cybervein | CyberVein | CVT | Not Implemented | `-- Not done`
cycling-coin | Cycling Coin | CYC | Not Implemented | `-- Not done`
cyder | Cyder | CYDER | Not Implemented | `-- Not done`
cypher | N/A | N/A | N/A | `-- Not done`
dadi | DADI | DADI | Not Implemented | `-- Not done`
daex | DAEX | DAX | Not Implemented | `-- Not done`
dai | Dai | DAI | Not Implemented | `-- Not done`
dalecoin | Dalecoin | DALC | Not Implemented | `-- Not done`
daneel | Daneel | DAN | Not Implemented | `-- Not done`
dao-casino | DAO.Casino | BET | Not Implemented | `-- Not done`
daostack | DAOstack | GEN | Not Implemented | `-- Not done`
dappster | DAPPSTER | DLISK | Not Implemented | `-- Not done`
darcrus | Darcrus | DAR | Not Implemented | `-- Not done`
darklisk | DarkLisk | DISK | Not Implemented | `-- Not done`
darsek | Darsek | KED | Not Implemented | `-- Not done`
dash | Dash | DASH | Dynamic | *+ Done*
dashcoin | Dashcoin | DSH | Not Implemented | `-- Not done`
dashs | Dashs | DASHS | Not Implemented | `-- Not done`
data | DATA | DTA | Not Implemented | `-- Not done`
databits | Databits | DTB | Not Implemented | `-- Not done`
datacoin | Datacoin | DTC | Dynamic | *+ Done*
datawallet | Datawallet | DXT | Not Implemented | `-- Not done`
datum | Datum | DAT | Not Implemented | `-- Not done`
datx | DATx | DATX | Not Implemented | `-- Not done`
davorcoin | DavorCoin | DAV | Not Implemented | `-- Not done`
daxxcoin | DaxxCoin | DAXX | Not Implemented | `-- Not done`
dcorp | DCORP | DRP | Not Implemented | `-- Not done`
debitcoin | Debitcoin | DBTC | Not Implemented | `-- Not done`
debitum-network | Debitum | DEB | Not Implemented | `-- Not done`
decent-bet | DecentBet | DBET | Not Implemented | `-- Not done`
decent | DECENT | DCT | Not Implemented | `-- Not done`
decentraland | Decentraland | MANA | Not Implemented | `-- Not done`
decentralized-machine-learning | Decentralized Machine Learning | DML | Not Implemented | `-- Not done`
decision-token | Decision Token | HST | Not Implemented | `-- Not done`
decred | Decred | DCR | Not Implemented | `-- Not done`
deepbrain-chain | DeepBrain Chain | DBC | Not Implemented | `-- Not done`
deeponion | DeepOnion | ONION | Not Implemented | `-- Not done`
delphy | Delphy | DPY | Not Implemented | `-- Not done`
deltacredits | DeltaCredits | DCRE | Not Implemented | `-- Not done`
denarius-dnr | Denarius | DNR | Not Implemented | `-- Not done`
dent | Dent | DENT | Not Implemented | `-- Not done`
dentacoin | Dentacoin | DCN | Not Implemented | `-- Not done`
dero | Dero | DERO | Not Implemented | `-- Not done`
desire | Desire | DSR | Not Implemented | `-- Not done`
destiny | Destiny | DES | Not Implemented | `-- Not done`
dether | Dether | DTH | Not Implemented | `-- Not done`
deuscoin | DeusCoin | DEUS | Not Implemented | `-- Not done`
deutsche-emark | Deutsche eMark | DEM | Not Implemented | `-- Not done`
devery | Devery | EVE | Not Implemented | `-- Not done`
deviantcoin | DeviantCoin | DEV | Not Implemented | `-- Not done`
dew | DEW | DEW | Not Implemented | `-- Not done`
dfscoin | N/A | N/A | N/A | `-- Not done`
diamond | Diamond | DMD | Dynamic | *+ Done*
dibcoin | N/A | N/A | N/A | `-- Not done`
digibyte | DigiByte | DGB | Dynamic | *+ Done*
digicube | DigiCube | CUBE | Not Implemented | `-- Not done`
digipulse | DigiPulse | DGPT | Not Implemented | `-- Not done`
digital-bullion-gold | N/A | N/A | N/A | `-- Not done`
digital-credits | N/A | N/A | N/A | `-- Not done`
digital-developers-fund | DigitalDevelopersFund | DDF | Not Implemented | `-- Not done`
digital-money-bits | Digital Money Bits | DMB | Not Implemented | `-- Not done`
digital-rupees | Digital Rupees | DRS | Not Implemented | `-- Not done`
digitalcoin | Digitalcoin | DGC | Dynamic | *+ Done*
digitalnote | DigitalNote | XDN | Not Implemented | `-- Not done`
digitalprice | DigitalPrice | DP | Not Implemented | `-- Not done`
digix-gold-token | Digix Gold Token | DGX | Not Implemented | `-- Not done`
digixdao | DigixDAO | DGD | Not Implemented | `-- Not done`
dignity | Dignity | DIG | Not Implemented | `-- Not done`
dimcoin | DIMCOIN | DIM | Not Implemented | `-- Not done`
dimecoin | Dimecoin | DIME | Dynamic | *+ Done*
dinastycoin | Dinastycoin | DCY | Not Implemented | `-- Not done`
district0x | district0x | DNT | Not Implemented | `-- Not done`
divi | Divi | DIVX | Not Implemented | `-- Not done`
dix-asset | Dix Asset | DIX | Not Implemented | `-- Not done`
dmarket | DMarket | DMT | Not Implemented | `-- Not done`
dnotes | N/A | N/A | N/A | *+ Done*
docademic | Docademic | MTC | Not Implemented | `-- Not done`
dock | Dock | DOCK | Not Implemented | `-- Not done`
dogecoin | Dogecoin | DOGE | Not Implemented | `-- Not done`
dollar-online | Dollar Online | DOLLAR | Not Implemented | `-- Not done`
dollarcoin | Dollarcoin | DLC | Not Implemented | `-- Not done`
domraider | DomRaider | DRT | Not Implemented | `-- Not done`
donationcoin | Donationcoin | DON | Not Implemented | `-- Not done`
dopecoin | DopeCoin | DOPE | Dynamic | *+ Done*
dotcoin | Dotcoin | DOT | Dynamic | *+ Done*
doubloon | BOAT | BOAT | Not Implemented | `-- Not done`
dovu | Dovu | DOVU | Not Implemented | `-- Not done`
draftcoin | DraftCoin | DFT | Not Implemented | `-- Not done`
dragon-coins | Dragon Coins | DRG | Not Implemented | `-- Not done`
dragonchain | Dragonchain | DRGN | Not Implemented | `-- Not done`
dreamcoin | Dreamcoin | DRM | Not Implemented | `-- Not done`
dropil | Dropil | DROP | Not Implemented | `-- Not done`
droxne | DROXNE | DRXNE | Not Implemented | `-- Not done`
drp-utility | DRP Utility | DRPU | Not Implemented | `-- Not done`
dubaicoin-dbix | DubaiCoin | DBIX | Not Implemented | `-- Not done`
dubstep | N/A | N/A | N/A | `-- Not done`
dutch-coin | Dutch Coin | DUTCH | Not Implemented | `-- Not done`
dynamic-trading-rights | Dynamic Trading Rights | DTR | Not Implemented | `-- Not done`
dynamic | Dynamic | DYN | Not Implemented | `-- Not done`
dynamiccoin | DynamicCoin | DMC | Not Implemented | `-- Not done`
e-coin | E-coin | ECN | Not Implemented | `-- Not done`
e-dinar-coin | E-Dinar Coin | EDR | Not Implemented | `-- Not done`
e-gulden | e-Gulden | EFL | Dynamic | *+ Done*
ea-coin | EA Coin | EAG | Not Implemented | `-- Not done`
eaglecoin | EagleCoin | EAGLE | Not Implemented | `-- Not done`
earth-token | Earth Token | EARTH | Not Implemented | `-- Not done`
earthcoin | N/A | N/A | N/A | *+ Done*
ebitcoin-cash | eBitcoinCash | EBCH | Not Implemented | `-- Not done`
ebittree-coin | Ebittree Coin | EBT | Not Implemented | `-- Not done`
eboostcoin | eBoost | EBST | Not Implemented | `-- Not done`
ebtcnew | eBitcoin | EBTC | Not Implemented | `-- Not done`
eccoin | ECC | ECC | Not Implemented | `-- Not done`
echolink | EchoLink | EKO | Not Implemented | `-- Not done`
ecobit | Ecobit | ECOB | Not Implemented | `-- Not done`
ecocoin | EcoCoin | ECO | Not Implemented | `-- Not done`
edgeless | Edgeless | EDG | Not Implemented | `-- Not done`
edrcoin | EDRCoin | EDRC | Not Implemented | `-- Not done`
edu-coin | EduCoin | EDU | Not Implemented | `-- Not done`
educare | EDUCare | EKT | Not Implemented | `-- Not done`
education-ecosystem | Education Ecosystem | LEDU | Not Implemented | `-- Not done`
effect-ai | Effect.AI | EFX | Not Implemented | `-- Not done`
eggcoin | EggCoin | EGG | Not Implemented | `-- Not done`
ego | N/A | N/A | N/A | `-- Not done`
egold | N/A | N/A | N/A | `-- Not done`
eidoo | Eidoo | EDO | Not Implemented | `-- Not done`
einsteinium | Einsteinium | EMC2 | Dynamic | *+ Done*
elacoin | N/A | N/A | N/A | `-- Not done`
elastic | Elastic | XEL | Not Implemented | `-- Not done`
elastos | Elastos | ELA | Not Implemented | `-- Not done`
elcoin-el | Elcoin | EL | Not Implemented | `-- Not done`
electra | Electra | ECA | Not Implemented | `-- Not done`
electrifyasia | Electrify.Asia | ELEC | Not Implemented | `-- Not done`
electroneum | Electroneum | ETN | Not Implemented | `-- Not done`
electronic-pk-chain | Electronic PK Chain | EPC | Not Implemented | `-- Not done`
elementrem | Elementrem | ELE | Not Implemented | `-- Not done`
elixir | Elixir | ELIX | Not Implemented | `-- Not done`
ellaism | Ellaism | ELLA | Not Implemented | `-- Not done`
eltcoin | ELTCOIN | ELTCOIN | Not Implemented | `-- Not done`
elysium | Elysium | ELS | Not Implemented | `-- Not done`
embercoin | EmberCoin | EMB | Not Implemented | `-- Not done`
embers | Embers | MBRS | Not Implemented | `-- Not done`
emerald | Emerald Crypto | EMD | Dynamic | *+ Done*
emercoin | Emercoin | EMC | Not Implemented | `-- Not done`
emphy | Emphy | EPY | Not Implemented | `-- Not done`
encrypgen | EncrypGen | DNA | Not Implemented | `-- Not done`
encryptotel-eth | EncryptoTel [ETH] | ETT | Not Implemented | `-- Not done`
encryptotel | EncryptoTel [WAVES] | ETT | Not Implemented | `-- Not done`
energo | Energo | TSL | Not Implemented | `-- Not done`
energycoin | Energycoin | ENRG | Dynamic | *+ Done*
enigma-project | Enigma | ENG | Not Implemented | `-- Not done`
enigma | N/A | N/A | N/A | `-- Not done`
enjin-coin | Enjin Coin | ENJ | Not Implemented | `-- Not done`
entcash | ENTCash | ENT | Not Implemented | `-- Not done`
envion | Envion | EVN | Not Implemented | `-- Not done`
eos | EOS | EOS | Not Implemented | `-- Not done`
eosdac | eosDAC | EOSDAC | Not Implemented | `-- Not done`
eot-token | N/A | N/A | N/A | `-- Not done`
equal | Equal | EQL | Not Implemented | `-- Not done`
equitrader | EquiTrader | EQT | Dynamic | *+ Done*
erc20 | ERC20 | ERC20 | Not Implemented | `-- Not done`
ereal | eREAL | EREAL | Not Implemented | `-- Not done`
ergo | Ergo | EFYT | Not Implemented | `-- Not done`
eroscoin | Eroscoin | ERO | Not Implemented | `-- Not done`
eryllium | Eryllium | ERY | Dynamic | *+ Done*
escoro | Escroco | ESC | Not Implemented | `-- Not done`
espers | Espers | ESP | Not Implemented | `-- Not done`
eternity | Eternity | ENT | Dynamic | *+ Done*
ethbet | EthBet | EBET | Not Implemented | `-- Not done`
ethbits | Ethbits | ETBS | Not Implemented | `-- Not done`
etherdelta-token | EtherDelta Token | EDT | Not Implemented | `-- Not done`
etherecash | Etherecash | ECH | Not Implemented | `-- Not done`
ethereum-blue | Blue Protocol | BLUE | Not Implemented | `-- Not done`
ethereum-classic | Ethereum Classic | ETC | Not Implemented | `-- Not done`
ethereum-dark | Ethereum Dark | ETHD | Not Implemented | `-- Not done`
ethereum-gold | Ethereum Gold | ETG | Not Implemented | `-- Not done`
ethereum-lite | Ethereum Lite | ELITE | Not Implemented | `-- Not done`
ethereum-movie-venture | Ethereum Movie Venture | EMV | Not Implemented | `-- Not done`
ethereum | Ethereum | ETH | Dynamic | *+ Done*
ethereumcash | Ethereum Cash | ECASH | Not Implemented | `-- Not done`
etheriya | Etheriya | RIYA | Not Implemented | `-- Not done`
etheroll | Etheroll | DICE | Not Implemented | `-- Not done`
etherparty | Etherparty | FUEL | Not Implemented | `-- Not done`
ethersportz | EtherSportz | ESZ | Not Implemented | `-- Not done`
ethlend | ETHLend | LEND | Not Implemented | `-- Not done`
ethorse | Ethorse | HORSE | Not Implemented | `-- Not done`
ethos | Ethos | ETHOS | Not Implemented | `-- Not done`
eurocoin | Eurocoin | EUC | Not Implemented | `-- Not done`
europecoin | EuropeCoin | ERC | Dynamic | *+ Done*
eventchain | EventChain | EVC | Not Implemented | `-- Not done`
everex | Everex | EVX | Not Implemented | `-- Not done`
evergreencoin | EverGreenCoin | EGC | Dynamic | *+ Done*
everus | Everus | EVR | Not Implemented | `-- Not done`
evil-coin | Evil Coin | EVIL | Not Implemented | `-- Not done`
evotion | N/A | N/A | N/A | `-- Not done`
exchange-union | Exchange Union | XUC | Not Implemented | `-- Not done`
exchangen | ExchangeN | EXN | Not Implemented | `-- Not done`
exclusivecoin | ExclusiveCoin | EXCL | Not Implemented | `-- Not done`
expanse | Expanse | EXP | Not Implemented | `-- Not done`
experience-points | Experience Points | XP | Not Implemented | `-- Not done`
experty | Experty | EXY | Not Implemented | `-- Not done`
exrnchain | EXRNchain | EXRN | Not Implemented | `-- Not done`
eztoken | EZToken | EZT | Not Implemented | `-- Not done`
factom | Factom | FCT | Not Implemented | `-- Not done`
faircoin | FairCoin | FAIR | Not Implemented | `-- Not done`
fairgame | FairGame | FAIR | Not Implemented | `-- Not done`
fantasy-cash | Fantasy Cash | FANS | Not Implemented | `-- Not done`
fantomcoin | Fantomcoin | FCN | Not Implemented | `-- Not done`
fapcoin | FAPcoin | FAP | Not Implemented | `-- Not done`
farad | Farad | FRD | Not Implemented | `-- Not done`
fargocoin | Fargocoin | FRGC | Not Implemented | `-- Not done`
farstcoin | Farstcoin | FRCT | Not Implemented | `-- Not done`
fastcoin | Fastcoin | FST | Not Implemented | `-- Not done`
fazzcoin | Fazzcoin | FAZZ | Not Implemented | `-- Not done`
feathercoin | Feathercoin | FTC | Dynamic | *+ Done*
fedoracoin | FedoraCoin | TIPS | Not Implemented | `-- Not done`
fidelium | Fidelium | FID | Not Implemented | `-- Not done`
fidentiax | FidentiaX | FDX | Not Implemented | `-- Not done`
filecoin | Filecoin [Futures] | FIL | Not Implemented | `-- Not done`
fimkrypto | N/A | N/A | N/A | `-- Not done`
fincoin | FinCoin | FNC | Not Implemented | `-- Not done`
fintrux-network | FintruX Network | FTX | Not Implemented | `-- Not done`
firecoin | Firecoin | FIRE | Not Implemented | `-- Not done`
first-bitcoin-capital | First Bitcoin Capital | BITCF | Not Implemented | `-- Not done`
first-bitcoin | First Bitcoin | BIT | Not Implemented | `-- Not done`
firstblood | FirstBlood | 1ST | Not Implemented | `-- Not done`
firstcoin | FirstCoin | FRST | Not Implemented | `-- Not done`
fitrova | Fitrova | FRV | Not Implemented | `-- Not done`
flappycoin | N/A | N/A | N/A | `-- Not done`
flash | Flash | FLASH | Not Implemented | `-- Not done`
flaxscript | Flaxscript | FLAX | Dynamic | *+ Done*
flik | FLiK | FLIK | Not Implemented | `-- Not done`
flixxo | Flixxo | FLIXX | Not Implemented | `-- Not done`
florincoin | FlorinCoin | FLO | Not Implemented | `-- Not done`
fluttercoin | FlutterCoin | FLT | Not Implemented | `-- Not done`
fluz-fluz | Fluz Fluz | FLUZ | Not Implemented | `-- Not done`
flycoin | Flycoin | FLY | Not Implemented | `-- Not done`
flypme | FlypMe | FYP | Not Implemented | `-- Not done`
foldingcoin | FoldingCoin | FLDC | Not Implemented | `-- Not done`
fonziecoin | N/A | N/A | N/A | `-- Not done`
footy-cash | N/A | N/A | N/A | `-- Not done`
force | FORCE | FOR | Not Implemented | `-- Not done`
fortuna | Fortuna | FOTA | Not Implemented | `-- Not done`
francs | Francs | FRN | Not Implemented | `-- Not done`
franko | N/A | N/A | N/A | `-- Not done`
frankywillcoin | N/A | N/A | N/A | `-- Not done`
freicoin | Freicoin | FRC | Not Implemented | `-- Not done`
freyrchain | Freyrchain | FREC | Not Implemented | `-- Not done`
friends | Friendz | FDZ | Not Implemented | `-- Not done`
fucktoken | N/A | N/A | N/A | `-- Not done`
fuelcoin | N/A | N/A | N/A | *+ Done*
fujicoin | FujiCoin | FJC | Not Implemented | `-- Not done`
fujinto | Fujinto | NTO | Not Implemented | `-- Not done`
funcoin | FUNCoin | FUNC | Not Implemented | `-- Not done`
fundyourselfnow | FundYourselfNow | FYN | Not Implemented | `-- Not done`
funfair | FunFair | FUN | Not Implemented | `-- Not done`
fusion | Fusion | FSN | Not Implemented | `-- Not done`
futcoin | N/A | N/A | N/A | `-- Not done`
futurexe | FuturXe | FXE | Not Implemented | `-- Not done`
fuzex | FuzeX | FXT | Not Implemented | `-- Not done`
fuzzballs | FuzzBalls | FUZZ | Not Implemented | `-- Not done`
gaia | N/A | N/A | N/A | `-- Not done`
galactrum | Galactrum | ORE | Not Implemented | `-- Not done`
gambit | Gambit | GAM | Dynamic | *+ Done*
game | Game.com | GTC | Not Implemented | `-- Not done`
gamechain | GameChain System | GCS | Not Implemented | `-- Not done`
gamecredits | GameCredits | GAME | Not Implemented | `-- Not done`
gameleaguecoin | N/A | N/A | N/A | `-- Not done`
gameunits | GameUnits | UNITS | Not Implemented | `-- Not done`
ganjacoin | N/A | N/A | N/A | `-- Not done`
gapcoin | Gapcoin | GAP | Dynamic | *+ Done*
garlicoin | Garlicoin | GRLC | Not Implemented | `-- Not done`
gas | Gas | GAS | Not Implemented | `-- Not done`
gatcoin | Gatcoin | GAT | Not Implemented | `-- Not done`
gaycoin | N/A | N/A | N/A | `-- Not done`
gbcgoldcoin | GBCGoldCoin | GBC | Not Implemented | `-- Not done`
gcn-coin | GCN Coin | GCN | Not Implemented | `-- Not done`
geertcoin | GeertCoin | GEERT | Not Implemented | `-- Not done`
gems-protocol | Gems | GEM | Not Implemented | `-- Not done`
genaro-network | Genaro Network | GNX | Not Implemented | `-- Not done`
genesis-vision | Genesis Vision | GVT | Not Implemented | `-- Not done`
genstake | N/A | N/A | N/A | `-- Not done`
geocoin | GeoCoin | GEO | Dynamic | *+ Done*
get-protocol | GET Protocol | GET | Not Implemented | `-- Not done`
geysercoin | GeyserCoin | GSR | Not Implemented | `-- Not done`
gifto | Gifto | GTO | Not Implemented | `-- Not done`
giga-watt-token | N/A | N/A | N/A | `-- Not done`
gladius-token | Gladius Token | GLA | Not Implemented | `-- Not done`
glasscoin | GlassCoin | GLS | Not Implemented | `-- Not done`
global-cryptocurrency | Global Cryptocurrency | GCC | Not Implemented | `-- Not done`
global-currency-reserve | Global Currency Reserve | GCR | Not Implemented | `-- Not done`
global-jobcoin | Global Jobcoin | GJC | Not Implemented | `-- Not done`
global-social-chain | Global Social Chain | GSC | Not Implemented | `-- Not done`
global-tour-coin | Global Tour Coin | GTC | Not Implemented | `-- Not done`
globalboost-y | GlobalBoost-Y | BSTY | Not Implemented | `-- Not done`
globalcoin | GlobalCoin | GLC | Dynamic | *+ Done*
globaltoken | GlobalToken | GLT | Not Implemented | `-- Not done`
gnosis-gno | Gnosis | GNO | Not Implemented | `-- Not done`
gobyte | GoByte | GBX | Not Implemented | `-- Not done`
gold-pressed-latinum | Gold Pressed Latinum | GPL | Not Implemented | `-- Not done`
gold-reward-token | GOLD Reward Token | GRX | Not Implemented | `-- Not done`
goldblocks | GoldBlocks | GB | Not Implemented | `-- Not done`
goldcoin | GoldCoin | GLD | Dynamic | *+ Done*
goldmaxcoin | GoldMaxCoin | GMX | Not Implemented | `-- Not done`
goldmint | GoldMint | MNTP | Not Implemented | `-- Not done`
goldpieces | GoldPieces | GP | Not Implemented | `-- Not done`
goldreserve | N/A | N/A | N/A | `-- Not done`
golem-network-tokens | Golem | GNT | Not Implemented | `-- Not done`
golfcoin | Golfcoin | GOLF | Not Implemented | `-- Not done`
golos-gold | Golos Gold | GBG | Not Implemented | `-- Not done`
golos | Golos | GOLOS | Not Implemented | `-- Not done`
goodomy | Goodomy | GOOD | Not Implemented | `-- Not done`
gpu-coin | N/A | N/A | N/A | `-- Not done`
graft | Graft | GRFT | Not Implemented | `-- Not done`
grandcoin | GrandCoin | GDC | Not Implemented | `-- Not done`
granitecoin | Granite | GRN | Not Implemented | `-- Not done`
greencoin | N/A | N/A | N/A | *+ Done*
greenmed | GreenMed | GRMD | Not Implemented | `-- Not done`
grid | Grid+ | GRID | Not Implemented | `-- Not done`
gridcoin | GridCoin | GRC | Not Implemented | `-- Not done`
grimcoin | Grimcoin | GRIM | Not Implemented | `-- Not done`
groestlcoin | Groestlcoin | GRS | Dynamic | *+ Done*
growers-international | Growers International | GRWI | Not Implemented | `-- Not done`
guaranteed-ethurance-token-extra | Guaranteed Ethurance Token Extra | GETX | Not Implemented | `-- Not done`
guccionecoin | GuccioneCoin | GCC | Not Implemented | `-- Not done`
guess | Peerguess | GUESS | Not Implemented | `-- Not done`
gulden | Gulden | NLG | Not Implemented | `-- Not done`
guncoin | Guncoin | GUN | Dynamic | *+ Done*
guppy | Matchpool | GUP | Not Implemented | `-- Not done`
gxchain | GXChain | GXS | Not Implemented | `-- Not done`
hacken | Hacken | HKN | Not Implemented | `-- Not done`
hackspace-capital | Hackspace Capital | HAC | Not Implemented | `-- Not done`
hade-platform | Hade Platform | HADE | Not Implemented | `-- Not done`
halalchain | HalalChain | HLC | Not Implemented | `-- Not done`
halcyon | Halcyon | HAL | Not Implemented | `-- Not done`
halloween-coin | Halloween Coin | HALLO | Not Implemented | `-- Not done`
happy-creator-coin | N/A | N/A | N/A | `-- Not done`
happycoin | Happycoin | HPC | Not Implemented | `-- Not done`
harmonycoin-hmc | HarmonyCoin | HMC | Not Implemented | `-- Not done`
harvest-masternode-coin | Harvest Masternode Coin | HC | Not Implemented | `-- Not done`
hat-exchange | Hat.Exchange | HAT | Not Implemented | `-- Not done`
haven-protocol | Haven Protocol | XHV | Not Implemented | `-- Not done`
havven | Havven | HAV | Not Implemented | `-- Not done`
hawala-today | N/A | N/A | N/A | `-- Not done`
healthywormcoin | HealthyWormCoin | WORM | Dynamic | *+ Done*
heat-ledger | HEAT | HEAT | Not Implemented | `-- Not done`
hedge | Hedge | HDG | Not Implemented | `-- Not done`
helbiz | Helbiz | HBZ | Not Implemented | `-- Not done`
helleniccoin | Helleniccoin | HNC | Not Implemented | `-- Not done`
hellogold | HelloGold | HGT | Not Implemented | `-- Not done`
hempcoin-hmp | HempCoin | HMP | Not Implemented | `-- Not done`
hempcoin | HempCoin | THC | Not Implemented | `-- Not done`
herocoin | HEROcoin | PLAY | Not Implemented | `-- Not done`
hexx | Hexx | HXX | Not Implemented | `-- Not done`
hi-mutual-society | Hi Mutual Society | HMC | Not Implemented | `-- Not done`
hicoin | HiCoin | XHI | Not Implemented | `-- Not done`
high-gain | High Gain | HIGH | Not Implemented | `-- Not done`
high-performance-blockchain | High Performance Blockchain | HPB | Not Implemented | `-- Not done`
high-voltage | High Voltage | HVCO | Not Implemented | `-- Not done`
hirematch | HireMatch | HIRE | Not Implemented | `-- Not done`
hitcoin | N/A | N/A | N/A | `-- Not done`
hive-project | Hive Project | HVN | Not Implemented | `-- Not done`
hobonickels | HoboNickels | HBN | Dynamic | *+ Done*
hodl-bucks | HODL Bucks | HDLB | Not Implemented | `-- Not done`
hodlcoin | HOdlcoin | HODL | Not Implemented | `-- Not done`
hollywoodcoin | HollyWoodCoin | HWC | Not Implemented | `-- Not done`
holo | Holo | HOT | Not Implemented | `-- Not done`
homeblockcoin | HomeBlockCoin | HBC | Not Implemented | `-- Not done`
honey | Honey | HONEY | Not Implemented | `-- Not done`
hoqu | HOQU | HQX | Not Implemented | `-- Not done`
hshare | Hshare | HSR | Not Implemented | `-- Not done`
html-coin | HTMLCOIN | HTML | Not Implemented | `-- Not done`
hubii-network | Hubii Network | HBT | Not Implemented | `-- Not done`
humaniq | Humaniq | HMQ | Not Implemented | `-- Not done`
huncoin | Huncoin | HNC | Not Implemented | `-- Not done`
huntercoin | HunterCoin | HUC | Not Implemented | `-- Not done`
huobi-token | Huobi Token | HT | Not Implemented | `-- Not done`
hush | Hush | HUSH | Not Implemented | `-- Not done`
hydro-protocol | Hydro Protocol | HOT | Not Implemented | `-- Not done`
hydrogen | Hydrogen | HYDRO | Not Implemented | `-- Not done`
hyper-pay | Hyper Pay | HPY | Not Implemented | `-- Not done`
hyper | Hyper | HYPER | Not Implemented | `-- Not done`
hyperstake | HyperStake | HYP | Not Implemented | `-- Not done`
i0coin | I0Coin | I0C | Dynamic | *+ Done*
ibank | iBank | IBANK | Not Implemented | `-- Not done`
ico-openledger | ICO OpenLedger | ICOO | Not Implemented | `-- Not done`
icobid | ICOBID | ICOB | Not Implemented | `-- Not done`
icoin | iCoin | ICN | Dynamic | *+ Done*
icon | ICON | ICX | Not Implemented | `-- Not done`
iconic | Iconic | ICON | Not Implemented | `-- Not done`
iconomi | Iconomi | ICN | Not Implemented | `-- Not done`
icos | ICOS | ICOS | Not Implemented | `-- Not done`
idex-membership | IDEX Membership | IDXM | Not Implemented | `-- Not done`
idice | N/A | N/A | N/A | `-- Not done`
iethereum | iEthereum | IETH | Not Implemented | `-- Not done`
ignis | Ignis | IGNIS | Not Implemented | `-- Not done`
ignition | Ignition | IC | Dynamic | *+ Done*
iht-real-estate-protocol | IHT Real Estate Protocol | IHT | Not Implemented | `-- Not done`
imbrex | imbrex | REX | Not Implemented | `-- Not done`
impact | Impact | IMX | Dynamic | *+ Done*
impulsecoin | ImpulseCoin | IMPS | Not Implemented | `-- Not done`
incakoin | IncaKoin | NKA | Not Implemented | `-- Not done`
incent | Incent | INCNT | Not Implemented | `-- Not done`
indahash | indaHash | IDH | Not Implemented | `-- Not done`
independent-money-system | Independent Money System | IMS | Not Implemented | `-- Not done`
india-coin | India Coin | INDIA | Not Implemented | `-- Not done`
indicoin | Indicoin | INDI | Not Implemented | `-- Not done`
indorse-token | Indorse Token | IND | Not Implemented | `-- Not done`
infchain | N/A | N/A | N/A | `-- Not done`
infinitecoin | Infinitecoin | IFC | Dynamic | *+ Done*
infinity-economics | Infinity Economics | XIN | Not Implemented | `-- Not done`
inflationcoin | InflationCoin | IFLT | Not Implemented | `-- Not done`
influence-chain | Influence Chain | INC | Not Implemented | `-- Not done`
influxcoin | Influxcoin | INFX | Not Implemented | `-- Not done`
ink-protocol | Ink Protocol | XNK | Not Implemented | `-- Not done`
ink | Ink | INK | Not Implemented | `-- Not done`
innova | Innova | INN | Not Implemented | `-- Not done`
inpay | InPay | INPAY | Not Implemented | `-- Not done`
ins-ecosystem | INS Ecosystem | INS | Not Implemented | `-- Not done`
insanecoin-insn | InsaneCoin | INSN | Not Implemented | `-- Not done`
insights-network | Insights Network | INSTAR | Not Implemented | `-- Not done`
insurchain | InsurChain | INSUR | Not Implemented | `-- Not done`
insurepal | InsurePal | IPL | Not Implemented | `-- Not done`
intelligent-investment-chain | Intelligent Investment Chain | IIC | Not Implemented | `-- Not done`
intelligent-trading-foundation | Intelligent Trading Foundation | ITT | Not Implemented | `-- Not done`
intelligent-trading-tech | N/A | N/A | N/A | `-- Not done`
intensecoin | IntenseCoin | ITNS | Not Implemented | `-- Not done`
international-diamond | N/A | N/A | N/A | `-- Not done`
internet-node-token | Internet Node Token | INT | Not Implemented | `-- Not done`
internet-of-people | Internet of People | IOP | Not Implemented | `-- Not done`
internet-of-things | Internet of Things | XOT | Not Implemented | `-- Not done`
internxt | Internxt | INXT | Not Implemented | `-- Not done`
interplanetary-broadcast-coin | Interplanetary Broadcast Coin | IPBC | Not Implemented | `-- Not done`
interstellar-holdings | Interstellar Holdings | HOLD | Not Implemented | `-- Not done`
interzone | Interzone | ITZ | Not Implemented | `-- Not done`
investdigital | InvestDigital | IDT | Not Implemented | `-- Not done`
investfeed | InvestFeed | IFT | Not Implemented | `-- Not done`
invisiblecoin | N/A | N/A | N/A | `-- Not done`
iocoin | I/O Coin | IOC | Not Implemented | `-- Not done`
ion | ION | ION | Dynamic | *+ Done*
iostoken | IOStoken | IOST | Not Implemented | `-- Not done`
iot-chain | IoT Chain | ITC | Not Implemented | `-- Not done`
iota | IOTA | MIOTA | Not Implemented | `-- Not done`
ip-exchange | IP Exchange | IPSX | Not Implemented | `-- Not done`
ipchain | IPChain | IPC | Not Implemented | `-- Not done`
iquant | iQuant | IQT | Not Implemented | `-- Not done`
irishcoin | IrishCoin | IRL | Not Implemented | `-- Not done`
islacoin | IslaCoin | ISL | Not Implemented | `-- Not done`
iticoin | iTicoin | ITI | Not Implemented | `-- Not done`
iungo | Iungo | ING | Not Implemented | `-- Not done`
ixcoin | Ixcoin | IXC | Dynamic | *+ Done*
ixledger | iXledger | IXT | Not Implemented | `-- Not done`
javascript-token | JavaScript Token | JS | Not Implemented | `-- Not done`
jesus-coin | Jesus Coin | JC | Not Implemented | `-- Not done`
jet8 | JET8 | J8T | Not Implemented | `-- Not done`
jetcoin | Jetcoin | JET | Not Implemented | `-- Not done`
jewels | Jewels | JWL | Not Implemented | `-- Not done`
jibrel-network | Jibrel Network | JNT | Not Implemented | `-- Not done`
jin-coin | Jin Coin | JIN | Not Implemented | `-- Not done`
jingtum-tech | Jingtum Tech | SWTC | Not Implemented | `-- Not done`
jiyo | Jiyo | JIYO | Not Implemented | `-- Not done`
jobscoin | JobsCoin | JOBS | Not Implemented | `-- Not done`
joincoin | Joincoin | J | Dynamic | *+ Done*
joulecoin | Joulecoin | XJO | Dynamic | *+ Done*
karbo | Karbo | KRB | Not Implemented | `-- Not done`
karma | Karma | KRM | Dynamic | *+ Done*
karmacoin | Karmacoin | KARMA | Not Implemented | `-- Not done`
kashhcoin | KashhCoin | KASHH | Not Implemented | `-- Not done`
kayicoin | N/A | N/A | N/A | `-- Not done`
kcash | Kcash | KCASH | Not Implemented | `-- Not done`
kekcoin | KekCoin | KEK | Not Implemented | `-- Not done`
key | KEY | KEY | Not Implemented | `-- Not done`
kickico | KickCoin | KICK | Not Implemented | `-- Not done`
kilocoin | KiloCoin | KLC | Not Implemented | `-- Not done`
kin | Kin | KIN | Not Implemented | `-- Not done`
kingn-coin | KingN Coin | KNC | Not Implemented | `-- Not done`
klondikecoin | KlondikeCoin | KDC | Not Implemented | `-- Not done`
kobocoin | Kobocoin | KOBO | Dynamic | *+ Done*
kolion | Kolion | KLN | Not Implemented | `-- Not done`
komodo | Komodo | KMD | Not Implemented | `-- Not done`
korecoin | Kore | KORE | Not Implemented | `-- Not done`
kronecoin | Kronecoin | KRONE | Not Implemented | `-- Not done`
kubera-coin | Kubera Coin | KBR | Not Implemented | `-- Not done`
kucoin-shares | KuCoin Shares | KCS | Not Implemented | `-- Not done`
kurrent | Kurrent | KURT | Not Implemented | `-- Not done`
kushcoin | KushCoin | KUSH | Dynamic | *+ Done*
kyber-network | Kyber Network | KNC | Not Implemented | `-- Not done`
kzcash | N/A | N/A | N/A | `-- Not done`
lala-world | LALA World | LALA | Not Implemented | `-- Not done`
lamden | Lamden | TAU | Not Implemented | `-- Not done`
lampix | Lampix | PIX | Not Implemented | `-- Not done`
lanacoin | LanaCoin | LANA | Dynamic | *+ Done*
landcoin | LandCoin | LDCN | Not Implemented | `-- Not done`
lathaan | N/A | N/A | N/A | `-- Not done`
latiumx | LatiumX | LATX | Not Implemented | `-- Not done`
latoken | LATOKEN | LA | Not Implemented | `-- Not done`
lazaruscoin | N/A | N/A | N/A | `-- Not done`
leacoin | LeaCoin | LEA | Not Implemented | `-- Not done`
leadcoin | Leadcoin | LDC | Not Implemented | `-- Not done`
leafcoin | N/A | N/A | N/A | `-- Not done`
legends-room | Legends Room | LGD | Not Implemented | `-- Not done`
legolas-exchange | Legolas Exchange | LGO | Not Implemented | `-- Not done`
lendconnect | N/A | N/A | N/A | `-- Not done`
lendingblock | Lendingblock | LND | Not Implemented | `-- Not done`
lendroid-support-token | Lendroid Support Token | LST | Not Implemented | `-- Not done`
leocoin | LEOcoin | LEO | Not Implemented | `-- Not done`
lepen | LePen | LEPEN | Not Implemented | `-- Not done`
letitride | LetItRide | LIR | Dynamic | *+ Done*
leverj | Leverj | LEV | Not Implemented | `-- Not done`
leviar | Leviar | XLC | Not Implemented | `-- Not done`
leviarcoin | N/A | N/A | N/A | `-- Not done`
levocoin | Levocoin | LEVO | Not Implemented | `-- Not done`
levoplus | LevoPlus | LVPS | Not Implemented | `-- Not done`
library-credit | LBRY Credits | LBC | Not Implemented | `-- Not done`
life | LIFE | LIFE | Not Implemented | `-- Not done`
lightchain | LightChain | LIGHT | Not Implemented | `-- Not done`
lightning-bitcoin | Lightning Bitcoin | LBTC | Dynamic | *+ Done*
linda | Linda | LINDA | Not Implemented | `-- Not done`
link-platform | N/A | N/A | N/A | `-- Not done`
linkedcoin | LinkedCoin | LKC | Not Implemented | `-- Not done`
linker-coin | Linker Coin | LNC | Not Implemented | `-- Not done`
linkeye | LinkEye | LET | Not Implemented | `-- Not done`
linx | Linx | LINX | Dynamic | *+ Done*
lisk | Lisk | LSK | Not Implemented | `-- Not done`
litebar | LiteBar | LTB | Not Implemented | `-- Not done`
litebitcoin | LiteBitcoin | LBTC | Not Implemented | `-- Not done`
litecoin-cash | Litecoin Cash | LCC | Not Implemented | `-- Not done`
litecoin-plus | Litecoin Plus | LCP | Not Implemented | `-- Not done`
litecoin-ultra | LiteCoin Ultra | LTCU | Not Implemented | `-- Not done`
litecoin | Litecoin | LTC | Dynamic | *+ Done*
litecred | Litecred | LTCR | Not Implemented | `-- Not done`
litedoge | LiteDoge | LDOGE | Not Implemented | `-- Not done`
live-stars | Live Stars | LIVE | Not Implemented | `-- Not done`
lltoken | N/A | N/A | N/A | `-- Not done`
locicoin | LOCIcoin | LOCI | Not Implemented | `-- Not done`
lockchain | LockTrip | LOC | Not Implemented | `-- Not done`
lomocoin | LoMoCoin | LMC | Not Implemented | `-- Not done`
loom-network | Loom Network | LOOM | Not Implemented | `-- Not done`
loopring-neo | Loopring [NEO] | LRN | Not Implemented | `-- Not done`
loopring | Loopring | LRC | Not Implemented | `-- Not done`
luckchain | LuckChain | BASH | Dynamic | *+ Done*
luna-coin | Luna Coin | LUNA | Not Implemented | `-- Not done`
lunyr | Lunyr | LUN | Not Implemented | `-- Not done`
luxcoin | LUXCoin | LUX | Dynamic | *+ Done*
lykke | Lykke | LKK | Not Implemented | `-- Not done`
lympo | Lympo | LYM | Not Implemented | `-- Not done`
machinecoin | Machinecoin | MAC | Dynamic | *+ Done*
macro1 | Macro | MCR | Not Implemented | `-- Not done`
macron | MACRON | MCRN | Not Implemented | `-- Not done`
madcoin | Madcoin | MDC | Not Implemented | `-- Not done`
maecenas | Maecenas | ART | Not Implemented | `-- Not done`
maggie | Maggie | MAG | Not Implemented | `-- Not done`
magi | Magi | XMG | Dynamic | *+ Done*
magiccoin | MagicCoin | MAGE | Not Implemented | `-- Not done`
magnet | Magnet | MAG | Not Implemented | `-- Not done`
magnetcoin | Magnetcoin | MAGN | Not Implemented | `-- Not done`
magnum | Magnum | MGM | Not Implemented | `-- Not done`
maidsafecoin | MaidSafeCoin | MAID | Not Implemented | `-- Not done`
maker | Maker | MKR | Not Implemented | `-- Not done`
manna | Manna | MANNA | Dynamic | *+ Done*
mao-zedong | Mao Zedong | MAO | Not Implemented | `-- Not done`
marijuanacoin | Marijuanacoin | MAR | Not Implemented | `-- Not done`
mark-space | MARK.SPACE | MRK | Not Implemented | `-- Not done`
marscoin | Marscoin | MARS | Not Implemented | `-- Not done`
martexcoin | MarteXcoin | MXT | Not Implemented | `-- Not done`
marxcoin | MarxCoin | MARX | Not Implemented | `-- Not done`
masari | Masari | MSR | Not Implemented | `-- Not done`
master-swiscoin | Master Swiscoin | MSCN | Not Implemented | `-- Not done`
masternodecoin | Masternodecoin | MTNC | Not Implemented | `-- Not done`
matrix-ai-network | Matrix AI Network | MAN | Not Implemented | `-- Not done`
matryx | Matryx | MTX | Not Implemented | `-- Not done`
maverick-chain | Maverick Chain | MVC | Not Implemented | `-- Not done`
maxcoin | MaxCoin | MAX | Dynamic | *+ Done*
mazacoin | MAZA | MZC | Not Implemented | `-- Not done`
mcap | MCAP | MCAP | Not Implemented | `-- Not done`
measurable-data-token | Measurable Data Token | MDT | Not Implemented | `-- Not done`
medibloc | MediBloc | MED | Not Implemented | `-- Not done`
medical-chain | Medicalchain | MTN | Not Implemented | `-- Not done`
mediccoin | MedicCoin | MEDIC | Not Implemented | `-- Not done`
medishares | MediShares | MDS | Not Implemented | `-- Not done`
megacoin | Megacoin | MEC | Dynamic | *+ Done*
melon | Melon | MLN | Not Implemented | `-- Not done`
memetic | Memetic / PepeCoin | MEME | Not Implemented | `-- Not done`
mercury-protocol | Mercury Protocol | GMT | Not Implemented | `-- Not done`
mercury | Mercury | MER | Not Implemented | `-- Not done`
mergecoin | N/A | N/A | N/A | `-- Not done`
metal-music-coin | Metal Music Coin | MTLMC3 | Not Implemented | `-- Not done`
metal | Metal | MTL | Not Implemented | `-- Not done`
metalcoin | MetalCoin | METAL | Not Implemented | `-- Not done`
metaverse | Metaverse ETP | ETP | Not Implemented | `-- Not done`
micromoney | MicroMoney | AMM | Not Implemented | `-- Not done`
milocoin | MiloCoin | MILO | Not Implemented | `-- Not done`
mincoin | Mincoin | MNC | Not Implemented | `-- Not done`
mindcoin | MindCoin | MND | Dynamic | *+ Done*
minereum | Minereum | MNE | Not Implemented | `-- Not done`
miners-reward-token | Miners' Reward Token | MRT | Not Implemented | `-- Not done`
mineum | Mineum | MNM | Not Implemented | `-- Not done`
minex | Minex | MINEX | Not Implemented | `-- Not done`
minexcoin | MinexCoin | MNX | Not Implemented | `-- Not done`
mintcoin | Mintcoin | MINT | Not Implemented | `-- Not done`
mithril | Mithril | MITH | Not Implemented | `-- Not done`
mixin | Mixin | XIN | Not Implemented | `-- Not done`
mktcoin | MktCoin | MLM | Not Implemented | `-- Not done`
mmxvi | N/A | N/A | N/A | `-- Not done`
moac | MOAC | MOAC | Not Implemented | `-- Not done`
mobilecash | N/A | N/A | N/A | `-- Not done`
mobilego | MobileGo | MGO | Not Implemented | `-- Not done`
mobius | Mobius | MOBI | Not Implemented | `-- Not done`
modum | Modum | MOD | Not Implemented | `-- Not done`
moeda-loyalty-points | Moeda Loyalty Points | MDA | Not Implemented | `-- Not done`
moin | Moin | MOIN | Not Implemented | `-- Not done`
mojocoin | MojoCoin | MOJO | Not Implemented | `-- Not done`
molecular-future | Molecular Future | MOF | Not Implemented | `-- Not done`
monaco | Monaco | MCO | Not Implemented | `-- Not done`
monacocoin | Monoeci | XMCC | Not Implemented | `-- Not done`
monacoin | MonaCoin | MONA | Not Implemented | `-- Not done`
monero-classic | Monero Classic | XMC | Not Implemented | `-- Not done`
monero-gold | N/A | N/A | N/A | `-- Not done`
monero-original | Monero Original | XMO | Not Implemented | `-- Not done`
monero | Monero | XMR | Dynamic | *+ Done*
moneta2 | N/A | N/A | N/A | `-- Not done`
monetaryunit | MonetaryUnit | MUE | Dynamic | *+ Done*
monetha | Monetha | MTH | Not Implemented | `-- Not done`
money | Money | $$$ | Not Implemented | `-- Not done`
monkey-project | Monkey Project | MONK | Not Implemented | `-- Not done`
monster-byte | Monster Byte | MBI | Not Implemented | `-- Not done`
mooncoin | Mooncoin | MOON | Dynamic | *+ Done*
morpheus-labs | Morpheus Labs | MITX | Not Implemented | `-- Not done`
mothership | Mothership | MSP | Not Implemented | `-- Not done`
motocoin | Motocoin | MOTO | Not Implemented | `-- Not done`
msd | MSD | MSD | Not Implemented | `-- Not done`
musicoin | Musicoin | MUSIC | Not Implemented | `-- Not done`
musiconomi | Musiconomi | MCI | Not Implemented | `-- Not done`
mustangcoin | MustangCoin | MST | Dynamic | *+ Done*
mybit-token | MyBit Token | MYB | Not Implemented | `-- Not done`
myriad | Myriad | XMY | Dynamic | *+ Done*
mysterium | Mysterium | MYST | Not Implemented | `-- Not done`
mytoken | MyToken | MT | Not Implemented | `-- Not done`
mywish | MyWish | WISH | Not Implemented | `-- Not done`
naga | NAGA | NGC | Not Implemented | `-- Not done`
namecoin | Namecoin | NMC | Not Implemented | `-- Not done`
namocoin | NamoCoin | NAMO | Not Implemented | `-- Not done`
nanjcoin | NANJCOIN | NANJ | Not Implemented | `-- Not done`
nano | Nano | NANO | Not Implemented | `-- Not done`
napoleonx | N/A | N/A | N/A | `-- Not done`
natcoin | N/A | N/A | N/A | `-- Not done`
nav-coin | NavCoin | NAV | Not Implemented | `-- Not done`
neblio | Neblio | NEBL | Not Implemented | `-- Not done`
nebula-ai | Nebula AI | NBAI | Not Implemented | `-- Not done`
nebulas-token | Nebulas | NAS | Not Implemented | `-- Not done`
nekonium | Nekonium | NUKO | Not Implemented | `-- Not done`
nem | NEM | XEM | Not Implemented | `-- Not done`
neo-gold | NEO GOLD | NEOG | Not Implemented | `-- Not done`
neo | NEO | NEO | Static | *+ Done*
neoscoin | NeosCoin | NEOS | Dynamic | *+ Done*
netbit | N/A | N/A | N/A | `-- Not done`
netcoin | NetCoin | NET | Not Implemented | `-- Not done`
netko | Netko | NETKO | Dynamic | *+ Done*
network-token | Network Token | NTWK | Not Implemented | `-- Not done`
neumark | Neumark | NEU | Not Implemented | `-- Not done`
neuro | Neuro | NRO | Dynamic | *+ Done*
neurotoken | Neurotoken | NTK | Not Implemented | `-- Not done`
neutron | Neutron | NTRN | Not Implemented | `-- Not done`
nevacoin | NevaCoin | NEVA | Dynamic | *+ Done*
neverdie | NEVERDIE | NDC | Not Implemented | `-- Not done`
newbium | Newbium | NEWB | Not Implemented | `-- Not done`
nework | Nework | NKC | Not Implemented | `-- Not done`
newyorkcoin | NewYorkCoin | NYC | Not Implemented | `-- Not done`
nexium | Nexium | NXC | Not Implemented | `-- Not done`
nexo | Nexo | NEXO | Not Implemented | `-- Not done`
nexty | Nexty | NTY | Not Implemented | `-- Not done`
nexus | Nexus | NXS | Not Implemented | `-- Not done`
nexxus | N/A | N/A | N/A | `-- Not done`
nimiq | Nimiq Exchange Token | NET | Not Implemented | `-- Not done`
nitro | Nitro | NOX | Not Implemented | `-- Not done`
noah-coin | Noah Coin | NOAH | Not Implemented | `-- Not done`
noblecoin | NobleCoin | NOBL | Dynamic | *+ Done*
nodecoin | NodeCoin | NODC | Not Implemented | `-- Not done`
nolimitcoin | NoLimitCoin | NLC2 | Not Implemented | `-- Not done`
novacoin | Novacoin | NVC | Not Implemented | `-- Not done`
nper | NPER | NPER | Not Implemented | `-- Not done`
nubits | NuBits | USNBT | Not Implemented | `-- Not done`
nucleus-vision | Nucleus Vision | NCASH | Not Implemented | `-- Not done`
nullex | Nullex | NLX | Not Implemented | `-- Not done`
nuls | Nuls | NULS | Not Implemented | `-- Not done`
numeraire | Numeraire | NMR | Not Implemented | `-- Not done`
numus | Numus | NMS | Not Implemented | `-- Not done`
numuscash | NumusCash | NUMUS | Not Implemented | `-- Not done`
nushares | NuShares | NSR | Not Implemented | `-- Not done`
nvo | N/A | N/A | N/A | `-- Not done`
nxt | Nxt | NXT | Not Implemented | `-- Not done`
nyancoin | Nyancoin | NYAN | Not Implemented | `-- Not done`
oax | OAX | OAX | Not Implemented | `-- Not done`
obits | OBITS | OBITS | Not Implemented | `-- Not done`
obsidian | Obsidian | ODN | Not Implemented | `-- Not done`
oceanchain | OceanChain | OC | Not Implemented | `-- Not done`
oceanlab | Oceanlab | OCL | Not Implemented | `-- Not done`
ocow | N/A | N/A | N/A | `-- Not done`
octanox | Octanox | OTX | Not Implemented | `-- Not done`
octocoin | OctoCoin | 888 | Dynamic | *+ Done*
octoin-coin | Octoin Coin | OCC | Not Implemented | `-- Not done`
odem | ODEM | ODE | Not Implemented | `-- Not done`
odyssey | Odyssey | OCN | Not Implemented | `-- Not done`
ofcoin | OFCOIN | OF | Not Implemented | `-- Not done`
okcash | OKCash | OK | Dynamic | *+ Done*
olympus-labs | Olympus Labs | MOT | Not Implemented | `-- Not done`
omicron | Omicron | OMC | Not Implemented | `-- Not done`
omisego | OmiseGO | OMG | Not Implemented | `-- Not done`
omni | Omni | OMNI | Not Implemented | `-- Not done`
oneroot-network | OneRoot Network | RNT | Not Implemented | `-- Not done`
ongsocial | onG.social | ONG | Not Implemented | `-- Not done`
onix | Onix | ONX | Not Implemented | `-- Not done`
ontology | Ontology | ONT | Not Implemented | `-- Not done`
op-coin | OP Coin | OPC | Not Implemented | `-- Not done`
opal | Opal | OPAL | Not Implemented | `-- Not done`
open-trading-network | Open Trading Network | OTN | Not Implemented | `-- Not done`
operand | Operand | OP | Not Implemented | `-- Not done`
opescoin | Opescoin | OPES | Not Implemented | `-- Not done`
opus | Opus | OPT | Not Implemented | `-- Not done`
oraclechain | OracleChain | OCT | Not Implemented | `-- Not done`
orbitcoin | Orbitcoin | ORB | Not Implemented | `-- Not done`
origami | Origami | ORI | Not Implemented | `-- Not done`
origintrail | OriginTrail | TRAC | Not Implemented | `-- Not done`
orlycoin | N/A | N/A | N/A | `-- Not done`
ormeus-coin | Ormeus Coin | ORME | Not Implemented | `-- Not done`
osmiumcoin | N/A | N/A | N/A | `-- Not done`
ost | OST | OST | Not Implemented | `-- Not done`
ox-fina | OX Fina | OX | Not Implemented | `-- Not done`
oxycoin | Oxycoin | OXY | Not Implemented | `-- Not done`
oyster | Oyster | PRL | Not Implemented | `-- Not done`
p7coin | N/A | N/A | N/A | `-- Not done`
pabyosi-coin-special | Pabyosi Coin (Special) | PCS | Not Implemented | `-- Not done`
paccoin | PACcoin | $PAC | Not Implemented | `-- Not done`
pakcoin | Pakcoin | PAK | Dynamic | *+ Done*
pandacoin-pnd | Pandacoin | PND | Not Implemented | `-- Not done`
paragon | Paragon | PRG | Not Implemented | `-- Not done`
parallelcoin | ParallelCoin | DUO | Not Implemented | `-- Not done`
pareto-network | Pareto Network | PARETO | Not Implemented | `-- Not done`
parkbyte | ParkByte | PKB | Not Implemented | `-- Not done`
parkgene | Parkgene | GENE | Not Implemented | `-- Not done`
particl | Particl | PART | Dynamic | *+ Done*
pascal-coin | Pascal Coin | PASC | Not Implemented | `-- Not done`
pascal-lite | Pascal Lite | PASL | Not Implemented | `-- Not done`
patientory | Patientory | PTOY | Not Implemented | `-- Not done`
paycoin2 | PayCoin | XPY | Not Implemented | `-- Not done`
paycon | PayCon | CON | Not Implemented | `-- Not done`
payfair | Payfair | PFR | Not Implemented | `-- Not done`
paypeer | N/A | N/A | N/A | `-- Not done`
paypex | Paypex | PAYX | Not Implemented | `-- Not done`
paypie | PayPie | PPP | Not Implemented | `-- Not done`
peculium | Peculium | PCL | Not Implemented | `-- Not done`
peepcoin | PeepCoin | PCN | Dynamic | *+ Done*
peercoin | Peercoin | PPC | Dynamic | *+ Done*
peerplays-ppy | Peerplays | PPY | Not Implemented | `-- Not done`
penta | Penta | PNT | Not Implemented | `-- Not done`
pepe-cash | Pepe Cash | PEPECASH | Not Implemented | `-- Not done`
pesetacoin | Pesetacoin | PTC | Dynamic | *+ Done*
petrodollar | PetroDollar | XPD | Not Implemented | `-- Not done`
phantomx | Phantomx | PNX | Not Implemented | `-- Not done`
phi-token | PHI Token | PHI | Not Implemented | `-- Not done`
philosopher-stones | Philosopher Stones | PHS | Not Implemented | `-- Not done`
phoenixcoin | Phoenixcoin | PXC | Not Implemented | `-- Not done`
phore | Phore | PHR | Dynamic | *+ Done*
photon | Photon | PHO | Dynamic | *+ Done*
piecoin | PIECoin | PIE | Not Implemented | `-- Not done`
piggycoin | Piggycoin | PIGGY | Dynamic | *+ Done*
pillar | Pillar | PLR | Not Implemented | `-- Not done`
pinkcoin | PinkCoin | PINK | Dynamic | *+ Done*
pinkdog | N/A | N/A | N/A | `-- Not done`
pioneer-coin | Pioneer Coin | PCOIN | Not Implemented | `-- Not done`
piplcoin | PiplCoin | PIPL | Not Implemented | `-- Not done`
pirate-blocks | Pirate Blocks | SKULL | Not Implemented | `-- Not done`
pirl | Pirl | PIRL | Not Implemented | `-- Not done`
pivx | PIVX | PIVX | Dynamic | *+ Done*
pixie-coin | Pixie Coin | PXC | Not Implemented | `-- Not done`
pizzacoin | N/A | N/A | N/A | `-- Not done`
plancoin | Plancoin | PLAN | Not Implemented | `-- Not done`
platinumbar | PlatinumBAR | XPTX | Not Implemented | `-- Not done`
playercoin | PlayerCoin | PLACO | Not Implemented | `-- Not done`
playkey | Playkey | PKT | Not Implemented | `-- Not done`
plexcoin | PlexCoin | PLX | Not Implemented | `-- Not done`
plncoin | PLNcoin | PLNC | Not Implemented | `-- Not done`
pluscoin | PlusCoin | PLC | Not Implemented | `-- Not done`
pluton | Pluton | PLU | Not Implemented | `-- Not done`
poa-network | POA Network | POA | Not Implemented | `-- Not done`
poet | Po.et | POE | Not Implemented | `-- Not done`
pokecoin | PokeCoin | POKE | Not Implemented | `-- Not done`
polcoin | Polcoin | PLC | Not Implemented | `-- Not done`
policypal-network | PolicyPal Network | PAL | Not Implemented | `-- Not done`
polis | Polis | POLIS | Not Implemented | `-- Not done`
poly-ai | POLY AI | AI | Not Implemented | `-- Not done`
polybius | Polybius | PLBT | Not Implemented | `-- Not done`
polymath-network | Polymath | POLY | Not Implemented | `-- Not done`
polyswarm | PolySwarm | NCT | Not Implemented | `-- Not done`
ponzicoin | PonziCoin | PONZI | Not Implemented | `-- Not done`
popularcoin | PopularCoin | POP | Not Implemented | `-- Not done`
populous | Populous | PPT | Not Implemented | `-- Not done`
posex | PosEx | PEX | Not Implemented | `-- Not done`
postcoin | PostCoin | POST | Dynamic | *+ Done*
postoken | PoSToken | POS | Not Implemented | `-- Not done`
posw-coin | PoSW Coin | POSW | Not Implemented | `-- Not done`
potcoin | PotCoin | POT | Dynamic | *+ Done*
power-ledger | Power Ledger | POWR | Not Implemented | `-- Not done`
prcoin | PRCoin | PRC | Not Implemented | `-- Not done`
presearch | Presearch | PRE | Not Implemented | `-- Not done`
president-johnson | President Johnson | GARY | Not Implemented | `-- Not done`
president-trump | President Trump | PRES | Not Implemented | `-- Not done`
pressone | PressOne | PRS | Not Implemented | `-- Not done`
primalbase | Primalbase Token | PBT | Not Implemented | `-- Not done`
primas | Primas | PST | Not Implemented | `-- Not done`
prime-xi | Prime-XI | PXI | Dynamic | *+ Done*
primecoin | Primecoin | XPM | Not Implemented | `-- Not done`
primulon | Primulon | PRIMU | Not Implemented | `-- Not done`
printerium | Printerium | PRX | Not Implemented | `-- Not done`
prismchain | PrismChain | PRM | Not Implemented | `-- Not done`
privatix | Privatix | PRIX | Not Implemented | `-- Not done`
prizm | PRIZM | PZM | Not Implemented | `-- Not done`
prochain | ProChain | PRA | Not Implemented | `-- Not done`
procurrency | ProCurrency | PROC | Not Implemented | `-- Not done`
profile-utility-token | Profile Utility Token | PUT | Not Implemented | `-- Not done`
project-decorum | N/A | N/A | N/A | `-- Not done`
project-x | Project-X | NANOX | Not Implemented | `-- Not done`
propy | Propy | PRO | Not Implemented | `-- Not done`
prospectors-gold | N/A | N/A | N/A | `-- Not done`
protean | Protean | PRN | Not Implemented | `-- Not done`
prototanium | Prototanium | PR | Dynamic | *+ Done*
proud-money | PROUD Money | PROUD | Not Implemented | `-- Not done`
proxeus | Proxeus | XES | Not Implemented | `-- Not done`
psilocybin | N/A | N/A | N/A | `-- Not done`
publica | Publica | PBL | Not Implemented | `-- Not done`
pulse | N/A | N/A | N/A | `-- Not done`
pundi-x-old | N/A | N/A | N/A | `-- Not done`
pundi-x | Pundi X | NPXS | Not Implemented | `-- Not done`
pura | Pura | PURA | Dynamic | *+ Done*
pure | Pure | PURE | Not Implemented | `-- Not done`
purevidz | PureVidz | VIDZ | Not Implemented | `-- Not done`
putincoin | PutinCoin | PUT | Dynamic | *+ Done*
px | PX | PX | Not Implemented | `-- Not done`
pylon-network | Pylon Network | PYLNT | Not Implemented | `-- Not done`
qash | QASH | QASH | Not Implemented | `-- Not done`
qbao | Qbao | QBT | Not Implemented | `-- Not done`
qbic | Qbic | QBIC | Not Implemented | `-- Not done`
qlink | QLINK | QLC | Not Implemented | `-- Not done`
qora | Qora | QORA | Not Implemented | `-- Not done`
qtum | Qtum | QTUM | Not Implemented | `-- Not done`
quantstamp | Quantstamp | QSP | Not Implemented | `-- Not done`
quantum-resistant-ledger | Quantum Resistant Ledger | QRL | Not Implemented | `-- Not done`
quantum | Quantum | QAU | Not Implemented | `-- Not done`
quark | Quark | QRK | Dynamic | *+ Done*
quatloo | Quatloo | QTL | Not Implemented | `-- Not done`
quazarcoin | QuazarCoin | QCN | Not Implemented | `-- Not done`
qube | Qube | QUBE | Not Implemented | `-- Not done`
qubitcoin | QubitCoin | Q2C | Not Implemented | `-- Not done`
quebecoin | Quebecoin | QBC | Not Implemented | `-- Not done`
qunqun | QunQun | QUN | Not Implemented | `-- Not done`
quotient | Quotient | XQN | Dynamic | *+ Done*
qvolta | Qvolta | QVT | Not Implemented | `-- Not done`
qwark | Qwark | QWARK | Not Implemented | `-- Not done`
rabbitcoin | RabbitCoin | RBBT | Not Implemented | `-- Not done`
radium | Radium | RADS | Dynamic | *+ Done*
raiden-network-token | Raiden Network Token | RDN | Not Implemented | `-- Not done`
ratecoin | Ratecoin | XRA | Not Implemented | `-- Not done`
ravencoin | Ravencoin | RVN | Not Implemented | `-- Not done`
rawcoin2 | Rawcoin | XRC | Not Implemented | `-- Not done`
rchain | RChain | RHOC | Not Implemented | `-- Not done`
rcoin | Rcoin | RCN | Not Implemented | `-- Not done`
read | Read | READ | Not Implemented | `-- Not done`
real-estate-tokens | N/A | N/A | N/A | `-- Not done`
real | REAL | REAL | Not Implemented | `-- Not done`
realchain | RealChain | RCT | Not Implemented | `-- Not done`
rebl | REBL | REBL | Not Implemented | `-- Not done`
red-pulse | Red Pulse | RPX | Not Implemented | `-- Not done`
redcoin | RedCoin | RED | Not Implemented | `-- Not done`
reddcoin | ReddCoin | RDD | Not Implemented | `-- Not done`
reecoin | ReeCoin | REE | Not Implemented | `-- Not done`
refereum | Refereum | RFR | Not Implemented | `-- Not done`
reftoken | RefToken | REF | Not Implemented | `-- Not done`
regacoin | Regacoin | REGA | Not Implemented | `-- Not done`
regalcoin | Regalcoin | REC | Not Implemented | `-- Not done`
remicoin | N/A | N/A | N/A | `-- Not done`
remme | Remme | REM | Not Implemented | `-- Not done`
renos | Renos | RNS | Not Implemented | `-- Not done`
rentberry | Rentberry | BERRY | Not Implemented | `-- Not done`
republic-protocol | Republic Protocol | REN | Not Implemented | `-- Not done`
request-network | Request Network | REQ | Not Implemented | `-- Not done`
restart-energy-mwat | Restart Energy MWAT | MWAT | Not Implemented | `-- Not done`
revain | Revain | R | Not Implemented | `-- Not done`
revolutionvr | RevolutionVR | RVR | Not Implemented | `-- Not done`
revolvercoin | RevolverCoin | XRE | Not Implemented | `-- Not done`
rhfcoin | N/A | N/A | N/A | `-- Not done`
rialto | Rialto | XRL | Not Implemented | `-- Not done`
richcoin | RichCoin | RICHX | Not Implemented | `-- Not done`
ride-my-car | N/A | N/A | N/A | `-- Not done`
riecoin | Riecoin | RIC | Dynamic | *+ Done*
rimbit | Rimbit | RBT | Not Implemented | `-- Not done`
ripio-credit-network | Ripio Credit Network | RCN | Not Implemented | `-- Not done`
ripple | Ripple | XRP | Dynamic | *+ Done*
ripto-bux | N/A | N/A | N/A | `-- Not done`
rise | Rise | RISE | Not Implemented | `-- Not done`
rivetz | Rivetz | RVT | Not Implemented | `-- Not done`
rlc | iExec RLC | RLC | Not Implemented | `-- Not done`
rock | Rock | RKT | Not Implemented | `-- Not done`
ronpaulcoin | RonPaulCoin | RPC | Not Implemented | `-- Not done`
roofs | Roofs | ROOFS | Not Implemented | `-- Not done`
roulettetoken | RouletteToken | RLT | Not Implemented | `-- Not done`
royal-kingdom-coin | Royal Kingdom Coin | RKC | Not Implemented | `-- Not done`
royalcoin | RoyalCoin | ROYAL | Not Implemented | `-- Not done`
royalties | Royalties | XRY | Not Implemented | `-- Not done`
rsgpcoin | RSGPcoin | RSGP | Not Implemented | `-- Not done`
rubies | Rubies | RBIES | Not Implemented | `-- Not done`
rublebit | N/A | N/A | N/A | `-- Not done`
rublix | Rublix | RBLX | Not Implemented | `-- Not done`
rubycoin | Rubycoin | RBY | Dynamic | *+ Done*
ruff | Ruff | RUFF | Not Implemented | `-- Not done`
runners | Runners | RUNNERS | Not Implemented | `-- Not done`
rupaya | Rupaya | RUPX | Not Implemented | `-- Not done`
rupee | Rupee | RUP | Not Implemented | `-- Not done`
russiacoin | RussiaCoin | RC | Not Implemented | `-- Not done`
russian-mining-coin | Russian Miner Coin | RMC | Not Implemented | `-- Not done`
rustbits | N/A | N/A | N/A | `-- Not done`
sacoin | N/A | N/A | N/A | `-- Not done`
safe-exchange-coin | Safe Exchange Coin | SAFEX | Not Implemented | `-- Not done`
safe-trade-coin | Safe Trade Coin | XSTC | Not Implemented | `-- Not done`
safecoin | N/A | N/A | N/A | `-- Not done`
sagacoin | SagaCoin | SAGA | Not Implemented | `-- Not done`
sakura-bloom | Sakura Bloom | SKB | Not Implemented | `-- Not done`
sakuracoin | Sakuracoin | SKR | Not Implemented | `-- Not done`
salt | SALT | SALT | Not Implemented | `-- Not done`
salus | SaluS | SLS | Not Implemented | `-- Not done`
sand-coin | N/A | N/A | N/A | `-- Not done`
santiment | Santiment Network Token | SAN | Not Implemented | `-- Not done`
sativacoin | Sativacoin | STV | Dynamic | *+ Done*
satoshimadness | SatoshiMadness | MAD | Not Implemented | `-- Not done`
save-and-gain | Save and Gain | SANDG | Not Implemented | `-- Not done`
scorecoin | Scorecoin | SCORE | Not Implemented | `-- Not done`
scryinfo | Scry.info | DDD | Not Implemented | `-- Not done`
secretcoin | SecretCoin | SCRT | Not Implemented | `-- Not done`
securecoin | SecureCoin | SRC | Dynamic | *+ Done*
segwit2x | SegWit2x | B2X | Not Implemented | `-- Not done`
selfiecoin | Selfiecoin | SLFI | Not Implemented | `-- Not done`
selfkey | Selfkey | KEY | Not Implemented | `-- Not done`
selfsell | SelfSell | SSC | Not Implemented | `-- Not done`
senderon | Senderon | SDRN | Not Implemented | `-- Not done`
sense | Sense | SENSE | Not Implemented | `-- Not done`
sentinel-chain | Sentinel Chain | SENC | Not Implemented | `-- Not done`
sentinel | Sentinel | SENT | Not Implemented | `-- Not done`
sequence | Sequence | SEQ | Not Implemented | `-- Not done`
sether | Sether | SETH | Not Implemented | `-- Not done`
sexcoin | Sexcoin | SXC | Dynamic | *+ Done*
shacoin | SHACoin | SHA | Dynamic | *+ Done*
shadow-token | Shadow Token | SHDW | Not Implemented | `-- Not done`
shadowcash | ShadowCash | SDC | Not Implemented | `-- Not done`
sharder | Sharder | SS | Not Implemented | `-- Not done`
sharechain | Sharechain | SSS | Not Implemented | `-- Not done`
sharex | ShareX | SEXC | Not Implemented | `-- Not done`
sharkcoin | Sharkcoin | SAK | Not Implemented | `-- Not done`
sharpe-platform-token | Sharpe Platform Token | SHP | Not Implemented | `-- Not done`
shekel | Shekel | JEW | Not Implemented | `-- Not done`
shellcoin | ShellCoin | SHELL | Not Implemented | `-- Not done`
shield-xsh | SHIELD | XSH | Not Implemented | `-- Not done`
shift | Shift | SHIFT | Not Implemented | `-- Not done`
shilling | Shilling | SH | Dynamic | *+ Done*
shipchain | ShipChain | SHIP | Not Implemented | `-- Not done`
shorty | Shorty | SHORTY | Not Implemented | `-- Not done`
show | Show | SHOW | Not Implemented | `-- Not done`
siacoin | Siacoin | SC | Not Implemented | `-- Not done`
sibcoin | SIBCoin | SIB | Not Implemented | `-- Not done`
sigmacoin | SIGMAcoin | SIGMA | Not Implemented | `-- Not done`
signal-token | Spectiv | SIG | Not Implemented | `-- Not done`
signatum | Signatum | SIGT | Not Implemented | `-- Not done`
singulardtv | SingularDTV | SNGLS | Not Implemented | `-- Not done`
singularitynet | SingularityNET | AGI | Not Implemented | `-- Not done`
sirin-labs-token | SIRIN LABS Token | SRN | Not Implemented | `-- Not done`
sisa | SISA | SISA | Not Implemented | `-- Not done`
sixeleven | SixEleven | 611 | Not Implemented | `-- Not done`
sjwcoin | SJWCoin | SJW | Not Implemented | `-- Not done`
skeincoin | Skeincoin | SKC | Dynamic | *+ Done*
skincoin | SkinCoin | SKIN | Not Implemented | `-- Not done`
skrumble-network | Skrumble Network | SKM | Not Implemented | `-- Not done`
skycoin | Skycoin | SKY | Not Implemented | `-- Not done`
slevin | Slevin | SLEVIN | Not Implemented | `-- Not done`
slimcoin | N/A | N/A | N/A | `-- Not done`
slothcoin | Slothcoin | SLOTH | Not Implemented | `-- Not done`
smartcash | SmartCash | SMART | Not Implemented | `-- Not done`
smartcoin | SmartCoin | SMC | Not Implemented | `-- Not done`
smartlands | Smartlands | SLT | Not Implemented | `-- Not done`
smartmesh | SmartMesh | SMT | Not Implemented | `-- Not done`
smileycoin | N/A | N/A | N/A | *+ Done*
smoke | Smoke | SMOKE | Not Implemented | `-- Not done`
snakeeyes | N/A | N/A | N/A | `-- Not done`
snipcoin | SnipCoin | SNIP | Not Implemented | `-- Not done`
snovio | Snovio | SNOV | Not Implemented | `-- Not done`
soarcoin | Soarcoin | SOAR | Not Implemented | `-- Not done`
social-send | Social Send | SEND | Not Implemented | `-- Not done`
socialcoin-socc | SocialCoin | SOCC | Not Implemented | `-- Not done`
sociall | Sociall | SCL | Not Implemented | `-- Not done`
soilcoin | SOILcoin | SOIL | Not Implemented | `-- Not done`
sojourn | N/A | N/A | N/A | `-- Not done`
solarcoin | SolarCoin | SLR | Dynamic | *+ Done*
solarflarecoin | Solarflarecoin | SFC | Not Implemented | `-- Not done`
solaris | Solaris | XLR | Dynamic | *+ Done*
soma | Soma | SCT | Not Implemented | `-- Not done`
songcoin | SongCoin | SONG | Not Implemented | `-- Not done`
sonm | SONM | SNM | Not Implemented | `-- Not done`
sooncoin | SoonCoin | SOON | Not Implemented | `-- Not done`
sophiatx | SophiaTX | SPHTX | Not Implemented | `-- Not done`
sovereign-hero | Sovereign Hero | HERO | Not Implemented | `-- Not done`
spacechain | SpaceChain | SPC | Not Implemented | `-- Not done`
spacecoin | SpaceCoin | SPACE | Not Implemented | `-- Not done`
spankchain | SpankChain | SPANK | Not Implemented | `-- Not done`
sparks | Sparks | SPK | Not Implemented | `-- Not done`
spectre-dividend | Spectre.ai Dividend Token | SXDT | Not Implemented | `-- Not done`
spectre-utility | Spectre.ai Utility Token | SXUT | Not Implemented | `-- Not done`
spectrecoin | Spectrecoin | XSPEC | Dynamic | *+ Done*
speed-mining-service | Speed Mining Service | SMS | Not Implemented | `-- Not done`
speedcash | SpeedCash | SCS | Not Implemented | `-- Not done`
sphere | Sphere | SPHR | Not Implemented | `-- Not done`
spherepay | N/A | N/A | N/A | `-- Not done`
sphre-air | Sphre AIR | XID | Not Implemented | `-- Not done`
sportscoin | SportsCoin | SPORT | Not Implemented | `-- Not done`
sportyco | SportyCo | SPF | Not Implemented | `-- Not done`
spots | N/A | N/A | N/A | `-- Not done`
spreadcoin | SpreadCoin | SPR | Dynamic | *+ Done*
sprouts | Sprouts | SPRTS | Dynamic | *+ Done*
sproutsextreme | N/A | N/A | N/A | `-- Not done`
srcoin | SRCOIN | SRCOIN | Not Implemented | `-- Not done`
stakenet | StakeNet | XSN | Not Implemented | `-- Not done`
starbase | Starbase | STAR | Not Implemented | `-- Not done`
starcash-network | StarCash Network | STARS | Not Implemented | `-- Not done`
starchain | StarChain | STC | Not Implemented | `-- Not done`
starcointv | StarCoin | KST | Not Implemented | `-- Not done`
starcredits | StarCredits | STRC | Not Implemented | `-- Not done`
starta | Starta | STA | Not Implemented | `-- Not done`
startcoin | Startcoin | START | Not Implemented | `-- Not done`
startercoin | StarterCoin | STAC | Not Implemented | `-- Not done`
status | Status | SNT | Not Implemented | `-- Not done`
stealth | N/A | N/A | N/A | *+ Done*
stealthcoin | N/A | N/A | N/A | `-- Not done`
steem-dollars | Steem Dollars | SBD | Not Implemented | `-- Not done`
steem | Steem | STEEM | Not Implemented | `-- Not done`
stellar | Stellar | XLM | Not Implemented | `-- Not done`
stellite | Stellite | XTL | Not Implemented | `-- Not done`
steneum-coin | Steneum Coin | STN | Not Implemented | `-- Not done`
steps | Steps | STEPS | Not Implemented | `-- Not done`
sterlingcoin | Sterlingcoin | SLG | Dynamic | *+ Done*
stex | STEX | STEX | Not Implemented | `-- Not done`
stipend | Stipend | SPD | Not Implemented | `-- Not done`
stk | STK | STK | Not Implemented | `-- Not done`
stockchain | StockChain | SCC | Not Implemented | `-- Not done`
storiqa | Storiqa | STQ | Not Implemented | `-- Not done`
storj | Storj | STORJ | Not Implemented | `-- Not done`
storjcoin-x | Storjcoin X | SJCX | Not Implemented | `-- Not done`
storm | Storm | STORM | Not Implemented | `-- Not done`
stox | Stox | STX | Not Implemented | `-- Not done`
straks | STRAKS | STAK | Not Implemented | `-- Not done`
stratis | Stratis | STRAT | Dynamic | *+ Done*
streamr-datacoin | Streamr DATAcoin | DATA | Not Implemented | `-- Not done`
strikebitclub | StrikeBitClub | SBC | Not Implemented | `-- Not done`
stronghands | StrongHands | SHND | Not Implemented | `-- Not done`
student-coin | bitJob | STU | Not Implemented | `-- Not done`
substratum | Substratum | SUB | Not Implemented | `-- Not done`
sugar-exchange | Sugar Exchange | SGR | Not Implemented | `-- Not done`
sumokoin | Sumokoin | SUMO | Not Implemented | `-- Not done`
suncontract | SunContract | SNC | Not Implemented | `-- Not done`
super-bitcoin | Super Bitcoin | SBTC | Not Implemented | `-- Not done`
super-game-chain | Super Game Chain | SGCC | Not Implemented | `-- Not done`
supercoin | SuperCoin | SUPER | Dynamic | *+ Done*
superior-coin | Superior Coin | SUP | Not Implemented | `-- Not done`
supernet-unity | SuperNET | UNITY | Not Implemented | `-- Not done`
sureremit | SureRemit | RMT | Not Implemented | `-- Not done`
suretly | Suretly | SUR | Not Implemented | `-- Not done`
swagbucks | N/A | N/A | N/A | *+ Done*
swaptoken | N/A | N/A | N/A | `-- Not done`
swarm-city | Swarm City | SWT | Not Implemented | `-- Not done`
swarm-fund | Swarm | SWM | Not Implemented | `-- Not done`
swftcoin | SwftCoin | SWFTC | Not Implemented | `-- Not done`
swing | Swing | SWING | Dynamic | *+ Done*
swissborg | SwissBorg | CHSB | Not Implemented | `-- Not done`
swisscoin | Swisscoin | SIC | Not Implemented | `-- Not done`
switcheo | Switcheo | SWTH | Not Implemented | `-- Not done`
sydpak | N/A | N/A | N/A | `-- Not done`
syncfab | SyncFab | MFG | Not Implemented | `-- Not done`
syndicate | Syndicate | SYNX | Not Implemented | `-- Not done`
synereo | Synereo | AMP | Not Implemented | `-- Not done`
synergy | Synergy | SNRG | Dynamic | *+ Done*
syscoin | Syscoin | SYS | Not Implemented | `-- Not done`
t-coin | T-coin | TCOIN | Not Implemented | `-- Not done`
taas | TaaS | TAAS | Not Implemented | `-- Not done`
tagcoin | TagCoin | TAG | Not Implemented | `-- Not done`
tagrcoin | TAGRcoin | TAGR | Not Implemented | `-- Not done`
tajcoin | TajCoin | TAJ | Dynamic | *+ Done*
tao | Tao | XTO | Dynamic | *+ Done*
target-coin | Target Coin | TGT | Not Implemented | `-- Not done`
tattoocoin-limited | Tattoocoin (Limited Edition) | TLE | Not Implemented | `-- Not done`
tattoocoin | Tattoocoin (Standard Edition) | TSE | Not Implemented | `-- Not done`
te-food | TE-FOOD | TFD | Not Implemented | `-- Not done`
teamup | N/A | N/A | N/A | `-- Not done`
techshares | TechShares | THS | Not Implemented | `-- Not done`
tekcoin | TEKcoin | TEK | Not Implemented | `-- Not done`
telcoin | Telcoin | TEL | Not Implemented | `-- Not done`
tellurion | Tellurion | TELL | Not Implemented | `-- Not done`
tenx | TenX | PAY | Not Implemented | `-- Not done`
terracoin | Terracoin | TRC | Not Implemented | `-- Not done`
terranova | TerraNova | TER | Not Implemented | `-- Not done`
teslacoilcoin | TeslaCoilCoin | TESLA | Not Implemented | `-- Not done`
teslacoin | TeslaCoin | TES | Dynamic | *+ Done*
tether | Tether | USDT | Not Implemented | `-- Not done`
tezos | Tezos (Pre-Launch) | XTZ | Not Implemented | `-- Not done`
the-champcoin | The ChampCoin | TCC | Not Implemented | `-- Not done`
the-cypherfunks | The Cypherfunks | FUNK | Not Implemented | `-- Not done`
the-vegan-initiative | N/A | N/A | N/A | `-- Not done`
thecreed | N/A | N/A | N/A | `-- Not done`
thekey | THEKEY | TKY | Not Implemented | `-- Not done`
theresa-may-coin | Theresa May Coin | MAY | Not Implemented | `-- Not done`
theta-token | Theta Token | THETA | Not Implemented | `-- Not done`
tidex-token | Tidex Token | TDX | Not Implemented | `-- Not done`
tierion | Tierion | TNT | Not Implemented | `-- Not done`
tiesdb | Ties.DB | TIE | Not Implemented | `-- Not done`
tigercoin | Tigercoin | TGC | Not Implemented | `-- Not done`
tigereum | Tigereum | TIG | Not Implemented | `-- Not done`
time-new-bank | Time New Bank | TNB | Not Implemented | `-- Not done`
timescoin | N/A | N/A | N/A | `-- Not done`
titanium-bar | Titanium BAR | TBAR | Not Implemented | `-- Not done`
titanium-blockchain | Titanium Blockchain | BAR | Not Implemented | `-- Not done`
titcoin | Titcoin | TIT | Not Implemented | `-- Not done`
tittiecoin | TittieCoin | TTC | Not Implemented | `-- Not done`
toacoin | ToaCoin | TOA | Dynamic | *+ Done*
todaycoin | TodayCoin | TODAY | Not Implemented | `-- Not done`
tokenbox | Tokenbox | TBX | Not Implemented | `-- Not done`
tokencard | TokenCard | TKN | Not Implemented | `-- Not done`
tokenclub | TokenClub | TCT | Not Implemented | `-- Not done`
tokendesk | TokenDesk | TDS | Not Implemented | `-- Not done`
tokenomy | Tokenomy | TEN | Not Implemented | `-- Not done`
tokenpay | TokenPay | TPAY | Not Implemented | `-- Not done`
tokenstars | TokenStars | TEAM | Not Implemented | `-- Not done`
tokes | Tokes | TKS | Not Implemented | `-- Not done`
tokugawa | Tokugawa | TOK | Not Implemented | `-- Not done`
tokyo | TOKYO | TOKC | Not Implemented | `-- Not done`
tomochain | TomoChain | TOMO | Not Implemented | `-- Not done`
topaz | N/A | N/A | N/A | `-- Not done`
topchain | TopChain | TOPC | Not Implemented | `-- Not done`
topcoin | TopCoin | TOP | Not Implemented | `-- Not done`
torcoin-tor | N/A | N/A | N/A | `-- Not done`
trackr | CryptoInsight | TKR | Not Implemented | `-- Not done`
tracto | Tracto | TRCT | Not Implemented | `-- Not done`
trade-token | Trade Token | TIO | Not Implemented | `-- Not done`
trakinvest | TrakInvest | TRAK | Not Implemented | `-- Not done`
transcodium | Transcodium | TNS | Not Implemented | `-- Not done`
transfercoin | TransferCoin | TX | Dynamic | *+ Done*
travelflex | Travelflex | TRF | Not Implemented | `-- Not done`
trezarcoin | TrezarCoin | TZC | Dynamic | *+ Done*
triaconta | Triaconta | TRIA | Not Implemented | `-- Not done`
triangles | Triangles | TRI | Not Implemented | `-- Not done`
trickycoin | N/A | N/A | N/A | `-- Not done`
trident | Trident Group | TRDT | Not Implemented | `-- Not done`
triggers | Triggers | TRIG | Not Implemented | `-- Not done`
trinity-network-credit | Trinity Network Credit | TNC | Not Implemented | `-- Not done`
tripio | Tripio | TRIO | Not Implemented | `-- Not done`
tristar-coin | Tristar Coin | TSTR | Not Implemented | `-- Not done`
trollcoin | Trollcoin | TROLL | Dynamic | *+ Done*
tron | TRON | TRX | Not Implemented | `-- Not done`
truckcoin | Truckcoin | TRK | Not Implemented | `-- Not done`
true-chain | True Chain | TRUE | Not Implemented | `-- Not done`
true-usd | N/A | N/A | N/A | `-- Not done`
trueflip | TrueFlip | TFL | Not Implemented | `-- Not done`
trueusd | TrueUSD | TUSD | Not Implemented | `-- Not done`
trumpcoin | TrumpCoin | TRUMP | Dynamic | *+ Done*
trust | WeTrust | TRST | Not Implemented | `-- Not done`
trustnote | TrustNote | TTT | Not Implemented | `-- Not done`
trustplus | TrustPlus | TRUST | Dynamic | *+ Done*
turbocoin | TurboCoin | TURBO | Not Implemented | `-- Not done`
tychocoin | N/A | N/A | N/A | `-- Not done`
u-network | U Network | UUU | Not Implemented | `-- Not done`
ubiq | Ubiq | UBQ | Not Implemented | `-- Not done`
ucash | U.CASH | UCASH | Not Implemented | `-- Not done`
ucom | United Crypto Community | UCOM | Not Implemented | `-- Not done`
ug-token | N/A | N/A | N/A | `-- Not done`
ugain | UGAIN | GAIN | Not Implemented | `-- Not done`
ugchain | ugChain | UGC | Not Implemented | `-- Not done`
ulatech | Ulatech | ULA | Not Implemented | `-- Not done`
ultimate-secure-cash | Ultimate Secure Cash | USC | Not Implemented | `-- Not done`
ultracoin | UltraCoin | UTC | Not Implemented | `-- Not done`
unbreakablecoin | UnbreakableCoin | UNB | Not Implemented | `-- Not done`
uncoin | UNCoin | UNC | Not Implemented | `-- Not done`
unicoin | UniCoin | UNIC | Not Implemented | `-- Not done`
uniform-fiscal-object | Uniform Fiscal Object | UFO | Not Implemented | `-- Not done`
unify | Unify | UNIFY | Not Implemented | `-- Not done`
unikoin-gold | Unikoin Gold | UKG | Not Implemented | `-- Not done`
united-bitcoin | United Bitcoin | UBTC | Not Implemented | `-- Not done`
unitus | Unitus | UIS | Not Implemented | `-- Not done`
unity-ingot | N/A | N/A | N/A | `-- Not done`
universa | Universa | UTNP | Not Implemented | `-- Not done`
universal-currency | Universal Currency | UNIT | Not Implemented | `-- Not done`
universalroyalcoin | UniversalRoyalCoin | UNRC | Not Implemented | `-- Not done`
universe | Universe | UNI | Dynamic | *+ Done*
unlimitedip | UnlimitedIP | UIP | Not Implemented | `-- Not done`
unobtanium | Unobtanium | UNO | Dynamic | *+ Done*
unrealcoin | N/A | N/A | N/A | `-- Not done`
upfiring | Upfiring | UFR | Not Implemented | `-- Not done`
uptoken | UpToken | UP | Not Implemented | `-- Not done`
uquid-coin | Uquid Coin | UQC | Not Implemented | `-- Not done`
ur | UR | UR | Not Implemented | `-- Not done`
uro | Uro | URO | Not Implemented | `-- Not done`
useless-ethereum-token | Useless Ethereum Token | UET | Not Implemented | `-- Not done`
utrum | Utrum | OOT | Not Implemented | `-- Not done`
utrust | UTRUST | UTK | Not Implemented | `-- Not done`
uttoken | United Traders Token | UTT | Not Implemented | `-- Not done`
valorbit | N/A | N/A | N/A | `-- Not done`
valuechain | ValueChain | VLC | Not Implemented | `-- Not done`
vaperscoin | VapersCoin | VPRC | Not Implemented | `-- Not done`
vault-coin | Vault Coin | VLTC | Not Implemented | `-- Not done`
vcash | Vcash | XVC | Not Implemented | `-- Not done`
vechain | VeChain | VEN | Not Implemented | `-- Not done`
vector | VectorAI | VEC2 | Not Implemented | `-- Not done`
veltor | Veltor | VLT | Not Implemented | `-- Not done`
verge | Verge | XVG | Not Implemented | `-- Not done`
vericoin | VeriCoin | VRC | Dynamic | *+ Done*
verify | Verify | CRED | Not Implemented | `-- Not done`
verime | VeriME | VME | Not Implemented | `-- Not done`
veritaseum | Veritaseum | VERI | Not Implemented | `-- Not done`
veriumreserve | VeriumReserve | VRM | Not Implemented | `-- Not done`
veros | Veros | VRS | Not Implemented | `-- Not done`
version | Version | V | Not Implemented | `-- Not done`
vertcoin | Vertcoin | VTC | Dynamic | *+ Done*
vezt | Vezt | VZT | Not Implemented | `-- Not done`
viacoin | Viacoin | VIA | Dynamic | *+ Done*
vibe | VIBE | VIBE | Not Implemented | `-- Not done`
viberate | Viberate | VIB | Not Implemented | `-- Not done`
vice-industry-token | Vice Industry Token | VIT | Not Implemented | `-- Not done`
vip-tokens | N/A | N/A | N/A | `-- Not done`
vipstar-coin | Vipstar Coin | VIPS | Not Implemented | `-- Not done`
virta-unique-coin | Virta Unique Coin | VUC | Not Implemented | `-- Not done`
virtacoin | Virtacoin | VTA | Not Implemented | `-- Not done`
virtacoinplus | N/A | N/A | N/A | *+ Done*
virtualcoin | N/A | N/A | N/A | `-- Not done`
visio | Visio | VISIO | Dynamic | *+ Done*
viuly | Viuly | VIU | Not Implemented | `-- Not done`
vivo | VIVO | VIVO | Dynamic | *+ Done*
voisecom | Voise | VOISE | Not Implemented | `-- Not done`
votecoin | VoteCoin | VOT | Not Implemented | `-- Not done`
voyacoin | N/A | N/A | N/A | `-- Not done`
vpncoin | N/A | N/A | N/A | *+ Done*
vslice | vSlice | VSL | Not Implemented | `-- Not done`
vsync-vsx | Vsync | VSX | Not Implemented | `-- Not done`
vtorrent | vTorrent | VTR | Not Implemented | `-- Not done`
vulcano | Vulcano | VULC | Not Implemented | `-- Not done`
w3coin | W3Coin | W3C | Not Implemented | `-- Not done`
wa-space | WA Space | WA | Not Implemented | `-- Not done`
wabi | WaBi | WABI | Not Implemented | `-- Not done`
wagerr | Wagerr | WGR | Dynamic | *+ Done*
waltonchain | Waltonchain | WTC | Not Implemented | `-- Not done`
wanchain | Wanchain | WAN | Not Implemented | `-- Not done`
wandx | WandX | WAND | Not Implemented | `-- Not done`
warp | N/A | N/A | N/A | `-- Not done`
waves-community-token | Waves Community Token | WCT | Not Implemented | `-- Not done`
waves | Waves | WAVES | Not Implemented | `-- Not done`
wavesgo | WavesGo | WGO | Not Implemented | `-- Not done`
wawllet | WCOIN | WIN | Not Implemented | `-- Not done`
wax | WAX | WAX | Not Implemented | `-- Not done`
wayguide | N/A | N/A | N/A | `-- Not done`
waykichain | WaykiChain | WICC | Not Implemented | `-- Not done`
wearesatoshi | WeAreSatoshi | WSX | Dynamic | *+ Done*
wepower | WePower | WPR | Not Implemented | `-- Not done`
weth | WETH | WETH | Not Implemented | `-- Not done`
whalecoin | WhaleCoin | WHL | Not Implemented | `-- Not done`
whitecoin | WhiteCoin | XWC | Not Implemented | `-- Not done`
wi-coin | Wi Coin | WIC | Not Implemented | `-- Not done`
wild-beast-block | Wild Beast Block | WBB | Not Implemented | `-- Not done`
wild-crypto | Wild Crypto | WILD | Not Implemented | `-- Not done`
win-coin | WINCOIN | WC | Not Implemented | `-- Not done`
wings | Wings | WINGS | Not Implemented | `-- Not done`
wink | Wink | WINK | Not Implemented | `-- Not done`
women | WomenCoin | WOMEN | Not Implemented | `-- Not done`
woodcoin | Woodcoin | LOG | Not Implemented | `-- Not done`
worldcoin | WorldCoin | WDC | Not Implemented | `-- Not done`
worldcore | Worldcore | WRC | Not Implemented | `-- Not done`
wowcoin | N/A | N/A | N/A | `-- Not done`
x-coin | X-Coin | XCO | Not Implemented | `-- Not done`
x2 | X2 | X2 | Not Implemented | `-- Not done`
xaucoin | N/A | N/A | N/A | `-- Not done`
xaurum | Xaurum | XAUR | Not Implemented | `-- Not done`
xenon | Xenon | XNN | Not Implemented | `-- Not done`
xgox | XGOX | XGOX | Not Implemented | `-- Not done`
xinfin-network | XinFin Network | XDCE | Not Implemented | `-- Not done`
xios | Xios | XIOS | Not Implemented | `-- Not done`
xonecoin | N/A | N/A | N/A | `-- Not done`
xpa | XPA | XPA | Not Implemented | `-- Not done`
xtd-coin | XTD Coin | XTD | Not Implemented | `-- Not done`
xtrabytes | XTRABYTES | XBY | Not Implemented | `-- Not done`
yacoin | N/A | N/A | N/A | `-- Not done`
yashcoin | N/A | N/A | N/A | `-- Not done`
yee | YEE | YEE | Not Implemented | `-- Not done`
yenten | YENTEN | YTN | Not Implemented | `-- Not done`
yocoin | Yocoin | YOC | Not Implemented | `-- Not done`
yoyow | YOYOW | YOYOW | Not Implemented | `-- Not done`
zap | Zap | ZAP | Not Implemented | `-- Not done`
zayedcoin | Zayedcoin | ZYD | Not Implemented | `-- Not done`
zcash-gold | Zlancer | ZCG | Not Implemented | `-- Not done`
zcash | Zcash | ZEC | Not Implemented | `-- Not done`
zclassic | ZClassic | ZCL | Not Implemented | `-- Not done`
zcoin | ZCoin | XZC | Dynamic | *+ Done*
zebi | Zebi | ZCO | Not Implemented | `-- Not done`
zeepin | Zeepin | ZPT | Not Implemented | `-- Not done`
zeitcoin | Zeitcoin | ZEIT | Dynamic | *+ Done*
zencash | ZenCash | ZEN | Not Implemented | `-- Not done`
zengold | ZenGold | ZENGOLD | Not Implemented | `-- Not done`
zennies | Zennies | ZENI | Not Implemented | `-- Not done`
zephyr | Zephyr | ZEPH | Not Implemented | `-- Not done`
zero | Zero | ZER | Not Implemented | `-- Not done`
zetacoin | Zetacoin | ZET | Dynamic | *+ Done*
zetamicron | ZetaMicron | ZMC | Not Implemented | `-- Not done`
zeusshield | Zeusshield | ZSC | Not Implemented | `-- Not done`
zilbercoin | Zilbercoin | ZBC | Not Implemented | `-- Not done`
zilla | Zilla | ZLA | Not Implemented | `-- Not done`
zilliqa | Zilliqa | ZIL | Not Implemented | `-- Not done`
zippie | Zippie | ZIPT | Not Implemented | `-- Not done`
zoin | Zoin | ZOI | Dynamic | *+ Done*
zonecoin | N/A | N/A | N/A | `-- Not done`
zozocoin | ZoZoCoin | ZZC | Not Implemented | `-- Not done`
zrcoin | ZrCoin | ZRC | Not Implemented | `-- Not done`
zsecoin | ZSEcoin | ZSE | Not Implemented | `-- Not done`
zurcoin | Zurcoin | ZUR | Not Implemented | `-- Not done`
