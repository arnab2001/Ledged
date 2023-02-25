# DIVERSION 2k23 - Ledged

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IRSHIT033/Hype-The-Hike/">
    <img src="https://user-images.githubusercontent.com/63441472/221374116-f811bcfd-d878-480c-ae07-80909064296d.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Ledged - Immutable and Decentralized ledgers</h3>
  <a align="center" href="###">Watch Demo Video</a>

  <p align="center">
    Use this readme for getting stared with this project
    <br />
    <a href="https://github.com/arnab2001/Ledged"><strong>docs »</strong></a>
    <br />

    <br />
    <a href="#"> Blog </a>
    .
    <a href="#">Live</a>
    ·
    <a href="https://github.com/arnab2001/ledged/issues">Report Issues</a>
    ·
    <a href="https://github.com/arnab2001/ledged/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
### Screenshots
<div align="center">

![pg12 png](https://user-images.githubusercontent.com/63441472/190886473-d047ad42-00d4-4f1a-82f9-fb357e3c14d9.jpg)


https://user-images.githubusercontent.com/63441472/221375913-a4395e15-231b-4e08-b4d4-eeff78a26482.mp4


https://user-images.githubusercontent.com/63441472/221376076-b5807660-1f6f-4e8f-8f20-27afd96658d1.mp4



</div>


### Inspiration:
- Currently, the ticketing system can't help people reflect on special moments from past events. Hence, NFTs have arrived to make tickets more functional and easy to collect for memories. 
- A tradition-based ticket may be lost or destroyed. 
- Organizers do not get enough security with paper-based tickets thus they can be easily faked.
- With NFTs, you don't need to compromise anymore and the technology benefits both the organizers and users.

### What it does:
- Empowers Community Driven tourism
- In The landing Page user will be able to see **upcoming events, features of our DAPP and contact us section**.
- To join an event, user need to sign-in using **Arcana Auth**.
- To Join A community , User need to go to the **"Join Us"** Sections where all the upcoming events are listed.
- User can select their prefered event ,then choose the activity , after that the user needs to connect  **Metamask Wallet** to Mint their NFT which will act as their identity proof for rest of the event.
- **ThirdWeb SDK** is used to mint NFTs.
- We Used **LightHouse** to store the images of NFTs in **IPFS** network instead of centralized database system.

### Challenges we ran into:
  - **ThirdWeb** is not compatible with Webpack so we had to migrate our codebase in middle of the hackathon.
  - **Arcana's SDKs** and **ThirdWeb SDK** were not build for production so we had to face a lot of bugs.
  -  We had trouble adding metadatas to NFT.
 
### What's Next For Our Project:
- **NFT Marketplace** where one can sell their best travel photographs as NFTs.
- Private NFT using **Arcana**.
- **Expanding for families** too to join us for enjoying the beauty of nature. 

<p align="right">(<a href="#read<img width="191" alt="an_logo_light_temp" src="https://user-images.githubusercontent.com/63441472/190889937-afb28215-5bb5-4115-83d2-f7afb73ef8f8.png">
<me-top">back to top</a>)</p>


### Built With



- <img src = "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" style="margin-top: 40px" height=30px width=30px > **React** - for building the frontend UI <br> 
- <img src = "https://user-images.githubusercontent.com/63441472/190888196-9164551f-eb48-4da6-ab91-db17adad7c73.svg" height=30px width=30px>**Vite** - as Module bundler instead of webpack <br>
- <img src = "https://user-images.githubusercontent.com/63441472/190888540-0feb2866-f3b8-4094-b17f-4e04e16d2b38.jpg" height=40px width=40px > **Lighthouse**-   as __IPFS__ Storage <br>
- <img src = "https://user-images.githubusercontent.com/63441472/190889964-7760f99e-a7c7-4b28-bf44-a1659f7d8b76.png" height=30px width=80px> **Arcana**- for Authentication and storage <br>
- <img src = "https://user-images.githubusercontent.com/63441472/190890398-30a54b65-1e50-46f8-a862-2a929c389fb4.png" height=40px width=40px > **Thirdweb** - for Minting NFTs and providing with a marketplace <br>
- <img src = "https://user-images.githubusercontent.com/63441472/190890501-54045447-d458-4413-a1fa-91a4216bfb44.svg" height=40px width=80px> -  Build on Top of **Polygon** chain <br>
- <img src = "https://user-images.githubusercontent.com/63441472/190896166-4c7b9317-173f-47d7-9b5c-d19c77cf994c.svg" height=40px width=80px> - Deployed in **Spheron**






<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
For setting up your project locally, follow these simple steps.

### Prerequisites

You must have NPM(Node Package Manager) installed  in your system , If you dont we got you covered  

  
  [Install NPM](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
 

### Installation

_How to setup this project_

1. Clone the repo
   ```sh
   git clone https://github.com/IRSHIT033/Hype-The-Hike.git
   ```
3. Install all the NPM packages
   ```sh
   npm install
   ```
4. Create a wallet.json file and add your public and private key
   ```json
   {
    "privateKey": "<private_key>",
    "publicKey": "<public_key>"
    }
    ```
  Then import wallet using the private key, use the following command
  ```sh
  lighthouse-web3 import-wallet ./wallet.json
  ```
5 run 
  ```sh
  npm start dev
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES 
## Usage
<div align="center">
<img src="https://media2.giphy.com/media/UYpelo7WbjZQg0dDQY/200.gif" width="500" height="200" />
</div>
<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap
&nbsp; 
- [x] landing page
- [x] Recent Events
- [x] Login using Arcana
- [x] Join Us / Activity Section
- [x] Mint NFT upon joining
- [x] NFT ticketing
- [x] Intigrate Lighthouse IPFS
- [ ] Private NFT
- [ ] NFT Marketplace



See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing


If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "improvement".
Don't forget to star this project!! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/Feature1`)
3. Commit your Changes (`git commit -m 'Add Feature 1'`)
4. Push to the Branch (`git push origin feature/Feature1`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!


* [NPM](https://www.npmjs.com/)
* React icons

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Express]: https://img.shields.io/badge/Express-35495E?style=for-the-badge&logo=express&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
