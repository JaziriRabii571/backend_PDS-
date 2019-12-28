
const compiledContract = require('./ethereum/compile');
const cpm = JSON.parse(compiledContract)
const abi = cpm.contracts.tontine.Tontine.abi;


var Web3 = require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var dep = new web3.eth.Contract(abi, "0x99aCc3224127d11d67558164bE6Ed1D9cfaD221b")




    dep.methods.addNewToken('0x494d465400000000000000000000000000000000000000000000000000000000', '0x5300cbf440484Cca34aEEB64F90E57377E410029')

            .send({ from: '0xEBfc46abD908E1CC60AFD6d2553B0E6e63271B3B', gas: 300000 }, function (error, result) {
            })
            .then(result => { console.log('done') })
            .catch(e => console.log(e));


