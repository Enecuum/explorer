(function() {
	let POSInfoStorage = [
		{
			posId: 'some-staking-provider-id',
			webSite: 'https://somePOSWebSite.com',
			media: {                            
                facebook: 'https://www.facebook.com/some-staking-provider',
                twitter: 'https://twitter.com/some-staking-provider',
                medium: 'https://medium.com/some-staking-provider',
                github: 'https://github.com/some-staking-provider',
                forklog: 'https://hub.forklog.com/some-staking-provider',
                bitcointalk: 'https://bitcointalk.org/some-staking-provider',
                linkedin: 'https://www.linkedin.com/some-staking-provider',
                youtube: 'https://www.youtube.com/some-staking-provider',
                qq: 'https://qm.qq.com/some-staking-provider',
                weixin: 'https://weixin.qq.com/some-staking-provider',
                telegram: 'https://t.me/some-staking-provider'
            },
            descriptionLocaleStringArray: {
                en: 'EN text about some Staking provider',
            	de: 'DE text about some Staking provider',
                fr: 'FR text about some Staking provider',
                ru: 'RU text about some Staking provider',
                pt: 'PT text about some Staking provider',
                vi: 'VI text about some Staking provider',
                in: 'IN text about some Staking provider',
                tr: 'TR text about some Staking provider'
            }             
		},
		{
			posId: 'another-staking-provider-id',
			webSite: 'https://anotherPOSWebSite.com',
            media: {                            
                facebook: 'https://www.facebook.com/another-staking-provider',
                twitter: 'https://twitter.com/another-staking-provider',
                medium: 'https://medium.com/another-staking-provider',
                github: 'https://github.com/another-staking-provider',
                forklog: 'https://hub.forklog.com/another-staking-provider',
                bitcointalk: 'https://bitcointalk.org/another-staking-provider',
                linkedin: 'https://www.linkedin.com/another-staking-provider',
                youtube: 'https://www.youtube.com/another-staking-provider',
                qq: 'https://qm.qq.com/another-staking-provider',
                weixin: 'https://weixin.qq.com/another-staking-provider',
                telegram: 'https://t.me/another-staking-provider'
            },
            descriptionLocaleStringArray: {
                en: 'EN text about another Staking provider',
                de: 'DE text about another Staking provider'
            }             
		},
        {
            posId: '0dc30e84a6be4dff923a84c7511006e195531817c5b54650a42f6fcdc6ebc253',
            webSite: 'https://genesislab.net',
            media: {
                twitter: 'https://twitter.com/genesislab_net',
                github: 'https://github.com/genesis-lab-team',
                telegram: 'https://t.me/GenesisLab_EN'
            },
            descriptionLocaleStringArray: {
                en: 'Genesis Lab is a blockchain-focused development company and trusted Proof-of-Stake validator to comfortably stake your coins and earn rewards with Enecuum, Near, Cosmos, Polkadot, IRIS, Kusama, Kava, Terra and other networks.'
            }
        }
	];
	window.POSInfoStorageENQ = POSInfoStorage;
})();