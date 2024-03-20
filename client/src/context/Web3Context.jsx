import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { deployedAddress } from "../Util/keys";
import OrgContractService from "../contract/OrgContract.json";
import { LoadingContext } from "./LoadingContext";

let contractAddress = deployedAddress;

export const Web3ApiContext = createContext();

//-------------get contract----------------------------------//
const getContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    OrgContractService.abi,
    signer
  );
  return contract;
};
//----------------------------------------------------------//

const Web3ApiProvider = ({ children }) => {
  const { setLoading } = useContext(LoadingContext);
  //connection account state
  const [connectedAccount, setConnectedAccount] = useState(null);

  //set org_ledger
  const [org_ledger, SetOrg_Ledger] = useState(null);

  //-------------connecting wallet----------------------------//
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      setLoading(false);
      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object found!");
    }
  };
  //-------------------------------------------------------------------//
  //--------------check if wallet is connected or not---------------------------//
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //-----------------------------------------------------------//
  //-------------------Add to ledger-----------------------------//
  const Send_ledgerdata = (ledger) => {
    try {
      getContract()
        .then((d) => {
          const l = [];
          for (const i of ledger) {
            l.push([i.field_name, i.value]);
          }
          l.push(["$$$$", "$$$$$"]);
          d.addLedger(l);
        })
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  };
  //-----------------------------------------------------------//
  //-------------------get ledger-----------------------------//
  const Get_ledgerdata = async () => {
    getContract()
      .then((d) => {
        return d.getLedger();
      })
      .then((d) => {
        SetOrg_Ledger(d);
      })
      .catch((e) => console.log(e));
  };
  //-----------------------------------------------------------//

  const Disconnect = () => {
    setConnectedAccount("0x0");
  };
  useEffect(() => {
    try {
      checkIfWalletIsConnected();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <Web3ApiContext.Provider
      value={{
        Send_ledgerdata,
        connectWallet,
        org_ledger,
        connectedAccount,
        Get_ledgerdata,
        checkIfWalletIsConnected,
      }}
    >
      {children}
    </Web3ApiContext.Provider>
  );
};

export default Web3ApiProvider;
