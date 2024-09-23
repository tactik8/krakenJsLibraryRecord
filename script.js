import { KrThing, KrProperty, KrPropertyValue } from "./src/index.js";
import { krakenHelpers as k } from 'krakenhelpers'




let thing = new KrThing("ItemList");

  thing.p.add("name", "List 1");

  thing.list.add({
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing1",
                    name: "thing1",
  });

  thing.list.add({
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing2",
                    name: "thing2",
  });

  thing.list.add({
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing3",
                    name: "thing3",
  });


//console.log(thing.json)
thing.l.insertBefore({"@type": "Thing",
                         "@id": "thing3"}, {"@type": "Thing",
                        "@id": "thing1"})

console.log(thing.json)