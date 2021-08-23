
var text = `<root>
  <details>
    <songName>Radhe Radhe</songName>
    <length>5</length>
    <Singer>Gourav krishna</Singer>
  </details>
  <details>
    <songName>Teri ummed </songName>
    <length>3</length>
    <Singer>kishore Kumar</Singer>
  </details>
  <details>
    <songName>Pal Pal Dil ke Pass</songName>
    <length>4</length>
    <Singer>Lata MAngeshkar and kishore Kumar</Singer>
  </details>
  <details>
    <songName>Aane se Uske</songName>
    <length>4</length>
    <Singer>Mohammad Rafi</Singer>
  </details>
</root>`

var xmlParser = new DOMParser();
var myObj = xmlParser.parseFromString(text,"text/xml");
console.log(myObj);