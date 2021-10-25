(function() {
	let explorerConfig = {
        theme: 'white',
        tokenName: 'ENQ',
        tokenHash: '0000000000000000000000000000000000000000000000000000000000000000',
        favicon: 'assets/images/favicon_en.ico',
        tokenLogoFileLink: 'logo-white.png',
        logoLinkTarget: 'https://enecuum.com',                    
        showExchangesSection: true,
        menuItemsVisibility: {
            showWallet: true,
            showROICalc: true,
            showHowToSwap: true
        },
        externalLinks: {
            topMenuItemsLinks: {
                walletLink: 'https://wallet.enecuum.com',
            },
            peerMapURL: 'https://pulse2.enecuum.com/',
            documents: {
                whitepaper: 'https://enecuum.com/pdf/pp_en.pdf',
            },
            projectMedia: {                            
                // facebook: 'https://www.facebook.com/enecuum.EN/?ref=bookmarks',
                twitter: 'https://twitter.com/enq_enecuum',
                medium: 'https://blog.enecuum.com/',
                github: 'https://github.com/Enecuum',
                forklog: 'https://hub.forklog.com/companies/enecuum/',
                bitcointalk: 'https://bitcointalk.org/index.php?topic=2939909.0;topicseen',
                linkedin: 'https://www.linkedin.com/company/enecuum-limited/',
                youtube: 'https://www.youtube.com/channel/UCyZqNfzK_PP82nkAVOlmN4Q',
                qq: 'https://qm.qq.com/cgi-bin/qm/qr?k=YfdokyjJnlKl0eAuhVXEc6JtVsoKnxvI&authKey=6WpHwP4Cu/kAAyPyVuBWZeQCjhEyijvLyGf6Jj6P7f9LVCe/9ZZC7YIfRtudjD23&noverify=0',
                weixin: 'https://weixin.qq.com/g/AwYAAJdSThUYHIJmetSinRGfcwtrkRovBmLZZr5moi0UXRIW56Me4ts56gByaeYU',
                telegram: 'https://t.me/Enecuum_EN'
            }
        },
        pagesSectionsVisibility: {
            showFullNodesCountCard: true,
            showSBlocks: true,
            showROICalc: true,
            showExchangesSection: true,
            showCurrencyToUSDAccountDetails: true,
            showTestNetDisclaimer: false,
            showDropFarms: false,
            showEnexPools: false
        },
        bannedAccs: [
            "036808ae1adb7604b52345694723df6b09853e9e43105add144604d382951b0df5",
            "039099794d26438ceff314524d40f96003099ba4cd0b3419062f85df32792ee139",
            "033bf7f0aabfcc5150ca32edab63062f527a0bc47b71a1ba58759c8527dc6647fa",
            "03422ba778183fe11170f39034153343ae329c5f4781262588347b53e137cd8136",
            "039a2090d69ba1d09f3dbada9b8e1cc4d30ec3188d007fa43ee2199deb50f56e8a",
            "0283101404bec6696159d3fafc2bdd8c9a5e142735ce47cbd6d053a32fd0c4fd08",
            "03b75312c96e2dbaa107fdf449377bbd049dd27d3dfec7194371c059702a39ce01",
            "02218337ec2c7bebb92497244344e5660e11fd832135a47b0eb69b688623e91c1c",
            "03586a61df7b01c620cda8bd2a0a7f7b3089d17b76e942b498a51089cca38d63d5",
        ],
        POSChallenge: {
            on: true,  
            address: '03fd7ed9000c1c3bd65fdfed52a1136c59c39f966d3a315ee54c6ea2a93eb930ee'
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
