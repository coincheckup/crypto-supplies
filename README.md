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

*Total*: 1589 -- *Implemented*: 179 -- *To do*: 1410

ID | Status
0x | `-- Not done`
1337coin | `-- Not done`
1world | `-- Not done`
2give | *+ Done*
300-token | `-- Not done`
42-coin | *+ Done*
808coin | `-- Not done`
8bit | *+ Done*
abjcoin | `-- Not done`
abncoin | `-- Not done`
accelerator-network | `-- Not done`
acchain | `-- Not done`
ace | `-- Not done`
aces | `-- Not done`
achain | `-- Not done`
acoin | `-- Not done`
acute-angle-cloud | `-- Not done`
adbank | `-- Not done`
adcoin | `-- Not done`
adhive | *+ Done*
adshares | `-- Not done`
adtoken | `-- Not done`
advanced-internet-blocks | `-- Not done`
adx-net | `-- Not done`
adzcoin | `-- Not done`
aelf | `-- Not done`
aeon | `-- Not done`
aerium | `-- Not done`
aeron | `-- Not done`
aeternity | `-- Not done`
agrello-delta | `-- Not done`
aichain | `-- Not done`
aidcoin | `-- Not done`
aidoc | `-- Not done`
aidos-kuneen | `-- Not done`
aigang | `-- Not done`
aion | `-- Not done`
airswap | `-- Not done`
airtoken | `-- Not done`
akuya-coin | `-- Not done`
alis | `-- Not done`
all-sports | `-- Not done`
allion | `-- Not done`
allsafe | `-- Not done`
alpacoin | `-- Not done`
alphabitcoinfund | `-- Not done`
alphacat | `-- Not done`
alqo | `-- Not done`
altcoin-alt | `-- Not done`
altcommunity-coin | `-- Not done`
amber | `-- Not done`
ambercoin | `-- Not done`
amlt | `-- Not done`
ammo-reloaded | `-- Not done`
amsterdamcoin | `-- Not done`
anarchistsprime | `-- Not done`
animation-vision-cash | `-- Not done`
animecoin | `-- Not done`
anoncoin | *+ Done*
anryze | `-- Not done`
antibitcoin | `-- Not done`
antilitecoin | `-- Not done`
antimatter | `-- Not done`
appcoins | `-- Not done`
apx | `-- Not done`
aquariuscoin | *+ Done*
aragon | `-- Not done`
arbit | `-- Not done`
arbitragect | `-- Not done`
arcblock | `-- Not done`
arcticcoin | `-- Not done`
ardor | `-- Not done`
argentum | *+ Done*
argus | `-- Not done`
aricoin | `-- Not done`
ark | `-- Not done`
artbyte | `-- Not done`
artex-coin | `-- Not done`
asch | `-- Not done`
aseancoin | `-- Not done`
asiacoin | *+ Done*
asiadigicoin | `-- Not done`
astro | `-- Not done`
atbcoin | `-- Not done`
atlant | `-- Not done`
atmcoin | `-- Not done`
atmos | *+ Done*
atn | `-- Not done`
atomic-coin | `-- Not done`
attention-token-of-media | `-- Not done`
audiocoin | *+ Done*
augur | `-- Not done`
aurora-dao | `-- Not done`
auroracoin | `-- Not done`
aurumcoin | `-- Not done`
authorship | `-- Not done`
autonio | `-- Not done`
avatarcoin | `-- Not done`
aventus | `-- Not done`
avoncoin | `-- Not done`
aware | `-- Not done`
axiom | `-- Not done`
axpire | `-- Not done`
b2bx | `-- Not done`
b3coin | *+ Done*
babb | `-- Not done`
banca | `-- Not done`
bancor | `-- Not done`
bankcoin | `-- Not done`
bankex | `-- Not done`
banyan-network | `-- Not done`
basic-attention-token | `-- Not done`
bastonet | `-- Not done`
bata | *+ Done*
batcoin | `-- Not done`
bean-cash | `-- Not done`
beatcoin | `-- Not done`
bee-token | `-- Not done`
belacoin | *+ Done*
benjirolls | `-- Not done`
berncash | `-- Not done`
bestchain | `-- Not done`
betacoin | `-- Not done`
bezop | `-- Not done`
biblepay | `-- Not done`
bibox-token | `-- Not done`
bigone-token | `-- Not done`
bigup | `-- Not done`
billarycoin | `-- Not done`
billionaire-token | `-- Not done`
binance-coin | `-- Not done`
biobar | `-- Not done`
biocoin | `-- Not done`
bios-crypto | `-- Not done`
bipcoin | `-- Not done`
birds | `-- Not done`
bismuth | `-- Not done`
bit20 | `-- Not done`
bitair | `-- Not done`
bitalphacoin | `-- Not done`
bitasean | `-- Not done`
bitbar | `-- Not done`
bitbase | `-- Not done`
bitbay | *+ Done*
bitboost | `-- Not done`
bitbtc | `-- Not done`
bitcedi | `-- Not done`
bitclave | `-- Not done`
bitcloud | *+ Done*
bitcny | `-- Not done`
bitcoal | `-- Not done`
bitcoin-21 | `-- Not done`
bitcoin-atom | `-- Not done`
bitcoin-cash | `-- Not done`
bitcoin-diamond | `-- Not done`
bitcoin-god | `-- Not done`
bitcoin-gold | `-- Not done`
bitcoin-green | `-- Not done`
bitcoin-planet | `-- Not done`
bitcoin-plus | `-- Not done`
bitcoin-private | `-- Not done`
bitcoin-red | `-- Not done`
bitcoin-scrypt | `-- Not done`
bitcoin | *+ Done*
bitcoindark | `-- Not done`
bitcoinfast | `-- Not done`
bitcoinx | `-- Not done`
bitcoinz | `-- Not done`
bitconnect | `-- Not done`
bitcore | *+ Done*
bitcrystals | `-- Not done`
bitcurrency | *+ Done*
bitdeal | `-- Not done`
bitdegree | `-- Not done`
bitdice | `-- Not done`
biteur | `-- Not done`
bitfid | `-- Not done`
bitgem | *+ Done*
bitgold | `-- Not done`
bitmark | *+ Done*
bitok | `-- Not done`
bitpark-coin | `-- Not done`
bitquark | `-- Not done`
bitqy | `-- Not done`
bitradio | *+ Done*
bitrent | `-- Not done`
bitsend | *+ Done*
bitserial | `-- Not done`
bitshares-music | `-- Not done`
bitshares | *+ Done*
bitsilver | `-- Not done`
bitsoar | `-- Not done`
bitstar | `-- Not done`
bitswift | *+ Done*
bittokens | `-- Not done`
bitusd | `-- Not done`
bitvolt | `-- Not done`
bitwhite | `-- Not done`
bitz | `-- Not done`
bitzeny | `-- Not done`
blackcoin | *+ Done*
blackmoon | `-- Not done`
blackstar | `-- Not done`
blakecoin | `-- Not done`
blakestar | `-- Not done`
blazecoin | `-- Not done`
blazercoin | `-- Not done`
blitzcash | *+ Done*
block-array | `-- Not done`
blockcat | `-- Not done`
blockcdn | `-- Not done`
blockmason | `-- Not done`
blocknet | *+ Done*
blockpay | `-- Not done`
blockpool | `-- Not done`
blockport | `-- Not done`
blocktix | `-- Not done`
blockv | `-- Not done`
bloomtoken | `-- Not done`
blox | `-- Not done`
bluecoin | `-- Not done`
bluzelle | `-- Not done`
bnktothefuture | `-- Not done`
bnrtxcoin | `-- Not done`
bodhi | `-- Not done`
bolenum | `-- Not done`
bolivarcoin | *+ Done*
bonpay | `-- Not done`
boolberry | `-- Not done`
boostcoin | `-- Not done`
boscoin | `-- Not done`
bottos | `-- Not done`
bounty0x | `-- Not done`
bowhead | `-- Not done`
bowscoin | `-- Not done`
braincoin | `-- Not done`
brat | `-- Not done`
bread | `-- Not done`
breakout-stake | `-- Not done`
breakout | `-- Not done`
briacoin | `-- Not done`
bridgecoin | `-- Not done`
britcoin | `-- Not done`
bt2-cst | `-- Not done`
btcmoon | `-- Not done`
btctalkcoin | *+ Done*
bubble | `-- Not done`
bullion | *+ Done*
bulwark | *+ Done*
bumbacoin | `-- Not done`
bunnycoin | `-- Not done`
burst | `-- Not done`
buzzcoin | `-- Not done`
byteball | `-- Not done`
bytecent | *+ Done*
bytecoin-bcn | `-- Not done`
bytom | `-- Not done`
c-bit | `-- Not done`
c20 | `-- Not done`
cabbage | `-- Not done`
cachecoin | *+ Done*
californium | `-- Not done`
caliphcoin | `-- Not done`
campuscoin | `-- Not done`
canada-ecoin | `-- Not done`
candy | `-- Not done`
cannabiscoin | *+ Done*
cannacoin | *+ Done*
cannation | `-- Not done`
canyacoin | `-- Not done`
cappasity | `-- Not done`
capricoin | *+ Done*
carboncoin | *+ Done*
cardano | *+ Done*
cargox | `-- Not done`
cartaxi-token | `-- Not done`
carvertical | `-- Not done`
cashaa | `-- Not done`
cashcoin | `-- Not done`
cashme | `-- Not done`
casinocoin | `-- Not done`
catcoin | `-- Not done`
ccminer | `-- Not done`
ccore | `-- Not done`
centra | `-- Not done`
centrality | `-- Not done`
centurion | `-- Not done`
cfun | `-- Not done`
chaincoin | `-- Not done`
chainlink | `-- Not done`
chancoin | `-- Not done`
change | `-- Not done`
chatcoin | `-- Not done`
cheapcoin | `-- Not done`
chesscoin | `-- Not done`
chips | `-- Not done`
chronobank | `-- Not done`
chronologic | `-- Not done`
chronos | `-- Not done`
cindicator | `-- Not done`
circuits-of-value | `-- Not done`
civic | `-- Not done`
clams | `-- Not done`
clearpoll | `-- Not done`
cloakcoin | `-- Not done`
cloud | `-- Not done`
clubcoin | *+ Done*
cobinhood | `-- Not done`
coexistcoin | `-- Not done`
coffeecoin | `-- Not done`
cofound-it | `-- Not done`
coimatic-2 | `-- Not done`
coimatic-3 | `-- Not done`
coin | `-- Not done`
coin2-1 | `-- Not done`
coinfi | `-- Not done`
coinlancer | `-- Not done`
coinmeet | `-- Not done`
coinonat | `-- Not done`
coinonatx | `-- Not done`
coinpoker | `-- Not done`
colossuscoin-v2 | `-- Not done`
colossusxt | *+ Done*
comet | `-- Not done`
commodity-ad-network | `-- Not done`
compcoin | `-- Not done`
compucoin | `-- Not done`
comsa-eth | `-- Not done`
comsa-xem | `-- Not done`
concoin | `-- Not done`
condensate | `-- Not done`
confido | `-- Not done`
content-and-ad-network | `-- Not done`
copico | `-- Not done`
copytrack | `-- Not done`
corion | `-- Not done`
coss | `-- Not done`
counterparty | `-- Not done`
coupecoin | `-- Not done`
covesting | `-- Not done`
cpchain | `-- Not done`
crave | `-- Not done`
cream | `-- Not done`
creatio | `-- Not done`
creativecoin | *+ Done*
credence-coin | `-- Not done`
creditbit | `-- Not done`
credits | `-- Not done`
credo | `-- Not done`
crevacoin | `-- Not done`
crowdcoin | `-- Not done`
crown | *+ Done*
crtcoin | `-- Not done`
cryptcoin | *+ Done*
crypterium | `-- Not done`
crypto | `-- Not done`
cryptocarbon | `-- Not done`
cryptoescudo | `-- Not done`
cryptoforecast | `-- Not done`
cryptojacks | `-- Not done`
cryptonex | `-- Not done`
cryptonite | `-- Not done`
cryptopay | `-- Not done`
cryptopiafeeshares | `-- Not done`
cryptoping | `-- Not done`
cryptoworldx-token | `-- Not done`
crystal-clear | `-- Not done`
cthulhu-offerings | `-- Not done`
cube | `-- Not done`
cubits | `-- Not done`
curecoin | *+ Done*
cvcoin | `-- Not done`
cybercoin | `-- Not done`
cybermiles | `-- Not done`
cycling-coin | `-- Not done`
cyder | `-- Not done`
cypher | `-- Not done`
dadi | `-- Not done`
dai | `-- Not done`
dalecoin | `-- Not done`
dao-casino | `-- Not done`
dappster | `-- Not done`
darcrus | `-- Not done`
darklisk | `-- Not done`
darsek | `-- Not done`
dash | *+ Done*
dashcoin | `-- Not done`
dashs | `-- Not done`
data | `-- Not done`
databits | `-- Not done`
datacoin | *+ Done*
datawallet | `-- Not done`
datum | `-- Not done`
datx | `-- Not done`
davorcoin | `-- Not done`
daxxcoin | `-- Not done`
dcorp | `-- Not done`
debitcoin | `-- Not done`
debitum-network | `-- Not done`
decent-bet | `-- Not done`
decent | `-- Not done`
decentraland | `-- Not done`
decision-token | `-- Not done`
decred | `-- Not done`
deepbrain-chain | `-- Not done`
deeponion | `-- Not done`
delphy | `-- Not done`
deltacredits | `-- Not done`
denarius-dnr | `-- Not done`
dent | `-- Not done`
dentacoin | `-- Not done`
desire | `-- Not done`
destiny | `-- Not done`
dether | `-- Not done`
deuscoin | `-- Not done`
deutsche-emark | `-- Not done`
devery | `-- Not done`
dew | `-- Not done`
dfscoin | `-- Not done`
diamond | *+ Done*
dibcoin | `-- Not done`
digibyte | *+ Done*
digicube | `-- Not done`
digipulse | `-- Not done`
digital-bullion-gold | `-- Not done`
digital-credits | `-- Not done`
digital-developers-fund | `-- Not done`
digital-money-bits | `-- Not done`
digital-rupees | `-- Not done`
digitalcoin | *+ Done*
digitalnote | `-- Not done`
digitalprice | `-- Not done`
digixdao | `-- Not done`
dimcoin | `-- Not done`
dimecoin | *+ Done*
dinastycoin | `-- Not done`
district0x | `-- Not done`
divi | `-- Not done`
dix-asset | `-- Not done`
dmarket | `-- Not done`
dnotes | *+ Done*
dogecoin | `-- Not done`
dollar-online | `-- Not done`
dollarcoin | `-- Not done`
domraider | `-- Not done`
donationcoin | `-- Not done`
dopecoin | *+ Done*
dotcoin | *+ Done*
doubloon | `-- Not done`
dovu | `-- Not done`
draftcoin | `-- Not done`
dragon-coins | `-- Not done`
dragonchain | `-- Not done`
dreamcoin | `-- Not done`
dropil | `-- Not done`
droxne | `-- Not done`
drp-utility | `-- Not done`
dubaicoin-dbix | `-- Not done`
dubstep | `-- Not done`
dutch-coin | `-- Not done`
dynamic-trading-rights | `-- Not done`
dynamic | `-- Not done`
dynamiccoin | `-- Not done`
e-coin | `-- Not done`
e-dinar-coin | `-- Not done`
e-gulden | *+ Done*
ea-coin | `-- Not done`
eaglecoin | `-- Not done`
earthcoin | *+ Done*
ebitcoin-cash | `-- Not done`
ebittree-coin | `-- Not done`
eboostcoin | `-- Not done`
ebtcnew | `-- Not done`
eccoin | `-- Not done`
echolink | `-- Not done`
ecobit | `-- Not done`
ecocoin | `-- Not done`
edgeless | `-- Not done`
edrcoin | `-- Not done`
educare | `-- Not done`
education-ecosystem | `-- Not done`
eggcoin | `-- Not done`
ego | `-- Not done`
egold | `-- Not done`
eidoo | `-- Not done`
einsteinium | *+ Done*
elacoin | `-- Not done`
elastic | `-- Not done`
elastos | `-- Not done`
elcoin-el | `-- Not done`
electra | `-- Not done`
electrifyasia | `-- Not done`
electroneum | `-- Not done`
electronic-pk-chain | `-- Not done`
elementrem | `-- Not done`
elixir | `-- Not done`
ellaism | `-- Not done`
eltcoin | `-- Not done`
elysium | `-- Not done`
embers | `-- Not done`
emerald | *+ Done*
emercoin | `-- Not done`
emphy | `-- Not done`
encrypgen | `-- Not done`
encryptotel-eth | `-- Not done`
encryptotel | `-- Not done`
energo | `-- Not done`
energycoin | *+ Done*
enigma-project | `-- Not done`
enigma | `-- Not done`
enjin-coin | `-- Not done`
entcash | `-- Not done`
envion | `-- Not done`
eos | `-- Not done`
eot-token | `-- Not done`
equal | `-- Not done`
equitrader | *+ Done*
erc20 | `-- Not done`
ergo | `-- Not done`
eroscoin | `-- Not done`
eryllium | *+ Done*
escoro | `-- Not done`
espers | `-- Not done`
eternity | *+ Done*
ethbet | `-- Not done`
ethbits | `-- Not done`
etherecash | `-- Not done`
ethereum-blue | `-- Not done`
ethereum-classic | `-- Not done`
ethereum-dark | `-- Not done`
ethereum-gold | `-- Not done`
ethereum-lite | `-- Not done`
ethereum-movie-venture | `-- Not done`
ethereum | *+ Done*
ethereumcash | `-- Not done`
etheriya | `-- Not done`
etheroll | `-- Not done`
etherparty | `-- Not done`
ethersportz | `-- Not done`
ethlend | `-- Not done`
ethorse | `-- Not done`
ethos | `-- Not done`
eurocoin | `-- Not done`
europecoin | *+ Done*
eventchain | `-- Not done`
everex | `-- Not done`
evergreencoin | *+ Done*
everus | `-- Not done`
evil-coin | `-- Not done`
evotion | `-- Not done`
exchange-union | `-- Not done`
exchangen | `-- Not done`
exclusivecoin | `-- Not done`
expanse | `-- Not done`
experience-points | `-- Not done`
experty | `-- Not done`
exrnchain | `-- Not done`
eztoken | `-- Not done`
factom | `-- Not done`
faircoin | `-- Not done`
fairgame | `-- Not done`
fantomcoin | `-- Not done`
fapcoin | `-- Not done`
farad | `-- Not done`
fargocoin | `-- Not done`
farstcoin | `-- Not done`
fastcoin | `-- Not done`
fazzcoin | `-- Not done`
feathercoin | *+ Done*
fedoracoin | `-- Not done`
fidentiax | `-- Not done`
filecoin | `-- Not done`
fimkrypto | `-- Not done`
fincoin | `-- Not done`
firecoin | `-- Not done`
first-bitcoin-capital | `-- Not done`
first-bitcoin | `-- Not done`
firstblood | `-- Not done`
firstcoin | `-- Not done`
flappycoin | `-- Not done`
flash | `-- Not done`
flaxscript | *+ Done*
flik | `-- Not done`
flixxo | `-- Not done`
florincoin | `-- Not done`
fluttercoin | `-- Not done`
fluz-fluz | `-- Not done`
flycoin | `-- Not done`
flypme | `-- Not done`
foldingcoin | `-- Not done`
fonziecoin | `-- Not done`
footy-cash | `-- Not done`
force | `-- Not done`
fortuna | `-- Not done`
francs | `-- Not done`
franko | `-- Not done`
frankywillcoin | `-- Not done`
freicoin | `-- Not done`
fucktoken | `-- Not done`
fuelcoin | *+ Done*
fujicoin | `-- Not done`
fujinto | `-- Not done`
funcoin | `-- Not done`
fundyourselfnow | `-- Not done`
funfair | `-- Not done`
fusion | `-- Not done`
futcoin | `-- Not done`
futurexe | `-- Not done`
fuzzballs | `-- Not done`
gaia | `-- Not done`
galactrum | `-- Not done`
gambit | *+ Done*
game | `-- Not done`
gamechain | `-- Not done`
gamecredits | `-- Not done`
gameleaguecoin | `-- Not done`
gameunits | `-- Not done`
ganjacoin | `-- Not done`
gapcoin | *+ Done*
garlicoin | `-- Not done`
gas | `-- Not done`
gatcoin | `-- Not done`
gaycoin | `-- Not done`
gbcgoldcoin | `-- Not done`
gcn-coin | `-- Not done`
geertcoin | `-- Not done`
gems-protocol | `-- Not done`
genaro-network | `-- Not done`
genesis-vision | `-- Not done`
genstake | `-- Not done`
geocoin | *+ Done*
get-protocol | `-- Not done`
geysercoin | `-- Not done`
gifto | `-- Not done`
giga-watt-token | `-- Not done`
gladius-token | `-- Not done`
glasscoin | `-- Not done`
global-cryptocurrency | `-- Not done`
global-currency-reserve | `-- Not done`
global-jobcoin | `-- Not done`
global-tour-coin | `-- Not done`
globalboost-y | `-- Not done`
globalcoin | *+ Done*
globaltoken | `-- Not done`
gnosis-gno | `-- Not done`
gobyte | `-- Not done`
gold-pressed-latinum | `-- Not done`
gold-reward-token | `-- Not done`
goldblocks | `-- Not done`
goldcoin | *+ Done*
goldmaxcoin | `-- Not done`
goldmint | `-- Not done`
goldpieces | `-- Not done`
goldreserve | `-- Not done`
golem-network-tokens | `-- Not done`
golfcoin | `-- Not done`
golos-gold | `-- Not done`
golos | `-- Not done`
goodomy | `-- Not done`
gpu-coin | `-- Not done`
graft | `-- Not done`
grandcoin | `-- Not done`
granitecoin | `-- Not done`
greencoin | *+ Done*
grid | `-- Not done`
gridcoin | `-- Not done`
grimcoin | `-- Not done`
groestlcoin | *+ Done*
growers-international | `-- Not done`
guaranteed-ethurance-token-extra | `-- Not done`
guccionecoin | `-- Not done`
guess | `-- Not done`
gulden | `-- Not done`
guncoin | *+ Done*
guppy | `-- Not done`
gxchain | `-- Not done`
hacken | `-- Not done`
hackspace-capital | `-- Not done`
halalchain | `-- Not done`
halcyon | `-- Not done`
halloween-coin | `-- Not done`
happy-creator-coin | `-- Not done`
happycoin | `-- Not done`
harmonycoin-hmc | `-- Not done`
harvest-masternode-coin | `-- Not done`
havven | `-- Not done`
hawala-today | `-- Not done`
healthywormcoin | *+ Done*
heat-ledger | `-- Not done`
hedge | `-- Not done`
helleniccoin | `-- Not done`
hellogold | `-- Not done`
hempcoin-hmp | `-- Not done`
hempcoin | `-- Not done`
herocoin | `-- Not done`
hexx | `-- Not done`
hi-mutual-society | `-- Not done`
hicoin | `-- Not done`
high-gain | `-- Not done`
high-performance-blockchain | `-- Not done`
high-voltage | `-- Not done`
hirematch | `-- Not done`
hitcoin | `-- Not done`
hive-project | `-- Not done`
hobonickels | *+ Done*
hodl-bucks | `-- Not done`
hodlcoin | `-- Not done`
hollywoodcoin | `-- Not done`
homeblockcoin | `-- Not done`
honey | `-- Not done`
hoqu | `-- Not done`
hshare | `-- Not done`
html-coin | `-- Not done`
hubii-network | `-- Not done`
humaniq | `-- Not done`
huncoin | `-- Not done`
huntercoin | `-- Not done`
huobi-token | `-- Not done`
hush | `-- Not done`
hydro-protocol | `-- Not done`
hyper-pay | `-- Not done`
hyper | `-- Not done`
hyperstake | `-- Not done`
i0coin | *+ Done*
ibank | `-- Not done`
ico-openledger | `-- Not done`
icobid | `-- Not done`
icoin | *+ Done*
icon | `-- Not done`
iconic | `-- Not done`
iconomi | `-- Not done`
icos | `-- Not done`
idex-membership | `-- Not done`
idice | `-- Not done`
iethereum | `-- Not done`
ignis | `-- Not done`
ignition | *+ Done*
iht-real-estate-protocol | `-- Not done`
impact | *+ Done*
impulsecoin | `-- Not done`
incakoin | `-- Not done`
incent | `-- Not done`
indahash | `-- Not done`
independent-money-system | `-- Not done`
india-coin | `-- Not done`
indicoin | `-- Not done`
indorse-token | `-- Not done`
infchain | `-- Not done`
infinitecoin | *+ Done*
infinity-economics | `-- Not done`
inflationcoin | `-- Not done`
influxcoin | `-- Not done`
ink-protocol | `-- Not done`
ink | `-- Not done`
innova | `-- Not done`
inpay | `-- Not done`
ins-ecosystem | `-- Not done`
insanecoin-insn | `-- Not done`
insights-network | `-- Not done`
insurepal | `-- Not done`
intelligent-trading-tech | `-- Not done`
intensecoin | `-- Not done`
international-diamond | `-- Not done`
internet-node-token | `-- Not done`
internet-of-people | `-- Not done`
internet-of-things | `-- Not done`
internxt | `-- Not done`
interplanetary-broadcast-coin | `-- Not done`
interstellar-holdings | `-- Not done`
investdigital | `-- Not done`
investfeed | `-- Not done`
invisiblecoin | `-- Not done`
iocoin | `-- Not done`
ion | *+ Done*
iostoken | `-- Not done`
iot-chain | `-- Not done`
iota | `-- Not done`
ipchain | `-- Not done`
iquant | `-- Not done`
irishcoin | `-- Not done`
islacoin | `-- Not done`
iticoin | `-- Not done`
iungo | `-- Not done`
ixcoin | *+ Done*
ixledger | `-- Not done`
javascript-token | `-- Not done`
jesus-coin | `-- Not done`
jet8 | `-- Not done`
jetcoin | `-- Not done`
jewels | `-- Not done`
jibrel-network | `-- Not done`
jin-coin | `-- Not done`
jingtum-tech | `-- Not done`
jiyo | `-- Not done`
jobscoin | `-- Not done`
joincoin | *+ Done*
joulecoin | *+ Done*
karbo | `-- Not done`
karma | *+ Done*
karmacoin | `-- Not done`
kashhcoin | `-- Not done`
kayicoin | `-- Not done`
kcash | `-- Not done`
kekcoin | `-- Not done`
kickico | `-- Not done`
kilocoin | `-- Not done`
kin | `-- Not done`
kingn-coin | `-- Not done`
klondikecoin | `-- Not done`
kobocoin | *+ Done*
kolion | `-- Not done`
komodo | `-- Not done`
korecoin | `-- Not done`
kronecoin | `-- Not done`
kubera-coin | `-- Not done`
kucoin-shares | `-- Not done`
kurrent | `-- Not done`
kushcoin | *+ Done*
kyber-network | `-- Not done`
kzcash | `-- Not done`
lala-world | `-- Not done`
lamden | `-- Not done`
lampix | `-- Not done`
lanacoin | *+ Done*
landcoin | `-- Not done`
lathaan | `-- Not done`
latiumx | `-- Not done`
latoken | `-- Not done`
lazaruscoin | `-- Not done`
leacoin | `-- Not done`
leadcoin | `-- Not done`
leafcoin | `-- Not done`
legends-room | `-- Not done`
legolas-exchange | `-- Not done`
lendconnect | `-- Not done`
lendroid-support-token | `-- Not done`
leocoin | `-- Not done`
lepen | `-- Not done`
letitride | *+ Done*
leverj | `-- Not done`
leviarcoin | `-- Not done`
levocoin | `-- Not done`
levoplus | `-- Not done`
library-credit | `-- Not done`
life | `-- Not done`
lightchain | `-- Not done`
lightning-bitcoin | *+ Done*
linda | `-- Not done`
link-platform | `-- Not done`
linkedcoin | `-- Not done`
linkeye | `-- Not done`
linx | *+ Done*
lisk | `-- Not done`
litebar | `-- Not done`
litebitcoin | `-- Not done`
litecoin-cash | `-- Not done`
litecoin-plus | `-- Not done`
litecoin-ultra | `-- Not done`
litecoin | *+ Done*
litecred | `-- Not done`
litedoge | `-- Not done`
lltoken | `-- Not done`
locicoin | `-- Not done`
lockchain | `-- Not done`
lomocoin | `-- Not done`
loom-network | `-- Not done`
loopring | `-- Not done`
luckchain | *+ Done*
luna-coin | `-- Not done`
lunyr | `-- Not done`
luxcoin | *+ Done*
lykke | `-- Not done`
lympo | `-- Not done`
machinecoin | *+ Done*
macro1 | `-- Not done`
macron | `-- Not done`
madcoin | `-- Not done`
maecenas | `-- Not done`
maggie | `-- Not done`
magi | *+ Done*
magiccoin | `-- Not done`
magnet | `-- Not done`
magnetcoin | `-- Not done`
magnum | `-- Not done`
maidsafecoin | `-- Not done`
maker | `-- Not done`
manna | *+ Done*
mao-zedong | `-- Not done`
marijuanacoin | `-- Not done`
marscoin | `-- Not done`
martexcoin | `-- Not done`
marxcoin | `-- Not done`
master-swiscoin | `-- Not done`
masternodecoin | `-- Not done`
matrix-ai-network | `-- Not done`
matryx | `-- Not done`
maverick-chain | `-- Not done`
maxcoin | *+ Done*
mazacoin | `-- Not done`
mcap | `-- Not done`
measurable-data-token | `-- Not done`
medibloc | `-- Not done`
medical-chain | `-- Not done`
mediccoin | `-- Not done`
medishares | `-- Not done`
megacoin | *+ Done*
melon | `-- Not done`
memetic | `-- Not done`
mercury-protocol | `-- Not done`
mercury | `-- Not done`
mergecoin | `-- Not done`
metal-music-coin | `-- Not done`
metal | `-- Not done`
metalcoin | `-- Not done`
metaverse | `-- Not done`
micromoney | `-- Not done`
milocoin | `-- Not done`
mincoin | `-- Not done`
mindcoin | *+ Done*
minereum | `-- Not done`
miners-reward-token | `-- Not done`
mineum | `-- Not done`
minex | `-- Not done`
minexcoin | `-- Not done`
mintcoin | `-- Not done`
mithril | `-- Not done`
mixin | `-- Not done`
mktcoin | `-- Not done`
mmxvi | `-- Not done`
moac | `-- Not done`
mobilecash | `-- Not done`
mobilego | `-- Not done`
mobius | `-- Not done`
modum | `-- Not done`
moeda-loyalty-points | `-- Not done`
moin | `-- Not done`
mojocoin | `-- Not done`
molecular-future | `-- Not done`
monaco | `-- Not done`
monacocoin | `-- Not done`
monacoin | `-- Not done`
monero-gold | `-- Not done`
monero | *+ Done*
moneta2 | `-- Not done`
monetaryunit | *+ Done*
monetha | `-- Not done`
money | `-- Not done`
monkey-project | `-- Not done`
monster-byte | `-- Not done`
mooncoin | *+ Done*
mothership | `-- Not done`
motocoin | `-- Not done`
msd | `-- Not done`
musicoin | `-- Not done`
musiconomi | `-- Not done`
mustangcoin | *+ Done*
mybit-token | `-- Not done`
myriad | *+ Done*
mysterium | `-- Not done`
mywish | `-- Not done`
naga | `-- Not done`
namecoin | `-- Not done`
namocoin | `-- Not done`
nanjcoin | `-- Not done`
nano | `-- Not done`
napoleonx | `-- Not done`
natcoin | `-- Not done`
nav-coin | `-- Not done`
neblio | `-- Not done`
nebulas-token | `-- Not done`
nekonium | `-- Not done`
nem | `-- Not done`
neo-gold | `-- Not done`
neo | *+ Done*
neoscoin | *+ Done*
netbit | `-- Not done`
netcoin | `-- Not done`
netko | *+ Done*
network-token | `-- Not done`
neumark | `-- Not done`
neuro | *+ Done*
neurotoken | `-- Not done`
neutron | `-- Not done`
nevacoin | *+ Done*
neverdie | `-- Not done`
newbium | `-- Not done`
nework | `-- Not done`
newyorkcoin | `-- Not done`
nexium | `-- Not done`
nexus | `-- Not done`
nexxus | `-- Not done`
nimiq | `-- Not done`
nitro | `-- Not done`
noah-coin | `-- Not done`
noblecoin | *+ Done*
nodecoin | `-- Not done`
nolimitcoin | `-- Not done`
novacoin | `-- Not done`
nubits | `-- Not done`
nucleus-vision | `-- Not done`
nuls | `-- Not done`
numeraire | `-- Not done`
numus | `-- Not done`
numuscash | `-- Not done`
nushares | `-- Not done`
nvo | `-- Not done`
nxt | `-- Not done`
nyancoin | `-- Not done`
oax | `-- Not done`
obits | `-- Not done`
obsidian | `-- Not done`
oceanchain | `-- Not done`
oceanlab | `-- Not done`
ocow | `-- Not done`
octanox | `-- Not done`
octocoin | *+ Done*
octoin-coin | `-- Not done`
odyssey | `-- Not done`
ofcoin | `-- Not done`
okcash | *+ Done*
olympus-labs | `-- Not done`
omicron | `-- Not done`
omisego | `-- Not done`
omni | `-- Not done`
oneroot-network | `-- Not done`
ongsocial | `-- Not done`
onix | `-- Not done`
ontology | `-- Not done`
op-coin | `-- Not done`
opal | `-- Not done`
open-trading-network | `-- Not done`
operand | `-- Not done`
opescoin | `-- Not done`
opus | `-- Not done`
oraclechain | `-- Not done`
orbitcoin | `-- Not done`
origintrail | `-- Not done`
orlycoin | `-- Not done`
ormeus-coin | `-- Not done`
osmiumcoin | `-- Not done`
ost | `-- Not done`
ox-fina | `-- Not done`
oxycoin | `-- Not done`
oyster | `-- Not done`
p7coin | `-- Not done`
pabyosi-coin-special | `-- Not done`
paccoin | `-- Not done`
pakcoin | *+ Done*
pandacoin-pnd | `-- Not done`
paragon | `-- Not done`
parallelcoin | `-- Not done`
pareto-network | `-- Not done`
parkbyte | `-- Not done`
particl | *+ Done*
pascal-coin | `-- Not done`
pascal-lite | `-- Not done`
patientory | `-- Not done`
paycoin2 | `-- Not done`
paycon | `-- Not done`
payfair | `-- Not done`
paypeer | `-- Not done`
paypie | `-- Not done`
peculium | `-- Not done`
peepcoin | *+ Done*
peercoin | *+ Done*
peerplays-ppy | `-- Not done`
pepe-cash | `-- Not done`
pesetacoin | *+ Done*
petrodollar | `-- Not done`
phantomx | `-- Not done`
philosopher-stones | `-- Not done`
phoenixcoin | `-- Not done`
phore | *+ Done*
photon | *+ Done*
piecoin | `-- Not done`
piggycoin | *+ Done*
pillar | `-- Not done`
pinkcoin | *+ Done*
pinkdog | `-- Not done`
pioneer-coin | `-- Not done`
piplcoin | `-- Not done`
pirate-blocks | `-- Not done`
pirl | `-- Not done`
pivx | *+ Done*
pizzacoin | `-- Not done`
platinumbar | `-- Not done`
playercoin | `-- Not done`
playkey | `-- Not done`
plexcoin | `-- Not done`
plncoin | `-- Not done`
pluscoin | `-- Not done`
pluton | `-- Not done`
poa-network | `-- Not done`
poet | `-- Not done`
pokecoin | `-- Not done`
polcoin | `-- Not done`
polis | `-- Not done`
poly-ai | `-- Not done`
polybius | `-- Not done`
polymath-network | `-- Not done`
ponzicoin | `-- Not done`
popularcoin | `-- Not done`
populous | `-- Not done`
posex | `-- Not done`
postcoin | *+ Done*
postoken | `-- Not done`
posw-coin | `-- Not done`
potcoin | *+ Done*
power-ledger | `-- Not done`
prcoin | `-- Not done`
presearch | `-- Not done`
president-johnson | `-- Not done`
president-trump | `-- Not done`
pressone | `-- Not done`
primalbase | `-- Not done`
primas | `-- Not done`
prime-xi | *+ Done*
primecoin | `-- Not done`
primulon | `-- Not done`
printerium | `-- Not done`
prismchain | `-- Not done`
privatix | `-- Not done`
prizm | `-- Not done`
prochain | `-- Not done`
procurrency | `-- Not done`
profile-utility-token | `-- Not done`
project-decorum | `-- Not done`
project-x | `-- Not done`
propy | `-- Not done`
prospectors-gold | `-- Not done`
protean | `-- Not done`
prototanium | *+ Done*
psilocybin | `-- Not done`
publica | `-- Not done`
pulse | `-- Not done`
pundi-x-old | `-- Not done`
pundi-x | `-- Not done`
pura | *+ Done*
pure | `-- Not done`
purevidz | `-- Not done`
putincoin | *+ Done*
px | `-- Not done`
pylon-network | `-- Not done`
qash | `-- Not done`
qbao | `-- Not done`
qbic | `-- Not done`
qlink | `-- Not done`
qora | `-- Not done`
qtum | `-- Not done`
quantstamp | `-- Not done`
quantum-resistant-ledger | `-- Not done`
quantum | `-- Not done`
quark | *+ Done*
quatloo | `-- Not done`
quazarcoin | `-- Not done`
qube | `-- Not done`
qubitcoin | `-- Not done`
quebecoin | `-- Not done`
qunqun | `-- Not done`
quotient | *+ Done*
qvolta | `-- Not done`
qwark | `-- Not done`
rabbitcoin | `-- Not done`
radium | *+ Done*
raiden-network-token | `-- Not done`
ratecoin | `-- Not done`
ravencoin | `-- Not done`
rawcoin2 | `-- Not done`
rchain | `-- Not done`
rcoin | `-- Not done`
read | `-- Not done`
real-estate-tokens | `-- Not done`
real | `-- Not done`
realchain | `-- Not done`
rebl | `-- Not done`
red-pulse | `-- Not done`
redcoin | `-- Not done`
reddcoin | `-- Not done`
reecoin | `-- Not done`
refereum | `-- Not done`
reftoken | `-- Not done`
regacoin | `-- Not done`
regalcoin | `-- Not done`
remicoin | `-- Not done`
remme | `-- Not done`
renos | `-- Not done`
republic-protocol | `-- Not done`
request-network | `-- Not done`
restart-energy-mwat | `-- Not done`
revain | `-- Not done`
revolutionvr | `-- Not done`
revolvercoin | `-- Not done`
rhfcoin | `-- Not done`
rialto | `-- Not done`
richcoin | `-- Not done`
ride-my-car | `-- Not done`
riecoin | *+ Done*
rimbit | `-- Not done`
ripio-credit-network | `-- Not done`
ripple | *+ Done*
ripto-bux | `-- Not done`
rise | `-- Not done`
rivetz | `-- Not done`
rlc | `-- Not done`
rock | `-- Not done`
ronpaulcoin | `-- Not done`
roofs | `-- Not done`
roulettetoken | `-- Not done`
royal-kingdom-coin | `-- Not done`
royalcoin | `-- Not done`
royalties | `-- Not done`
rsgpcoin | `-- Not done`
rubies | `-- Not done`
rublebit | `-- Not done`
rubycoin | *+ Done*
ruff | `-- Not done`
runners | `-- Not done`
rupaya | `-- Not done`
rupee | `-- Not done`
russiacoin | `-- Not done`
russian-mining-coin | `-- Not done`
rustbits | `-- Not done`
sacoin | `-- Not done`
safe-exchange-coin | `-- Not done`
safe-trade-coin | `-- Not done`
safecoin | `-- Not done`
sagacoin | `-- Not done`
sakuracoin | `-- Not done`
salt | `-- Not done`
salus | `-- Not done`
sand-coin | `-- Not done`
santiment | `-- Not done`
sativacoin | *+ Done*
satoshimadness | `-- Not done`
save-and-gain | `-- Not done`
scorecoin | `-- Not done`
scryinfo | `-- Not done`
secretcoin | `-- Not done`
securecoin | *+ Done*
segwit2x | `-- Not done`
selfiecoin | `-- Not done`
selfkey | `-- Not done`
selfsell | `-- Not done`
senderon | `-- Not done`
sense | `-- Not done`
sequence | `-- Not done`
sether | `-- Not done`
sexcoin | *+ Done*
shacoin | *+ Done*
shadow-token | `-- Not done`
shadowcash | `-- Not done`
sharechain | `-- Not done`
sharex | `-- Not done`
sharkcoin | `-- Not done`
sharpe-platform-token | `-- Not done`
shekel | `-- Not done`
shellcoin | `-- Not done`
shield-xsh | `-- Not done`
shift | `-- Not done`
shilling | *+ Done*
shipchain | `-- Not done`
shorty | `-- Not done`
show | `-- Not done`
siacoin | `-- Not done`
sibcoin | `-- Not done`
sigmacoin | `-- Not done`
signal-token | `-- Not done`
signatum | `-- Not done`
singulardtv | `-- Not done`
singularitynet | `-- Not done`
sirin-labs-token | `-- Not done`
sisa | `-- Not done`
sixeleven | `-- Not done`
sjwcoin | `-- Not done`
skeincoin | *+ Done*
skincoin | `-- Not done`
skycoin | `-- Not done`
slevin | `-- Not done`
slimcoin | `-- Not done`
slothcoin | `-- Not done`
smartcash | `-- Not done`
smartcoin | `-- Not done`
smartlands | `-- Not done`
smartmesh | `-- Not done`
smileycoin | *+ Done*
smoke | `-- Not done`
snakeeyes | `-- Not done`
snovio | `-- Not done`
soarcoin | `-- Not done`
social-send | `-- Not done`
socialcoin-socc | `-- Not done`
sociall | `-- Not done`
soilcoin | `-- Not done`
sojourn | `-- Not done`
solarcoin | *+ Done*
solarflarecoin | `-- Not done`
solaris | *+ Done*
soma | `-- Not done`
songcoin | `-- Not done`
sonm | `-- Not done`
sooncoin | `-- Not done`
sophiatx | `-- Not done`
sovereign-hero | `-- Not done`
spacechain | `-- Not done`
spacecoin | `-- Not done`
spankchain | `-- Not done`
sparks | `-- Not done`
spectre-dividend | `-- Not done`
spectre-utility | `-- Not done`
spectrecoin | *+ Done*
speed-mining-service | `-- Not done`
speedcash | `-- Not done`
sphere | `-- Not done`
spherepay | `-- Not done`
sphre-air | `-- Not done`
sportscoin | `-- Not done`
sportyco | `-- Not done`
spots | `-- Not done`
spreadcoin | *+ Done*
sprouts | *+ Done*
sproutsextreme | `-- Not done`
starbase | `-- Not done`
starcash-network | `-- Not done`
starchain | `-- Not done`
starcredits | `-- Not done`
starta | `-- Not done`
startcoin | `-- Not done`
startercoin | `-- Not done`
status | `-- Not done`
stealthcoin | `-- Not done`
steem-dollars | `-- Not done`
steem | `-- Not done`
stellar | `-- Not done`
steneum-coin | `-- Not done`
steps | `-- Not done`
sterlingcoin | *+ Done*
stex | `-- Not done`
stk | `-- Not done`
storiqa | `-- Not done`
storj | `-- Not done`
storjcoin-x | `-- Not done`
storm | `-- Not done`
stox | `-- Not done`
straks | `-- Not done`
stratis | *+ Done*
streamr-datacoin | `-- Not done`
strikebitclub | `-- Not done`
stronghands | `-- Not done`
student-coin | `-- Not done`
substratum | `-- Not done`
sugar-exchange | `-- Not done`
sumokoin | `-- Not done`
suncontract | `-- Not done`
super-bitcoin | `-- Not done`
supercoin | *+ Done*
superior-coin | `-- Not done`
supernet-unity | `-- Not done`
sureremit | `-- Not done`
suretly | `-- Not done`
swagbucks | *+ Done*
swaptoken | `-- Not done`
swarm-city | `-- Not done`
swarm-fund | `-- Not done`
swftcoin | `-- Not done`
swing | *+ Done*
swissborg | `-- Not done`
swisscoin | `-- Not done`
sydpak | `-- Not done`
syndicate | `-- Not done`
synereo | `-- Not done`
synergy | *+ Done*
syscoin | `-- Not done`
t-coin | `-- Not done`
taas | `-- Not done`
tagcoin | `-- Not done`
tagrcoin | `-- Not done`
tajcoin | *+ Done*
tao | *+ Done*
target-coin | `-- Not done`
tattoocoin-limited | `-- Not done`
tattoocoin | `-- Not done`
te-food | `-- Not done`
teamup | `-- Not done`
techshares | `-- Not done`
tekcoin | `-- Not done`
telcoin | `-- Not done`
tellurion | `-- Not done`
tenx | `-- Not done`
terracoin | `-- Not done`
terranova | `-- Not done`
teslacoilcoin | `-- Not done`
teslacoin | *+ Done*
tether | `-- Not done`
tezos | `-- Not done`
the-champcoin | `-- Not done`
the-vegan-initiative | `-- Not done`
thecreed | `-- Not done`
thekey | `-- Not done`
theresa-may-coin | `-- Not done`
theta-token | `-- Not done`
tidex-token | `-- Not done`
tierion | `-- Not done`
tiesdb | `-- Not done`
tigercoin | `-- Not done`
tigereum | `-- Not done`
time-new-bank | `-- Not done`
timescoin | `-- Not done`
titanium-bar | `-- Not done`
titanium-blockchain | `-- Not done`
titcoin | `-- Not done`
tittiecoin | `-- Not done`
toacoin | *+ Done*
todaycoin | `-- Not done`
tokenbox | `-- Not done`
tokencard | `-- Not done`
tokenclub | `-- Not done`
tokenomy | `-- Not done`
tokes | `-- Not done`
tokugawa | `-- Not done`
tokyo | `-- Not done`
tomochain | `-- Not done`
topaz | `-- Not done`
topchain | `-- Not done`
topcoin | `-- Not done`
torcoin-tor | `-- Not done`
trackr | `-- Not done`
tracto | `-- Not done`
trade-token | `-- Not done`
transfercoin | *+ Done*
travelflex | `-- Not done`
trezarcoin | *+ Done*
triaconta | `-- Not done`
triangles | `-- Not done`
trickycoin | `-- Not done`
trident | `-- Not done`
triggers | `-- Not done`
trinity-network-credit | `-- Not done`
tristar-coin | `-- Not done`
trollcoin | *+ Done*
tron | `-- Not done`
truckcoin | `-- Not done`
true-chain | `-- Not done`
true-usd | `-- Not done`
trueflip | `-- Not done`
trumpcoin | *+ Done*
trust | `-- Not done`
trustplus | *+ Done*
turbocoin | `-- Not done`
tychocoin | `-- Not done`
ubiq | `-- Not done`
ucash | `-- Not done`
ug-token | `-- Not done`
ugain | `-- Not done`
ugchain | `-- Not done`
ulatech | `-- Not done`
ultimate-secure-cash | `-- Not done`
ultracoin | `-- Not done`
unbreakablecoin | `-- Not done`
uncoin | `-- Not done`
unicoin | `-- Not done`
uniform-fiscal-object | `-- Not done`
unify | `-- Not done`
unikoin-gold | `-- Not done`
united-bitcoin | `-- Not done`
unitus | `-- Not done`
unity-ingot | `-- Not done`
universa | `-- Not done`
universal-currency | `-- Not done`
universalroyalcoin | `-- Not done`
universe | *+ Done*
unlimitedip | `-- Not done`
unobtanium | *+ Done*
unrealcoin | `-- Not done`
upfiring | `-- Not done`
uptoken | `-- Not done`
uquid-coin | `-- Not done`
ur | `-- Not done`
uro | `-- Not done`
useless-ethereum-token | `-- Not done`
utrust | `-- Not done`
uttoken | `-- Not done`
valorbit | `-- Not done`
valuechain | `-- Not done`
vaperscoin | `-- Not done`
vault-coin | `-- Not done`
vcash | `-- Not done`
vechain | `-- Not done`
vector | `-- Not done`
veltor | `-- Not done`
verge | `-- Not done`
vericoin | *+ Done*
verify | `-- Not done`
veritaseum | `-- Not done`
veriumreserve | `-- Not done`
veros | `-- Not done`
version | `-- Not done`
vertcoin | *+ Done*
vezt | `-- Not done`
viacoin | *+ Done*
vibe | `-- Not done`
viberate | `-- Not done`
vip-tokens | `-- Not done`
virta-unique-coin | `-- Not done`
virtacoin | `-- Not done`
virtacoinplus | *+ Done*
virtualcoin | `-- Not done`
visio | *+ Done*
viuly | `-- Not done`
vivo | *+ Done*
voisecom | `-- Not done`
votecoin | `-- Not done`
voyacoin | `-- Not done`
vpncoin | *+ Done*
vslice | `-- Not done`
vsync-vsx | `-- Not done`
vtorrent | `-- Not done`
vulcano | `-- Not done`
w3coin | `-- Not done`
wa-space | `-- Not done`
wabi | `-- Not done`
wagerr | *+ Done*
waltonchain | `-- Not done`
wanchain | `-- Not done`
wandx | `-- Not done`
warp | `-- Not done`
waves-community-token | `-- Not done`
waves | `-- Not done`
wavesgo | `-- Not done`
wax | `-- Not done`
wayguide | `-- Not done`
waykichain | `-- Not done`
wearesatoshi | *+ Done*
wepower | `-- Not done`
weth | `-- Not done`
whalecoin | `-- Not done`
whitecoin | `-- Not done`
wi-coin | `-- Not done`
wild-beast-block | `-- Not done`
wild-crypto | `-- Not done`
win-coin | `-- Not done`
wings | `-- Not done`
wink | `-- Not done`
women | `-- Not done`
woodcoin | `-- Not done`
worldcoin | `-- Not done`
worldcore | `-- Not done`
wowcoin | `-- Not done`
x-coin | `-- Not done`
x2 | `-- Not done`
xaucoin | `-- Not done`
xaurum | `-- Not done`
xenon | `-- Not done`
xgox | `-- Not done`
xios | `-- Not done`
xonecoin | `-- Not done`
xpa | `-- Not done`
xtd-coin | `-- Not done`
xtrabytes | `-- Not done`
yacoin | `-- Not done`
yashcoin | `-- Not done`
yee | `-- Not done`
yenten | `-- Not done`
yocoin | `-- Not done`
yoyow | `-- Not done`
zap | `-- Not done`
zayedcoin | `-- Not done`
zcash-gold | `-- Not done`
zcash | `-- Not done`
zclassic | `-- Not done`
zcoin | *+ Done*
zeepin | `-- Not done`
zeitcoin | *+ Done*
zencash | `-- Not done`
zengold | `-- Not done`
zennies | `-- Not done`
zephyr | `-- Not done`
zero | `-- Not done`
zetacoin | *+ Done*
zetamicron | `-- Not done`
zeusshield | `-- Not done`
zilbercoin | `-- Not done`
zilla | `-- Not done`
zilliqa | `-- Not done`
zoin | *+ Done*
zonecoin | `-- Not done`
zozocoin | `-- Not done`
zrcoin | `-- Not done`
zsecoin | `-- Not done`
zurcoin | `-- Not done`
