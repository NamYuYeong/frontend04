const str=`
<div class="layer_pop_wrap w490" id="basketOption" style="z-index: 999;">
</div>
`
const firstDel = str.substring(2, str.length-1);
console.log(firstDel);
const lastDel = firstDel.substring(0, firstDel.length-1);
console.log(lastDel);

const midString1= lastDel.indexOf('>');
const restr1 =lastDel.replace("</", " "); // > 를 공백으로 바꾸기
console.log(restr1);

const reStr = lastDel.replace('class', "test");
console.log(reStr);

const attrAry = reStr.split(" ");
console.log(attrAry);