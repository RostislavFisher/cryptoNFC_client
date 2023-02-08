<template>
<div>
</div>
</template>

<script>
import Web3 from 'web3'
import NFCRead from '@helios-interactive/vue-nfc-reader';
import {ethers} from "ethers";
import NFT from "../../abi.json";

class Currency{
  constructor() {
    if (this.constructor === Currency) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
}

class Ethereum extends Currency{
  token;
  constructor() {
    super();
    this.token = "ETH";
  }}


class cryptoWallet{
  constructor() {
    if (this.constructor === cryptoWallet) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  pay(wallet, currency, amount) {
    throw new Error("Method 'pay()' must be implemented.");
  }
  getMainWallet() {
    throw new Error("Method 'getMainWallet()' must be implemented.");
  }
  checkIfWalletConnected(){
    throw new Error("Method 'checkIfWalletConnected()' must be implemented.");
  }
  walletMustBeConnected(){
    throw new Error("Method 'walletMustBeConnected()' must be implemented.");

  }

}
class Metamask extends cryptoWallet{
  checkIfWalletConnected(){
    var connected = false;
    var address = "";
    if (window.ethereum.request({ method: 'eth_accounts' }).then(function (accounts) {
      if (accounts.length > 0) {
        connected = true;
        address = accounts[0];
      }
    })
    ) {
      connected = true;
    }
    return {
      connected: connected,
      address: address
    }
  }

  // walletMustBeConnected() {
  //
  // }

  pay(wallet, currency, amount){
    if(currency.token==='ETH'){
      window.ethereum.request({ method: 'eth_sendTransaction', params: { from: this.getMainWallet(), to: wallet, value: amount } })
          .then(response => {
            console.log(response);
          })
          .catch(error => {

          });
    }

  }

  async getMainWallet() {
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    var signer = provider.getSigner();
    var address = await signer.getAddress();
    console.log(address);
    return address;

  }
}

export default {
  name: "PayPage",
  data() {
    return {
      status: '[scanner status]',
    }
  },
  components: {
    NFCRead
  },
  methods: {
    async readTag() {
      try {
        const ndef = new NDEFReader();
        await ndef.scan();
        console.log("> Scan started");

        ndef.addEventListener("readingerror", () => {
          console.log("Argh! Cannot read data from the NFC tag. Try another one?");
        });

        ndef.addEventListener("reading", ({message, serialNumber}) => {
          console.log(`> Serial Number: ${serialNumber}`);
          console.log(`> Records: (${message.records.length})`);
        });
      } catch (error) {
        console.log("Argh! " + error);
      }

    }

  },
  mounted() {
    var metamask = new Metamask()
    metamask.pay("0x79d748A5C6c18E16a9A4334153Dfc30fC0eA411D", new Ethereum(), 100)
    // // this.readTag()
    // const ndef = new NDEFReader();
    // const jsonRecord = {
    //   recordType: "mime",
    //   mediaType: "application/json",
    //   data: new TextEncoder().encode(JSON.stringify({
    //     wallet: "num"
    //   }))
    // };
    // ndef.onreading = (event) => {
    //   console.log(`Connected to NFC tag`);
    //   console.log(event.message);
    //
    //   ndef.write({records: [jsonRecord]})
    //       .then(() => {
    //         console.log("Message written.");
    //       })
    //       .catch((error) => {
    //         console.log(`Write failed :-( try again: ${error}.`);
    //       });
    //   console.log("ended")
    //
    // }
  }
}
</script>

<style scoped>

</style>