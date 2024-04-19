//import { KrProperty } from './kraken_thing/kraken_record/src/class_property/class_property.js';
import { KrPropertyValue } from './kraken_thing/kraken_record/src/class_propertyValue/class_propertyValue.js';
//import { KrMetadata } from './kraken_thing/kraken_record/src/class_metadata/class_metadata.js';
import { KrThing } from './kraken_thing/kraken_record/src/class_thing/class_thing.js';




console.log('f');


function test(){
        
    
    var input_propertyID = 'name';
    var input_value = new KrThing({ "@type": "person", "@id": "test", "name": "name3" });
    var expected_result = { "@type": "person", "@id": "test", "name": ["name3"] };


    console.log('type', input_value.record_type);
    console.log('t', input_value.getFullRecord());

    var k1 = new KrPropertyValue(input_propertyID, input_value);


    console.log(k1.value);
    
    var actual_result = k1.getFullRecord();

    console.log(actual_result)

    
    //expect(nameProperty.value).toStrictEqual('name2');
    //console.log(nameProperty.values);
   // expect(nameProperty.values.length).toStrictEqual(3);

    
    //console.log(k.getProperty('name').propertyValuesNet[0]);
}
test();

/*



https://gomakethings.com/unit-testing-with-vanilla-js/


npm install --save-dev jest

npm install --save-dev babel-jest @babel/core @babel/preset-env

node --experimental-vm-modules node_modules/.bin/jest

npm run test:unit


need package.json = {
    "devDependencies": {
        "@babel/core": "^7.24.3",
        "@babel/preset-env": "^7.24.3",
        "babel-jest": "^29.7.0",
        "jest": "^29.7.0"
    },
    "scripts": {
        "test:unit": "node --experimental-vm-modules node_modules/.bin/jest"
    },
    "type": "module"

}



 */
