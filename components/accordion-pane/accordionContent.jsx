export const accordionContents = [
  {
    title: "Summary",
    content: {
      ul: [
        "Nouns artwork is in the <a> public domain. </a>",
        "One Noun is trustlessly auctioned every 24 hours, forever.",
        "100% of Noun auction proceeds are trustlessly sent to the treasury.",
        "Settlement of one auction kicks off the next.",
        "All Nouns are members of Nouns DAO.",
        "Nouns DAO uses a fork of <a> Compound Governance. </a>",
        "One Noun is equal to one vote.",
        "The treasury is controlled exclusively by Nouns via governance.",
        "Artwork is generative and stored directly on-chain (not IPFS).",
        "No explicit rules exist for attribute scarcity; all Nouns are equally rare.",
        "Nounders receive rewards in the form of Nouns (10% of supply for first 5 years).",
      ],
    },
  },
  {
    title: "Daily auctions",
    content: {
      p: [
        "The Nouns Auction Contract will act as a self-sufficient Noun generation and distribution mechanism, auctioning one Noun every 24 hours, forever. 100% of auction proceeds (ETH) are automatically deposited in the Nouns DAO treasury, where they are governed by Noun owners.",
        "Each time an auction is settled, the settlement transaction will also cause a new Noun to be minted and a new 24 hour auction to begin.",
        "While settlement is most heavily incentivized for the winning bidder, it can be triggered by anyone, allowing the system to trustlessly auction Nouns as long as Ethereum is operational and there are interested bidders.",
      ],
    },
  },
  {
    title: "Blocs DAO",
    content: {
      p: [
        "Nouns DAO utilizes a fork of <a> Compound Governance and </a> is the main governing body of the Nouns ecosystem. The Nouns DAO treasury receives 100% of ETH proceeds from daily Noun auctions. Each Noun is an irrevocable member of Nouns DAO and entitled to one vote in all governance matters. Noun votes are non-transferable (if you sell your Noun the vote goes with it) but delegatable, which means you can assign your vote to someone else as long as you own your Noun.",
      ],
    },
  },
  {
    title: "Governance ‘Slow Start’",
    content: {
      p: [
        "In addition to the precautions taken by Compound Governance, Nounders have given themselves a special veto right to ensure that no malicious proposals can be passed while the Noun supply is low. This veto right will only be used if an obviously harmful governance proposal has been passed, and is intended as a last resort.",
        "Nounders will proveably revoke this veto right when they deem it safe to do so. This decision will be based on a healthy Noun distribution and a community that is engaged in the governance process.",
      ],
    },
  },
  {
    title: "Bloc Traits",
    content: {
      p: [
        "Nouns are generated randomly based Ethereum block hashes. There are no 'if' statements or other rules governing Noun trait scarcity, which makes all Nouns equally rare. As of this writing, Nouns are made up of:",
      ],
      ul: [
        "backgrounds (2)",
        "bodies (30)",
        "accessories (137)",
        "heads (234)",
        "glasses (21)",
      ],
      p: [
        "You can experiment with off-chain Noun generation at the <a> Playground.</a>",
      ],
    },
  },
  {
    title: "On-Chain artwork",
    content: {
      p: [
        "Nouns are stored directly on Ethereum and do not utilize pointers to other networks such as IPFS. This is possible because Noun parts are compressed and stored on-chain using a custom run-length encoding (RLE), which is a form of lossless compression.",
        "The compressed parts are efficiently converted into a single base64 encoded SVG image on-chain. To accomplish this, each part is decoded into an intermediate format before being converted into a series of SVG rects using batched, on-chain string concatenation. Once the entire SVG has been generated, it is base64 encoded.",
      ],
    },
  },
  {
    title: "Bloc Contract",
    content: {
      p: [
        "The Noun Seeder contract is used to determine Noun traits during the minting process. The seeder contract can be replaced to allow for future trait generation algorithm upgrades. Additionally, it can be locked by the Nouns DAO to prevent any future updates. Currently, Noun traits are determined using pseudo-random number generation:",
      ],
      code: "keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))",
      p: [
        "Trait generation is not truly random. Traits can be predicted when minting a Noun on the pending block.",
      ],
    },
  },
  {
    title: "Bloc Reward",
    content: {
      p: [
        "'Nounders' are the group of ten builders that initiated Nouns. Here are the Nounders:",
      ],
      ul: [
        "@cryptoseneca",
        "@supergremplin",
        "@punk4156",
        "@eboyarts",
        "@punk4464",
        "solimander",
        "@dhof",
        "@devcarrot",
        "@TimpersHD",
        "@lastpunk9999",
      ],
    },
  },
];
