import { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { Images } from "../../assets";
import { Web3ApiContext } from "../../context/Web3Context";
import { Link, useNavigate } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();
  const goTo_createLedger = async () => {
    await Get_ledgerdata();
    navigate("/create-ledger");
  };
  const goTo_pastLedger = () => {
    navigate("/past-ledger");
  };

  const { connectWallet, connectedAccount, checkIfWalletIsConnected, Get_ledgerdata } =
    useContext(Web3ApiContext);
  console.log(connectedAccount);
  console.log(connectWallet);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  useEffect(() => {
    try {
      checkIfWalletIsConnected();
    } catch (err) {
      console.log(err);
    }
  }, []);


  //random avatar

  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {

    const style = 'pixel-art'

    const seed = Math.floor(Math.random() * 10000).toString();


    const randomAvatar = `https://api.dicebear.com/8.x/${style}/svg?=seed${seed}`;
    setAvatarUrl(randomAvatar);
  }, []);

  const wallet = async () => {
    try {
      setLoading(true);
      await connectWallet();
    } catch (err) {
      console.log(err);
    }
  };
  const { loading, setLoading } = useContext(LoadingContext);





  return (
    <>
      <div className="led">
        <div className="led__navbar">
          <div className="led__navbar-links_logo">
            <Link to="/">

              <img className="circular_image" src={Images.logo} height={60} width={60} />
            </Link>
            {
              connectedAccount && (
                <>
                  <img className="circular_image" src={avatarUrl} height={60} width={60} />
                  <a href="" className="coloured">
                    {connectedAccount?.slice(0, 3) +
                      "...." +
                      connectedAccount?.slice(
                        connectedAccount.length - 4,
                        connectedAccount.length
                      )}
                  </a>
                </>
              )
            }


          </div>
          <div className="led__navbar-links">
            <div className="led__navbar-links_container">
              {
                !connectedAccount ? (
                  <>
                    <div className="button__styling" type="button" onClick={wallet}>MetaMask
                      <img src={Images.thumb} alt="user" />
                    </div>
                  </>

                ) :
                  (
                    <>
                      <div className="button__styling3" onClick={goTo_pastLedger} >Past Ledgers
                        <img className="svg" src={Images.thumb} alt="user" />
                      </div>
                      <div className="button__styling3" onClick={goTo_createLedger} >Create Ledger
                        <img className="svg" src={Images.thumb} alt="user" />
                      </div>
                    </>
                  )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
