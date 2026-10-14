import test from 'node:test';
import assert from 'node:assert/strict';
import {generate} from '../engine.mjs';
import {validate} from '../storage.mjs';
const item = (id,category,status='Available') => ({id,name:id,category,status,color:'Black',style:'Classic',occasion:'Everyday',season:'All seasons',photo:'data:image/png;base64,AAAA'});
test('outfits respect availability, exclusions, and required pieces',()=>{
 const items=[item('top','Top'),item('pants','Bottom'),item('dirty','Bottom','In laundry'),item('shoe','Shoes'),item('other','Top')];
 const looks=generate(items,{must:'top',exclude:['other']});
 assert.ok(looks.length);for(const look of looks){assert.ok(look.ids.includes('top'));assert.ok(look.ids.includes('pants'));assert.ok(!look.ids.includes('dirty'));assert.ok(!look.ids.includes('other'));}
});
test('one-piece works and cool weather adds outerwear',()=>{
 const looks=generate([item('dress','One-piece'),item('coat','Outerwear')],{temperature:10});
 assert.ok(looks.length);assert.deepEqual(new Set(looks[0].ids),new Set(['dress','coat']));
});
test('incompatible locks and unavailable anchors fail clearly',()=>{
 assert.throws(()=>generate([item('a','Top'),item('b','Top')],{},['a','b']),/one locked/);
 assert.throws(()=>generate([item('a','Top','Archived')],{},['a']),/unavailable/);
});
test('empty closet produces no outfits',()=>assert.deepEqual(generate([]),[]));
test('backup accepts valid data and rejects duplicate IDs or unsafe links',()=>{
 const data={items:[item('top','Top')],looks:[],inspirations:[]};
 assert.equal(validate({version:1,data}),data);
 assert.throws(()=>validate({version:1,data:{...data,items:[...data.items,...data.items]}}),/invalid closet/);
 assert.throws(()=>validate({version:1,data:{...data,inspirations:[{id:'r',title:'Ref',url:'javascript:alert(1)'}]}}),/invalid inspiration/);
});
