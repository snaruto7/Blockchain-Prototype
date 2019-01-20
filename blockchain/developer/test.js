const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 =  {"chain":[{"index":1,"timestamp":1547994204534,"transactions":[],"nonce":100,"hash":"6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b","previousBlockHash":"5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"},{"index":2,"timestamp":1547994240750,"transactions":[],"nonce":110782,"hash":"00003bdba9ebdcca9222e1fe264723e1fc2eb10f483ffcfc61b40c4220ab97df","previousBlockHash":"6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"},{"index":3,"timestamp":1547994408886,"transactions":[{"amount":12.5,"sender":"00","recipient":"f242f8701cbe11e985a539699bfb1b96","transactionId":"07e7e5001cbf11e985a539699bfb1b96"},{"amount":50,"sender":"QESDCGBN","recipient":"QAAZXXDFVGVBN","transactionId":"593c0df01cbf11e985a539699bfb1b96"},{"amount":60,"sender":"QESDCGBN","recipient":"QAAZXXDFVGVBN","transactionId":"5e0492801cbf11e985a539699bfb1b96"},{"amount":70,"sender":"QESDCGBN","recipient":"QAAZXXDFVGVBN","transactionId":"613539001cbf11e985a539699bfb1b96"},{"amount":80,"sender":"QESDCGBN","recipient":"QAAZXXDFVGVBN","transactionId":"63fcbd701cbf11e985a539699bfb1b96"}],"nonce":3816,"hash":"00006bdebda32e4baa5f4d4a782f3deffb56c114574e6bc67ffb9013128c9de1","previousBlockHash":"00003bdba9ebdcca9222e1fe264723e1fc2eb10f483ffcfc61b40c4220ab97df"},{"index":4,"timestamp":1547994489041,"transactions":[{"amount":12.5,"sender":"00","recipient":"f242f8701cbe11e985a539699bfb1b96","transactionId":"6c1223101cbf11e985a539699bfb1b96"},{"amount":100,"sender":"QESDCGBN","recipient":"QAAZXXDFVGVBN","transactionId":"82fa65101cbf11e985a539699bfb1b96"},{"amount":200,"sender":"QESDCGBN","recipient":"QAAZXXDFVGVBN","transactionId":"85e3c9601cbf11e985a539699bfb1b96"}],"nonce":457865,"hash":"0000da133d254cfa64f7cbdda195742c68f969f1bf366df19a623472afc2b581","previousBlockHash":"00006bdebda32e4baa5f4d4a782f3deffb56c114574e6bc67ffb9013128c9de1"},{"index":5,"timestamp":1547995173227,"transactions":[{"amount":12.5,"sender":"00","recipient":"f242f8701cbe11e985a539699bfb1b96","transactionId":"9bd8d1c01cbf11e985a539699bfb1b96"}],"nonce":44567,"hash":"000008cb23e87e79f54b30b66be7a362b6164a9fe2e8902739097bac3af811c9","previousBlockHash":"0000da133d254cfa64f7cbdda195742c68f969f1bf366df19a623472afc2b581"}],"pendingTransactions":[{"amount":12.5,"sender":"00","recipient":"f242f8701cbe11e985a539699bfb1b96","transactionId":"33a72a501cc111e985a539699bfb1b96"}],"currentNodeUrl":"http://192.168.43.119:3001","networkNodes":[]};


console.log(bitcoin.chainIsValid(bc1.chain));