import { KrThing } from "./kraken_record/kraken_record.js";

function test() {
    var k = new KrThing();
    k.record = {
        "@type": "person",
        "@id": "person_1",
        givenName: "givenName_1",
        familyName: "familyName_1",
        email: "test@test.com",
        telephone: "1-514-111-2222",
        hasOccupation: {
            "@type": "Occupation",
            name: "occupation_1",
        },
        worksfor: {
            "@type": "organization",
            name: "test_org_1",
            url: "https://www.test.com",
            other: [
                {
                    "@type": "person",
                    "@id": "person_2",
                    givenName: "givenName_2",
                },
                {
                    "@type": "person",
                    "@id": "person_3",
                    givenName: "givenName_3",
                },
            ],
        },
    };

    // Test properties

    for (let t of k.things) {
        console.log(t.record_type);
    }
}

test();
