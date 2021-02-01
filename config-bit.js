(function() {
	let explorerConfig = {
        theme: 'white',
        tokenName: 'BIT',
        tokenHash: '0000000000000000000000000000000000000000000000000000000000000000',
        favicon: 'assets/images/favicon_en_bit.ico',
        tokenLogoFileLink: 'bit-logo-white.png',
        logoLinkTarget: 'https://mybit.network/',
        showExchangesSection: false,
        menuItemsVisibility: {
            showWallet: true,
            walletLink: 'https://bit-wallet.enecuum.com',
            showROICalc: true,
            showHowToSwap: false
        },
        externalLinks: {
            topMenuItemsLinks: {
                walletLink: 'https://bit-wallet.enecuum.com'
            },

            peerMapURL: 'https://bit.enecuum.com/',
            documents: {
                whitepaper: 'https://enecuum.com/pdf/pp_en.pdf',
            },
            projectMedia: {                            
                twitter: 'https://twitter.com/enq_enecuum',
                telegram: 'https://t.me/Enecuum_EN',
                github: 'https://github.com/Enecuum'
            }
        },
        pagesSectionsVisibility: {
            showFullNodesCountCard: true,
            showSBlocks: true,
            showROICalc: true,
            showExchangesSection: false,
            showCurrencyToUSDAccountDetails: false,
            showTestNetDisclaimer: true
        },
        POSChallenge: {
            on: false,  
            address: '03c91e88967465c44aa2afeab3b87dbeede9bd63dbe4a0121ea02fa3f0f4a4e2a8'
        },        
        themeOptions: { //this is options' storage. themeOptions' properties must be use as 'theme' value ('dark','white', etc.)
            dark: {
                cssName: 'dark-theme.css',
                cssLink: 'assets/css/'
            },
            white: {
                cssName: 'white-theme.css',
                cssLink: 'assets/css/'
            },
            white_blue: {
                cssName: 'white-blue-theme.css',
                cssLink: 'assets/css/'
            }

        }
    }
	window.explorerConfig = explorerConfig;
})();