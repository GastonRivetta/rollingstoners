(function(){
  var cats=[["Clásicos","clásicos","#fba829","#2a6fc9"],["XXL","xxl","#c1cb30","#8b2f6a"],["Mini","mini","#7c00b0","#e8506a"],["Melody Pops","melody-pops","#f97b30","#c0392b"],["Golosinas","gominolas","#54d0e6","#e8074a"],["Sugar Free","sugar-free","#fba829","#3a8f3a"],["Sour","sour","#c1cb30","#6b8e00"],["Ramo","flower-bouquet","#7c00b0","#ff6fa8"],["Gigantes","gigantes","#f97b30","#e8074a"],["Crazy Dips","crazy-dips","#54d0e6","#7c00b0"],["Foodies","foodies","#fba829","#c0392b"],["Party","party","#c1cb30","#e8074a"],["Magic Cubes","magic-cubes","#7c00b0","#54d0e6"]];
  var t=document.getElementById('cTrack'),f=document.getElementById('fcats'),h='',l='';
  cats.forEach(function(c){
    var u='https://www.chupachups.es/productos?Categor%C3%ADa='+encodeURIComponent(c[1]);
    h+='<a class="cat" href="'+u+'"><div class="c" style="background:'+c[2]+';color:'+c[3]+'"><svg viewBox="0 0 60 150"><use href="#lolli"/></svg></div><h3>'+c[0]+'</h3></a>';
    l+='<li><a href="https://www.chupachups.es/productos#'+c[1]+'"><i>→</i>'+c[0]+'</a></li>';
  });
  t.innerHTML=h;f.innerHTML=l;
  var s={
    ig:'<svg viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" rx="9"/><circle cx="20" cy="20" r="7"/><circle cx="29" cy="11" r="1"/></svg>',
    fb:'<svg viewBox="0 0 40 40"><path d="M22 36V21h5l1-5h-6v-3c0-2 1-3 3-3h3V5h-4c-5 0-7 3-7 7v4h-4v5h4v15z"/></svg>',
    yt:'<svg viewBox="0 0 40 40"><rect x="4" y="9" width="32" height="22" rx="7"/><path d="M17 15l8 5-8 5z"/></svg>',
    x:'<svg viewBox="0 0 40 40"><path d="M6 6l28 28M34 6L6 34"/></svg>',
    tk:'<svg viewBox="0 0 40 40"><path d="M21 6v20a5 5 0 1 1-5-5M21 6c1 5 4 8 9 8"/></svg>'};
  var n=[["Instagram","https://www.instagram.com/chupachups_es/",s.ig],["Facebook","https://www.facebook.com/chupachups.spain/",s.fb],["YouTube","https://www.youtube.com/user/ChupaChupsEs",s.yt],["X","https://x.com/chupachups_esp",s.x],["TikTok","https://www.tiktok.com/@chupachups_es",s.tk]];
  var o=n.map(function(a){return '<a href="'+a[1]+'" aria-label="'+a[0]+'">'+a[2]+'</a>'}).join('');
  document.getElementById('soc1').innerHTML=o;document.getElementById('soc2').innerHTML=o;
})();
