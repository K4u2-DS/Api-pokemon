export async function pokenav(local) {
    try {
       const name ="paldea"
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/encounters`);
      if (!res.ok) return null;
      return await res.json();
    } catch (err) {
      console.error('pokenav', err);
      return null;
    }
  }
  // name:"heartgold"
  //url:"https://pokeapi.co/api/v2/version/15/"
  //https://pokeapi.co/api/v2/pokemon/{id or name}/encounters



