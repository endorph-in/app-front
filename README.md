# 🏃‍♂️ Endorphin - Fitness Challenge DApp Frontend

A decentralized fitness challenge platform where users can stake on themselves and earn rewards by completing fitness goals. Built with Next.js, RainbowKit, and wagmi.

## 🔗 Quick Links

- **🚀 Live Demo**: [Endorphin App](https://app-front-swart.vercel.app)
- **🎥 Demo Video**: [Watch on YouTube](https://www.youtube.com/watch?v=GK_6HG5MuQM&ab_channel=Endorphin32)
- **📚 Documentation**: [Project Notion](https://www.notion.so/Endorphines-25fb26df980e805cb30ce7861eeb1887)
- **⚙️ Backend Repository**: [Endorphin Backend](https://github.com/orgs/endorph-in/repositories)

## 🌟 Features

- **🎯 Fitness Challenges**: Join various fitness challenges and stake USDC on yourself
- **💰 Escrow System**: Secure staking mechanism with smart contracts
- **📱 Mobile-First Design**: Optimized for mobile with desktop support
- **🔗 Web3 Integration**: Connect with MetaMask and other wallets via RainbowKit
- **🏆 Rewards System**: Earn rewards for completing challenges
- **⚡ Real-time Updates**: Live progress tracking and updates

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd app-front
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Network Configuration
   NEXT_PUBLIC_USE_TESTNET=true
   
   # Contract Addresses (replace with your deployed contracts)
   NEXT_PUBLIC_USDC_ADDRESS=your_usdc_contract_address
   NEXT_PUBLIC_ESCROW_ADDRESS=your_escrow_contract_address
   
   # WalletConnect Project ID (get from https://cloud.walletconnect.com/)
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
   ```
   
   **Note**: Contact the development team for the actual contract addresses and configuration values.

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎮 How to Use

### For Beginners

1. **Connect Your Wallet**
   - Click on the "Connect Wallet" card
   - Choose your preferred wallet (MetaMask recommended)
   - Approve the connection

2. **Switch to Base Sepolia Testnet**
   - The app will automatically suggest Base Sepolia
   - Add the network to your wallet if needed:
     - Network Name: `Base Sepolia`
     - RPC URL: `https://sepolia.base.org`
     - Chain ID: `84532`
     - Currency: `ETH`

3. **Get Testnet Tokens**
   - Get testnet ETH from [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-sepolia-faucet)
   - Get testnet USDC (for demo purposes)

4. **Join a Challenge**
   - Browse available challenges on the Pools page
   - Click "Join Challenge"
   - Enter your stake amount in USDC
   - Confirm the transaction

5. **Track Progress**
   - Monitor your challenges in the Goals section
   - View statistics and rewards in the Stats section


### Wallet Integration
- Support for multiple wallets via RainbowKit
- Automatic network switching
- Force disconnect functionality for troubleshooting

## 🔧 Development

### Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with ❤️ by the Endorphin team