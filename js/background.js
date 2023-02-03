class Background {
    constructor() {
        this.configuration = {};
        chrome.runtime.setUninstallURL("")
        chrome.runtime.onInstalled.addListener(function (details) {
            if (details.reason == "install") {
                chrome.storage.local.set({
                    uid:  (new Date()).getTime(),
                    date_install: (new Date()).getTime(),
                    is_enable: true,
                    is_sound: true,
                    stickers: [],
                    position: "fixed",
                    collections: {
                        "noob-pack": {
                            "name": "Noob Pack",
                            "link": "noob-pack",
                            "id": 1,
                            "collectionImage": "/cdn/stickers/2.png",
                            "image": "chrome-extension://jhajnkdohbhjfffcdlchmmicikobmiaj/collection/instr/weapon.png",
                            "fire": "chrome-extension://jhajnkdohbhjfffcdlchmmicikobmiaj/collection/instr/hand_action.png",
                            "cursor": "chrome-extension://jhajnkdohbhjfffcdlchmmicikobmiaj/collection/instr/cursor.png",
                            "sound": "chrome-extension://jhajnkdohbhjfffcdlchmmicikobmiaj/collection/instr/sound.mp3",
                            "holeStart": 1,
                            "items": {
                                "1": {
                                    "name": "Bumble Bee",
                                    "id": 1,
                                    "image": "https://mystickermania.com/cdn/stickers/2.png",
                                    "previewImage": "https://mystickermania.com/cdn/stickers/2.png"
                                },
                                "2": {
                                    "name": "Donut Love",
                                    "id": 2,
                                    "image": "https://mystickermania.com/cdn/stickers/3.png"
                                },
                                "5": {
                                    "name": "Odd future logo",
                                    "id": 5,
                                    "image": "https://mystickermania.com/cdn/stickers/6.png"
                                },
                                "7": {
                                    "name": "Nasa Logo",
                                    "id": 7,
                                    "image": "https://mystickermania.com/cdn/stickers/8.png"
                                },
                                "8": {
                                    "name": "Love emoji sticker",
                                    "id": 8,
                                    "image": "https://mystickermania.com/cdn/stickers/9.png"
                                },
                                "9": {
                                    "name": "80's roller skates",
                                    "id": 9,
                                    "image": "https://mystickermania.com/cdn/stickers/10.png"
                                },
                                "11": {
                                    "name": "Watermelon",
                                    "id": 11,
                                    "image": "https://mystickermania.com/cdn/stickers/12.png"
                                },
                                "12": {
                                    "name": "Pikachu with white background",
                                    "id": 12,
                                    "image": "https://mystickermania.com/cdn/stickers/13.png"
                                },
                                "13": {
                                    "name": "Bart Simpson Green",
                                    "id": 13,
                                    "image": "https://mystickermania.com/cdn/stickers/14.png"
                                },
                                "14": {
                                    "name": "Chrome T-Rex",
                                    "id": 14,
                                    "image": "https://mystickermania.com/cdn/stickers/15.png"
                                },
                                "15": {
                                    "name": "Obey",
                                    "id": 15,
                                    "image": "https://mystickermania.com/cdn/stickers/16.png"
                                },
                                "16": {
                                    "name": "Idea",
                                    "id": 16,
                                    "image": "https://mystickermania.com/cdn/stickers/17.png"
                                },
                                "17": {
                                    "name": "Kawaii",
                                    "id": 17,
                                    "image": "https://mystickermania.com/cdn/stickers/18.png"
                                },
                                "18": {
                                    "name": "Princess of the Upstate Kingdom",
                                    "id": 18,
                                    "image": "https://mystickermania.com/cdn/stickers/19.png"
                                },
                                "19": {
                                    "name": "Heart",
                                    "id": 19,
                                    "image": "https://mystickermania.com/cdn/stickers/20.png"
                                },
                                "20": {
                                    "name": "Red Fox",
                                    "id": 20,
                                    "image": "https://mystickermania.com/cdn/stickers/21.png"
                                },
                                "21": {
                                    "name": "Heart Cat",
                                    "id": 21,
                                    "image": "https://mystickermania.com/cdn/stickers/22.png"
                                },
                                "22": {
                                    "name": "Lord Alien",
                                    "id": 22,
                                    "image": "https://mystickermania.com/cdn/stickers/23.png"
                                },
                                "25": {
                                    "name": "Alien Peace",
                                    "id": 25,
                                    "image": "https://mystickermania.com/cdn/stickers/26.png"
                                },
                                "26": {
                                    "name": "Cute ghost sticker",
                                    "id": 26,
                                    "image": "https://mystickermania.com/cdn/stickers/27.png"
                                },
                                "27": {
                                    "name": "Mickey Rock Hand Colorful Sticker",
                                    "id": 27,
                                    "image": "https://mystickermania.com/cdn/stickers/28.png"
                                },
                                "28": {
                                    "name": "Sticker Dog",
                                    "id": 28,
                                    "image": "https://mystickermania.com/cdn/stickers/29.png"
                                },
                                "29": {
                                    "name": "Drake Drizzi Raper",
                                    "id": 29,
                                    "image": "https://mystickermania.com/cdn/stickers/30.png"
                                },
                                "30": {
                                    "name": "Popcorn",
                                    "id": 30,
                                    "image": "https://mystickermania.com/cdn/stickers/31.png"
                                },
                                "32": {
                                    "name": "Gravity Falls Mabel Pines",
                                    "id": 32,
                                    "image": "https://mystickermania.com/cdn/stickers/33.png"
                                },
                                "33": {
                                    "name": "Sticker medical patch.",
                                    "id": 33,
                                    "image": "https://mystickermania.com/cdn/stickers/34.png"
                                },
                                "34": {
                                    "name": "Mario Sticker Star",
                                    "id": 34,
                                    "image": "https://mystickermania.com/cdn/stickers/35-512x512.png"
                                },
                                "35": {
                                    "name": "Pizza",
                                    "id": 35,
                                    "image": "https://mystickermania.com/cdn/stickers/36.png"
                                },
                                "36": {
                                    "name": "Sticker Adventure Time",
                                    "id": 36,
                                    "image": "https://mystickermania.com/cdn/stickers/37.png"
                                },
                                "37": {
                                    "name": "The Infinity Gauntlet",
                                    "id": 37,
                                    "image": "https://mystickermania.com/cdn/stickers/38.png"
                                },
                                "38": {
                                    "name": "SpiderMan",
                                    "id": 38,
                                    "image": "https://mystickermania.com/cdn/stickers/39.png"
                                },
                                "39": {
                                    "name": "Pacman",
                                    "id": 39,
                                    "image": "https://mystickermania.com/cdn/stickers/40.png"
                                },
                                "40": {
                                    "name": "Loki sticker",
                                    "id": 40,
                                    "image": "https://mystickermania.com/cdn/stickers/41.png"
                                },
                                "41": {
                                    "name": "Jerry Smith from Rick and Morty",
                                    "id": 41,
                                    "image": "https://mystickermania.com/cdn/stickers/42.png"
                                },
                                "42": {
                                    "name": "Mr. Meeseeks from Rick and Morty",
                                    "id": 42,
                                    "image": "https://mystickermania.com/cdn/stickers/43.png"
                                },
                                "43": {
                                    "name": "Sloth Sticker Art Graffiti",
                                    "id": 43,
                                    "image": "https://mystickermania.com/cdn/stickers/44.png"
                                },
                                "44": {
                                    "name": "Morty Smith from Rick and Morty",
                                    "id": 44,
                                    "image": "https://mystickermania.com/cdn/stickers/45.png"
                                },
                                "45": {
                                    "name": "YouTube Logo",
                                    "id": 45,
                                    "image": "https://mystickermania.com/cdn/stickers/46.png"
                                },
                                "46": {
                                    "name": "Sticker Cloud Kawaii",
                                    "id": 46,
                                    "image": "https://mystickermania.com/cdn/stickers/47.png"
                                },
                                "47": {
                                    "name": "Sticker spitfire logo",
                                    "id": 47,
                                    "image": "https://mystickermania.com/cdn/stickers/48.png"
                                },
                                "48": {
                                    "name": "Jake the Dog sticker from Adventure Time",
                                    "id": 48,
                                    "image": "https://mystickermania.com/cdn/stickers/49.png"
                                },
                                "49": {
                                    "name": "Pink Heart In Love sticker",
                                    "id": 49,
                                    "image": "https://mystickermania.com/cdn/stickers/50.png"
                                },
                                "50": {
                                    "name": "Beware of dinosaur sticker",
                                    "id": 50,
                                    "image": "https://mystickermania.com/cdn/stickers/51.png"
                                },
                                "51": {
                                    "name": "Sticker macaron",
                                    "id": 51,
                                    "image": "https://mystickermania.com/cdn/stickers/52.png"
                                },
                                "54": {
                                    "name": "G google",
                                    "id": 54,
                                    "image": "https://mystickermania.com/cdn/stickers/55.png"
                                },
                                "55": {
                                    "name": "Sticker Cartoon Unicorn",
                                    "id": 55,
                                    "image": "https://mystickermania.com/cdn/stickers/56.png"
                                },
                                "56": {
                                    "name": "Waddles the pig sticker from Gravity Falls",
                                    "id": 56,
                                    "image": "https://mystickermania.com/cdn/stickers/57.png"
                                },
                                "57": {
                                    "name": "Rick & Morty Giant Naked Sky Santa sticker",
                                    "id": 57,
                                    "image": "https://mystickermania.com/cdn/stickers/58.png"
                                },
                                "58": {
                                    "name": "Sticker My Little Pony sleeping",
                                    "id": 58,
                                    "image": "https://mystickermania.com/cdn/stickers/59.png"
                                },
                                "59": {
                                    "name": "Cactus",
                                    "id": 59,
                                    "image": "https://mystickermania.com/cdn/stickers/60.png"
                                },
                                "60": {
                                    "name": "Sticker Thanos Cartoon Face",
                                    "id": 60,
                                    "image": "https://mystickermania.com/cdn/stickers/61.png"
                                },
                                "61": {
                                    "name": "Santa Cruz Logo",
                                    "id": 61,
                                    "image": "https://mystickermania.com/cdn/stickers/62.png"
                                },
                                "62": {
                                    "name": "Esketit",
                                    "id": 62,
                                    "image": "https://mystickermania.com/cdn/stickers/63.png"
                                },
                                "64": {
                                    "name": "Royal Air Force logo Bullseye",
                                    "id": 64,
                                    "image": "https://mystickermania.com/cdn/stickers/65.png"
                                },
                                "65": {
                                    "name": "Jake the dog fighting sticker ",
                                    "id": 65,
                                    "image": "https://mystickermania.com/cdn/stickers/66.png"
                                },
                                "66": {
                                    "name": "Sushi Sticker",
                                    "id": 66,
                                    "image": "https://mystickermania.com/cdn/stickers/67.png"
                                },
                                "67": {
                                    "name": "Game Over Sticker",
                                    "id": 67,
                                    "image": "https://mystickermania.com/cdn/stickers/68.png"
                                },
                                "68": {
                                    "name": "Gravity Falls - Waddles Piggy Angel sticker",
                                    "id": 68,
                                    "image": "https://mystickermania.com/cdn/stickers/69.png"
                                },
                                "69": {
                                    "name": "We Bare Bears Sticker",
                                    "id": 69,
                                    "image": "https://mystickermania.com/cdn/stickers/70.png"
                                },
                                "70": {
                                    "name": "Adventure Time - BMO Yey",
                                    "id": 70,
                                    "image": "https://mystickermania.com/cdn/stickers/71.png"
                                },
                                "71": {
                                    "name": "Sticker Arnold",
                                    "id": 71,
                                    "image": "https://mystickermania.com/cdn/stickers/72.png"
                                },
                                "72": {
                                    "name": "Peppa Pig",
                                    "id": 72,
                                    "image": "https://mystickermania.com/cdn/stickers/73.png"
                                },
                                "73": {
                                    "name": "No Entry Sticker",
                                    "id": 73,
                                    "image": "https://mystickermania.com/cdn/stickers/74.png"
                                },
                                "74": {
                                    "name": "Sticker Grey Play Station controller",
                                    "id": 74,
                                    "image": "https://mystickermania.com/cdn/stickers/75.png"
                                },
                                "75": {
                                    "name": "Captain Fluff sticker",
                                    "id": 75,
                                    "image": "https://mystickermania.com/cdn/stickers/76.png"
                                },
                                "77": {
                                    "name": "Pow Sticker",
                                    "id": 77,
                                    "image": "https://mystickermania.com/cdn/stickers/78.png"
                                },
                                "78": {
                                    "name": "Homunculus loxodontus Jake",
                                    "id": 78,
                                    "image": "https://mystickermania.com/cdn/stickers/79.png"
                                },
                                "79": {
                                    "name": "Cat Sticker Love",
                                    "id": 79,
                                    "image": "https://mystickermania.com/cdn/stickers/80.png"
                                },
                                "80": {
                                    "name": "The Kawaii Kitty - Sugarhai",
                                    "id": 80,
                                    "image": "https://mystickermania.com/cdn/stickers/81.png"
                                },
                                "81": {
                                    "name": "Deadpool Sticker",
                                    "id": 81,
                                    "image": "https://mystickermania.com/cdn/stickers/82.png"
                                },
                                "82": {
                                    "name": "Sticker Rainbow with clouds clipart",
                                    "id": 82,
                                    "image": "https://mystickermania.com/cdn/stickers/83.png"
                                },
                                "84": {
                                    "name": "Patrick with wood on head",
                                    "id": 84,
                                    "image": "https://mystickermania.com/cdn/stickers/85.png"
                                },
                                "85": {
                                    "name": "Deadpool Marvel Sticker",
                                    "id": 85,
                                    "image": "https://mystickermania.com/cdn/stickers/86.png"
                                },
                                "86": {
                                    "name": "Sticker Adventure Time - BMO",
                                    "id": 86,
                                    "image": "https://mystickermania.com/cdn/stickers/87.png"
                                },
                                "87": {
                                    "name": "Red ballon sticker",
                                    "id": 87,
                                    "image": "https://mystickermania.com/cdn/stickers/88.png"
                                },
                                "89": {
                                    "name": "Sticker Happy Hippie Foundation",
                                    "id": 89,
                                    "image": "https://mystickermania.com/cdn/stickers/90.png"
                                },
                                "90": {
                                    "name": "Girl skateboarding logo",
                                    "id": 90,
                                    "image": "https://mystickermania.com/cdn/stickers/91.png"
                                },
                                "91": {
                                    "name": "Apple Color logo sticker",
                                    "id": 91,
                                    "image": "https://mystickermania.com/cdn/stickers/92.png"
                                },
                                "92": {
                                    "name": "Quiksilver logo sticker",
                                    "id": 92,
                                    "image": "https://mystickermania.com/cdn/stickers/93.png"
                                },
                                "93": {
                                    "name": "Colorful Skull popart sticker",
                                    "id": 93,
                                    "image": "https://mystickermania.com/cdn/stickers/94.png"
                                },
                                "94": {
                                    "name": "When Your Third Eye Has Seen Too Much Bullshit sticker",
                                    "id": 94,
                                    "image": "https://mystickermania.com/cdn/stickers/95.png"
                                },
                                "95": {
                                    "name": "Pink Strawberry sticker",
                                    "id": 95,
                                    "image": "https://mystickermania.com/cdn/stickers/96.png"
                                },
                                "96": {
                                    "name": "Drake Hotline Bling sticker",
                                    "id": 96,
                                    "image": "https://mystickermania.com/cdn/stickers/97.png"
                                },
                                "97": {
                                    "name": "Minecraft girl Yes! sticker",
                                    "id": 97,
                                    "image": "https://mystickermania.com/cdn/stickers/98.png"
                                },
                                "98": {
                                    "name": "Police 662 sticker",
                                    "id": 98,
                                    "image": "https://mystickermania.com/cdn/stickers/99.png"
                                },
                                "99": {
                                    "name": "MixTape sticker",
                                    "id": 99,
                                    "image": "https://mystickermania.com/cdn/stickers/100.png"
                                },
                                "100": {
                                    "name": "Sticker Enjoi Panda",
                                    "id": 100,
                                    "image": "https://mystickermania.com/cdn/stickers/101.png"
                                },
                                "102": {
                                    "name": "Sticker be hippy",
                                    "id": 102,
                                    "image": "https://mystickermania.com/cdn/stickers/103.png"
                                },
                                "103": {
                                    "name": "Spider-Man OK sticker",
                                    "id": 103,
                                    "image": "https://mystickermania.com/cdn/stickers/104.png"
                                },
                                "104": {
                                    "name": "Rick and Morty one eye Morty",
                                    "id": 104,
                                    "image": "https://mystickermania.com/cdn/stickers/105.png"
                                },
                                "105": {
                                    "name": "Rick and Morty",
                                    "id": 105,
                                    "image": "https://mystickermania.com/cdn/stickers/106.png"
                                },
                                "106": {
                                    "name": "Saturn sticker ",
                                    "id": 106,
                                    "image": "https://mystickermania.com/cdn/stickers/107.png"
                                },

                                "108": {
                                    "name": "Darth Vader in sunglasses Sticker",
                                    "id": 108,
                                    "image": "https://mystickermania.com/cdn/stickers/109.png"
                                },
                                "110": {
                                    "name": "Adidas logo blue Sticker",
                                    "id": 110,
                                    "image": "https://mystickermania.com/cdn/stickers/111.png"
                                },
                                "111": {
                                    "name": "Fox Racing black yellow logo sticker",
                                    "id": 111,
                                    "image": "https://mystickermania.com/cdn/stickers/112.png"
                                },
                                "112": {
                                    "name": "Alien skater kickflip sticker",
                                    "id": 112,
                                    "image": "https://mystickermania.com/cdn/stickers/113.png"
                                },
                                "113": {
                                    "name": "Sticker honeybee",
                                    "id": 113,
                                    "image": "https://mystickermania.com/cdn/stickers/114.png"
                                },
                                "114": {
                                    "name": "Marvel Hydra Sticker",
                                    "id": 114,
                                    "image": "https://mystickermania.com/cdn/stickers/115.png"
                                },
                                "115": {
                                    "name": " Lisa Simpson Hippie sticker",
                                    "id": 115,
                                    "image": "https://mystickermania.com/cdn/stickers/116.png"
                                },
                                "116": {
                                    "name": "Sticker We out here",
                                    "id": 116,
                                    "image": "https://mystickermania.com/cdn/stickers/117.png"
                                },
                                "117": {
                                    "name": "Sticker Pink cat on a skateboard",
                                    "id": 117,
                                    "image": "https://mystickermania.com/cdn/stickers/118.png"
                                },
                                "118": {
                                    "name": "Sticker Island Stone 5815",
                                    "id": 118,
                                    "image": "https://mystickermania.com/cdn/stickers/119.png"
                                },
                                "119": {
                                    "name": "Nike SB",
                                    "id": 119,
                                    "image": "https://mystickermania.com/cdn/stickers/120.png"
                                },
                                "121": {
                                    "name": "Sticker turd",
                                    "id": 121,
                                    "image": "https://mystickermania.com/cdn/stickers/122.png"
                                },
                                "122": {
                                    "name": "Squidward Tentacles Dab sticker ",
                                    "id": 122,
                                    "image": "https://mystickermania.com/cdn/stickers/123.png"
                                },
                                "124": {
                                    "name": "Jerry Sticker from Rick and Morty",
                                    "id": 124,
                                    "image": "https://mystickermania.com/cdn/stickers/125.png"
                                },

                                "126": {
                                    "name": "Minecraft Nope sticker",
                                    "id": 126,
                                    "image": "https://mystickermania.com/cdn/stickers/127.png"
                                },
                                "127": {
                                    "name": "Acid Rick sticker from Rick and Morty",
                                    "id": 127,
                                    "image": "https://mystickermania.com/cdn/stickers/128.png"
                                },
                                "131": {
                                    "name": "Stark Marvel - I work at Stark Industries",
                                    "id": 131,
                                    "image": "https://mystickermania.com/cdn/stickers/132.png"
                                },
                                "132": {
                                    "name": "Adventure Time Lumpy Space Princess smoking sticker",
                                    "id": 132,
                                    "image": "https://mystickermania.com/cdn/stickers/133.png"
                                },
                                "134": {
                                    "name": "Screaming Hand sticker Santa Cruz Skate",
                                    "id": 134,
                                    "image": "https://mystickermania.com/cdn/stickers/135.png"
                                },
                                "135": {
                                    "name": "Elmo Christmas sticker Sesame Street",
                                    "id": 135,
                                    "image": "https://mystickermania.com/cdn/stickers/136.png"
                                },
                                "136": {
                                    "name": "Spitfire Joker US Skateboard sticker",
                                    "id": 136,
                                    "image": "https://mystickermania.com/cdn/stickers/137.png"
                                },
                                "137": {
                                    "name": "Indian Chief sticker",
                                    "id": 137,
                                    "image": "https://mystickermania.com/cdn/stickers/138.png"
                                },
                                "138": {
                                    "name": "Sunflower Hugs sticker",
                                    "id": 138,
                                    "image": "https://mystickermania.com/cdn/stickers/139.png"
                                },
                                "139": {
                                    "name": "Pink Pizza slice sticker",
                                    "id": 139,
                                    "image": "https://mystickermania.com/cdn/stickers/140.png"
                                },
                                "140": {
                                    "name": "Pop art comics \"Boom!\" sticker",
                                    "id": 140,
                                    "image": "https://mystickermania.com/cdn/stickers/141.png"
                                },
                                "142": {
                                    "name": "Ghostbusters logo sticker",
                                    "id": 142,
                                    "image": "https://mystickermania.com/cdn/stickers/143.png"
                                },
                                "144": {
                                    "name": "We Bare Bears Ice Bear \"Honorable Mention\" sticker",
                                    "id": 144,
                                    "image": "https://mystickermania.com/cdn/stickers/145.png"
                                },
                                "145": {
                                    "name": "Free WiFi logo",
                                    "id": 145,
                                    "image": "https://mystickermania.com/cdn/stickers/146.png"
                                },
                                "147": {
                                    "name": "My Little Pony Pinkie Pie laughing sticker",
                                    "id": 147,
                                    "image": "https://mystickermania.com/cdn/stickers/148.png"
                                },
                                "148": {
                                    "name": "Nike black logo",
                                    "id": 148,
                                    "image": "https://mystickermania.com/cdn/stickers/149.png"
                                },
                                "149": {
                                    "name": "Red Dead Redemption 2 round sticker",
                                    "id": 149,
                                    "image": "https://mystickermania.com/cdn/stickers/150.png"
                                },
                                "150": {
                                    "name": "Red Sold sticker",
                                    "id": 150,
                                    "image": "https://mystickermania.com/cdn/stickers/151.png"
                                },
                                "151": {
                                    "name": "USA flag V for Victory sticker",
                                    "id": 151,
                                    "image": "https://mystickermania.com/cdn/stickers/152.png"
                                },
                                "152": {
                                    "name": "USA Flag sticker",
                                    "id": 152,
                                    "image": "https://mystickermania.com/cdn/stickers/153.png"
                                },
                                "153": {
                                    "name": "Canada Flag sticker",
                                    "id": 153,
                                    "image": "https://mystickermania.com/cdn/stickers/154.png"
                                },
                                "154": {
                                    "name": "Biohazard Symbol nuke sticker",
                                    "id": 154,
                                    "image": "https://mystickermania.com/cdn/stickers/155.png"
                                },
                                "155": {
                                    "name": "Supapinziboy Sticker",
                                    "id": 155,
                                    "image": "https://mystickermania.com/cdn/stickers/156.png"
                                },
                                "156": {
                                    "name": "Marvel Mustache Iron Man sticker",
                                    "id": 156,
                                    "image": "https://mystickermania.com/cdn/stickers/157.png"
                                },
                                "157": {
                                    "name": "Hugs and Kisses XOXO Sticker",
                                    "id": 157,
                                    "image": "https://mystickermania.com/cdn/stickers/158.png"
                                },
                                "158": {
                                    "name": "Duck you sticker",
                                    "id": 158,
                                    "image": "https://mystickermania.com/cdn/stickers/159.png"
                                },
                                "159": {
                                    "name": "Black Glasses Sticker",
                                    "id": 159,
                                    "image": "https://mystickermania.com/cdn/stickers/160.png"
                                },
                                "160": {
                                    "name": "My Neighbor Totoro by Victor Vercesi sticker",
                                    "id": 160,
                                    "image": "https://mystickermania.com/cdn/stickers/161.png"
                                },
                                "161": {
                                    "name": "Sketch art Flash sticker",
                                    "id": 161,
                                    "image": "https://mystickermania.com/cdn/stickers/162.png"
                                },
                                "162": {
                                    "name": "Sad eye Pug sticker",
                                    "id": 162,
                                    "image": "https://mystickermania.com/cdn/stickers/163.png"
                                },
                                "163": {
                                    "name": "Spider-Man aware sticker",
                                    "id": 163,
                                    "image": "https://mystickermania.com/cdn/stickers/164.png"
                                },
                                "164": {
                                    "name": "Teal Symbol Of Peace sticker",
                                    "id": 164,
                                    "image": "https://mystickermania.com/cdn/stickers/165.png"
                                },
                                "165": {
                                    "name": "Mini Deadpool in cap sticker",
                                    "id": 165,
                                    "image": "https://mystickermania.com/cdn/stickers/166.png"
                                },
                                "166": {
                                    "name": "Japanese Maneki-neko Cat Demon Santa Cruz sticker",
                                    "id": 166,
                                    "image": "https://mystickermania.com/cdn/stickers/167.png"
                                },
                                "167": {
                                    "name": "Admiral Ackbar \"It's a trap!\" sticker",
                                    "id": 167,
                                    "image": "https://mystickermania.com/cdn/stickers/168.png"
                                },
                                "168": {
                                    "name": "Sticker. The mustache is black. Funny",
                                    "id": 168,
                                    "image": "https://mystickermania.com/cdn/stickers/169.png"
                                },
                                "169": {
                                    "name": "Stormtrooper Hydra Logo",
                                    "id": 169,
                                    "image": "https://mystickermania.com/cdn/stickers/170.png"
                                },
                                "170": {
                                    "name": "Dragon Mario",
                                    "id": 170,
                                    "image": "https://mystickermania.com/cdn/stickers/171.png"
                                },
                                "171": {
                                    "name": "White Diamond Sticker",
                                    "id": 171,
                                    "image": "https://mystickermania.com/cdn/stickers/172.png"
                                },
                                "172": {
                                    "name": "Chop Sticker",
                                    "id": 172,
                                    "image": "https://mystickermania.com/cdn/stickers/173.png"
                                },
                                "174": {
                                    "name": "Breaking Bad Walter White on Skateboard",
                                    "id": 174,
                                    "image": "https://mystickermania.com/cdn/stickers/175.png"
                                },
                                "175": {
                                    "name": "Monster shoes Sticker",
                                    "id": 175,
                                    "image": "https://mystickermania.com/cdn/stickers/176.png"
                                },
                                "177": {
                                    "name": "Star Wars Rebel Alliance Zomby",
                                    "id": 177,
                                    "image": "https://mystickermania.com/cdn/stickers/178.png"
                                },
                                "178": {
                                    "name": "Pink Brain",
                                    "id": 178,
                                    "image": "https://mystickermania.com/cdn/stickers/179.png"
                                },
                                "179": {
                                    "name": "Star Wars Stormtrooper Zomby",
                                    "id": 179,
                                    "image": "https://mystickermania.com/cdn/stickers/180.png"
                                },
                                "180": {
                                    "name": "Star Wars Han Solo Chewbacca Zomby",
                                    "id": 180,
                                    "image": "https://mystickermania.com/cdn/stickers/181.png"
                                },
                                "1689": {
                                    "name": "StickerMania Logo",
                                    "id": 1689,
                                    "image": "https://mystickermania.com/cdn/stickers/1.png"
                                },
                                "2028": {
                                    "name": "Apple Special Event September 2019",
                                    "id": 2028,
                                    "image": "https://mystickermania.com/cdn/stickers/noob_pack/sticker_2028.png"
                                }
                            },
                            "type": 9,
                            "fireTime": 200,
                            "shootRate": 500,
                            "xShift": -100,
                            "yShift": -200,
                            "holeX": -150,
                            "holeY": -20,
                            "holeWidth": 200,
                            "holeHeight": 200
                        },
                        "my": {
                            name: "my",
                            id: (new Date()).getTime(),
                            link: 'my',
                            image: chrome.runtime.getURL(`collection/instr/hand.png`),
                            fire: chrome.runtime.getURL(`collection/instr/hand_action.png`),
                            cursor: chrome.runtime.getURL(`collection/instr/cursor.png`),
                            sound: chrome.runtime.getURL(`collection/instr/sound.mp3`),
                            holeStart: 0,
                            items: {},
                            "type": 9,
                            "fireTime": 200,
                            "shootRate": 500,
                            "xShift": -100,
                            "yShift": -200,
                            "holeX": -150,
                            "holeY": -20,
                            "holeWidth": 200,
                            "holeHeight": 200
                        }
                    }
                });
                chrome.tabs.create({url: `https://mystickermania.com/success?utm_source=ext&utm_medium=install&utm_campaign=install_succesfull`});

            } else if (details.reason == "update") {
                chrome.storage.local.remove(["CAS", "RAS", "Iscroll", "StickersAll", "stickersAdded"], () => {});
                chrome.storage.local.set({
                    uid:  (new Date()).getTime(),
                    date_install: (new Date()).getTime(),
                    stickers: [],
                    is_enable: true,
                    is_sound: true
                });
                chrome.tabs.create({url: `https://mystickermania.com/success?utm_source=ext&utm_medium=install&utm_campaign=install_succesfull`});

            }
        }.bind(this));
        chrome.storage.onChanged.addListener(function (changes, namespace) {
            chrome.storage.local.get(null, function (items) {
                this.configuration = items;
            }.bind(this));
        }.bind(this));

        chrome.storage.local.get(null, function (items) {
            this.configuration = items;
            this.init();
        }.bind(this))
    }

    init() {
        chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
            if (request.action == "isInstalled") {
                return sendResponse({
                    configurations: this.configuration
                });
            }

            if (request.action == 'get_config') {
                chrome.storage.local.get(null, function (items) {
                    return sendResponse(items);
                }.bind(this));
            }
            if (request.action == 'set_config') {
                chrome.storage.local.set(request.data);
                return sendResponse({status: true});
            }

            if (request.action == 'set_config_sync') {
                chrome.storage.sync.set(request.data);
                return sendResponse({status: true});
            }
            if (request.action == 'upload') {
                let tmpid = new Date().getTime();
                this.configuration.collections.my.items[tmpid] = {};
                this.configuration.collections.my.items[tmpid] = {
                    name: (new Date()).getTime(),
                    id: (new Date()).getTime(),
                    image: request.image
                };
                this.configuration.collections.my.holeStart = 0;
                chrome.storage.local.set({collections: this.configuration.collections});
            }
        }.bind(this));


        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.action === 'isLoaded') {
                return;
            }
            if (request.message) {
                let tmpid = new Date().getTime();
                this.configuration.collections.my.items[tmpid] = {};
                this.configuration.collections.my.items[tmpid] = {
                    name: (new Date()).getTime(),
                    id: (new Date()).getTime(),
                    image: request.image
                };

                this.configuration.collections.my.holeStart = 0;
                chrome.storage.local.set({collections: this.configuration.collections});
            }
            if (request.click_upload) {
                chrome.tabs.sendMessage(sender.tab.id, {is_upload: true}, function (response) {
                    //sendResponse({t: 1})
                });
            }
            if (request.get_sound) {
                sendResponse(this.configuration.sound_off);
            } else if (request.set_sound) {
                if (request.set_sound == 'on') {
                    chrome.storage.local.set({sound_off: false});
                } else {
                    chrome.storage.local.set({sound_off: true});
                }
            }
        }.bind(this));
    }
}
new Background();


