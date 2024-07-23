// u can find this code on discordjs website
// and it makes u extract or get ur discord token from the browser 
// and of course u should be logged in in a browser

//Run code (Discord Console - [Ctrl + Shift + I])


window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    req => {
      if (!req.c) return;
      for (const m of Object.keys(req.c)
        .map(x => req.c[x].exports)
        .filter(x => x)) {
        if (m.default && m.default.getToken !== undefined) {
          return copy(m.default.getToken());
        }
        if (m.getToken !== undefined) {
          return copy(m.getToken());
        }
      }
    },
  ]);
  console.log('%cWorked!', 'font-size: 50px');
  console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');

  // then check your clipboard