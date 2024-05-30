


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test() {
    var k = new KrThing();
   

    k.record = {
            "@type": "ItemList",
            "@id": "Itemlist1",
            "name": "Itemlist1",
            "listItemElement": [
                {
                    "@type": "ListItem",
                    "@id": "62bd229b-00c3-410b-bdf0-0ed285ca9d40",
                    "item": "0",
                    "position": 0,
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "181e09d8-7ce7-4104-a355-042e0de8740b"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "181e09d8-7ce7-4104-a355-042e0de8740b",
                    "item": "1",
                    "position": 1,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "62bd229b-00c3-410b-bdf0-0ed285ca9d40"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "0eb211bc-dc79-4992-81ee-63286ca158a7"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "0eb211bc-dc79-4992-81ee-63286ca158a7",
                    "item": "2",
                    "position": 2,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "181e09d8-7ce7-4104-a355-042e0de8740b"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "c429de0c-86a8-4003-b422-12be7393a03a"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "c429de0c-86a8-4003-b422-12be7393a03a",
                    "item": "3",
                    "position": 3,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "0eb211bc-dc79-4992-81ee-63286ca158a7"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "650f96b9-2f54-4fd4-90b4-404d85a20589"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "650f96b9-2f54-4fd4-90b4-404d85a20589",
                    "item": "4",
                    "position": 4,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "c429de0c-86a8-4003-b422-12be7393a03a"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "e26b7fc5-4ba5-4d3f-9555-f63fa435fc71"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "e26b7fc5-4ba5-4d3f-9555-f63fa435fc71",
                    "item": "5",
                    "position": 5,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "650f96b9-2f54-4fd4-90b4-404d85a20589"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "c3e47480-384c-44a0-b21e-a834e7937ac0"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "c3e47480-384c-44a0-b21e-a834e7937ac0",
                    "item": "6",
                    "position": 6,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "e26b7fc5-4ba5-4d3f-9555-f63fa435fc71"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "91dc731a-e252-4727-bb92-25c795486687"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "91dc731a-e252-4727-bb92-25c795486687",
                    "item": "7",
                    "position": 7,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "c3e47480-384c-44a0-b21e-a834e7937ac0"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "75aa6758-6336-4149-a210-14a45ddc4b60"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "75aa6758-6336-4149-a210-14a45ddc4b60",
                    "item": "8",
                    "position": 8,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "91dc731a-e252-4727-bb92-25c795486687"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "f66a2ea4-b228-4e60-a076-56e62c2a305a"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "f66a2ea4-b228-4e60-a076-56e62c2a305a",
                    "item": "9",
                    "position": 9,
                    "previousItem": {
                        "@type": "ListItem",
                        "@id": "75aa6758-6336-4149-a210-14a45ddc4b60"
                    }
                }
            ]
        }
   
    // Test properties
    console.log(k.things)
}

test();
