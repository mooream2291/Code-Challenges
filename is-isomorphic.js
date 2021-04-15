'use strict';

var isIsomorphic = function(s, t) {
  if(s.length != t.length) {
    return false;
  }
  let sMap = {};
  let tMap = {};

  for(let i =0; i < s.lenght; i++){
    let sCharacters = s[i];
    let tCharacters = t[i];

    if(sMap[sCharacters] == undefined) {
      sMap[sCharacters] = tCharacters;
    }
    if(tMap[tCharacters] == undefined) {
      tMap[tCharacters] = tCharacters;
    }
    if(sMap[sCharacters] != tCharacters || tMap[tCharacters] != sMap)
  }
}

