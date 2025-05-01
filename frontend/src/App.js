import React, { useState } from "react";
import { Web3Provider } from "./context/Web3Context";
import ConnectWallet from "./components/ConnectWallet";
import RegisterCandidate from "./components/RegisterCandidate";
import PostJob from "./components/PostJob";
import VerifyCandidate from "./components/VerifyCandidate";
import SendOffer from "./components/SendOffer";
import AcceptOffer from "./components/AcceptOffer";
import ViewCandidates from "./components/ViewCandidates";
import ViewJobs from "./components/ViewJobs";
import ViewOffers from "./components/ViewOffers";
import ViewVerifiedApplicants from "./components/ViewVerifiedApplicants";

function App() {
    const [showCandidates, setShowCandidates] = useState(false);
    const [showJobs, setShowJobs] = useState(false);
    const [showOffers, setShowOffers] = useState(false);
    const [showVerified, setShowVerified] = useState(false);

    return (
        <Web3Provider>
            <div className="container py-4">
                {/* App Header */}
                <div className="text-center mb-4">
                    <h1 className="text-primary">E-Hiring DApp</h1>
                    <p className="text-muted">Blockchain-powered recruitment system</p>
                </div>

                {/* Action Components */}
                <div className="row mb-4 g-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm p-3">
                            <ConnectWallet />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm p-3">
                            <RegisterCandidate />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm p-3">
                            <PostJob />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm p-3">
                            <VerifyCandidate />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm p-3">
                            <SendOffer />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm p-3">
                            <AcceptOffer />
                        </div>
                    </div>
                </div>

                {/* Toggle Buttons */}
                <hr className="my-4" />
                <div className="text-center">
                    <button
                        className="btn btn-outline-primary m-2"
                        onClick={() => setShowCandidates(!showCandidates)}
                    >
                        {showCandidates ? "Hide" : "View"} Registered Candidates
                    </button>
                    {showCandidates && (
                        <div className="card p-3 my-3 shadow-sm">
                            <ViewCandidates />
                        </div>
                    )}

                    <button
                        className="btn btn-outline-success m-2"
                        onClick={() => setShowJobs(!showJobs)}
                    >
                        {showJobs ? "Hide" : "View"} Posted Jobs
                    </button>
                    {showJobs && (
                        <div className="card p-3 my-3 shadow-sm">
                            <ViewJobs />
                        </div>
                    )}

                    <button
                        className="btn btn-outline-warning m-2"
                        onClick={() => setShowOffers(!showOffers)}
                    >
                        {showOffers ? "Hide" : "View"} Offers Provided
                    </button>
                    {showOffers && (
                        <div className="card p-3 my-3 shadow-sm">
                            <ViewOffers />
                        </div>
                    )}

                    <button
                        className="btn btn-outline-info m-2"
                        onClick={() => setShowVerified(!showVerified)}
                    >
                        {showVerified ? "Hide" : "View"} Verified Applicants
                    </button>
                    {showVerified && (
                        <div className="card p-3 my-3 shadow-sm">
                            <ViewVerifiedApplicants />
                        </div>
                    )}
                </div>
            </div>
        </Web3Provider>
    );
}

export default App;






// import React, { useState, useEffect } from "react";
// import { Web3Provider } from "./context/Web3Context";
// import ConnectWallet from "./components/ConnectWallet"; // You will use the connect functionality directly here
// import RegisterCandidate from "./components/RegisterCandidate";
// import PostJob from "./components/PostJob";
// import VerifyCandidate from "./components/VerifyCandidate";
// import SendOffer from "./components/SendOffer";
// import AcceptOffer from "./components/AcceptOffer";
// import ViewCandidates from "./components/ViewCandidates";
// import ViewJobs from "./components/ViewJobs";
// import ViewOffers from "./components/ViewOffers";
// import ViewVerifiedApplicants from "./components/ViewVerifiedApplicants";

// function App() {
//     const [showCandidates, setShowCandidates] = useState(false);
//     const [showJobs, setShowJobs] = useState(false);
//     const [showOffers, setShowOffers] = useState(false);
//     const [showVerified, setShowVerified] = useState(false);
//     const [isConnected, setIsConnected] = useState(false); // Track wallet connection status

//     // Function to handle wallet connection status check
//     const connectWallet = async () => {
//         if (window.ethereum) {
//             try {
//                 // Request connection to wallet
//                 await window.ethereum.request({ method: "eth_requestAccounts" });
//                 setIsConnected(true); // If connected successfully
//             } catch (error) {
//                 console.error("Wallet connection failed:", error);
//             }
//         } else {
//             alert("Please install MetaMask!");
//         }
//     };

//     useEffect(() => {
//         // Check if the wallet is already connected on component mount
//         if (window.ethereum && window.ethereum.selectedAddress) {
//             setIsConnected(true);
//         }
//     }, []);

//     return (
//         <Web3Provider>
//             <div className="container py-4">
//                 {/* App Header */}
//                 <div className="text-center mb-4">
//                     <h1 className="text-primary">E-Hiring DApp</h1>
//                     <p className="text-muted">Blockchain-powered recruitment system</p>
//                 </div>

//                 {/* Wallet Connection */}
//                 {!isConnected ? (
//                     <div className="row mb-4 g-3">
//                         <div className="col-md-12">
//                             <div className="card shadow-sm p-3">
//                                 <button className="btn btn-primary" onClick={connectWallet}>
//                                     Connect Wallet
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <>
//                         {/* Action Components */}
//                         <div className="row mb-4 g-3">
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <RegisterCandidate />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <PostJob />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <VerifyCandidate />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <SendOffer />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <AcceptOffer />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Toggle Buttons */}
//                         <hr className="my-4" />
//                         <div className="text-center">
//                             <button
//                                 className="btn btn-outline-primary m-2"
//                                 onClick={() => setShowCandidates(!showCandidates)}
//                             >
//                                 {showCandidates ? "Hide" : "View"} Registered Candidates
//                             </button>
//                             {showCandidates && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewCandidates />
//                                 </div>
//                             )}

//                             <button
//                                 className="btn btn-outline-success m-2"
//                                 onClick={() => setShowJobs(!showJobs)}
//                             >
//                                 {showJobs ? "Hide" : "View"} Posted Jobs
//                             </button>
//                             {showJobs && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewJobs />
//                                 </div>
//                             )}

//                             <button
//                                 className="btn btn-outline-warning m-2"
//                                 onClick={() => setShowOffers(!showOffers)}
//                             >
//                                 {showOffers ? "Hide" : "View"} Offers Provided
//                             </button>
//                             {showOffers && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewOffers />
//                                 </div>
//                             )}

//                             <button
//                                 className="btn btn-outline-info m-2"
//                                 onClick={() => setShowVerified(!showVerified)}
//                             >
//                                 {showVerified ? "Hide" : "View"} Verified Applicants
//                             </button>
//                             {showVerified && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewVerifiedApplicants />
//                                 </div>
//                             )}
//                         </div>
//                     </>
//                 )}
//             </div>
//         </Web3Provider>
//     );
// }

// export default App;









// import React, { useEffect, useState } from "react";
// import { Web3Provider } from "./context/Web3Context";
// import RegisterCandidate from "./components/RegisterCandidate";
// import PostJob from "./components/PostJob";
// import VerifyCandidate from "./components/VerifyCandidate";
// import SendOffer from "./components/SendOffer";
// import AcceptOffer from "./components/AcceptOffer";
// import ViewCandidates from "./components/ViewCandidates";
// import ViewJobs from "./components/ViewJobs";
// import ViewOffers from "./components/ViewOffers";
// import ViewVerifiedApplicants from "./components/ViewVerifiedApplicants";

// function App() {
//     const [isConnected, setIsConnected] = useState(false);
//     const [showCandidates, setShowCandidates] = useState(false);
//     const [showJobs, setShowJobs] = useState(false);
//     const [showOffers, setShowOffers] = useState(false);
//     const [showVerified, setShowVerified] = useState(false);

//     useEffect(() => {
//         const checkWalletConnection = async () => {
//             if (window.ethereum) {
//                 try {
//                     const accounts = await window.ethereum.request({ method: "eth_accounts" });
//                     if (accounts.length > 0) {
//                         setIsConnected(true);
//                     }
//                 } catch (err) {
//                     console.error("Failed to check wallet connection:", err);
//                 }
//             }
//         };
//         checkWalletConnection();
//     }, []);

//     const connectWallet = async () => {
//         if (window.ethereum) {
//             try {
//                 const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//                 if (accounts.length > 0) {
//                     setIsConnected(true);
//                 }
//             } catch (err) {
//                 console.error("Wallet connection failed:", err);
//             }
//         } else {
//             alert("MetaMask not detected. Please install it to continue.");
//         }
//     };

//     return (
//         <Web3Provider>
//             <div className="container py-4">
//                 <div className="text-center mb-4">
//                     <h1 className="text-primary">E-Hiring DApp</h1>
//                     <p className="text-muted">Blockchain-powered recruitment system</p>
//                 </div>

//                 {!isConnected ? (
//                     <div className="text-center">
//                         <button className="btn btn-primary" onClick={connectWallet}>
//                             Connect Wallet to Continue
//                         </button>
//                     </div>
//                 ) : (
//                     <>
//                         {/* Action Components */}
//                         <div className="row mb-4 g-3">
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <RegisterCandidate />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <PostJob />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <VerifyCandidate />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <SendOffer />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="card shadow-sm p-3">
//                                     <AcceptOffer />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Toggle Buttons */}
//                         <hr className="my-4" />
//                         <div className="text-center">
//                             <button
//                                 className="btn btn-outline-primary m-2"
//                                 onClick={() => setShowCandidates(!showCandidates)}
//                             >
//                                 {showCandidates ? "Hide" : "View"} Registered Candidates
//                             </button>
//                             {showCandidates && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewCandidates />
//                                 </div>
//                             )}

//                             <button
//                                 className="btn btn-outline-success m-2"
//                                 onClick={() => setShowJobs(!showJobs)}
//                             >
//                                 {showJobs ? "Hide" : "View"} Posted Jobs
//                             </button>
//                             {showJobs && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewJobs />
//                                 </div>
//                             )}

//                             <button
//                                 className="btn btn-outline-warning m-2"
//                                 onClick={() => setShowOffers(!showOffers)}
//                             >
//                                 {showOffers ? "Hide" : "View"} Offers Provided
//                             </button>
//                             {showOffers && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewOffers />
//                                 </div>
//                             )}

//                             <button
//                                 className="btn btn-outline-info m-2"
//                                 onClick={() => setShowVerified(!showVerified)}
//                             >
//                                 {showVerified ? "Hide" : "View"} Verified Applicants
//                             </button>
//                             {showVerified && (
//                                 <div className="card p-3 my-3 shadow-sm">
//                                     <ViewVerifiedApplicants />
//                                 </div>
//                             )}
//                         </div>
//                     </>
//                 )}
//             </div>
//         </Web3Provider>
//     );
// }

// export default App;
