const myMusicList = [
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/989011768&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/currentjoys' title='Current Joys' target='_blank' style='color: #cccccc; text-decoration: none;'>Current Joys</a> · <a href='https://soundcloud.com/currentjoys/american-honey' title='American Honey' target='_blank' style='color: #cccccc; text-decoration: none;'>American Honey</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/298911038&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/hippo-campus' title='Hippo Campus' target='_blank' style='color: #cccccc; text-decoration: none;'>Hippo Campus</a> · <a href='https://soundcloud.com/hippo-campus/way-it-goes-1' title='Way It Goes' target='_blank' style='color: #cccccc; text-decoration: none;'>Way It Goes</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1134042118&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/wallowsmusic' title='Wallows' target='_blank' style='color: #cccccc; text-decoration: none;'>Wallows</a> · <a href='https://soundcloud.com/wallowsmusic/i-dont-want-to-talk' title='I Don&#x27;t Want to Talk' target='_blank' style='color: #cccccc; text-decoration: none;'>I Don&#x27;t Want to Talk</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/372271958&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/theacademic' title='The  Academic' target='_blank' style='color: #cccccc; text-decoration: none;'>The  Academic</a> · <a href='https://soundcloud.com/theacademic/northern-boy-1' title='Northern Boy' target='_blank' style='color: #cccccc; text-decoration: none;'>Northern Boy</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1025038456&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/thisiscoin' title='COIN' target='_blank' style='color: #cccccc; text-decoration: none;'>COIN</a> · <a href='https://soundcloud.com/thisiscoin/hypnotica' title='Hypnotica' target='_blank' style='color: #cccccc; text-decoration: none;'>Hypnotica</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/526716015&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/thisiscoin' title='COIN' target='_blank' style='color: #cccccc; text-decoration: none;'>COIN</a> · <a href='https://soundcloud.com/thisiscoin/cemetery' title='Cemetery' target='_blank' style='color: #cccccc; text-decoration: none;'>Cemetery</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/288639613&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/saintmotel' title='SAINT MOTEL' target='_blank' style='color: #cccccc; text-decoration: none;'>SAINT MOTEL</a> · <a href='https://soundcloud.com/saintmotel/saint-motel-sweet-talk' title='Saint Motel - Sweet Talk' target='_blank' style='color: #cccccc; text-decoration: none;'>Saint Motel - Sweet Talk</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313689260&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/rexorangecounty' title='Rex Orange County' target='_blank' style='color: #cccccc; text-decoration: none;'>Rex Orange County</a> · <a href='https://soundcloud.com/rexorangecounty/sunflower' title='SUNFLOWER' target='_blank' style='color: #cccccc; text-decoration: none;'>SUNFLOWER</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/55492059&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/theneighbourhood' title='theneighbourhood' target='_blank' style='color: #cccccc; text-decoration: none;'>theneighbourhood</a> · <a href='https://soundcloud.com/theneighbourhood/sweater-weather-1' title='&quot;Sweater Weather&quot;' target='_blank' style='color: #cccccc; text-decoration: none;'>&quot;Sweater Weather&quot;</a></div>",
    "<iframe width='100%' height='166' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/6390086&color=%23242424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe><div style='font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;'><a href='https://soundcloud.com/youngthegiant' title='Young the Giant' target='_blank' style='color: #cccccc; text-decoration: none;'>Young the Giant</a> · <a href='https://soundcloud.com/youngthegiant/coughsyrup' title='Cough Syrup' target='_blank' style='color: #cccccc; text-decoration: none;'>Cough Syrup</a></div>",
  ];
  
  const mixList = document.querySelector(".my-songs");
  const button = document.querySelector(".show-list");
  const total = document.querySelector(".text");
  
  //create the remove/hide functionality when clicking the button
  button.addEventListener("click", function () {
      mySongs(myMusicList);
      mixList.classList.remove("hide");
      button.classList.add("hide");
  })
  
  total.innerText = `My current top ${myMusicList.length} songs ✨`;
  
  // function that turns array into html list elements
  const mySongs = function(songs) {
      // this is how we are able to access each string in the list we made
      songs.forEach(function (song, index) {
          let li = document.createElement("li");
          li.classList.add("song");
          li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
  
          mixList.append(li);
      })
  }