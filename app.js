// import TonWeb from "tonweb";
const TonWeb = require('tonweb');

const tonweb = new TonWeb(new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC'))
const address = new TonWeb.utils.Address("kQABQjrfWDHhfEX4A8LxbzAQYGOPha_8UMp2xPQCJzNGH1tE");
const header = TonWeb.Contract.createExternalMessageHeader(address);

const Cell = TonWeb.boc.Cell;
const cell = new Cell();
cell.bits.writeUint(65, 32);

const msg = TonWeb.Contract.createCommonMsgInfo(header, null, cell);
// console.log(msg); // print cell data like Fift
msg.toBoc(false).then(bocBytes => {
    console.log(bocBytes); // print cell data like Fift
    tonweb.sendBoc(bocBytes).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
});